interface CDestructiblePartsSystemData_HitGroupInfoAndPartData {
    "Name": string;
    readonly "DestructiblePartsData": Object;
    "DisableHitGroupWhenDestroyed": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartsSystemData_HitGroupInfoAndPartData(ptr_or_class: string|AnySDKClass): CDestructiblePartsSystemData_HitGroupInfoAndPartData;