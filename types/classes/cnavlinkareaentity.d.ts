interface CNavLinkAreaEntity {
    "Width": number;
    "LocatorOffset": Vector;
    "LocatorAnglesOffset": QAngle;
    "StrMovementForward": string;
    "StrMovementReverse": string;
    "NavLinkIdForward": number;
    "NavLinkIdReverse": number;
    "Enabled": boolean;
    "StrFilterName": string;
    readonly "Filter": CBaseFilter;
    readonly "OnNavLinkStart": CEntityIOOutput;
    readonly "OnNavLinkFinish": CEntityIOOutput;
    "IsTerminus": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavLinkAreaEntity(ptr_or_class: string|AnySDKClass): CNavLinkAreaEntity;