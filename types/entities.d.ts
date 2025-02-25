interface IEntities {
}
declare function AddHookEntityOutput(className: string,output: string) : HookHandle;
declare function FindEntitiesByClassname(className: string) : Object;
declare function CreateEntityByName(className: string) : CEntityInstance;