interface CSoundAreaEntitySphere {
    "Radius": number;
    readonly "Parent": CSoundAreaEntityBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundAreaEntitySphere(ptr_or_class: string|AnySDKClass): CSoundAreaEntitySphere;