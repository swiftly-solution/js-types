interface CEmitTagActionUpdater {
    "TagIndex": number;
    "IsZeroDuration": boolean;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEmitTagActionUpdater(ptr_or_class: string|AnySDKClass): CEmitTagActionUpdater;