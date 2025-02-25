interface CParamSpanUpdater {
    readonly "Spans": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParamSpanUpdater(ptr_or_class: string|AnySDKClass): CParamSpanUpdater;