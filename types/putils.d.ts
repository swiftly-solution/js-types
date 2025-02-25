interface IPlayerUtils {
    IsListeningToGameEvent: (playerid: number,event_name: string) => boolean;
    GetBunnyhop: (playerid: number) => boolean;
    SetBunnyhop: (playerid: number,state: boolean) => null|undefined;
}
declare const playerutils : IPlayerUtils