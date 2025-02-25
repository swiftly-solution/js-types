interface ITimers {
}
declare function SetTimeout(delay: number,callback: () => void) : null|undefined;
declare function SetTimer(delay: number,callback: () => void) : TimerHandle;
declare function StopTimer(timerid: TimerHandle) : null|undefined;
declare function NextTick(callback: () => void) : null|undefined;