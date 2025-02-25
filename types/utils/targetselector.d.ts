interface ITargetSelector {
}
declare function GetPlayer(playerid: number) : IPlayer;
declare function FindPlayersByTarget(target: string,matchbots: boolean) : Object[]; // of Player