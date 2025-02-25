interface CSoundEventEntityAlias_snd_event_point {
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventEntityAlias_snd_event_point(ptr_or_class: string|AnySDKClass): CSoundEventEntityAlias_snd_event_point;