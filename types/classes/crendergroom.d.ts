interface CRenderGroom {
    readonly "Hairs": Object;
    readonly "HairPositionOffsets": Object;
    "SegmentsPerHairStrand": number;
    "GuideHairCount": number;
    "HairCount": number;
    "GroomGroupID": number;
    "AttachBoneIdx": number;
    "AttachMeshIdx": number;
    "AttachMeshDrawCallIdx": number;
    "EnableSimulation": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderGroom(ptr_or_class: string|AnySDKClass): CRenderGroom;