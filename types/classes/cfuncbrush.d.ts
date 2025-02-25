interface CFuncBrush {
    "Solidity": number;
    "Disabled": number;
    "SolidBsp": boolean;
    "ExcludedClass": string;
    "InvertExclusion": boolean;
    "ScriptedMovement": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncBrush(ptr_or_class: string|AnySDKClass): CFuncBrush;