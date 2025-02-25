interface CEnvDetailController {
    "FadeStartDist": number;
    "FadeEndDist": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvDetailController(ptr_or_class: string|AnySDKClass): CEnvDetailController;