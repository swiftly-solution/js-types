interface CFlashbangProjectile {
    "TimeToDetonate": number;
    "NumOpponentsHit": number;
    "NumTeammatesHit": number;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlashbangProjectile(ptr_or_class: string|AnySDKClass): CFlashbangProjectile;