interface AnimationSnapshot_t {
    "EntIndex": number;
    "ModelName": string;
    readonly "Parent": AnimationSnapshotBase_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimationSnapshot_t(ptr_or_class: string|AnySDKClass): AnimationSnapshot_t;