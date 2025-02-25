interface CMarkupVolumeTagged_Nav {
    readonly "Parent": CMarkupVolumeTagged;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolumeTagged_Nav(ptr_or_class: string|AnySDKClass): CMarkupVolumeTagged_Nav;