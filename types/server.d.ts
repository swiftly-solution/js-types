interface IServer {
    GetTickCount: () => number;
    GetCurrentTime: () => number;
    Execute: (command: string) => null|undefined;
    GetMaxPlayers: () => number;
    ChangeMap: (map: string,workshop: boolean) => null|undefined;
    IsMapValid: (map: string) => boolean;
    GetMap: () => string;
    GetIP: () => string;
    TerminateRound: (delay: number,reason: RoundEndReason_t) => null|undefined;
}
declare const server : IServer