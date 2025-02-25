interface CEntityInstance {
    "PrivateVScripts": string;
    readonly "Entity": CEntityIdentity;
    readonly "CScriptComponent": CScriptComponent;
    "VisibleinPVS": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityInstance(ptr_or_class: string|AnySDKClass): CEntityInstance;