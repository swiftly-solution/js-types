interface CSosSoundEventGroupSchema {
    "Name": string;
    "Type": number;
    "IsBlocking": boolean;
    "BlockMaxCount": number;
    "InvertMatch": boolean;
    readonly "MatchPattern": CSosGroupMatchPattern;
    readonly "BranchPattern": CSosGroupBranchPattern;
    "LifeSpanTime": number;
    readonly "Actions": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosSoundEventGroupSchema(ptr_or_class: string|AnySDKClass): CSosSoundEventGroupSchema;