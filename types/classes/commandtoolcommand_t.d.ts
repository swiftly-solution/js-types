interface CommandToolCommand_t {
    "Enabled": boolean;
    "Opened": boolean;
    "InternalId": number;
    "ShortName": string;
    "ExecMode": number;
    "SpawnGroup": string;
    "PeriodicExecDelay": number;
    "SpecType": number;
    "EntitySpec": string;
    "Commands": string;
    "SetDebugBits": number;
    "ClearDebugBits": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CommandToolCommand_t(ptr_or_class: string|AnySDKClass): CommandToolCommand_t;