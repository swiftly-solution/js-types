interface CServerRagdollTrigger {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerRagdollTrigger(ptr_or_class: string|AnySDKClass): CServerRagdollTrigger;