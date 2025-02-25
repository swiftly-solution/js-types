interface IPlayerManager {
    SendMsg: (msgType: MessageType,text: string) => null|undefined;
    GetPlayerCap: () => number;
    GetPlayerCount: () => number;
}
declare const playermanager : IPlayerManager