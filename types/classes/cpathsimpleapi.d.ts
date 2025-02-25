interface CPathSimpleAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathSimpleAPI(ptr_or_class: string|AnySDKClass): CPathSimpleAPI;