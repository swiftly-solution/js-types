interface CCSPointScriptEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptEntity(ptr_or_class: string|AnySDKClass): CCSPointScriptEntity;