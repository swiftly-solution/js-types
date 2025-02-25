interface CFogController {
    readonly "Fog": fogparams_t;
    "UseAngles": boolean;
    "ChangedVariables": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFogController(ptr_or_class: string|AnySDKClass): CFogController;