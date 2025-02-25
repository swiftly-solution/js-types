interface CompMatPropertyMutator_t {
    "Enabled": boolean;
    "MutatorCommandType": number;
    "StrInitWith_Container": string;
    "StrCopyProperty_InputContainerSrc": string;
    "StrCopyProperty_InputContainerProperty": string;
    "StrCopyProperty_TargetProperty": string;
    "StrRandomRollInputVars_SeedInputVar": string;
    readonly "RandomRollInputVars_InputVarsToRoll": Object;
    "StrCopyMatchingKeys_InputContainerSrc": string;
    "StrCopyKeysWithSuffix_InputContainerSrc": string;
    "StrCopyKeysWithSuffix_FindSuffix": string;
    "StrCopyKeysWithSuffix_ReplaceSuffix": string;
    readonly "SetValue_Value": CompositeMaterialInputLooseVariable_t;
    "StrGenerateTexture_TargetParam": string;
    "StrGenerateTexture_InitialContainer": string;
    "Resolution": number;
    "IsScratchTarget": boolean;
    "SplatDebugInfo": boolean;
    "CaptureInRenderDoc": boolean;
    readonly "TexGenInstructions": Object;
    readonly "ConditionalMutators": Object;
    "StrPopInputQueue_Container": string;
    "StrDrawText_InputContainerSrc": string;
    "StrDrawText_InputContainerProperty": string;
    "DrawText_Position": Vector2D;
    "ColDrawText_Color": Color;
    "StrDrawText_Font": string;
    readonly "Conditions": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompMatPropertyMutator_t(ptr_or_class: string|AnySDKClass): CompMatPropertyMutator_t;