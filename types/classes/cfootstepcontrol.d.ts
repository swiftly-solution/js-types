interface CFootstepControl {
    "Source": string;
    "Destination": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootstepControl(ptr_or_class: string|AnySDKClass): CFootstepControl;