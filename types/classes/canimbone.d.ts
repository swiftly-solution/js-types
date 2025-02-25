interface CAnimBone {
    "Parent": number;
    "Pos": Vector;
    "Scale": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimBone(ptr_or_class: string|AnySDKClass): CAnimBone;