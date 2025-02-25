interface CEntitySubclassVDataBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntitySubclassVDataBase(ptr_or_class: string|AnySDKClass): CEntitySubclassVDataBase;