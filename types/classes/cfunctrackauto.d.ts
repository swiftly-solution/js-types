interface CFuncTrackAuto {
    readonly "Parent": CFuncTrackChange;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTrackAuto(ptr_or_class: string|AnySDKClass): CFuncTrackAuto;