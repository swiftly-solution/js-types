interface CCredits {
    readonly "OnCreditsDone": CEntityIOOutput;
    "RolledOutroCredits": boolean;
    "LogoLength": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCredits(ptr_or_class: string|AnySDKClass): CCredits;