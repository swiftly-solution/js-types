interface CWaterBullet {
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWaterBullet(ptr_or_class: string|AnySDKClass): CWaterBullet;