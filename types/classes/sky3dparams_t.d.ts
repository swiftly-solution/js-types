interface sky3dparams_t {
    "Scale": number;
    "Origin": Vector;
    "Clip3DSkyBoxNearToWorldFar": boolean;
    "Clip3DSkyBoxNearToWorldFarOffset": number;
    readonly "Fog": fogparams_t;
    "WorldGroupID": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function sky3dparams_t(ptr_or_class: string|AnySDKClass): sky3dparams_t;