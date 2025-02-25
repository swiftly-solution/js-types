interface CDestructiblePartsSystemData {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartsSystemData(ptr_or_class: string|AnySDKClass): CDestructiblePartsSystemData;