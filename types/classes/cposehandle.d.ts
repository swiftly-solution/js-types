interface CPoseHandle {
    "Index": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPoseHandle(ptr_or_class: string|AnySDKClass): CPoseHandle;