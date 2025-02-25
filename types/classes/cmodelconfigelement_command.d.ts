interface CModelConfigElement_Command {
    "Command": string;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_Command(ptr_or_class: string|AnySDKClass): CModelConfigElement_Command;