interface locksound_t {
    "LockedSound": string;
    "UnlockedSound": string;
    "FlwaitSound": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function locksound_t(ptr_or_class: string|AnySDKClass): locksound_t;