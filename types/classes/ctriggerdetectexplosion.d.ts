interface CTriggerDetectExplosion {
    readonly "OnDetectedExplosion": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerDetectExplosion(ptr_or_class: string|AnySDKClass): CTriggerDetectExplosion;