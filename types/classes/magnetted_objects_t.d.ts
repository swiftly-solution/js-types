interface magnetted_objects_t {
    readonly "Entity": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function magnetted_objects_t(ptr_or_class: string|AnySDKClass): magnetted_objects_t;