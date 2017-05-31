declare global  {
    interface Window {
        addMiddleware(middleware: FetchMiddleware): void;
    }
}
export interface FetchMiddleware {
    /**
     * Executed before the request is sent, you may add headers or change the options any way you want
     */
    before?(settings: RequestInfo, options?: RequestInit): void;
    /**
     * Executed when the request was successful, you can implement any logic here, even asynchronous.
     *
     * You can call reject(String reason) if you decide the request should not pass.
     */
    then?(data: Response, settings: RequestInfo, options: RequestInit, reject: (reason: any) => void, next: Function): void;
    /**
     * Executed when the request was successful, you can implement any logic here, even asynchronous.
     *
     * You can call resolve(Object data) if you decide the request should pass.
     */
    fail?(reason: any, settings: RequestInfo, options: RequestInit, resolve: (response: Response) => void, next: Function): void;
}
export {};
