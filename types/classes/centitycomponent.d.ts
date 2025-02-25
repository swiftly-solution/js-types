interface CEntityComponent {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityComponent(ptr_or_class: string|AnySDKClass): CEntityComponent;