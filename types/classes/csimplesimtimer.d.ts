interface CSimpleSimTimer {
    "Next": number;
    "WorldGroupId": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimpleSimTimer(ptr_or_class: string|AnySDKClass): CSimpleSimTimer;