interface CEmptyEntityInstance {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEmptyEntityInstance(ptr_or_class: string|AnySDKClass): CEmptyEntityInstance;