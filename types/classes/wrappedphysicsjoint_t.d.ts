interface WrappedPhysicsJoint_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WrappedPhysicsJoint_t(ptr_or_class: string|AnySDKClass): WrappedPhysicsJoint_t;