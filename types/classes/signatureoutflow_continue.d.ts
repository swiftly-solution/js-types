interface SignatureOutflow_Continue {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SignatureOutflow_Continue(ptr_or_class: string|AnySDKClass): SignatureOutflow_Continue;