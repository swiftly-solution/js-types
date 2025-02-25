interface CAnimActionUpdater {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimActionUpdater(ptr_or_class: string|AnySDKClass): CAnimActionUpdater;