interface CStateActionUpdater {
    "Behavior": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateActionUpdater(ptr_or_class: string|AnySDKClass): CStateActionUpdater;