interface CSosSoundEventGroupListSchema {
    readonly "GroupList": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosSoundEventGroupListSchema(ptr_or_class: string|AnySDKClass): CSosSoundEventGroupListSchema;