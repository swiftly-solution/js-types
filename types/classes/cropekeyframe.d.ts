interface CRopeKeyframe {
    "RopeFlags": number;
    "NextLinkName": string;
    "Slack": number;
    "Width": number;
    "TextureScale": number;
    "Segments": number;
    "ConstrainBetweenEndpoints": boolean;
    "StrRopeMaterialModel": string;
    "Subdiv": number;
    "ChangeCount": number;
    "RopeLength": number;
    "LockedPoints": number;
    "CreatedFromMapFile": boolean;
    "ScrollSpeed": number;
    "StartPointValid": boolean;
    "EndPointValid": boolean;
    readonly "StartPoint": CBaseEntity;
    readonly "EndPoint": CBaseEntity;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRopeKeyframe(ptr_or_class: string|AnySDKClass): CRopeKeyframe;