interface IGapHost_GameEntity {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_GameEntity(ptr_or_class: string|AnySDKClass): IGapHost_GameEntity;