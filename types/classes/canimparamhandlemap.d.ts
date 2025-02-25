interface CAnimParamHandleMap {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimParamHandleMap(ptr_or_class: string|AnySDKClass): CAnimParamHandleMap;