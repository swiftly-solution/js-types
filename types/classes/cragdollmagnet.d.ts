interface CRagdollMagnet {
    "Disabled": boolean;
    "Radius": number;
    "Force": number;
    "Axis": Vector;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollMagnet(ptr_or_class: string|AnySDKClass): CRagdollMagnet;