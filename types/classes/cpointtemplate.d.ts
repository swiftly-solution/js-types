interface CPointTemplate {
    "WorldName": string;
    "Source2EntityLumpName": string;
    "EntityFilterName": string;
    "TimeoutInterval": number;
    "AsynchronouslySpawnEntities": boolean;
    readonly "OutputOnSpawned": CEntityIOOutput;
    "ClientOnlyEntityBehavior": number;
    "OwnerSpawnGroupType": number;
    readonly "CreatedSpawnGroupHandles": Object;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointTemplate(ptr_or_class: string|AnySDKClass): CPointTemplate;