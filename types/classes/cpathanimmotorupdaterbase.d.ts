interface CPathAnimMotorUpdaterBase {
    "LockToPath": boolean;
    readonly "Parent": CAnimMotorUpdaterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathAnimMotorUpdaterBase(ptr_or_class: string|AnySDKClass): CPathAnimMotorUpdaterBase;