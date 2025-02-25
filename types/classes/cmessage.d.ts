interface CMessage {
    "Message": string;
    "MessageVolume": number;
    "MessageAttenuation": number;
    "Radius": number;
    "Noise": string;
    readonly "OnShowMessage": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMessage(ptr_or_class: string|AnySDKClass): CMessage;