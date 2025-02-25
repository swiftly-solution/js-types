interface CSSDSMsg_ViewRender {
    readonly "ViewId": SceneViewId_t;
    "ViewName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_ViewRender(ptr_or_class: string|AnySDKClass): CSSDSMsg_ViewRender;