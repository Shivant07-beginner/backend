import {AsyncLocalStorage} from 'async_hooks';

type AsyncLocalStorageType ={
    correlationId : String;
}
export const asyncLocalStorage  = new AsyncLocalStorage<AsyncLocalStorageType>();

export const getCorrelationId = () =>{
    const asyncStore = asyncLocalStorage.getStore();

    return asyncStore ?.correlationId || "Unknow-error-while-creation-correlation-id";
}

