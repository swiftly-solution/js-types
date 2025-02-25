interface CAnimActivity {
    "Activity": number;
    "Flags": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimActivity(ptr_or_class: string|AnySDKClass): CAnimActivity;