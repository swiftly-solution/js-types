interface CLookComponentUpdater {
    readonly "LookHeading": CAnimParamHandle;
    readonly "LookHeadingVelocity": CAnimParamHandle;
    readonly "LookPitch": CAnimParamHandle;
    readonly "LookDistance": CAnimParamHandle;
    readonly "LookDirection": CAnimParamHandle;
    readonly "LookTarget": CAnimParamHandle;
    readonly "LookTargetWorldSpace": CAnimParamHandle;
    "NetworkLookTarget": boolean;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLookComponentUpdater(ptr_or_class: string|AnySDKClass): CLookComponentUpdater;