interface MotionBlendItem {
    "KeyValue": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MotionBlendItem(ptr_or_class: string|AnySDKClass): MotionBlendItem;