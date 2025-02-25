interface EntityIOConnectionData_t {
    "OutputName": string;
    "TargetType": number;
    "TargetName": string;
    "InputName": string;
    "OverrideParam": string;
    "Delay": number;
    "TimesToFire": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntityIOConnectionData_t(ptr_or_class: string|AnySDKClass): EntityIOConnectionData_t;