interface CCSPlayerController_InGameMoneyServices {
    "ReceivesMoneyNextRound": boolean;
    "MoneyEarnedForNextRound": number;
    "Account": number;
    "StartAccount": number;
    "TotalCashSpent": number;
    "CashSpentThisRound": number;
    readonly "Parent": CPlayerControllerComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerController_InGameMoneyServices(ptr_or_class: string|AnySDKClass): CCSPlayerController_InGameMoneyServices;