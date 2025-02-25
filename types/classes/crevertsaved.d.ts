interface CRevertSaved {
    "LoadTime": number;
    "Duration": number;
    "HoldTime": number;
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRevertSaved(ptr_or_class: string|AnySDKClass): CRevertSaved;