interface CInfoTarget {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoTarget(ptr_or_class: string|AnySDKClass): CInfoTarget;