interface CBtActionCombatPositioning {
    "SensorInputKey": string;
    "IsAttackingKey": string;
    readonly "ActionTimer": CountdownTimer;
    "Crouching": boolean;
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtActionCombatPositioning(ptr_or_class: string|AnySDKClass): CBtActionCombatPositioning;