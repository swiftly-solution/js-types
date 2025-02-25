interface IGeneric {
}
declare function GetCurrentPluginName() : string;
declare function GetPluginPath(plugin_name: string) : string;
declare function GetPluginState(plugin_name: string) : PluginState_t;
declare function CreateTextTable(data: Object) : string;