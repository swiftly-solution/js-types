interface CFootMotion {
    readonly "Strides": Object;
    "Name": string;
    "Additive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootMotion(ptr_or_class: string|AnySDKClass): CFootMotion;