interface CFilterModel {
    "FilterModel": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterModel(ptr_or_class: string|AnySDKClass): CFilterModel;