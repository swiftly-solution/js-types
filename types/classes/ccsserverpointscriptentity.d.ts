interface CCSServerPointScriptEntity {
    readonly "Parent": CCSPointScriptEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSServerPointScriptEntity(ptr_or_class: string|AnySDKClass): CCSServerPointScriptEntity;