interface AnimNodeOutputID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimNodeOutputID(ptr_or_class: string|AnySDKClass): AnimNodeOutputID;