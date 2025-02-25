interface IGapHost_ExecLog {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_ExecLog(ptr_or_class: string|AnySDKClass): IGapHost_ExecLog;