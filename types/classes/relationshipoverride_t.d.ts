interface RelationshipOverride_t {
    readonly "Entity": CBaseEntity;
    "ClassType": number;
    readonly "Parent": Relationship_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RelationshipOverride_t(ptr_or_class: string|AnySDKClass): RelationshipOverride_t;