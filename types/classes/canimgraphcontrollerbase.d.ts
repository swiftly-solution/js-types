interface CAnimGraphControllerBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphControllerBase(ptr_or_class: string|AnySDKClass): CAnimGraphControllerBase;