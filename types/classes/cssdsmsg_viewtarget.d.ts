interface CSSDSMsg_ViewTarget {
    "Name": string;
    "TextureId": number;
    "Width": number;
    "Height": number;
    "RequestedWidth": number;
    "RequestedHeight": number;
    "NumMipLevels": number;
    "Depth": number;
    "MultisampleNumSamples": number;
    "Format": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_ViewTarget(ptr_or_class: string|AnySDKClass): CSSDSMsg_ViewTarget;