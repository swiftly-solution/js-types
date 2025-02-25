interface Relationship_t {
    "Disposition": number;
    "Priority": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function Relationship_t(ptr_or_class: string|AnySDKClass): Relationship_t;