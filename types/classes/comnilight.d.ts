interface COmniLight {
    "InnerAngle": number;
    "OuterAngle": number;
    "ShowLight": boolean;
    readonly "Parent": CBarnLight;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COmniLight(ptr_or_class: string|AnySDKClass): COmniLight;