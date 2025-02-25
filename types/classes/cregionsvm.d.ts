interface CRegionSVM {
    readonly "Planes": Object;
    readonly "Nodes": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRegionSVM(ptr_or_class: string|AnySDKClass): CRegionSVM;