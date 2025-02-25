interface CTriggerDetectBulletFire {
    "PlayerFireOnly": boolean;
    readonly "OnDetectedBulletFire": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerDetectBulletFire(ptr_or_class: string|AnySDKClass): CTriggerDetectBulletFire;