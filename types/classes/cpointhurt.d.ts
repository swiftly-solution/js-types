interface CPointHurt {
    "Damage": number;
    "BitsDamageType": number;
    "Radius": number;
    "Delay": number;
    "StrTarget": string;
    readonly "Activator": CBaseEntity;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointHurt(ptr_or_class: string|AnySDKClass): CPointHurt;