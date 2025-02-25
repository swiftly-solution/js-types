interface VMixEQ8Desc_t {
    readonly "Stages": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixEQ8Desc_t(ptr_or_class: string|AnySDKClass): VMixEQ8Desc_t;