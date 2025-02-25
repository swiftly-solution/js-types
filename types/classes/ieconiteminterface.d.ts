interface IEconItemInterface {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IEconItemInterface(ptr_or_class: string|AnySDKClass): IEconItemInterface;