interface FeVertexMapDesc_t {
    "Name": string;
    "NameHash": number;
    "Color": number;
    "Flags": number;
    "VertexBase": number;
    "VertexCount": number;
    "MapOffset": number;
    "NodeListOffset": number;
    "CenterOfMass": Vector;
    "VolumetricSolveStrength": number;
    "ScaleSourceNode": number;
    "NodeListCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeVertexMapDesc_t(ptr_or_class: string|AnySDKClass): FeVertexMapDesc_t;