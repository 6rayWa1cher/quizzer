export interface SseForwardEvent<T = any> {
    type: string;
    data: T;
}
