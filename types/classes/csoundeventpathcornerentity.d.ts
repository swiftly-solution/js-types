interface CSoundEventPathCornerEntity {
    "PathCorner": string;
    "CountMax": number;
    "DistanceMax": number;
    "DistMaxSqr": number;
    "DotProductMax": number;
    "Playing": boolean;
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventPathCornerEntity(ptr_or_class: string|AnySDKClass): CSoundEventPathCornerEntity;