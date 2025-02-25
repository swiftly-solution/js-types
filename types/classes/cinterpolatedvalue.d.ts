interface CInterpolatedValue {
    "StartTime": number;
    "EndTime": number;
    "StartValue": number;
    "EndValue": number;
    "InterpType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInterpolatedValue(ptr_or_class: string|AnySDKClass): CInterpolatedValue;