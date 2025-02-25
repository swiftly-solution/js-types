interface CItemDefuser {
    readonly "EntitySpottedState": EntitySpottedState_t;
    "SpotRules": number;
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemDefuser(ptr_or_class: string|AnySDKClass): CItemDefuser;