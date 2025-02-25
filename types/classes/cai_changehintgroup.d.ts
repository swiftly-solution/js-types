interface CAI_ChangeHintGroup {
    "SearchType": number;
    "StrSearchName": string;
    "StrNewHintGroup": string;
    "Radius": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAI_ChangeHintGroup(ptr_or_class: string|AnySDKClass): CAI_ChangeHintGroup;