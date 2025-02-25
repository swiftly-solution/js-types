interface CHandle {

    GetPtr: () => string;
    SetPtr: (ptr: string) => null|undefined;
    GetHandlePtr: () => string;
}

declare function CHandle(ptr: string): CHandle;