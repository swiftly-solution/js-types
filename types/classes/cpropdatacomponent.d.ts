interface CPropDataComponent {
    "DmgModBullet": number;
    "DmgModClub": number;
    "DmgModExplosive": number;
    "DmgModFire": number;
    "PhysicsDamageTableName": string;
    "BasePropData": string;
    "Interactions": number;
    "SpawnMotionDisabled": boolean;
    "DisableTakePhysicsDamageSpawnFlag": number;
    "MotionDisabledSpawnFlag": number;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPropDataComponent(ptr_or_class: string|AnySDKClass): CPropDataComponent;