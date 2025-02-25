interface FakeEntity_tAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FakeEntity_tAPI(ptr_or_class: string|AnySDKClass): FakeEntity_tAPI;