interface CLODComponentUpdater {
    "ServerLOD": number;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLODComponentUpdater(ptr_or_class: string|AnySDKClass): CLODComponentUpdater;