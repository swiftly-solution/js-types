interface CAnimStateMachineUpdater {
    readonly "States": Object;
    readonly "Transitions": Object;
    "StartStateIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimStateMachineUpdater(ptr_or_class: string|AnySDKClass): CAnimStateMachineUpdater;