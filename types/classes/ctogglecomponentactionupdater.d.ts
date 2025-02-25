interface CToggleComponentActionUpdater {
    readonly "ComponentID": AnimComponentID;
    "SetEnabled": boolean;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CToggleComponentActionUpdater(ptr_or_class: string|AnySDKClass): CToggleComponentActionUpdater;