interface CAudioAnimTag {
    "ClipName": string;
    "AttachmentName": string;
    "Volume": number;
    "StopWhenTagEnds": boolean;
    "StopWhenGraphEnds": boolean;
    "PlayOnServer": boolean;
    "PlayOnClient": boolean;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioAnimTag(ptr_or_class: string|AnySDKClass): CAudioAnimTag;