interface CRagdollManager {
    "CurrentMaxRagdollCount": number;
    "MaxRagdollCount": number;
    "SaveImportant": boolean;
    "CanTakeDamage": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollManager(ptr_or_class: string|AnySDKClass): CRagdollManager;