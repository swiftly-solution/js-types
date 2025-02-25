interface CPointClientCommand {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointClientCommand(ptr_or_class: string|AnySDKClass): CPointClientCommand;