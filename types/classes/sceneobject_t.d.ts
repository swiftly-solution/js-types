interface SceneObject_t {
    "ObjectID": number;
    "Transform": Object;
    "FadeStartDistance": number;
    "FadeEndDistance": number;
    "TintColor": Vector4D;
    "Skin": string;
    "ObjectTypeFlags": number;
    "LightingOrigin": Vector;
    "OverlayRenderOrder": number;
    "LODOverride": number;
    "CubeMapPrecomputedHandshake": number;
    "LightProbeVolumePrecomputedHandshake": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SceneObject_t(ptr_or_class: string|AnySDKClass): SceneObject_t;