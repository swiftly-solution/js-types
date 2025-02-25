interface CInfoGameEventProxy {
    "EventName": string;
    "Range": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoGameEventProxy(ptr_or_class: string|AnySDKClass): CInfoGameEventProxy;