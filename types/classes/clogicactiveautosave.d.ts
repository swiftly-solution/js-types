interface CLogicActiveAutosave {
    "TriggerHitPoints": number;
    "TimeToTrigger": number;
    "StartTime": number;
    "DangerousTime": number;
    readonly "Parent": CLogicAutosave;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicActiveAutosave(ptr_or_class: string|AnySDKClass): CLogicActiveAutosave;