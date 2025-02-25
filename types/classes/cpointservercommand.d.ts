interface CPointServerCommand {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointServerCommand(ptr_or_class: string|AnySDKClass): CPointServerCommand;