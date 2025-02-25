interface CInfoTargetServerOnly {
    readonly "Parent": CServerOnlyPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoTargetServerOnly(ptr_or_class: string|AnySDKClass): CInfoTargetServerOnly;