interface sndopvarlatchdata_t {
    "Stack": string;
    "Operator": string;
    "Opvar": string;
    "Val": number;
    "Pos": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function sndopvarlatchdata_t(ptr_or_class: string|AnySDKClass): sndopvarlatchdata_t;