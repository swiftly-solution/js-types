interface CInfoLadderDismount {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoLadderDismount(ptr_or_class: string|AnySDKClass): CInfoLadderDismount;