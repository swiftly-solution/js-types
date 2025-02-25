interface RnCapsuleDesc_t {
    readonly "Capsule": RnCapsule_t;
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnCapsuleDesc_t(ptr_or_class: string|AnySDKClass): RnCapsuleDesc_t;