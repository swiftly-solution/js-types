interface CAnimCycle {
    readonly "Parent": CCycleBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimCycle(ptr_or_class: string|AnySDKClass): CAnimCycle;