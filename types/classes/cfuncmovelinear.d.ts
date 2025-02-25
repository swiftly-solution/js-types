interface CFuncMoveLinear {
    "AuthoredPosition": number;
    "MoveEntitySpace": QAngle;
    "MoveDirParentSpace": Vector;
    "SoundStart": string;
    "SoundStop": string;
    "CurrentSound": string;
    "BlockDamage": number;
    "StartPosition": number;
    readonly "OnFullyOpen": CEntityIOOutput;
    readonly "OnFullyClosed": CEntityIOOutput;
    "CreateMovableNavMesh": boolean;
    "CreateNavObstacle": boolean;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncMoveLinear(ptr_or_class: string|AnySDKClass): CFuncMoveLinear;