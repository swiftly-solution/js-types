interface CTriggerHurt {
    "OriginalDamage": number;
    "Damage": number;
    "DamageCap": number;
    "LastDmgTime": number;
    "ForgivenessDelay": number;
    "BitsDamageInflict": number;
    "DamageModel": number;
    "NoDmgForce": boolean;
    "DamageForce": Vector;
    "ThinkAlways": boolean;
    "HurtThinkPeriod": number;
    readonly "OnHurt": CEntityIOOutput;
    readonly "OnHurtPlayer": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerHurt(ptr_or_class: string|AnySDKClass): CTriggerHurt;