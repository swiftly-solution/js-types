interface CSSDSMsg_LayerBase {
    readonly "ViewId": SceneViewId_t;
    "ViewName": string;
    "LayerIndex": number;
    "LayerId": number;
    "LayerName": string;
    "DisplayText": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_LayerBase(ptr_or_class: string|AnySDKClass): CSSDSMsg_LayerBase;