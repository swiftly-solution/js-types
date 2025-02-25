interface CAnimTagManagerUpdater {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimTagManagerUpdater(ptr_or_class: string|AnySDKClass): CAnimTagManagerUpdater;