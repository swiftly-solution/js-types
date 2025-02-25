interface CMoodVData {
    "MoodType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMoodVData(ptr_or_class: string|AnySDKClass): CMoodVData;