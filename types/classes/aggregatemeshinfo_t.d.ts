interface AggregateMeshInfo_t {
    "VisClusterMemberOffset": number;
    "VisClusterMemberCount": number;
    "HasTransform": boolean;
    "DrawCallIndex": number;
    "LODSetupIndex": number;
    "LODGroupMask": number;
    "TintColor": Color;
    "ObjectFlags": number;
    "LightProbeVolumePrecomputedHandshake": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AggregateMeshInfo_t(ptr_or_class: string|AnySDKClass): AggregateMeshInfo_t;