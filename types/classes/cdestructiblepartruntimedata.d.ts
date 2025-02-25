interface CDestructiblePartRuntimeData {
    "HealthRemaining": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartRuntimeData(ptr_or_class: string|AnySDKClass): CDestructiblePartRuntimeData;