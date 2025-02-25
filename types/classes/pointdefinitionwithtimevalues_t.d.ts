interface PointDefinitionWithTimeValues_t {
    "TimeDuration": number;
    readonly "Parent": PointDefinition_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PointDefinitionWithTimeValues_t(ptr_or_class: string|AnySDKClass): PointDefinitionWithTimeValues_t;