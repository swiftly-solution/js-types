interface FakeEntityDerivedB_tAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FakeEntityDerivedB_tAPI(ptr_or_class: string|AnySDKClass): FakeEntityDerivedB_tAPI;