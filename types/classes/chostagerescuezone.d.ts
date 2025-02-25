interface CHostageRescueZone {
    readonly "Parent": CHostageRescueZoneShim;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageRescueZone(ptr_or_class: string|AnySDKClass): CHostageRescueZone;