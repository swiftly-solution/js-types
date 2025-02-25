interface CFuncNavBlocker {
    "Disabled": boolean;
    "BlockedTeamNumber": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncNavBlocker(ptr_or_class: string|AnySDKClass): CFuncNavBlocker;