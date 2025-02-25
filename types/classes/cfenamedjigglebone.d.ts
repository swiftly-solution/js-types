interface CFeNamedJiggleBone {
    "StrParentBone": string;
    "JiggleParent": number;
    readonly "JiggleBone": CFeJiggleBone;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeNamedJiggleBone(ptr_or_class: string|AnySDKClass): CFeNamedJiggleBone;