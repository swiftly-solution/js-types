interface CFootCycle {
    readonly "Parent": CCycleBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootCycle(ptr_or_class: string|AnySDKClass): CFootCycle;