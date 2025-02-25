interface CAnimEventListenerBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventListenerBase(ptr_or_class: string|AnySDKClass): CAnimEventListenerBase;