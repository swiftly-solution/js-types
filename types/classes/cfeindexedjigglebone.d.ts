interface CFeIndexedJiggleBone {
    "Node": number;
    "JiggleParent": number;
    readonly "JiggleBone": CFeJiggleBone;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeIndexedJiggleBone(ptr_or_class: string|AnySDKClass): CFeIndexedJiggleBone;