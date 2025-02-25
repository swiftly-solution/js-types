interface CHostageRescueZoneShim {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageRescueZoneShim(ptr_or_class: string|AnySDKClass): CHostageRescueZoneShim;