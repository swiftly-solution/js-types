interface CPhysSurfaceProperties {
    "Name": string;
    "NameHash": number;
    "BaseNameHash": number;
    "Hidden": boolean;
    "Description": string;
    readonly "Physics": CPhysSurfacePropertiesPhysics;
    readonly "AudioSounds": CPhysSurfacePropertiesSoundNames;
    readonly "AudioParams": CPhysSurfacePropertiesAudio;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysSurfaceProperties(ptr_or_class: string|AnySDKClass): CPhysSurfaceProperties;