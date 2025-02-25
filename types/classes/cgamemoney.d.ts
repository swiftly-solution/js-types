interface CGameMoney {
    readonly "OnMoneySpent": CEntityIOOutput;
    readonly "OnMoneySpentFail": CEntityIOOutput;
    "Money": number;
    "StrAwardText": string;
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameMoney(ptr_or_class: string|AnySDKClass): CGameMoney;