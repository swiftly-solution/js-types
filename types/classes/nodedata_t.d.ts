interface NodeData_t {
    "Parent": number;
    "Origin": Vector;
    "MinBounds": Vector;
    "MaxBounds": Vector;
    "MinimumDistance": number;
    readonly "ChildNodeIndices": Object;
    "WorldNodePrefix": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NodeData_t(ptr_or_class: string|AnySDKClass): NodeData_t;