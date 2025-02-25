interface CLogicDistanceCheck {
    "EntityA": string;
    "EntityB": string;
    "Zone1Distance": number;
    "Zone2Distance": number;
    readonly "InZone1": CEntityIOOutput;
    readonly "InZone2": CEntityIOOutput;
    readonly "InZone3": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicDistanceCheck(ptr_or_class: string|AnySDKClass): CLogicDistanceCheck;