interface CBaseProp {
    "ModelOverrodeBlockLOS": boolean;
    "ShapeType": number;
    "ConformToCollisionBounds": boolean;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseProp(ptr_or_class: string|AnySDKClass): CBaseProp;