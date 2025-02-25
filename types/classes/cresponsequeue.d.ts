interface CResponseQueue {
    readonly "ExpresserTargets": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CResponseQueue(ptr_or_class: string|AnySDKClass): CResponseQueue;