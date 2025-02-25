interface CFuncWall {
    "State": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncWall(ptr_or_class: string|AnySDKClass): CFuncWall;