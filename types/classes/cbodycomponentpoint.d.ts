interface CBodyComponentPoint {
    readonly "SceneNode": CGameSceneNode;
    readonly "Parent": CBodyComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentPoint(ptr_or_class: string|AnySDKClass): CBodyComponentPoint;