interface MotionIndex {
    "Group": number;
    "Motion": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MotionIndex(ptr_or_class: string|AnySDKClass): MotionIndex;