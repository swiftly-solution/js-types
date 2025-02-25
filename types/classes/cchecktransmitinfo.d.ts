interface CCheckTransmitInfo {

    GetPlayers: () => Object;
    GetEntities: () => Object;
    SetEntities: (value: Object) => null|undefined;
}

declare function CCheckTransmitInfo(ptr_or_cchectransmitinfo: any): CCheckTransmitInfo;