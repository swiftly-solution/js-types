interface CBasePlatTrain {
    "NoiseMoving": string;
    "NoiseArrived": string;
    "Volume": number;
    "TWidth": number;
    "TLength": number;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlatTrain(ptr_or_class: string|AnySDKClass): CBasePlatTrain;