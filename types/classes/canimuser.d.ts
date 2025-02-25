interface CAnimUser {
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUser(ptr_or_class: string|AnySDKClass): CAnimUser;