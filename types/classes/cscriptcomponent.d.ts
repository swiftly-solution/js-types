interface CScriptComponent {
    "ScriptClassName": string;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptComponent(ptr_or_class: string|AnySDKClass): CScriptComponent;