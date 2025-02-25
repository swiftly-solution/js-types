interface CPhysBox {
    "DamageType": number;
    "DamageToEnableMotion": number;
    "ForceToEnableMotion": number;
    "PreferredCarryAngles": QAngle;
    "NotSolidToWorld": boolean;
    "EnableUseOutput": boolean;
    "ExploitableByPlayer": number;
    "TouchOutputPerEntityDelay": number;
    readonly "OnDamaged": CEntityIOOutput;
    readonly "OnAwakened": CEntityIOOutput;
    readonly "OnMotionEnabled": CEntityIOOutput;
    readonly "OnPlayerUse": CEntityIOOutput;
    readonly "OnStartTouch": CEntityIOOutput;
    readonly "CarryingPlayer": CBasePlayerPawn;
    readonly "Parent": CBreakable;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysBox(ptr_or_class: string|AnySDKClass): CPhysBox;