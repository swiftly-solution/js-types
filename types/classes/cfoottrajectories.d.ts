interface CFootTrajectories {
    readonly "Trajectories": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootTrajectories(ptr_or_class: string|AnySDKClass): CFootTrajectories;