interface FollowAttachmentSettings_t {
    readonly "Attachment": CAnimAttachment;
    "BoneIndex": number;
    "MatchTranslation": boolean;
    "MatchRotation": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FollowAttachmentSettings_t(ptr_or_class: string|AnySDKClass): FollowAttachmentSettings_t;