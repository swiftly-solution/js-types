interface CPrecipitationVData {
    "InnerDistance": number;
    "AttachType": number;
    "BatchSameVolumeType": boolean;
    "RTEnvCP": number;
    "RTEnvCPComponent": number;
    "Modifier": string;
    readonly "Parent": CEntitySubclassVDataBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPrecipitationVData(ptr_or_class: string|AnySDKClass): CPrecipitationVData;