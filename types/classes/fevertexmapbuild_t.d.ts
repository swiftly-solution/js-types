interface FeVertexMapBuild_t {
    "VertexMapName": string;
    "NameHash": number;
    "Color": Color;
    "VolumetricSolveStrength": number;
    "ScaleSourceNode": number;
    readonly "Weights": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeVertexMapBuild_t(ptr_or_class: string|AnySDKClass): FeVertexMapBuild_t;