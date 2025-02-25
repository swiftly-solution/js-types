interface CEntityComponentHelper {
    "Flags": number;
    readonly "Info": EntComponentInfo_t;
    "Priority": number;
    readonly "Next": CEntityComponentHelper;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityComponentHelper(ptr_or_class: string|AnySDKClass): CEntityComponentHelper;