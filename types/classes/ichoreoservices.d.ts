interface IChoreoServices {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IChoreoServices(ptr_or_class: string|AnySDKClass): IChoreoServices;