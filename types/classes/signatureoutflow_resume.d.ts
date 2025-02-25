interface SignatureOutflow_Resume {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SignatureOutflow_Resume(ptr_or_class: string|AnySDKClass): SignatureOutflow_Resume;