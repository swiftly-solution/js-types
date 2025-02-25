interface CFuncWallToggle {
    readonly "Parent": CFuncWall;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncWallToggle(ptr_or_class: string|AnySDKClass): CFuncWallToggle;