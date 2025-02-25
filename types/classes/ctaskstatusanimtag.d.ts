interface CTaskStatusAnimTag {
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTaskStatusAnimTag(ptr_or_class: string|AnySDKClass): CTaskStatusAnimTag;