interface CHitBoxSetList {
    readonly "HitBoxSets": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitBoxSetList(ptr_or_class: string|AnySDKClass): CHitBoxSetList;