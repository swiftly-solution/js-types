interface CSoundEventOBBEntity {
    "Mins": Vector;
    "Maxs": Vector;
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventOBBEntity(ptr_or_class: string|AnySDKClass): CSoundEventOBBEntity;