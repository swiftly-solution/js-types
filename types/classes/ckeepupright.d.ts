interface CKeepUpright {
    "WorldGoalAxis": Vector;
    "LocalTestAxis": Vector;
    "NameAttach": string;
    readonly "AttachedObject": CBaseEntity;
    "AngularLimit": number;
    "Active": boolean;
    "DampAllRotation": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CKeepUpright(ptr_or_class: string|AnySDKClass): CKeepUpright;