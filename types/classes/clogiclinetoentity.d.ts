interface CLogicLineToEntity {
    "SourceName": string;
    readonly "StartEntity": CBaseEntity;
    readonly "EndEntity": CBaseEntity;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicLineToEntity(ptr_or_class: string|AnySDKClass): CLogicLineToEntity;