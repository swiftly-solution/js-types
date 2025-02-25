interface CAnimMotorUpdaterBase {
    "Name": string;
    "Default": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimMotorUpdaterBase(ptr_or_class: string|AnySDKClass): CAnimMotorUpdaterBase;