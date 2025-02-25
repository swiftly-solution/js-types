interface CPlayerSprayDecal {
    "UniqueID": number;
    "AccountID": number;
    "TraceID": number;
    "RtGcTime": number;
    "EndPos": Vector;
    "Start": Vector;
    "Left": Vector;
    "Normal": Vector;
    "Player": number;
    "Entity": number;
    "Hitbox": number;
    "CreationTime": number;
    "TintID": number;
    "Version": number;
    "Signature": Object;
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerSprayDecal(ptr_or_class: string|AnySDKClass): CPlayerSprayDecal;