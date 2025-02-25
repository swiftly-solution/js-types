interface FakeEntityDerivedA_tAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FakeEntityDerivedA_tAPI(ptr_or_class: string|AnySDKClass): FakeEntityDerivedA_tAPI;