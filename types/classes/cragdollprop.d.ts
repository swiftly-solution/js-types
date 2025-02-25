interface CRagdollProp {
    readonly "Ragdoll": ragdoll_t;
    "StartDisabled": boolean;
    readonly "RagPos": Object;
    readonly "RagAngles": Object;
    readonly "RagdollSource": CBaseEntity;
    "LastUpdateTickCount": number;
    "AllAsleep": boolean;
    "FirstCollisionAfterLaunch": boolean;
    readonly "DamageEntity": CBaseEntity;
    readonly "Killer": CBaseEntity;
    readonly "PhysicsAttacker": CBasePlayerPawn;
    "LastPhysicsInfluenceTime": number;
    "FadeOutStartTime": number;
    "FadeTime": number;
    "LastOrigin": Vector;
    "AwakeTime": number;
    "LastOriginChangeTime": number;
    "StrOriginClassName": string;
    "StrSourceClassName": string;
    "HasBeenPhysgunned": boolean;
    "ShouldTeleportPhysics": boolean;
    "BlendWeight": number;
    "DefaultFadeScale": number;
    readonly "RagdollMins": Object;
    readonly "RagdollMaxs": Object;
    "ShouldDeleteActivationRecord": boolean;
    "ValidatePoweredRagdollPose": boolean;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollProp(ptr_or_class: string|AnySDKClass): CRagdollProp;