interface VPhysXCollisionAttributes_t {
    "CollisionGroup": number;
    readonly "InteractAs": Object;
    readonly "InteractWith": Object;
    readonly "InteractExclude": Object;
    "CollisionGroupString": string;
    readonly "InteractAsStrings": Object;
    readonly "InteractWithStrings": Object;
    readonly "InteractExcludeStrings": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXCollisionAttributes_t(ptr_or_class: string|AnySDKClass): VPhysXCollisionAttributes_t;