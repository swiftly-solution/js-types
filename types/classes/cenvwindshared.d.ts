interface CEnvWindShared {
    "StartTime": number;
    "WindSeed": number;
    "MinWind": number;
    "MaxWind": number;
    "WindRadius": number;
    "MinGust": number;
    "MaxGust": number;
    "MinGustDelay": number;
    "MaxGustDelay": number;
    "GustDuration": number;
    "GustDirChange": number;
    "Location": Vector;
    "GustSound": number;
    "WindDir": number;
    "WindSpeed": number;
    "CurrentWindVector": Vector;
    "CurrentSwayVector": Vector;
    "PrevSwayVector": Vector;
    "InitialWindDir": number;
    "InitialWindSpeed": number;
    readonly "OnGustStart": CEntityIOOutput;
    readonly "OnGustEnd": CEntityIOOutput;
    "VariationTime": number;
    "SwayTime": number;
    "SimTime": number;
    "SwitchTime": number;
    "AveWindSpeed": number;
    "Gusting": boolean;
    "WindAngleVariation": number;
    "WindSpeedVariation": number;
    readonly "EntOwner": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvWindShared(ptr_or_class: string|AnySDKClass): CEnvWindShared;