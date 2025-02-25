interface CRandSimTimer {
    "MinInterval": number;
    "MaxInterval": number;
    readonly "Parent": CSimpleSimTimer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRandSimTimer(ptr_or_class: string|AnySDKClass): CRandSimTimer;