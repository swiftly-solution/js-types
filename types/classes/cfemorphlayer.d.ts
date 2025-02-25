interface CFeMorphLayer {
    "Name": string;
    "NameHash": number;
    readonly "Nodes": Object;
    readonly "InitPos": Object;
    readonly "Gravity": Object;
    readonly "GoalStrength": Object;
    readonly "GoalDamping": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeMorphLayer(ptr_or_class: string|AnySDKClass): CFeMorphLayer;