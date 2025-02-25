interface CPlatTrigger {
    readonly "Platform": CFuncPlat;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlatTrigger(ptr_or_class: string|AnySDKClass): CPlatTrigger;