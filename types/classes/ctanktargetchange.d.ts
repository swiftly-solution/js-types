interface CTankTargetChange {
    "NewTargetName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTankTargetChange(ptr_or_class: string|AnySDKClass): CTankTargetChange;