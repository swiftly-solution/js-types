interface CClientGapTypeQueryRegistration {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CClientGapTypeQueryRegistration(ptr_or_class: string|AnySDKClass): CClientGapTypeQueryRegistration;