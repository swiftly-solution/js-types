interface CStateMachineUpdateNode {
    readonly "StateMachine": CAnimStateMachineUpdater;
    readonly "StateData": Object;
    readonly "TransitionData": Object;
    "BlockWaningTags": boolean;
    "LockStateWhenWaning": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateMachineUpdateNode(ptr_or_class: string|AnySDKClass): CStateMachineUpdateNode;