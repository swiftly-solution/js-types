interface CCSClientPointScriptEntity {
    readonly "Parent": CCSPointScriptEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSClientPointScriptEntity(ptr_or_class: string|AnySDKClass): CCSClientPointScriptEntity;