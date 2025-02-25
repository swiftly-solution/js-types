interface CSoundEnvelope {
    "Current": number;
    "Target": number;
    "Rate": number;
    "Forceupdate": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEnvelope(ptr_or_class: string|AnySDKClass): CSoundEnvelope;