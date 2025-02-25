interface CPredictedViewModel {
    readonly "Parent": CBaseViewModel;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPredictedViewModel(ptr_or_class: string|AnySDKClass): CPredictedViewModel;