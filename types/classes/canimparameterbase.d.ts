interface CAnimParameterBase {
    "Comment": string;
    "Group": string;
    readonly "Id": AnimParamID;
    "ComponentName": string;
    "NetworkingRequested": boolean;
    "IsReferenced": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimParameterBase(ptr_or_class: string|AnySDKClass): CAnimParameterBase;