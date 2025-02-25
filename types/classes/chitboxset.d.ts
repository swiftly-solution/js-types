interface CHitBoxSet {
    "Name": string;
    "NameHash": number;
    readonly "HitBoxes": Object;
    "SourceFilename": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitBoxSet(ptr_or_class: string|AnySDKClass): CHitBoxSet;