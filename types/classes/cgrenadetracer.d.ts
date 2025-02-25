interface CGrenadeTracer {
    "TracerDuration": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGrenadeTracer(ptr_or_class: string|AnySDKClass): CGrenadeTracer;