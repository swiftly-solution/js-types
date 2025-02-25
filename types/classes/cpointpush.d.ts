interface CPointPush {
    "Enabled": boolean;
    "Magnitude": number;
    "Radius": number;
    "InnerRadius": number;
    "ConeOfInfluence": number;
    "FilterName": string;
    readonly "Filter": CBaseFilter;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointPush(ptr_or_class: string|AnySDKClass): CPointPush;