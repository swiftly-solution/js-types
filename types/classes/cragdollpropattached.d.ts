interface CRagdollPropAttached {
    "BoneIndexAttached": number;
    "RagdollAttachedObjectIndex": number;
    "AttachmentPointBoneSpace": Vector;
    "AttachmentPointRagdollSpace": Vector;
    "ShouldDetach": boolean;
    "ShouldDeleteAttachedActivationRecord": boolean;
    readonly "Parent": CRagdollProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollPropAttached(ptr_or_class: string|AnySDKClass): CRagdollPropAttached;