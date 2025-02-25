interface COrnamentProp {
    "InitialOwner": string;
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COrnamentProp(ptr_or_class: string|AnySDKClass): COrnamentProp;