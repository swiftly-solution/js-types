interface CChoiceUpdateNode {
    readonly "Children": Object;
    readonly "Weights": Object;
    readonly "BlendTimes": Object;
    "ChoiceMethod": number;
    "ChoiceChangeMethod": number;
    "BlendMethod": number;
    "BlendTime": number;
    "CrossFade": boolean;
    "ResetChosen": boolean;
    "DontResetSameSelection": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CChoiceUpdateNode(ptr_or_class: string|AnySDKClass): CChoiceUpdateNode;