interface CFuncTrainControls {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTrainControls(ptr_or_class: string|AnySDKClass): CFuncTrainControls;