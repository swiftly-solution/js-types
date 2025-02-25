interface ICommands {
    GetAllCommands: () => Object;
    GetCommands: () => Object;
    UnregisterAlias: (alias: string) => null|undefined;
    RegisterAlias: (commandName: string,alias: string) => null|undefined;
    RegisterRawAlias: (commandName: string,alias: string) => null|undefined;
    Unregister: (commandName: string) => null|undefined;
    Register: (commandName: string,callback: (playerid:number,args:Object[],argsCount:number,silent:boolean,prefix:string) => void) => null|undefined;
}
declare const commands : ICommands