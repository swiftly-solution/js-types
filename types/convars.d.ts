interface IConvars {
    HasFlags: (name: string,flags: number) => boolean;
    GetFlags: (name: string) => number;
    RemoveFlags: (name: string,flags: number) => null|undefined;
    AddFlags: (name: string,flags: number) => null|undefined;
    ExistsFake: (name: string) => boolean;
    Exists: (name: string) => boolean;
    Set: (name: string,value: string) => null|undefined;
    GetType: (name: string) => EConVarType;
    Get: (name: string) => any;
    DeleteFake: (name: string) => null|undefined;
    CreateFake: (name: string,cvartype: EConVarType,defaultValue: any,protected: boolean) => null|undefined;
}
declare const convar : IConvars