interface CProjectedDecal {
    "Texture": number;
    "Distance": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CProjectedDecal(ptr_or_class: string|AnySDKClass): CProjectedDecal;