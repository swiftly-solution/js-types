interface ViewAngleServerChange_t {
    "Type": number;
    "Angle": QAngle;
    "Index": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ViewAngleServerChange_t(ptr_or_class: string|AnySDKClass): ViewAngleServerChange_t;