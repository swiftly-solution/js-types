interface CFollowAttachmentUpdateNode {
    readonly "OpFixedData": FollowAttachmentSettings_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFollowAttachmentUpdateNode(ptr_or_class: string|AnySDKClass): CFollowAttachmentUpdateNode;