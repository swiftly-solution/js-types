interface CTestEffect {
    "Loop": number;
    "Beam": number;
    readonly "Beam1": Object;
    "BeamTime": Object;
    "StartTime": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTestEffect(ptr_or_class: string|AnySDKClass): CTestEffect;