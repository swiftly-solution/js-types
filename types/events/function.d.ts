interface IFunctions {
}
declare function AddEventHandler(eventName: GameEvent,callback: (event:Event,...args: any[]) => EventResult|null) : EventHandler;
declare function RemoveEventHandler(eventHandler: EventHandler) : null|undefined;
declare function TriggerEvent(eventName: GameEvent,...args: any[]) : [EventResult, Event];