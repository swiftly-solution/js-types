interface CPathTrack {
    readonly "Pnext": CPathTrack;
    readonly "Pprevious": CPathTrack;
    readonly "Paltpath": CPathTrack;
    "Radius": number;
    "Length": number;
    "AltName": string;
    "IterVal": number;
    "OrientationType": number;
    readonly "OnPass": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathTrack(ptr_or_class: string|AnySDKClass): CPathTrack;