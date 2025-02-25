interface CEntityBlocker {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityBlocker(ptr_or_class: string|AnySDKClass): CEntityBlocker;