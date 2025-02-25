interface CConstantForceController {
    "Linear": Vector;
    "Angular": Vector;
    "LinearSave": Vector;
    "AngularSave": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstantForceController(ptr_or_class: string|AnySDKClass): CConstantForceController;