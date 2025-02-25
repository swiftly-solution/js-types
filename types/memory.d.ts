interface IMemory {
    IsValid: () => boolean;
    GetPtr: () => string;
    Clear: () => null|undefined;
    Deallocate: () => null|undefined;
    Allocate: (size: number) => null|undefined;
    RemoveOffsetByName: (offsetName: string) => null|undefined;
    AddOffsetByName: (offsetName: string) => null|undefined;
    RemoveOffset: (offset: number) => null|undefined;
    AddOffset: (offset: number) => null|undefined;
    LoadFromSignatureName: (signature: string) => null|undefined;
    LoadFromSignature: (library: string,signature: string) => null|undefined;
    LoadFromAddress: (address: string) => null|undefined;
    GetInt64: () => number;
    SetInt64: (value: number) => null|undefined;
    GetDouble: () => number;
    SetDouble: (value: number) => null|undefined;
    GetFloat: () => number;
    SetFloat: (value: number) => null|undefined;
    GetUInt64: () => number;
    SetUInt64: (value: number) => null|undefined;
    GetUInt: () => number;
    SetUInt: (value: number) => null|undefined;
    GetInt: () => number;
    SetInt: (value: number) => null|undefined;
    GetBool: () => boolean;
    SetBool: (value: boolean) => null|undefined;
    AccessVTableFromOffset: (offsetName: string) => null|undefined;
    AccessVTable: (offset: number) => null|undefined;
    AccessedVTable: () => boolean;
    AccessIndexFromOffset: (offsetName: string) => null|undefined;
    AccessIndex: (index: number) => null|undefined;
}
declare const memory : IMemory

declare function Memory(): IMemory;