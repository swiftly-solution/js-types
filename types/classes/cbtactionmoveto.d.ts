interface CBtActionMoveTo {
    "DestinationInputKey": string;
    "HidingSpotInputKey": string;
    "ThreatInputKey": string;
    "Destination": Vector;
    "AutoLookAdjust": boolean;
    "ComputePath": boolean;
    "DamagingAreasPenaltyCost": number;
    readonly "CheckApproximateCornersTimer": CountdownTimer;
    readonly "CheckHighPriorityItem": CountdownTimer;
    readonly "RepathTimer": CountdownTimer;
    "ArrivalEpsilon": number;
    "AdditionalArrivalEpsilon2D": number;
    "HidingSpotCheckDistanceThreshold": number;
    "NearestAreaDistanceThreshold": number;
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtActionMoveTo(ptr_or_class: string|AnySDKClass): CBtActionMoveTo;