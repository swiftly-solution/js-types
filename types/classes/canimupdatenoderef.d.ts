interface CAnimUpdateNodeRef {
    "NodeIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUpdateNodeRef(ptr_or_class: string|AnySDKClass): CAnimUpdateNodeRef;