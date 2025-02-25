interface CEnvHudHint {
    "Message": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvHudHint(ptr_or_class: string|AnySDKClass): CEnvHudHint;