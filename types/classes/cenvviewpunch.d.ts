interface CEnvViewPunch {
    "Radius": number;
    "ViewPunch": QAngle;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvViewPunch(ptr_or_class: string|AnySDKClass): CEnvViewPunch;