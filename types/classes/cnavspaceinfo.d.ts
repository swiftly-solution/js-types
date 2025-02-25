interface CNavSpaceInfo {
    "CreateFlightSpace": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavSpaceInfo(ptr_or_class: string|AnySDKClass): CNavSpaceInfo;