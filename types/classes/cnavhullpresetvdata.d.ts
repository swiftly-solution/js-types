interface CNavHullPresetVData {
    readonly "NavHulls": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavHullPresetVData(ptr_or_class: string|AnySDKClass): CNavHullPresetVData;