interface CPointEntityFinder {
    readonly "Entity": CBaseEntity;
    "FilterName": string;
    readonly "Filter": CBaseFilter;
    "RefName": string;
    readonly "Reference": CBaseEntity;
    "FindMethod": number;
    readonly "OnFoundEntity": CEntityIOOutput;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointEntityFinder(ptr_or_class: string|AnySDKClass): CPointEntityFinder;