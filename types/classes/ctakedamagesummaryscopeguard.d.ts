interface CTakeDamageSummaryScopeGuard {
    readonly "Summaries": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTakeDamageSummaryScopeGuard(ptr_or_class: string|AnySDKClass): CTakeDamageSummaryScopeGuard;