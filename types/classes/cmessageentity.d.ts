interface CMessageEntity {
    "Radius": number;
    "MessageText": string;
    "DrawText": boolean;
    "DeveloperOnly": boolean;
    "Enabled": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMessageEntity(ptr_or_class: string|AnySDKClass): CMessageEntity;