interface CDynamicPropAlias_cable_dynamic {
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicPropAlias_cable_dynamic(ptr_or_class: string|AnySDKClass): CDynamicPropAlias_cable_dynamic;