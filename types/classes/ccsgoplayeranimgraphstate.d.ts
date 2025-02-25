interface CCSGOPlayerAnimGraphState {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGOPlayerAnimGraphState(ptr_or_class: string|AnySDKClass): CCSGOPlayerAnimGraphState;