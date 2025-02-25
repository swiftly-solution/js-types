interface CStateMachineComponentUpdater {
    readonly "StateMachine": CAnimStateMachineUpdater;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateMachineComponentUpdater(ptr_or_class: string|AnySDKClass): CStateMachineComponentUpdater;