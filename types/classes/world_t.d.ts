interface World_t {
    readonly "BuilderParams": WorldBuilderParams_t;
    readonly "WorldNodes": Object;
    readonly "WorldLightingInfo": BakedLightingInfo_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function World_t(ptr_or_class: string|AnySDKClass): World_t;