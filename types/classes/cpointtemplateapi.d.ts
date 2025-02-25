interface CPointTemplateAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointTemplateAPI(ptr_or_class: string|AnySDKClass): CPointTemplateAPI;