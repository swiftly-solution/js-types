interface IVGUI {
    SetTextPosition: (textID: number,posX: number,posY: number) => null|undefined;
    SetTextMessage: (textID: number,message: string) => null|undefined;
    RemoveText: (textID: number) => null|undefined;
    ShowText: (playerid: number,color: Color,text: string,posX: number,posY: number,font_name: string,background: boolean|null) => number;
}
declare const vgui : IVGUI