interface AnimStateID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimStateID(ptr_or_class: string|AnySDKClass): AnimStateID;