interface CFlexController {
    "Name": string;
    "Type": string;
    "Min": number;
    "Max": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexController(ptr_or_class: string|AnySDKClass): CFlexController;