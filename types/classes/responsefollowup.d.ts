interface ResponseFollowup {
    "Followup_concept": string;
    "Followup_contexts": string;
    "Followup_delay": number;
    "Followup_target": string;
    "Followup_entityiotarget": string;
    "Followup_entityioinput": string;
    "Followup_entityiodelay": number;
    "Fired": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ResponseFollowup(ptr_or_class: string|AnySDKClass): ResponseFollowup;