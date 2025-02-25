interface AnimComponentID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimComponentID(ptr_or_class: string|AnySDKClass): AnimComponentID;