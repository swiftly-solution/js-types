interface CHandleTest {
    readonly "Handle": CBaseEntity;
    "SendHandle": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHandleTest(ptr_or_class: string|AnySDKClass): CHandleTest;