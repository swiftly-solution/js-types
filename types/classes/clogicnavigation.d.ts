interface CLogicNavigation {
    "IsOn": boolean;
    "NavProperty": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicNavigation(ptr_or_class: string|AnySDKClass): CLogicNavigation;