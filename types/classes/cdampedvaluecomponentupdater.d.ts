interface CDampedValueComponentUpdater {
    readonly "Items": Object;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDampedValueComponentUpdater(ptr_or_class: string|AnySDKClass): CDampedValueComponentUpdater;