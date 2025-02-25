interface CEntityIdentity {
    "NameStringableIndex": number;
    "Name": string;
    "DesignerName": string;
    "Flags": number;
    "WorldGroupId": number;
    "DataObjectTypes": number;
    readonly "PathIndex": ChangeAccessorFieldPathIndex_t;
    readonly "Prev": CEntityIdentity;
    readonly "Next": CEntityIdentity;
    readonly "PrevByClass": CEntityIdentity;
    readonly "NextByClass": CEntityIdentity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityIdentity(ptr_or_class: string|AnySDKClass): CEntityIdentity;