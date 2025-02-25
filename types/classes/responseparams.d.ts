interface ResponseParams {
    "Odds": number;
    "Flags": number;
    readonly "Followup": ResponseFollowup;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ResponseParams(ptr_or_class: string|AnySDKClass): ResponseParams;