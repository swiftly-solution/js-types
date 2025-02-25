interface IPhysicsPlayerController {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IPhysicsPlayerController(ptr_or_class: string|AnySDKClass): IPhysicsPlayerController;