interface CShower {
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CShower(ptr_or_class: string|AnySDKClass): CShower;