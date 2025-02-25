interface CompositeMaterialAssemblyProcedure_t {
    readonly "MatchFilters": Object;
    readonly "CompositeInputContainers": Object;
    readonly "PropertyMutators": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialAssemblyProcedure_t(ptr_or_class: string|AnySDKClass): CompositeMaterialAssemblyProcedure_t;