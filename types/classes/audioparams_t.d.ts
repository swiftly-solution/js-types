interface audioparams_t {
    "LocalSound": Object;
    "SoundscapeIndex": number;
    "LocalBits": number;
    "SoundscapeEntityListIndex": number;
    "SoundEventHash": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function audioparams_t(ptr_or_class: string|AnySDKClass): audioparams_t;