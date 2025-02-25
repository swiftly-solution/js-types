interface IRagdoll {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IRagdoll(ptr_or_class: string|AnySDKClass): IRagdoll;