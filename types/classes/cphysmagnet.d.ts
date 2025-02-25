interface CPhysMagnet {
    readonly "OnMagnetAttach": CEntityIOOutput;
    readonly "OnMagnetDetach": CEntityIOOutput;
    "MassScale": number;
    "ForceLimit": number;
    "TorqueLimit": number;
    readonly "MagnettedEntities": Object;
    "Active": boolean;
    "HasHitSomething": boolean;
    "TotalMass": number;
    "Radius": number;
    "NextSuckTime": number;
    "MaxObjectsAttached": number;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysMagnet(ptr_or_class: string|AnySDKClass): CPhysMagnet;