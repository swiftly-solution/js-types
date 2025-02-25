interface MoodAnimation_t {
    "Name": string;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MoodAnimation_t(ptr_or_class: string|AnySDKClass): MoodAnimation_t;