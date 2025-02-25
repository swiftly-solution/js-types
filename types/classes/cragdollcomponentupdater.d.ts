interface CRagdollComponentUpdater {
    readonly "RagdollNodePaths": Object;
    readonly "BoneIndices": Object;
    readonly "BoneNames": Object;
    readonly "WeightLists": Object;
    "SpringFrequencyMin": number;
    "SpringFrequencyMax": number;
    "MaxStretch": number;
    "SolidCollisionAtZeroWeight": boolean;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollComponentUpdater(ptr_or_class: string|AnySDKClass): CRagdollComponentUpdater;