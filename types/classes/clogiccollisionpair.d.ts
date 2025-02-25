interface CLogicCollisionPair {
    "NameAttach1": string;
    "NameAttach2": string;
    "SupportMultipleEntitiesWithSameName": boolean;
    "Disabled": boolean;
    "Succeeded": boolean;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicCollisionPair(ptr_or_class: string|AnySDKClass): CLogicCollisionPair;