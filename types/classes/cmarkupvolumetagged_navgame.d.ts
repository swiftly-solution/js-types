interface CMarkupVolumeTagged_NavGame {
    "FloodFillAttribute": boolean;
    readonly "Parent": CMarkupVolumeWithRef;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolumeTagged_NavGame(ptr_or_class: string|AnySDKClass): CMarkupVolumeTagged_NavGame;