interface CIronSightController {
    "IronSightAvailable": boolean;
    "IronSightAmount": number;
    "IronSightAmountGained": number;
    "IronSightAmountBiased": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CIronSightController(ptr_or_class: string|AnySDKClass): CIronSightController;