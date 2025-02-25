interface CGameSceneNode {
    readonly "Owner": CEntityInstance;
    readonly "Parent": CGameSceneNode;
    readonly "Child": CGameSceneNode;
    readonly "NextSibling": CGameSceneNode;
    readonly "Origin": CNetworkOriginCellCoordQuantizedVector;
    "Rotation": QAngle;
    "Scale": number;
    "AbsOrigin": Vector;
    "AbsRotation": QAngle;
    "AbsScale": number;
    "ParentAttachmentOrBone": number;
    "DebugAbsOriginChanges": boolean;
    "Dormant": boolean;
    "ForceParentToBeNetworked": boolean;
    "DirtyHierarchy": any;
    "DirtyBoneMergeInfo": any;
    "NetworkedPositionChanged": any;
    "NetworkedAnglesChanged": any;
    "NetworkedScaleChanged": any;
    "WillBeCallingPostDataUpdate": any;
    "BoneMergeFlex": any;
    "LatchAbsOrigin": any;
    "DirtyBoneMergeBoneToRoot": any;
    "HierarchicalDepth": number;
    "HierarchyType": number;
    "DoNotSetAnimTimeInInvalidatePhysicsCount": number;
    "Name": number;
    "HierarchyAttachName": number;
    "ZOffset": number;
    "ClientLocalScale": number;
    "RenderOrigin": Vector;
    GetSkeletonInstance: () => CSkeletonInstance;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameSceneNode(ptr_or_class: string|AnySDKClass): CGameSceneNode;