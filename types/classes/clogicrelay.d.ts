interface CLogicRelay {
    readonly "OnTrigger": CEntityIOOutput;
    readonly "OnSpawn": CEntityIOOutput;
    "Disabled": boolean;
    "WaitForRefire": boolean;
    "TriggerOnce": boolean;
    "FastRetrigger": boolean;
    "PassthoughCaller": boolean;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicRelay(ptr_or_class: string|AnySDKClass): CLogicRelay;