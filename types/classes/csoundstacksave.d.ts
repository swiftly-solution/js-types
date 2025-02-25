interface CSoundStackSave {
    "StackName": string;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundStackSave(ptr_or_class: string|AnySDKClass): CSoundStackSave;