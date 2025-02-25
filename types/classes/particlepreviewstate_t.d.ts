interface ParticlePreviewState_t {
    "PreviewModel": string;
    "ModSpecificData": number;
    "GroundType": number;
    "SequenceName": string;
    "FireParticleOnSequenceFrame": number;
    "HitboxSetName": string;
    "MaterialGroupName": string;
    readonly "BodyGroups": Object;
    "PlaybackSpeed": number;
    "ParticleSimulationRate": number;
    "ShouldDrawHitboxes": boolean;
    "ShouldDrawAttachments": boolean;
    "ShouldDrawAttachmentNames": boolean;
    "ShouldDrawControlPointAxes": boolean;
    "AnimationNonLooping": boolean;
    "PreviewGravity": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticlePreviewState_t(ptr_or_class: string|AnySDKClass): ParticlePreviewState_t;