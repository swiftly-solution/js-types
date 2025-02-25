interface CMaterialAttributeAnimTag {
    "AttributeName": string;
    "AttributeType": number;
    "Value": number;
    "Color": Color;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMaterialAttributeAnimTag(ptr_or_class: string|AnySDKClass): CMaterialAttributeAnimTag;