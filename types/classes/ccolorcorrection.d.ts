interface CColorCorrection {
    "FadeInDuration": number;
    "FadeOutDuration": number;
    "StartFadeInWeight": number;
    "StartFadeOutWeight": number;
    "TimeStartFadeIn": number;
    "TimeStartFadeOut": number;
    "MaxWeight": number;
    "StartDisabled": boolean;
    "Enabled": boolean;
    "Master": boolean;
    "ClientSide": boolean;
    "Exclusive": boolean;
    "MinFalloff": number;
    "MaxFalloff": number;
    "CurWeight": number;
    "NetlookupFilename": string;
    "LookupFilename": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CColorCorrection(ptr_or_class: string|AnySDKClass): CColorCorrection;