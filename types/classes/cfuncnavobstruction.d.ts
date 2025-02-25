interface CFuncNavObstruction {
    "Disabled": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncNavObstruction(ptr_or_class: string|AnySDKClass): CFuncNavObstruction;