// AppError ----> class

export interface AppError extends Error{
    statusCode : number;
}

 export interface InternalServerError extends AppError {
    name : 'InternalServerError';
}
