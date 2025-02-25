interface CCSGOViewModel {
    "ShouldIgnoreOffsetAndAccuracy": boolean;
    readonly "Parent": CPredictedViewModel;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGOViewModel(ptr_or_class: string|AnySDKClass): CCSGOViewModel;