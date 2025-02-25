interface CBaseButton {
    "MoveEntitySpace": QAngle;
    "StayPushed": boolean;
    "Rotating": boolean;
    readonly "Ls": locksound_t;
    "UseSound": string;
    "LockedSound": string;
    "UnlockedSound": string;
    "OverrideAnticipationName": string;
    "Locked": boolean;
    "Disabled": boolean;
    "UseLockedTime": number;
    "SolidBsp": boolean;
    readonly "OnDamaged": CEntityIOOutput;
    readonly "OnPressed": CEntityIOOutput;
    readonly "OnUseLocked": CEntityIOOutput;
    readonly "OnIn": CEntityIOOutput;
    readonly "OnOut": CEntityIOOutput;
    "State": number;
    readonly "Constraint": CEntityInstance;
    readonly "ConstraintParent": CEntityInstance;
    "ForceNpcExclude": boolean;
    "GlowEntity": string;
    readonly "GlowEntity1": CBaseModelEntity;
    "Usable": boolean;
    "DisplayText": string;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseButton(ptr_or_class: string|AnySDKClass): CBaseButton;