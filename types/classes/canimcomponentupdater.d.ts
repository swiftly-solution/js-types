interface CAnimComponentUpdater {
    "Name": string;
    readonly "Id": AnimComponentID;
    "NetworkMode": number;
    "StartEnabled": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimComponentUpdater(ptr_or_class: string|AnySDKClass): CAnimComponentUpdater;