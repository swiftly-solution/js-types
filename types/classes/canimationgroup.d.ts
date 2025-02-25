interface CAnimationGroup {
    "Flags": number;
    readonly "DecodeKey": CAnimKeyData;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGroup(ptr_or_class: string|AnySDKClass): CAnimationGroup;