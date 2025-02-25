interface FeMorphLayerDepr_t {
    "Name": string;
    "NameHash": number;
    readonly "Nodes": Object;
    readonly "InitPos": Object;
    readonly "Gravity": Object;
    readonly "GoalStrength": Object;
    readonly "GoalDamping": Object;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeMorphLayerDepr_t(ptr_or_class: string|AnySDKClass): FeMorphLayerDepr_t;