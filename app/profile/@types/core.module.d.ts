export declare class HelloWorldService {
    hello(): void;
}
export declare class Consumer {
    private readonly service;
    constructor(service: HelloWorldService);
    execute(): void;
}
export declare class CoreModule {
}
