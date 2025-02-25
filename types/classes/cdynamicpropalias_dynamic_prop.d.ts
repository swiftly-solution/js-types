interface CDynamicPropAlias_dynamic_prop {
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicPropAlias_dynamic_prop(ptr_or_class: string|AnySDKClass): CDynamicPropAlias_dynamic_prop;