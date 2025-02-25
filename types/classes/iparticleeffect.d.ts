interface IParticleEffect {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IParticleEffect(ptr_or_class: string|AnySDKClass): IParticleEffect;