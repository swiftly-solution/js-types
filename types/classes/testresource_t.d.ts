interface TestResource_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TestResource_t(ptr_or_class: string|AnySDKClass): TestResource_t;