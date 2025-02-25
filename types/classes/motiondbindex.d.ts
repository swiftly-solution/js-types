interface MotionDBIndex {
    "Index": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MotionDBIndex(ptr_or_class: string|AnySDKClass): MotionDBIndex;