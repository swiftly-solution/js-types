interface CBaseEntityAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseEntityAPI(ptr_or_class: string|AnySDKClass): CBaseEntityAPI;