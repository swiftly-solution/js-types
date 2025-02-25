interface CInButtonState {
    "ButtonStates": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInButtonState(ptr_or_class: string|AnySDKClass): CInButtonState;