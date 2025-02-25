interface CEnvGlobal {
    "Globalstate": string;
    "Triggermode": number;
    "Initialstate": number;
    "Counter": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvGlobal(ptr_or_class: string|AnySDKClass): CEnvGlobal;