interface CAnimUpdateNodeBase {
    readonly "NodePath": CAnimNodePath;
    "NetworkMode": number;
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUpdateNodeBase(ptr_or_class: string|AnySDKClass): CAnimUpdateNodeBase;