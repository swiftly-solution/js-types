interface CBtActionParachutePositioning {
    readonly "ActionTimer": CountdownTimer;
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtActionParachutePositioning(ptr_or_class: string|AnySDKClass): CBtActionParachutePositioning;