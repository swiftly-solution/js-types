interface VMixAutoFilterDesc_t {
    "EnvelopeAmount": number;
    "AttackTimeMS": number;
    "ReleaseTimeMS": number;
    readonly "Filter": VMixFilterDesc_t;
    "LFOAmount": number;
    "LFORate": number;
    "Phase": number;
    "LFOShape": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixAutoFilterDesc_t(ptr_or_class: string|AnySDKClass): VMixAutoFilterDesc_t;