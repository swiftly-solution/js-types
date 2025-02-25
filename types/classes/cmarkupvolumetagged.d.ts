interface CMarkupVolumeTagged {
    "IsGroup": boolean;
    "GroupByPrefab": boolean;
    "GroupByVolume": boolean;
    "GroupOtherGroups": boolean;
    "IsInGroup": boolean;
    readonly "Parent": CMarkupVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolumeTagged(ptr_or_class: string|AnySDKClass): CMarkupVolumeTagged;