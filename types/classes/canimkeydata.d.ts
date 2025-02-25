interface CAnimKeyData {
    readonly "BoneArray": Object;
    readonly "UserArray": Object;
    "ChannelElements": number;
    readonly "DataChannelArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimKeyData(ptr_or_class: string|AnySDKClass): CAnimKeyData;