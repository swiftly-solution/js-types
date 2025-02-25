interface CInstructorEventEntity {
    "Name": string;
    "HintTargetEntity": string;
    readonly "TargetPlayer": CBasePlayerPawn;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInstructorEventEntity(ptr_or_class: string|AnySDKClass): CInstructorEventEntity;