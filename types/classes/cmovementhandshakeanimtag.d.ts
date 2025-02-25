interface CMovementHandshakeAnimTag {
    readonly "Parent": CHandshakeAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMovementHandshakeAnimTag(ptr_or_class: string|AnySDKClass): CMovementHandshakeAnimTag;