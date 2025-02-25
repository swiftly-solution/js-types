interface CSceneListManager {
    "Scenes": Object;
    readonly "Scenes1": Object;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneListManager(ptr_or_class: string|AnySDKClass): CSceneListManager;