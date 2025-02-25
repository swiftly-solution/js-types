interface CPhysSurfacePropertiesSoundNames {
    "ImpactSoft": string;
    "ImpactHard": string;
    "ScrapeSmooth": string;
    "ScrapeRough": string;
    "BulletImpact": string;
    "Rolling": string;
    "Break": string;
    "Strain": string;
    "MeleeImpact": string;
    "PushOff": string;
    "SkidStop": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysSurfacePropertiesSoundNames(ptr_or_class: string|AnySDKClass): CPhysSurfacePropertiesSoundNames;