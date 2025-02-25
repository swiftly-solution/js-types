interface CDestructiblePartsSystemData_PartData {
    "Name": string;
    "BodyGroupValue": number;
    readonly "Health": CSkillInt;
    "DamagePassthroughType": number;
    "KillNPCOnDestruction": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartsSystemData_PartData(ptr_or_class: string|AnySDKClass): CDestructiblePartsSystemData_PartData;