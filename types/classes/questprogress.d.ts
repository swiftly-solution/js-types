interface QuestProgress {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function QuestProgress(ptr_or_class: string|AnySDKClass): QuestProgress;