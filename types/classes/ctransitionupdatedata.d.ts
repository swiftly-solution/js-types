interface CTransitionUpdateData {
    "SrcStateIndex": number;
    "DestStateIndex": number;
    "HandshakeMaskToDisableFirst": any;
    "Disabled": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTransitionUpdateData(ptr_or_class: string|AnySDKClass): CTransitionUpdateData;