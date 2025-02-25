interface IHooks {
}
declare function AddHook(memory: IMemory,args_list: string,return_type: string) : HookHandle;
declare function AddPreHookListener(hookHandle: HookHandle,callback: (event:Event) => EventResult) : EventHandler;
declare function AddPostHookListener(hookHandle: HookHandle,callback: (event:Event) => EventResult) : EventHandler;
declare function RemoveHookListener(eventHandler: EventHandler) : null|undefined;
declare function CallHook(hookHandle: HookHandle,...args: any[]) : any;