interface CFeVertexMapBuildArray {
    readonly "Array": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeVertexMapBuildArray(ptr_or_class: string|AnySDKClass): CFeVertexMapBuildArray;