interface CInfoData {
    readonly "Parent": CServerOnlyEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoData(ptr_or_class: string|AnySDKClass): CInfoData;