interface ILogs {
    Write: (log_type: LogType_t,text: string) => null|undefined;
}
declare const logger : ILogs