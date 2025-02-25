interface CAnimNodePath {
    readonly "Path": Object;
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimNodePath(ptr_or_class: string|AnySDKClass): CAnimNodePath;