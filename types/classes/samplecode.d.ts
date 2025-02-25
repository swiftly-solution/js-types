interface SampleCode {
    "SubCode": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SampleCode(ptr_or_class: string|AnySDKClass): SampleCode;