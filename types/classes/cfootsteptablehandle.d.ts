interface CFootstepTableHandle {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootstepTableHandle(ptr_or_class: string|AnySDKClass): CFootstepTableHandle;