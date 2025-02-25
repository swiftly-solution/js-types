interface CParticleCollectionBindingInstance {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleCollectionBindingInstance(ptr_or_class: string|AnySDKClass): CParticleCollectionBindingInstance;