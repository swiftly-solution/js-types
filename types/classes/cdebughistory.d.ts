interface CDebugHistory {
    "NpcEvents": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDebugHistory(ptr_or_class: string|AnySDKClass): CDebugHistory;