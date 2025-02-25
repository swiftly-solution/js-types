interface CAnimFoot {
    "Name": string;
    "BallOffset": Vector;
    "HeelOffset": Vector;
    "AnkleBoneIndex": number;
    "ToeBoneIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimFoot(ptr_or_class: string|AnySDKClass): CAnimFoot;