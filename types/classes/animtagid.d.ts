interface AnimTagID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimTagID(ptr_or_class: string|AnySDKClass): AnimTagID;