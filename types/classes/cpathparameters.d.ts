interface CPathParameters {
    "StartControlPointNumber": number;
    "EndControlPointNumber": number;
    "BulgeControl": number;
    "Bulge": number;
    "MidPoint": number;
    "StartPointOffset": Vector;
    "MidPointOffset": Vector;
    "EndOffset": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathParameters(ptr_or_class: string|AnySDKClass): CPathParameters;