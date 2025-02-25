interface CBodyGroupSetting {
    "BodyGroupName": string;
    "BodyGroupOption": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyGroupSetting(ptr_or_class: string|AnySDKClass): CBodyGroupSetting;