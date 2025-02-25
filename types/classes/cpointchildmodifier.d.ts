interface CPointChildModifier {
    "OrphanInsteadOfDeletingChildrenOnRemove": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointChildModifier(ptr_or_class: string|AnySDKClass): CPointChildModifier;