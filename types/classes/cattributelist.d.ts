interface CAttributeList {
    readonly "Attributes": Object;
    readonly "Manager": CAttributeManager;
    SetOrAddAttributeValueByName: (str: string,value: number) => null|undefined;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAttributeList(ptr_or_class: string|AnySDKClass): CAttributeList;