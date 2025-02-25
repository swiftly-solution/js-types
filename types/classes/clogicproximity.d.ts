interface CLogicProximity {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicProximity(ptr_or_class: string|AnySDKClass): CLogicProximity;