interface CPointBroadcastClientCommand {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointBroadcastClientCommand(ptr_or_class: string|AnySDKClass): CPointBroadcastClientCommand;