interface CInstancedSceneEntity {
    readonly "Owner": CBaseEntity;
    "HadOwner": boolean;
    "PostSpeakDelay": number;
    "PreDelay": number;
    "IsBackground": boolean;
    "RemoveOnCompletion": boolean;
    readonly "Target": CBaseEntity;
    readonly "Parent": CSceneEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInstancedSceneEntity(ptr_or_class: string|AnySDKClass): CInstancedSceneEntity;