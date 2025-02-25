interface CEntityIOOutput {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityIOOutput(ptr_or_class: string|AnySDKClass): CEntityIOOutput;