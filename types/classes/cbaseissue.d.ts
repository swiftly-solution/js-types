interface CBaseIssue {
    "TypeString": string;
    "DetailsString": string;
    "NumYesVotes": number;
    "NumNoVotes": number;
    "NumPotentialVotes": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseIssue(ptr_or_class: string|AnySDKClass): CBaseIssue;