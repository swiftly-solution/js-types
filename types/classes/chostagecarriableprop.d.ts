interface CHostageCarriableProp {
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageCarriableProp(ptr_or_class: string|AnySDKClass): CHostageCarriableProp;