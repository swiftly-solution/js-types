interface CMultiSource {
    readonly "RgEntities": Object;
    "RgTriggered": Object;
    readonly "OnTrigger": CEntityIOOutput;
    "Total": number;
    "Globalstate": string;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMultiSource(ptr_or_class: string|AnySDKClass): CMultiSource;