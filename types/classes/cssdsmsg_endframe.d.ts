interface CSSDSMsg_EndFrame {
    readonly "Views": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_EndFrame(ptr_or_class: string|AnySDKClass): CSSDSMsg_EndFrame;