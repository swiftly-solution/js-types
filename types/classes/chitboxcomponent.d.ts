interface CHitboxComponent {
    "DisabledHitGroups": Object;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitboxComponent(ptr_or_class: string|AnySDKClass): CHitboxComponent;