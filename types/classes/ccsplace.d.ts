interface CCSPlace {
    "Name": string;
    readonly "Parent": CServerOnlyModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlace(ptr_or_class: string|AnySDKClass): CCSPlace;