interface CDynamicPropAlias_prop_dynamic_override {
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicPropAlias_prop_dynamic_override(ptr_or_class: string|AnySDKClass): CDynamicPropAlias_prop_dynamic_override;