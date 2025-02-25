interface CAnimGraphNetworkedVariables {
    readonly "PredNetBoolVariables": Object;
    readonly "PredNetByteVariables": Object;
    readonly "PredNetUInt16Variables": Object;
    readonly "PredNetIntVariables": Object;
    readonly "PredNetUInt32Variables": Object;
    readonly "PredNetUInt64Variables": Object;
    readonly "PredNetFloatVariables": Object;
    readonly "PredNetVectorVariables": Object;
    readonly "OwnerOnlyPredNetBoolVariables": Object;
    readonly "OwnerOnlyPredNetByteVariables": Object;
    readonly "OwnerOnlyPredNetUInt16Variables": Object;
    readonly "OwnerOnlyPredNetIntVariables": Object;
    readonly "OwnerOnlyPredNetUInt32Variables": Object;
    readonly "OwnerOnlyPredNetUInt64Variables": Object;
    readonly "OwnerOnlyPredNetFloatVariables": Object;
    readonly "OwnerOnlyPredNetVectorVariables": Object;
    "BoolVariablesCount": number;
    "OwnerOnlyBoolVariablesCount": number;
    "RandomSeedOffset": number;
    "LastTeleportTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphNetworkedVariables(ptr_or_class: string|AnySDKClass): CAnimGraphNetworkedVariables;