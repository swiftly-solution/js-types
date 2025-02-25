interface CPathAnimMotorUpdater {
    readonly "Parent": CPathAnimMotorUpdaterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathAnimMotorUpdater(ptr_or_class: string|AnySDKClass): CPathAnimMotorUpdater;