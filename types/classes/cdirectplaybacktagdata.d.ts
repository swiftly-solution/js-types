interface CDirectPlaybackTagData {
    "SequenceName": string;
    readonly "Tags": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDirectPlaybackTagData(ptr_or_class: string|AnySDKClass): CDirectPlaybackTagData;