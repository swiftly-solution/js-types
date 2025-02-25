interface CFireOverlay {
    readonly "Owner": any;
    "BaseColors": Object;
    "Scale": number;
    "GUID": number;
    readonly "Parent": CGlowOverlay;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFireOverlay(ptr_or_class: string|AnySDKClass): CFireOverlay;