interface CFireCrackerBlast {
    readonly "Parent": CInferno;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFireCrackerBlast(ptr_or_class: string|AnySDKClass): CFireCrackerBlast;