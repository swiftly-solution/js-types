interface CNmGraphDefinition {
    readonly "PersistentNodeIndices": Object;
    "RootNodeIdx": number;
    readonly "VirtualParameterNodeIndices": Object;
    readonly "NodePaths": Object;
    "RuntimeVersionID": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmGraphDefinition(ptr_or_class: string|AnySDKClass): CNmGraphDefinition;