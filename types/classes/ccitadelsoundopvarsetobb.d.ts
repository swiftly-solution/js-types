interface CCitadelSoundOpvarSetOBB {
    "StackName": string;
    "OperatorName": string;
    "OpvarName": string;
    "DistanceInnerMins": Vector;
    "DistanceInnerMaxs": Vector;
    "DistanceOuterMins": Vector;
    "DistanceOuterMaxs": Vector;
    "AABBDirection": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCitadelSoundOpvarSetOBB(ptr_or_class: string|AnySDKClass): CCitadelSoundOpvarSetOBB;