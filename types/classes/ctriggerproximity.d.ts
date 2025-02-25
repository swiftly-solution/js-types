interface CTriggerProximity {
    readonly "MeasureTarget": CBaseEntity;
    "MeasureTarget1": string;
    "Radius": number;
    "Touchers": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerProximity(ptr_or_class: string|AnySDKClass): CTriggerProximity;