interface CIncendiaryGrenade {
    readonly "Parent": CMolotovGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CIncendiaryGrenade(ptr_or_class: string|AnySDKClass): CIncendiaryGrenade;