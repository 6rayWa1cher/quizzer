import { Controller, Get, Sse, MessageEvent } from '@nestjs/common';
import { interval, map, Observable, finalize, Subscriber } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SseForwardEvent } from './types/sse_forward_event';
import { Listener } from 'eventemitter2';

@Controller()
export class AppController {
    constructor (
        private event_emitter: EventEmitter2,
    ) { }

    @Sse( 'sse' )
    sse (): Observable<MessageEvent> {
        let listener: Listener | EventEmitter2;
        let listener_fn;
        const ret = new Observable<MessageEvent>( ( subscriber ) => {
            listener_fn = ( event: SseForwardEvent ) => {
                subscriber.next( event );
            };
            listener = this.event_emitter.on( 'sse.forward', listener_fn ) as Listener;
        } );
        return ret.pipe(
            finalize( () => {
                listener.off( 'sse.forward', listener_fn );
            } ),
        );
    }
}
