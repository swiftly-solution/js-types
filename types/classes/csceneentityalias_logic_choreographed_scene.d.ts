interface CSceneEntityAlias_logic_choreographed_scene {
    readonly "Parent": CSceneEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneEntityAlias_logic_choreographed_scene(ptr_or_class: string|AnySDKClass): CSceneEntityAlias_logic_choreographed_scene;