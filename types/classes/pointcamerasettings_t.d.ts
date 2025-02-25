interface PointCameraSettings_t {
    "NearBlurryDistance": number;
    "NearCrispDistance": number;
    "FarCrispDistance": number;
    "FarBlurryDistance": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PointCameraSettings_t(ptr_or_class: string|AnySDKClass): PointCameraSettings_t;