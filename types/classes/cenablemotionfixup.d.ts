interface CEnableMotionFixup {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnableMotionFixup(ptr_or_class: string|AnySDKClass): CEnableMotionFixup;