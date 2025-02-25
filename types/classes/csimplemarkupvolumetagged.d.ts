interface CSimpleMarkupVolumeTagged {
    readonly "Parent": CMarkupVolumeTagged;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimpleMarkupVolumeTagged(ptr_or_class: string|AnySDKClass): CSimpleMarkupVolumeTagged;