interface CSSDSMsg_ViewTargetList {
    readonly "ViewId": SceneViewId_t;
    "ViewName": string;
    readonly "Targets": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_ViewTargetList(ptr_or_class: string|AnySDKClass): CSSDSMsg_ViewTargetList;