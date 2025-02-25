interface CSimTimer {
    "Interval": number;
    readonly "Parent": CSimpleSimTimer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimTimer(ptr_or_class: string|AnySDKClass): CSimTimer;