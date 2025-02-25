interface AnimNodeID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimNodeID(ptr_or_class: string|AnySDKClass): AnimNodeID;