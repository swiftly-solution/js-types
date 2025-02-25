interface CModelConfigElement_RandomPick {
    readonly "Choices": Object;
    readonly "ChoiceWeights": Object;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_RandomPick(ptr_or_class: string|AnySDKClass): CModelConfigElement_RandomPick;