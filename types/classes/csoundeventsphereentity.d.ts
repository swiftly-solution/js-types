interface CSoundEventSphereEntity {
    "Radius": number;
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventSphereEntity(ptr_or_class: string|AnySDKClass): CSoundEventSphereEntity;