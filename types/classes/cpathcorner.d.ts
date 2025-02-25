interface CPathCorner {
    "Wait": number;
    "Radius": number;
    readonly "OnPass": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathCorner(ptr_or_class: string|AnySDKClass): CPathCorner;