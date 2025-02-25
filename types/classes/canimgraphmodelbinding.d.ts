interface CAnimGraphModelBinding {
    "ModelName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphModelBinding(ptr_or_class: string|AnySDKClass): CAnimGraphModelBinding;