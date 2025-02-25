interface MaterialOverride_t {
    "SubSceneObject": number;
    "DrawCallIndex": number;
    readonly "Parent": BaseSceneObjectOverride_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialOverride_t(ptr_or_class: string|AnySDKClass): MaterialOverride_t;