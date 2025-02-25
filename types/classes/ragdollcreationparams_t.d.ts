interface RagdollCreationParams_t {
    "Force": Vector;
    "ForceBone": number;
    "ForceCurrentWorldTransform": boolean;
    "HealthToGrant": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RagdollCreationParams_t(ptr_or_class: string|AnySDKClass): RagdollCreationParams_t;