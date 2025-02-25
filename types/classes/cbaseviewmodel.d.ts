interface CBaseViewModel {
    "LastFacing": Vector;
    "ViewModelIndex": number;
    "AnimationParity": number;
    "AnimationStartTime": number;
    readonly "Weapon": CBasePlayerWeapon;
    "VMName": string;
    "AnimationPrefix": string;
    "OldLayerSequence": number;
    "OldLayer": number;
    "OldLayerStartTime": number;
    readonly "ControlPanel": CBaseEntity;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseViewModel(ptr_or_class: string|AnySDKClass): CBaseViewModel;