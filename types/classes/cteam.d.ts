interface CTeam {
    "Score": number;
    "Teamname": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTeam(ptr_or_class: string|AnySDKClass): CTeam;