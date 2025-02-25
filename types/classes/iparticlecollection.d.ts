interface IParticleCollection {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IParticleCollection(ptr_or_class: string|AnySDKClass): IParticleCollection;