interface CAnimParameterManagerUpdater {
    readonly "IndexToHandle": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimParameterManagerUpdater(ptr_or_class: string|AnySDKClass): CAnimParameterManagerUpdater;