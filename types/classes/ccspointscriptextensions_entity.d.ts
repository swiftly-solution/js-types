interface CCSPointScriptExtensions_entity {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_entity(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_entity;