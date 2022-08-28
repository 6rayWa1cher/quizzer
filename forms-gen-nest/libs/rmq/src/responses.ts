export enum RMQ_CODES {
    OK = 200,
    ERROR_BAD_REQUEST = 400,
    ERROR_NOT_FOUND = 404,
    ERROR_CONFLICT = 409,
    JUST_ERROR = 500,
}

export class RmqResponse<T = any> {
    status: RMQ_CODES;
    data: T;
    constructor ( data: T, status = RMQ_CODES.JUST_ERROR ) {
        this.status = status;
        this.data = data;
    }
}

export class RmqOk<T = any> extends RmqResponse<T> {
    constructor ( data: T ) {
        super( data, RMQ_CODES.OK );
    }
}

export class RmqError<T = any> extends RmqResponse<T> {
    constructor ( data: T, status = RMQ_CODES.JUST_ERROR ) {
        super( data, status );
    }
}
