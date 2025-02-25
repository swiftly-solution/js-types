interface CTeamplayRules {
    readonly "Parent": CMultiplayRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTeamplayRules(ptr_or_class: string|AnySDKClass): CTeamplayRules;