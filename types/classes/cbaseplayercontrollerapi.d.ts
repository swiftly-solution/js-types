interface CBasePlayerControllerAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerControllerAPI(ptr_or_class: string|AnySDKClass): CBasePlayerControllerAPI;