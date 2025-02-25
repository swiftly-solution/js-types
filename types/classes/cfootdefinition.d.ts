interface CFootDefinition {
    "Name": string;
    "AnkleBoneName": string;
    "ToeBoneName": string;
    "BallOffset": Vector;
    "HeelOffset": Vector;
    "FootLength": number;
    "BindPoseDirectionMS": number;
    "TraceHeight": number;
    "TraceRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootDefinition(ptr_or_class: string|AnySDKClass): CFootDefinition;