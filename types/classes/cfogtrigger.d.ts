interface CFogTrigger {
    readonly "Fog": fogparams_t;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFogTrigger(ptr_or_class: string|AnySDKClass): CFogTrigger;