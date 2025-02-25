interface CBaseClientUIEntity {
    "Enabled": boolean;
    "DialogXMLName": string;
    "PanelClassName": string;
    "PanelID": string;
    readonly "CustomOutput0": CEntityIOOutput;
    readonly "CustomOutput1": CEntityIOOutput;
    readonly "CustomOutput2": CEntityIOOutput;
    readonly "CustomOutput3": CEntityIOOutput;
    readonly "CustomOutput4": CEntityIOOutput;
    readonly "CustomOutput5": CEntityIOOutput;
    readonly "CustomOutput6": CEntityIOOutput;
    readonly "CustomOutput7": CEntityIOOutput;
    readonly "CustomOutput8": CEntityIOOutput;
    readonly "CustomOutput9": CEntityIOOutput;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseClientUIEntity(ptr_or_class: string|AnySDKClass): CBaseClientUIEntity;