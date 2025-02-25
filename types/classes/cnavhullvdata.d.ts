interface CNavHullVData {
    "AgentEnabled": boolean;
    "AgentRadius": number;
    "AgentHeight": number;
    "AgentShortHeightEnabled": boolean;
    "AgentShortHeight": number;
    "AgentMaxClimb": number;
    "AgentMaxSlope": number;
    "AgentMaxJumpDownDist": number;
    "AgentMaxJumpHorizDistBase": number;
    "AgentMaxJumpUpDist": number;
    "AgentBorderErosion": number;
    "FlowMapGenerationEnabled": boolean;
    "FlowMapNodeMaxRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavHullVData(ptr_or_class: string|AnySDKClass): CNavHullVData;