interface CActionComponentUpdater {
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CActionComponentUpdater(ptr_or_class: string|AnySDKClass): CActionComponentUpdater;