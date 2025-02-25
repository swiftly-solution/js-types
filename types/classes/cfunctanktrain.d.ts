interface CFuncTankTrain {
    readonly "OnDeath": CEntityIOOutput;
    readonly "Parent": CFuncTrackTrain;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTankTrain(ptr_or_class: string|AnySDKClass): CFuncTankTrain;