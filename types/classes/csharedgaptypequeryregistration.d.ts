interface CSharedGapTypeQueryRegistration {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSharedGapTypeQueryRegistration(ptr_or_class: string|AnySDKClass): CSharedGapTypeQueryRegistration;