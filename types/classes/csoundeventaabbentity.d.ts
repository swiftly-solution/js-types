interface CSoundEventAABBEntity {
    "Mins": Vector;
    "Maxs": Vector;
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventAABBEntity(ptr_or_class: string|AnySDKClass): CSoundEventAABBEntity;