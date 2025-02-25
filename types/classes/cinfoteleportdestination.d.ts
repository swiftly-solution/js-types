interface CInfoTeleportDestination {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoTeleportDestination(ptr_or_class: string|AnySDKClass): CInfoTeleportDestination;