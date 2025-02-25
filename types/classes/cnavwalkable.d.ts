interface CNavWalkable {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavWalkable(ptr_or_class: string|AnySDKClass): CNavWalkable;