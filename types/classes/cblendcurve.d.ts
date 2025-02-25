interface CBlendCurve {
    "ControlPoint1": number;
    "ControlPoint2": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlendCurve(ptr_or_class: string|AnySDKClass): CBlendCurve;