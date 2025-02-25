interface CInfoSpawnGroupLandmark {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoSpawnGroupLandmark(ptr_or_class: string|AnySDKClass): CInfoSpawnGroupLandmark;