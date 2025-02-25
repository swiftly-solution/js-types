interface AggregateLODSetup_t {
    "LODOrigin": Vector;
    "MaxObjectScale": number;
    readonly "SwitchDistances": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AggregateLODSetup_t(ptr_or_class: string|AnySDKClass): AggregateLODSetup_t;