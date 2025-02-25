interface CAimConstraint {
    "UpType": number;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAimConstraint(ptr_or_class: string|AnySDKClass): CAimConstraint;