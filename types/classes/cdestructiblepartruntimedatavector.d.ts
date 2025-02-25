interface CDestructiblePartRuntimeDataVector {
    readonly "DestructiblePartsRuntimeData": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartRuntimeDataVector(ptr_or_class: string|AnySDKClass): CDestructiblePartRuntimeDataVector;