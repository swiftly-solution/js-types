interface CBuyZone {
    "LegacyTeamNum": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBuyZone(ptr_or_class: string|AnySDKClass): CBuyZone;