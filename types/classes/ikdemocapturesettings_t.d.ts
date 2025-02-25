interface IKDemoCaptureSettings_t {
    "ParentBoneName": string;
    "Mode": number;
    "IkChainName": string;
    "OneBoneStart": string;
    "OneBoneEnd": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKDemoCaptureSettings_t(ptr_or_class: string|AnySDKClass): IKDemoCaptureSettings_t;