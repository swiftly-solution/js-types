interface CFuncMoverAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncMoverAPI(ptr_or_class: string|AnySDKClass): CFuncMoverAPI;