interface CSSDSEndFrameViewInfo {
    "ViewId": number;
    "ViewName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSEndFrameViewInfo(ptr_or_class: string|AnySDKClass): CSSDSEndFrameViewInfo;