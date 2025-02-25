interface CSoundAreaEntityBase {
    "Disabled": boolean;
    "SoundAreaType": string;
    "Pos": Vector;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundAreaEntityBase(ptr_or_class: string|AnySDKClass): CSoundAreaEntityBase;