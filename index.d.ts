

declare interface CCheckTransmitInfo {

    GetPlayers: () => Object;
    GetEntities: () => Object;
    SetEntities: (value: Object) => null|undefined;
}

declare function CCheckTransmitInfo(ptr_or_cchectransmitinfo: any): CCheckTransmitInfo;

declare interface CHandle {

    GetPtr: () => string;
    SetPtr: (ptr: string) => null|undefined;
    GetHandlePtr: () => string;
}

declare function CHandle(ptr: string): CHandle;

declare interface Color {
    "r": number;
    "g": number;
    "b": number;
    "a": number;
    GetPtr: () => string;
}

declare function Color(r: number,g: number,b: number,a: number): Color;

declare interface QAngle {
    "x": number;
    "y": number;
    "z": number;
    GetPtr: () => string;
    add: (value: QAngle) => QAngle;
    equal: (value: QAngle) => boolean;
    length: () => number;
    unm: (value: QAngle) => QAngle;
    sub: (value: QAngle) => QAngle;
    mul: (value: QAngle) => QAngle;
    div: (value: QAngle) => QAngle;
}

declare function QAngle(x: number,y: number,z: number): QAngle;

declare interface Vector {
    "x": number;
    "y": number;
    "z": number;
    GetPtr: () => string;
    add: (value: Vector) => Vector;
    equal: (value: Vector) => boolean;
    length: () => number;
    unm: (value: Vector) => Vector;
    sub: (value: Vector) => Vector;
    mul: (value: Vector) => Vector;
    div: (value: Vector) => Vector;
}

declare function Vector(x: number,y: number,z: number): Vector;

declare interface Vector2D {
    "x": number;
    "y": number;
    GetPtr: () => string;
    add: (value: Vector2D) => Vector2D;
    equal: (value: Vector2D) => boolean;
    length: () => number;
    unm: (value: Vector2D) => Vector2D;
    sub: (value: Vector2D) => Vector2D;
    mul: (value: Vector2D) => Vector2D;
    div: (value: Vector2D) => Vector2D;
}

declare function Vector2D(x: number,y: number): Vector2D;

declare interface Vector4D {
    "x": number;
    "y": number;
    "z": number;
    "w": number;
    GetPtr: () => string;
    add: (value: Vector4D) => Vector4D;
    equal: (value: Vector4D) => boolean;
    length: () => number;
    unm: (value: Vector4D) => Vector4D;
    sub: (value: Vector4D) => Vector4D;
    mul: (value: Vector4D) => Vector4D;
    div: (value: Vector4D) => Vector4D;
}

declare function Vector4D(x: number,y: number,z: number,w: number): Vector4D;

declare interface QueryBuilder {

    Table: (table_name: string) => QueryBuilder;
    Select: (columns: Object) => QueryBuilder;
    Insert: (insert_values: Object) => QueryBuilder;
    Update: (update_values: Object) => QueryBuilder;
    Delete: () => QueryBuilder;
    Where: (column: string,operator: string,value: any) => QueryBuilder;
    OrWhere: (column: string,operator: string,value: any) => QueryBuilder;
    Join: (table_name: string,condition: string,join_type: string) => QueryBuilder;
    OrderBy: (columns: Object) => QueryBuilder;
    Limit: (count: number) => QueryBuilder;
    GroupBy: (columns: Object) => QueryBuilder;
    Create: (columns: Object) => QueryBuilder;
    Alter: (addColumns: Object,removeColumns: Object,modifyColumns: Object) => QueryBuilder;
    Drop: () => QueryBuilder;
    OnDuplicate: (update_value: Object) => QueryBuilder;
    Having: (condition: string) => QueryBuilder;
    Distinct: () => QueryBuilder;
    Offset: (offset: number) => QueryBuilder;
    Union: (query: string,all: boolean) => QueryBuilder;
    Execute: (callback: null | ((err:string,result:Object[]) => void)) => null|undefined;
}

declare interface Database {

    IsConnected: () => boolean;
    QueryBuilder: () => QueryBuilder;
    EscapeString: (value: string) => string;
    Query: (query: string,callback: null | ((err:string,result:Object[]) => void)) => null|undefined;
    QueryParams: (query: string,callback: null | ((err:string,result:Object[]) => void)) => null|undefined;
}

declare function Database(connection_name: string): Database;

declare interface CEntityKeyValues {

    GetBool: (key: string) => boolean;
    GetInt: (key: string) => number;
    GetUint: (key: string) => number;
    GetInt64: (key: string) => number;
    GetUint64: (key: string) => number;
    GetFloat: (key: string) => number;
    GetDouble: (key: string) => number;
    GetString: (key: string) => string;
    GetPtr: (key: string) => string;
    GetStringToken: (key: string) => number;
    GetColor: (key: string) => Color;
    GetVector: (key: string) => Vector;
    GetVector2D: (key: string) => Vector2D;
    GetVector4D: (key: string) => Vector4D;
    GetQAngle: (key: string) => QAngle;
    SetBool: (key: string,value: boolean) => null|undefined;
    SetInt: (key: string,value: number) => null|undefined;
    SetUint: (key: string,value: number) => null|undefined;
    SetInt64: (key: string,value: number) => null|undefined;
    SetUint64: (key: string,value: number) => null|undefined;
    SetFloat: (key: string,value: number) => null|undefined;
    SetDouble: (key: string,value: number) => null|undefined;
    SetString: (key: string,value: string) => null|undefined;
    SetPtr: (key: string,value: string) => null|undefined;
    SetStringToken: (key: string,value: number) => null|undefined;
    SetColor: (key: string,value: Color) => null|undefined;
    SetVector: (key: string,value: Vector) => null|undefined;
    SetVector2D: (key: string,value: Vector2D) => null|undefined;
    SetVector4D: (key: string,value: Vector4D) => null|undefined;
    SetQAngle: (key: string,value: QAngle) => null|undefined;
}

declare function CEntityKeyValues(): CEntityKeyValues;

declare interface IEvent {

    GetInvokingPlugin: () => string;
    IsGameEvent: () => boolean;
    IsHook: () => boolean;
    SetBool: (key: string,value: boolean) => null|undefined;
    SetInt: (key: string,value: number) => null|undefined;
    SetUint64: (key: string,value: number) => null|undefined;
    SetFloat: (key: string,value: number) => null|undefined;
    SetString: (key: string,value: string) => null|undefined;
    GetBool: (key: string) => boolean;
    GetInt: (key: string) => number;
    GetUint64: (key: string) => number;
    GetFloat: (key: string) => number;
    GetString: (key: string) => string;
    GetReturn: () => any;
    SetReturn: (value: any) => null|undefined;
    FireEvent: (dontBroadcast: boolean) => null|undefined;
    FireEventToClient: (playerid: number) => null|undefined;
    SetHookBoolean: (index: number,value: boolean) => null|undefined;
    SetHookInt: (index: number,value: number) => null|undefined;
    SetHookUInt: (index: number,value: number) => null|undefined;
    SetHookUInt64: (index: number,value: number) => null|undefined;
    SetHookInt64: (index: number,value: number) => null|undefined;
    SetHookFloat: (index: number,value: number) => null|undefined;
    SetHookDouble: (index: number,value: number) => null|undefined;
    SetHookString: (index: number,value: string) => null|undefined;
    SetHookPointer: (index: number,value: IMemory) => null|undefined;
    GetHookBoolean: (index: number) => boolean;
    GetHookInt: (index: number) => number;
    GetHookUInt: (index: number) => number;
    GetHookInt64: (index: number) => number;
    GetHookUInt64: (index: number) => number;
    GetHookFloat: (index: number) => number;
    GetHookDouble: (index: number) => number;
    GetHookString: (index: number) => string;
    GetHookPointer: (index: number) => IMemory;
    GetHookReturn: () => any;
    SetHookReturn: (value: any) => null|undefined;
    GetNoBroadcast: () => boolean;
    SetNoBroadcast: (value: boolean) => null|undefined;
}

declare function PEvent(event_name: string): IEvent;

declare interface HTTPRequest {
    readonly "path": string;
    readonly "method": string;
    readonly "body": string;
    readonly "files": Object;
    readonly "headers": Object;
    readonly "params": Object;

}

declare interface HTTPResponse {

    WriteBody: (content: string) => null|undefined;
    GetHeaders: () => Object;
    GetHeader: (key: string) => string;
    SetHeader: (key: string,params: string) => null|undefined;
    Send: (response_code: number) => null|undefined;
    IsCompleted: () => boolean;
}

declare interface UserMessage {

    IsValidMessage: () => boolean;
    GetMessageName: () => string;
    GetMessageID: () => number;
    HasField: (fieldName: string) => boolean;
    GetInt32: (fieldName: string) => number;
    SetInt32: (fieldName: string,value: number) => null|undefined;
    GetRepeatedInt32: (fieldName: string,index: number) => number;
    SetRepeatedInt32: (fieldName: string,index: number,value: number) => null|undefined;
    AddInt32: (fieldName: string,index: number) => null|undefined;
    GetInt64: (fieldName: string) => number;
    SetInt64: (fieldName: string,value: number) => null|undefined;
    GetRepeatedInt64: (fieldName: string,index: number) => number;
    SetRepeatedInt64: (fieldName: string,index: number,value: number) => null|undefined;
    AddInt64: (fieldName: string,value: number) => null|undefined;
    GetUInt32: (fieldName: string) => number;
    SetUInt32: (fieldName: string,value: number) => null|undefined;
    GetRepeatedUInt32: (fieldName: string,index: number) => number;
    SetRepeatedUInt32: (fieldName: string,index: number,value: number) => null|undefined;
    AddUInt32: (fieldName: string,value: number) => number;
    GetUInt64: (fieldName: string) => number;
    SetUInt64: (fieldName: string,value: number) => null|undefined;
    GetRepeatedUInt64: (fieldName: string,index: number) => number;
    SetRepeatedUInt64: (fieldName: string,index: number,value: number) => null|undefined;
    AddUInt64: (fieldName: string,value: number) => null|undefined;
    GetInt64OrUnsigned: (fieldName: string) => number;
    SetInt64OrUnsigned: (fieldName: string,value: number) => null|undefined;
    GetRepeatedInt64OrUnsigned: (fieldName: string,index: number) => number;
    SetRepeatedInt64OrUnsigned: (fieldName: string,index: number,value: number) => null|undefined;
    AddInt64OrUnsigned: (fieldName: string,value: number) => number;
    GetBool: (fieldName: string) => boolean;
    SetBool: (fieldName: string,value: boolean) => null|undefined;
    GetRepeatedBool: (fieldName: string,index: number) => boolean;
    SetRepeatedBool: (fieldName: string,index: number,value: boolean) => null|undefined;
    AddBool: (fieldName: string,value: boolean) => null|undefined;
    GetFloat: (fieldName: string) => number;
    SetFloat: (fieldName: string,value: number) => null|undefined;
    GetRepeatedFloat: (fieldName: string,index: number) => number;
    SetRepeatedFloat: (fieldName: string,index: number,value: number) => null|undefined;
    AddFloat: (fieldName: string,value: number) => null|undefined;
    GetDouble: (fieldName: string) => number;
    SetDouble: (fieldName: string,value: number) => null|undefined;
    GetRepeatedDouble: (fieldName: string,index: number) => number;
    SetRepeatedDouble: (fieldName: string,index: number,value: number) => null|undefined;
    AddDouble: (fieldName: string) => number;
    GetFloatOrDouble: (fieldName: string) => number;
    SetFloatOrDouble: (fieldName: string,value: number) => null|undefined;
    GetRepeatedFloatOrDouble: (fieldName: string,index: number) => number;
    SetRepeatedFloatOrDouble: (fieldName: string,index: number,value: number) => null|undefined;
    AddFloatOrDouble: (fieldName: string,value: number) => number;
    GetString: (fieldName: string) => string;
    SetString: (fieldName: string,value: string) => null|undefined;
    GetRepeatedString: (fieldName: string,index: number) => string;
    SetRepeatedString: (fieldName: string,index: number,value: string) => null|undefined;
    AddString: (fieldName: string,value: string) => null|undefined;
    GetColor: (fieldName: string) => Color;
    SetColor: (fieldName: string,value: Color) => null|undefined;
    GetRepeatedColor: (fieldName: string,index: number) => Color;
    SetRepeatedColor: (fieldName: string,index: number,value: Color) => null|undefined;
    AddColor: (fieldName: string,value: Color) => null|undefined;
    GetVector2D: (fieldName: string) => Vector2D;
    SetVector2D: (fieldName: string,value: Vector2D) => null|undefined;
    GetRepeatedVector2D: (fieldName: string,index: number) => Vector2D;
    SetRepeatedVector2D: (fieldName: string,index: number,value: Vector2D) => null|undefined;
    AddVector2D: (fieldName: string,value: Vector2D) => null|undefined;
    GetVector: (fieldName: string) => Vector;
    SetVector: (fieldName: string,value: Vector) => null|undefined;
    GetRepeatedVector: (fieldName: string,index: number) => Vector;
    SetRepeatedVector: (fieldName: string,index: number,value: Vector) => null|undefined;
    AddVector: (fieldName: string,value: Vector) => null|undefined;
    GetQAngle: (fieldName: string) => QAngle;
    SetQAngle: (fieldName: string,value: QAngle) => number;
    GetRepeatedQAngle: (fieldName: string,index: number) => QAngle;
    SetRepeatedQAngle: (fieldName: string,index: number,value: QAngle) => null|undefined;
    AddQAngle: (fieldName: string,value: QAngle) => null|undefined;
    RemoveRepeatedFieldValue: (fieldName: string,index: number) => null|undefined;
    GetRepeatedFieldCount: (fieldName: string) => number;
    GetMessage: (fieldName: string) => UserMessage;
    GetRepeatedMessage: (fieldName: string,index: number) => UserMessage;
    AddMessage: (fieldName: string) => UserMessage;
    SendToPlayer: (playerid: number) => null|undefined;
    SendToAllPlayers: () => null|undefined;
    AddClient: (playerid: number) => null|undefined;
    RemoveClient: (playerid: number) => null|undefined;
    ClearClients: () => null|undefined;
    AddClients: () => null|undefined;
    GetClients: () => Object;
}

declare function UserMessage(partial_message_name: string): UserMessage;

declare interface Weapon {

    CBasePlayerWeapon: () => CBasePlayerWeapon;
    CCSWeaponBase: () => CCSWeaponBase;
    CBasePlayerWeaponVData: () => CBasePlayerWeaponVData;
    CCSWeaponBaseVData: () => CCSWeaponBaseVData;
    SetDefaultAttributes: () => null|undefined;
    Remove: () => null|undefined;
    Drop: () => null|undefined;
}

declare function Weapon(playerid: number,ptr: string): Weapon;

declare interface AnimationDecodeDebugDumpElement_t {
    "EntityIndex": number;
    "ModelName": string;
    readonly "PoseParams": Object;
    readonly "DecodeOps": Object;
    readonly "InternalOps": Object;
    readonly "DecodedAnims": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimationDecodeDebugDumpElement_t(ptr_or_class: string|AnySDKClass): AnimationDecodeDebugDumpElement_t;

declare interface AnimationDecodeDebugDump_t {
    "ProcessingType": number;
    readonly "Elems": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimationDecodeDebugDump_t(ptr_or_class: string|AnySDKClass): AnimationDecodeDebugDump_t;

declare interface AnimationSnapshotBase_t {
    "RealTime": number;
    "BonesInWorldSpace": boolean;
    readonly "BoneSetupMask": Object;
    readonly "FlexControllers": Object;
    "SnapshotType": number;
    "HasDecodeDump": boolean;
    readonly "DecodeDump": AnimationDecodeDebugDumpElement_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimationSnapshotBase_t(ptr_or_class: string|AnySDKClass): AnimationSnapshotBase_t;

declare interface AnimationSnapshot_t {
    "EntIndex": number;
    "ModelName": string;
    readonly "Parent": AnimationSnapshotBase_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimationSnapshot_t(ptr_or_class: string|AnySDKClass): AnimationSnapshot_t;

declare interface CAnimActivity {
    "Activity": number;
    "Flags": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimActivity(ptr_or_class: string|AnySDKClass): CAnimActivity;

declare interface CAnimBone {
    "Parent": number;
    "Pos": Vector;
    "Scale": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimBone(ptr_or_class: string|AnySDKClass): CAnimBone;

declare interface CAnimBoneDifference {
    "PosError": Vector;
    "HasRotation": boolean;
    "HasMovement": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimBoneDifference(ptr_or_class: string|AnySDKClass): CAnimBoneDifference;

declare interface CAnimData {
    readonly "AnimArray": Object;
    readonly "DecoderArray": Object;
    "MaxUniqueFrameIndex": number;
    readonly "SegmentArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimData(ptr_or_class: string|AnySDKClass): CAnimData;

declare interface CAnimDataChannelDesc {
    "Flags": number;
    "Type": number;
    readonly "ElementIndexArray": Object;
    readonly "ElementMaskArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDataChannelDesc(ptr_or_class: string|AnySDKClass): CAnimDataChannelDesc;

declare interface CAnimDecoder {
    "Version": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDecoder(ptr_or_class: string|AnySDKClass): CAnimDecoder;

declare interface CAnimDesc {
    readonly "Flags": CAnimDesc_Flag;
    "Fps": number;
    readonly "Data": CAnimEncodedFrames;
    readonly "MovementArray": Object;
    readonly "EventArray": Object;
    readonly "ActivityArray": Object;
    readonly "HierarchyArray": Object;
    "Framestalltime": number;
    "RootMin": Vector;
    "RootMax": Vector;
    readonly "BoneWorldMin": Object;
    readonly "BoneWorldMax": Object;
    readonly "SequenceParams": CAnimSequenceParams;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDesc(ptr_or_class: string|AnySDKClass): CAnimDesc;

declare interface CAnimDesc_Flag {
    "Looping": boolean;
    "AllZeros": boolean;
    "Hidden": boolean;
    "Delta": boolean;
    "LegacyWorldspace": boolean;
    "ModelDoc": boolean;
    "ImplicitSeqIgnoreDelta": boolean;
    "AnimGraphAdditive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDesc_Flag(ptr_or_class: string|AnySDKClass): CAnimDesc_Flag;

declare interface CAnimEncodeDifference {
    readonly "BoneArray": Object;
    readonly "MorphArray": Object;
    readonly "UserArray": Object;
    readonly "HasRotationBitArray": Object;
    readonly "HasMovementBitArray": Object;
    readonly "HasMorphBitArray": Object;
    readonly "HasUserBitArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEncodeDifference(ptr_or_class: string|AnySDKClass): CAnimEncodeDifference;

declare interface CAnimEncodedFrames {
    "Frames": number;
    "FramesPerBlock": number;
    readonly "FrameblockArray": Object;
    readonly "UsageDifferences": CAnimEncodeDifference;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEncodedFrames(ptr_or_class: string|AnySDKClass): CAnimEncodedFrames;

declare interface CAnimEnum {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEnum(ptr_or_class: string|AnySDKClass): CAnimEnum;

declare interface CAnimEventDefinition {
    "Frame": number;
    "EndFrame": number;
    "Cycle": number;
    "Duration": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventDefinition(ptr_or_class: string|AnySDKClass): CAnimEventDefinition;

declare interface CAnimFrameBlockAnim {
    "StartFrame": number;
    "EndFrame": number;
    readonly "SegmentIndexArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimFrameBlockAnim(ptr_or_class: string|AnySDKClass): CAnimFrameBlockAnim;

declare interface CAnimFrameSegment {
    "UniqueFrameIndex": number;
    "LocalElementMasks": number;
    "LocalChannel": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimFrameSegment(ptr_or_class: string|AnySDKClass): CAnimFrameSegment;

declare interface CAnimKeyData {
    readonly "BoneArray": Object;
    readonly "UserArray": Object;
    "ChannelElements": number;
    readonly "DataChannelArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimKeyData(ptr_or_class: string|AnySDKClass): CAnimKeyData;

declare interface CAnimLocalHierarchy {
    "StartFrame": number;
    "PeakFrame": number;
    "TailFrame": number;
    "EndFrame": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimLocalHierarchy(ptr_or_class: string|AnySDKClass): CAnimLocalHierarchy;

declare interface CAnimMorphDifference {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimMorphDifference(ptr_or_class: string|AnySDKClass): CAnimMorphDifference;

declare interface CAnimMovement {
    "0": number;
    "1": number;
    "Endframe": number;
    "Motionflags": number;
    "Angle": number;
    "Vector": Vector;
    "Position": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimMovement(ptr_or_class: string|AnySDKClass): CAnimMovement;

declare interface CAnimSequenceParams {
    "FadeInTime": number;
    "FadeOutTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimSequenceParams(ptr_or_class: string|AnySDKClass): CAnimSequenceParams;

declare interface CAnimUser {
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUser(ptr_or_class: string|AnySDKClass): CAnimUser;

declare interface CAnimUserDifference {
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUserDifference(ptr_or_class: string|AnySDKClass): CAnimUserDifference;

declare interface CAnimationGroup {
    "Flags": number;
    readonly "DecodeKey": CAnimKeyData;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGroup(ptr_or_class: string|AnySDKClass): CAnimationGroup;

declare interface CMoodVData {
    "MoodType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMoodVData(ptr_or_class: string|AnySDKClass): CMoodVData;

declare interface CSeqAutoLayer {
    "LocalReference": number;
    "LocalPose": number;
    readonly "Flags": CSeqAutoLayerFlag;
    "Start": number;
    "Peak": number;
    "Tail": number;
    "End": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqAutoLayer(ptr_or_class: string|AnySDKClass): CSeqAutoLayer;

declare interface CSeqAutoLayerFlag {
    "Post": boolean;
    "Spline": boolean;
    "XFade": boolean;
    "NoBlend": boolean;
    "Local": boolean;
    "Pose": boolean;
    "FetchFrame": boolean;
    "Subtract": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqAutoLayerFlag(ptr_or_class: string|AnySDKClass): CSeqAutoLayerFlag;

declare interface CSeqBoneMaskList {
    readonly "LocalBoneArray": Object;
    readonly "BoneWeightArray": Object;
    "DefaultMorphCtrlWeight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqBoneMaskList(ptr_or_class: string|AnySDKClass): CSeqBoneMaskList;

declare interface CSeqCmdLayer {
    "Cmd": number;
    "LocalReference": number;
    "LocalBonemask": number;
    "DstResult": number;
    "SrcResult": number;
    "Spline": boolean;
    "Var1": number;
    "Var2": number;
    "LineNumber": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqCmdLayer(ptr_or_class: string|AnySDKClass): CSeqCmdLayer;

declare interface CSeqCmdSeqDesc {
    readonly "Flags": CSeqSeqDescFlag;
    readonly "Transition": CSeqTransition;
    "FrameRangeSequence": number;
    "FrameCount": number;
    "FPS": number;
    "SubCycles": number;
    "NumLocalResults": number;
    readonly "CmdLayerArray": Object;
    readonly "EventArray": Object;
    readonly "ActivityArray": Object;
    readonly "PoseSettingArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqCmdSeqDesc(ptr_or_class: string|AnySDKClass): CSeqCmdSeqDesc;

declare interface CSeqIKLock {
    "PosWeight": number;
    "AngleWeight": number;
    "LocalBone": number;
    "BonesOrientedAlongPositiveX": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqIKLock(ptr_or_class: string|AnySDKClass): CSeqIKLock;

declare interface CSeqMultiFetch {
    readonly "Flags": CSeqMultiFetchFlag;
    readonly "LocalReferenceArray": Object;
    "GroupSize": Object;
    "LocalPose": Object;
    readonly "PoseKeyArray0": Object;
    readonly "PoseKeyArray1": Object;
    "LocalCyclePoseParameter": number;
    "CalculatePoseParameters": boolean;
    "FixedBlendWeight": boolean;
    "FixedBlendWeightVals": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqMultiFetch(ptr_or_class: string|AnySDKClass): CSeqMultiFetch;

declare interface CSeqMultiFetchFlag {
    "Realtime": boolean;
    "Cylepose": boolean;
    "0D": boolean;
    "1D": boolean;
    "2D": boolean;
    "2D_TRI": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqMultiFetchFlag(ptr_or_class: string|AnySDKClass): CSeqMultiFetchFlag;

declare interface CSeqPoseParamDesc {
    "Start": number;
    "End": number;
    "Loop": number;
    "Looping": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqPoseParamDesc(ptr_or_class: string|AnySDKClass): CSeqPoseParamDesc;

declare interface CSeqPoseSetting {
    "Value": number;
    "X": boolean;
    "Y": boolean;
    "Z": boolean;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqPoseSetting(ptr_or_class: string|AnySDKClass): CSeqPoseSetting;

declare interface CSeqS1SeqDesc {
    readonly "Flags": CSeqSeqDescFlag;
    readonly "Fetch": CSeqMultiFetch;
    "LocalWeightlist": number;
    readonly "AutoLayerArray": Object;
    readonly "IKLockArray": Object;
    readonly "Transition": CSeqTransition;
    readonly "ActivityArray": Object;
    readonly "FootMotion": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqS1SeqDesc(ptr_or_class: string|AnySDKClass): CSeqS1SeqDesc;

declare interface CSeqScaleSet {
    "RootOffset": boolean;
    "RootOffset1": Vector;
    readonly "LocalBoneArray": Object;
    readonly "BoneScaleArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqScaleSet(ptr_or_class: string|AnySDKClass): CSeqScaleSet;

declare interface CSeqSeqDescFlag {
    "Looping": boolean;
    "Snap": boolean;
    "Autoplay": boolean;
    "Post": boolean;
    "Hidden": boolean;
    "Multi": boolean;
    "LegacyDelta": boolean;
    "LegacyWorldspace": boolean;
    "LegacyCyclepose": boolean;
    "LegacyRealtime": boolean;
    "ModelDoc": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqSeqDescFlag(ptr_or_class: string|AnySDKClass): CSeqSeqDescFlag;

declare interface CSeqSynthAnimDesc {
    readonly "Flags": CSeqSeqDescFlag;
    readonly "Transition": CSeqTransition;
    "LocalBaseReference": number;
    "LocalBoneMask": number;
    readonly "ActivityArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqSynthAnimDesc(ptr_or_class: string|AnySDKClass): CSeqSynthAnimDesc;

declare interface CSeqTransition {
    "FadeInTime": number;
    "FadeOutTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqTransition(ptr_or_class: string|AnySDKClass): CSeqTransition;

declare interface CSequenceGroupData {
    "Flags": number;
    readonly "LocalS1SeqDescArray": Object;
    readonly "LocalMultiSeqDescArray": Object;
    readonly "LocalSynthAnimDescArray": Object;
    readonly "LocalCmdSeqDescArray": Object;
    readonly "LocalBoneMaskArray": Object;
    readonly "LocalScaleSetArray": Object;
    readonly "LocalPoseParamArray": Object;
    readonly "LocalIKAutoplayLockArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceGroupData(ptr_or_class: string|AnySDKClass): CSequenceGroupData;

declare interface MoodAnimation_t {
    "Name": string;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MoodAnimation_t(ptr_or_class: string|AnySDKClass): MoodAnimation_t;

declare interface AimCameraOpFixedSettings_t {
    "ChainIndex": number;
    "CameraJointIndex": number;
    "PelvisJointIndex": number;
    "ClavicleLeftJointIndex": number;
    "ClavicleRightJointIndex": number;
    "DepenetrationJointIndex": number;
    readonly "PropJoints": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AimCameraOpFixedSettings_t(ptr_or_class: string|AnySDKClass): AimCameraOpFixedSettings_t;

declare interface AimMatrixOpFixedSettings_t {
    readonly "Attachment": CAnimAttachment;
    readonly "Damping": CAnimInputDamping;
    readonly "PoseCacheHandles": Object;
    "BlendMode": number;
    "MaxYawAngle": number;
    "MaxPitchAngle": number;
    "SequenceMaxFrame": number;
    "BoneMaskIndex": number;
    "TargetIsPosition": boolean;
    "UseBiasAndClamp": boolean;
    "BiasAndClampYawOffset": number;
    "BiasAndClampPitchOffset": number;
    readonly "BiasAndClampBlendCurve": CBlendCurve;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AimMatrixOpFixedSettings_t(ptr_or_class: string|AnySDKClass): AimMatrixOpFixedSettings_t;

declare interface BlendItem_t {
    readonly "Tags": Object;
    readonly "Child": CAnimUpdateNodeRef;
    "Sequence": number;
    "Pos": Vector2D;
    "Duration": number;
    "UseCustomDuration": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function BlendItem_t(ptr_or_class: string|AnySDKClass): BlendItem_t;

declare interface BoneDemoCaptureSettings_t {
    "BoneName": string;
    "ErrorSplineRotationMax": number;
    "ErrorSplineTranslationMax": number;
    "ErrorSplineScaleMax": number;
    "ErrorQuantizationRotationMax": number;
    "ErrorQuantizationTranslationMax": number;
    "ErrorQuantizationScaleMax": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function BoneDemoCaptureSettings_t(ptr_or_class: string|AnySDKClass): BoneDemoCaptureSettings_t;

declare interface CActionComponentUpdater {
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CActionComponentUpdater(ptr_or_class: string|AnySDKClass): CActionComponentUpdater;

declare interface CAddUpdateNode {
    "FootMotionTiming": number;
    "ApplyToFootMotion": boolean;
    "ApplyChannelsSeparately": boolean;
    "UseModelSpace": boolean;
    "ApplyScale": boolean;
    readonly "Parent": CBinaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAddUpdateNode(ptr_or_class: string|AnySDKClass): CAddUpdateNode;

declare interface CAimCameraUpdateNode {
    readonly "ParameterPosition": CAnimParamHandle;
    readonly "ParameterOrientation": CAnimParamHandle;
    readonly "ParameterSpineRotationWeight": CAnimParamHandle;
    readonly "ParameterPelvisOffset": CAnimParamHandle;
    readonly "ParameterUseIK": CAnimParamHandle;
    readonly "ParameterCameraOnly": CAnimParamHandle;
    readonly "ParameterWeaponDepenetrationDistance": CAnimParamHandle;
    readonly "ParameterWeaponDepenetrationDelta": CAnimParamHandle;
    readonly "ParameterCameraClearanceDistance": CAnimParamHandle;
    readonly "OpFixedSettings": AimCameraOpFixedSettings_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAimCameraUpdateNode(ptr_or_class: string|AnySDKClass): CAimCameraUpdateNode;

declare interface CAimMatrixUpdateNode {
    readonly "OpFixedSettings": AimMatrixOpFixedSettings_t;
    "Target": number;
    readonly "ParamIndex": CAnimParamHandle;
    "Sequence": number;
    "ResetChild": boolean;
    "LockWhenWaning": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAimMatrixUpdateNode(ptr_or_class: string|AnySDKClass): CAimMatrixUpdateNode;

declare interface CAnimActionUpdater {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimActionUpdater(ptr_or_class: string|AnySDKClass): CAnimActionUpdater;

declare interface CAnimComponentUpdater {
    "Name": string;
    readonly "Id": AnimComponentID;
    "NetworkMode": number;
    "StartEnabled": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimComponentUpdater(ptr_or_class: string|AnySDKClass): CAnimComponentUpdater;

declare interface CAnimDemoCaptureSettings {
    "ErrorRangeSplineRotation": Vector2D;
    "ErrorRangeSplineTranslation": Vector2D;
    "ErrorRangeSplineScale": Vector2D;
    "IkRotation_MaxSplineError": number;
    "IkTranslation_MaxSplineError": number;
    "ErrorRangeQuantizationRotation": Vector2D;
    "ErrorRangeQuantizationTranslation": Vector2D;
    "ErrorRangeQuantizationScale": Vector2D;
    "IkRotation_MaxQuantizationError": number;
    "IkTranslation_MaxQuantizationError": number;
    "BaseSequence": string;
    "BaseSequenceFrame": number;
    "BoneSelectionMode": number;
    readonly "Bones": Object;
    readonly "IkChains": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDemoCaptureSettings(ptr_or_class: string|AnySDKClass): CAnimDemoCaptureSettings;

declare interface CAnimGraphDebugReplay {
    "AnimGraphFileName": string;
    "StartIndex": number;
    "WriteIndex": number;
    "FrameCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphDebugReplay(ptr_or_class: string|AnySDKClass): CAnimGraphDebugReplay;

declare interface CAnimGraphModelBinding {
    "ModelName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphModelBinding(ptr_or_class: string|AnySDKClass): CAnimGraphModelBinding;

declare interface CAnimGraphNetworkSettings {
    "NetworkingEnabled": boolean;
    readonly "Parent": CAnimGraphSettingsGroup;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphNetworkSettings(ptr_or_class: string|AnySDKClass): CAnimGraphNetworkSettings;

declare interface CAnimGraphSettingsGroup {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphSettingsGroup(ptr_or_class: string|AnySDKClass): CAnimGraphSettingsGroup;

declare interface CAnimGraphSettingsManager {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphSettingsManager(ptr_or_class: string|AnySDKClass): CAnimGraphSettingsManager;

declare interface CAnimInputDamping {
    "SpeedFunction": number;
    "SpeedScale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimInputDamping(ptr_or_class: string|AnySDKClass): CAnimInputDamping;

declare interface CAnimMotorUpdaterBase {
    "Name": string;
    "Default": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimMotorUpdaterBase(ptr_or_class: string|AnySDKClass): CAnimMotorUpdaterBase;

declare interface CAnimNodePath {
    readonly "Path": Object;
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimNodePath(ptr_or_class: string|AnySDKClass): CAnimNodePath;

declare interface CAnimParamHandle {
    "Type": number;
    "Index": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimParamHandle(ptr_or_class: string|AnySDKClass): CAnimParamHandle;

declare interface CAnimParamHandleMap {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimParamHandleMap(ptr_or_class: string|AnySDKClass): CAnimParamHandleMap;

declare interface CAnimParameterBase {
    "Comment": string;
    "Group": string;
    readonly "Id": AnimParamID;
    "ComponentName": string;
    "NetworkingRequested": boolean;
    "IsReferenced": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimParameterBase(ptr_or_class: string|AnySDKClass): CAnimParameterBase;

declare interface CAnimParameterManagerUpdater {
    readonly "IndexToHandle": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimParameterManagerUpdater(ptr_or_class: string|AnySDKClass): CAnimParameterManagerUpdater;

declare interface CAnimReplayFrame {
    "TimeStamp": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimReplayFrame(ptr_or_class: string|AnySDKClass): CAnimReplayFrame;

declare interface CAnimScriptComponentUpdater {
    readonly "Script": AnimScriptHandle;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimScriptComponentUpdater(ptr_or_class: string|AnySDKClass): CAnimScriptComponentUpdater;

declare interface CAnimScriptManager {
    readonly "ScriptInfo": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimScriptManager(ptr_or_class: string|AnySDKClass): CAnimScriptManager;

declare interface CAnimStateMachineUpdater {
    readonly "States": Object;
    readonly "Transitions": Object;
    "StartStateIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimStateMachineUpdater(ptr_or_class: string|AnySDKClass): CAnimStateMachineUpdater;

declare interface CAnimTagBase {
    "Comment": string;
    readonly "TagID": AnimTagID;
    "IsReferenced": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimTagBase(ptr_or_class: string|AnySDKClass): CAnimTagBase;

declare interface CAnimTagManagerUpdater {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimTagManagerUpdater(ptr_or_class: string|AnySDKClass): CAnimTagManagerUpdater;

declare interface CAnimUpdateNodeBase {
    readonly "NodePath": CAnimNodePath;
    "NetworkMode": number;
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUpdateNodeBase(ptr_or_class: string|AnySDKClass): CAnimUpdateNodeBase;

declare interface CAnimUpdateNodeRef {
    "NodeIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUpdateNodeRef(ptr_or_class: string|AnySDKClass): CAnimUpdateNodeRef;

declare interface CAnimUpdateSharedData {
    readonly "Settings": CAnimGraphSettingsManager;
    readonly "RootNodePath": CAnimNodePath;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUpdateSharedData(ptr_or_class: string|AnySDKClass): CAnimUpdateSharedData;

declare interface CAnimationGraphVisualizerAxis {
    "AxisSize": number;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerAxis(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerAxis;

declare interface CAnimationGraphVisualizerLine {
    "WsPositionStart": Vector;
    "WsPositionEnd": Vector;
    "Color": Color;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerLine(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerLine;

declare interface CAnimationGraphVisualizerPie {
    "WsCenter": Vector;
    "WsStart": Vector;
    "WsEnd": Vector;
    "Color": Color;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerPie(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerPie;

declare interface CAnimationGraphVisualizerPrimitiveBase {
    "Type": number;
    readonly "OwningAnimNodePaths": Object;
    "OwningAnimNodePathCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerPrimitiveBase(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerPrimitiveBase;

declare interface CAnimationGraphVisualizerSphere {
    "WsPosition": Vector;
    "Radius": number;
    "Color": Color;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerSphere(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerSphere;

declare interface CAnimationGraphVisualizerText {
    "WsPosition": Vector;
    "Color": Color;
    "Text": string;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerText(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerText;

declare interface CAudioAnimTag {
    "ClipName": string;
    "AttachmentName": string;
    "Volume": number;
    "StopWhenTagEnds": boolean;
    "StopWhenGraphEnds": boolean;
    "PlayOnServer": boolean;
    "PlayOnClient": boolean;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioAnimTag(ptr_or_class: string|AnySDKClass): CAudioAnimTag;

declare interface CBinaryUpdateNode {
    readonly "Child1": CAnimUpdateNodeRef;
    readonly "Child2": CAnimUpdateNodeRef;
    "TimingBehavior": number;
    "TimingBlend": number;
    "ResetChild1": boolean;
    "ResetChild2": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBinaryUpdateNode(ptr_or_class: string|AnySDKClass): CBinaryUpdateNode;

declare interface CBindPoseUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBindPoseUpdateNode(ptr_or_class: string|AnySDKClass): CBindPoseUpdateNode;

declare interface CBlend2DUpdateNode {
    readonly "Items": Object;
    readonly "Tags": Object;
    readonly "ParamSpans": CParamSpanUpdater;
    readonly "NodeItemIndices": Object;
    readonly "Damping": CAnimInputDamping;
    "BlendSourceX": number;
    readonly "ParamX": CAnimParamHandle;
    "BlendSourceY": number;
    readonly "ParamY": CAnimParamHandle;
    "BlendMode": number;
    "PlaybackSpeed": number;
    "Loop": boolean;
    "LockBlendOnReset": boolean;
    "LockWhenWaning": boolean;
    "AnimEventsAndTagsOnMostWeightedOnly": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlend2DUpdateNode(ptr_or_class: string|AnySDKClass): CBlend2DUpdateNode;

declare interface CBlendCurve {
    "ControlPoint1": number;
    "ControlPoint2": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlendCurve(ptr_or_class: string|AnySDKClass): CBlendCurve;

declare interface CBlendUpdateNode {
    readonly "Children": Object;
    readonly "SortedOrder": Object;
    readonly "TargetValues": Object;
    "BlendValueSource": number;
    readonly "ParamIndex": CAnimParamHandle;
    readonly "Damping": CAnimInputDamping;
    "BlendKeyType": number;
    "LockBlendOnReset": boolean;
    "SyncCycles": boolean;
    "Loop": boolean;
    "LockWhenWaning": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlendUpdateNode(ptr_or_class: string|AnySDKClass): CBlendUpdateNode;

declare interface CBlockSelectionMetricEvaluator {
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlockSelectionMetricEvaluator(ptr_or_class: string|AnySDKClass): CBlockSelectionMetricEvaluator;

declare interface CBodyGroupAnimTag {
    "Priority": number;
    readonly "BodyGroupSettings": Object;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyGroupAnimTag(ptr_or_class: string|AnySDKClass): CBodyGroupAnimTag;

declare interface CBodyGroupSetting {
    "BodyGroupName": string;
    "BodyGroupOption": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyGroupSetting(ptr_or_class: string|AnySDKClass): CBodyGroupSetting;

declare interface CBoneMaskUpdateNode {
    "WeightListIndex": number;
    "RootMotionBlend": number;
    "BlendSpace": number;
    "FootMotionTiming": number;
    "UseBlendScale": boolean;
    "BlendValueSource": number;
    readonly "BlendParameter": CAnimParamHandle;
    readonly "Parent": CBinaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneMaskUpdateNode(ptr_or_class: string|AnySDKClass): CBoneMaskUpdateNode;

declare interface CBonePositionMetricEvaluator {
    "BoneIndex": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBonePositionMetricEvaluator(ptr_or_class: string|AnySDKClass): CBonePositionMetricEvaluator;

declare interface CBoneVelocityMetricEvaluator {
    "BoneIndex": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CBoneVelocityMetricEvaluator;

declare interface CBoolAnimParameter {
    "DefaultValue": boolean;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoolAnimParameter(ptr_or_class: string|AnySDKClass): CBoolAnimParameter;

declare interface CCPPScriptComponentUpdater {
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCPPScriptComponentUpdater(ptr_or_class: string|AnySDKClass): CCPPScriptComponentUpdater;

declare interface CCachedPose {
    readonly "MorphWeights": Object;
    "Sequence": number;
    "Cycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCachedPose(ptr_or_class: string|AnySDKClass): CCachedPose;

declare interface CChoiceUpdateNode {
    readonly "Children": Object;
    readonly "Weights": Object;
    readonly "BlendTimes": Object;
    "ChoiceMethod": number;
    "ChoiceChangeMethod": number;
    "BlendMethod": number;
    "BlendTime": number;
    "CrossFade": boolean;
    "ResetChosen": boolean;
    "DontResetSameSelection": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CChoiceUpdateNode(ptr_or_class: string|AnySDKClass): CChoiceUpdateNode;

declare interface CChoreoUpdateNode {
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CChoreoUpdateNode(ptr_or_class: string|AnySDKClass): CChoreoUpdateNode;

declare interface CClothSettingsAnimTag {
    "Stiffness": number;
    "EaseIn": number;
    "EaseOut": number;
    "VertexSet": string;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CClothSettingsAnimTag(ptr_or_class: string|AnySDKClass): CClothSettingsAnimTag;

declare interface CConcreteAnimParameter {
    "PreviewButton": number;
    "NetworkSetting": number;
    "UseMostRecentValue": boolean;
    "AutoReset": boolean;
    "GameWritable": boolean;
    "GraphWritable": boolean;
    readonly "Parent": CAnimParameterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConcreteAnimParameter(ptr_or_class: string|AnySDKClass): CConcreteAnimParameter;

declare interface CCurrentRotationVelocityMetricEvaluator {
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCurrentRotationVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CCurrentRotationVelocityMetricEvaluator;

declare interface CCurrentVelocityMetricEvaluator {
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCurrentVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CCurrentVelocityMetricEvaluator;

declare interface CCycleControlClipUpdateNode {
    readonly "Tags": Object;
    "Sequence": number;
    "Duration": number;
    "ValueSource": number;
    readonly "ParamIndex": CAnimParamHandle;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCycleControlClipUpdateNode(ptr_or_class: string|AnySDKClass): CCycleControlClipUpdateNode;

declare interface CCycleControlUpdateNode {
    "ValueSource": number;
    readonly "ParamIndex": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCycleControlUpdateNode(ptr_or_class: string|AnySDKClass): CCycleControlUpdateNode;

declare interface CDampedPathAnimMotorUpdater {
    "AnticipationTime": number;
    "MinSpeedScale": number;
    readonly "AnticipationPosParam": CAnimParamHandle;
    readonly "AnticipationHeadingParam": CAnimParamHandle;
    "SpringConstant": number;
    "MinSpringTension": number;
    "MaxSpringTension": number;
    readonly "Parent": CPathAnimMotorUpdaterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDampedPathAnimMotorUpdater(ptr_or_class: string|AnySDKClass): CDampedPathAnimMotorUpdater;

declare interface CDampedValueComponentUpdater {
    readonly "Items": Object;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDampedValueComponentUpdater(ptr_or_class: string|AnySDKClass): CDampedValueComponentUpdater;

declare interface CDampedValueUpdateItem {
    readonly "Damping": CAnimInputDamping;
    readonly "ParamIn": CAnimParamHandle;
    readonly "ParamOut": CAnimParamHandle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDampedValueUpdateItem(ptr_or_class: string|AnySDKClass): CDampedValueUpdateItem;

declare interface CDemoSettingsComponentUpdater {
    readonly "Settings": CAnimDemoCaptureSettings;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDemoSettingsComponentUpdater(ptr_or_class: string|AnySDKClass): CDemoSettingsComponentUpdater;

declare interface CDirectPlaybackTagData {
    "SequenceName": string;
    readonly "Tags": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDirectPlaybackTagData(ptr_or_class: string|AnySDKClass): CDirectPlaybackTagData;

declare interface CDirectPlaybackUpdateNode {
    "FinishEarly": boolean;
    "ResetOnFinish": boolean;
    readonly "AllTags": Object;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDirectPlaybackUpdateNode(ptr_or_class: string|AnySDKClass): CDirectPlaybackUpdateNode;

declare interface CDirectionalBlendUpdateNode {
    "Sequences": Object;
    readonly "Damping": CAnimInputDamping;
    "BlendValueSource": number;
    readonly "ParamIndex": CAnimParamHandle;
    "PlaybackSpeed": number;
    "Duration": number;
    "Loop": boolean;
    "LockBlendOnReset": boolean;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDirectionalBlendUpdateNode(ptr_or_class: string|AnySDKClass): CDirectionalBlendUpdateNode;

declare interface CDistanceRemainingMetricEvaluator {
    "MaxDistance": number;
    "MinDistance": number;
    "StartGoalFilterDistance": number;
    "MaxGoalOvershootScale": number;
    "FilterFixedMinDistance": boolean;
    "FilterGoalDistance": boolean;
    "FilterGoalOvershoot": boolean;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDistanceRemainingMetricEvaluator(ptr_or_class: string|AnySDKClass): CDistanceRemainingMetricEvaluator;

declare interface CEditableMotionGraph {
    readonly "Parent": CMotionGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEditableMotionGraph(ptr_or_class: string|AnySDKClass): CEditableMotionGraph;

declare interface CEmitTagActionUpdater {
    "TagIndex": number;
    "IsZeroDuration": boolean;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEmitTagActionUpdater(ptr_or_class: string|AnySDKClass): CEmitTagActionUpdater;

declare interface CEnumAnimParameter {
    "DefaultValue": number;
    readonly "EnumOptions": Object;
    readonly "EnumReferenced": Object;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnumAnimParameter(ptr_or_class: string|AnySDKClass): CEnumAnimParameter;

declare interface CExpressionActionUpdater {
    readonly "Param": CAnimParamHandle;
    "ParamType": number;
    readonly "Script": AnimScriptHandle;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExpressionActionUpdater(ptr_or_class: string|AnySDKClass): CExpressionActionUpdater;

declare interface CFloatAnimParameter {
    "DefaultValue": number;
    "MinValue": number;
    "MaxValue": number;
    "Interpolate": boolean;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFloatAnimParameter(ptr_or_class: string|AnySDKClass): CFloatAnimParameter;

declare interface CFollowAttachmentUpdateNode {
    readonly "OpFixedData": FollowAttachmentSettings_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFollowAttachmentUpdateNode(ptr_or_class: string|AnySDKClass): CFollowAttachmentUpdateNode;

declare interface CFollowPathUpdateNode {
    "BlendOutTime": number;
    "BlockNonPathMovement": boolean;
    "StopFeetAtGoal": boolean;
    "ScaleSpeed": boolean;
    "Scale": number;
    "MinAngle": number;
    "MaxAngle": number;
    "SpeedScaleBlending": number;
    readonly "TurnDamping": CAnimInputDamping;
    "FacingTarget": number;
    readonly "Param": CAnimParamHandle;
    "TurnToFaceOffset": number;
    "TurnToFace": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFollowPathUpdateNode(ptr_or_class: string|AnySDKClass): CFollowPathUpdateNode;

declare interface CFollowTargetUpdateNode {
    readonly "OpFixedData": FollowTargetOpFixedSettings_t;
    readonly "ParameterPosition": CAnimParamHandle;
    readonly "ParameterOrientation": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFollowTargetUpdateNode(ptr_or_class: string|AnySDKClass): CFollowTargetUpdateNode;

declare interface CFootAdjustmentUpdateNode {
    readonly "Clips": Object;
    readonly "BasePoseCacheHandle": CPoseHandle;
    readonly "FacingTarget": CAnimParamHandle;
    "TurnTimeMin": number;
    "TurnTimeMax": number;
    "StepHeightMax": number;
    "StepHeightMaxAngle": number;
    "ResetChild": boolean;
    "AnimationDriven": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootAdjustmentUpdateNode(ptr_or_class: string|AnySDKClass): CFootAdjustmentUpdateNode;

declare interface CFootCycleMetricEvaluator {
    readonly "FootIndices": Object;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootCycleMetricEvaluator(ptr_or_class: string|AnySDKClass): CFootCycleMetricEvaluator;

declare interface CFootFallAnimTag {
    "Foot": number;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootFallAnimTag(ptr_or_class: string|AnySDKClass): CFootFallAnimTag;

declare interface CFootLockUpdateNode {
    readonly "OpFixedSettings": FootLockPoseOpFixedSettings;
    readonly "FootSettings": Object;
    readonly "HipShiftDamping": CAnimInputDamping;
    readonly "RootHeightDamping": CAnimInputDamping;
    "StrideCurveScale": number;
    "StrideCurveLimitScale": number;
    "StepHeightIncreaseScale": number;
    "StepHeightDecreaseScale": number;
    "HipShiftScale": number;
    "BlendTime": number;
    "MaxRootHeightOffset": number;
    "MinRootHeightOffset": number;
    "TiltPlanePitchSpringStrength": number;
    "TiltPlaneRollSpringStrength": number;
    "ApplyFootRotationLimits": boolean;
    "ApplyHipShift": boolean;
    "ModulateStepHeight": boolean;
    "ResetChild": boolean;
    "EnableVerticalCurvedPaths": boolean;
    "EnableRootHeightDamping": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootLockUpdateNode(ptr_or_class: string|AnySDKClass): CFootLockUpdateNode;

declare interface CFootPinningUpdateNode {
    readonly "PoseOpFixedData": FootPinningPoseOpFixedData_t;
    "TimingSource": number;
    readonly "Params": Object;
    "ResetChild": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootPinningUpdateNode(ptr_or_class: string|AnySDKClass): CFootPinningUpdateNode;

declare interface CFootPositionMetricEvaluator {
    readonly "FootIndices": Object;
    "IgnoreSlope": boolean;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootPositionMetricEvaluator(ptr_or_class: string|AnySDKClass): CFootPositionMetricEvaluator;

declare interface CFootStepTriggerUpdateNode {
    readonly "Triggers": Object;
    "Tolerance": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootStepTriggerUpdateNode(ptr_or_class: string|AnySDKClass): CFootStepTriggerUpdateNode;

declare interface CFootstepLandedAnimTag {
    "FootstepType": number;
    "OverrideSoundName": string;
    "DebugAnimSourceString": string;
    "BoneName": string;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootstepLandedAnimTag(ptr_or_class: string|AnySDKClass): CFootstepLandedAnimTag;

declare interface CFutureFacingMetricEvaluator {
    "Distance": number;
    "Time": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFutureFacingMetricEvaluator(ptr_or_class: string|AnySDKClass): CFutureFacingMetricEvaluator;

declare interface CFutureVelocityMetricEvaluator {
    "Distance": number;
    "StoppingDistance": number;
    "TargetSpeed": number;
    "Mode": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFutureVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CFutureVelocityMetricEvaluator;

declare interface CHandshakeAnimTagBase {
    "IsDisableTag": boolean;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHandshakeAnimTagBase(ptr_or_class: string|AnySDKClass): CHandshakeAnimTagBase;

declare interface CHitReactUpdateNode {
    readonly "OpFixedSettings": HitReactFixedSettings_t;
    readonly "TriggerParam": CAnimParamHandle;
    readonly "HitBoneParam": CAnimParamHandle;
    readonly "HitOffsetParam": CAnimParamHandle;
    readonly "HitDirectionParam": CAnimParamHandle;
    readonly "HitStrengthParam": CAnimParamHandle;
    "MinDelayBetweenHits": number;
    "ResetChild": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitReactUpdateNode(ptr_or_class: string|AnySDKClass): CHitReactUpdateNode;

declare interface CInputStreamUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInputStreamUpdateNode(ptr_or_class: string|AnySDKClass): CInputStreamUpdateNode;

declare interface CIntAnimParameter {
    "DefaultValue": number;
    "MinValue": number;
    "MaxValue": number;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CIntAnimParameter(ptr_or_class: string|AnySDKClass): CIntAnimParameter;

declare interface CJiggleBoneUpdateNode {
    readonly "OpFixedData": JiggleBoneSettingsList_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CJiggleBoneUpdateNode(ptr_or_class: string|AnySDKClass): CJiggleBoneUpdateNode;

declare interface CJumpHelperUpdateNode {
    readonly "TargetParam": CAnimParamHandle;
    "OriginalJumpMovement": Vector;
    "OriginalJumpDuration": number;
    "JumpStartCycle": number;
    "JumpEndCycle": number;
    "CorrectionMethod": number;
    "TranslationAxis": Object;
    "ScaleSpeed": boolean;
    readonly "Parent": CSequenceUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CJumpHelperUpdateNode(ptr_or_class: string|AnySDKClass): CJumpHelperUpdateNode;

declare interface CLODComponentUpdater {
    "ServerLOD": number;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLODComponentUpdater(ptr_or_class: string|AnySDKClass): CLODComponentUpdater;

declare interface CLeafUpdateNode {
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLeafUpdateNode(ptr_or_class: string|AnySDKClass): CLeafUpdateNode;

declare interface CLeanMatrixUpdateNode {
    readonly "Poses": Object;
    readonly "Damping": CAnimInputDamping;
    "BlendSource": number;
    readonly "ParamIndex": CAnimParamHandle;
    "VerticalAxis": Vector;
    "HorizontalAxis": Vector;
    "Sequence": number;
    "MaxValue": number;
    "SequenceMaxFrame": number;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLeanMatrixUpdateNode(ptr_or_class: string|AnySDKClass): CLeanMatrixUpdateNode;

declare interface CLookAtUpdateNode {
    readonly "OpFixedSettings": LookAtOpFixedSettings_t;
    "Target": number;
    readonly "ParamIndex": CAnimParamHandle;
    readonly "WeightParamIndex": CAnimParamHandle;
    "ResetChild": boolean;
    "LockWhenWaning": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLookAtUpdateNode(ptr_or_class: string|AnySDKClass): CLookAtUpdateNode;

declare interface CLookComponentUpdater {
    readonly "LookHeading": CAnimParamHandle;
    readonly "LookHeadingVelocity": CAnimParamHandle;
    readonly "LookPitch": CAnimParamHandle;
    readonly "LookDistance": CAnimParamHandle;
    readonly "LookDirection": CAnimParamHandle;
    readonly "LookTarget": CAnimParamHandle;
    readonly "LookTargetWorldSpace": CAnimParamHandle;
    "NetworkLookTarget": boolean;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLookComponentUpdater(ptr_or_class: string|AnySDKClass): CLookComponentUpdater;

declare interface CMaterialAttributeAnimTag {
    "AttributeName": string;
    "AttributeType": number;
    "Value": number;
    "Color": Color;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMaterialAttributeAnimTag(ptr_or_class: string|AnySDKClass): CMaterialAttributeAnimTag;

declare interface CMotionDataSet {
    readonly "Groups": Object;
    "DimensionCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionDataSet(ptr_or_class: string|AnySDKClass): CMotionDataSet;

declare interface CMotionGraph {
    readonly "ParamSpans": CParamSpanUpdater;
    readonly "Tags": Object;
    "ParameterCount": number;
    "ConfigStartIndex": number;
    "ConfigCount": number;
    "Loop": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionGraph(ptr_or_class: string|AnySDKClass): CMotionGraph;

declare interface CMotionGraphConfig {
    "ParamValues": Object;
    "Duration": number;
    readonly "MotionIndex": MotionIndex;
    "SampleStart": number;
    "SampleCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionGraphConfig(ptr_or_class: string|AnySDKClass): CMotionGraphConfig;

declare interface CMotionGraphGroup {
    readonly "SearchDB": CMotionSearchDB;
    readonly "MotionGraphConfigs": Object;
    readonly "SampleToConfig": Object;
    readonly "IsActiveScript": AnimScriptHandle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionGraphGroup(ptr_or_class: string|AnySDKClass): CMotionGraphGroup;

declare interface CMotionGraphUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionGraphUpdateNode(ptr_or_class: string|AnySDKClass): CMotionGraphUpdateNode;

declare interface CMotionMatchingUpdateNode {
    readonly "DataSet": CMotionDataSet;
    readonly "Weights": Object;
    "SearchEveryTick": boolean;
    "SearchInterval": number;
    "SearchWhenClipEnds": boolean;
    "SearchWhenGoalChanges": boolean;
    readonly "BlendCurve": CBlendCurve;
    "SampleRate": number;
    "BlendTime": number;
    "LockClipWhenWaning": boolean;
    "SelectionThreshold": number;
    "ReselectionTimeWindow": number;
    "EnableRotationCorrection": boolean;
    "GoalAssist": boolean;
    "GoalAssistDistance": number;
    "GoalAssistTolerance": number;
    readonly "DistanceScale_Damping": CAnimInputDamping;
    "DistanceScale_OuterRadius": number;
    "DistanceScale_InnerRadius": number;
    "DistanceScale_MaxScale": number;
    "DistanceScale_MinScale": number;
    "EnableDistanceScaling": boolean;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionMatchingUpdateNode(ptr_or_class: string|AnySDKClass): CMotionMatchingUpdateNode;

declare interface CMotionMetricEvaluator {
    readonly "Means": Object;
    readonly "StandardDeviations": Object;
    "Weight": number;
    "DimensionStartIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionMetricEvaluator(ptr_or_class: string|AnySDKClass): CMotionMetricEvaluator;

declare interface CMotionNode {
    "Name": string;
    readonly "Id": AnimNodeID;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionNode(ptr_or_class: string|AnySDKClass): CMotionNode;

declare interface CMotionNodeBlend1D {
    readonly "BlendItems": Object;
    "ParamIndex": number;
    readonly "Parent": CMotionNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionNodeBlend1D(ptr_or_class: string|AnySDKClass): CMotionNodeBlend1D;

declare interface CMotionNodeSequence {
    readonly "Tags": Object;
    "Sequence": number;
    "PlaybackSpeed": number;
    readonly "Parent": CMotionNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionNodeSequence(ptr_or_class: string|AnySDKClass): CMotionNodeSequence;

declare interface CMotionSearchDB {
    readonly "RootNode": CMotionSearchNode;
    readonly "ResidualQuantizer": CProductQuantizer;
    readonly "CodeIndices": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionSearchDB(ptr_or_class: string|AnySDKClass): CMotionSearchDB;

declare interface CMotionSearchNode {
    readonly "Children": Object;
    readonly "Quantizer": CVectorQuantizer;
    readonly "SelectableSamples": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionSearchNode(ptr_or_class: string|AnySDKClass): CMotionSearchNode;

declare interface CMovementComponentUpdater {
    readonly "FacingDamping": CAnimInputDamping;
    "DefaultMotorIndex": number;
    "DefaultRunSpeed": number;
    "MoveVarsDisabled": boolean;
    "NetworkPath": boolean;
    "NetworkFacing": boolean;
    readonly "ParamHandles": Object;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMovementComponentUpdater(ptr_or_class: string|AnySDKClass): CMovementComponentUpdater;

declare interface CMovementHandshakeAnimTag {
    readonly "Parent": CHandshakeAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMovementHandshakeAnimTag(ptr_or_class: string|AnySDKClass): CMovementHandshakeAnimTag;

declare interface CMoverUpdateNode {
    readonly "Damping": CAnimInputDamping;
    "FacingTarget": number;
    readonly "MoveVecParam": CAnimParamHandle;
    readonly "MoveHeadingParam": CAnimParamHandle;
    readonly "TurnToFaceParam": CAnimParamHandle;
    "TurnToFaceOffset": number;
    "TurnToFaceLimit": number;
    "Additive": boolean;
    "ApplyMovement": boolean;
    "OrientMovement": boolean;
    "ApplyRotation": boolean;
    "LimitOnly": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMoverUpdateNode(ptr_or_class: string|AnySDKClass): CMoverUpdateNode;

declare interface COrientationWarpUpdateNode {
    readonly "FacingPositionParameter": CAnimParamHandle;
    readonly "TurnDamping": CAnimInputDamping;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COrientationWarpUpdateNode(ptr_or_class: string|AnySDKClass): COrientationWarpUpdateNode;

declare interface CPairedSequenceComponentUpdater {
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPairedSequenceComponentUpdater(ptr_or_class: string|AnySDKClass): CPairedSequenceComponentUpdater;

declare interface CPairedSequenceUpdateNode {
    readonly "Parent": CSequenceUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPairedSequenceUpdateNode(ptr_or_class: string|AnySDKClass): CPairedSequenceUpdateNode;

declare interface CParamSpanUpdater {
    readonly "Spans": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParamSpanUpdater(ptr_or_class: string|AnySDKClass): CParamSpanUpdater;

declare interface CParticleAnimTag {
    "ParticleSystemName": string;
    "ConfigName": string;
    "DetachFromOwner": boolean;
    "StopWhenTagEnds": boolean;
    "TagEndStopIsInstant": boolean;
    "AttachmentName": string;
    "AttachmentType": number;
    "AttachmentCP1Name": string;
    "AttachmentCP1Type": number;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleAnimTag(ptr_or_class: string|AnySDKClass): CParticleAnimTag;

declare interface CPathAnimMotorUpdater {
    readonly "Parent": CPathAnimMotorUpdaterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathAnimMotorUpdater(ptr_or_class: string|AnySDKClass): CPathAnimMotorUpdater;

declare interface CPathAnimMotorUpdaterBase {
    "LockToPath": boolean;
    readonly "Parent": CAnimMotorUpdaterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathAnimMotorUpdaterBase(ptr_or_class: string|AnySDKClass): CPathAnimMotorUpdaterBase;

declare interface CPathHelperUpdateNode {
    "StoppingRadius": number;
    "StoppingSpeedScale": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathHelperUpdateNode(ptr_or_class: string|AnySDKClass): CPathHelperUpdateNode;

declare interface CPathMetricEvaluator {
    readonly "PathTimeSamples": Object;
    "Distance": number;
    "ExtrapolateMovement": boolean;
    "MinExtrapolationSpeed": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathMetricEvaluator(ptr_or_class: string|AnySDKClass): CPathMetricEvaluator;

declare interface CPlayerInputAnimMotorUpdater {
    readonly "SampleTimes": Object;
    "SpringConstant": number;
    "AnticipationDistance": number;
    readonly "AnticipationPosParam": CAnimParamHandle;
    readonly "AnticipationHeadingParam": CAnimParamHandle;
    "UseAcceleration": boolean;
    readonly "Parent": CAnimMotorUpdaterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerInputAnimMotorUpdater(ptr_or_class: string|AnySDKClass): CPlayerInputAnimMotorUpdater;

declare interface CPoseHandle {
    "Index": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPoseHandle(ptr_or_class: string|AnySDKClass): CPoseHandle;

declare interface CProductQuantizer {
    readonly "SubQuantizers": Object;
    "Dimensions": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CProductQuantizer(ptr_or_class: string|AnySDKClass): CProductQuantizer;

declare interface CRagdollAnimTag {
    "PoseControl": number;
    "Frequency": number;
    "DampingRatio": number;
    "DecayDuration": number;
    "DecayBias": number;
    "Destroy": boolean;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollAnimTag(ptr_or_class: string|AnySDKClass): CRagdollAnimTag;

declare interface CRagdollComponentUpdater {
    readonly "RagdollNodePaths": Object;
    readonly "BoneIndices": Object;
    readonly "BoneNames": Object;
    readonly "WeightLists": Object;
    "SpringFrequencyMin": number;
    "SpringFrequencyMax": number;
    "MaxStretch": number;
    "SolidCollisionAtZeroWeight": boolean;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollComponentUpdater(ptr_or_class: string|AnySDKClass): CRagdollComponentUpdater;

declare interface CRagdollUpdateNode {
    "WeightListIndex": number;
    "PoseControlMethod": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollUpdateNode(ptr_or_class: string|AnySDKClass): CRagdollUpdateNode;

declare interface CRootUpdateNode {
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRootUpdateNode(ptr_or_class: string|AnySDKClass): CRootUpdateNode;

declare interface CSelectorUpdateNode {
    readonly "Children": Object;
    readonly "Tags": Object;
    readonly "BlendCurve": CBlendCurve;
    readonly "Parameter": CAnimParamHandle;
    "TagIndex": number;
    "TagBehavior": number;
    "ResetOnChange": boolean;
    "LockWhenWaning": boolean;
    "SyncCyclesOnChange": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSelectorUpdateNode(ptr_or_class: string|AnySDKClass): CSelectorUpdateNode;

declare interface CSequenceFinishedAnimTag {
    "SequenceName": string;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceFinishedAnimTag(ptr_or_class: string|AnySDKClass): CSequenceFinishedAnimTag;

declare interface CSequenceTagSpans {
    readonly "Tags": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceTagSpans(ptr_or_class: string|AnySDKClass): CSequenceTagSpans;

declare interface CSequenceUpdateNode {
    "Sequence": number;
    "Duration": number;
    readonly "ParamSpans": CParamSpanUpdater;
    readonly "Tags": Object;
    readonly "Parent": CSequenceUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceUpdateNode(ptr_or_class: string|AnySDKClass): CSequenceUpdateNode;

declare interface CSequenceUpdateNodeBase {
    "PlaybackSpeed": number;
    "Loop": boolean;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceUpdateNodeBase(ptr_or_class: string|AnySDKClass): CSequenceUpdateNodeBase;

declare interface CSetParameterActionUpdater {
    readonly "Param": CAnimParamHandle;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSetParameterActionUpdater(ptr_or_class: string|AnySDKClass): CSetParameterActionUpdater;

declare interface CSingleFrameUpdateNode {
    readonly "PoseCacheHandle": CPoseHandle;
    "Sequence": number;
    "Cycle": number;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSingleFrameUpdateNode(ptr_or_class: string|AnySDKClass): CSingleFrameUpdateNode;

declare interface CSlopeComponentUpdater {
    "TraceDistance": number;
    readonly "SlopeAngle": CAnimParamHandle;
    readonly "SlopeAngleFront": CAnimParamHandle;
    readonly "SlopeAngleSide": CAnimParamHandle;
    readonly "SlopeHeading": CAnimParamHandle;
    readonly "SlopeNormal": CAnimParamHandle;
    readonly "SlopeNormal_WorldSpace": CAnimParamHandle;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSlopeComponentUpdater(ptr_or_class: string|AnySDKClass): CSlopeComponentUpdater;

declare interface CSlowDownOnSlopesUpdateNode {
    "SlowDownStrength": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSlowDownOnSlopesUpdateNode(ptr_or_class: string|AnySDKClass): CSlowDownOnSlopesUpdateNode;

declare interface CSolveIKChainUpdateNode {
    readonly "TargetHandles": Object;
    readonly "OpFixedData": SolveIKChainPoseOpFixedSettings_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSolveIKChainUpdateNode(ptr_or_class: string|AnySDKClass): CSolveIKChainUpdateNode;

declare interface CSolveIKTargetHandle_t {
    readonly "PositionHandle": CAnimParamHandle;
    readonly "OrientationHandle": CAnimParamHandle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSolveIKTargetHandle_t(ptr_or_class: string|AnySDKClass): CSolveIKTargetHandle_t;

declare interface CSpeedScaleUpdateNode {
    readonly "ParamIndex": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpeedScaleUpdateNode(ptr_or_class: string|AnySDKClass): CSpeedScaleUpdateNode;

declare interface CStanceOverrideUpdateNode {
    readonly "FootStanceInfo": Object;
    readonly "StanceSourceNode": CAnimUpdateNodeRef;
    readonly "Parameter": CAnimParamHandle;
    "Mode": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStanceOverrideUpdateNode(ptr_or_class: string|AnySDKClass): CStanceOverrideUpdateNode;

declare interface CStanceScaleUpdateNode {
    readonly "Param": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStanceScaleUpdateNode(ptr_or_class: string|AnySDKClass): CStanceScaleUpdateNode;

declare interface CStateActionUpdater {
    "Behavior": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateActionUpdater(ptr_or_class: string|AnySDKClass): CStateActionUpdater;

declare interface CStateMachineComponentUpdater {
    readonly "StateMachine": CAnimStateMachineUpdater;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateMachineComponentUpdater(ptr_or_class: string|AnySDKClass): CStateMachineComponentUpdater;

declare interface CStateMachineUpdateNode {
    readonly "StateMachine": CAnimStateMachineUpdater;
    readonly "StateData": Object;
    readonly "TransitionData": Object;
    "BlockWaningTags": boolean;
    "LockStateWhenWaning": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateMachineUpdateNode(ptr_or_class: string|AnySDKClass): CStateMachineUpdateNode;

declare interface CStateNodeStateData {
    readonly "Child": CAnimUpdateNodeRef;
    "ExclusiveRootMotion": any;
    "ExclusiveRootMotionFirstFrame": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateNodeStateData(ptr_or_class: string|AnySDKClass): CStateNodeStateData;

declare interface CStateNodeTransitionData {
    readonly "Curve": CBlendCurve;
    "Reset": any;
    "ResetCycleOption": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateNodeTransitionData(ptr_or_class: string|AnySDKClass): CStateNodeTransitionData;

declare interface CStateUpdateData {
    "Name": string;
    readonly "Script": AnimScriptHandle;
    readonly "TransitionIndices": Object;
    readonly "Actions": Object;
    readonly "StateID": AnimStateID;
    "IsStartState": any;
    "IsEndState": any;
    "IsPassthrough": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateUpdateData(ptr_or_class: string|AnySDKClass): CStateUpdateData;

declare interface CStaticPoseCache {
    readonly "Poses": Object;
    "BoneCount": number;
    "MorphCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStaticPoseCache(ptr_or_class: string|AnySDKClass): CStaticPoseCache;

declare interface CStaticPoseCacheBuilder {
    readonly "Parent": CStaticPoseCache;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStaticPoseCacheBuilder(ptr_or_class: string|AnySDKClass): CStaticPoseCacheBuilder;

declare interface CStepsRemainingMetricEvaluator {
    readonly "FootIndices": Object;
    "MinStepsRemaining": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStepsRemainingMetricEvaluator(ptr_or_class: string|AnySDKClass): CStepsRemainingMetricEvaluator;

declare interface CStopAtGoalUpdateNode {
    "OuterRadius": number;
    "InnerRadius": number;
    "MaxScale": number;
    "MinScale": number;
    readonly "Damping": CAnimInputDamping;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStopAtGoalUpdateNode(ptr_or_class: string|AnySDKClass): CStopAtGoalUpdateNode;

declare interface CStringAnimTag {
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStringAnimTag(ptr_or_class: string|AnySDKClass): CStringAnimTag;

declare interface CSubtractUpdateNode {
    "FootMotionTiming": number;
    "ApplyToFootMotion": boolean;
    "ApplyChannelsSeparately": boolean;
    "UseModelSpace": boolean;
    readonly "Parent": CBinaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSubtractUpdateNode(ptr_or_class: string|AnySDKClass): CSubtractUpdateNode;

declare interface CSymbolAnimParameter {
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSymbolAnimParameter(ptr_or_class: string|AnySDKClass): CSymbolAnimParameter;

declare interface CTargetSelectorUpdateNode {
    readonly "Children": Object;
    readonly "PositionParameter": CAnimParamHandle;
    readonly "FacePositionParameter": CAnimParamHandle;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTargetSelectorUpdateNode(ptr_or_class: string|AnySDKClass): CTargetSelectorUpdateNode;

declare interface CTargetWarpUpdateNode {
    readonly "PositionParameter": CAnimParamHandle;
    readonly "FacePositionParameter": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTargetWarpUpdateNode(ptr_or_class: string|AnySDKClass): CTargetWarpUpdateNode;

declare interface CTaskHandshakeAnimTag {
    readonly "Parent": CHandshakeAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTaskHandshakeAnimTag(ptr_or_class: string|AnySDKClass): CTaskHandshakeAnimTag;

declare interface CTaskStatusAnimTag {
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTaskStatusAnimTag(ptr_or_class: string|AnySDKClass): CTaskStatusAnimTag;

declare interface CTimeRemainingMetricEvaluator {
    "MatchByTimeRemaining": boolean;
    "MaxTimeRemaining": number;
    "FilterByTimeRemaining": boolean;
    "MinTimeRemaining": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTimeRemainingMetricEvaluator(ptr_or_class: string|AnySDKClass): CTimeRemainingMetricEvaluator;

declare interface CToggleComponentActionUpdater {
    readonly "ComponentID": AnimComponentID;
    "SetEnabled": boolean;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CToggleComponentActionUpdater(ptr_or_class: string|AnySDKClass): CToggleComponentActionUpdater;

declare interface CTransitionUpdateData {
    "SrcStateIndex": number;
    "DestStateIndex": number;
    "HandshakeMaskToDisableFirst": any;
    "Disabled": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTransitionUpdateData(ptr_or_class: string|AnySDKClass): CTransitionUpdateData;

declare interface CTurnHelperUpdateNode {
    "FacingTarget": number;
    "TurnStartTimeOffset": number;
    "TurnDuration": number;
    "MatchChildDuration": boolean;
    "ManualTurnOffset": number;
    "UseManualTurnOffset": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTurnHelperUpdateNode(ptr_or_class: string|AnySDKClass): CTurnHelperUpdateNode;

declare interface CTwoBoneIKUpdateNode {
    readonly "OpFixedData": TwoBoneIKSettings_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTwoBoneIKUpdateNode(ptr_or_class: string|AnySDKClass): CTwoBoneIKUpdateNode;

declare interface CUnaryUpdateNode {
    readonly "ChildNode": CAnimUpdateNodeRef;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CUnaryUpdateNode(ptr_or_class: string|AnySDKClass): CUnaryUpdateNode;

declare interface CVectorAnimParameter {
    "DefaultValue": Vector;
    "Interpolate": boolean;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVectorAnimParameter(ptr_or_class: string|AnySDKClass): CVectorAnimParameter;

declare interface CVectorQuantizer {
    readonly "CentroidVectors": Object;
    "Centroids": number;
    "Dimensions": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVectorQuantizer(ptr_or_class: string|AnySDKClass): CVectorQuantizer;

declare interface CVirtualAnimParameter {
    "ExpressionString": string;
    "ParamType": number;
    readonly "Parent": CAnimParameterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVirtualAnimParameter(ptr_or_class: string|AnySDKClass): CVirtualAnimParameter;

declare interface CWayPointHelperUpdateNode {
    "StartCycle": number;
    "EndCycle": number;
    "OnlyGoals": boolean;
    "PreventOvershoot": boolean;
    "PreventUndershoot": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWayPointHelperUpdateNode(ptr_or_class: string|AnySDKClass): CWayPointHelperUpdateNode;

declare interface CZeroPoseUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CZeroPoseUpdateNode(ptr_or_class: string|AnySDKClass): CZeroPoseUpdateNode;

declare interface ChainToSolveData_t {
    "ChainIndex": number;
    readonly "SolverSettings": IKSolverSettings_t;
    readonly "TargetSettings": IKTargetSettings_t;
    "DebugSetting": number;
    "DebugNormalizedValue": number;
    "DebugOffset": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ChainToSolveData_t(ptr_or_class: string|AnySDKClass): ChainToSolveData_t;

declare interface ConfigIndex {
    "Group": number;
    "Config": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ConfigIndex(ptr_or_class: string|AnySDKClass): ConfigIndex;

declare interface FollowAttachmentSettings_t {
    readonly "Attachment": CAnimAttachment;
    "BoneIndex": number;
    "MatchTranslation": boolean;
    "MatchRotation": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FollowAttachmentSettings_t(ptr_or_class: string|AnySDKClass): FollowAttachmentSettings_t;

declare interface FollowTargetOpFixedSettings_t {
    "BoneIndex": number;
    "BoneTarget": boolean;
    "BoneTargetIndex": number;
    "WorldCoodinateTarget": boolean;
    "MatchTargetOrientation": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FollowTargetOpFixedSettings_t(ptr_or_class: string|AnySDKClass): FollowTargetOpFixedSettings_t;

declare interface FootFixedData_t {
    "ToeOffset": Vector;
    "HeelOffset": Vector;
    "TargetBoneIndex": number;
    "AnkleBoneIndex": number;
    "IKAnchorBoneIndex": number;
    "IkChainIndex": number;
    "MaxIKLength": number;
    "FootIndex": number;
    "TagIndex": number;
    "MaxRotationLeft": number;
    "MaxRotationRight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FootFixedData_t(ptr_or_class: string|AnySDKClass): FootFixedData_t;

declare interface FootFixedSettings {
    readonly "TraceSettings": TraceSettings_t;
    "FootBaseBindPosePositionMS": Vector;
    "FootBaseLength": number;
    "MaxRotationLeft": number;
    "MaxRotationRight": number;
    "FootstepLandedTagIndex": number;
    "EnableTracing": boolean;
    "TraceAngleBlend": number;
    "DisableTagIndex": number;
    "FootIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FootFixedSettings(ptr_or_class: string|AnySDKClass): FootFixedSettings;

declare interface FootLockPoseOpFixedSettings {
    readonly "FootInfo": Object;
    readonly "HipDampingSettings": CAnimInputDamping;
    "HipBoneIndex": number;
    "IkSolverType": number;
    "ApplyTilt": boolean;
    "ApplyHipDrop": boolean;
    "AlwaysUseFallbackHinge": boolean;
    "ApplyFootRotationLimits": boolean;
    "ApplyLegTwistLimits": boolean;
    "MaxFootHeight": number;
    "ExtensionScale": number;
    "MaxLegTwist": number;
    "EnableLockBreaking": boolean;
    "LockBreakTolerance": number;
    "LockBlendTime": number;
    "EnableStretching": boolean;
    "MaxStretchAmount": number;
    "StretchExtensionScale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FootLockPoseOpFixedSettings(ptr_or_class: string|AnySDKClass): FootLockPoseOpFixedSettings;

declare interface FootPinningPoseOpFixedData_t {
    readonly "FootInfo": Object;
    "BlendTime": number;
    "LockBreakDistance": number;
    "MaxLegTwist": number;
    "HipBoneIndex": number;
    "ApplyLegTwistLimits": boolean;
    "ApplyFootRotationLimits": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FootPinningPoseOpFixedData_t(ptr_or_class: string|AnySDKClass): FootPinningPoseOpFixedData_t;

declare interface FootStepTrigger {
    readonly "Tags": Object;
    "FootIndex": number;
    "TriggerPhase": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FootStepTrigger(ptr_or_class: string|AnySDKClass): FootStepTrigger;

declare interface HitReactFixedSettings_t {
    "WeightListIndex": number;
    "EffectedBoneCount": number;
    "MaxImpactForce": number;
    "MinImpactForce": number;
    "WhipImpactScale": number;
    "CounterRotationScale": number;
    "DistanceFadeScale": number;
    "PropagationScale": number;
    "WhipDelay": number;
    "SpringStrength": number;
    "WhipSpringStrength": number;
    "MaxAngleRadians": number;
    "HipBoneIndex": number;
    "HipBoneTranslationScale": number;
    "HipDipSpringStrength": number;
    "HipDipImpactScale": number;
    "HipDipDelay": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function HitReactFixedSettings_t(ptr_or_class: string|AnySDKClass): HitReactFixedSettings_t;

declare interface IKBoneNameAndIndex_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKBoneNameAndIndex_t(ptr_or_class: string|AnySDKClass): IKBoneNameAndIndex_t;

declare interface IKDemoCaptureSettings_t {
    "ParentBoneName": string;
    "Mode": number;
    "IkChainName": string;
    "OneBoneStart": string;
    "OneBoneEnd": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKDemoCaptureSettings_t(ptr_or_class: string|AnySDKClass): IKDemoCaptureSettings_t;

declare interface IKSolverSettings_t {
    "SolverType": number;
    "NumIterations": number;
    "EndEffectorRotationFixUpMode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKSolverSettings_t(ptr_or_class: string|AnySDKClass): IKSolverSettings_t;

declare interface IKTargetSettings_t {
    "TargetSource": number;
    readonly "Bone": IKBoneNameAndIndex_t;
    readonly "AnimgraphParameterNamePosition": AnimParamID;
    readonly "AnimgraphParameterNameOrientation": AnimParamID;
    "TargetCoordSystem": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKTargetSettings_t(ptr_or_class: string|AnySDKClass): IKTargetSettings_t;

declare interface JiggleBoneSettingsList_t {
    readonly "BoneSettings": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function JiggleBoneSettingsList_t(ptr_or_class: string|AnySDKClass): JiggleBoneSettingsList_t;

declare interface JiggleBoneSettings_t {
    "BoneIndex": number;
    "SpringStrength": number;
    "MaxTimeStep": number;
    "Damping": number;
    "BoundsMaxLS": Vector;
    "BoundsMinLS": Vector;
    "SimSpace": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function JiggleBoneSettings_t(ptr_or_class: string|AnySDKClass): JiggleBoneSettings_t;

declare interface LookAtBone_t {
    "Index": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function LookAtBone_t(ptr_or_class: string|AnySDKClass): LookAtBone_t;

declare interface LookAtOpFixedSettings_t {
    readonly "Attachment": CAnimAttachment;
    readonly "Damping": CAnimInputDamping;
    readonly "Bones": Object;
    "YawLimit": number;
    "PitchLimit": number;
    "HysteresisInnerAngle": number;
    "HysteresisOuterAngle": number;
    "RotateYawForward": boolean;
    "MaintainUpDirection": boolean;
    "TargetIsPosition": boolean;
    "UseHysteresis": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function LookAtOpFixedSettings_t(ptr_or_class: string|AnySDKClass): LookAtOpFixedSettings_t;

declare interface MotionBlendItem {
    "KeyValue": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MotionBlendItem(ptr_or_class: string|AnySDKClass): MotionBlendItem;

declare interface MotionDBIndex {
    "Index": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MotionDBIndex(ptr_or_class: string|AnySDKClass): MotionDBIndex;

declare interface MotionIndex {
    "Group": number;
    "Motion": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MotionIndex(ptr_or_class: string|AnySDKClass): MotionIndex;

declare interface ParamSpanSample_t {
    "Cycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParamSpanSample_t(ptr_or_class: string|AnySDKClass): ParamSpanSample_t;

declare interface ParamSpan_t {
    readonly "Samples": Object;
    readonly "Param": CAnimParamHandle;
    "ParamType": number;
    "StartCycle": number;
    "EndCycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParamSpan_t(ptr_or_class: string|AnySDKClass): ParamSpan_t;

declare interface SampleCode {
    "SubCode": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SampleCode(ptr_or_class: string|AnySDKClass): SampleCode;

declare interface ScriptInfo_t {
    "Code": string;
    readonly "ParamsModified": Object;
    readonly "ProxyReadParams": Object;
    readonly "ProxyWriteParams": Object;
    "ScriptType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ScriptInfo_t(ptr_or_class: string|AnySDKClass): ScriptInfo_t;

declare interface SolveIKChainPoseOpFixedSettings_t {
    readonly "ChainsToSolveData": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SolveIKChainPoseOpFixedSettings_t(ptr_or_class: string|AnySDKClass): SolveIKChainPoseOpFixedSettings_t;

declare interface StanceInfo_t {
    "Position": Vector;
    "Direction": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function StanceInfo_t(ptr_or_class: string|AnySDKClass): StanceInfo_t;

declare interface TagSpan_t {
    "TagIndex": number;
    "StartCycle": number;
    "EndCycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TagSpan_t(ptr_or_class: string|AnySDKClass): TagSpan_t;

declare interface TraceSettings_t {
    "TraceHeight": number;
    "TraceRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TraceSettings_t(ptr_or_class: string|AnySDKClass): TraceSettings_t;

declare interface TwoBoneIKSettings_t {
    "EndEffectorType": number;
    readonly "EndEffectorAttachment": CAnimAttachment;
    "TargetType": number;
    readonly "TargetAttachment": CAnimAttachment;
    "TargetBoneIndex": number;
    readonly "PositionParam": CAnimParamHandle;
    readonly "RotationParam": CAnimParamHandle;
    "AlwaysUseFallbackHinge": boolean;
    "LsFallbackHingeAxis": Vector;
    "FixedBoneIndex": number;
    "MiddleBoneIndex": number;
    "EndBoneIndex": number;
    "MatchTargetOrientation": boolean;
    "ConstrainTwist": boolean;
    "MaxTwist": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TwoBoneIKSettings_t(ptr_or_class: string|AnySDKClass): TwoBoneIKSettings_t;

declare interface WeightList {
    "Name": string;
    readonly "Weights": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WeightList(ptr_or_class: string|AnySDKClass): WeightList;

declare interface CNmAdditiveBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmAdditiveBlendTask(ptr_or_class: string|AnySDKClass): CNmAdditiveBlendTask;

declare interface CNmBitFlags {
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBitFlags(ptr_or_class: string|AnySDKClass): CNmBitFlags;

declare interface CNmBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBlendTask(ptr_or_class: string|AnySDKClass): CNmBlendTask;

declare interface CNmBlendTaskBase {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBlendTaskBase(ptr_or_class: string|AnySDKClass): CNmBlendTaskBase;

declare interface CNmBoneMask {
    readonly "WeightInfo": any;
    readonly "Weights": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBoneMask(ptr_or_class: string|AnySDKClass): CNmBoneMask;

declare interface CNmCachedPoseReadTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmCachedPoseReadTask(ptr_or_class: string|AnySDKClass): CNmCachedPoseReadTask;

declare interface CNmCachedPoseWriteTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmCachedPoseWriteTask(ptr_or_class: string|AnySDKClass): CNmCachedPoseWriteTask;

declare interface CNmClip {
    "NumFrames": number;
    "Duration": number;
    readonly "TrackCompressionSettings": Object;
    readonly "CompressedPoseOffsets": Object;
    readonly "SyncTrack": CNmSyncTrack;
    readonly "RootMotion": CNmRootMotionData;
    "IsAdditive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmClip(ptr_or_class: string|AnySDKClass): CNmClip;

declare interface CNmEvent {
    "StartTimeSeconds": number;
    "DurationSeconds": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmEvent(ptr_or_class: string|AnySDKClass): CNmEvent;

declare interface CNmFootEvent {
    "Phase": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmFootEvent(ptr_or_class: string|AnySDKClass): CNmFootEvent;

declare interface CNmFrameSnapEvent {
    "FrameSnapMode": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmFrameSnapEvent(ptr_or_class: string|AnySDKClass): CNmFrameSnapEvent;

declare interface CNmGraphDefinition {
    readonly "PersistentNodeIndices": Object;
    "RootNodeIdx": number;
    readonly "VirtualParameterNodeIndices": Object;
    readonly "NodePaths": Object;
    "RuntimeVersionID": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmGraphDefinition(ptr_or_class: string|AnySDKClass): CNmGraphDefinition;

declare interface CNmGraphVariation {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmGraphVariation(ptr_or_class: string|AnySDKClass): CNmGraphVariation;

declare interface CNmIDEvent {
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmIDEvent(ptr_or_class: string|AnySDKClass): CNmIDEvent;

declare interface CNmIKRig {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmIKRig(ptr_or_class: string|AnySDKClass): CNmIKRig;

declare interface CNmLegacyEvent {
    "AnimEventClassName": string;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmLegacyEvent(ptr_or_class: string|AnySDKClass): CNmLegacyEvent;

declare interface CNmModelSpaceBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmModelSpaceBlendTask(ptr_or_class: string|AnySDKClass): CNmModelSpaceBlendTask;

declare interface CNmOrientationWarpEvent {
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmOrientationWarpEvent(ptr_or_class: string|AnySDKClass): CNmOrientationWarpEvent;

declare interface CNmOverlayBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmOverlayBlendTask(ptr_or_class: string|AnySDKClass): CNmOverlayBlendTask;

declare interface CNmReferencePoseTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmReferencePoseTask(ptr_or_class: string|AnySDKClass): CNmReferencePoseTask;

declare interface CNmRootMotionData {
    "NumFrames": number;
    "AverageLinearVelocity": number;
    "AverageAngularVelocityRadians": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmRootMotionData(ptr_or_class: string|AnySDKClass): CNmRootMotionData;

declare interface CNmRootMotionEvent {
    "BlendTimeSeconds": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmRootMotionEvent(ptr_or_class: string|AnySDKClass): CNmRootMotionEvent;

declare interface CNmSampleTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmSampleTask(ptr_or_class: string|AnySDKClass): CNmSampleTask;

declare interface CNmSkeleton {
    readonly "ParentIndices": Object;
    "NumBonesToSampleAtLowLOD": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmSkeleton(ptr_or_class: string|AnySDKClass): CNmSkeleton;

declare interface CNmSyncTrack {
    "StartEventOffset": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmSyncTrack(ptr_or_class: string|AnySDKClass): CNmSyncTrack;

declare interface CNmTarget {
    "IsBoneTarget": boolean;
    "IsUsingBoneSpaceOffsets": boolean;
    "HasOffsets": boolean;
    "IsSet": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTarget(ptr_or_class: string|AnySDKClass): CNmTarget;

declare interface CNmTargetWarpEvent {
    "Rule": number;
    "Algorithm": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTargetWarpEvent(ptr_or_class: string|AnySDKClass): CNmTargetWarpEvent;

declare interface CNmTask {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTask(ptr_or_class: string|AnySDKClass): CNmTask;

declare interface CNmTransitionEvent {
    "Rule": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTransitionEvent(ptr_or_class: string|AnySDKClass): CNmTransitionEvent;

declare interface CNmZeroPoseTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmZeroPoseTask(ptr_or_class: string|AnySDKClass): CNmZeroPoseTask;

declare interface NmCompressionSettings_t {
    "IsRotationStatic": boolean;
    "IsTranslationStatic": boolean;
    "IsScaleStatic": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmCompressionSettings_t(ptr_or_class: string|AnySDKClass): NmCompressionSettings_t;

declare interface NmPercent_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmPercent_t(ptr_or_class: string|AnySDKClass): NmPercent_t;

declare interface NmSyncTrackTimeRange_t {
    readonly "StartTime": NmSyncTrackTime_t;
    readonly "EndTime": NmSyncTrackTime_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmSyncTrackTimeRange_t(ptr_or_class: string|AnySDKClass): NmSyncTrackTimeRange_t;

declare interface NmSyncTrackTime_t {
    "EventIdx": number;
    readonly "PercentageThrough": NmPercent_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmSyncTrackTime_t(ptr_or_class: string|AnySDKClass): NmSyncTrackTime_t;

declare interface ActiveModelConfig_t {
    readonly "Handle": ModelConfigHandle_t;
    "Name": string;
    readonly "AssociatedEntityNames": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ActiveModelConfig_t(ptr_or_class: string|AnySDKClass): ActiveModelConfig_t;

declare interface AmmoIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AmmoIndex_t(ptr_or_class: string|AnySDKClass): AmmoIndex_t;

declare interface AmmoTypeInfo_t {
    "MaxCarry": number;
    readonly "SplashSize": CRangeInt;
    "Flags": number;
    "Mass": number;
    readonly "Speed": CRangeFloat;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AmmoTypeInfo_t(ptr_or_class: string|AnySDKClass): AmmoTypeInfo_t;

declare interface CAnimEventListener {
    readonly "Parent": CAnimEventListenerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventListener(ptr_or_class: string|AnySDKClass): CAnimEventListener;

declare interface CAnimEventListenerBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventListenerBase(ptr_or_class: string|AnySDKClass): CAnimEventListenerBase;

declare interface CAnimEventQueueListener {
    readonly "Parent": CAnimEventListenerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventQueueListener(ptr_or_class: string|AnySDKClass): CAnimEventQueueListener;

declare interface CAnimGraphControllerBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphControllerBase(ptr_or_class: string|AnySDKClass): CAnimGraphControllerBase;

declare interface CAnimGraphNetworkedVariables {
    readonly "PredNetBoolVariables": Object;
    readonly "PredNetByteVariables": Object;
    readonly "PredNetUInt16Variables": Object;
    readonly "PredNetIntVariables": Object;
    readonly "PredNetUInt32Variables": Object;
    readonly "PredNetUInt64Variables": Object;
    readonly "PredNetFloatVariables": Object;
    readonly "PredNetVectorVariables": Object;
    readonly "OwnerOnlyPredNetBoolVariables": Object;
    readonly "OwnerOnlyPredNetByteVariables": Object;
    readonly "OwnerOnlyPredNetUInt16Variables": Object;
    readonly "OwnerOnlyPredNetIntVariables": Object;
    readonly "OwnerOnlyPredNetUInt32Variables": Object;
    readonly "OwnerOnlyPredNetUInt64Variables": Object;
    readonly "OwnerOnlyPredNetFloatVariables": Object;
    readonly "OwnerOnlyPredNetVectorVariables": Object;
    "BoolVariablesCount": number;
    "OwnerOnlyBoolVariablesCount": number;
    "RandomSeedOffset": number;
    "LastTeleportTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphNetworkedVariables(ptr_or_class: string|AnySDKClass): CAnimGraphNetworkedVariables;

declare interface CAttributeList {
    readonly "Attributes": Object;
    readonly "Manager": CAttributeManager;
    SetOrAddAttributeValueByName: (str: string,value: number) => null|undefined;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAttributeList(ptr_or_class: string|AnySDKClass): CAttributeList;

declare interface CAttributeManager {
    "ReapplyProvisionParity": number;
    readonly "Outer": CBaseEntity;
    "PreventLoopback": boolean;
    "ProviderType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAttributeManager(ptr_or_class: string|AnySDKClass): CAttributeManager;

declare interface CBaseAnimGraph {
    "InitiallyPopulateInterpHistory": boolean;
    readonly "ChoreoServices": IChoreoServices;
    "AnimGraphUpdateEnabled": boolean;
    "MaxSlopeDistance": number;
    "LastSlopeCheckPos": Vector;
    "AnimationUpdateScheduled": boolean;
    "Force": Vector;
    "ForceBone": number;
    readonly "RagdollPose": PhysicsRagdollPose_t;
    "RagdollClientSide": boolean;
    "LastDestructiblePartDestroyedAnimgraphSetTick": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseAnimGraph(ptr_or_class: string|AnySDKClass): CBaseAnimGraph;

declare interface CBaseAnimGraphController {
    readonly "AnimGraphNetworkedVars": CAnimGraphNetworkedVariables;
    "SequenceFinished": boolean;
    "SoundSyncTime": number;
    "ActiveIKChainMask": number;
    "Sequence": number;
    "SeqStartTime": number;
    "SeqFixedCycle": number;
    "AnimLoopMode": number;
    "PlaybackRate": number;
    "NotifyState": number;
    "NetworkedAnimationInputsChanged": boolean;
    "NetworkedSequenceChanged": boolean;
    "LastUpdateSkipped": boolean;
    "PrevAnimUpdateTime": number;
    readonly "Parent": CSkeletonAnimationController;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseAnimGraphController(ptr_or_class: string|AnySDKClass): CBaseAnimGraphController;

declare interface CBasePlayerController {
    "InButtonsWhichAreToggles": number;
    "TickBase": number;
    readonly "Pawn": CBasePlayerPawn;
    "KnownTeamMismatch": boolean;
    "SplitScreenSlot": number;
    readonly "SplitOwner": CBasePlayerController;
    "IsHLTV": boolean;
    "Connected": number;
    "PlayerName": string;
    "NetworkIDString": string;
    "LerpTime": number;
    "LagCompensation": boolean;
    "Predict": boolean;
    "IsLowViolence": boolean;
    "GamePaused": boolean;
    "IgnoreGlobalChat": number;
    "LastPlayerTalkTime": number;
    "LastEntitySteadyState": number;
    "AvailableEntitySteadyState": number;
    "HasAnySteadyStateEnts": boolean;
    "SteamID": number;
    "DesiredFOV": number;
    readonly "Parent": CBaseEntity;
    EntityIndex: () => number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerController(ptr_or_class: string|AnySDKClass): CBasePlayerController;

declare interface CBasePlayerControllerAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerControllerAPI(ptr_or_class: string|AnySDKClass): CBasePlayerControllerAPI;

declare interface CBasePlayerVData {
    readonly "HeadDamageMultiplier": CSkillFloat;
    readonly "ChestDamageMultiplier": CSkillFloat;
    readonly "StomachDamageMultiplier": CSkillFloat;
    readonly "ArmDamageMultiplier": CSkillFloat;
    readonly "LegDamageMultiplier": CSkillFloat;
    "HoldBreathTime": number;
    "DrowningDamageInterval": number;
    "DrowningDamageInitial": number;
    "DrowningDamageMax": number;
    "WaterSpeed": number;
    "UseRange": number;
    "UseAngleTolerance": number;
    "CrouchTime": number;
    readonly "Parent": CEntitySubclassVDataBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerVData(ptr_or_class: string|AnySDKClass): CBasePlayerVData;

declare interface CBasePlayerWeaponVData {
    "BuiltRightHanded": boolean;
    "AllowFlipping": boolean;
    readonly "MuzzleAttachment": any;
    "LinkedCooldowns": boolean;
    "Flags": number;
    "PrimaryAmmoType": number;
    "SecondaryAmmoType": number;
    "MaxClip1": number;
    "MaxClip2": number;
    "DefaultClip1": number;
    "DefaultClip2": number;
    "ReserveAmmoAsClips": boolean;
    "Weight": number;
    "AutoSwitchTo": boolean;
    "AutoSwitchFrom": boolean;
    "RumbleEffect": number;
    "Slot": number;
    "Position": number;
    readonly "Parent": CEntitySubclassVDataBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerWeaponVData(ptr_or_class: string|AnySDKClass): CBasePlayerWeaponVData;

declare interface CBaseProp {
    "ModelOverrodeBlockLOS": boolean;
    "ShapeType": number;
    "ConformToCollisionBounds": boolean;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseProp(ptr_or_class: string|AnySDKClass): CBaseProp;

declare interface CBodyComponent {
    readonly "SceneNode": CGameSceneNode;
    readonly "__pChainEntity": CNetworkVarChainer;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponent(ptr_or_class: string|AnySDKClass): CBodyComponent;

declare interface CBodyComponentBaseAnimGraph {
    readonly "AnimationController": CBaseAnimGraphController;
    readonly "Parent": CBodyComponentSkeletonInstance;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentBaseAnimGraph(ptr_or_class: string|AnySDKClass): CBodyComponentBaseAnimGraph;

declare interface CBodyComponentBaseModelEntity {
    readonly "Parent": CBodyComponentSkeletonInstance;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentBaseModelEntity(ptr_or_class: string|AnySDKClass): CBodyComponentBaseModelEntity;

declare interface CBodyComponentPoint {
    readonly "SceneNode": CGameSceneNode;
    readonly "Parent": CBodyComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentPoint(ptr_or_class: string|AnySDKClass): CBodyComponentPoint;

declare interface CBodyComponentSkeletonInstance {
    readonly "SkeletonInstance": CSkeletonInstance;
    readonly "Parent": CBodyComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentSkeletonInstance(ptr_or_class: string|AnySDKClass): CBodyComponentSkeletonInstance;

declare interface CBombTarget {
    readonly "OnBombExplode": CEntityIOOutput;
    readonly "OnBombPlanted": CEntityIOOutput;
    readonly "OnBombDefused": CEntityIOOutput;
    "IsBombSiteB": boolean;
    "IsHeistBombTarget": boolean;
    "BombPlantedHere": boolean;
    "MountTarget": string;
    readonly "InstructorHint": CBaseEntity;
    "BombSiteDesignation": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBombTarget(ptr_or_class: string|AnySDKClass): CBombTarget;

declare interface CBreachCharge {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreachCharge(ptr_or_class: string|AnySDKClass): CBreachCharge;

declare interface CBreachChargeProjectile {
    readonly "Parent": CBaseGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreachChargeProjectile(ptr_or_class: string|AnySDKClass): CBreachChargeProjectile;

declare interface CBreakableStageHelper {
    "CurrentStage": number;
    "StageCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreakableStageHelper(ptr_or_class: string|AnySDKClass): CBreakableStageHelper;

declare interface CBumpMine {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBumpMine(ptr_or_class: string|AnySDKClass): CBumpMine;

declare interface CBumpMineProjectile {
    readonly "Parent": CBaseGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBumpMineProjectile(ptr_or_class: string|AnySDKClass): CBumpMineProjectile;

declare interface CBuoyancyHelper {
    "FluidType": number;
    "FluidDensity": number;
    readonly "FractionOfWheelSubmergedForWheelFriction": Object;
    readonly "WheelFrictionScales": Object;
    readonly "FractionOfWheelSubmergedForWheelDrag": Object;
    readonly "WheelDrag": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBuoyancyHelper(ptr_or_class: string|AnySDKClass): CBuoyancyHelper;

declare interface CCSClientPointScriptEntity {
    readonly "Parent": CCSPointScriptEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSClientPointScriptEntity(ptr_or_class: string|AnySDKClass): CCSClientPointScriptEntity;

declare interface CCSGOPlayerAnimGraphState {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGOPlayerAnimGraphState(ptr_or_class: string|AnySDKClass): CCSGOPlayerAnimGraphState;

declare interface CCSGOViewModel_GraphController {
    "ReloadComplete": any;
    readonly "Parent": CAnimGraphControllerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGOViewModel_GraphController(ptr_or_class: string|AnySDKClass): CCSGOViewModel_GraphController;

declare interface CCSGO_WingmanIntroCharacterPosition {
    readonly "Parent": CCSGO_TeamIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_WingmanIntroCharacterPosition(ptr_or_class: string|AnySDKClass): CCSGO_WingmanIntroCharacterPosition;

declare interface CCSGO_WingmanIntroCounterTerroristPosition {
    readonly "Parent": CCSGO_WingmanIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_WingmanIntroCounterTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_WingmanIntroCounterTerroristPosition;

declare interface CCSGO_WingmanIntroTerroristPosition {
    readonly "Parent": CCSGO_WingmanIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_WingmanIntroTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_WingmanIntroTerroristPosition;

declare interface CCSGameModeRules {
    readonly "__pChainEntity": CNetworkVarChainer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules(ptr_or_class: string|AnySDKClass): CCSGameModeRules;

declare interface CCSGameModeRules_ArmsRace {
    readonly "WeaponSequence": Object;
    readonly "Parent": CCSGameModeRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules_ArmsRace(ptr_or_class: string|AnySDKClass): CCSGameModeRules_ArmsRace;

declare interface CCSGameModeRules_Deathmatch {
    "DMBonusStartTime": number;
    "DMBonusTimeLength": number;
    "DMBonusWeapon": string;
    readonly "Parent": CCSGameModeRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules_Deathmatch(ptr_or_class: string|AnySDKClass): CCSGameModeRules_Deathmatch;

declare interface CCSGameModeRules_Noop {
    readonly "Parent": CCSGameModeRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules_Noop(ptr_or_class: string|AnySDKClass): CCSGameModeRules_Noop;

declare interface CCSObserver_CameraServices {
    readonly "Parent": CCSPlayerBase_CameraServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_CameraServices(ptr_or_class: string|AnySDKClass): CCSObserver_CameraServices;

declare interface CCSObserver_MovementServices {
    readonly "Parent": CPlayer_MovementServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_MovementServices(ptr_or_class: string|AnySDKClass): CCSObserver_MovementServices;

declare interface CCSObserver_ObserverServices {
    readonly "Parent": CPlayer_ObserverServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_ObserverServices(ptr_or_class: string|AnySDKClass): CCSObserver_ObserverServices;

declare interface CCSObserver_UseServices {
    readonly "Parent": CPlayer_UseServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_UseServices(ptr_or_class: string|AnySDKClass): CCSObserver_UseServices;

declare interface CCSObserver_ViewModelServices {
    readonly "Parent": CPlayer_ViewModelServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_ViewModelServices(ptr_or_class: string|AnySDKClass): CCSObserver_ViewModelServices;

declare interface CCSPlayerBase_CameraServices {
    "FOV": number;
    "FOVStart": number;
    "FOVTime": number;
    "FOVRate": number;
    readonly "ZoomOwner": CBaseEntity;
    readonly "LastFogTrigger": CBaseEntity;
    readonly "Parent": CPlayer_CameraServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerBase_CameraServices(ptr_or_class: string|AnySDKClass): CCSPlayerBase_CameraServices;

declare interface CCSPlayerController {
    readonly "InGameMoneyServices": CCSPlayerController_InGameMoneyServices;
    readonly "InventoryServices": CCSPlayerController_InventoryServices;
    readonly "ActionTrackingServices": CCSPlayerController_ActionTrackingServices;
    readonly "DamageServices": CCSPlayerController_DamageServices;
    "Ping": number;
    "HasCommunicationAbuseMute": boolean;
    "CrosshairCodes": string;
    "PendingTeamNum": number;
    "ForceTeamTime": number;
    "CompTeammateColor": number;
    "EverPlayedOnTeam": boolean;
    "AttemptedToGetColor": boolean;
    "TeammatePreferredColor": number;
    "TeamChanged": boolean;
    "InSwitchTeam": boolean;
    "HasSeenJoinGame": boolean;
    "JustBecameSpectator": boolean;
    "SwitchTeamsOnNextRoundReset": boolean;
    "RemoveAllItemsOnNextRoundReset": boolean;
    "LastJoinTeamTime": number;
    "Clan": string;
    "ClanName": string;
    "CoachingTeam": number;
    "PlayerDominated": number;
    "PlayerDominatingMe": number;
    "CompetitiveRanking": number;
    "CompetitiveWins": number;
    "CompetitiveRankType": number;
    "CompetitiveRankingPredicted_Win": number;
    "CompetitiveRankingPredicted_Loss": number;
    "CompetitiveRankingPredicted_Tie": number;
    "EndMatchNextMapVote": number;
    "ActiveQuestId": number;
    "PlayerTvControlFlags": number;
    "DraftIndex": number;
    "MsQueuedModeDisconnectionTimestamp": number;
    "UiAbandonRecordedReason": number;
    "CannotBeKicked": boolean;
    "EverFullyConnected": boolean;
    "AbandonAllowsSurrender": boolean;
    "AbandonOffersInstantSurrender": boolean;
    "Disconnection1MinWarningPrinted": boolean;
    "ScoreReported": boolean;
    "DisconnectionTick": number;
    "ControllingBot": boolean;
    "HasControlledBotThisRound": boolean;
    "HasBeenControlledByPlayerThisRound": boolean;
    "BotsControlledThisRound": number;
    "CanControlObservedBot": boolean;
    readonly "PlayerPawn": CCSPlayerPawn;
    readonly "ObserverPawn": CCSObserverPawn;
    "DesiredObserverMode": number;
    readonly "DesiredObserverTarget": CEntityInstance;
    "PawnIsAlive": boolean;
    "PawnHealth": number;
    "PawnArmor": number;
    "PawnHasDefuser": boolean;
    "PawnHasHelmet": boolean;
    "PawnCharacterDefIndex": number;
    "PawnLifetimeStart": number;
    "PawnLifetimeEnd": number;
    "PawnBotDifficulty": number;
    readonly "OriginalControllerOfCurrentPawn": CCSPlayerController;
    "Score": number;
    "RoundScore": number;
    "RoundsWon": number;
    "RecentKillQueue": Object;
    "FirstKill": number;
    "KillCount": number;
    "MvpNoMusic": boolean;
    "MvpReason": number;
    "MusicKitID": number;
    "MusicKitMVPs": number;
    "MVPs": number;
    "UpdateCounter": number;
    "SmoothedPing": number;
    readonly "LastHeldVoteTimer": IntervalTimer;
    "ShowHints": boolean;
    "NextTimeCheck": number;
    "JustDidTeamKill": boolean;
    "PunishForTeamKill": boolean;
    "GaveTeamDamageWarning": boolean;
    "GaveTeamDamageWarningThisRound": boolean;
    "DblLastReceivedPacketPlatFloatTime": number;
    "LastTeamDamageWarningTime": number;
    "LastTimePlayerWasDisconnectedForPawnsRemove": number;
    "SuspiciousHitCount": number;
    "NonSuspiciousHitStreak": number;
    "FireBulletsSeedSynchronized": boolean;
    readonly "Parent": CBasePlayerController;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerController(ptr_or_class: string|AnySDKClass): CCSPlayerController;

declare interface CCSPlayerController_ActionTrackingServices {
    readonly "PerRoundStats": Object;
    readonly "MatchStats": CSMatchStats_t;
    "NumRoundKills": number;
    "NumRoundKillsHeadshots": number;
    "TotalRoundDamageDealt": number;
    readonly "Parent": CPlayerControllerComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerController_ActionTrackingServices(ptr_or_class: string|AnySDKClass): CCSPlayerController_ActionTrackingServices;

declare interface CCSPlayerController_DamageServices {
    "SendUpdate": number;
    readonly "DamageList": Object;
    readonly "Parent": CPlayerControllerComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerController_DamageServices(ptr_or_class: string|AnySDKClass): CCSPlayerController_DamageServices;

declare interface CCSPlayerController_InGameMoneyServices {
    "ReceivesMoneyNextRound": boolean;
    "MoneyEarnedForNextRound": number;
    "Account": number;
    "StartAccount": number;
    "TotalCashSpent": number;
    "CashSpentThisRound": number;
    readonly "Parent": CPlayerControllerComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerController_InGameMoneyServices(ptr_or_class: string|AnySDKClass): CCSPlayerController_InGameMoneyServices;

declare interface CCSPlayerController_InventoryServices {
    "MusicID": number;
    "Rank": Object;
    "PersonaDataPublicLevel": number;
    "PersonaDataPublicCommendsLeader": number;
    "PersonaDataPublicCommendsTeacher": number;
    "PersonaDataPublicCommendsFriendly": number;
    "PersonaDataXpTrailLevel": number;
    "EquippedPlayerSprayIDs": Object;
    readonly "ServerAuthoritativeWeaponSlots": Object;
    readonly "Parent": CPlayerControllerComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerController_InventoryServices(ptr_or_class: string|AnySDKClass): CCSPlayerController_InventoryServices;

declare interface CCSPlayer_ActionTrackingServices {
    readonly "LastWeaponBeforeC4AutoSwitch": CBasePlayerWeapon;
    "IsRescuing": boolean;
    readonly "WeaponPurchasesThisMatch": WeaponPurchaseTracker_t;
    readonly "WeaponPurchasesThisRound": WeaponPurchaseTracker_t;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_ActionTrackingServices(ptr_or_class: string|AnySDKClass): CCSPlayer_ActionTrackingServices;

declare interface CCSPlayer_BulletServices {
    "TotalHitsOnServer": number;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_BulletServices(ptr_or_class: string|AnySDKClass): CCSPlayer_BulletServices;

declare interface CCSPlayer_BuyServices {
    readonly "SellbackPurchaseEntries": Object;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_BuyServices(ptr_or_class: string|AnySDKClass): CCSPlayer_BuyServices;

declare interface CCSPlayer_CameraServices {
    readonly "Parent": CCSPlayerBase_CameraServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_CameraServices(ptr_or_class: string|AnySDKClass): CCSPlayer_CameraServices;

declare interface CCSPlayer_DamageReactServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_DamageReactServices(ptr_or_class: string|AnySDKClass): CCSPlayer_DamageReactServices;

declare interface CCSPlayer_GlowServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_GlowServices(ptr_or_class: string|AnySDKClass): CCSPlayer_GlowServices;

declare interface CCSPlayer_HostageServices {
    readonly "CarriedHostage": CBaseEntity;
    readonly "CarriedHostageProp": CBaseEntity;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_HostageServices(ptr_or_class: string|AnySDKClass): CCSPlayer_HostageServices;

declare interface CCSPlayer_ItemServices {
    "HasDefuser": boolean;
    "HasHelmet": boolean;
    "HasHeavyArmor": boolean;
    readonly "Parent": CPlayer_ItemServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_ItemServices(ptr_or_class: string|AnySDKClass): CCSPlayer_ItemServices;

declare interface CCSPlayer_MovementServices {
    "LadderNormal": Vector;
    "LadderSurfacePropIndex": number;
    "DuckAmount": number;
    "DuckSpeed": number;
    "DuckOverride": boolean;
    "DesiresDuck": boolean;
    "DuckOffset": number;
    "DuckTimeMsecs": number;
    "DuckJumpTimeMsecs": number;
    "JumpTimeMsecs": number;
    "LastDuckTime": number;
    "LastPositionAtFullCrouchSpeed": Vector2D;
    "DuckUntilOnGround": boolean;
    "HasWalkMovedSinceLastJump": boolean;
    "InStuckTest": boolean;
    "TraceCount": number;
    "StuckLast": number;
    "SpeedCropped": boolean;
    "GroundMoveEfficiency": number;
    "OldWaterLevel": number;
    "WaterEntryTime": number;
    "Forward": Vector;
    "Left": Vector;
    "Up": Vector;
    "GameCodeHasMovedPlayerAfterCommand": number;
    "MadeFootstepNoise": boolean;
    "Footsteps": number;
    "OldJumpPressed": boolean;
    "JumpPressedTime": number;
    "StashGrenadeParameterWhen": number;
    "ButtonDownMaskPrev": number;
    "OffsetTickCompleteTime": number;
    "OffsetTickStashedSpeed": number;
    "Stamina": number;
    "HeightAtJumpStart": number;
    "MaxJumpHeightThisJump": number;
    "MaxJumpHeightLastJump": number;
    "StaminaAtJumpStart": number;
    "AccumulatedJumpError": number;
    readonly "Parent": CPlayer_MovementServices_Humanoid;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_MovementServices(ptr_or_class: string|AnySDKClass): CCSPlayer_MovementServices;

declare interface CCSPlayer_PingServices {
    "PlayerPingTokens": Object;
    readonly "PlayerPing": CBaseEntity;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_PingServices(ptr_or_class: string|AnySDKClass): CCSPlayer_PingServices;

declare interface CCSPlayer_UseServices {
    readonly "LastKnownUseEntity": CBaseEntity;
    "LastUseTimeStamp": number;
    "TimeLastUsedWindow": number;
    readonly "Parent": CPlayer_UseServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_UseServices(ptr_or_class: string|AnySDKClass): CCSPlayer_UseServices;

declare interface CCSPlayer_ViewModelServices {
    readonly "ViewModel": Object;
    readonly "Parent": CPlayer_ViewModelServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_ViewModelServices(ptr_or_class: string|AnySDKClass): CCSPlayer_ViewModelServices;

declare interface CCSPlayer_WaterServices {
    "NextDrownDamageTime": number;
    "DrownDmgRate": number;
    "AirFinishedTime": number;
    "WaterJumpTime": number;
    "WaterJumpVel": Vector;
    "SwimSoundTime": number;
    readonly "Parent": CPlayer_WaterServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_WaterServices(ptr_or_class: string|AnySDKClass): CCSPlayer_WaterServices;

declare interface CCSPlayer_WeaponServices {
    "NextAttack": number;
    "IsLookingAtWeapon": boolean;
    "IsHoldingLookAtWeapon": boolean;
    readonly "SavedWeapon": CBasePlayerWeapon;
    "TimeToMelee": number;
    "TimeToSecondary": number;
    "TimeToPrimary": number;
    "TimeToSniperRifle": number;
    "IsBeingGivenItem": boolean;
    "IsPickingUpItemWithUse": boolean;
    "PickedUpWeapon": boolean;
    "DisableAutoDeploy": boolean;
    "IsPickingUpGroundWeapon": boolean;
    "OldShootPositionHistoryCount": number;
    "OldInputHistoryCount": number;
    readonly "Parent": CPlayer_WeaponServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_WeaponServices(ptr_or_class: string|AnySDKClass): CCSPlayer_WeaponServices;

declare interface CCSPointScript {
    readonly "Parent": CCSPointScriptEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScript(ptr_or_class: string|AnySDKClass): CCSPointScript;

declare interface CCSPointScriptEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptEntity(ptr_or_class: string|AnySDKClass): CCSPointScriptEntity;

declare interface CCSPointScriptExtensions_CCSWeaponBaseVData {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_CCSWeaponBaseVData(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_CCSWeaponBaseVData;

declare interface CCSPointScriptExtensions_entity {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_entity(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_entity;

declare interface CCSPointScriptExtensions_observer {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_observer(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_observer;

declare interface CCSPointScriptExtensions_player {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_player(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_player;

declare interface CCSPointScriptExtensions_player_controller {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_player_controller(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_player_controller;

declare interface CCSPointScriptExtensions_weapon_cs_base {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_weapon_cs_base(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_weapon_cs_base;

declare interface CCSWeaponBaseVData {
    "WeaponType": number;
    "WeaponCategory": number;
    "GearSlot": number;
    "GearSlotPosition": number;
    "DefaultLoadoutSlot": number;
    "WrongTeamMsg": string;
    "Price": number;
    "KillAward": number;
    "PrimaryReserveAmmoMax": number;
    "SecondaryReserveAmmoMax": number;
    "MeleeWeapon": boolean;
    "HasBurstMode": boolean;
    "IsRevolver": boolean;
    "CannotShootUnderwater": boolean;
    "AnimExtension": string;
    "SilencerType": number;
    "CrosshairMinDistance": number;
    "CrosshairDeltaDistance": number;
    "IsFullAuto": boolean;
    "NumBullets": number;
    readonly "CycleTime": CFiringModeFloat;
    readonly "MaxSpeed": CFiringModeFloat;
    readonly "Spread": CFiringModeFloat;
    readonly "InaccuracyCrouch": CFiringModeFloat;
    readonly "InaccuracyStand": CFiringModeFloat;
    readonly "InaccuracyJump": CFiringModeFloat;
    readonly "InaccuracyLand": CFiringModeFloat;
    readonly "InaccuracyLadder": CFiringModeFloat;
    readonly "InaccuracyFire": CFiringModeFloat;
    readonly "InaccuracyMove": CFiringModeFloat;
    readonly "RecoilAngle": CFiringModeFloat;
    readonly "RecoilAngleVariance": CFiringModeFloat;
    readonly "RecoilMagnitude": CFiringModeFloat;
    readonly "RecoilMagnitudeVariance": CFiringModeFloat;
    readonly "TracerFrequency": CFiringModeInt;
    "InaccuracyJumpInitial": number;
    "InaccuracyJumpApex": number;
    "InaccuracyReload": number;
    "RecoilSeed": number;
    "SpreadSeed": number;
    "TimeToIdleAfterFire": number;
    "IdleInterval": number;
    "AttackMovespeedFactor": number;
    "HeatPerShot": number;
    "InaccuracyPitchShift": number;
    "InaccuracyAltSoundThreshold": number;
    "BotAudibleRange": number;
    "UseRadioSubtitle": string;
    "UnzoomsAfterShot": boolean;
    "HideViewModelWhenZoomed": boolean;
    "ZoomLevels": number;
    "ZoomFOV1": number;
    "ZoomFOV2": number;
    "ZoomTime0": number;
    "ZoomTime1": number;
    "ZoomTime2": number;
    "IronSightPullUpSpeed": number;
    "IronSightPutDownSpeed": number;
    "IronSightFOV": number;
    "IronSightPivotForward": number;
    "IronSightLooseness": number;
    "PivotAngle": QAngle;
    "IronSightEyePos": Vector;
    "Damage": number;
    "HeadshotMultiplier": number;
    "ArmorRatio": number;
    "Penetration": number;
    "Range": number;
    "RangeModifier": number;
    "FlinchVelocityModifierLarge": number;
    "FlinchVelocityModifierSmall": number;
    "RecoveryTimeCrouch": number;
    "RecoveryTimeStand": number;
    "RecoveryTimeCrouchFinal": number;
    "RecoveryTimeStandFinal": number;
    "RecoveryTransitionStartBullet": number;
    "RecoveryTransitionEndBullet": number;
    "ThrowVelocity": number;
    "SmokeColor": Vector;
    readonly "Parent": CBasePlayerWeaponVData;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSWeaponBaseVData(ptr_or_class: string|AnySDKClass): CCSWeaponBaseVData;

declare interface CCitadelSoundOpvarSetOBB {
    "StackName": string;
    "OperatorName": string;
    "OpvarName": string;
    "DistanceInnerMins": Vector;
    "DistanceInnerMaxs": Vector;
    "DistanceOuterMins": Vector;
    "DistanceOuterMaxs": Vector;
    "AABBDirection": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCitadelSoundOpvarSetOBB(ptr_or_class: string|AnySDKClass): CCitadelSoundOpvarSetOBB;

declare interface CClientAlphaProperty {
    "RenderFX": number;
    "RenderMode": number;
    "AlphaOverride": any;
    "ShadowAlphaOverride": any;
    "Reserved": any;
    "Alpha": number;
    "DesyncOffset": number;
    "Reserved2": number;
    "DistFadeStart": number;
    "DistFadeEnd": number;
    "FadeScale": number;
    "RenderFxStartTime": number;
    "RenderFxDuration": number;
    readonly "Parent": IClientAlphaProperty;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CClientAlphaProperty(ptr_or_class: string|AnySDKClass): CClientAlphaProperty;

declare interface CClientGapTypeQueryRegistration {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CClientGapTypeQueryRegistration(ptr_or_class: string|AnySDKClass): CClientGapTypeQueryRegistration;

declare interface CCollisionProperty {
    readonly "CollisionAttribute": VPhysicsCollisionAttribute_t;
    "Mins": Vector;
    "Maxs": Vector;
    "SolidFlags": number;
    "SolidType": number;
    "TriggerBloat": number;
    "SurroundType": number;
    "CollisionGroup": number;
    "EnablePhysics": number;
    "BoundingRadius": number;
    "SpecifiedSurroundingMins": Vector;
    "SpecifiedSurroundingMaxs": Vector;
    "SurroundingMaxs": Vector;
    "SurroundingMins": Vector;
    "CapsuleCenter1": Vector;
    "CapsuleCenter2": Vector;
    "CapsuleRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCollisionProperty(ptr_or_class: string|AnySDKClass): CCollisionProperty;

declare interface CCompositeMaterialEditorDoc {
    "Version": number;
    readonly "Points": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCompositeMaterialEditorDoc(ptr_or_class: string|AnySDKClass): CCompositeMaterialEditorDoc;

declare interface CCopyRecipientFilter {
    "Flags": number;
    readonly "Recipients": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCopyRecipientFilter(ptr_or_class: string|AnySDKClass): CCopyRecipientFilter;

declare interface CDamageRecord {
    readonly "PlayerDamager": CCSPlayerPawn;
    readonly "PlayerRecipient": CCSPlayerPawn;
    readonly "PlayerControllerDamager": CCSPlayerController;
    readonly "PlayerControllerRecipient": CCSPlayerController;
    "PlayerDamagerName": string;
    "PlayerRecipientName": string;
    "DamagerXuid": number;
    "RecipientXuid": number;
    "BulletsDamage": number;
    "Damage": number;
    "ActualHealthRemoved": number;
    "NumHits": number;
    "LastBulletUpdate": number;
    "IsOtherEnemy": boolean;
    "KillType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDamageRecord(ptr_or_class: string|AnySDKClass): CDamageRecord;

declare interface CDecalInfo {
    "AnimationScale": number;
    "AnimationLifeSpan": number;
    "PlaceTime": number;
    "FadeStartTime": number;
    "FadeDuration": number;
    "VBSlot": number;
    "BoneIndex": number;
    "Position": Vector;
    "BoundingRadiusSqr": number;
    readonly "Next": CDecalInfo;
    readonly "Prev": CDecalInfo;
    "DecalMaterialIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDecalInfo(ptr_or_class: string|AnySDKClass): CDecalInfo;

declare interface CDestructiblePartRuntimeData {
    "HealthRemaining": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartRuntimeData(ptr_or_class: string|AnySDKClass): CDestructiblePartRuntimeData;

declare interface CDestructiblePartRuntimeDataVector {
    readonly "DestructiblePartsRuntimeData": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartRuntimeDataVector(ptr_or_class: string|AnySDKClass): CDestructiblePartRuntimeDataVector;

declare interface CDestructiblePartsSystemData {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartsSystemData(ptr_or_class: string|AnySDKClass): CDestructiblePartsSystemData;

declare interface CDestructiblePartsSystemData_HitGroupInfoAndPartData {
    "Name": string;
    readonly "DestructiblePartsData": Object;
    "DisableHitGroupWhenDestroyed": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartsSystemData_HitGroupInfoAndPartData(ptr_or_class: string|AnySDKClass): CDestructiblePartsSystemData_HitGroupInfoAndPartData;

declare interface CDestructiblePartsSystemData_PartData {
    "Name": string;
    "BodyGroupValue": number;
    readonly "Health": CSkillInt;
    "DamagePassthroughType": number;
    "KillNPCOnDestruction": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartsSystemData_PartData(ptr_or_class: string|AnySDKClass): CDestructiblePartsSystemData_PartData;

declare interface CEconItemAttribute {
    "AttributeDefinitionIndex": number;
    "Value": number;
    "InitialValue": number;
    "RefundableCurrency": number;
    "SetBonus": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEconItemAttribute(ptr_or_class: string|AnySDKClass): CEconItemAttribute;

declare interface CEffectData {
    "Origin": Vector;
    "Start": Vector;
    "Normal": Vector;
    "Angles": QAngle;
    readonly "Entity": CEntityInstance;
    readonly "OtherEntity": CEntityInstance;
    "Scale": number;
    "Magnitude": number;
    "Radius": number;
    "SurfaceProp": number;
    "DamageType": number;
    "Penetrate": number;
    "Material": number;
    "HitBox": number;
    "Color": number;
    "Flags": number;
    "AttachmentName": number;
    "EffectName": number;
    "ExplosionType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEffectData(ptr_or_class: string|AnySDKClass): CEffectData;

declare interface CEntitySubclassVDataBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntitySubclassVDataBase(ptr_or_class: string|AnySDKClass): CEntitySubclassVDataBase;

declare interface CEnvSoundscape {
    readonly "OnPlay": CEntityIOOutput;
    "Radius": number;
    "SoundEventName": string;
    "OverrideWithEvent": boolean;
    "SoundscapeIndex": number;
    "SoundscapeEntityListId": number;
    "PositionNames": Object;
    readonly "ProxySoundscape": CEnvSoundscape;
    "Disabled": boolean;
    "SoundscapeName": string;
    "SoundEventHash": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscape(ptr_or_class: string|AnySDKClass): CEnvSoundscape;

declare interface CEnvSoundscapeAlias_snd_soundscape {
    readonly "Parent": CEnvSoundscape;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeAlias_snd_soundscape(ptr_or_class: string|AnySDKClass): CEnvSoundscapeAlias_snd_soundscape;

declare interface CEnvSoundscapeProxy {
    "MainSoundscapeName": string;
    readonly "Parent": CEnvSoundscape;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeProxy(ptr_or_class: string|AnySDKClass): CEnvSoundscapeProxy;

declare interface CEnvSoundscapeProxyAlias_snd_soundscape_proxy {
    readonly "Parent": CEnvSoundscapeProxy;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeProxyAlias_snd_soundscape_proxy(ptr_or_class: string|AnySDKClass): CEnvSoundscapeProxyAlias_snd_soundscape_proxy;

declare interface CEnvSoundscapeTriggerable {
    readonly "Parent": CEnvSoundscape;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeTriggerable(ptr_or_class: string|AnySDKClass): CEnvSoundscapeTriggerable;

declare interface CEnvSoundscapeTriggerableAlias_snd_soundscape_triggerable {
    readonly "Parent": CEnvSoundscapeTriggerable;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeTriggerableAlias_snd_soundscape_triggerable(ptr_or_class: string|AnySDKClass): CEnvSoundscapeTriggerableAlias_snd_soundscape_triggerable;

declare interface CFireOverlay {
    readonly "Owner": any;
    "BaseColors": Object;
    "Scale": number;
    "GUID": number;
    readonly "Parent": CGlowOverlay;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFireOverlay(ptr_or_class: string|AnySDKClass): CFireOverlay;

declare interface CFiringModeFloat {
    "Values": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFiringModeFloat(ptr_or_class: string|AnySDKClass): CFiringModeFloat;

declare interface CFiringModeInt {
    "Values": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFiringModeInt(ptr_or_class: string|AnySDKClass): CFiringModeInt;

declare interface CFlashlightEffect {
    "IsOn": boolean;
    "MuzzleFlashEnabled": boolean;
    "MuzzleFlashBrightness": number;
    "MuzzleFlashOrigin": Vector;
    "Fov": number;
    "FarZ": number;
    "LinearAtten": number;
    "CastsShadows": boolean;
    "CurrentPullBackDist": number;
    "TextureName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlashlightEffect(ptr_or_class: string|AnySDKClass): CFlashlightEffect;

declare interface CFootstepTableHandle {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootstepTableHandle(ptr_or_class: string|AnySDKClass): CFootstepTableHandle;

declare interface CFuncWater {
    readonly "BuoyancyHelper": CBuoyancyHelper;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncWater(ptr_or_class: string|AnySDKClass): CFuncWater;

declare interface CGameSceneNode {
    readonly "Owner": CEntityInstance;
    readonly "Parent": CGameSceneNode;
    readonly "Child": CGameSceneNode;
    readonly "NextSibling": CGameSceneNode;
    readonly "Origin": CNetworkOriginCellCoordQuantizedVector;
    "Rotation": QAngle;
    "Scale": number;
    "AbsOrigin": Vector;
    "AbsRotation": QAngle;
    "AbsScale": number;
    "ParentAttachmentOrBone": number;
    "DebugAbsOriginChanges": boolean;
    "Dormant": boolean;
    "ForceParentToBeNetworked": boolean;
    "DirtyHierarchy": any;
    "DirtyBoneMergeInfo": any;
    "NetworkedPositionChanged": any;
    "NetworkedAnglesChanged": any;
    "NetworkedScaleChanged": any;
    "WillBeCallingPostDataUpdate": any;
    "BoneMergeFlex": any;
    "LatchAbsOrigin": any;
    "DirtyBoneMergeBoneToRoot": any;
    "HierarchicalDepth": number;
    "HierarchyType": number;
    "DoNotSetAnimTimeInInvalidatePhysicsCount": number;
    "Name": number;
    "HierarchyAttachName": number;
    "ZOffset": number;
    "ClientLocalScale": number;
    "RenderOrigin": Vector;
    GetSkeletonInstance: () => CSkeletonInstance;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameSceneNode(ptr_or_class: string|AnySDKClass): CGameSceneNode;

declare interface CGlobalLightBase {
    "SpotLight": boolean;
    "SpotLightOrigin": Vector;
    "SpotLightAngles": QAngle;
    "ShadowDirection": Vector;
    "AmbientDirection": Vector;
    "SpecularDirection": Vector;
    "InspectorSpecularDirection": Vector;
    "SpecularPower": number;
    "SpecularIndependence": number;
    "SpecularColor": Color;
    "StartDisabled": boolean;
    "Enabled": boolean;
    "LightColor": Color;
    "AmbientColor1": Color;
    "AmbientColor2": Color;
    "AmbientColor3": Color;
    "SunDistance": number;
    "FOV": number;
    "NearZ": number;
    "FarZ": number;
    "EnableShadows": boolean;
    "OldEnableShadows": boolean;
    "BackgroundClearNotRequired": boolean;
    "CloudScale": number;
    "Cloud1Speed": number;
    "Cloud1Direction": number;
    "Cloud2Speed": number;
    "Cloud2Direction": number;
    "AmbientScale1": number;
    "AmbientScale2": number;
    "GroundScale": number;
    "LightScale": number;
    "FoWDarkness": number;
    "EnableSeparateSkyboxFog": boolean;
    "FowColor": Vector;
    "ViewOrigin": Vector;
    "ViewAngles": QAngle;
    "ViewFoV": number;
    "WorldPoints": Object;
    "FogOffsetLayer0": Vector2D;
    "FogOffsetLayer1": Vector2D;
    readonly "EnvWind": any;
    readonly "EnvSky": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGlobalLightBase(ptr_or_class: string|AnySDKClass): CGlobalLightBase;

declare interface CGlowOverlay {
    "Pos": Vector;
    "Directional": boolean;
    "Direction": Vector;
    "InSky": boolean;
    "SkyObstructionScale": number;
    readonly "Sprites": Object;
    "Sprites1": number;
    "ProxyRadius": number;
    "HDRColorScale": number;
    "GlowObstructionScale": number;
    "CacheGlowObstruction": boolean;
    "CacheSkyObstruction": boolean;
    "Activated": number;
    "ListIndex": number;
    "QueryHandle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGlowOverlay(ptr_or_class: string|AnySDKClass): CGlowOverlay;

declare interface CGlowProperty {
    "GlowColor": Vector;
    "GlowType": number;
    "GlowTeam": number;
    "GlowRange": number;
    "GlowRangeMin": number;
    "GlowColorOverride": Color;
    "Flashing": boolean;
    "GlowTime": number;
    "GlowStartTime": number;
    "EligibleForScreenHighlight": boolean;
    "Glowing": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGlowProperty(ptr_or_class: string|AnySDKClass): CGlowProperty;

declare interface CGlowSprite {
    "Color": Vector;
    "HorzSize": number;
    "VertSize": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGlowSprite(ptr_or_class: string|AnySDKClass): CGlowSprite;

declare interface CGrenadeTracer {
    "TracerDuration": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGrenadeTracer(ptr_or_class: string|AnySDKClass): CGrenadeTracer;

declare interface CHitboxComponent {
    "DisabledHitGroups": Object;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitboxComponent(ptr_or_class: string|AnySDKClass): CHitboxComponent;

declare interface CHostageRescueZone {
    readonly "Parent": CHostageRescueZoneShim;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageRescueZone(ptr_or_class: string|AnySDKClass): CHostageRescueZone;

declare interface CHostageRescueZoneShim {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageRescueZoneShim(ptr_or_class: string|AnySDKClass): CHostageRescueZoneShim;

declare interface CInButtonState {
    "ButtonStates": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInButtonState(ptr_or_class: string|AnySDKClass): CInButtonState;

declare interface CInfoDynamicShadowHint {
    "Disabled": boolean;
    "Range": number;
    "Importance": number;
    "LightChoice": number;
    readonly "Light": CBaseEntity;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoDynamicShadowHint(ptr_or_class: string|AnySDKClass): CInfoDynamicShadowHint;

declare interface CInfoDynamicShadowHintBox {
    "BoxMins": Vector;
    "BoxMaxs": Vector;
    readonly "Parent": CInfoDynamicShadowHint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoDynamicShadowHintBox(ptr_or_class: string|AnySDKClass): CInfoDynamicShadowHintBox;

declare interface CInfoOffscreenPanoramaTexture {
    "Disabled": boolean;
    "ResolutionX": number;
    "ResolutionY": number;
    "LayoutFileName": string;
    "RenderAttrName": string;
    "TargetChangeCount": number;
    readonly "CSSClasses": Object;
    "TargetsName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoOffscreenPanoramaTexture(ptr_or_class: string|AnySDKClass): CInfoOffscreenPanoramaTexture;

declare interface CInfoParticleTarget {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoParticleTarget(ptr_or_class: string|AnySDKClass): CInfoParticleTarget;

declare interface CInfoTarget {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoTarget(ptr_or_class: string|AnySDKClass): CInfoTarget;

declare interface CInfoWorldLayer {
    readonly "OutputOnEntitiesSpawned": CEntityIOOutput;
    "WorldName": string;
    "LayerName": string;
    "WorldLayerVisible": boolean;
    "EntitiesSpawned": boolean;
    "CreateAsChildSpawnGroup": boolean;
    "LayerSpawnGroup": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoWorldLayer(ptr_or_class: string|AnySDKClass): CInfoWorldLayer;

declare interface CInterpolatedValue {
    "StartTime": number;
    "EndTime": number;
    "StartValue": number;
    "EndValue": number;
    "InterpType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInterpolatedValue(ptr_or_class: string|AnySDKClass): CInterpolatedValue;

declare interface CLightComponent {
    readonly "__pChainEntity": CNetworkVarChainer;
    "Color": Color;
    "SecondaryColor": Color;
    "Brightness": number;
    "BrightnessScale": number;
    "BrightnessMult": number;
    "Range": number;
    "Falloff": number;
    "Attenuation0": number;
    "Attenuation1": number;
    "Attenuation2": number;
    "Theta": number;
    "Phi": number;
    "Cascades": number;
    "CastShadows": number;
    "ShadowWidth": number;
    "ShadowHeight": number;
    "RenderDiffuse": boolean;
    "RenderSpecular": number;
    "RenderTransmissive": boolean;
    "OrthoLightWidth": number;
    "OrthoLightHeight": number;
    "Style": number;
    "Pattern": string;
    "CascadeRenderStaticObjects": number;
    "ShadowCascadeCrossFade": number;
    "ShadowCascadeDistanceFade": number;
    "ShadowCascadeDistance0": number;
    "ShadowCascadeDistance1": number;
    "ShadowCascadeDistance2": number;
    "ShadowCascadeDistance3": number;
    "ShadowCascadeResolution0": number;
    "ShadowCascadeResolution1": number;
    "ShadowCascadeResolution2": number;
    "ShadowCascadeResolution3": number;
    "UsesBakedShadowing": boolean;
    "ShadowPriority": number;
    "BakedShadowIndex": number;
    "RenderToCubemaps": boolean;
    "DirectLight": number;
    "IndirectLight": number;
    "FadeMinDist": number;
    "FadeMaxDist": number;
    "ShadowFadeMinDist": number;
    "ShadowFadeMaxDist": number;
    "Enabled": boolean;
    "Flicker": boolean;
    "PrecomputedFieldsValid": boolean;
    "PrecomputedBoundsMins": Vector;
    "PrecomputedBoundsMaxs": Vector;
    "PrecomputedOBBOrigin": Vector;
    "PrecomputedOBBAngles": QAngle;
    "PrecomputedOBBExtent": Vector;
    "PrecomputedMaxRange": number;
    "FogLightingMode": number;
    "FogContributionStength": number;
    "NearClipPlane": number;
    "SkyColor": Color;
    "SkyIntensity": number;
    "SkyAmbientBounce": Color;
    "UseSecondaryColor": boolean;
    "MixedShadows": boolean;
    "LightStyleStartTime": number;
    "CapsuleLength": number;
    "MinRoughness": number;
    "PvsModifyEntity": boolean;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightComponent(ptr_or_class: string|AnySDKClass): CLightComponent;

declare interface CLogicRelay {
    readonly "OnTrigger": CEntityIOOutput;
    readonly "OnSpawn": CEntityIOOutput;
    "Disabled": boolean;
    "WaitForRefire": boolean;
    "TriggerOnce": boolean;
    "FastRetrigger": boolean;
    "PassthoughCaller": boolean;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicRelay(ptr_or_class: string|AnySDKClass): CLogicRelay;

declare interface CLogicalEntity {
    readonly "Parent": CServerOnlyEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicalEntity(ptr_or_class: string|AnySDKClass): CLogicalEntity;

declare interface CMapInfo {
    "BuyingStatus": number;
    "BombRadius": number;
    "PetPopulation": number;
    "UseNormalSpawnsForDM": boolean;
    "DisableAutoGeneratedDMSpawns": boolean;
    "BotMaxVisionDistance": number;
    "HostageCount": number;
    "FadePlayerVisibilityFarZ": boolean;
    "RainTraceToSkyEnabled": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMapInfo(ptr_or_class: string|AnySDKClass): CMapInfo;

declare interface CModelState {
    "ModelName": string;
    "ClientClothCreationSuppressed": boolean;
    "MeshGroupMask": number;
    "IdealMotionType": number;
    "ForceLOD": number;
    "ClothUpdateFlags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelState(ptr_or_class: string|AnySDKClass): CModelState;

declare interface CNavLinkAnimgraphVar {
    "AlignmentDegrees": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavLinkAnimgraphVar(ptr_or_class: string|AnySDKClass): CNavLinkAnimgraphVar;

declare interface CNavLinkMovementVData {
    "IsInterpolated": boolean;
    "RecommendedDistance": number;
    readonly "AnimgraphVars": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavLinkMovementVData(ptr_or_class: string|AnySDKClass): CNavLinkMovementVData;

declare interface CNetworkOriginCellCoordQuantizedVector {
    "CellX": number;
    "CellY": number;
    "CellZ": number;
    "OutsideWorld": number;
    "X": number;
    "Y": number;
    "Z": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkOriginCellCoordQuantizedVector(ptr_or_class: string|AnySDKClass): CNetworkOriginCellCoordQuantizedVector;

declare interface CNetworkOriginQuantizedVector {
    "X": number;
    "Y": number;
    "Z": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkOriginQuantizedVector(ptr_or_class: string|AnySDKClass): CNetworkOriginQuantizedVector;

declare interface CNetworkTransmitComponent {
    "TransmitStateOwnedCounter": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkTransmitComponent(ptr_or_class: string|AnySDKClass): CNetworkTransmitComponent;

declare interface CNetworkVelocityVector {
    "X": number;
    "Y": number;
    "Z": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkVelocityVector(ptr_or_class: string|AnySDKClass): CNetworkVelocityVector;

declare interface CNetworkViewOffsetVector {
    "X": number;
    "Y": number;
    "Z": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkViewOffsetVector(ptr_or_class: string|AnySDKClass): CNetworkViewOffsetVector;

declare interface CNetworkedSequenceOperation {
    "Sequence": number;
    "PrevCycle": number;
    "Cycle": number;
    "Weight": number;
    "SequenceChangeNetworked": boolean;
    "Discontinuity": boolean;
    "PrevCycleFromDiscontinuity": number;
    "PrevCycleForAnimEventDetection": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkedSequenceOperation(ptr_or_class: string|AnySDKClass): CNetworkedSequenceOperation;

declare interface CPathSimple {
    "PathString": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathSimple(ptr_or_class: string|AnySDKClass): CPathSimple;

declare interface CPathSimpleAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathSimpleAPI(ptr_or_class: string|AnySDKClass): CPathSimpleAPI;

declare interface CPlayerControllerComponent {
    readonly "__pChainEntity": CNetworkVarChainer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerControllerComponent(ptr_or_class: string|AnySDKClass): CPlayerControllerComponent;

declare interface CPlayerPawnComponent {
    readonly "__pChainEntity": CNetworkVarChainer;
    GetPawn: () => CBasePlayerPawn;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerPawnComponent(ptr_or_class: string|AnySDKClass): CPlayerPawnComponent;

declare interface CPlayerSprayDecalRenderHelper {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerSprayDecalRenderHelper(ptr_or_class: string|AnySDKClass): CPlayerSprayDecalRenderHelper;

declare interface CPlayer_AutoaimServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_AutoaimServices(ptr_or_class: string|AnySDKClass): CPlayer_AutoaimServices;

declare interface CPlayer_CameraServices {
    "CsViewPunchAngle": QAngle;
    "CsViewPunchAngleTick": number;
    "CsViewPunchAngleTickRatio": number;
    readonly "PlayerFog": fogplayerparams_t;
    readonly "ColorCorrectionCtrl": CColorCorrection;
    readonly "ViewEntity": CBaseEntity;
    readonly "TonemapController": CTonemapController2;
    readonly "Audio": audioparams_t;
    "OldPlayerZ": number;
    "OldPlayerViewOffsetZ": number;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_CameraServices(ptr_or_class: string|AnySDKClass): CPlayer_CameraServices;

declare interface CPlayer_FlashlightServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_FlashlightServices(ptr_or_class: string|AnySDKClass): CPlayer_FlashlightServices;

declare interface CPlayer_ItemServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_ItemServices(ptr_or_class: string|AnySDKClass): CPlayer_ItemServices;

declare interface CPlayer_MovementServices {
    "Impulse": number;
    readonly "Buttons": CInButtonState;
    "QueuedButtonDownMask": number;
    "QueuedButtonChangeMask": number;
    "ButtonDoublePressed": number;
    "ButtonPressedCmdNumber": Object;
    "LastCommandNumberProcessed": number;
    "ToggleButtonDownMask": number;
    "Maxspeed": number;
    "ForceSubtickMoveWhen": Object;
    "ForwardMove": number;
    "LeftMove": number;
    "UpMove": number;
    "LastMovementImpulses": Vector;
    "OldViewAngles": QAngle;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_MovementServices(ptr_or_class: string|AnySDKClass): CPlayer_MovementServices;

declare interface CPlayer_MovementServices_Humanoid {
    "StepSoundTime": number;
    "FallVelocity": number;
    "InCrouch": boolean;
    "CrouchState": number;
    "CrouchTransitionStartTime": number;
    "Ducked": boolean;
    "Ducking": boolean;
    "InDuckJump": boolean;
    "GroundNormal": Vector;
    "SurfaceFriction": number;
    "SurfaceProps": number;
    "Stepside": number;
    "TargetVolume": number;
    "SmoothedVelocity": Vector;
    readonly "Parent": CPlayer_MovementServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_MovementServices_Humanoid(ptr_or_class: string|AnySDKClass): CPlayer_MovementServices_Humanoid;

declare interface CPlayer_ObserverServices {
    "ObserverMode": number;
    readonly "ObserverTarget": CBaseEntity;
    "ObserverLastMode": number;
    "ForcedObserverMode": boolean;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_ObserverServices(ptr_or_class: string|AnySDKClass): CPlayer_ObserverServices;

declare interface CPlayer_UseServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_UseServices(ptr_or_class: string|AnySDKClass): CPlayer_UseServices;

declare interface CPlayer_ViewModelServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_ViewModelServices(ptr_or_class: string|AnySDKClass): CPlayer_ViewModelServices;

declare interface CPlayer_WaterServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_WaterServices(ptr_or_class: string|AnySDKClass): CPlayer_WaterServices;

declare interface CPlayer_WeaponServices {
    readonly "ActiveWeapon": CBasePlayerWeapon;
    readonly "LastWeapon": CBasePlayerWeapon;
    "Ammo": Object;
    "PreventWeaponPickup": boolean;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_WeaponServices(ptr_or_class: string|AnySDKClass): CPlayer_WeaponServices;

declare interface CPointChildModifier {
    "OrphanInsteadOfDeletingChildrenOnRemove": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointChildModifier(ptr_or_class: string|AnySDKClass): CPointChildModifier;

declare interface CPointOffScreenIndicatorUi {
    "BeenEnabled": boolean;
    "Hide": boolean;
    "SeenTargetTime": number;
    readonly "TargetPanel": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointOffScreenIndicatorUi(ptr_or_class: string|AnySDKClass): CPointOffScreenIndicatorUi;

declare interface CPointTemplate {
    "WorldName": string;
    "Source2EntityLumpName": string;
    "EntityFilterName": string;
    "TimeoutInterval": number;
    "AsynchronouslySpawnEntities": boolean;
    readonly "OutputOnSpawned": CEntityIOOutput;
    "ClientOnlyEntityBehavior": number;
    "OwnerSpawnGroupType": number;
    readonly "CreatedSpawnGroupHandles": Object;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointTemplate(ptr_or_class: string|AnySDKClass): CPointTemplate;

declare interface CPointTemplateAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointTemplateAPI(ptr_or_class: string|AnySDKClass): CPointTemplateAPI;

declare interface CPrecipitationVData {
    "InnerDistance": number;
    "AttachType": number;
    "BatchSameVolumeType": boolean;
    "RTEnvCP": number;
    "RTEnvCPComponent": number;
    "Modifier": string;
    readonly "Parent": CEntitySubclassVDataBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPrecipitationVData(ptr_or_class: string|AnySDKClass): CPrecipitationVData;

declare interface CProjectedTextureBase {
    readonly "TargetEntity": any;
    "State": boolean;
    "AlwaysUpdate": boolean;
    "LightFOV": number;
    "EnableShadows": boolean;
    "SimpleProjection": boolean;
    "LightOnlyTarget": boolean;
    "LightWorld": boolean;
    "CameraSpace": boolean;
    "BrightnessScale": number;
    "LightColor": Color;
    "Intensity": number;
    "LinearAttenuation": number;
    "QuadraticAttenuation": number;
    "Volumetric": boolean;
    "VolumetricIntensity": number;
    "NoiseStrength": number;
    "FlashlightTime": number;
    "NumPlanes": number;
    "PlaneOffset": number;
    "ColorTransitionTime": number;
    "Ambient": number;
    "SpotlightTextureName": string;
    "SpotlightTextureFrame": number;
    "ShadowQuality": number;
    "NearZ": number;
    "FarZ": number;
    "ProjectionSize": number;
    "Rotation": number;
    "FlipHorizontal": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CProjectedTextureBase(ptr_or_class: string|AnySDKClass): CProjectedTextureBase;

declare interface CPropDataComponent {
    "DmgModBullet": number;
    "DmgModClub": number;
    "DmgModExplosive": number;
    "DmgModFire": number;
    "PhysicsDamageTableName": string;
    "BasePropData": string;
    "Interactions": number;
    "SpawnMotionDisabled": boolean;
    "DisableTakePhysicsDamageSpawnFlag": number;
    "MotionDisabledSpawnFlag": number;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPropDataComponent(ptr_or_class: string|AnySDKClass): CPropDataComponent;

declare interface CRagdollManager {
    "CurrentMaxRagdollCount": number;
    "MaxRagdollCount": number;
    "SaveImportant": boolean;
    "CanTakeDamage": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollManager(ptr_or_class: string|AnySDKClass): CRagdollManager;

declare interface CRandSimTimer {
    "MinInterval": number;
    "MaxInterval": number;
    readonly "Parent": CSimpleSimTimer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRandSimTimer(ptr_or_class: string|AnySDKClass): CRandSimTimer;

declare interface CRandStopwatch {
    "MinInterval": number;
    "MaxInterval": number;
    readonly "Parent": CStopwatchBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRandStopwatch(ptr_or_class: string|AnySDKClass): CRandStopwatch;

declare interface CRemapFloat {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRemapFloat(ptr_or_class: string|AnySDKClass): CRemapFloat;

declare interface CRenderComponent {
    readonly "__pChainEntity": CNetworkVarChainer;
    "IsRenderingWithViewModels": boolean;
    "SplitscreenFlags": number;
    "EnableRendering": boolean;
    "InterpolationReadyToDraw": boolean;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderComponent(ptr_or_class: string|AnySDKClass): CRenderComponent;

declare interface CResponseCriteriaSet {
    "NumPrefixedContexts": number;
    "OverrideOnAppend": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CResponseCriteriaSet(ptr_or_class: string|AnySDKClass): CResponseCriteriaSet;

declare interface CRopeOverlapHit {
    readonly "Entity": any;
    readonly "OverlappingLinks": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRopeOverlapHit(ptr_or_class: string|AnySDKClass): CRopeOverlapHit;

declare interface CSMatchStats_t {
    "Enemy5Ks": number;
    "Enemy4Ks": number;
    "Enemy3Ks": number;
    "EnemyKnifeKills": number;
    "EnemyTaserKills": number;
    "Enemy2Ks": number;
    "Utility_Count": number;
    "Utility_Successes": number;
    "Utility_Enemies": number;
    "Flash_Count": number;
    "Flash_Successes": number;
    "HealthPointsRemovedTotal": number;
    "HealthPointsDealtTotal": number;
    "ShotsFiredTotal": number;
    "ShotsOnTargetTotal": number;
    "1v1Count": number;
    "1v1Wins": number;
    "1v2Count": number;
    "1v2Wins": number;
    "EntryCount": number;
    "EntryWins": number;
    readonly "Parent": CSPerRoundStats_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSMatchStats_t(ptr_or_class: string|AnySDKClass): CSMatchStats_t;

declare interface CSPerRoundStats_t {
    "Kills": number;
    "Deaths": number;
    "Assists": number;
    "Damage": number;
    "EquipmentValue": number;
    "MoneySaved": number;
    "KillReward": number;
    "LiveTime": number;
    "HeadShotKills": number;
    "Objective": number;
    "CashEarned": number;
    "UtilityDamage": number;
    "EnemiesFlashed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSPerRoundStats_t(ptr_or_class: string|AnySDKClass): CSPerRoundStats_t;

declare interface CSceneEventInfo {
    "Layer": number;
    "Priority": number;
    "Sequence": number;
    "Weight": number;
    "HasArrived": boolean;
    "Type": number;
    "Next": number;
    "IsGesture": boolean;
    "ShouldRemove": boolean;
    readonly "Target": any;
    readonly "SceneEventId": SceneEventId_t;
    "ClientSide": boolean;
    "Started": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneEventInfo(ptr_or_class: string|AnySDKClass): CSceneEventInfo;

declare interface CScriptUniformRandomStream {
    "InitialSeed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptUniformRandomStream(ptr_or_class: string|AnySDKClass): CScriptUniformRandomStream;

declare interface CServerOnlyModelEntity {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerOnlyModelEntity(ptr_or_class: string|AnySDKClass): CServerOnlyModelEntity;

declare interface CSharedGapTypeQueryRegistration {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSharedGapTypeQueryRegistration(ptr_or_class: string|AnySDKClass): CSharedGapTypeQueryRegistration;

declare interface CSimTimer {
    "Interval": number;
    readonly "Parent": CSimpleSimTimer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimTimer(ptr_or_class: string|AnySDKClass): CSimTimer;

declare interface CSimpleSimTimer {
    "Next": number;
    "WorldGroupId": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimpleSimTimer(ptr_or_class: string|AnySDKClass): CSimpleSimTimer;

declare interface CSimpleStopwatch {
    readonly "Parent": CStopwatchBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimpleStopwatch(ptr_or_class: string|AnySDKClass): CSimpleStopwatch;

declare interface CSkeletonAnimationController {
    readonly "SkeletonInstance": CSkeletonInstance;
    readonly "Parent": ISkeletonAnimationController;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkeletonAnimationController(ptr_or_class: string|AnySDKClass): CSkeletonAnimationController;

declare interface CSkeletonInstance {
    readonly "ModelState": CModelState;
    "IsAnimationEnabled": boolean;
    "UseParentRenderBounds": boolean;
    "DisableSolidCollisionsForHierarchy": boolean;
    "DirtyMotionType": any;
    "IsGeneratingLatchedParentSpaceState": any;
    "MaterialGroup": number;
    "HitboxSet": number;
    readonly "Parent": CGameSceneNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkeletonInstance(ptr_or_class: string|AnySDKClass): CSkeletonInstance;

declare interface CSkillDamage {
    readonly "Damage": CSkillFloat;
    "NPCDamageScalarVsNPC": number;
    "PhysicsForceDamage": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkillDamage(ptr_or_class: string|AnySDKClass): CSkillDamage;

declare interface CSkillFloat {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkillFloat(ptr_or_class: string|AnySDKClass): CSkillFloat;

declare interface CSkillInt {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkillInt(ptr_or_class: string|AnySDKClass): CSkillInt;

declare interface CSkyboxReference {
    "WorldGroupId": number;
    readonly "SkyCamera": CSkyCamera;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkyboxReference(ptr_or_class: string|AnySDKClass): CSkyboxReference;

declare interface CSoundEnvelope {
    "Current": number;
    "Target": number;
    "Rate": number;
    "Forceupdate": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEnvelope(ptr_or_class: string|AnySDKClass): CSoundEnvelope;

declare interface CSoundPatch {
    readonly "Pitch": CSoundEnvelope;
    readonly "Volume": CSoundEnvelope;
    "ShutdownTime": number;
    "LastTime": number;
    "SoundScriptName": string;
    readonly "Ent": any;
    "SoundEntityIndex": number;
    "SoundOrigin": Vector;
    "IsPlaying": number;
    readonly "Filter": CCopyRecipientFilter;
    "CloseCaptionDuration": number;
    "UpdatedSoundOrigin": boolean;
    "ClassName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundPatch(ptr_or_class: string|AnySDKClass): CSoundPatch;

declare interface CSpriteOriented {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpriteOriented(ptr_or_class: string|AnySDKClass): CSpriteOriented;

declare interface CStopwatch {
    "Interval": number;
    readonly "Parent": CStopwatchBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStopwatch(ptr_or_class: string|AnySDKClass): CStopwatch;

declare interface CStopwatchBase {
    "IsRunning": boolean;
    readonly "Parent": CSimpleSimTimer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStopwatchBase(ptr_or_class: string|AnySDKClass): CStopwatchBase;

declare interface CTablet {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTablet(ptr_or_class: string|AnySDKClass): CTablet;

declare interface CTakeDamageInfo {
    "DamageForce": Vector;
    "DamagePosition": Vector;
    "ReportedPosition": Vector;
    "DamageDirection": Vector;
    readonly "Inflictor": any;
    readonly "Attacker": any;
    readonly "Ability": any;
    "Damage": number;
    "TotalledDamage": number;
    "TotalledDamageAbsorbed": number;
    "BitsDamageType": number;
    "DamageCustom": number;
    "AmmoType": number;
    "OriginalDamage": number;
    "ShouldBleed": boolean;
    "ShouldSpark": boolean;
    "DamageAbsorbed": number;
    "DamageFlags": number;
    "NumObjectsPenetrated": number;
    "FriendlyFireDamageReductionRatio": number;
    "InTakeDamageFlow": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTakeDamageInfo(ptr_or_class: string|AnySDKClass): CTakeDamageInfo;

declare interface CTakeDamageInfoAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTakeDamageInfoAPI(ptr_or_class: string|AnySDKClass): CTakeDamageInfoAPI;

declare interface CTakeDamageResult {
    readonly "OriginatingInfo": CTakeDamageInfo;
    "HealthLost": number;
    "DamageTaken": number;
    "TotalledHealthLost": number;
    "TotalledDamageTaken": number;
    "TotalledDamageAbsorbed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTakeDamageResult(ptr_or_class: string|AnySDKClass): CTakeDamageResult;

declare interface CTakeDamageSummaryScopeGuard {
    readonly "Summaries": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTakeDamageSummaryScopeGuard(ptr_or_class: string|AnySDKClass): CTakeDamageSummaryScopeGuard;

declare interface CTimeline {
    "Values": Object;
    "ValueCounts": Object;
    "BucketCount": number;
    "Interval": number;
    "FinalValue": number;
    "CompressionType": number;
    "Stopped": boolean;
    readonly "Parent": IntervalTimer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTimeline(ptr_or_class: string|AnySDKClass): CTimeline;

declare interface CTripWireFire {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTripWireFire(ptr_or_class: string|AnySDKClass): CTripWireFire;

declare interface CTripWireFireProjectile {
    readonly "Parent": CBaseGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTripWireFireProjectile(ptr_or_class: string|AnySDKClass): CTripWireFireProjectile;

declare interface CWaterSplasher {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWaterSplasher(ptr_or_class: string|AnySDKClass): CWaterSplasher;

declare interface CWeaponZoneRepulsor {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponZoneRepulsor(ptr_or_class: string|AnySDKClass): CWeaponZoneRepulsor;

declare interface CWorldCompositionChunkReferenceElement_t {
    "StrMapToLoad": string;
    "StrLandmarkName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWorldCompositionChunkReferenceElement_t(ptr_or_class: string|AnySDKClass): CWorldCompositionChunkReferenceElement_t;

declare interface CommandToolCommand_t {
    "Enabled": boolean;
    "Opened": boolean;
    "InternalId": number;
    "ShortName": string;
    "ExecMode": number;
    "SpawnGroup": string;
    "PeriodicExecDelay": number;
    "SpecType": number;
    "EntitySpec": string;
    "Commands": string;
    "SetDebugBits": number;
    "ClearDebugBits": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CommandToolCommand_t(ptr_or_class: string|AnySDKClass): CommandToolCommand_t;

declare interface CompMatMutatorCondition_t {
    "MutatorCondition": number;
    "StrMutatorConditionContainerName": string;
    "StrMutatorConditionContainerVarName": string;
    "StrMutatorConditionContainerVarValue": string;
    "PassWhenTrue": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompMatMutatorCondition_t(ptr_or_class: string|AnySDKClass): CompMatMutatorCondition_t;

declare interface CompMatPropertyMutator_t {
    "Enabled": boolean;
    "MutatorCommandType": number;
    "StrInitWith_Container": string;
    "StrCopyProperty_InputContainerSrc": string;
    "StrCopyProperty_InputContainerProperty": string;
    "StrCopyProperty_TargetProperty": string;
    "StrRandomRollInputVars_SeedInputVar": string;
    readonly "RandomRollInputVars_InputVarsToRoll": Object;
    "StrCopyMatchingKeys_InputContainerSrc": string;
    "StrCopyKeysWithSuffix_InputContainerSrc": string;
    "StrCopyKeysWithSuffix_FindSuffix": string;
    "StrCopyKeysWithSuffix_ReplaceSuffix": string;
    readonly "SetValue_Value": CompositeMaterialInputLooseVariable_t;
    "StrGenerateTexture_TargetParam": string;
    "StrGenerateTexture_InitialContainer": string;
    "Resolution": number;
    "IsScratchTarget": boolean;
    "SplatDebugInfo": boolean;
    "CaptureInRenderDoc": boolean;
    readonly "TexGenInstructions": Object;
    readonly "ConditionalMutators": Object;
    "StrPopInputQueue_Container": string;
    "StrDrawText_InputContainerSrc": string;
    "StrDrawText_InputContainerProperty": string;
    "DrawText_Position": Vector2D;
    "ColDrawText_Color": Color;
    "StrDrawText_Font": string;
    readonly "Conditions": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompMatPropertyMutator_t(ptr_or_class: string|AnySDKClass): CompMatPropertyMutator_t;

declare interface CompositeMaterialAssemblyProcedure_t {
    readonly "MatchFilters": Object;
    readonly "CompositeInputContainers": Object;
    readonly "PropertyMutators": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialAssemblyProcedure_t(ptr_or_class: string|AnySDKClass): CompositeMaterialAssemblyProcedure_t;

declare interface CompositeMaterialEditorPoint_t {
    "SequenceIndex": number;
    "Cycle": number;
    "EnableChildModel": boolean;
    readonly "CompositeMaterialAssemblyProcedures": Object;
    readonly "CompositeMaterials": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialEditorPoint_t(ptr_or_class: string|AnySDKClass): CompositeMaterialEditorPoint_t;

declare interface CompositeMaterialInputContainer_t {
    "Enabled": boolean;
    "CompositeMaterialInputContainerSourceType": number;
    "StrAttrName": string;
    "StrAlias": string;
    readonly "LooseVariables": Object;
    "StrAttrNameForVar": string;
    "ExposeExternally": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialInputContainer_t(ptr_or_class: string|AnySDKClass): CompositeMaterialInputContainer_t;

declare interface CompositeMaterialInputLooseVariable_t {
    "StrName": string;
    "ExposeExternally": boolean;
    "StrExposedFriendlyName": string;
    "StrExposedFriendlyGroupName": string;
    "ExposedVariableIsFixedRange": boolean;
    "StrExposedVisibleWhenTrue": string;
    "StrExposedHiddenWhenTrue": string;
    "StrExposedValueList": string;
    "VariableType": number;
    "ValueBoolean": boolean;
    "ValueIntX": number;
    "ValueIntY": number;
    "ValueIntZ": number;
    "ValueIntW": number;
    "HasFloatBounds": boolean;
    "ValueFloatX": number;
    "ValueFloatX_Min": number;
    "ValueFloatX_Max": number;
    "ValueFloatY": number;
    "ValueFloatY_Min": number;
    "ValueFloatY_Max": number;
    "ValueFloatZ": number;
    "ValueFloatZ_Min": number;
    "ValueFloatZ_Max": number;
    "ValueFloatW": number;
    "ValueFloatW_Min": number;
    "ValueFloatW_Max": number;
    "CValueColor4": Color;
    "ValueSystemVar": number;
    "StrTextureContentAssetPath": string;
    "StrTextureCompilationVtexTemplate": string;
    "TextureType": number;
    "StrString": string;
    "StrPanoramaPanelPath": string;
    "PanoramaRenderRes": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialInputLooseVariable_t(ptr_or_class: string|AnySDKClass): CompositeMaterialInputLooseVariable_t;

declare interface CompositeMaterialMatchFilter_t {
    "CompositeMaterialMatchFilterType": number;
    "StrMatchFilter": string;
    "StrMatchValue": string;
    "PassWhenTrue": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialMatchFilter_t(ptr_or_class: string|AnySDKClass): CompositeMaterialMatchFilter_t;

declare interface CompositeMaterial_t {
    readonly "GeneratedTextures": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterial_t(ptr_or_class: string|AnySDKClass): CompositeMaterial_t;

declare interface CountdownTimer {
    "Duration": number;
    "Timestamp": number;
    "Timescale": number;
    "WorldGroupId": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CountdownTimer(ptr_or_class: string|AnySDKClass): CountdownTimer;

declare interface EngineCountdownTimer {
    "Duration": number;
    "Timestamp": number;
    "Timescale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EngineCountdownTimer(ptr_or_class: string|AnySDKClass): EngineCountdownTimer;

declare interface EngineLoopState_t {
    "PlatWindowWidth": number;
    "PlatWindowHeight": number;
    "RenderWidth": number;
    "RenderHeight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EngineLoopState_t(ptr_or_class: string|AnySDKClass): EngineLoopState_t;

declare interface EntityRenderAttribute_t {
    "ID": number;
    "Values": Vector4D;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntityRenderAttribute_t(ptr_or_class: string|AnySDKClass): EntityRenderAttribute_t;

declare interface EntitySpottedState_t {
    "Spotted": boolean;
    "SpottedByMask": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntitySpottedState_t(ptr_or_class: string|AnySDKClass): EntitySpottedState_t;

declare interface EventAdvanceTick_t {
    "CurrentTick": number;
    "CurrentTickThisFrame": number;
    "TotalTicksThisFrame": number;
    "TotalTicks": number;
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventAdvanceTick_t;

declare interface EventAppShutdown_t {
    "Dummy0": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventAppShutdown_t(ptr_or_class: string|AnySDKClass): EventAppShutdown_t;

declare interface EventClientAdvanceNonRenderedFrame_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientAdvanceNonRenderedFrame_t(ptr_or_class: string|AnySDKClass): EventClientAdvanceNonRenderedFrame_t;

declare interface EventClientAdvanceTick_t {
    readonly "Parent": EventAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventClientAdvanceTick_t;

declare interface EventClientFrameSimulate_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "FrameTime": number;
    "ScheduleSendTickPacket": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientFrameSimulate_t(ptr_or_class: string|AnySDKClass): EventClientFrameSimulate_t;

declare interface EventClientOutput_t {
    readonly "LoopState": EngineLoopState_t;
    "RenderTime": number;
    "RealTime": number;
    "RenderFrameTimeUnbounded": number;
    "RenderOnly": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientOutput_t(ptr_or_class: string|AnySDKClass): EventClientOutput_t;

declare interface EventClientPauseSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPauseSimulate_t(ptr_or_class: string|AnySDKClass): EventClientPauseSimulate_t;

declare interface EventClientPollInput_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPollInput_t(ptr_or_class: string|AnySDKClass): EventClientPollInput_t;

declare interface EventClientPollNetworking_t {
    "TickCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPollNetworking_t(ptr_or_class: string|AnySDKClass): EventClientPollNetworking_t;

declare interface EventClientPostAdvanceTick_t {
    readonly "Parent": EventPostAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPostAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventClientPostAdvanceTick_t;

declare interface EventClientPostOutput_t {
    readonly "LoopState": EngineLoopState_t;
    "RenderTime": number;
    "RenderFrameTime": number;
    "RenderFrameTimeUnbounded": number;
    "RenderOnly": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPostOutput_t(ptr_or_class: string|AnySDKClass): EventClientPostOutput_t;

declare interface EventClientPostSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPostSimulate_t(ptr_or_class: string|AnySDKClass): EventClientPostSimulate_t;

declare interface EventClientPreOutput_t {
    readonly "LoopState": EngineLoopState_t;
    "RenderTime": number;
    "RenderFrameTime": number;
    "RenderFrameTimeUnbounded": number;
    "RealTime": number;
    "RenderOnly": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPreOutput_t(ptr_or_class: string|AnySDKClass): EventClientPreOutput_t;

declare interface EventClientPreSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPreSimulate_t(ptr_or_class: string|AnySDKClass): EventClientPreSimulate_t;

declare interface EventClientProcessGameInput_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "FrameTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientProcessGameInput_t(ptr_or_class: string|AnySDKClass): EventClientProcessGameInput_t;

declare interface EventClientProcessInput_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "TickInterval": number;
    "TickStartTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientProcessInput_t(ptr_or_class: string|AnySDKClass): EventClientProcessInput_t;

declare interface EventClientProcessNetworking_t {
    "TickCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientProcessNetworking_t(ptr_or_class: string|AnySDKClass): EventClientProcessNetworking_t;

declare interface EventClientSceneSystemThreadStateChange_t {
    "ThreadsActive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientSceneSystemThreadStateChange_t(ptr_or_class: string|AnySDKClass): EventClientSceneSystemThreadStateChange_t;

declare interface EventClientSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientSimulate_t(ptr_or_class: string|AnySDKClass): EventClientSimulate_t;

declare interface EventFrameBoundary_t {
    "FrameTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventFrameBoundary_t(ptr_or_class: string|AnySDKClass): EventFrameBoundary_t;

declare interface EventModInitialized_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventModInitialized_t(ptr_or_class: string|AnySDKClass): EventModInitialized_t;

declare interface EventPostAdvanceTick_t {
    "CurrentTick": number;
    "CurrentTickThisFrame": number;
    "TotalTicksThisFrame": number;
    "TotalTicks": number;
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventPostAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventPostAdvanceTick_t;

declare interface EventPostDataUpdate_t {
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventPostDataUpdate_t(ptr_or_class: string|AnySDKClass): EventPostDataUpdate_t;

declare interface EventPreDataUpdate_t {
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventPreDataUpdate_t(ptr_or_class: string|AnySDKClass): EventPreDataUpdate_t;

declare interface EventProfileStorageAvailable_t {
    "SplitScreenSlot": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventProfileStorageAvailable_t(ptr_or_class: string|AnySDKClass): EventProfileStorageAvailable_t;

declare interface EventServerAdvanceTick_t {
    readonly "Parent": EventAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventServerAdvanceTick_t;

declare interface EventServerBeginAsyncPostTickWork_t {
    readonly "Parent": EventPostAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerBeginAsyncPostTickWork_t(ptr_or_class: string|AnySDKClass): EventServerBeginAsyncPostTickWork_t;

declare interface EventServerEndAsyncPostTickWork_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerEndAsyncPostTickWork_t(ptr_or_class: string|AnySDKClass): EventServerEndAsyncPostTickWork_t;

declare interface EventServerPollNetworking_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerPollNetworking_t(ptr_or_class: string|AnySDKClass): EventServerPollNetworking_t;

declare interface EventServerPostAdvanceTick_t {
    readonly "Parent": EventPostAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerPostAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventServerPostAdvanceTick_t;

declare interface EventServerPostSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerPostSimulate_t(ptr_or_class: string|AnySDKClass): EventServerPostSimulate_t;

declare interface EventServerProcessNetworking_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerProcessNetworking_t(ptr_or_class: string|AnySDKClass): EventServerProcessNetworking_t;

declare interface EventServerSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerSimulate_t(ptr_or_class: string|AnySDKClass): EventServerSimulate_t;

declare interface EventSetTime_t {
    readonly "LoopState": EngineLoopState_t;
    "ClientOutputFrames": number;
    "RealTime": number;
    "RenderTime": number;
    "RenderFrameTime": number;
    "RenderFrameTimeUnbounded": number;
    "RenderFrameTimeUnscaled": number;
    "TickRemainder": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventSetTime_t(ptr_or_class: string|AnySDKClass): EventSetTime_t;

declare interface EventSimpleLoopFrameUpdate_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "FrameTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventSimpleLoopFrameUpdate_t(ptr_or_class: string|AnySDKClass): EventSimpleLoopFrameUpdate_t;

declare interface EventSimulate_t {
    readonly "LoopState": EngineLoopState_t;
    "FirstTick": boolean;
    "LastTick": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventSimulate_t(ptr_or_class: string|AnySDKClass): EventSimulate_t;

declare interface EventSplitScreenStateChanged_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventSplitScreenStateChanged_t(ptr_or_class: string|AnySDKClass): EventSplitScreenStateChanged_t;

declare interface GameAmmoTypeInfo_t {
    "BuySize": number;
    "Cost": number;
    readonly "Parent": AmmoTypeInfo_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function GameAmmoTypeInfo_t(ptr_or_class: string|AnySDKClass): GameAmmoTypeInfo_t;

declare interface GeneratedTextureHandle_t {
    "StrBitmapName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function GeneratedTextureHandle_t(ptr_or_class: string|AnySDKClass): GeneratedTextureHandle_t;

declare interface HullFlags_t {
    "Hull_Human": boolean;
    "Hull_SmallCentered": boolean;
    "Hull_WideHuman": boolean;
    "Hull_Tiny": boolean;
    "Hull_Medium": boolean;
    "Hull_TinyCentered": boolean;
    "Hull_Large": boolean;
    "Hull_LargeCentered": boolean;
    "Hull_MediumTall": boolean;
    "Hull_Small": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function HullFlags_t(ptr_or_class: string|AnySDKClass): HullFlags_t;

declare interface IChoreoServices {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IChoreoServices(ptr_or_class: string|AnySDKClass): IChoreoServices;

declare interface IClientAlphaProperty {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IClientAlphaProperty(ptr_or_class: string|AnySDKClass): IClientAlphaProperty;

declare interface IEconItemInterface {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IEconItemInterface(ptr_or_class: string|AnySDKClass): IEconItemInterface;

declare interface IGapHost_GameEntity {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_GameEntity(ptr_or_class: string|AnySDKClass): IGapHost_GameEntity;

declare interface IHasAttributes {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IHasAttributes(ptr_or_class: string|AnySDKClass): IHasAttributes;

declare interface IRagdoll {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IRagdoll(ptr_or_class: string|AnySDKClass): IRagdoll;

declare interface ISkeletonAnimationController {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ISkeletonAnimationController(ptr_or_class: string|AnySDKClass): ISkeletonAnimationController;

declare interface IntervalTimer {
    "Timestamp": number;
    "WorldGroupId": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IntervalTimer(ptr_or_class: string|AnySDKClass): IntervalTimer;

declare interface ModelConfigHandle_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelConfigHandle_t(ptr_or_class: string|AnySDKClass): ModelConfigHandle_t;

declare interface ParticleIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleIndex_t(ptr_or_class: string|AnySDKClass): ParticleIndex_t;

declare interface PhysicsRagdollPose_t {
    readonly "Owner": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PhysicsRagdollPose_t(ptr_or_class: string|AnySDKClass): PhysicsRagdollPose_t;

declare interface PointCameraSettings_t {
    "NearBlurryDistance": number;
    "NearCrispDistance": number;
    "FarCrispDistance": number;
    "FarBlurryDistance": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PointCameraSettings_t(ptr_or_class: string|AnySDKClass): PointCameraSettings_t;

declare interface PredictedDamageTag_t {
    "TagTick": number;
    "FlinchModSmall": number;
    "FlinchModLarge": number;
    "FriendlyFireDamageReductionRatio": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PredictedDamageTag_t(ptr_or_class: string|AnySDKClass): PredictedDamageTag_t;

declare interface QuestProgress {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function QuestProgress(ptr_or_class: string|AnySDKClass): QuestProgress;

declare interface RagdollCreationParams_t {
    "Force": Vector;
    "ForceBone": number;
    "ForceCurrentWorldTransform": boolean;
    "HealthToGrant": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RagdollCreationParams_t(ptr_or_class: string|AnySDKClass): RagdollCreationParams_t;

declare interface ResponseFollowup {
    "Followup_concept": string;
    "Followup_contexts": string;
    "Followup_delay": number;
    "Followup_target": string;
    "Followup_entityiotarget": string;
    "Followup_entityioinput": string;
    "Followup_entityiodelay": number;
    "Fired": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ResponseFollowup(ptr_or_class: string|AnySDKClass): ResponseFollowup;

declare interface ResponseParams {
    "Odds": number;
    "Flags": number;
    readonly "Followup": ResponseFollowup;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ResponseParams(ptr_or_class: string|AnySDKClass): ResponseParams;

declare interface SceneEventId_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SceneEventId_t(ptr_or_class: string|AnySDKClass): SceneEventId_t;

declare interface SellbackPurchaseEntry_t {
    "DefIdx": number;
    "Cost": number;
    "PrevArmor": number;
    "PrevHelmet": boolean;
    readonly "Item": CEntityInstance;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SellbackPurchaseEntry_t(ptr_or_class: string|AnySDKClass): SellbackPurchaseEntry_t;

declare interface SequenceHistory_t {
    "Sequence": number;
    "SeqStartTime": number;
    "SeqFixedCycle": number;
    "SeqLoopMode": number;
    "PlaybackRate": number;
    "CyclesPerSecond": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SequenceHistory_t(ptr_or_class: string|AnySDKClass): SequenceHistory_t;

declare interface ServerAuthoritativeWeaponSlot_t {
    "Class": number;
    "Slot": number;
    "ItemDefIdx": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ServerAuthoritativeWeaponSlot_t(ptr_or_class: string|AnySDKClass): ServerAuthoritativeWeaponSlot_t;

declare interface SummaryTakeDamageInfo_t {
    "SummarisedCount": number;
    readonly "Info": CTakeDamageInfo;
    readonly "Result": CTakeDamageResult;
    readonly "Target": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SummaryTakeDamageInfo_t(ptr_or_class: string|AnySDKClass): SummaryTakeDamageInfo_t;

declare interface TimedEvent {
    "TimeBetweenEvents": number;
    "NextEvent": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TimedEvent(ptr_or_class: string|AnySDKClass): TimedEvent;

declare interface VPhysicsCollisionAttribute_t {
    "InteractsAs": number;
    "InteractsWith": number;
    "InteractsExclude": number;
    "EntityId": number;
    "OwnerId": number;
    "HierarchyId": number;
    "CollisionGroup": number;
    "CollisionFunctionMask": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysicsCollisionAttribute_t(ptr_or_class: string|AnySDKClass): VPhysicsCollisionAttribute_t;

declare interface ViewAngleServerChange_t {
    "Type": number;
    "Angle": QAngle;
    "Index": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ViewAngleServerChange_t(ptr_or_class: string|AnySDKClass): ViewAngleServerChange_t;

declare interface WaterWheelDrag_t {
    "FractionOfWheelSubmerged": number;
    "WheelDrag": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WaterWheelDrag_t(ptr_or_class: string|AnySDKClass): WaterWheelDrag_t;

declare interface WaterWheelFrictionScale_t {
    "FractionOfWheelSubmerged": number;
    "FrictionScale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WaterWheelFrictionScale_t(ptr_or_class: string|AnySDKClass): WaterWheelFrictionScale_t;

declare interface WeaponPurchaseCount_t {
    "ItemDefIndex": number;
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WeaponPurchaseCount_t(ptr_or_class: string|AnySDKClass): WeaponPurchaseCount_t;

declare interface WeaponPurchaseTracker_t {
    readonly "WeaponPurchases": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WeaponPurchaseTracker_t(ptr_or_class: string|AnySDKClass): WeaponPurchaseTracker_t;

declare interface WrappedPhysicsJoint_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WrappedPhysicsJoint_t(ptr_or_class: string|AnySDKClass): WrappedPhysicsJoint_t;

declare interface audioparams_t {
    "LocalSound": Object;
    "SoundscapeIndex": number;
    "LocalBits": number;
    "SoundscapeEntityListIndex": number;
    "SoundEventHash": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function audioparams_t(ptr_or_class: string|AnySDKClass): audioparams_t;

declare interface fogparams_t {
    "DirPrimary": Vector;
    "ColorPrimary": Color;
    "ColorSecondary": Color;
    "ColorPrimaryLerpTo": Color;
    "ColorSecondaryLerpTo": Color;
    "Start": number;
    "End": number;
    "Farz": number;
    "Maxdensity": number;
    "Exponent": number;
    "HDRColorScale": number;
    "SkyboxFogFactor": number;
    "SkyboxFogFactorLerpTo": number;
    "StartLerpTo": number;
    "EndLerpTo": number;
    "MaxdensityLerpTo": number;
    "Lerptime": number;
    "Duration": number;
    "Blendtobackground": number;
    "Scattering": number;
    "Locallightscale": number;
    "Enable": boolean;
    "Blend": boolean;
    "NoReflectionFog": boolean;
    "Padding": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function fogparams_t(ptr_or_class: string|AnySDKClass): fogparams_t;

declare interface hudtextparms_t {
    "Color1": Color;
    "Color2": Color;
    "Effect": number;
    "Channel": number;
    "X": number;
    "Y": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function hudtextparms_t(ptr_or_class: string|AnySDKClass): hudtextparms_t;

declare interface ragdoll_t {
    readonly "List": Object;
    readonly "BoneIndex": Object;
    "AllowStretch": boolean;
    "Unused": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ragdoll_t(ptr_or_class: string|AnySDKClass): ragdoll_t;

declare interface ragdollelement_t {
    "OriginParentSpace": Vector;
    "ParentIndex": number;
    "Radius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ragdollelement_t(ptr_or_class: string|AnySDKClass): ragdollelement_t;

declare interface shard_model_desc_t {
    "ModelID": number;
    "Solid": number;
    "PanelSize": Vector2D;
    "StressPositionA": Vector2D;
    "StressPositionB": Vector2D;
    readonly "PanelVertices": Object;
    readonly "InitialPanelVertices": Object;
    "GlassHalfThickness": number;
    "HasParent": boolean;
    "ParentFrozen": boolean;
    "SurfacePropStringToken": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function shard_model_desc_t(ptr_or_class: string|AnySDKClass): shard_model_desc_t;

declare interface sky3dparams_t {
    "Scale": number;
    "Origin": Vector;
    "Clip3DSkyBoxNearToWorldFar": boolean;
    "Clip3DSkyBoxNearToWorldFarOffset": number;
    readonly "Fog": fogparams_t;
    "WorldGroupID": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function sky3dparams_t(ptr_or_class: string|AnySDKClass): sky3dparams_t;

declare interface sndopvarlatchdata_t {
    "Stack": string;
    "Operator": string;
    "Opvar": string;
    "Val": number;
    "Pos": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function sndopvarlatchdata_t(ptr_or_class: string|AnySDKClass): sndopvarlatchdata_t;

declare interface thinkfunc_t {
    "Context": number;
    "NextThinkTick": number;
    "LastThinkTick": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function thinkfunc_t(ptr_or_class: string|AnySDKClass): thinkfunc_t;

declare interface CEmptyEntityInstance {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEmptyEntityInstance(ptr_or_class: string|AnySDKClass): CEmptyEntityInstance;

declare interface CEntityComponent {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityComponent(ptr_or_class: string|AnySDKClass): CEntityComponent;

declare interface CEntityComponentHelper {
    "Flags": number;
    readonly "Info": EntComponentInfo_t;
    "Priority": number;
    readonly "Next": CEntityComponentHelper;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityComponentHelper(ptr_or_class: string|AnySDKClass): CEntityComponentHelper;

declare interface CEntityIOOutput {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityIOOutput(ptr_or_class: string|AnySDKClass): CEntityIOOutput;

declare interface CEntityIdentity {
    "NameStringableIndex": number;
    "Name": string;
    "DesignerName": string;
    "Flags": number;
    "WorldGroupId": number;
    "DataObjectTypes": number;
    readonly "PathIndex": ChangeAccessorFieldPathIndex_t;
    readonly "Prev": CEntityIdentity;
    readonly "Next": CEntityIdentity;
    readonly "PrevByClass": CEntityIdentity;
    readonly "NextByClass": CEntityIdentity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityIdentity(ptr_or_class: string|AnySDKClass): CEntityIdentity;

declare interface CEntityInstance {
    "PrivateVScripts": string;
    readonly "Entity": CEntityIdentity;
    readonly "CScriptComponent": CScriptComponent;
    "VisibleinPVS": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityInstance(ptr_or_class: string|AnySDKClass): CEntityInstance;

declare interface CNetworkVarChainer {
    readonly "PathIndex": ChangeAccessorFieldPathIndex_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkVarChainer(ptr_or_class: string|AnySDKClass): CNetworkVarChainer;

declare interface CScriptComponent {
    "ScriptClassName": string;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptComponent(ptr_or_class: string|AnySDKClass): CScriptComponent;

declare interface CVariantDefaultAllocator {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVariantDefaultAllocator(ptr_or_class: string|AnySDKClass): CVariantDefaultAllocator;

declare interface EntComponentInfo_t {
    "Name": string;
    "CPPClassname": string;
    "NetworkDataReferencedDescription": string;
    "NetworkDataReferencedPtrPropDescription": string;
    "RuntimeIndex": number;
    "Flags": number;
    readonly "BaseClassComponentHelper": CEntityComponentHelper;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntComponentInfo_t(ptr_or_class: string|AnySDKClass): EntComponentInfo_t;

declare interface EntInput_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntInput_t(ptr_or_class: string|AnySDKClass): EntInput_t;

declare interface EntOutput_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntOutput_t(ptr_or_class: string|AnySDKClass): EntOutput_t;

declare interface CAnimScriptBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimScriptBase(ptr_or_class: string|AnySDKClass): CAnimScriptBase;

declare interface MaterialParamBuffer_t {
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamBuffer_t(ptr_or_class: string|AnySDKClass): MaterialParamBuffer_t;

declare interface MaterialParamFloat_t {
    "Value": number;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamFloat_t(ptr_or_class: string|AnySDKClass): MaterialParamFloat_t;

declare interface MaterialParamInt_t {
    "Value": number;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamInt_t(ptr_or_class: string|AnySDKClass): MaterialParamInt_t;

declare interface MaterialParamString_t {
    "Value": string;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamString_t(ptr_or_class: string|AnySDKClass): MaterialParamString_t;

declare interface MaterialParamTexture_t {
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamTexture_t(ptr_or_class: string|AnySDKClass): MaterialParamTexture_t;

declare interface MaterialParamVector_t {
    "Value": Vector4D;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamVector_t(ptr_or_class: string|AnySDKClass): MaterialParamVector_t;

declare interface MaterialParam_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParam_t(ptr_or_class: string|AnySDKClass): MaterialParam_t;

declare interface MaterialResourceData_t {
    "MaterialName": string;
    "ShaderName": string;
    readonly "IntParams": Object;
    readonly "FloatParams": Object;
    readonly "VectorParams": Object;
    readonly "TextureParams": Object;
    readonly "DynamicParams": Object;
    readonly "DynamicTextureParams": Object;
    readonly "IntAttributes": Object;
    readonly "FloatAttributes": Object;
    readonly "VectorAttributes": Object;
    readonly "TextureAttributes": Object;
    readonly "StringAttributes": Object;
    readonly "RenderAttributesUsed": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialResourceData_t(ptr_or_class: string|AnySDKClass): MaterialResourceData_t;

declare interface PostProcessingBloomParameters_t {
    "BlendMode": number;
    "BloomStrength": number;
    "ScreenBloomStrength": number;
    "BlurBloomStrength": number;
    "BloomThreshold": number;
    "BloomThresholdWidth": number;
    "SkyboxBloomStrength": number;
    "BloomStartValue": number;
    "BlurWeight": Object;
    "BlurTint": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PostProcessingBloomParameters_t(ptr_or_class: string|AnySDKClass): PostProcessingBloomParameters_t;

declare interface PostProcessingLocalContrastParameters_t {
    "LocalContrastStrength": number;
    "LocalContrastEdgeStrength": number;
    "LocalContrastVignetteStart": number;
    "LocalContrastVignetteEnd": number;
    "LocalContrastVignetteBlur": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PostProcessingLocalContrastParameters_t(ptr_or_class: string|AnySDKClass): PostProcessingLocalContrastParameters_t;

declare interface PostProcessingResource_t {
    "HasTonemapParams": boolean;
    readonly "ToneMapParams": PostProcessingTonemapParameters_t;
    "HasBloomParams": boolean;
    readonly "BloomParams": PostProcessingBloomParameters_t;
    "HasVignetteParams": boolean;
    readonly "VignetteParams": PostProcessingVignetteParameters_t;
    "HasLocalContrastParams": boolean;
    readonly "LocalConstrastParams": PostProcessingLocalContrastParameters_t;
    "ColorCorrectionVolumeDim": number;
    "HasColorCorrection": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PostProcessingResource_t(ptr_or_class: string|AnySDKClass): PostProcessingResource_t;

declare interface PostProcessingTonemapParameters_t {
    "ExposureBias": number;
    "ShoulderStrength": number;
    "LinearStrength": number;
    "LinearAngle": number;
    "ToeStrength": number;
    "ToeNum": number;
    "ToeDenom": number;
    "WhitePoint": number;
    "LuminanceSource": number;
    "ExposureBiasShadows": number;
    "ExposureBiasHighlights": number;
    "MinShadowLum": number;
    "MaxShadowLum": number;
    "MinHighlightLum": number;
    "MaxHighlightLum": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PostProcessingTonemapParameters_t(ptr_or_class: string|AnySDKClass): PostProcessingTonemapParameters_t;

declare interface PostProcessingVignetteParameters_t {
    "VignetteStrength": number;
    "Center": Vector2D;
    "Radius": number;
    "Roundness": number;
    "Feather": number;
    "ColorTint": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PostProcessingVignetteParameters_t(ptr_or_class: string|AnySDKClass): PostProcessingVignetteParameters_t;

declare interface AABB_t {
    "MinBounds": Vector;
    "MaxBounds": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AABB_t(ptr_or_class: string|AnySDKClass): AABB_t;

declare interface CFuseProgram {
    readonly "ProgramBuffer": Object;
    readonly "VariablesRead": Object;
    readonly "VariablesWritten": Object;
    "MaxTempVarsUsed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuseProgram(ptr_or_class: string|AnySDKClass): CFuseProgram;

declare interface CFuseSymbolTable {
    readonly "Constants": Object;
    readonly "Variables": Object;
    readonly "Functions": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuseSymbolTable(ptr_or_class: string|AnySDKClass): CFuseSymbolTable;

declare interface ConstantInfo_t {
    "Name": string;
    "NameToken": number;
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ConstantInfo_t(ptr_or_class: string|AnySDKClass): ConstantInfo_t;

declare interface FunctionInfo_t {
    "Name": string;
    "NameToken": number;
    "ParamCount": number;
    readonly "Index": FuseFunctionIndex_t;
    "IsPure": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FunctionInfo_t(ptr_or_class: string|AnySDKClass): FunctionInfo_t;

declare interface FuseFunctionIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FuseFunctionIndex_t(ptr_or_class: string|AnySDKClass): FuseFunctionIndex_t;

declare interface FuseVariableIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FuseVariableIndex_t(ptr_or_class: string|AnySDKClass): FuseVariableIndex_t;

declare interface VariableInfo_t {
    "Name": string;
    "NameToken": number;
    readonly "Index": FuseVariableIndex_t;
    "NumComponents": number;
    "VarType": number;
    "Access": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VariableInfo_t(ptr_or_class: string|AnySDKClass): VariableInfo_t;

declare interface AnimComponentID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimComponentID(ptr_or_class: string|AnySDKClass): AnimComponentID;

declare interface AnimNodeID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimNodeID(ptr_or_class: string|AnySDKClass): AnimNodeID;

declare interface AnimNodeOutputID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimNodeOutputID(ptr_or_class: string|AnySDKClass): AnimNodeOutputID;

declare interface AnimParamID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimParamID(ptr_or_class: string|AnySDKClass): AnimParamID;

declare interface AnimScriptHandle {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimScriptHandle(ptr_or_class: string|AnySDKClass): AnimScriptHandle;

declare interface AnimStateID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimStateID(ptr_or_class: string|AnySDKClass): AnimStateID;

declare interface AnimTagID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimTagID(ptr_or_class: string|AnySDKClass): AnimTagID;

declare interface CAimConstraint {
    "UpType": number;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAimConstraint(ptr_or_class: string|AnySDKClass): CAimConstraint;

declare interface CAnimAttachment {
    "InfluenceOffsets": Object;
    "InfluenceIndices": Object;
    "InfluenceWeights": Object;
    "NumInfluences": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimAttachment(ptr_or_class: string|AnySDKClass): CAnimAttachment;

declare interface CAnimCycle {
    readonly "Parent": CCycleBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimCycle(ptr_or_class: string|AnySDKClass): CAnimCycle;

declare interface CAnimFoot {
    "Name": string;
    "BallOffset": Vector;
    "HeelOffset": Vector;
    "AnkleBoneIndex": number;
    "ToeBoneIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimFoot(ptr_or_class: string|AnySDKClass): CAnimFoot;

declare interface CAnimSkeleton {
    readonly "BoneNames": Object;
    readonly "Parents": Object;
    readonly "Feet": Object;
    readonly "MorphNames": Object;
    readonly "LodBoneCounts": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimSkeleton(ptr_or_class: string|AnySDKClass): CAnimSkeleton;

declare interface CAttachment {
    "Name": string;
    "InfluenceNames": Object;
    "InfluenceOffsets": Object;
    "InfluenceWeights": Object;
    "InfluenceRootTransform": Object;
    "Influences": number;
    "IgnoreRotation": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAttachment(ptr_or_class: string|AnySDKClass): CAttachment;

declare interface CBaseConstraint {
    "Name": string;
    "UpVector": Vector;
    readonly "Targets": Object;
    readonly "Parent": CBoneConstraintBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseConstraint(ptr_or_class: string|AnySDKClass): CBaseConstraint;

declare interface CBoneConstraintBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintBase(ptr_or_class: string|AnySDKClass): CBoneConstraintBase;

declare interface CBoneConstraintDotToMorph {
    "BoneName": string;
    "TargetBoneName": string;
    "MorphChannelName": string;
    "Remap": Object;
    readonly "Parent": CBoneConstraintBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintDotToMorph(ptr_or_class: string|AnySDKClass): CBoneConstraintDotToMorph;

declare interface CBoneConstraintPoseSpaceBone {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintPoseSpaceBone(ptr_or_class: string|AnySDKClass): CBoneConstraintPoseSpaceBone;

declare interface CBoneConstraintPoseSpaceMorph {
    "BoneName": string;
    "AttachmentName": string;
    readonly "OutputMorph": Object;
    "Clamp": boolean;
    readonly "Parent": CBoneConstraintBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintPoseSpaceMorph(ptr_or_class: string|AnySDKClass): CBoneConstraintPoseSpaceMorph;

declare interface CConstraintSlave {
    "BasePosition": Vector;
    "BoneHash": number;
    "Weight": number;
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstraintSlave(ptr_or_class: string|AnySDKClass): CConstraintSlave;

declare interface CConstraintTarget {
    "Offset": Vector;
    "BoneHash": number;
    "Name": string;
    "Weight": number;
    "IsAttachment": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstraintTarget(ptr_or_class: string|AnySDKClass): CConstraintTarget;

declare interface CCycleBase {
    "Cycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCycleBase(ptr_or_class: string|AnySDKClass): CCycleBase;

declare interface CDrawCullingData {
    "ConeApex": Vector;
    "ConeAxis": Object;
    "ConeCutoff": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDrawCullingData(ptr_or_class: string|AnySDKClass): CDrawCullingData;

declare interface CFlexController {
    "Name": string;
    "Type": string;
    "Min": number;
    "Max": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexController(ptr_or_class: string|AnySDKClass): CFlexController;

declare interface CFlexDesc {
    "Facs": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexDesc(ptr_or_class: string|AnySDKClass): CFlexDesc;

declare interface CFlexOp {
    "OpCode": number;
    "Data": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexOp(ptr_or_class: string|AnySDKClass): CFlexOp;

declare interface CFlexRule {
    "Flex": number;
    readonly "FlexOps": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexRule(ptr_or_class: string|AnySDKClass): CFlexRule;

declare interface CFootCycle {
    readonly "Parent": CCycleBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootCycle(ptr_or_class: string|AnySDKClass): CFootCycle;

declare interface CFootCycleDefinition {
    "StancePositionMS": Vector;
    "MidpointPositionMS": Vector;
    "StanceDirectionMS": number;
    "ToStrideStartPos": Vector;
    readonly "StanceCycle": CAnimCycle;
    readonly "FootLiftCycle": CFootCycle;
    readonly "FootOffCycle": CFootCycle;
    readonly "FootStrikeCycle": CFootCycle;
    readonly "FootLandCycle": CFootCycle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootCycleDefinition(ptr_or_class: string|AnySDKClass): CFootCycleDefinition;

declare interface CFootDefinition {
    "Name": string;
    "AnkleBoneName": string;
    "ToeBoneName": string;
    "BallOffset": Vector;
    "HeelOffset": Vector;
    "FootLength": number;
    "BindPoseDirectionMS": number;
    "TraceHeight": number;
    "TraceRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootDefinition(ptr_or_class: string|AnySDKClass): CFootDefinition;

declare interface CFootMotion {
    readonly "Strides": Object;
    "Name": string;
    "Additive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootMotion(ptr_or_class: string|AnySDKClass): CFootMotion;

declare interface CFootStride {
    readonly "Definition": CFootCycleDefinition;
    readonly "Trajectories": CFootTrajectories;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootStride(ptr_or_class: string|AnySDKClass): CFootStride;

declare interface CFootTrajectories {
    readonly "Trajectories": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootTrajectories(ptr_or_class: string|AnySDKClass): CFootTrajectories;

declare interface CFootTrajectory {
    "Offset": Vector;
    "RotationOffset": number;
    "Progression": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootTrajectory(ptr_or_class: string|AnySDKClass): CFootTrajectory;

declare interface CHitBox {
    "Name": string;
    "SurfaceProperty": string;
    "BoneName": string;
    "MinBounds": Vector;
    "MaxBounds": Vector;
    "ShapeRadius": number;
    "BoneNameHash": number;
    "GroupId": number;
    "ShapeType": number;
    "TranslationOnly": boolean;
    "CRC": number;
    "CRenderColor": Color;
    "HitBoxIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitBox(ptr_or_class: string|AnySDKClass): CHitBox;

declare interface CHitBoxSet {
    "Name": string;
    "NameHash": number;
    readonly "HitBoxes": Object;
    "SourceFilename": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitBoxSet(ptr_or_class: string|AnySDKClass): CHitBoxSet;

declare interface CHitBoxSetList {
    readonly "HitBoxSets": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitBoxSetList(ptr_or_class: string|AnySDKClass): CHitBoxSetList;

declare interface CMaterialDrawDescriptor {
    "UvDensity": number;
    "TintColor": Vector;
    "Alpha": number;
    "NumMeshlets": number;
    "FirstMeshlet": number;
    "PrimitiveType": number;
    "BaseVertex": number;
    "VertexCount": number;
    "StartIndex": number;
    "IndexCount": number;
    readonly "IndexBuffer": CRenderBufferBinding;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMaterialDrawDescriptor(ptr_or_class: string|AnySDKClass): CMaterialDrawDescriptor;

declare interface CMeshletDescriptor {
    readonly "CullingData": CDrawCullingData;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMeshletDescriptor(ptr_or_class: string|AnySDKClass): CMeshletDescriptor;

declare interface CModelConfig {
    "ConfigName": string;
    readonly "Elements": Object;
    "TopLevel": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfig(ptr_or_class: string|AnySDKClass): CModelConfig;

declare interface CModelConfigElement {
    "ElementName": string;
    readonly "NestedElements": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement(ptr_or_class: string|AnySDKClass): CModelConfigElement;

declare interface CModelConfigElement_AttachedModel {
    "InstanceName": string;
    "EntityClass": string;
    "Offset": Vector;
    "AngOffset": QAngle;
    "AttachmentName": string;
    "LocalAttachmentOffsetName": string;
    "AttachmentType": number;
    "BoneMergeFlex": boolean;
    "UserSpecifiedColor": boolean;
    "UserSpecifiedMaterialGroup": boolean;
    "AcceptParentMaterialDrivenDecals": boolean;
    "BodygroupOnOtherModels": string;
    "MaterialGroupOnOtherModels": string;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_AttachedModel(ptr_or_class: string|AnySDKClass): CModelConfigElement_AttachedModel;

declare interface CModelConfigElement_Command {
    "Command": string;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_Command(ptr_or_class: string|AnySDKClass): CModelConfigElement_Command;

declare interface CModelConfigElement_RandomColor {
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_RandomColor(ptr_or_class: string|AnySDKClass): CModelConfigElement_RandomColor;

declare interface CModelConfigElement_RandomPick {
    readonly "Choices": Object;
    readonly "ChoiceWeights": Object;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_RandomPick(ptr_or_class: string|AnySDKClass): CModelConfigElement_RandomPick;

declare interface CModelConfigElement_SetBodygroup {
    "GroupName": string;
    "Choice": number;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetBodygroup(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetBodygroup;

declare interface CModelConfigElement_SetBodygroupOnAttachedModels {
    "GroupName": string;
    "Choice": number;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetBodygroupOnAttachedModels(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetBodygroupOnAttachedModels;

declare interface CModelConfigElement_SetMaterialGroup {
    "MaterialGroupName": string;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetMaterialGroup(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetMaterialGroup;

declare interface CModelConfigElement_SetMaterialGroupOnAttachedModels {
    "MaterialGroupName": string;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetMaterialGroupOnAttachedModels(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetMaterialGroupOnAttachedModels;

declare interface CModelConfigElement_SetRenderColor {
    "Color": Color;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetRenderColor(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetRenderColor;

declare interface CModelConfigElement_UserPick {
    readonly "Choices": Object;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_UserPick(ptr_or_class: string|AnySDKClass): CModelConfigElement_UserPick;

declare interface CModelConfigList {
    "HideMaterialGroupInTools": boolean;
    "HideRenderColorInTools": boolean;
    readonly "Configs": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigList(ptr_or_class: string|AnySDKClass): CModelConfigList;

declare interface CMorphBundleData {
    "ULeftSrc": number;
    "VTopSrc": number;
    readonly "Offsets": Object;
    readonly "Ranges": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphBundleData(ptr_or_class: string|AnySDKClass): CMorphBundleData;

declare interface CMorphConstraint {
    "TargetMorph": string;
    "SlaveChannel": number;
    "Min": number;
    "Max": number;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphConstraint(ptr_or_class: string|AnySDKClass): CMorphConstraint;

declare interface CMorphData {
    "Name": string;
    readonly "MorphRectDatas": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphData(ptr_or_class: string|AnySDKClass): CMorphData;

declare interface CMorphRectData {
    "XLeftDst": number;
    "YTopDst": number;
    "UWidthSrc": number;
    "VHeightSrc": number;
    readonly "BundleDatas": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphRectData(ptr_or_class: string|AnySDKClass): CMorphRectData;

declare interface CMorphSetData {
    "Width": number;
    "Height": number;
    readonly "BundleTypes": Object;
    readonly "MorphDatas": Object;
    readonly "FlexDesc": Object;
    readonly "FlexControllers": Object;
    readonly "FlexRules": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphSetData(ptr_or_class: string|AnySDKClass): CMorphSetData;

declare interface COrientConstraint {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COrientConstraint(ptr_or_class: string|AnySDKClass): COrientConstraint;

declare interface CParentConstraint {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParentConstraint(ptr_or_class: string|AnySDKClass): CParentConstraint;

declare interface CPhysSurfaceProperties {
    "Name": string;
    "NameHash": number;
    "BaseNameHash": number;
    "Hidden": boolean;
    "Description": string;
    readonly "Physics": CPhysSurfacePropertiesPhysics;
    readonly "AudioSounds": CPhysSurfacePropertiesSoundNames;
    readonly "AudioParams": CPhysSurfacePropertiesAudio;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysSurfaceProperties(ptr_or_class: string|AnySDKClass): CPhysSurfaceProperties;

declare interface CPhysSurfacePropertiesAudio {
    "Reflectivity": number;
    "HardnessFactor": number;
    "RoughnessFactor": number;
    "RoughThreshold": number;
    "HardThreshold": number;
    "HardVelocityThreshold": number;
    "StaticImpactVolume": number;
    "OcclusionFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysSurfacePropertiesAudio(ptr_or_class: string|AnySDKClass): CPhysSurfacePropertiesAudio;

declare interface CPhysSurfacePropertiesPhysics {
    "Friction": number;
    "Elasticity": number;
    "Density": number;
    "Thickness": number;
    "SoftContactFrequency": number;
    "SoftContactDampingRatio": number;
    "WheelDrag": number;
    "HeatConductivity": number;
    "Flashpoint": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysSurfacePropertiesPhysics(ptr_or_class: string|AnySDKClass): CPhysSurfacePropertiesPhysics;

declare interface CPhysSurfacePropertiesSoundNames {
    "ImpactSoft": string;
    "ImpactHard": string;
    "ScrapeSmooth": string;
    "ScrapeRough": string;
    "BulletImpact": string;
    "Rolling": string;
    "Break": string;
    "Strain": string;
    "MeleeImpact": string;
    "PushOff": string;
    "SkidStop": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysSurfacePropertiesSoundNames(ptr_or_class: string|AnySDKClass): CPhysSurfacePropertiesSoundNames;

declare interface CPointConstraint {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointConstraint(ptr_or_class: string|AnySDKClass): CPointConstraint;

declare interface CRenderBufferBinding {
    "Buffer": number;
    "BindOffsetBytes": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderBufferBinding(ptr_or_class: string|AnySDKClass): CRenderBufferBinding;

declare interface CRenderGroom {
    readonly "Hairs": Object;
    readonly "HairPositionOffsets": Object;
    "SegmentsPerHairStrand": number;
    "GuideHairCount": number;
    "HairCount": number;
    "GroomGroupID": number;
    "AttachBoneIdx": number;
    "AttachMeshIdx": number;
    "AttachMeshDrawCallIdx": number;
    "EnableSimulation": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderGroom(ptr_or_class: string|AnySDKClass): CRenderGroom;

declare interface CRenderMesh {
    readonly "Skeleton": CRenderSkeleton;
    readonly "MeshDeformParams": DynamicMeshDeformParams_t;
    readonly "GroomData": CRenderGroom;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderMesh(ptr_or_class: string|AnySDKClass): CRenderMesh;

declare interface CRenderSkeleton {
    readonly "Bones": Object;
    readonly "BoneParents": Object;
    "BoneWeightCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderSkeleton(ptr_or_class: string|AnySDKClass): CRenderSkeleton;

declare interface CSceneObjectData {
    "MinBounds": Vector;
    "MaxBounds": Vector;
    "TintColor": Vector4D;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneObjectData(ptr_or_class: string|AnySDKClass): CSceneObjectData;

declare interface CTiltTwistConstraint {
    "TargetAxis": number;
    "SlaveAxis": number;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTiltTwistConstraint(ptr_or_class: string|AnySDKClass): CTiltTwistConstraint;

declare interface CTwistConstraint {
    "Inverse": boolean;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTwistConstraint(ptr_or_class: string|AnySDKClass): CTwistConstraint;

declare interface CVPhysXSurfacePropertiesList {
    readonly "SurfacePropertiesList": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVPhysXSurfacePropertiesList(ptr_or_class: string|AnySDKClass): CVPhysXSurfacePropertiesList;

declare interface DynamicMeshDeformParams_t {
    "TensionCompressScale": number;
    "TensionStretchScale": number;
    "RecomputeSmoothNormalsAfterAnimation": boolean;
    "ComputeDynamicMeshTensionAfterAnimation": boolean;
    "SmoothNormalsAcrossUvSeams": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function DynamicMeshDeformParams_t(ptr_or_class: string|AnySDKClass): DynamicMeshDeformParams_t;

declare interface MaterialGroup_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialGroup_t(ptr_or_class: string|AnySDKClass): MaterialGroup_t;

declare interface ModelBoneFlexDriverControl_t {
    "BoneComponent": number;
    "FlexController": string;
    "FlexControllerToken": number;
    "Min": number;
    "Max": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelBoneFlexDriverControl_t(ptr_or_class: string|AnySDKClass): ModelBoneFlexDriverControl_t;

declare interface ModelBoneFlexDriver_t {
    "BoneName": string;
    "BoneNameToken": number;
    readonly "Controls": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelBoneFlexDriver_t(ptr_or_class: string|AnySDKClass): ModelBoneFlexDriver_t;

declare interface ModelSkeletonData_t {
    readonly "BoneName": Object;
    readonly "Parent": Object;
    readonly "BoneSphere": Object;
    readonly "Flag": Object;
    readonly "BonePosParent": Object;
    readonly "BoneScaleParent": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelSkeletonData_t(ptr_or_class: string|AnySDKClass): ModelSkeletonData_t;

declare interface PermModelDataAnimatedMaterialAttribute_t {
    "AttributeName": string;
    "NumChannels": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermModelDataAnimatedMaterialAttribute_t(ptr_or_class: string|AnySDKClass): PermModelDataAnimatedMaterialAttribute_t;

declare interface PermModelData_t {
    "Name": string;
    readonly "ModelInfo": PermModelInfo_t;
    readonly "ExtParts": Object;
    readonly "RefMeshGroupMasks": Object;
    readonly "RefPhysGroupMasks": Object;
    readonly "RefLODGroupMasks": Object;
    readonly "LodGroupSwitchDistances": Object;
    readonly "MeshGroups": Object;
    readonly "MaterialGroups": Object;
    "DefaultMeshGroupMask": number;
    readonly "ModelSkeleton": ModelSkeletonData_t;
    readonly "RemappingTable": Object;
    readonly "RemappingTableStarts": Object;
    readonly "BoneFlexDrivers": Object;
    readonly "ModelConfigList": CModelConfigList;
    readonly "BodyGroupsHiddenInTools": Object;
    readonly "AnimatedMaterialAttributes": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermModelData_t(ptr_or_class: string|AnySDKClass): PermModelData_t;

declare interface PermModelExtPart_t {
    "Name": string;
    "Parent": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermModelExtPart_t(ptr_or_class: string|AnySDKClass): PermModelExtPart_t;

declare interface PermModelInfo_t {
    "Flags": number;
    "HullMin": Vector;
    "HullMax": Vector;
    "ViewMin": Vector;
    "ViewMax": Vector;
    "Mass": number;
    "EyePosition": Vector;
    "MaxEyeDeflection": number;
    "SurfaceProperty": string;
    "KeyValueText": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermModelInfo_t(ptr_or_class: string|AnySDKClass): PermModelInfo_t;

declare interface PhysSoftbodyDesc_t {
    readonly "ParticleBoneHash": Object;
    readonly "Particles": Object;
    readonly "Springs": Object;
    readonly "Capsules": Object;
    readonly "ParticleBoneName": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PhysSoftbodyDesc_t(ptr_or_class: string|AnySDKClass): PhysSoftbodyDesc_t;

declare interface RenderHairStrandInfo_t {
    "GuideHairIndices_nSurfaceTriIndex": Object;
    "GuideBary_vBaseBary": Object;
    "RootOffset_flLengthScale": Object;
    "PackedBaseUv": Object;
    "PackedSurfaceNormalOs": number;
    "PackedSurfaceTangentOs": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RenderHairStrandInfo_t(ptr_or_class: string|AnySDKClass): RenderHairStrandInfo_t;

declare interface RenderSkeletonBone_t {
    "BoneName": string;
    "ParentName": string;
    readonly "Bbox": SkeletonBoneBounds_t;
    "SphereRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RenderSkeletonBone_t(ptr_or_class: string|AnySDKClass): RenderSkeletonBone_t;

declare interface SkeletonAnimCapture_t {
    "EntIndex": number;
    "EntParent": number;
    readonly "ImportedCollision": Object;
    "ModelName": string;
    "CaptureName": string;
    "FlexControllers": number;
    "Predicted": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SkeletonAnimCapture_t(ptr_or_class: string|AnySDKClass): SkeletonAnimCapture_t;

declare interface SkeletonBoneBounds_t {
    "Center": Vector;
    "Size": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SkeletonBoneBounds_t(ptr_or_class: string|AnySDKClass): SkeletonBoneBounds_t;

declare interface SkeletonDemoDb_t {
    readonly "AnimCaptures": Object;
    "RecordingTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SkeletonDemoDb_t(ptr_or_class: string|AnySDKClass): SkeletonDemoDb_t;

declare interface VPhysXAggregateData_t {
    "Flags": number;
    "RefCounter": number;
    readonly "BonesHash": Object;
    readonly "BoneNames": Object;
    readonly "IndexNames": Object;
    readonly "IndexHash": Object;
    readonly "Parts": Object;
    readonly "Constraints2": Object;
    readonly "Joints": Object;
    readonly "FeModel": PhysFeModelDesc_t;
    readonly "BoneParents": Object;
    readonly "SurfacePropertyHashes": Object;
    readonly "CollisionAttributes": Object;
    readonly "DebugPartNames": Object;
    "EmbeddedKeyvalues": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXAggregateData_t(ptr_or_class: string|AnySDKClass): VPhysXAggregateData_t;

declare interface VPhysXBodyPart_t {
    "Flags": number;
    "Mass": number;
    readonly "RnShape": VPhysics2ShapeDef_t;
    "CollisionAttributeIndex": number;
    "Reserved": number;
    "InertiaScale": number;
    "LinearDamping": number;
    "AngularDamping": number;
    "OverrideMassCenter": boolean;
    "MassCenterOverride": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXBodyPart_t(ptr_or_class: string|AnySDKClass): VPhysXBodyPart_t;

declare interface VPhysXCollisionAttributes_t {
    "CollisionGroup": number;
    readonly "InteractAs": Object;
    readonly "InteractWith": Object;
    readonly "InteractExclude": Object;
    "CollisionGroupString": string;
    readonly "InteractAsStrings": Object;
    readonly "InteractWithStrings": Object;
    readonly "InteractExcludeStrings": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXCollisionAttributes_t(ptr_or_class: string|AnySDKClass): VPhysXCollisionAttributes_t;

declare interface VPhysXConstraint2_t {
    "Flags": number;
    "Parent": number;
    "Child": number;
    readonly "Params": VPhysXConstraintParams_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXConstraint2_t(ptr_or_class: string|AnySDKClass): VPhysXConstraint2_t;

declare interface VPhysXConstraintParams_t {
    "Type": number;
    "TranslateMotion": number;
    "RotateMotion": number;
    "Flags": number;
    "Anchor": Object;
    "MaxForce": number;
    "MaxTorque": number;
    "LinearLimitValue": number;
    "LinearLimitRestitution": number;
    "LinearLimitSpring": number;
    "LinearLimitDamping": number;
    "TwistLowLimitValue": number;
    "TwistLowLimitRestitution": number;
    "TwistLowLimitSpring": number;
    "TwistLowLimitDamping": number;
    "TwistHighLimitValue": number;
    "TwistHighLimitRestitution": number;
    "TwistHighLimitSpring": number;
    "TwistHighLimitDamping": number;
    "Swing1LimitValue": number;
    "Swing1LimitRestitution": number;
    "Swing1LimitSpring": number;
    "Swing1LimitDamping": number;
    "Swing2LimitValue": number;
    "Swing2LimitRestitution": number;
    "Swing2LimitSpring": number;
    "Swing2LimitDamping": number;
    "GoalPosition": Vector;
    "GoalAngularVelocity": Vector;
    "DriveSpringX": number;
    "DriveSpringY": number;
    "DriveSpringZ": number;
    "DriveDampingX": number;
    "DriveDampingY": number;
    "DriveDampingZ": number;
    "DriveSpringTwist": number;
    "DriveSpringSwing": number;
    "DriveSpringSlerp": number;
    "DriveDampingTwist": number;
    "DriveDampingSwing": number;
    "DriveDampingSlerp": number;
    "SolverIterationCount": number;
    "ProjectionLinearTolerance": number;
    "ProjectionAngularTolerance": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXConstraintParams_t(ptr_or_class: string|AnySDKClass): VPhysXConstraintParams_t;

declare interface VPhysXJoint_t {
    "Type": number;
    "Body1": number;
    "Body2": number;
    "Flags": number;
    "EnableCollision": boolean;
    "EnableLinearLimit": boolean;
    readonly "LinearLimit": VPhysXRange_t;
    "EnableLinearMotor": boolean;
    "LinearTargetVelocity": Vector;
    "MaxForce": number;
    "EnableSwingLimit": boolean;
    readonly "SwingLimit": VPhysXRange_t;
    "EnableTwistLimit": boolean;
    readonly "TwistLimit": VPhysXRange_t;
    "EnableAngularMotor": boolean;
    "AngularTargetVelocity": Vector;
    "MaxTorque": number;
    "LinearFrequency": number;
    "LinearDampingRatio": number;
    "AngularFrequency": number;
    "AngularDampingRatio": number;
    "Friction": number;
    "Elasticity": number;
    "ElasticDamping": number;
    "Plasticity": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXJoint_t(ptr_or_class: string|AnySDKClass): VPhysXJoint_t;

declare interface VPhysXRange_t {
    "Min": number;
    "Max": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXRange_t(ptr_or_class: string|AnySDKClass): VPhysXRange_t;

declare interface VPhysics2ShapeDef_t {
    readonly "Spheres": Object;
    readonly "Capsules": Object;
    readonly "Hulls": Object;
    readonly "Meshes": Object;
    readonly "CollisionAttributeIndices": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysics2ShapeDef_t(ptr_or_class: string|AnySDKClass): VPhysics2ShapeDef_t;

declare interface CNavHullPresetVData {
    readonly "NavHulls": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavHullPresetVData(ptr_or_class: string|AnySDKClass): CNavHullPresetVData;

declare interface CNavHullVData {
    "AgentEnabled": boolean;
    "AgentRadius": number;
    "AgentHeight": number;
    "AgentShortHeightEnabled": boolean;
    "AgentShortHeight": number;
    "AgentMaxClimb": number;
    "AgentMaxSlope": number;
    "AgentMaxJumpDownDist": number;
    "AgentMaxJumpHorizDistBase": number;
    "AgentMaxJumpUpDist": number;
    "AgentBorderErosion": number;
    "FlowMapGenerationEnabled": boolean;
    "FlowMapNodeMaxRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavHullVData(ptr_or_class: string|AnySDKClass): CNavHullVData;

declare interface CNavVolume {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolume(ptr_or_class: string|AnySDKClass): CNavVolume;

declare interface CNavVolumeAll {
    readonly "Parent": CNavVolumeVector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeAll(ptr_or_class: string|AnySDKClass): CNavVolumeAll;

declare interface CNavVolumeSphere {
    "Center": Vector;
    "Radius": number;
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeSphere(ptr_or_class: string|AnySDKClass): CNavVolumeSphere;

declare interface CNavVolumeSphericalShell {
    "RadiusInner": number;
    readonly "Parent": CNavVolumeSphere;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeSphericalShell(ptr_or_class: string|AnySDKClass): CNavVolumeSphericalShell;

declare interface CNavVolumeVector {
    "HasBeenPreFiltered": boolean;
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeVector(ptr_or_class: string|AnySDKClass): CNavVolumeVector;

declare interface Extent {
    "Lo": Vector;
    "Hi": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function Extent(ptr_or_class: string|AnySDKClass): Extent;

declare interface NavGravity_t {
    "Gravity": Vector;
    "Default": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NavGravity_t(ptr_or_class: string|AnySDKClass): NavGravity_t;

declare interface ChangeAccessorFieldPathIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ChangeAccessorFieldPathIndex_t(ptr_or_class: string|AnySDKClass): ChangeAccessorFieldPathIndex_t;

declare interface CBaseRendererSource2 {
    readonly "RadiusScale": CParticleCollectionRendererFloatInput;
    readonly "AlphaScale": CParticleCollectionRendererFloatInput;
    readonly "RollScale": CParticleCollectionRendererFloatInput;
    readonly "Alpha2Field": ParticleAttributeIndex_t;
    readonly "ColorScale": CParticleCollectionRendererVecInput;
    "ColorBlendType": number;
    "ShaderType": number;
    "StrShaderOverride": string;
    readonly "CenterXOffset": CParticleCollectionRendererFloatInput;
    readonly "CenterYOffset": CParticleCollectionRendererFloatInput;
    "BumpStrength": number;
    "CropTextureOverride": number;
    readonly "TexturesInput": Object;
    "AnimationRate": number;
    "AnimationType": number;
    "AnimateInFPS": boolean;
    readonly "MotionVectorScaleU": CParticleCollectionRendererFloatInput;
    readonly "MotionVectorScaleV": CParticleCollectionRendererFloatInput;
    readonly "SelfIllumAmount": CParticleCollectionRendererFloatInput;
    readonly "DiffuseAmount": CParticleCollectionRendererFloatInput;
    readonly "DiffuseClamp": CParticleCollectionRendererFloatInput;
    "LightingControlPoint": number;
    readonly "SelfIllumPerParticle": ParticleAttributeIndex_t;
    "OutputBlendMode": number;
    "GammaCorrectVertexColors": boolean;
    "SaturateColorPreAlphaBlend": boolean;
    readonly "AddSelfAmount": CParticleCollectionRendererFloatInput;
    readonly "Desaturation": CParticleCollectionRendererFloatInput;
    readonly "OverbrightFactor": CParticleCollectionRendererFloatInput;
    "HSVShiftControlPoint": number;
    "FogType": number;
    readonly "FogAmount": CParticleCollectionRendererFloatInput;
    "TintByFOW": boolean;
    "TintByGlobalLight": boolean;
    "PerParticleAlphaReference": number;
    "PerParticleAlphaRefWindow": number;
    "AlphaReferenceType": number;
    readonly "AlphaReferenceSoftness": CParticleCollectionRendererFloatInput;
    readonly "SourceAlphaValueToMapToZero": CParticleCollectionRendererFloatInput;
    readonly "SourceAlphaValueToMapToOne": CParticleCollectionRendererFloatInput;
    "Refract": boolean;
    "RefractSolid": boolean;
    readonly "RefractAmount": CParticleCollectionRendererFloatInput;
    "RefractBlurRadius": number;
    "RefractBlurType": number;
    "OnlyRenderInEffectsBloomPass": boolean;
    "OnlyRenderInEffectsWaterPass": boolean;
    "UseMixedResolutionRendering": boolean;
    "OnlyRenderInEffecsGameOverlay": boolean;
    "StencilTestID": string;
    "StencilTestExclude": boolean;
    "StencilWriteID": string;
    "WriteStencilOnDepthPass": boolean;
    "WriteStencilOnDepthFail": boolean;
    "ReverseZBuffering": boolean;
    "DisableZBuffering": boolean;
    "FeatheringMode": number;
    readonly "FeatheringMinDist": CParticleCollectionRendererFloatInput;
    readonly "FeatheringMaxDist": CParticleCollectionRendererFloatInput;
    readonly "FeatheringFilter": CParticleCollectionRendererFloatInput;
    readonly "DepthBias": CParticleCollectionRendererFloatInput;
    "SortMethod": number;
    "BlendFramesSeq0": boolean;
    "MaxLuminanceBlendingSequence0": boolean;
    readonly "Parent": CParticleFunctionRenderer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseRendererSource2(ptr_or_class: string|AnySDKClass): CBaseRendererSource2;

declare interface CBaseTrailRenderer {
    "OrientationType": number;
    "OrientationControlPoint": number;
    "MinSize": number;
    "MaxSize": number;
    readonly "StartFadeSize": CParticleCollectionRendererFloatInput;
    readonly "EndFadeSize": CParticleCollectionRendererFloatInput;
    "ClampV": boolean;
    readonly "Parent": CBaseRendererSource2;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseTrailRenderer(ptr_or_class: string|AnySDKClass): CBaseTrailRenderer;

declare interface CGeneralRandomRotation {
    readonly "FieldOutput": ParticleAttributeIndex_t;
    "Degrees": number;
    "DegreesMin": number;
    "DegreesMax": number;
    "RotationRandExponent": number;
    "RandomlyFlipDirection": boolean;
    readonly "Parent": CParticleFunctionInitializer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGeneralRandomRotation(ptr_or_class: string|AnySDKClass): CGeneralRandomRotation;

declare interface CGeneralSpin {
    "SpinRateDegrees": number;
    "SpinRateMinDegrees": number;
    "SpinRateStopTime": number;
    readonly "Parent": CParticleFunctionOperator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGeneralSpin(ptr_or_class: string|AnySDKClass): CGeneralSpin;

declare interface CParticleFunction {
    readonly "OpStrength": CParticleCollectionFloatInput;
    "OpEndCapState": number;
    "OpStartFadeInTime": number;
    "OpEndFadeInTime": number;
    "OpStartFadeOutTime": number;
    "OpEndFadeOutTime": number;
    "OpFadeOscillatePeriod": number;
    "NormalizeToStopTime": boolean;
    "OpTimeOffsetMin": number;
    "OpTimeOffsetMax": number;
    "OpTimeOffsetSeed": number;
    "OpTimeScaleSeed": number;
    "OpTimeScaleMin": number;
    "OpTimeScaleMax": number;
    "DisableOperator": boolean;
    "Notes": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunction(ptr_or_class: string|AnySDKClass): CParticleFunction;

declare interface CParticleFunctionConstraint {
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionConstraint(ptr_or_class: string|AnySDKClass): CParticleFunctionConstraint;

declare interface CParticleFunctionEmitter {
    "EmitterIndex": number;
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionEmitter(ptr_or_class: string|AnySDKClass): CParticleFunctionEmitter;

declare interface CParticleFunctionForce {
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionForce(ptr_or_class: string|AnySDKClass): CParticleFunctionForce;

declare interface CParticleFunctionInitializer {
    "AssociatedEmitterIndex": number;
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionInitializer(ptr_or_class: string|AnySDKClass): CParticleFunctionInitializer;

declare interface CParticleFunctionOperator {
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionOperator(ptr_or_class: string|AnySDKClass): CParticleFunctionOperator;

declare interface CParticleFunctionPreEmission {
    "RunOnce": boolean;
    readonly "Parent": CParticleFunctionOperator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionPreEmission(ptr_or_class: string|AnySDKClass): CParticleFunctionPreEmission;

declare interface CParticleFunctionRenderer {
    readonly "VisibilityInputs": CParticleVisibilityInputs;
    "CannotBeRefracted": boolean;
    "SkipRenderingOnMobile": boolean;
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionRenderer(ptr_or_class: string|AnySDKClass): CParticleFunctionRenderer;

declare interface CParticleMassCalculationParameters {
    "MassMode": number;
    readonly "Radius": CPerParticleFloatInput;
    readonly "NominalRadius": CPerParticleFloatInput;
    readonly "Scale": CPerParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleMassCalculationParameters(ptr_or_class: string|AnySDKClass): CParticleMassCalculationParameters;

declare interface CParticleSystemDefinition {
    "BehaviorVersion": number;
    readonly "PreEmissionOperators": Object;
    readonly "Emitters": Object;
    readonly "Initializers": Object;
    readonly "Operators": Object;
    readonly "ForceGenerators": Object;
    readonly "Constraints": Object;
    readonly "Renderers": Object;
    readonly "Children": Object;
    "FirstMultipleOverride_BackwardCompat": number;
    "InitialParticles": number;
    "MaxParticles": number;
    "GroupID": number;
    "BoundingBoxMin": Vector;
    "BoundingBoxMax": Vector;
    "DepthSortBias": number;
    "SortOverridePositionCP": number;
    "InfiniteBounds": boolean;
    "EnableNamedValues": boolean;
    "NamedValueDomain": string;
    readonly "NamedValueLocals": Object;
    "ConstantColor": Color;
    "ConstantNormal": Vector;
    "ConstantRadius": number;
    "ConstantRotation": number;
    "ConstantRotationSpeed": number;
    "ConstantLifespan": number;
    "ConstantSequenceNumber": number;
    "ConstantSequenceNumber1": number;
    "SnapshotControlPoint": number;
    "CullRadius": number;
    "CullFillCost": number;
    "CullControlPoint": number;
    "FallbackMaxCount": number;
    "PreSimulationTime": number;
    "StopSimulationAfterTime": number;
    "MaximumTimeStep": number;
    "MaximumSimTime": number;
    "MinimumSimTime": number;
    "MinimumTimeStep": number;
    "MinimumFrames": number;
    "MinCPULevel": number;
    "MinGPULevel": number;
    "NoDrawTimeToGoToSleep": number;
    "MaxDrawDistance": number;
    "StartFadeDistance": number;
    "MaxCreationDistance": number;
    "AggregationMinAvailableParticles": number;
    "AggregateRadius": number;
    "ShouldBatch": boolean;
    "ShouldHitboxesFallbackToRenderBounds": boolean;
    "ShouldHitboxesFallbackToSnapshot": boolean;
    "ShouldHitboxesFallbackToCollisionHulls": boolean;
    "ViewModelEffect": number;
    "ScreenSpaceEffect": boolean;
    "TargetLayerID": string;
    "SkipRenderControlPoint": number;
    "AllowRenderControlPoint": number;
    "ShouldSort": boolean;
    readonly "ControlPointConfigurations": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleSystemDefinition(ptr_or_class: string|AnySDKClass): CParticleSystemDefinition;

declare interface CParticleVisibilityInputs {
    "CameraBias": number;
    "CPin": number;
    "ProxyRadius": number;
    "InputMin": number;
    "InputMax": number;
    "InputPixelVisFade": number;
    "NoPixelVisibilityFallback": number;
    "DistanceInputMin": number;
    "DistanceInputMax": number;
    "DotInputMin": number;
    "DotInputMax": number;
    "DotCPAngles": boolean;
    "DotCameraAngles": boolean;
    "AlphaScaleMin": number;
    "AlphaScaleMax": number;
    "RadiusScaleMin": number;
    "RadiusScaleMax": number;
    "RadiusScaleFOVBase": number;
    "RightEye": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleVisibilityInputs(ptr_or_class: string|AnySDKClass): CParticleVisibilityInputs;

declare interface CPathParameters {
    "StartControlPointNumber": number;
    "EndControlPointNumber": number;
    "BulgeControl": number;
    "Bulge": number;
    "MidPoint": number;
    "StartPointOffset": Vector;
    "MidPointOffset": Vector;
    "EndOffset": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathParameters(ptr_or_class: string|AnySDKClass): CPathParameters;

declare interface CRandomNumberGeneratorParameters {
    "DistributeEvenly": boolean;
    "Seed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRandomNumberGeneratorParameters(ptr_or_class: string|AnySDKClass): CRandomNumberGeneratorParameters;

declare interface CReplicationParameters {
    "ReplicationMode": number;
    "ScaleChildParticleRadii": boolean;
    readonly "MinRandomRadiusScale": CParticleCollectionFloatInput;
    readonly "MaxRandomRadiusScale": CParticleCollectionFloatInput;
    readonly "ModellingScale": CParticleCollectionFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CReplicationParameters(ptr_or_class: string|AnySDKClass): CReplicationParameters;

declare interface CSpinUpdateBase {
    readonly "Parent": CParticleFunctionOperator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpinUpdateBase(ptr_or_class: string|AnySDKClass): CSpinUpdateBase;

declare interface CollisionGroupContext_t {
    "CollisionGroupNumber": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CollisionGroupContext_t(ptr_or_class: string|AnySDKClass): CollisionGroupContext_t;

declare interface ControlPointReference_t {
    "ControlPointNameString": number;
    "OffsetFromControlPoint": Vector;
    "OffsetInLocalSpace": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ControlPointReference_t(ptr_or_class: string|AnySDKClass): ControlPointReference_t;

declare interface IParticleCollection {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IParticleCollection(ptr_or_class: string|AnySDKClass): IParticleCollection;

declare interface MaterialVariable_t {
    "StrVariable": string;
    readonly "VariableField": ParticleAttributeIndex_t;
    "Scale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialVariable_t(ptr_or_class: string|AnySDKClass): MaterialVariable_t;

declare interface ModelReference_t {
    "RelativeProbabilityOfSpawn": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelReference_t(ptr_or_class: string|AnySDKClass): ModelReference_t;

declare interface ParticleAttributeIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleAttributeIndex_t(ptr_or_class: string|AnySDKClass): ParticleAttributeIndex_t;

declare interface ParticleChildrenInfo_t {
    "Delay": number;
    "EndCap": boolean;
    "DisableChild": boolean;
    "DetailLevel": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleChildrenInfo_t(ptr_or_class: string|AnySDKClass): ParticleChildrenInfo_t;

declare interface ParticleControlPointConfiguration_t {
    "Name": string;
    readonly "Drivers": Object;
    readonly "PreviewState": ParticlePreviewState_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleControlPointConfiguration_t(ptr_or_class: string|AnySDKClass): ParticleControlPointConfiguration_t;

declare interface ParticleControlPointDriver_t {
    "ControlPoint": number;
    "AttachType": number;
    "AttachmentName": string;
    "Offset": Vector;
    "Offset1": QAngle;
    "EntityName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleControlPointDriver_t(ptr_or_class: string|AnySDKClass): ParticleControlPointDriver_t;

declare interface ParticlePreviewBodyGroup_t {
    "BodyGroupName": string;
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticlePreviewBodyGroup_t(ptr_or_class: string|AnySDKClass): ParticlePreviewBodyGroup_t;

declare interface ParticlePreviewState_t {
    "PreviewModel": string;
    "ModSpecificData": number;
    "GroundType": number;
    "SequenceName": string;
    "FireParticleOnSequenceFrame": number;
    "HitboxSetName": string;
    "MaterialGroupName": string;
    readonly "BodyGroups": Object;
    "PlaybackSpeed": number;
    "ParticleSimulationRate": number;
    "ShouldDrawHitboxes": boolean;
    "ShouldDrawAttachments": boolean;
    "ShouldDrawAttachmentNames": boolean;
    "ShouldDrawControlPointAxes": boolean;
    "AnimationNonLooping": boolean;
    "PreviewGravity": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticlePreviewState_t(ptr_or_class: string|AnySDKClass): ParticlePreviewState_t;

declare interface PointDefinitionWithTimeValues_t {
    "TimeDuration": number;
    readonly "Parent": PointDefinition_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PointDefinitionWithTimeValues_t(ptr_or_class: string|AnySDKClass): PointDefinitionWithTimeValues_t;

declare interface PointDefinition_t {
    "ControlPoint": number;
    "LocalCoords": boolean;
    "Offset": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PointDefinition_t(ptr_or_class: string|AnySDKClass): PointDefinition_t;

declare interface RenderProjectedMaterial_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RenderProjectedMaterial_t(ptr_or_class: string|AnySDKClass): RenderProjectedMaterial_t;

declare interface SequenceWeightedList_t {
    "Sequence": number;
    "RelativeWeight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SequenceWeightedList_t(ptr_or_class: string|AnySDKClass): SequenceWeightedList_t;

declare interface TextureControls_t {
    readonly "FinalTextureScaleU": CParticleCollectionRendererFloatInput;
    readonly "FinalTextureScaleV": CParticleCollectionRendererFloatInput;
    readonly "FinalTextureOffsetU": CParticleCollectionRendererFloatInput;
    readonly "FinalTextureOffsetV": CParticleCollectionRendererFloatInput;
    readonly "FinalTextureUVRotation": CParticleCollectionRendererFloatInput;
    readonly "ZoomScale": CParticleCollectionRendererFloatInput;
    readonly "Distortion": CParticleCollectionRendererFloatInput;
    "RandomizeOffsets": boolean;
    "ClampUVs": boolean;
    "PerParticleBlend": number;
    "PerParticleScale": number;
    "PerParticleOffsetU": number;
    "PerParticleOffsetV": number;
    "PerParticleRotation": number;
    "PerParticleZoom": number;
    "PerParticleDistortion": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TextureControls_t(ptr_or_class: string|AnySDKClass): TextureControls_t;

declare interface TextureGroup_t {
    "Enabled": boolean;
    "ReplaceTextureWithGradient": boolean;
    "TextureType": number;
    "TextureChannels": number;
    "TextureBlendMode": number;
    readonly "TextureBlend": CParticleCollectionRendererFloatInput;
    readonly "TextureControls": TextureControls_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TextureGroup_t(ptr_or_class: string|AnySDKClass): TextureGroup_t;

declare interface VecInputMaterialVariable_t {
    "StrVariable": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VecInputMaterialVariable_t(ptr_or_class: string|AnySDKClass): VecInputMaterialVariable_t;

declare interface CNewParticleEffect {
    readonly "Next": CNewParticleEffect;
    readonly "Prev": CNewParticleEffect;
    readonly "Particles": IParticleCollection;
    "DebugName": string;
    "DontRemove": any;
    "Remove": any;
    "NeedsBBoxUpdate": any;
    "IsFirstFrame": any;
    "AutoUpdateBBox": any;
    "Allocated": any;
    "Simulate": any;
    "ShouldPerformCullCheck": any;
    "ForceNoDraw": any;
    "ShouldSave": any;
    "DisableAggregation": any;
    "ShouldSimulateDuringGamePaused": any;
    "ShouldCheckFoW": any;
    "SortOrigin": Vector;
    "Scale": number;
    readonly "Owner": PARTICLE_EHANDLE__;
    readonly "OwningParticleProperty": CParticleProperty;
    "FreezeTransitionStart": number;
    "FreezeTransitionDuration": number;
    "FreezeTransitionOverride": number;
    "FreezeTransitionActive": boolean;
    "FreezeTargetState": boolean;
    "CanFreeze": boolean;
    "LastMin": Vector;
    "LastMax": Vector;
    "SplitScreenUser": number;
    "AggregationCenter": Vector;
    "RefCount": number;
    readonly "Parent": IParticleEffect;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNewParticleEffect(ptr_or_class: string|AnySDKClass): CNewParticleEffect;

declare interface CParticleCollectionBindingInstance {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleCollectionBindingInstance(ptr_or_class: string|AnySDKClass): CParticleCollectionBindingInstance;

declare interface CParticleCollectionFloatInput {
    readonly "Parent": CParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleCollectionFloatInput(ptr_or_class: string|AnySDKClass): CParticleCollectionFloatInput;

declare interface CParticleCollectionRendererFloatInput {
    readonly "Parent": CParticleCollectionFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleCollectionRendererFloatInput(ptr_or_class: string|AnySDKClass): CParticleCollectionRendererFloatInput;

declare interface CParticleCollectionRendererVecInput {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleCollectionRendererVecInput(ptr_or_class: string|AnySDKClass): CParticleCollectionRendererVecInput;

declare interface CParticleFloatInput {
    "Type": number;
    "MapType": number;
    "LiteralValue": number;
    "ControlPoint": number;
    readonly "ScalarAttribute": ParticleAttributeIndex_t;
    readonly "VectorAttribute": ParticleAttributeIndex_t;
    "VectorComponent": number;
    "RandomMin": number;
    "RandomMax": number;
    "HasRandomSignFlip": boolean;
    "RandomSeed": number;
    "RandomMode": number;
    "LOD0": number;
    "LOD1": number;
    "LOD2": number;
    "LOD3": number;
    readonly "NoiseInputVectorAttribute": ParticleAttributeIndex_t;
    "NoiseOutputMin": number;
    "NoiseOutputMax": number;
    "NoiseScale": number;
    "NoiseOffsetRate": Vector;
    "NoiseOffset": number;
    "NoiseOctaves": number;
    "NoiseTurbulence": number;
    "NoiseType": number;
    "NoiseModifier": number;
    "NoiseTurbulenceScale": number;
    "NoiseTurbulenceMix": number;
    "NoiseImgPreviewScale": number;
    "NoiseImgPreviewLive": boolean;
    "NoCameraFallback": number;
    "UseBoundsCenter": boolean;
    "InputMode": number;
    "MultFactor": number;
    "Input0": number;
    "Input1": number;
    "Output0": number;
    "Output1": number;
    "NotchedRangeMin": number;
    "NotchedRangeMax": number;
    "NotchedOutputOutside": number;
    "NotchedOutputInside": number;
    "RoundType": number;
    "BiasType": number;
    "BiasParameter": number;
    readonly "Parent": CParticleInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFloatInput(ptr_or_class: string|AnySDKClass): CParticleFloatInput;

declare interface CParticleInput {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleInput(ptr_or_class: string|AnySDKClass): CParticleInput;

declare interface CParticleModelInput {
    "Type": number;
    "ControlPoint": number;
    readonly "Parent": CParticleInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleModelInput(ptr_or_class: string|AnySDKClass): CParticleModelInput;

declare interface CParticleProperty {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleProperty(ptr_or_class: string|AnySDKClass): CParticleProperty;

declare interface CParticleRemapFloatInput {
    readonly "Parent": CParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleRemapFloatInput(ptr_or_class: string|AnySDKClass): CParticleRemapFloatInput;

declare interface CParticleTransformInput {
    "Type": number;
    "FollowNamedValue": boolean;
    "SupportsDisabled": boolean;
    "UseOrientation": boolean;
    "ControlPoint": number;
    "ControlPointRangeMax": number;
    "EndCPGrowthTime": number;
    readonly "Parent": CParticleInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleTransformInput(ptr_or_class: string|AnySDKClass): CParticleTransformInput;

declare interface CParticleVecInput {
    "Type": number;
    "LiteralValue": Vector;
    "LiteralColor": Color;
    "FollowNamedValue": boolean;
    readonly "VectorAttribute": ParticleAttributeIndex_t;
    "VectorAttributeScale": Vector;
    "ControlPoint": number;
    "DeltaControlPoint": number;
    "CPValueScale": Vector;
    "CPRelativePosition": Vector;
    "CPRelativeDir": Vector;
    readonly "FloatComponentX": CParticleFloatInput;
    readonly "FloatComponentY": CParticleFloatInput;
    readonly "FloatComponentZ": CParticleFloatInput;
    readonly "FloatInterp": CParticleFloatInput;
    "InterpInput0": number;
    "InterpInput1": number;
    "InterpOutput0": Vector;
    "InterpOutput1": Vector;
    "RandomMin": Vector;
    "RandomMax": Vector;
    readonly "Parent": CParticleInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleVecInput(ptr_or_class: string|AnySDKClass): CParticleVecInput;

declare interface CPerParticleFloatInput {
    readonly "Parent": CParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPerParticleFloatInput(ptr_or_class: string|AnySDKClass): CPerParticleFloatInput;

declare interface CPerParticleVecInput {
    readonly "Parent": CParticleVecInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPerParticleVecInput(ptr_or_class: string|AnySDKClass): CPerParticleVecInput;

declare interface IParticleEffect {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IParticleEffect(ptr_or_class: string|AnySDKClass): IParticleEffect;

declare interface PARTICLE_EHANDLE__ {
    "Unused": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PARTICLE_EHANDLE__(ptr_or_class: string|AnySDKClass): PARTICLE_EHANDLE__;

declare interface PARTICLE_WORLD_HANDLE__ {
    "Unused": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PARTICLE_WORLD_HANDLE__(ptr_or_class: string|AnySDKClass): PARTICLE_WORLD_HANDLE__;

declare interface ParticleNamedValueConfiguration_t {
    "ConfigName": string;
    "AttachType": number;
    "BoundEntityPath": string;
    "StrEntityScope": string;
    "StrAttachmentName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleNamedValueConfiguration_t(ptr_or_class: string|AnySDKClass): ParticleNamedValueConfiguration_t;

declare interface ParticleNamedValueSource_t {
    "Name": string;
    "IsPublic": boolean;
    "ValueType": any;
    readonly "DefaultConfig": ParticleNamedValueConfiguration_t;
    readonly "NamedConfigs": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleNamedValueSource_t(ptr_or_class: string|AnySDKClass): ParticleNamedValueSource_t;

declare interface CFeIndexedJiggleBone {
    "Node": number;
    "JiggleParent": number;
    readonly "JiggleBone": CFeJiggleBone;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeIndexedJiggleBone(ptr_or_class: string|AnySDKClass): CFeIndexedJiggleBone;

declare interface CFeJiggleBone {
    "Flags": number;
    "Length": number;
    "TipMass": number;
    "YawStiffness": number;
    "YawDamping": number;
    "PitchStiffness": number;
    "PitchDamping": number;
    "AlongStiffness": number;
    "AlongDamping": number;
    "AngleLimit": number;
    "MinYaw": number;
    "MaxYaw": number;
    "YawFriction": number;
    "YawBounce": number;
    "MinPitch": number;
    "MaxPitch": number;
    "PitchFriction": number;
    "PitchBounce": number;
    "BaseMass": number;
    "BaseStiffness": number;
    "BaseDamping": number;
    "BaseMinLeft": number;
    "BaseMaxLeft": number;
    "BaseLeftFriction": number;
    "BaseMinUp": number;
    "BaseMaxUp": number;
    "BaseUpFriction": number;
    "BaseMinForward": number;
    "BaseMaxForward": number;
    "BaseForwardFriction": number;
    "Radius0": number;
    "Radius1": number;
    "Point0": Vector;
    "Point1": Vector;
    "CollisionMask": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeJiggleBone(ptr_or_class: string|AnySDKClass): CFeJiggleBone;

declare interface CFeMorphLayer {
    "Name": string;
    "NameHash": number;
    readonly "Nodes": Object;
    readonly "InitPos": Object;
    readonly "Gravity": Object;
    readonly "GoalStrength": Object;
    readonly "GoalDamping": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeMorphLayer(ptr_or_class: string|AnySDKClass): CFeMorphLayer;

declare interface CFeNamedJiggleBone {
    "StrParentBone": string;
    "JiggleParent": number;
    readonly "JiggleBone": CFeJiggleBone;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeNamedJiggleBone(ptr_or_class: string|AnySDKClass): CFeNamedJiggleBone;

declare interface CFeVertexMapBuildArray {
    readonly "Array": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeVertexMapBuildArray(ptr_or_class: string|AnySDKClass): CFeVertexMapBuildArray;

declare interface CRegionSVM {
    readonly "Planes": Object;
    readonly "Nodes": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRegionSVM(ptr_or_class: string|AnySDKClass): CRegionSVM;

declare interface CastSphereSATParams_t {
    "RayStart": Vector;
    "RayDelta": Vector;
    "Radius": number;
    "MaxFraction": number;
    "Scale": number;
    readonly "Hull": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CastSphereSATParams_t(ptr_or_class: string|AnySDKClass): CastSphereSATParams_t;

declare interface CovMatrix3 {
    "Diag": Vector;
    "XY": number;
    "XZ": number;
    "YZ": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CovMatrix3(ptr_or_class: string|AnySDKClass): CovMatrix3;

declare interface Dop26_t {
    "Support": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function Dop26_t(ptr_or_class: string|AnySDKClass): Dop26_t;

declare interface FeAnimStrayRadius_t {
    "Node": Object;
    "MaxDist": number;
    "RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeAnimStrayRadius_t(ptr_or_class: string|AnySDKClass): FeAnimStrayRadius_t;

declare interface FeAntiTunnelProbeBuild_t {
    "Weight": number;
    "ActivationDistance": number;
    "Bias": number;
    "Curvature": number;
    "Flags": number;
    "ProbeNode": number;
    readonly "TargetNodes": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeAntiTunnelProbeBuild_t(ptr_or_class: string|AnySDKClass): FeAntiTunnelProbeBuild_t;

declare interface FeAntiTunnelProbe_t {
    "Weight": number;
    "Flags": number;
    "ProbeNode": number;
    "Count": number;
    "Begin": number;
    "ActivationDistance": number;
    "CurvatureRadius": number;
    "Bias": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeAntiTunnelProbe_t(ptr_or_class: string|AnySDKClass): FeAntiTunnelProbe_t;

declare interface FeAxialEdgeBend_t {
    "Te": number;
    "Tv": number;
    "Dist": number;
    "Weight": Object;
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeAxialEdgeBend_t(ptr_or_class: string|AnySDKClass): FeAxialEdgeBend_t;

declare interface FeBandBendLimit_t {
    "DistMin": number;
    "DistMax": number;
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBandBendLimit_t(ptr_or_class: string|AnySDKClass): FeBandBendLimit_t;

declare interface FeBoxRigid_t {
    "Node": number;
    "CollisionMask": number;
    "Size": Vector;
    "VertexMapIndex": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBoxRigid_t(ptr_or_class: string|AnySDKClass): FeBoxRigid_t;

declare interface FeBuildBoxRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeBoxRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildBoxRigid_t(ptr_or_class: string|AnySDKClass): FeBuildBoxRigid_t;

declare interface FeBuildSDFRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeSDFRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildSDFRigid_t(ptr_or_class: string|AnySDKClass): FeBuildSDFRigid_t;

declare interface FeBuildSphereRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeSphereRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildSphereRigid_t(ptr_or_class: string|AnySDKClass): FeBuildSphereRigid_t;

declare interface FeBuildTaperedCapsuleRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeTaperedCapsuleRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildTaperedCapsuleRigid_t(ptr_or_class: string|AnySDKClass): FeBuildTaperedCapsuleRigid_t;

declare interface FeCollisionPlane_t {
    "CtrlParent": number;
    "ChildNode": number;
    readonly "Plane": RnPlane_t;
    "Strength": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCollisionPlane_t(ptr_or_class: string|AnySDKClass): FeCollisionPlane_t;

declare interface FeCtrlOffset_t {
    "Offset": Vector;
    "CtrlParent": number;
    "CtrlChild": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCtrlOffset_t(ptr_or_class: string|AnySDKClass): FeCtrlOffset_t;

declare interface FeCtrlOsOffset_t {
    "CtrlParent": number;
    "CtrlChild": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCtrlOsOffset_t(ptr_or_class: string|AnySDKClass): FeCtrlOsOffset_t;

declare interface FeCtrlSoftOffset_t {
    "CtrlParent": number;
    "CtrlChild": number;
    "Offset": Vector;
    "Alpha": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCtrlSoftOffset_t(ptr_or_class: string|AnySDKClass): FeCtrlSoftOffset_t;

declare interface FeEdgeDesc_t {
    "Edge": Object;
    "VirtElem": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeEdgeDesc_t(ptr_or_class: string|AnySDKClass): FeEdgeDesc_t;

declare interface FeEffectDesc_t {
    "Name": string;
    "NameHash": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeEffectDesc_t(ptr_or_class: string|AnySDKClass): FeEffectDesc_t;

declare interface FeFitInfluence_t {
    "VertexNode": number;
    "Weight": number;
    "MatrixNode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFitInfluence_t(ptr_or_class: string|AnySDKClass): FeFitInfluence_t;

declare interface FeFitMatrix_t {
    "Center": Vector;
    "End": number;
    "Node": number;
    "BeginDynamic": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFitMatrix_t(ptr_or_class: string|AnySDKClass): FeFitMatrix_t;

declare interface FeFitWeight_t {
    "Weight": number;
    "Node": number;
    "Dummy": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFitWeight_t(ptr_or_class: string|AnySDKClass): FeFitWeight_t;

declare interface FeFollowNode_t {
    "ParentNode": number;
    "ChildNode": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFollowNode_t(ptr_or_class: string|AnySDKClass): FeFollowNode_t;

declare interface FeHingeLimitBuild_t {
    "Node": Object;
    "Flags": number;
    "LimitCW": number;
    "LimitCCW": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeHingeLimitBuild_t(ptr_or_class: string|AnySDKClass): FeHingeLimitBuild_t;

declare interface FeHingeLimit_t {
    "Node": Object;
    "Flags": number;
    "Weight4": number;
    "Weight5": number;
    "AngleCenter": number;
    "AngleExtents": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeHingeLimit_t(ptr_or_class: string|AnySDKClass): FeHingeLimit_t;

declare interface FeKelagerBend2_t {
    "Weight": Object;
    "Height0": number;
    "Node": Object;
    "Reserved": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeKelagerBend2_t(ptr_or_class: string|AnySDKClass): FeKelagerBend2_t;

declare interface FeMorphLayerDepr_t {
    "Name": string;
    "NameHash": number;
    readonly "Nodes": Object;
    readonly "InitPos": Object;
    readonly "Gravity": Object;
    readonly "GoalStrength": Object;
    readonly "GoalDamping": Object;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeMorphLayerDepr_t(ptr_or_class: string|AnySDKClass): FeMorphLayerDepr_t;

declare interface FeNodeBase_t {
    "Node": number;
    "Dummy": Object;
    "NodeX0": number;
    "NodeX1": number;
    "NodeY0": number;
    "NodeY1": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeNodeBase_t(ptr_or_class: string|AnySDKClass): FeNodeBase_t;

declare interface FeNodeIntegrator_t {
    "PointDamping": number;
    "AnimationForceAttraction": number;
    "AnimationVertexAttraction": number;
    "Gravity": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeNodeIntegrator_t(ptr_or_class: string|AnySDKClass): FeNodeIntegrator_t;

declare interface FeNodeReverseOffset_t {
    "Offset": Vector;
    "BoneCtrl": number;
    "TargetNode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeNodeReverseOffset_t(ptr_or_class: string|AnySDKClass): FeNodeReverseOffset_t;

declare interface FeNodeWindBase_t {
    "NodeX0": number;
    "NodeX1": number;
    "NodeY0": number;
    "NodeY1": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeNodeWindBase_t(ptr_or_class: string|AnySDKClass): FeNodeWindBase_t;

declare interface FeProxyVertexMap_t {
    "Name": string;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeProxyVertexMap_t(ptr_or_class: string|AnySDKClass): FeProxyVertexMap_t;

declare interface FeQuad_t {
    "Node": Object;
    "Slack": number;
    "Shape": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeQuad_t(ptr_or_class: string|AnySDKClass): FeQuad_t;

declare interface FeRigidColliderIndices_t {
    "TaperedCapsuleRigidIndex": number;
    "SphereRigidIndex": number;
    "BoxRigidIndex": number;
    "SDFRigidIndex": number;
    "CollisionPlaneIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeRigidColliderIndices_t(ptr_or_class: string|AnySDKClass): FeRigidColliderIndices_t;

declare interface FeRodConstraint_t {
    "Node": Object;
    "MaxDist": number;
    "MinDist": number;
    "Weight0": number;
    "RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeRodConstraint_t(ptr_or_class: string|AnySDKClass): FeRodConstraint_t;

declare interface FeSDFRigid_t {
    "LocalMin": Vector;
    "LocalMax": Vector;
    "Bounciness": number;
    "Node": number;
    "CollisionMask": number;
    "VertexMapIndex": number;
    "Flags": number;
    readonly "Distances": Object;
    "Width": number;
    "Height": number;
    "Depth": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSDFRigid_t(ptr_or_class: string|AnySDKClass): FeSDFRigid_t;

declare interface FeSimdAnimStrayRadius_t {
    "MaxDist": number;
    "RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdAnimStrayRadius_t(ptr_or_class: string|AnySDKClass): FeSimdAnimStrayRadius_t;

declare interface FeSimdNodeBase_t {
    "Node": Object;
    "NodeX0": Object;
    "NodeX1": Object;
    "NodeY0": Object;
    "NodeY1": Object;
    "Dummy": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdNodeBase_t(ptr_or_class: string|AnySDKClass): FeSimdNodeBase_t;

declare interface FeSimdQuad_t {
    "4Slack": number;
    "4Weights": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdQuad_t(ptr_or_class: string|AnySDKClass): FeSimdQuad_t;

declare interface FeSimdRodConstraintAnim_t {
    "4Weight0": number;
    "4RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdRodConstraintAnim_t(ptr_or_class: string|AnySDKClass): FeSimdRodConstraintAnim_t;

declare interface FeSimdRodConstraint_t {
    "4MaxDist": number;
    "4MinDist": number;
    "4Weight0": number;
    "4RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdRodConstraint_t(ptr_or_class: string|AnySDKClass): FeSimdRodConstraint_t;

declare interface FeSimdSpringIntegrator_t {
    "SpringRestLength": number;
    "SpringConstant": number;
    "SpringDamping": number;
    "NodeWeight0": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdSpringIntegrator_t(ptr_or_class: string|AnySDKClass): FeSimdSpringIntegrator_t;

declare interface FeSimdTri_t {
    "W1": number;
    "W2": number;
    "1x": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdTri_t(ptr_or_class: string|AnySDKClass): FeSimdTri_t;

declare interface FeSoftParent_t {
    "Parent": number;
    "Alpha": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSoftParent_t(ptr_or_class: string|AnySDKClass): FeSoftParent_t;

declare interface FeSourceEdge_t {
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSourceEdge_t(ptr_or_class: string|AnySDKClass): FeSourceEdge_t;

declare interface FeSphereRigid_t {
    "Sphere": number;
    "Node": number;
    "CollisionMask": number;
    "VertexMapIndex": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSphereRigid_t(ptr_or_class: string|AnySDKClass): FeSphereRigid_t;

declare interface FeSpringIntegrator_t {
    "Node": Object;
    "SpringRestLength": number;
    "SpringConstant": number;
    "SpringDamping": number;
    "NodeWeight0": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSpringIntegrator_t(ptr_or_class: string|AnySDKClass): FeSpringIntegrator_t;

declare interface FeStiffHingeBuild_t {
    "MaxAngle": number;
    "Strength": number;
    "MotionBias": Object;
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeStiffHingeBuild_t(ptr_or_class: string|AnySDKClass): FeStiffHingeBuild_t;

declare interface FeTaperedCapsuleRigid_t {
    "Sphere": Object;
    "Node": number;
    "CollisionMask": number;
    "VertexMapIndex": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTaperedCapsuleRigid_t(ptr_or_class: string|AnySDKClass): FeTaperedCapsuleRigid_t;

declare interface FeTaperedCapsuleStretch_t {
    "Node": Object;
    "CollisionMask": number;
    "Dummy": number;
    "Radius": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTaperedCapsuleStretch_t(ptr_or_class: string|AnySDKClass): FeTaperedCapsuleStretch_t;

declare interface FeTreeChildren_t {
    "Child": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTreeChildren_t(ptr_or_class: string|AnySDKClass): FeTreeChildren_t;

declare interface FeTri_t {
    "2": Vector2D;
    "Node": Object;
    "W1": number;
    "W2": number;
    "1x": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTri_t(ptr_or_class: string|AnySDKClass): FeTri_t;

declare interface FeTwistConstraint_t {
    "NodeOrient": number;
    "NodeEnd": number;
    "TwistRelax": number;
    "SwingRelax": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTwistConstraint_t(ptr_or_class: string|AnySDKClass): FeTwistConstraint_t;

declare interface FeVertexMapBuild_t {
    "VertexMapName": string;
    "NameHash": number;
    "Color": Color;
    "VolumetricSolveStrength": number;
    "ScaleSourceNode": number;
    readonly "Weights": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeVertexMapBuild_t(ptr_or_class: string|AnySDKClass): FeVertexMapBuild_t;

declare interface FeVertexMapDesc_t {
    "Name": string;
    "NameHash": number;
    "Color": number;
    "Flags": number;
    "VertexBase": number;
    "VertexCount": number;
    "MapOffset": number;
    "NodeListOffset": number;
    "CenterOfMass": Vector;
    "VolumetricSolveStrength": number;
    "ScaleSourceNode": number;
    "NodeListCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeVertexMapDesc_t(ptr_or_class: string|AnySDKClass): FeVertexMapDesc_t;

declare interface FeWeightedNode_t {
    "Node": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeWeightedNode_t(ptr_or_class: string|AnySDKClass): FeWeightedNode_t;

declare interface FeWorldCollisionParams_t {
    "WorldFriction": number;
    "GroundFriction": number;
    "ListBegin": number;
    "ListEnd": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeWorldCollisionParams_t(ptr_or_class: string|AnySDKClass): FeWorldCollisionParams_t;

declare interface FourCovMatrices3 {
    "XY": number;
    "XZ": number;
    "YZ": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FourCovMatrices3(ptr_or_class: string|AnySDKClass): FourCovMatrices3;

declare interface OldFeEdge_t {
    "K": Object;
    "InvA": number;
    "T": number;
    "ThetaRelaxed": number;
    "ThetaFactor": number;
    "C01": number;
    "C02": number;
    "C03": number;
    "C04": number;
    "AxialModelDist": number;
    "AxialModelWeights": Object;
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function OldFeEdge_t(ptr_or_class: string|AnySDKClass): OldFeEdge_t;

declare interface PhysFeModelDesc_t {
    readonly "CtrlHash": Object;
    readonly "CtrlName": Object;
    "StaticNodeFlags": number;
    "DynamicNodeFlags": number;
    "LocalForce": number;
    "LocalRotation": number;
    "NodeCount": number;
    "StaticNodes": number;
    "RotLockStaticNodes": number;
    "FirstPositionDrivenNode": number;
    "SimdTriCount1": number;
    "SimdTriCount2": number;
    "SimdQuadCount1": number;
    "SimdQuadCount2": number;
    "QuadCount1": number;
    "QuadCount2": number;
    "TreeDepth": number;
    "NodeBaseJiggleboneDependsCount": number;
    "RopeCount": number;
    readonly "Ropes": Object;
    readonly "NodeBases": Object;
    readonly "SimdNodeBases": Object;
    readonly "Quads": Object;
    readonly "SimdQuads": Object;
    readonly "SimdTris": Object;
    readonly "SimdRods": Object;
    readonly "SimdRodsAnim": Object;
    readonly "Rods": Object;
    readonly "Twists": Object;
    readonly "HingeLimits": Object;
    readonly "AntiTunnelProbes": Object;
    readonly "AntiTunnelTargetNodes": Object;
    readonly "AxialEdges": Object;
    readonly "NodeInvMasses": Object;
    readonly "CtrlOffsets": Object;
    readonly "CtrlOsOffsets": Object;
    readonly "FollowNodes": Object;
    readonly "CollisionPlanes": Object;
    readonly "NodeIntegrator": Object;
    readonly "SpringIntegrator": Object;
    readonly "SimdSpringIntegrator": Object;
    readonly "WorldCollisionParams": Object;
    readonly "LegacyStretchForce": Object;
    readonly "NodeCollisionRadii": Object;
    readonly "DynNodeFriction": Object;
    readonly "LocalRotation1": Object;
    readonly "LocalForce1": Object;
    readonly "TaperedCapsuleStretches": Object;
    readonly "TaperedCapsuleRigids": Object;
    readonly "SphereRigids": Object;
    readonly "WorldCollisionNodes": Object;
    readonly "TreeParents": Object;
    readonly "TreeCollisionMasks": Object;
    readonly "TreeChildren": Object;
    readonly "FreeNodes": Object;
    readonly "FitMatrices": Object;
    readonly "FitWeights": Object;
    readonly "ReverseOffsets": Object;
    readonly "AnimStrayRadii": Object;
    readonly "SimdAnimStrayRadii": Object;
    readonly "KelagerBends": Object;
    readonly "CtrlSoftOffsets": Object;
    readonly "JiggleBones": Object;
    readonly "SourceElems": Object;
    readonly "GoalDampedSpringIntegrators": Object;
    readonly "Tris": Object;
    "TriCount1": number;
    "TriCount2": number;
    "ReservedUint8": number;
    "ExtraPressureIterations": number;
    "ExtraGoalIterations": number;
    "ExtraIterations": number;
    readonly "SDFRigids": Object;
    readonly "BoxRigids": Object;
    readonly "DynNodeVertexSet": Object;
    readonly "VertexSetNames": Object;
    readonly "RigidColliderPriorities": Object;
    readonly "MorphLayers": Object;
    readonly "MorphSetData": Object;
    readonly "VertexMaps": Object;
    readonly "VertexMapValues": Object;
    readonly "Effects": Object;
    readonly "LockToParent": Object;
    readonly "LockToGoal": Object;
    readonly "SkelParents": Object;
    readonly "DynNodeWindBases": Object;
    "InternalPressure": number;
    "DefaultTimeDilation": number;
    "Windage": number;
    "WindDrag": number;
    "DefaultSurfaceStretch": number;
    "DefaultThreadStretch": number;
    "DefaultGravityScale": number;
    "DefaultVelAirDrag": number;
    "DefaultExpAirDrag": number;
    "DefaultVelQuadAirDrag": number;
    "DefaultExpQuadAirDrag": number;
    "RodVelocitySmoothRate": number;
    "QuadVelocitySmoothRate": number;
    "AddWorldCollisionRadius": number;
    "DefaultVolumetricSolveAmount": number;
    "MotionSmoothCDT": number;
    "LocalDrag1": number;
    "RodVelocitySmoothIterations": number;
    "QuadVelocitySmoothIterations": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PhysFeModelDesc_t(ptr_or_class: string|AnySDKClass): PhysFeModelDesc_t;

declare interface RnBlendVertex_t {
    "Weight0": number;
    "Index0": number;
    "Weight1": number;
    "Index1": number;
    "Weight2": number;
    "Index2": number;
    "Flags": number;
    "TargetIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnBlendVertex_t(ptr_or_class: string|AnySDKClass): RnBlendVertex_t;

declare interface RnBodyDesc_t {
    "DebugName": string;
    "Position": Vector;
    "LinearVelocity": Vector;
    "AngularVelocity": Vector;
    "LocalMassCenter": Vector;
    "LocalInertiaInv": Object;
    "MassInv": number;
    "GameMass": number;
    "InertiaScaleInv": number;
    "LinearDamping": number;
    "AngularDamping": number;
    "LinearDrag": number;
    "AngularDrag": number;
    "LinearBuoyancyDrag": number;
    "AngularBuoyancyDrag": number;
    "LastAwakeForceAccum": Vector;
    "LastAwakeTorqueAccum": Vector;
    "BuoyancyFactor": number;
    "GravityScale": number;
    "TimeScale": number;
    "BodyType": number;
    "GameIndex": number;
    "GameFlags": number;
    "MinVelocityIterations": number;
    "MinPositionIterations": number;
    "MassPriority": number;
    "Enabled": boolean;
    "Sleeping": boolean;
    "IsContinuousEnabled": boolean;
    "DragEnabled": boolean;
    "BuoyancyDragEnabled": boolean;
    "GravityDisabled": boolean;
    "SpeculativeEnabled": boolean;
    "HasShadowController": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnBodyDesc_t(ptr_or_class: string|AnySDKClass): RnBodyDesc_t;

declare interface RnCapsuleDesc_t {
    readonly "Capsule": RnCapsule_t;
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnCapsuleDesc_t(ptr_or_class: string|AnySDKClass): RnCapsuleDesc_t;

declare interface RnCapsule_t {
    "Center": Object;
    "Radius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnCapsule_t(ptr_or_class: string|AnySDKClass): RnCapsule_t;

declare interface RnFace_t {
    "Edge": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnFace_t(ptr_or_class: string|AnySDKClass): RnFace_t;

declare interface RnHalfEdge_t {
    "Next": number;
    "Twin": number;
    "Origin": number;
    "Face": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnHalfEdge_t(ptr_or_class: string|AnySDKClass): RnHalfEdge_t;

declare interface RnHullDesc_t {
    readonly "Hull": any;
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnHullDesc_t(ptr_or_class: string|AnySDKClass): RnHullDesc_t;

declare interface RnHull_t {
    "Centroid": Vector;
    "MaxAngularRadius": number;
    readonly "Bounds": AABB_t;
    "OrthographicAreas": Vector;
    "Volume": number;
    "SurfaceArea": number;
    readonly "Vertices": Object;
    readonly "VertexPositions": Object;
    readonly "Edges": Object;
    readonly "Faces": Object;
    readonly "FacePlanes": Object;
    "Flags": number;
    readonly "RegionSVM": CRegionSVM;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnHull_t(ptr_or_class: string|AnySDKClass): RnHull_t;

declare interface RnMeshDesc_t {
    readonly "Mesh": RnMesh_t;
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnMeshDesc_t(ptr_or_class: string|AnySDKClass): RnMeshDesc_t;

declare interface RnMesh_t {
    "Min": Vector;
    "Max": Vector;
    readonly "Nodes": Object;
    readonly "Triangles": Object;
    readonly "Wings": Object;
    readonly "Materials": Object;
    "OrthographicAreas": Vector;
    "Flags": number;
    "DebugFlags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnMesh_t(ptr_or_class: string|AnySDKClass): RnMesh_t;

declare interface RnNode_t {
    "Min": Vector;
    "Children": number;
    "Max": Vector;
    "TriangleOffset": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnNode_t(ptr_or_class: string|AnySDKClass): RnNode_t;

declare interface RnPlane_t {
    "Normal": Vector;
    "Offset": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnPlane_t(ptr_or_class: string|AnySDKClass): RnPlane_t;

declare interface RnShapeDesc_t {
    "CollisionAttributeIndex": number;
    "SurfacePropertyIndex": number;
    "UserFriendlyName": string;
    "UserFriendlyNameSealed": boolean;
    "UserFriendlyNameLong": boolean;
    "ToolMaterialHash": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnShapeDesc_t(ptr_or_class: string|AnySDKClass): RnShapeDesc_t;

declare interface RnSoftbodyCapsule_t {
    "Center": Object;
    "Radius": number;
    "Particle": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSoftbodyCapsule_t(ptr_or_class: string|AnySDKClass): RnSoftbodyCapsule_t;

declare interface RnSoftbodyParticle_t {
    "MassInv": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSoftbodyParticle_t(ptr_or_class: string|AnySDKClass): RnSoftbodyParticle_t;

declare interface RnSoftbodySpring_t {
    "Particle": Object;
    "Length": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSoftbodySpring_t(ptr_or_class: string|AnySDKClass): RnSoftbodySpring_t;

declare interface RnSphereDesc_t {
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSphereDesc_t(ptr_or_class: string|AnySDKClass): RnSphereDesc_t;

declare interface RnTriangle_t {
    "Index": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnTriangle_t(ptr_or_class: string|AnySDKClass): RnTriangle_t;

declare interface RnVertex_t {
    "Edge": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnVertex_t(ptr_or_class: string|AnySDKClass): RnVertex_t;

declare interface RnWing_t {
    "Index": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnWing_t(ptr_or_class: string|AnySDKClass): RnWing_t;

declare interface VertexPositionColor_t {
    "Position": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VertexPositionColor_t(ptr_or_class: string|AnySDKClass): VertexPositionColor_t;

declare interface VertexPositionNormal_t {
    "Position": Vector;
    "Normal": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VertexPositionNormal_t(ptr_or_class: string|AnySDKClass): VertexPositionNormal_t;

declare interface CTestDomainDerived_Cursor {
    "CursorValueA": number;
    "CursorValueB": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTestDomainDerived_Cursor(ptr_or_class: string|AnySDKClass): CTestDomainDerived_Cursor;

declare interface FakeEntityDerivedA_tAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FakeEntityDerivedA_tAPI(ptr_or_class: string|AnySDKClass): FakeEntityDerivedA_tAPI;

declare interface FakeEntityDerivedB_tAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FakeEntityDerivedB_tAPI(ptr_or_class: string|AnySDKClass): FakeEntityDerivedB_tAPI;

declare interface FakeEntity_tAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FakeEntity_tAPI(ptr_or_class: string|AnySDKClass): FakeEntity_tAPI;

declare interface IGapHost_Cursor {
    readonly "Parent": IGapHost_ExecLog;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_Cursor(ptr_or_class: string|AnySDKClass): IGapHost_Cursor;

declare interface IGapHost_ExecLog {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_ExecLog(ptr_or_class: string|AnySDKClass): IGapHost_ExecLog;

declare interface IGapHost_YieldingCursor {
    readonly "Parent": IGapHost_Cursor;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_YieldingCursor(ptr_or_class: string|AnySDKClass): IGapHost_YieldingCursor;

declare interface SignatureOutflow_Continue {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SignatureOutflow_Continue(ptr_or_class: string|AnySDKClass): SignatureOutflow_Continue;

declare interface SignatureOutflow_Resume {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SignatureOutflow_Resume(ptr_or_class: string|AnySDKClass): SignatureOutflow_Resume;

declare interface RenderInputLayoutField_t {
    "SemanticName": Object;
    "SemanticIndex": number;
    "Format": number;
    "Offset": number;
    "Slot": number;
    "SlotType": number;
    "InstanceStepRate": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RenderInputLayoutField_t(ptr_or_class: string|AnySDKClass): RenderInputLayoutField_t;

declare interface VsInputSignatureElement_t {
    "Name": string;
    "Semantic": string;
    "D3DSemanticName": string;
    "D3DSemanticIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VsInputSignatureElement_t(ptr_or_class: string|AnySDKClass): VsInputSignatureElement_t;

declare interface VsInputSignature_t {
    readonly "Elems": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VsInputSignature_t(ptr_or_class: string|AnySDKClass): VsInputSignature_t;

declare interface CExampleSchemaVData_Monomorphic {
    "Example1": number;
    "Example2": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_Monomorphic(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_Monomorphic;

declare interface CExampleSchemaVData_PolymorphicBase {
    "Base": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_PolymorphicBase(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_PolymorphicBase;

declare interface CExampleSchemaVData_PolymorphicDerivedA {
    "DerivedA": number;
    readonly "Parent": CExampleSchemaVData_PolymorphicBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_PolymorphicDerivedA(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_PolymorphicDerivedA;

declare interface CExampleSchemaVData_PolymorphicDerivedB {
    "DerivedB": number;
    readonly "Parent": CExampleSchemaVData_PolymorphicBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_PolymorphicDerivedB(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_PolymorphicDerivedB;

declare interface ResourceId_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ResourceId_t(ptr_or_class: string|AnySDKClass): ResourceId_t;

declare interface ManifestTestResource_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ManifestTestResource_t(ptr_or_class: string|AnySDKClass): ManifestTestResource_t;

declare interface TestResource_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TestResource_t(ptr_or_class: string|AnySDKClass): TestResource_t;

declare interface CSSDSEndFrameViewInfo {
    "ViewId": number;
    "ViewName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSEndFrameViewInfo(ptr_or_class: string|AnySDKClass): CSSDSEndFrameViewInfo;

declare interface CSSDSMsg_EndFrame {
    readonly "Views": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_EndFrame(ptr_or_class: string|AnySDKClass): CSSDSMsg_EndFrame;

declare interface CSSDSMsg_LayerBase {
    readonly "ViewId": SceneViewId_t;
    "ViewName": string;
    "LayerIndex": number;
    "LayerId": number;
    "LayerName": string;
    "DisplayText": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_LayerBase(ptr_or_class: string|AnySDKClass): CSSDSMsg_LayerBase;

declare interface CSSDSMsg_PostLayer {
    readonly "Parent": CSSDSMsg_LayerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_PostLayer(ptr_or_class: string|AnySDKClass): CSSDSMsg_PostLayer;

declare interface CSSDSMsg_PreLayer {
    readonly "Parent": CSSDSMsg_LayerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_PreLayer(ptr_or_class: string|AnySDKClass): CSSDSMsg_PreLayer;

declare interface CSSDSMsg_ViewRender {
    readonly "ViewId": SceneViewId_t;
    "ViewName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_ViewRender(ptr_or_class: string|AnySDKClass): CSSDSMsg_ViewRender;

declare interface CSSDSMsg_ViewTarget {
    "Name": string;
    "TextureId": number;
    "Width": number;
    "Height": number;
    "RequestedWidth": number;
    "RequestedHeight": number;
    "NumMipLevels": number;
    "Depth": number;
    "MultisampleNumSamples": number;
    "Format": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_ViewTarget(ptr_or_class: string|AnySDKClass): CSSDSMsg_ViewTarget;

declare interface CSSDSMsg_ViewTargetList {
    readonly "ViewId": SceneViewId_t;
    "ViewName": string;
    readonly "Targets": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_ViewTargetList(ptr_or_class: string|AnySDKClass): CSSDSMsg_ViewTargetList;

declare interface SceneViewId_t {
    "ViewId": number;
    "FrameCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SceneViewId_t(ptr_or_class: string|AnySDKClass): SceneViewId_t;

declare interface AutoRoomDoorwayPairs_t {
    "P1": Vector;
    "P2": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AutoRoomDoorwayPairs_t(ptr_or_class: string|AnySDKClass): AutoRoomDoorwayPairs_t;

declare interface CAISound {
    "SoundType": number;
    "SoundFlags": number;
    "Volume": number;
    "SoundIndex": number;
    "Duration": number;
    "ProxyEntityName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAISound(ptr_or_class: string|AnySDKClass): CAISound;

declare interface CAI_ChangeHintGroup {
    "SearchType": number;
    "StrSearchName": string;
    "StrNewHintGroup": string;
    "Radius": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAI_ChangeHintGroup(ptr_or_class: string|AnySDKClass): CAI_ChangeHintGroup;

declare interface CAI_Expresser {
    "StopTalkTime": number;
    "StopTalkTimeWithoutDelay": number;
    "BlockedTalkTime": number;
    "VoicePitch": number;
    "LastTimeAcceptedSpeak": number;
    "AllowSpeakingInterrupts": boolean;
    "ConsiderSceneInvolvementAsSpeech": boolean;
    "SceneEntityDisabled": boolean;
    "LastSpokenPriority": number;
    readonly "Outer": CBaseFlex;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAI_Expresser(ptr_or_class: string|AnySDKClass): CAI_Expresser;

declare interface CAI_ExpresserWithFollowup {
    readonly "PostponedFollowup": ResponseFollowup;
    readonly "Parent": CAI_Expresser;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAI_ExpresserWithFollowup(ptr_or_class: string|AnySDKClass): CAI_ExpresserWithFollowup;

declare interface CAK47 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAK47(ptr_or_class: string|AnySDKClass): CAK47;

declare interface CAmbientGeneric {
    "Radius": number;
    "MaxRadius": number;
    "SoundLevel": number;
    readonly "Dpv": dynpitchvol_t;
    "Active": boolean;
    "Looping": boolean;
    "Sound": string;
    "SourceEntName": string;
    readonly "SoundSource": CBaseEntity;
    "SoundSourceEntIndex": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAmbientGeneric(ptr_or_class: string|AnySDKClass): CAmbientGeneric;

declare interface CAttributeContainer {
    readonly "Item": CEconItemView;
    readonly "Parent": CAttributeManager;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAttributeContainer(ptr_or_class: string|AnySDKClass): CAttributeContainer;

declare interface CBarnLight {
    "Enabled": boolean;
    "ColorMode": number;
    "Color": Color;
    "ColorTemperature": number;
    "Brightness": number;
    "BrightnessScale": number;
    "DirectLight": number;
    "BakedShadowIndex": number;
    "LuminaireShape": number;
    "LuminaireSize": number;
    "LuminaireAnisotropy": number;
    "LightStyleString": string;
    "LightStyleStartTime": number;
    readonly "QueuedLightStyleStrings": Object;
    readonly "LightStyleEvents": Object;
    readonly "StyleEvent": Object;
    "Shape": number;
    "SoftX": number;
    "SoftY": number;
    "Skirt": number;
    "SkirtNear": number;
    "SizeParams": Vector;
    "Range": number;
    "Shear": Vector;
    "BakeSpecularToCubemaps": number;
    "BakeSpecularToCubemapsSize": Vector;
    "CastShadows": number;
    "ShadowMapSize": number;
    "ShadowPriority": number;
    "ContactShadow": boolean;
    "BounceLight": number;
    "BounceScale": number;
    "MinRoughness": number;
    "AlternateColor": Vector;
    "AlternateColorBrightness": number;
    "Fog": number;
    "FogStrength": number;
    "FogShadows": number;
    "FogScale": number;
    "FogMixedShadows": boolean;
    "FadeSizeStart": number;
    "FadeSizeEnd": number;
    "ShadowFadeSizeStart": number;
    "ShadowFadeSizeEnd": number;
    "PrecomputedFieldsValid": boolean;
    "PrecomputedBoundsMins": Vector;
    "PrecomputedBoundsMaxs": Vector;
    "PrecomputedOBBOrigin": Vector;
    "PrecomputedOBBAngles": QAngle;
    "PrecomputedOBBExtent": Vector;
    "PrecomputedSubFrusta": number;
    "PrecomputedOBBOrigin0": Vector;
    "PrecomputedOBBAngles0": QAngle;
    "PrecomputedOBBExtent0": Vector;
    "PrecomputedOBBOrigin1": Vector;
    "PrecomputedOBBAngles1": QAngle;
    "PrecomputedOBBExtent1": Vector;
    "PrecomputedOBBOrigin2": Vector;
    "PrecomputedOBBAngles2": QAngle;
    "PrecomputedOBBExtent2": Vector;
    "PrecomputedOBBOrigin3": Vector;
    "PrecomputedOBBAngles3": QAngle;
    "PrecomputedOBBExtent3": Vector;
    "PrecomputedOBBOrigin4": Vector;
    "PrecomputedOBBAngles4": QAngle;
    "PrecomputedOBBExtent4": Vector;
    "PrecomputedOBBOrigin5": Vector;
    "PrecomputedOBBAngles5": QAngle;
    "PrecomputedOBBExtent5": Vector;
    "PvsModifyEntity": boolean;
    readonly "VisClusters": Object;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBarnLight(ptr_or_class: string|AnySDKClass): CBarnLight;

declare interface CBaseButton {
    "MoveEntitySpace": QAngle;
    "StayPushed": boolean;
    "Rotating": boolean;
    readonly "Ls": locksound_t;
    "UseSound": string;
    "LockedSound": string;
    "UnlockedSound": string;
    "OverrideAnticipationName": string;
    "Locked": boolean;
    "Disabled": boolean;
    "UseLockedTime": number;
    "SolidBsp": boolean;
    readonly "OnDamaged": CEntityIOOutput;
    readonly "OnPressed": CEntityIOOutput;
    readonly "OnUseLocked": CEntityIOOutput;
    readonly "OnIn": CEntityIOOutput;
    readonly "OnOut": CEntityIOOutput;
    "State": number;
    readonly "Constraint": CEntityInstance;
    readonly "ConstraintParent": CEntityInstance;
    "ForceNpcExclude": boolean;
    "GlowEntity": string;
    readonly "GlowEntity1": CBaseModelEntity;
    "Usable": boolean;
    "DisplayText": string;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseButton(ptr_or_class: string|AnySDKClass): CBaseButton;

declare interface CBaseCSGrenade {
    "Redraw": boolean;
    "IsHeldByPlayer": boolean;
    "PinPulled": boolean;
    "JumpThrow": boolean;
    "ThrowAnimating": boolean;
    "ThrowTime": number;
    "ThrowStrength": number;
    "ThrowStrengthApproach": number;
    "DropTime": number;
    "PinPullTime": number;
    "JustPulledPin": boolean;
    "NextHoldTick": number;
    "NextHoldFrac": number;
    readonly "SwitchToWeaponAfterThrow": CCSWeaponBase;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseCSGrenade(ptr_or_class: string|AnySDKClass): CBaseCSGrenade;

declare interface CBaseCSGrenadeProjectile {
    "InitialPosition": Vector;
    "InitialVelocity": Vector;
    "Bounces": number;
    "ExplodeEffectTickBegin": number;
    "ExplodeEffectOrigin": Vector;
    "SpawnTime": number;
    "OGSExtraFlags": number;
    "DetonationRecorded": boolean;
    "ItemIndex": number;
    "OriginalSpawnLocation": Vector;
    "LastBounceSoundTime": number;
    "GrenadeSpin": Vector;
    "LastHitSurfaceNormal": Vector;
    "TicksAtZeroVelocity": number;
    "HasEverHitEnemy": boolean;
    readonly "Parent": CBaseGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseCSGrenadeProjectile(ptr_or_class: string|AnySDKClass): CBaseCSGrenadeProjectile;

declare interface CBaseClientUIEntity {
    "Enabled": boolean;
    "DialogXMLName": string;
    "PanelClassName": string;
    "PanelID": string;
    readonly "CustomOutput0": CEntityIOOutput;
    readonly "CustomOutput1": CEntityIOOutput;
    readonly "CustomOutput2": CEntityIOOutput;
    readonly "CustomOutput3": CEntityIOOutput;
    readonly "CustomOutput4": CEntityIOOutput;
    readonly "CustomOutput5": CEntityIOOutput;
    readonly "CustomOutput6": CEntityIOOutput;
    readonly "CustomOutput7": CEntityIOOutput;
    readonly "CustomOutput8": CEntityIOOutput;
    readonly "CustomOutput9": CEntityIOOutput;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseClientUIEntity(ptr_or_class: string|AnySDKClass): CBaseClientUIEntity;

declare interface CBaseCombatCharacter {
    "ForceServerRagdoll": boolean;
    "ImpactEnergyScale": number;
    "ApplyStressDamage": boolean;
    "DamageCount": number;
    readonly "VecRelationships": Object;
    "StrRelationships": string;
    "Hull": number;
    "NavHullIdx": number;
    readonly "Parent": CBaseFlex;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseCombatCharacter(ptr_or_class: string|AnySDKClass): CBaseCombatCharacter;

declare interface CBaseDMStart {
    "Master": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseDMStart(ptr_or_class: string|AnySDKClass): CBaseDMStart;

declare interface CBaseDoor {
    "MoveEntitySpace": QAngle;
    "MoveDirParentSpace": Vector;
    readonly "Ls": locksound_t;
    "ForceClosed": boolean;
    "DoorGroup": boolean;
    "Locked": boolean;
    "IgnoreDebris": boolean;
    "SpawnPosition": number;
    "BlockDamage": number;
    "NoiseMoving": string;
    "NoiseArrived": string;
    "NoiseMovingClosed": string;
    "NoiseArrivedClosed": string;
    "ChainTarget": string;
    readonly "OnBlockedClosing": CEntityIOOutput;
    readonly "OnBlockedOpening": CEntityIOOutput;
    readonly "OnUnblockedClosing": CEntityIOOutput;
    readonly "OnUnblockedOpening": CEntityIOOutput;
    readonly "OnFullyClosed": CEntityIOOutput;
    readonly "OnFullyOpen": CEntityIOOutput;
    readonly "OnClose": CEntityIOOutput;
    readonly "OnOpen": CEntityIOOutput;
    readonly "OnLockedUse": CEntityIOOutput;
    "LoopMoveSound": boolean;
    "CreateNavObstacle": boolean;
    "IsChaining": boolean;
    "IsUsable": boolean;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseDoor(ptr_or_class: string|AnySDKClass): CBaseDoor;

declare interface CBaseEntity {
    readonly "CBodyComponent": CBodyComponent;
    readonly "NetworkTransmitComponent": CNetworkTransmitComponent;
    readonly "ThinkFunctions": Object;
    "CurrentThinkContext": number;
    "LastThinkTick": number;
    "DisabledContextThinks": boolean;
    "IsSteadyState": any;
    "LastNetworkChange": number;
    readonly "ResponseContexts": Object;
    "ResponseContext": string;
    "Health": number;
    "MaxHealth": number;
    "LifeState": number;
    "DamageAccumulator": number;
    "TakesDamage": boolean;
    "TakeDamageFlags": number;
    "PlatformType": number;
    "MoveCollide": number;
    "MoveType": number;
    "ActualMoveType": number;
    "WaterTouch": number;
    "SlimeTouch": number;
    "RestoreInHierarchy": boolean;
    "Target": string;
    readonly "DamageFilter": CBaseFilter;
    "DamageFilterName": string;
    "MoveDoneTime": number;
    "SubclassID": number;
    "AnimTime": number;
    "SimulationTime": number;
    "CreateTime": number;
    "ClientSideRagdoll": boolean;
    "InterpolationFrame": number;
    "PrevVPhysicsUpdatePos": Vector;
    "TeamNum": number;
    "Globalname": string;
    "SentToClients": number;
    "Speed": number;
    "UniqueHammerID": string;
    "Spawnflags": number;
    "NextThinkTick": number;
    "SimulationTick": number;
    readonly "OnKilled": CEntityIOOutput;
    "Flags": number;
    "AbsVelocity": Vector;
    readonly "Velocity": CNetworkVelocityVector;
    "BaseVelocity": Vector;
    "PushEnumCount": number;
    readonly "Collision": CCollisionProperty;
    readonly "EffectEntity": CBaseEntity;
    readonly "OwnerEntity": CBaseEntity;
    "Effects": number;
    readonly "GroundEntity": CBaseEntity;
    "GroundBodyIndex": number;
    "Friction": number;
    "Elasticity": number;
    "GravityScale": number;
    "TimeScale": number;
    "WaterLevel": number;
    "AnimatedEveryTick": boolean;
    "DisableLowViolence": boolean;
    "WaterType": number;
    "EFlags": number;
    readonly "OnUser1": CEntityIOOutput;
    readonly "OnUser2": CEntityIOOutput;
    readonly "OnUser3": CEntityIOOutput;
    readonly "OnUser4": CEntityIOOutput;
    "InitialTeamNum": number;
    "NavIgnoreUntilTime": number;
    "AngVelocity": QAngle;
    "NetworkQuantizeOriginAndAngles": boolean;
    "LagCompensate": boolean;
    "OverriddenFriction": number;
    readonly "Blocker": CBaseEntity;
    "LocalTime": number;
    "VPhysicsUpdateLocalTime": number;
    "BloodType": number;
    readonly "Parent": CEntityInstance;
    EmitSound: (sound_name: string,pitch: number,volume: number) => null|undefined;
    CollisionRulesChanged: () => null|undefined;
    EHandle: () => CBaseEntity;
    Spawn: (keyvals: CEntityKeyValues|null) => null|undefined;
    Despawn: () => null|undefined;
    AcceptInput: (input: string,activator: CEntityInstance,caller: CEntityInstance,value: string,outputID: number) => null|undefined;
    GetClassname: () => string;
    GetVData: () => CEntitySubclassVDataBase;
    Teleport: (value: Vector,angle: QAngle) => null|undefined;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseEntity(ptr_or_class: string|AnySDKClass): CBaseEntity;

declare interface CBaseEntityAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseEntityAPI(ptr_or_class: string|AnySDKClass): CBaseEntityAPI;

declare interface CBaseFilter {
    "Negated": boolean;
    readonly "OnPass": CEntityIOOutput;
    readonly "OnFail": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseFilter(ptr_or_class: string|AnySDKClass): CBaseFilter;

declare interface CBaseFire {
    "Scale": number;
    "StartScale": number;
    "ScaleTime": number;
    "Flags": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseFire(ptr_or_class: string|AnySDKClass): CBaseFire;

declare interface CBaseFlex {
    readonly "FlexWeight": Object;
    "LookTargetPosition": Vector;
    "Blinktoggle": boolean;
    "AllowResponsesEndTime": number;
    "LastFlexAnimationTime": number;
    readonly "NextSceneEventId": SceneEventId_t;
    "UpdateLayerPriorities": boolean;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseFlex(ptr_or_class: string|AnySDKClass): CBaseFlex;

declare interface CBaseFlexAlias_funCBaseFlex {
    readonly "Parent": CBaseFlex;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseFlexAlias_funCBaseFlex(ptr_or_class: string|AnySDKClass): CBaseFlexAlias_funCBaseFlex;

declare interface CBaseGrenade {
    readonly "OnPlayerPickup": CEntityIOOutput;
    readonly "OnExplode": CEntityIOOutput;
    "HasWarnedAI": boolean;
    "IsSmokeGrenade": boolean;
    "IsLive": boolean;
    "DmgRadius": number;
    "DetonateTime": number;
    "WarnAITime": number;
    "Damage": number;
    "BounceSound": string;
    "ExplosionSound": string;
    readonly "Thrower": CCSPlayerPawn;
    "NextAttack": number;
    readonly "OriginalThrower": CCSPlayerPawn;
    readonly "Parent": CBaseFlex;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseGrenade(ptr_or_class: string|AnySDKClass): CBaseGrenade;

declare interface CBaseIssue {
    "TypeString": string;
    "DetailsString": string;
    "NumYesVotes": number;
    "NumNoVotes": number;
    "NumPotentialVotes": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseIssue(ptr_or_class: string|AnySDKClass): CBaseIssue;

declare interface CBaseModelEntity {
    readonly "CRenderComponent": CRenderComponent;
    readonly "CHitboxComponent": CHitboxComponent;
    "DestructiblePartInitialStateDestructed0": number;
    "DestructiblePartInitialStateDestructed1": number;
    "DestructiblePartInitialStateDestructed2": number;
    "DestructiblePartInitialStateDestructed3": number;
    "DestructiblePartInitialStateDestructed4": number;
    "LastHitDestructiblePartIndex": number;
    "LastHitGroup": number;
    "DissolveStartTime": number;
    readonly "OnIgnite": CEntityIOOutput;
    "RenderMode": number;
    "RenderFX": number;
    "AllowFadeInView": boolean;
    "Render": Color;
    readonly "RenderAttributes": Object;
    "RenderToCubemaps": boolean;
    "NoInterpolate": boolean;
    readonly "Collision": CCollisionProperty;
    readonly "Glow": CGlowProperty;
    "GlowBackfaceMult": number;
    "FadeMinDist": number;
    "FadeMaxDist": number;
    "FadeScale": number;
    "ShadowStrength": number;
    "ObjectCulling": number;
    "AddDecal": number;
    "DecalPosition": Vector;
    "DecalForwardAxis": Vector;
    "DecalHealBloodRate": number;
    "DecalHealHeightRate": number;
    readonly "ViewOffset": CNetworkViewOffsetVector;
    readonly "Parent": CBaseEntity;
    SetBodygroup: (str: string,val: any) => null|undefined;
    SetModel: (model: string) => null|undefined;
    SetSolidType: (solidType: number) => null|undefined;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseModelEntity(ptr_or_class: string|AnySDKClass): CBaseModelEntity;

declare interface CBaseMoveBehavior {
    "PositionInterpolator": number;
    "RotationInterpolator": number;
    "AnimStartTime": number;
    "AnimEndTime": number;
    "AverageSpeedAcrossFrame": number;
    readonly "CurrentKeyFrame": CPathKeyFrame;
    readonly "TargetKeyFrame": CPathKeyFrame;
    readonly "PreKeyFrame": CPathKeyFrame;
    readonly "PostKeyFrame": CPathKeyFrame;
    "TimeIntoFrame": number;
    "Direction": number;
    readonly "Parent": CPathKeyFrame;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseMoveBehavior(ptr_or_class: string|AnySDKClass): CBaseMoveBehavior;

declare interface CBasePlatTrain {
    "NoiseMoving": string;
    "NoiseArrived": string;
    "Volume": number;
    "TWidth": number;
    "TLength": number;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlatTrain(ptr_or_class: string|AnySDKClass): CBasePlatTrain;

declare interface CBasePlayerPawn {
    readonly "WeaponServices": CPlayer_WeaponServices;
    readonly "ItemServices": CPlayer_ItemServices;
    readonly "AutoaimServices": CPlayer_AutoaimServices;
    readonly "ObserverServices": CPlayer_ObserverServices;
    readonly "WaterServices": CPlayer_WaterServices;
    readonly "UseServices": CPlayer_UseServices;
    readonly "FlashlightServices": CPlayer_FlashlightServices;
    readonly "CameraServices": CPlayer_CameraServices;
    readonly "MovementServices": CPlayer_MovementServices;
    readonly "ServerViewAngleChanges": Object;
    "HighestGeneratedServerViewAngleChangeIndex": number;
    "_angle": QAngle;
    "_anglePrevious": QAngle;
    "HideHUD": number;
    readonly "Skybox3d": sky3dparams_t;
    "TimeLastHurt": number;
    "DeathTime": number;
    "NextSuicideTime": number;
    "InitHUD": boolean;
    readonly "Expresser": CAI_Expresser;
    readonly "Controller": CBasePlayerController;
    "HltvReplayDelay": number;
    "HltvReplayEnd": number;
    "HltvReplayEntity": number;
    readonly "SndOpvarLatchData": Object;
    readonly "Parent": CBaseCombatCharacter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerPawn(ptr_or_class: string|AnySDKClass): CBasePlayerPawn;

declare interface CBasePlayerWeapon {
    "NextPrimaryAttackTick": number;
    "NextPrimaryAttackTickRatio": number;
    "NextSecondaryAttackTick": number;
    "NextSecondaryAttackTickRatio": number;
    "Clip1": number;
    "Clip2": number;
    "ReserveAmmo": Object;
    readonly "OnPlayerUse": CEntityIOOutput;
    readonly "Parent": CEconEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerWeapon(ptr_or_class: string|AnySDKClass): CBasePlayerWeapon;

declare interface CBasePropDoor {
    "AutoReturnDelay": number;
    "HardwareType": number;
    "NeedsHardware": boolean;
    "DoorState": number;
    "Locked": boolean;
    "ClosedPosition": Vector;
    "ClosedAngles": QAngle;
    readonly "Blocker": CBaseEntity;
    "FirstBlocked": boolean;
    readonly "Ls": locksound_t;
    "ForceClosed": boolean;
    "LatchWorldPosition": Vector;
    readonly "Activator": CBaseEntity;
    "SoundMoving": string;
    "SoundOpen": string;
    "SoundClose": string;
    "SoundLock": string;
    "SoundUnlock": string;
    "SoundLatch": string;
    "SoundPound": string;
    "SoundJiggle": string;
    "SoundLockedAnim": string;
    "NumCloseAttempts": number;
    "PhysicsMaterial": number;
    "SlaveName": string;
    readonly "Master": CBasePropDoor;
    readonly "OnBlockedClosing": CEntityIOOutput;
    readonly "OnBlockedOpening": CEntityIOOutput;
    readonly "OnUnblockedClosing": CEntityIOOutput;
    readonly "OnUnblockedOpening": CEntityIOOutput;
    readonly "OnFullyClosed": CEntityIOOutput;
    readonly "OnFullyOpen": CEntityIOOutput;
    readonly "OnClose": CEntityIOOutput;
    readonly "OnOpen": CEntityIOOutput;
    readonly "OnLockedUse": CEntityIOOutput;
    readonly "OnAjarOpen": CEntityIOOutput;
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePropDoor(ptr_or_class: string|AnySDKClass): CBasePropDoor;

declare interface CBaseToggle {
    "Toggle_state": number;
    "MoveDistance": number;
    "Wait": number;
    "Lip": number;
    "AlwaysFireBlockedOutputs": boolean;
    "Position1": Vector;
    "Position2": Vector;
    "MoveAng": QAngle;
    "Angle1": QAngle;
    "Angle2": QAngle;
    "Height": number;
    readonly "Activator": CBaseEntity;
    "FinalDest": Vector;
    "FinalAngle": QAngle;
    "MovementType": number;
    "Master": string;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseToggle(ptr_or_class: string|AnySDKClass): CBaseToggle;

declare interface CBaseTrigger {
    "Disabled": boolean;
    "FilterName": string;
    readonly "Filter": CBaseFilter;
    readonly "OnStartTouch": CEntityIOOutput;
    readonly "OnStartTouchAll": CEntityIOOutput;
    readonly "OnEndTouch": CEntityIOOutput;
    readonly "OnEndTouchAll": CEntityIOOutput;
    readonly "OnTouching": CEntityIOOutput;
    readonly "OnTouchingEachEntity": CEntityIOOutput;
    readonly "OnNotTouching": CEntityIOOutput;
    "ClientSidePredicted": boolean;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseTrigger(ptr_or_class: string|AnySDKClass): CBaseTrigger;

declare interface CBaseViewModel {
    "LastFacing": Vector;
    "ViewModelIndex": number;
    "AnimationParity": number;
    "AnimationStartTime": number;
    readonly "Weapon": CBasePlayerWeapon;
    "VMName": string;
    "AnimationPrefix": string;
    "OldLayerSequence": number;
    "OldLayer": number;
    "OldLayerStartTime": number;
    readonly "ControlPanel": CBaseEntity;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseViewModel(ptr_or_class: string|AnySDKClass): CBaseViewModel;

declare interface CBeam {
    "FrameRate": number;
    "HDRColorScale": number;
    "FireTime": number;
    "Damage": number;
    "NumBeamEnts": number;
    "BeamType": number;
    "BeamFlags": number;
    readonly "AttachEntity": Object;
    "Width": number;
    "EndWidth": number;
    "FadeLength": number;
    "HaloScale": number;
    "Amplitude": number;
    "StartFrame": number;
    "Speed": number;
    "Frame": number;
    "ClipStyle": number;
    "TurnedOff": boolean;
    "EndPos": Vector;
    readonly "EndEntity": CBaseEntity;
    "DissolveType": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBeam(ptr_or_class: string|AnySDKClass): CBeam;

declare interface CBlood {
    "SprayAngles": QAngle;
    "SprayDir": Vector;
    "Amount": number;
    "Color": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlood(ptr_or_class: string|AnySDKClass): CBlood;

declare interface CBot {
    readonly "Controller": CCSPlayerController;
    readonly "Player": CCSPlayerPawn;
    "HasSpawned": boolean;
    "Id": number;
    "IsRunning": boolean;
    "IsCrouching": boolean;
    "ForwardSpeed": number;
    "LeftSpeed": number;
    "VerticalSpeed": number;
    "ButtonFlags": number;
    "JumpTimestamp": number;
    "ViewForward": Vector;
    "PostureStackIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBot(ptr_or_class: string|AnySDKClass): CBot;

declare interface CBreakable {
    readonly "CPropDataComponent": CPropDataComponent;
    "Material": number;
    readonly "Breaker": CBaseEntity;
    "Explosion": number;
    "SpawnObject": string;
    "PressureDelay": number;
    "MinHealthDmg": number;
    "PropData": string;
    "ImpactEnergyScale": number;
    "OverrideBlockLOS": number;
    readonly "OnBreak": CEntityIOOutput;
    "PerformanceMode": number;
    readonly "PhysicsAttacker": CBasePlayerPawn;
    "LastPhysicsInfluenceTime": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreakable(ptr_or_class: string|AnySDKClass): CBreakable;

declare interface CBreakableProp {
    readonly "CPropDataComponent": CPropDataComponent;
    readonly "OnBreak": CEntityIOOutput;
    readonly "OnTakeDamage": CEntityIOOutput;
    "ImpactEnergyScale": number;
    "MinHealthDmg": number;
    "PreferredCarryAngles": QAngle;
    "PressureDelay": number;
    "DefBurstScale": number;
    "DefBurstOffset": Vector;
    readonly "Breaker": CBaseEntity;
    "PerformanceMode": number;
    "PreventDamageBeforeTime": number;
    "BreakableContentsType": number;
    "StrBreakableContentsPropGroupOverride": string;
    "StrBreakableContentsParticleOverride": string;
    "HasBreakPiecesOrCommands": boolean;
    "ExplodeDamage": number;
    "ExplodeRadius": number;
    "ExplosionDelay": number;
    "ExplosionBuildupSound": string;
    "ExplosionCustomEffect": string;
    "ExplosionCustomSound": string;
    "ExplosionModifier": string;
    readonly "PhysicsAttacker": CBasePlayerPawn;
    "LastPhysicsInfluenceTime": number;
    "OriginalBlockLOS": boolean;
    "DefaultFadeScale": number;
    readonly "LastAttacker": CBaseEntity;
    readonly "FlareEnt": CBaseEntity;
    "UsePuntSound": boolean;
    "PuntSound": string;
    "NoGhostCollision": boolean;
    readonly "Parent": CBaseProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreakableProp(ptr_or_class: string|AnySDKClass): CBreakableProp;

declare interface CBtActionAim {
    "SensorInputKey": string;
    "AimReadyKey": string;
    "ZoomCooldownTimestamp": number;
    "DoneAiming": boolean;
    "LerpStartTime": number;
    "NextLookTargetLerpTime": number;
    "PenaltyReductionRatio": number;
    "NextLookTarget": QAngle;
    readonly "AimTimer": CountdownTimer;
    readonly "SniperHoldTimer": CountdownTimer;
    readonly "FocusIntervalTimer": CountdownTimer;
    "Acquired": boolean;
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtActionAim(ptr_or_class: string|AnySDKClass): CBtActionAim;

declare interface CBtActionCombatPositioning {
    "SensorInputKey": string;
    "IsAttackingKey": string;
    readonly "ActionTimer": CountdownTimer;
    "Crouching": boolean;
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtActionCombatPositioning(ptr_or_class: string|AnySDKClass): CBtActionCombatPositioning;

declare interface CBtActionMoveTo {
    "DestinationInputKey": string;
    "HidingSpotInputKey": string;
    "ThreatInputKey": string;
    "Destination": Vector;
    "AutoLookAdjust": boolean;
    "ComputePath": boolean;
    "DamagingAreasPenaltyCost": number;
    readonly "CheckApproximateCornersTimer": CountdownTimer;
    readonly "CheckHighPriorityItem": CountdownTimer;
    readonly "RepathTimer": CountdownTimer;
    "ArrivalEpsilon": number;
    "AdditionalArrivalEpsilon2D": number;
    "HidingSpotCheckDistanceThreshold": number;
    "NearestAreaDistanceThreshold": number;
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtActionMoveTo(ptr_or_class: string|AnySDKClass): CBtActionMoveTo;

declare interface CBtActionParachutePositioning {
    readonly "ActionTimer": CountdownTimer;
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtActionParachutePositioning(ptr_or_class: string|AnySDKClass): CBtActionParachutePositioning;

declare interface CBtNode {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNode(ptr_or_class: string|AnySDKClass): CBtNode;

declare interface CBtNodeComposite {
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeComposite(ptr_or_class: string|AnySDKClass): CBtNodeComposite;

declare interface CBtNodeCondition {
    "Negated": boolean;
    readonly "Parent": CBtNodeDecorator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeCondition(ptr_or_class: string|AnySDKClass): CBtNodeCondition;

declare interface CBtNodeConditionInactive {
    "RoundStartThresholdSeconds": number;
    "SensorInactivityThresholdSeconds": number;
    readonly "SensorInactivityTimer": CountdownTimer;
    readonly "Parent": CBtNodeCondition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeConditionInactive(ptr_or_class: string|AnySDKClass): CBtNodeConditionInactive;

declare interface CBtNodeDecorator {
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeDecorator(ptr_or_class: string|AnySDKClass): CBtNodeDecorator;

declare interface CBubbling {
    "Density": number;
    "Frequency": number;
    "State": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBubbling(ptr_or_class: string|AnySDKClass): CBubbling;

declare interface CBuyZone {
    "LegacyTeamNum": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBuyZone(ptr_or_class: string|AnySDKClass): CBuyZone;

declare interface CC4 {
    "LastValidPlayerHeldPosition": Vector;
    "LastValidDroppedPosition": Vector;
    "DoValidDroppedPositionCheck": boolean;
    "StartedArming": boolean;
    "ArmedTime": number;
    "BombPlacedAnimation": boolean;
    "IsPlantingViaUse": boolean;
    readonly "EntitySpottedState": EntitySpottedState_t;
    "SpotRules": number;
    "PlayedArmingBeeps": Object;
    "BombPlanted": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CC4(ptr_or_class: string|AnySDKClass): CC4;

declare interface CCSBot {
    "EyePosition": Vector;
    "Name": string;
    "CombatRange": number;
    "IsRogue": boolean;
    readonly "RogueTimer": CountdownTimer;
    "DiedLastRound": boolean;
    "SafeTime": number;
    "WasSafe": boolean;
    "BlindFire": boolean;
    readonly "SurpriseTimer": CountdownTimer;
    "AllowActive": boolean;
    "IsFollowing": boolean;
    readonly "Leader": CCSPlayerPawn;
    "FollowTimestamp": number;
    "AllowAutoFollowTime": number;
    readonly "HurryTimer": CountdownTimer;
    readonly "AlertTimer": CountdownTimer;
    readonly "SneakTimer": CountdownTimer;
    readonly "PanicTimer": CountdownTimer;
    "StateTimestamp": number;
    "IsAttacking": boolean;
    "IsOpeningDoor": boolean;
    readonly "TaskEntity": CBaseEntity;
    "GoalPosition": Vector;
    readonly "GoalEntity": CBaseEntity;
    readonly "Avoid": CBaseEntity;
    "AvoidTimestamp": number;
    "IsStopping": boolean;
    "HasVisitedEnemySpawn": boolean;
    readonly "StillTimer": IntervalTimer;
    "EyeAnglesUnderPathFinderControl": boolean;
    "PathIndex": number;
    "AreaEnteredTimestamp": number;
    readonly "RepathTimer": CountdownTimer;
    readonly "AvoidFriendTimer": CountdownTimer;
    "IsFriendInTheWay": boolean;
    readonly "PoliteTimer": CountdownTimer;
    "IsWaitingBehindFriend": boolean;
    "PathLadderEnd": number;
    readonly "MustRunTimer": CountdownTimer;
    readonly "WaitTimer": CountdownTimer;
    readonly "UpdateTravelDistanceTimer": CountdownTimer;
    "PlayerTravelDistance": Object;
    "TravelDistancePhase": number;
    "HostageEscortCount": number;
    "HostageEscortCountTimestamp": number;
    "DesiredTeam": number;
    "HasJoined": boolean;
    "IsWaitingForHostage": boolean;
    readonly "InhibitWaitingForHostageTimer": CountdownTimer;
    readonly "WaitForHostageTimer": CountdownTimer;
    "NoisePosition": Vector;
    "NoiseTravelDistance": number;
    "NoiseTimestamp": number;
    readonly "NoiseSource": CCSPlayerPawn;
    readonly "NoiseBendTimer": CountdownTimer;
    "BentNoisePosition": Vector;
    "BendNoisePositionValid": boolean;
    "LookAroundStateTimestamp": number;
    "LookAheadAngle": number;
    "ForwardAngle": number;
    "InhibitLookAroundTimestamp": number;
    "LookAtSpot": Vector;
    "LookAtSpotDuration": number;
    "LookAtSpotTimestamp": number;
    "LookAtSpotAngleTolerance": number;
    "LookAtSpotClearIfClose": boolean;
    "LookAtSpotAttack": boolean;
    "LookAtDesc": string;
    "PeripheralTimestamp": number;
    "ApproachPointCount": number;
    "ApproachPointViewPosition": Vector;
    readonly "ViewSteadyTimer": IntervalTimer;
    readonly "TossGrenadeTimer": CountdownTimer;
    readonly "IsAvoidingGrenade": CountdownTimer;
    "SpotCheckTimestamp": number;
    "CheckedHidingSpotCount": number;
    "LookPitch": number;
    "LookPitchVel": number;
    "LookYaw": number;
    "LookYawVel": number;
    "TargetSpot": Vector;
    "TargetSpotVelocity": Vector;
    "TargetSpotPredicted": Vector;
    "AimError": QAngle;
    "AimGoal": QAngle;
    "TargetSpotTime": number;
    "AimFocus": number;
    "AimFocusInterval": number;
    "AimFocusNextUpdate": number;
    readonly "IgnoreEnemiesTimer": CountdownTimer;
    readonly "Enemy": CCSPlayerPawn;
    "IsEnemyVisible": boolean;
    "VisibleEnemyParts": number;
    "LastEnemyPosition": Vector;
    "LastSawEnemyTimestamp": number;
    "FirstSawEnemyTimestamp": number;
    "CurrentEnemyAcquireTimestamp": number;
    "EnemyDeathTimestamp": number;
    "FriendDeathTimestamp": number;
    "IsLastEnemyDead": boolean;
    "NearbyEnemyCount": number;
    readonly "Bomber": CCSPlayerPawn;
    "NearbyFriendCount": number;
    readonly "ClosestVisibleFriend": CCSPlayerPawn;
    readonly "ClosestVisibleHumanFriend": CCSPlayerPawn;
    readonly "AttentionInterval": IntervalTimer;
    readonly "Attacker": CCSPlayerPawn;
    "AttackedTimestamp": number;
    readonly "BurnedByFlamesTimer": IntervalTimer;
    "LastVictimID": number;
    "IsAimingAtEnemy": boolean;
    "IsRapidFiring": boolean;
    readonly "EquipTimer": IntervalTimer;
    readonly "ZoomTimer": CountdownTimer;
    "FireWeaponTimestamp": number;
    readonly "LookForWeaponsOnGroundTimer": CountdownTimer;
    "IsSleeping": boolean;
    "IsEnemySniperVisible": boolean;
    readonly "SawEnemySniperTimer": CountdownTimer;
    "EnemyQueueIndex": number;
    "EnemyQueueCount": number;
    "EnemyQueueAttendIndex": number;
    "IsStuck": boolean;
    "StuckTimestamp": number;
    "StuckSpot": Vector;
    readonly "WiggleTimer": CountdownTimer;
    readonly "StuckJumpTimer": CountdownTimer;
    "NextCleanupCheckTimestamp": number;
    "AvgVel": Object;
    "AvgVelIndex": number;
    "AvgVelCount": number;
    "LastOrigin": Vector;
    "LastRadioRecievedTimestamp": number;
    "LastRadioSentTimestamp": number;
    readonly "RadioSubject": CCSPlayerPawn;
    "RadioPosition": Vector;
    "VoiceEndTimestamp": number;
    "LastValidReactionQueueFrame": number;
    readonly "Parent": CBot;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSBot(ptr_or_class: string|AnySDKClass): CCSBot;

declare interface CCSGOViewModel {
    "ShouldIgnoreOffsetAndAccuracy": boolean;
    readonly "Parent": CPredictedViewModel;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGOViewModel(ptr_or_class: string|AnySDKClass): CCSGOViewModel;

declare interface CCSGO_TeamIntroCharacterPosition {
    readonly "Parent": CCSGO_TeamPreviewCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamIntroCharacterPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamIntroCharacterPosition;

declare interface CCSGO_TeamIntroCounterTerroristPosition {
    readonly "Parent": CCSGO_TeamIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamIntroCounterTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamIntroCounterTerroristPosition;

declare interface CCSGO_TeamIntroTerroristPosition {
    readonly "Parent": CCSGO_TeamIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamIntroTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamIntroTerroristPosition;

declare interface CCSGO_TeamPreviewCharacterPosition {
    "Variant": number;
    "Random": number;
    "Ordinal": number;
    "WeaponName": string;
    "Xuid": number;
    readonly "AgentItem": CEconItemView;
    readonly "GlovesItem": CEconItemView;
    readonly "WeaponItem": CEconItemView;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamPreviewCharacterPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamPreviewCharacterPosition;

declare interface CCSGO_TeamSelectCharacterPosition {
    readonly "Parent": CCSGO_TeamPreviewCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamSelectCharacterPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamSelectCharacterPosition;

declare interface CCSGO_TeamSelectCounterTerroristPosition {
    readonly "Parent": CCSGO_TeamSelectCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamSelectCounterTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamSelectCounterTerroristPosition;

declare interface CCSGO_TeamSelectTerroristPosition {
    readonly "Parent": CCSGO_TeamSelectCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamSelectTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamSelectTerroristPosition;

declare interface CCSGameRules {
    "FreezePeriod": boolean;
    "WarmupPeriod": boolean;
    "WarmupPeriodEnd": number;
    "WarmupPeriodStart": number;
    "ServerPaused": boolean;
    "TerroristTimeOutActive": boolean;
    "CTTimeOutActive": boolean;
    "TerroristTimeOutRemaining": number;
    "CTTimeOutRemaining": number;
    "TerroristTimeOuts": number;
    "CTTimeOuts": number;
    "TechnicalTimeOut": boolean;
    "MatchWaitingForResume": boolean;
    "RoundTime": number;
    "MatchStartTime": number;
    "RoundStartTime": number;
    "RestartRoundTime": number;
    "GameRestart": boolean;
    "GameStartTime": number;
    "TimeUntilNextPhaseStarts": number;
    "GamePhase": number;
    "TotalRoundsPlayed": number;
    "RoundsPlayedThisPhase": number;
    "OvertimePlaying": number;
    "HostagesRemaining": number;
    "AnyHostageReached": boolean;
    "MapHasBombTarget": boolean;
    "MapHasRescueZone": boolean;
    "MapHasBuyZone": boolean;
    "IsQueuedMatchmaking": boolean;
    "QueuedMatchmakingMode": number;
    "IsValveDS": boolean;
    "LogoMap": boolean;
    "PlayAllStepSoundsOnServer": boolean;
    "SpectatorSlotCount": number;
    "MatchDevice": number;
    "HasMatchStarted": boolean;
    "NextMapInMapgroup": number;
    "TournamentEventName": string;
    "TournamentEventStage": string;
    "MatchStatTxt": string;
    "TournamentPredictionsTxt": string;
    "TournamentPredictionsPct": number;
    "CMMItemDropRevealStartTime": number;
    "CMMItemDropRevealEndTime": number;
    "IsDroppingItems": boolean;
    "IsQuestEligible": boolean;
    "IsHltvActive": boolean;
    "ProhibitedItemIndices": Object;
    "TournamentActiveCasterAccounts": Object;
    "NumBestOfMaps": number;
    "HalloweenMaskListSeed": number;
    "BombDropped": boolean;
    "BombPlanted": boolean;
    "RoundWinStatus": number;
    "RoundWinReason": number;
    "TCantBuy": boolean;
    "CTCantBuy": boolean;
    "MatchStats_RoundResults": Object;
    "MatchStats_PlayersAlive_CT": Object;
    "MatchStats_PlayersAlive_T": Object;
    "TeamRespawnWaveTimes": Object;
    "NextRespawnWave": Object;
    "ServerQuestID": number;
    "MinimapMins": Vector;
    "MinimapMaxs": Vector;
    "MinimapVerticalSectionHeights": Object;
    "SpawnedTerrorHuntHeavy": boolean;
    "EndMatchMapGroupVoteTypes": Object;
    "EndMatchMapGroupVoteOptions": Object;
    "EndMatchMapVoteWinner": number;
    "NumConsecutiveCTLoses": number;
    "NumConsecutiveTerroristLoses": number;
    "HasHostageBeenTouched": boolean;
    "IntermissionStartTime": number;
    "IntermissionEndTime": number;
    "LevelInitialized": boolean;
    "TotalRoundsPlayed1": number;
    "UnBalancedRounds": number;
    "EndMatchOnRoundReset": boolean;
    "EndMatchOnThink": boolean;
    "FreezeTime": number;
    "NumTerrorist": number;
    "NumCT": number;
    "NumSpawnableTerrorist": number;
    "NumSpawnableCT": number;
    readonly "SelectedHostageSpawnIndices": Object;
    "SpawnPointsRandomSeed": number;
    "FirstConnected": boolean;
    "CompleteReset": boolean;
    "PickNewTeamsOnReset": boolean;
    "ScrambleTeamsOnRestart": boolean;
    "SwapTeamsOnRestart": boolean;
    readonly "EndMatchTiedVotes": Object;
    "NeedToAskPlayersForContinueVote": boolean;
    "NumQueuedMatchmakingAccounts": number;
    "AvgPlayerRank": number;
    "QueuedMatchmakingReservationString": string;
    "NumTotalTournamentDrops": number;
    "NumSpectatorsCountMax": number;
    "NumSpectatorsCountMaxTV": number;
    "NumSpectatorsCountMaxLnk": number;
    "ForceTeamChangeSilent": boolean;
    "LoadingRoundBackupData": boolean;
    "MatchInfoShowType": number;
    "MatchInfoDecidedTime": number;
    "MTeamDMLastWinningTeamNumber": number;
    "MTeamDMLastThinkTime": number;
    "TeamDMLastAnnouncementTime": number;
    "AccountTerrorist": number;
    "AccountCT": number;
    "SpawnPointCount_Terrorist": number;
    "SpawnPointCount_CT": number;
    "MaxNumTerrorists": number;
    "MaxNumCTs": number;
    "LoserBonusMostRecentTeam": number;
    "TmNextPeriodicThink": number;
    "VoiceWonMatchBragFired": boolean;
    "WarmupNextChatNoticeTime": number;
    "HostagesRescued": number;
    "HostagesTouched": number;
    "NextHostageAnnouncement": number;
    "NoTerroristsKilled": boolean;
    "NoCTsKilled": boolean;
    "NoEnemiesKilled": boolean;
    "CanDonateWeapons": boolean;
    "FirstKillTime": number;
    "FirstBloodTime": number;
    "HostageWasInjured": boolean;
    "HostageWasKilled": boolean;
    "VoteCalled": boolean;
    "ServerVoteOnReset": boolean;
    "VoteCheckThrottle": number;
    "BuyTimeEnded": boolean;
    "LastFreezeEndBeep": number;
    "TargetBombed": boolean;
    "BombDefused": boolean;
    "MapHasBombZone": boolean;
    "MainCTSpawnPos": Vector;
    readonly "CTSpawnPointsMasterList": Object;
    readonly "TerroristSpawnPointsMasterList": Object;
    "RespawningAllRespawnablePlayers": boolean;
    "NextCTSpawnPoint": number;
    "CTSpawnPointUsedTime": number;
    "NextTerroristSpawnPoint": number;
    "TerroristSpawnPointUsedTime": number;
    readonly "CTSpawnPoints": Object;
    readonly "TerroristSpawnPoints": Object;
    "IsUnreservedGameServer": boolean;
    "AutobalanceDisplayTime": number;
    "AllowWeaponSwitch": boolean;
    "RoundTimeWarningTriggered": boolean;
    "PhaseChangeAnnouncementTime": number;
    "NextUpdateTeamClanNamesTime": number;
    "LastThinkTime": number;
    "AccumulatedRoundOffDamage": number;
    "ShorthandedBonusLastEvalRound": number;
    "MatchAbortedEarlyReason": number;
    "HasTriggeredRoundStartMusic": boolean;
    "SwitchingTeamsAtRoundReset": boolean;
    readonly "GameModeRules": CCSGameModeRules;
    readonly "PlayerResource": CBaseEntity;
    readonly "RetakeRules": CRetakeGameRules;
    "TeamLastKillUsedUniqueWeaponMatch": Object;
    "MatchEndCount": number;
    "TTeamIntroVariant": number;
    "CTTeamIntroVariant": number;
    "TeamIntroPeriod": boolean;
    "TeamIntroPeriodEnd": number;
    "PlayedTeamIntroVO": boolean;
    "RoundEndWinnerTeam": number;
    "RoundEndReason": number;
    "RoundEndShowTimerDefend": boolean;
    "RoundEndTimerTime": number;
    "RoundEndFunFactToken": string;
    "RoundEndFunFactPlayerSlot": number;
    "RoundEndFunFactData1": number;
    "RoundEndFunFactData2": number;
    "RoundEndFunFactData3": number;
    "RoundEndMessage": string;
    "RoundEndPlayerCount": number;
    "RoundEndNoMusic": boolean;
    "RoundEndLegacy": number;
    "RoundEndCount": number;
    "RoundStartRoundNumber": number;
    "RoundStartCount": number;
    "LastPerfSampleTime": number;
    readonly "Parent": CTeamplayRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameRules(ptr_or_class: string|AnySDKClass): CCSGameRules;

declare interface CCSGameRulesProxy {
    readonly "GameRules": CCSGameRules;
    readonly "Parent": CGameRulesProxy;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameRulesProxy(ptr_or_class: string|AnySDKClass): CCSGameRulesProxy;

declare interface CCSMinimapBoundary {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSMinimapBoundary(ptr_or_class: string|AnySDKClass): CCSMinimapBoundary;

declare interface CCSObserverPawn {
    readonly "Parent": CCSPlayerPawnBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserverPawn(ptr_or_class: string|AnySDKClass): CCSObserverPawn;

declare interface CCSPlace {
    "Name": string;
    readonly "Parent": CServerOnlyModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlace(ptr_or_class: string|AnySDKClass): CCSPlace;

declare interface CCSPlayerPawn {
    readonly "BulletServices": CCSPlayer_BulletServices;
    readonly "HostageServices": CCSPlayer_HostageServices;
    readonly "BuyServices": CCSPlayer_BuyServices;
    readonly "ActionTrackingServices": CCSPlayer_ActionTrackingServices;
    readonly "RadioServices": CCSPlayer_RadioServices;
    readonly "DamageReactServices": CCSPlayer_DamageReactServices;
    "CharacterDefIndex": number;
    "HasFemaleVoice": boolean;
    "StrVOPrefix": string;
    "LastPlaceName": string;
    "InHostageResetZone": boolean;
    "InBuyZone": boolean;
    "WasInBuyZone": boolean;
    "InHostageRescueZone": boolean;
    "InBombZone": boolean;
    "WasInHostageRescueZone": boolean;
    "RetakesOffering": number;
    "RetakesOfferingCard": number;
    "RetakesHasDefuseKit": boolean;
    "RetakesMVPLastRound": boolean;
    "RetakesMVPBoostItem": number;
    "RetakesMVPBoostExtraUtility": number;
    "HealthShotBoostExpirationTime": number;
    "LandingTimeSeconds": number;
    "AimPunchAngle": QAngle;
    "AimPunchAngleVel": QAngle;
    "AimPunchTickBase": number;
    "AimPunchTickFraction": number;
    readonly "AimPunchCache": Object;
    "IsBuyMenuOpen": boolean;
    "LastHeadBoneTransformIsValid": boolean;
    "LastLandTime": number;
    "OnGroundLastTick": boolean;
    "PlayerLocked": number;
    "TimeOfLastInjury": number;
    "NextSprayDecalTime": number;
    "NextSprayDecalTimeExpedited": boolean;
    "RagdollDamageBone": number;
    "RagdollDamageForce": Vector;
    "RagdollDamagePosition": Vector;
    "RagdollDamageWeaponName": string;
    "RagdollDamageHeadshot": boolean;
    "RagdollServerOrigin": Vector;
    readonly "EconGloves": CEconItemView;
    "EconGlovesChanged": number;
    "DeathEyeAngles": QAngle;
    "SkipOneHeadConstraintUpdate": boolean;
    "LeftHanded": boolean;
    "SwitchedHandednessTime": number;
    "ViewmodelOffsetX": number;
    "ViewmodelOffsetY": number;
    "ViewmodelOffsetZ": number;
    "ViewmodelFOV": number;
    "IsWalking": boolean;
    "LastGivenDefuserTime": number;
    "LastGivenBombTime": number;
    "DealtDamageToEnemyMostRecentTimestamp": number;
    "DisplayHistoryBits": number;
    "LastAttackedTeammate": number;
    "AllowAutoFollowTime": number;
    "ResetArmorNextSpawn": boolean;
    "LastKillerIndex": number;
    readonly "EntitySpottedState": EntitySpottedState_t;
    "SpotRules": number;
    "IsScoped": boolean;
    "ResumeZoom": boolean;
    "IsDefusing": boolean;
    "IsGrabbingHostage": boolean;
    "BlockingUseActionInProgress": number;
    "EmitSoundTime": number;
    "InNoDefuseArea": boolean;
    "BombSiteIndex": number;
    "WhichBombZone": number;
    "InBombZoneTrigger": boolean;
    "WasInBombZoneTrigger": boolean;
    "ShotsFired": number;
    "FlinchStack": number;
    "VelocityModifier": number;
    "HitHeading": number;
    "HitBodyPart": number;
    "TotalBulletForce": Vector;
    "WaitForNoAttack": boolean;
    "IgnoreLadderJumpTime": number;
    "KilledByHeadshot": boolean;
    "LastHitBox": number;
    "LastHealth": number;
    readonly "Bot": CCSBot;
    "BotAllowActive": boolean;
    "ThirdPersonHeading": QAngle;
    "SlopeDropOffset": number;
    "SlopeDropHeight": number;
    "HeadConstraintOffset": Vector;
    "LastPickupPriority": number;
    "LastPickupPriorityTime": number;
    "ArmorValue": number;
    "CurrentEquipmentValue": number;
    "RoundStartEquipmentValue": number;
    "FreezetimeEndEquipmentValue": number;
    "LastWeaponFireUsercmd": number;
    "IsSpawning": boolean;
    "DeathFlags": number;
    "HasDeathInfo": boolean;
    "DeathInfoTime": number;
    "DeathInfoOrigin": Vector;
    "PlayerPatchEconIndices": Object;
    "GunGameImmunityColor": Color;
    "GrenadeParameterStashTime": number;
    "GrenadeParametersStashed": boolean;
    "StashedShootAngles": QAngle;
    "StashedGrenadeThrowPosition": Vector;
    "StashedVelocity": Vector;
    "ShootAngleHistory": Object;
    "ThrowPositionHistory": Object;
    "VelocityHistory": Object;
    readonly "PredictedDamageTags": Object;
    "HighestAppliedDamageTagTick": number;
    readonly "Parent": CCSPlayerPawnBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerPawn(ptr_or_class: string|AnySDKClass): CCSPlayerPawn;

declare interface CCSPlayerPawnBase {
    readonly "CTouchExpansionComponent": CTouchExpansionComponent;
    readonly "PingServices": CCSPlayer_PingServices;
    readonly "ViewModelServices": CPlayer_ViewModelServices;
    "BlindUntilTime": number;
    "BlindStartTime": number;
    "PlayerState": number;
    "Respawning": boolean;
    "ImmuneToGunGameDamageTime": number;
    "GunGameImmunity": boolean;
    "MolotovDamageTime": number;
    "HasMovedSinceSpawn": boolean;
    "NumSpawns": number;
    "IdleTimeSinceLastAction": number;
    "NextRadarUpdateTime": number;
    "FlashDuration": number;
    "FlashMaxAlpha": number;
    "ProgressBarStartTime": number;
    "ProgressBarDuration": number;
    "EyeAngles": QAngle;
    "WasNotKilledNaturally": boolean;
    "CommittingSuicideOnTeamChange": boolean;
    readonly "OriginalController": CCSPlayerController;
    readonly "Parent": CBasePlayerPawn;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerPawnBase(ptr_or_class: string|AnySDKClass): CCSPlayerPawnBase;

declare interface CCSPlayerResource {
    "HostageAlive": Object;
    "IsHostageFollowingSomeone": Object;
    "HostageEntityIDs": Object;
    "BombsiteCenterA": Vector;
    "BombsiteCenterB": Vector;
    "HostageRescueX": Object;
    "HostageRescueY": Object;
    "HostageRescueZ": Object;
    "EndMatchNextMapAllVoted": boolean;
    "FoundGoalPositions": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerResource(ptr_or_class: string|AnySDKClass): CCSPlayerResource;

declare interface CCSPlayer_RadioServices {
    "GotHostageTalkTimer": number;
    "DefusingTalkTimer": number;
    "C4PlantTalkTimer": number;
    "RadioTokenSlots": Object;
    "IgnoreRadio": boolean;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_RadioServices(ptr_or_class: string|AnySDKClass): CCSPlayer_RadioServices;

declare interface CCSServerPointScriptEntity {
    readonly "Parent": CCSPointScriptEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSServerPointScriptEntity(ptr_or_class: string|AnySDKClass): CCSServerPointScriptEntity;

declare interface CCSSprite {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSSprite(ptr_or_class: string|AnySDKClass): CCSSprite;

declare interface CCSTeam {
    "LastRecievedShorthandedRoundBonus": number;
    "ShorthandedRoundBonusStartRound": number;
    "Surrendered": boolean;
    "TeamMatchStat": string;
    "NumMapVictories": number;
    "ScoreFirstHalf": number;
    "ScoreSecondHalf": number;
    "ScoreOvertime": number;
    "ClanTeamname": string;
    "ClanID": number;
    "TeamFlagImage": string;
    "TeamLogoImage": string;
    "NextResourceTime": number;
    "LastUpdateSentAt": number;
    readonly "Parent": CTeam;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSTeam(ptr_or_class: string|AnySDKClass): CCSTeam;

declare interface CCSWeaponBase {
    "Removeable": boolean;
    "FireSequenceStartTime": number;
    "FireSequenceStartTimeChange": number;
    "FireSequenceStartTimeAck": number;
    "PlayerFireEvent": number;
    "PlayerFireEventAttackType": number;
    "SeqIdle": number;
    "SeqFirePrimary": number;
    "SeqFireSecondary": number;
    readonly "ThirdPersonFireSequences": Object;
    "CurrentThirdPersonSequence": number;
    "SilencerBoneIndex": number;
    "ThirdPersonSequences": Object;
    "PlayerAmmoStockOnPickup": boolean;
    "RequireUseToTouch": boolean;
    "State": number;
    "LastTimeInAir": number;
    "LastDeployTime": number;
    "LastEmptySoundCmdNum": number;
    "ViewModelIndex": number;
    "ReloadsWithClips": boolean;
    "TimeWeaponIdle": number;
    "FireOnEmpty": boolean;
    readonly "OnPlayerPickup": CEntityIOOutput;
    "WeaponMode": number;
    "TurningInaccuracyDelta": number;
    "TurningInaccuracyEyeDirLast": Vector;
    "TurningInaccuracy": number;
    "AccuracyPenalty": number;
    "LastAccuracyUpdateTime": number;
    "AccuracySmoothedForZoom": number;
    "ScopeZoomEndTime": number;
    "RecoilIndex": number;
    "RecoilIndex1": number;
    "BurstMode": boolean;
    "PostponeFireReadyTicks": number;
    "PostponeFireReadyFrac": number;
    "InReload": boolean;
    "ReloadVisuallyComplete": boolean;
    "DroppedAtTime": number;
    "IsHauledBack": boolean;
    "SilencerOn": boolean;
    "TimeSilencerSwitchComplete": number;
    "OriginalTeamNumber": number;
    "MostRecentTeamNumber": number;
    "DroppedNearBuyZone": boolean;
    "NextAttackRenderTimeOffset": number;
    "CanBePickedUp": boolean;
    "UseCanOverrideNextOwnerTouchTime": boolean;
    "NextOwnerTouchTime": number;
    "NextPrevOwnerTouchTime": number;
    "NextPrevOwnerUseTime": number;
    readonly "PrevOwner": CCSPlayerPawn;
    "DropTick": number;
    "Donated": boolean;
    "LastShotTime": number;
    "WasOwnedByCT": boolean;
    "WasOwnedByTerrorist": boolean;
    "FiredOutOfAmmoEvent": boolean;
    "NumRemoveUnownedWeaponThink": number;
    readonly "IronSightController": CIronSightController;
    "IronSightMode": number;
    "LastLOSTraceFailureTime": number;
    "NumEmptyAttacks": number;
    "WatTickOffset": number;
    readonly "Parent": CBasePlayerWeapon;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSWeaponBase(ptr_or_class: string|AnySDKClass): CCSWeaponBase;

declare interface CCSWeaponBaseGun {
    "ZoomLevel": number;
    "BurstShotsRemaining": number;
    "SilencedModelIndex": number;
    "InPrecache": boolean;
    "NeedsBoltAction": boolean;
    "SkillReloadAvailable": boolean;
    "SkillReloadLiftedReloadKey": boolean;
    "SkillBoltInterruptAvailable": boolean;
    "SkillBoltLiftedFireKey": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSWeaponBaseGun(ptr_or_class: string|AnySDKClass): CCSWeaponBaseGun;

declare interface CChangeLevel {
    "MapName": string;
    "LandmarkName": string;
    readonly "OnChangeLevel": CEntityIOOutput;
    "Touched": boolean;
    "NoTouch": boolean;
    "NewChapter": boolean;
    "OnChangeLevelFired": boolean;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CChangeLevel(ptr_or_class: string|AnySDKClass): CChangeLevel;

declare interface CChicken {
    readonly "AttributeManager": CAttributeContainer;
    readonly "UpdateTimer": CountdownTimer;
    "StuckAnchor": Vector;
    readonly "StuckTimer": CountdownTimer;
    readonly "CollisionStuckTimer": CountdownTimer;
    "IsOnGround": boolean;
    "FallVelocity": Vector;
    "DesiredActivity": number;
    "CurrentActivity": number;
    readonly "ActivityTimer": CountdownTimer;
    "TurnRate": number;
    readonly "FleeFrom": CBaseEntity;
    readonly "MoveRateThrottleTimer": CountdownTimer;
    readonly "StartleTimer": CountdownTimer;
    readonly "VocalizeTimer": CountdownTimer;
    "WhenZombified": number;
    "JumpedThisFrame": boolean;
    readonly "Leader": CCSPlayerPawn;
    readonly "ReuseTimer": CountdownTimer;
    "HasBeenUsed": boolean;
    readonly "JumpTimer": CountdownTimer;
    "LastJumpTime": number;
    "InJump": boolean;
    readonly "RepathTimer": CountdownTimer;
    "PathGoal": Vector;
    "ActiveFollowStartTime": number;
    readonly "FollowMinuteTimer": CountdownTimer;
    readonly "BlockDirectionTimer": CountdownTimer;
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CChicken(ptr_or_class: string|AnySDKClass): CChicken;

declare interface CColorCorrection {
    "FadeInDuration": number;
    "FadeOutDuration": number;
    "StartFadeInWeight": number;
    "StartFadeOutWeight": number;
    "TimeStartFadeIn": number;
    "TimeStartFadeOut": number;
    "MaxWeight": number;
    "StartDisabled": boolean;
    "Enabled": boolean;
    "Master": boolean;
    "ClientSide": boolean;
    "Exclusive": boolean;
    "MinFalloff": number;
    "MaxFalloff": number;
    "CurWeight": number;
    "NetlookupFilename": string;
    "LookupFilename": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CColorCorrection(ptr_or_class: string|AnySDKClass): CColorCorrection;

declare interface CColorCorrectionVolume {
    "Enabled": boolean;
    "MaxWeight": number;
    "FadeDuration": number;
    "StartDisabled": boolean;
    "Weight": number;
    "LookupFilename": string;
    "LastEnterWeight": number;
    "LastEnterTime": number;
    "LastExitWeight": number;
    "LastExitTime": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CColorCorrectionVolume(ptr_or_class: string|AnySDKClass): CColorCorrectionVolume;

declare interface CCommentaryAuto {
    readonly "OnCommentaryNewGame": CEntityIOOutput;
    readonly "OnCommentaryMidGame": CEntityIOOutput;
    readonly "OnCommentaryMultiplayerSpawn": CEntityIOOutput;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCommentaryAuto(ptr_or_class: string|AnySDKClass): CCommentaryAuto;

declare interface CCommentarySystem {
    "CommentaryConvarsChanging": boolean;
    "CommentaryEnabledMidGame": boolean;
    "NextTeleportTime": number;
    "TeleportStage": number;
    "CheatState": boolean;
    "IsFirstSpawnGroupToLoad": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCommentarySystem(ptr_or_class: string|AnySDKClass): CCommentarySystem;

declare interface CCommentaryViewPosition {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCommentaryViewPosition(ptr_or_class: string|AnySDKClass): CCommentaryViewPosition;

declare interface CConstantForceController {
    "Linear": Vector;
    "Angular": Vector;
    "LinearSave": Vector;
    "AngularSave": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstantForceController(ptr_or_class: string|AnySDKClass): CConstantForceController;

declare interface CConstraintAnchor {
    "MassScale": number;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstraintAnchor(ptr_or_class: string|AnySDKClass): CConstraintAnchor;

declare interface CCredits {
    readonly "OnCreditsDone": CEntityIOOutput;
    "RolledOutroCredits": boolean;
    "LogoLength": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCredits(ptr_or_class: string|AnySDKClass): CCredits;

declare interface CDEagle {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDEagle(ptr_or_class: string|AnySDKClass): CDEagle;

declare interface CDebugHistory {
    "NpcEvents": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDebugHistory(ptr_or_class: string|AnySDKClass): CDebugHistory;

declare interface CDecoyGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDecoyGrenade(ptr_or_class: string|AnySDKClass): CDecoyGrenade;

declare interface CDecoyProjectile {
    "DecoyShotTick": number;
    "ShotsRemaining": number;
    "ExpireTime": number;
    "DecoyWeaponDefIndex": number;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDecoyProjectile(ptr_or_class: string|AnySDKClass): CDecoyProjectile;

declare interface CDynamicLight {
    "ActualFlags": number;
    "Flags": number;
    "LightStyle": number;
    "On": boolean;
    "Radius": number;
    "Exponent": number;
    "InnerAngle": number;
    "OuterAngle": number;
    "SpotRadius": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicLight(ptr_or_class: string|AnySDKClass): CDynamicLight;

declare interface CDynamicProp {
    "CreateNavObstacle": boolean;
    "NavObstacleUpdatesOverridden": boolean;
    "UseHitboxesForRenderBox": boolean;
    "UseAnimGraph": boolean;
    readonly "OutputAnimBegun": CEntityIOOutput;
    readonly "OutputAnimOver": CEntityIOOutput;
    readonly "OutputAnimLoopCycleOver": CEntityIOOutput;
    readonly "OnAnimReachedStart": CEntityIOOutput;
    readonly "OnAnimReachedEnd": CEntityIOOutput;
    "IdleAnim": string;
    "IdleAnimLoopMode": number;
    "RandomizeCycle": boolean;
    "StartDisabled": boolean;
    "FiredStartEndOutput": boolean;
    "ForceNpcExclude": boolean;
    "CreateNonSolid": boolean;
    "IsOverrideProp": boolean;
    "InitialGlowState": number;
    "GlowRange": number;
    "GlowRangeMin": number;
    "GlowColor": Color;
    "GlowTeam": number;
    readonly "Parent": CBreakableProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicProp(ptr_or_class: string|AnySDKClass): CDynamicProp;

declare interface CDynamicPropAlias_cable_dynamic {
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicPropAlias_cable_dynamic(ptr_or_class: string|AnySDKClass): CDynamicPropAlias_cable_dynamic;

declare interface CDynamicPropAlias_dynamic_prop {
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicPropAlias_dynamic_prop(ptr_or_class: string|AnySDKClass): CDynamicPropAlias_dynamic_prop;

declare interface CDynamicPropAlias_prop_dynamic_override {
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicPropAlias_prop_dynamic_override(ptr_or_class: string|AnySDKClass): CDynamicPropAlias_prop_dynamic_override;

declare interface CEconEntity {
    readonly "AttributeManager": CAttributeContainer;
    "OriginalOwnerXuidLow": number;
    "OriginalOwnerXuidHigh": number;
    "FallbackPaintKit": number;
    "FallbackSeed": number;
    "FallbackWear": number;
    "FallbackStatTrak": number;
    readonly "OldProvidee": CBaseEntity;
    "OldOwnerClass": number;
    readonly "Parent": CBaseFlex;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEconEntity(ptr_or_class: string|AnySDKClass): CEconEntity;

declare interface CEconItemView {
    "ItemDefinitionIndex": number;
    "EntityQuality": number;
    "EntityLevel": number;
    "ItemID": number;
    "ItemIDHigh": number;
    "ItemIDLow": number;
    "AccountID": number;
    "InventoryPosition": number;
    "Initialized": boolean;
    readonly "AttributeList": CAttributeList;
    readonly "NetworkedDynamicAttributes": CAttributeList;
    "CustomName": string;
    "CustomNameOverride": string;
    readonly "Parent": IEconItemInterface;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEconItemView(ptr_or_class: string|AnySDKClass): CEconItemView;

declare interface CEconWearable {
    "ForceSkin": number;
    "AlwaysAllow": boolean;
    readonly "Parent": CEconEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEconWearable(ptr_or_class: string|AnySDKClass): CEconWearable;

declare interface CEnableMotionFixup {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnableMotionFixup(ptr_or_class: string|AnySDKClass): CEnableMotionFixup;

declare interface CEntityBlocker {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityBlocker(ptr_or_class: string|AnySDKClass): CEntityBlocker;

declare interface CEntityDissolve {
    "FadeInStart": number;
    "FadeInLength": number;
    "FadeOutModelStart": number;
    "FadeOutModelLength": number;
    "FadeOutStart": number;
    "FadeOutLength": number;
    "StartTime": number;
    "DissolveType": number;
    "DissolverOrigin": Vector;
    "Magnitude": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityDissolve(ptr_or_class: string|AnySDKClass): CEntityDissolve;

declare interface CEntityFlame {
    readonly "EntAttached": CBaseEntity;
    "CheapEffect": boolean;
    "Size": number;
    "UseHitboxes": boolean;
    "NumHitboxFires": number;
    "HitboxFireScale": number;
    "Lifetime": number;
    readonly "Attacker": CBaseEntity;
    "DangerSound": number;
    "DirectDamagePerSecond": number;
    "CustomDamageType": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityFlame(ptr_or_class: string|AnySDKClass): CEntityFlame;

declare interface CEnvBeam {
    "Active": number;
    "StartEntity": string;
    "EndEntity": string;
    "Life": number;
    "BoltWidth": number;
    "NoiseAmplitude": number;
    "Speed": number;
    "Restrike": number;
    "SpriteName": string;
    "FrameStart": number;
    "EndPointWorld": Vector;
    "EndPointRelative": Vector;
    "Radius": number;
    "TouchType": number;
    "FilterName": string;
    readonly "Filter": CBaseEntity;
    "Decal": string;
    readonly "OnTouchedByEntity": CEntityIOOutput;
    readonly "Parent": CBeam;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvBeam(ptr_or_class: string|AnySDKClass): CEnvBeam;

declare interface CEnvBeverage {
    "CanInDispenser": boolean;
    "BeverageType": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvBeverage(ptr_or_class: string|AnySDKClass): CEnvBeverage;

declare interface CEnvCombinedLightProbeVolume {
    "Entity_Color": Color;
    "Entity_flBrightness": number;
    "Entity_bCustomCubemapTexture": boolean;
    "Entity_vBoxMins": Vector;
    "Entity_vBoxMaxs": Vector;
    "Entity_bMoveable": boolean;
    "Entity_nHandshake": number;
    "Entity_nEnvCubeMapArrayIndex": number;
    "Entity_nPriority": number;
    "Entity_bStartDisabled": boolean;
    "Entity_flEdgeFadeDist": number;
    "Entity_vEdgeFadeDists": Vector;
    "Entity_nLightProbeSizeX": number;
    "Entity_nLightProbeSizeY": number;
    "Entity_nLightProbeSizeZ": number;
    "Entity_nLightProbeAtlasX": number;
    "Entity_nLightProbeAtlasY": number;
    "Entity_nLightProbeAtlasZ": number;
    "Entity_bEnabled": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvCombinedLightProbeVolume(ptr_or_class: string|AnySDKClass): CEnvCombinedLightProbeVolume;

declare interface CEnvCubemap {
    "Entity_bCustomCubemapTexture": boolean;
    "Entity_flInfluenceRadius": number;
    "Entity_vBoxProjectMins": Vector;
    "Entity_vBoxProjectMaxs": Vector;
    "Entity_bMoveable": boolean;
    "Entity_nHandshake": number;
    "Entity_nEnvCubeMapArrayIndex": number;
    "Entity_nPriority": number;
    "Entity_flEdgeFadeDist": number;
    "Entity_vEdgeFadeDists": Vector;
    "Entity_flDiffuseScale": number;
    "Entity_bStartDisabled": boolean;
    "Entity_bDefaultEnvMap": boolean;
    "Entity_bDefaultSpecEnvMap": boolean;
    "Entity_bIndoorCubeMap": boolean;
    "Entity_bCopyDiffuseFromDefaultCubemap": boolean;
    "Entity_bEnabled": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvCubemap(ptr_or_class: string|AnySDKClass): CEnvCubemap;

declare interface CEnvCubemapBox {
    readonly "Parent": CEnvCubemap;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvCubemapBox(ptr_or_class: string|AnySDKClass): CEnvCubemapBox;

declare interface CEnvCubemapFog {
    "EndDistance": number;
    "StartDistance": number;
    "FogFalloffExponent": number;
    "HeightFogEnabled": boolean;
    "FogHeightWidth": number;
    "FogHeightEnd": number;
    "FogHeightStart": number;
    "FogHeightExponent": number;
    "LODBias": number;
    "Active": boolean;
    "StartDisabled": boolean;
    "FogMaxOpacity": number;
    "CubemapSourceType": number;
    "SkyEntity": string;
    "HasHeightFogEnd": boolean;
    "FirstTime": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvCubemapFog(ptr_or_class: string|AnySDKClass): CEnvCubemapFog;

declare interface CEnvDecal {
    "Width": number;
    "Height": number;
    "Depth": number;
    "RenderOrder": number;
    "ProjectOnWorld": boolean;
    "ProjectOnCharacters": boolean;
    "ProjectOnWater": boolean;
    "DepthSortBias": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvDecal(ptr_or_class: string|AnySDKClass): CEnvDecal;

declare interface CEnvDetailController {
    "FadeStartDist": number;
    "FadeEndDist": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvDetailController(ptr_or_class: string|AnySDKClass): CEnvDetailController;

declare interface CEnvEntityIgniter {
    "Lifetime": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvEntityIgniter(ptr_or_class: string|AnySDKClass): CEnvEntityIgniter;

declare interface CEnvEntityMaker {
    "EntityMins": Vector;
    "EntityMaxs": Vector;
    readonly "CurrentInstance": CBaseEntity;
    readonly "CurrentBlocker": CBaseEntity;
    "BlockerOrigin": Vector;
    "PostSpawnDirection": QAngle;
    "PostSpawnDirectionVariance": number;
    "PostSpawnSpeed": number;
    "PostSpawnUseAngles": boolean;
    "Template": string;
    readonly "OutputOnSpawned": CEntityIOOutput;
    readonly "OutputOnFailedSpawn": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvEntityMaker(ptr_or_class: string|AnySDKClass): CEnvEntityMaker;

declare interface CEnvExplosion {
    "Magnitude": number;
    "PlayerDamage": number;
    "RadiusOverride": number;
    "InnerRadius": number;
    "SpriteScale": number;
    "DamageForce": number;
    readonly "Inflictor": CBaseEntity;
    "CustomDamageType": number;
    "CreateDebris": boolean;
    "ExplosionType": string;
    "CustomEffectName": string;
    "CustomSoundName": string;
    "ClassIgnore": number;
    "ClassIgnore2": number;
    "EntityIgnoreName": string;
    readonly "EntityIgnore": CBaseEntity;
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvExplosion(ptr_or_class: string|AnySDKClass): CEnvExplosion;

declare interface CEnvFade {
    "FadeColor": Color;
    "Duration": number;
    "HoldDuration": number;
    readonly "OnBeginFade": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvFade(ptr_or_class: string|AnySDKClass): CEnvFade;

declare interface CEnvFireSensor {
    "Enabled": boolean;
    "HeatAtLevel": boolean;
    "Radius": number;
    "TargetLevel": number;
    "TargetTime": number;
    "LevelTime": number;
    readonly "OnHeatLevelStart": CEntityIOOutput;
    readonly "OnHeatLevelEnd": CEntityIOOutput;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvFireSensor(ptr_or_class: string|AnySDKClass): CEnvFireSensor;

declare interface CEnvFireSource {
    "Enabled": boolean;
    "Radius": number;
    "Damage": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvFireSource(ptr_or_class: string|AnySDKClass): CEnvFireSource;

declare interface CEnvFunnel {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvFunnel(ptr_or_class: string|AnySDKClass): CEnvFunnel;

declare interface CEnvGlobal {
    "Globalstate": string;
    "Triggermode": number;
    "Initialstate": number;
    "Counter": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvGlobal(ptr_or_class: string|AnySDKClass): CEnvGlobal;

declare interface CEnvHudHint {
    "Message": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvHudHint(ptr_or_class: string|AnySDKClass): CEnvHudHint;

declare interface CEnvInstructorHint {
    "Name": string;
    "Replace_Key": string;
    "HintTargetEntity": string;
    "Timeout": number;
    "DisplayLimit": number;
    "Icon_Onscreen": string;
    "Icon_Offscreen": string;
    "Caption": string;
    "ActivatorCaption": string;
    "Color": Color;
    "IconOffset": number;
    "Range": number;
    "PulseOption": number;
    "AlphaOption": number;
    "ShakeOption": number;
    "Static": boolean;
    "NoOffscreen": boolean;
    "ForceCaption": boolean;
    "InstanceType": number;
    "SuppressRest": boolean;
    "Binding": string;
    "AllowNoDrawTarget": boolean;
    "AutoStart": boolean;
    "LocalPlayerOnly": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvInstructorHint(ptr_or_class: string|AnySDKClass): CEnvInstructorHint;

declare interface CEnvInstructorVRHint {
    "Name": string;
    "HintTargetEntity": string;
    "Timeout": number;
    "Caption": string;
    "StartSound": string;
    "LayoutFileType": number;
    "CustomLayoutFile": string;
    "AttachType": number;
    "HeightOffset": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvInstructorVRHint(ptr_or_class: string|AnySDKClass): CEnvInstructorVRHint;

declare interface CEnvLaser {
    "LaserTarget": string;
    readonly "Sprite": CSprite;
    "SpriteName": string;
    "FirePosition": Vector;
    "StartFrame": number;
    readonly "Parent": CBeam;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvLaser(ptr_or_class: string|AnySDKClass): CEnvLaser;

declare interface CEnvLightProbeVolume {
    "Entity_vBoxMins": Vector;
    "Entity_vBoxMaxs": Vector;
    "Entity_bMoveable": boolean;
    "Entity_nHandshake": number;
    "Entity_nPriority": number;
    "Entity_bStartDisabled": boolean;
    "Entity_nLightProbeSizeX": number;
    "Entity_nLightProbeSizeY": number;
    "Entity_nLightProbeSizeZ": number;
    "Entity_nLightProbeAtlasX": number;
    "Entity_nLightProbeAtlasY": number;
    "Entity_nLightProbeAtlasZ": number;
    "Entity_bEnabled": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvLightProbeVolume(ptr_or_class: string|AnySDKClass): CEnvLightProbeVolume;

declare interface CEnvMicrophone {
    "Disabled": boolean;
    readonly "MeasureTarget": CBaseEntity;
    "SoundType": number;
    "SoundFlags": number;
    "Sensitivity": number;
    "SmoothFactor": number;
    "MaxRange": number;
    "SpeakerName": string;
    readonly "Speaker": CBaseEntity;
    "AvoidFeedback": boolean;
    "SpeakerDSPPreset": number;
    "ListenFilter": string;
    readonly "ListenFilter1": CBaseFilter;
    readonly "OnRoutedSound": CEntityIOOutput;
    readonly "OnHeardSound": CEntityIOOutput;
    "LastSound": string;
    "LastRoutedFrame": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvMicrophone(ptr_or_class: string|AnySDKClass): CEnvMicrophone;

declare interface CEnvMuzzleFlash {
    "Scale": number;
    "ParentAttachment": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvMuzzleFlash(ptr_or_class: string|AnySDKClass): CEnvMuzzleFlash;

declare interface CEnvParticleGlow {
    "AlphaScale": number;
    "RadiusScale": number;
    "SelfIllumScale": number;
    "ColorTint": Color;
    readonly "Parent": CParticleSystem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvParticleGlow(ptr_or_class: string|AnySDKClass): CEnvParticleGlow;

declare interface CEnvProjectedTexture {
    readonly "TargetEntity": CBaseEntity;
    "State": boolean;
    "AlwaysUpdate": boolean;
    "LightFOV": number;
    "EnableShadows": boolean;
    "SimpleProjection": boolean;
    "LightOnlyTarget": boolean;
    "LightWorld": boolean;
    "CameraSpace": boolean;
    "BrightnessScale": number;
    "LightColor": Color;
    "Intensity": number;
    "LinearAttenuation": number;
    "QuadraticAttenuation": number;
    "Volumetric": boolean;
    "NoiseStrength": number;
    "FlashlightTime": number;
    "NumPlanes": number;
    "PlaneOffset": number;
    "VolumetricIntensity": number;
    "ColorTransitionTime": number;
    "Ambient": number;
    "SpotlightTextureName": string;
    "SpotlightTextureFrame": number;
    "ShadowQuality": number;
    "NearZ": number;
    "FarZ": number;
    "ProjectionSize": number;
    "Rotation": number;
    "FlipHorizontal": boolean;
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvProjectedTexture(ptr_or_class: string|AnySDKClass): CEnvProjectedTexture;

declare interface CEnvScreenOverlay {
    "OverlayNames": Object;
    "OverlayTimes": Object;
    "StartTime": number;
    "DesiredOverlay": number;
    "IsActive": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvScreenOverlay(ptr_or_class: string|AnySDKClass): CEnvScreenOverlay;

declare interface CEnvShake {
    "LimitToEntity": string;
    "Amplitude": number;
    "Frequency": number;
    "Duration": number;
    "Radius": number;
    "StopTime": number;
    "NextShake": number;
    "CurrentAmp": number;
    "MaxForce": Vector;
    readonly "ShakeCallback": CPhysicsShake;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvShake(ptr_or_class: string|AnySDKClass): CEnvShake;

declare interface CEnvSky {
    "StartDisabled": boolean;
    "TintColor": Color;
    "TintColorLightingOnly": Color;
    "BrightnessScale": number;
    "FogType": number;
    "FogMinStart": number;
    "FogMinEnd": number;
    "FogMaxStart": number;
    "FogMaxEnd": number;
    "Enabled": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSky(ptr_or_class: string|AnySDKClass): CEnvSky;

declare interface CEnvSpark {
    "Delay": number;
    "Magnitude": number;
    "TrailLength": number;
    "Type": number;
    readonly "OnSpark": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSpark(ptr_or_class: string|AnySDKClass): CEnvSpark;

declare interface CEnvSplash {
    "Scale": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSplash(ptr_or_class: string|AnySDKClass): CEnvSplash;

declare interface CEnvTilt {
    "Duration": number;
    "Radius": number;
    "TiltTime": number;
    "StopTime": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvTilt(ptr_or_class: string|AnySDKClass): CEnvTilt;

declare interface CEnvTracer {
    "End": Vector;
    "Delay": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvTracer(ptr_or_class: string|AnySDKClass): CEnvTracer;

declare interface CEnvViewPunch {
    "Radius": number;
    "ViewPunch": QAngle;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvViewPunch(ptr_or_class: string|AnySDKClass): CEnvViewPunch;

declare interface CEnvVolumetricFogController {
    "Scattering": number;
    "Anisotropy": number;
    "FadeSpeed": number;
    "DrawDistance": number;
    "FadeInStart": number;
    "FadeInEnd": number;
    "IndirectStrength": number;
    "VolumeDepth": number;
    "FirstVolumeSliceThickness": number;
    "IndirectTextureDimX": number;
    "IndirectTextureDimY": number;
    "IndirectTextureDimZ": number;
    "BoxMins": Vector;
    "BoxMaxs": Vector;
    "Active": boolean;
    "StartAnisoTime": number;
    "StartScatterTime": number;
    "StartDrawDistanceTime": number;
    "StartAnisotropy": number;
    "StartScattering": number;
    "StartDrawDistance": number;
    "DefaultAnisotropy": number;
    "DefaultScattering": number;
    "DefaultDrawDistance": number;
    "StartDisabled": boolean;
    "EnableIndirect": boolean;
    "IndirectUseLPVs": boolean;
    "IsMaster": boolean;
    "ForceRefreshCount": number;
    "NoiseSpeed": number;
    "NoiseStrength": number;
    "NoiseScale": Vector;
    "FirstTime": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvVolumetricFogController(ptr_or_class: string|AnySDKClass): CEnvVolumetricFogController;

declare interface CEnvVolumetricFogVolume {
    "Active": boolean;
    "BoxMins": Vector;
    "BoxMaxs": Vector;
    "StartDisabled": boolean;
    "Strength": number;
    "FalloffShape": number;
    "FalloffExponent": number;
    "HeightFogDepth": number;
    "HeightFogEdgeWidth": number;
    "IndirectLightStrength": number;
    "SunLightStrength": number;
    "NoiseStrength": number;
    "OverrideIndirectLightStrength": boolean;
    "OverrideSunLightStrength": boolean;
    "OverrideNoiseStrength": boolean;
    "AllowLPVIndirect": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvVolumetricFogVolume(ptr_or_class: string|AnySDKClass): CEnvVolumetricFogVolume;

declare interface CEnvWind {
    readonly "EnvWindShared": CEnvWindShared;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvWind(ptr_or_class: string|AnySDKClass): CEnvWind;

declare interface CEnvWindShared {
    "StartTime": number;
    "WindSeed": number;
    "MinWind": number;
    "MaxWind": number;
    "WindRadius": number;
    "MinGust": number;
    "MaxGust": number;
    "MinGustDelay": number;
    "MaxGustDelay": number;
    "GustDuration": number;
    "GustDirChange": number;
    "Location": Vector;
    "GustSound": number;
    "WindDir": number;
    "WindSpeed": number;
    "CurrentWindVector": Vector;
    "CurrentSwayVector": Vector;
    "PrevSwayVector": Vector;
    "InitialWindDir": number;
    "InitialWindSpeed": number;
    readonly "OnGustStart": CEntityIOOutput;
    readonly "OnGustEnd": CEntityIOOutput;
    "VariationTime": number;
    "SwayTime": number;
    "SimTime": number;
    "SwitchTime": number;
    "AveWindSpeed": number;
    "Gusting": boolean;
    "WindAngleVariation": number;
    "WindSpeedVariation": number;
    readonly "EntOwner": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvWindShared(ptr_or_class: string|AnySDKClass): CEnvWindShared;

declare interface CFilterAttributeInt {
    "AttributeName": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterAttributeInt(ptr_or_class: string|AnySDKClass): CFilterAttributeInt;

declare interface CFilterClass {
    "FilterClass": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterClass(ptr_or_class: string|AnySDKClass): CFilterClass;

declare interface CFilterContext {
    "FilterContext": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterContext(ptr_or_class: string|AnySDKClass): CFilterContext;

declare interface CFilterEnemy {
    "EnemyName": string;
    "Radius": number;
    "OuterRadius": number;
    "MaxSquadmatesPerEnemy": number;
    "PlayerName": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterEnemy(ptr_or_class: string|AnySDKClass): CFilterEnemy;

declare interface CFilterLOS {
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterLOS(ptr_or_class: string|AnySDKClass): CFilterLOS;

declare interface CFilterMassGreater {
    "FilterMass": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterMassGreater(ptr_or_class: string|AnySDKClass): CFilterMassGreater;

declare interface CFilterModel {
    "FilterModel": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterModel(ptr_or_class: string|AnySDKClass): CFilterModel;

declare interface CFilterMultiple {
    "FilterType": number;
    "FilterName": Object;
    readonly "Filter": Object;
    "FilterCount": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterMultiple(ptr_or_class: string|AnySDKClass): CFilterMultiple;

declare interface CFilterName {
    "FilterName": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterName(ptr_or_class: string|AnySDKClass): CFilterName;

declare interface CFilterProximity {
    "Radius": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterProximity(ptr_or_class: string|AnySDKClass): CFilterProximity;

declare interface CFire {
    readonly "Effect": CBaseFire;
    readonly "Owner": CBaseEntity;
    "FireType": number;
    "Fuel": number;
    "DamageTime": number;
    "LastDamage": number;
    "FireSize": number;
    "LastNavUpdateTime": number;
    "HeatLevel": number;
    "HeatAbsorb": number;
    "DamageScale": number;
    "MaxHeat": number;
    "LastHeatLevel": number;
    "AttackTime": number;
    "Enabled": boolean;
    "StartDisabled": boolean;
    "DidActivate": boolean;
    readonly "OnIgnited": CEntityIOOutput;
    readonly "OnExtinguished": CEntityIOOutput;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFire(ptr_or_class: string|AnySDKClass): CFire;

declare interface CFireCrackerBlast {
    readonly "Parent": CInferno;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFireCrackerBlast(ptr_or_class: string|AnySDKClass): CFireCrackerBlast;

declare interface CFireSmoke {
    "FlameModelIndex": number;
    "FlameFromAboveModelIndex": number;
    readonly "Parent": CBaseFire;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFireSmoke(ptr_or_class: string|AnySDKClass): CFireSmoke;

declare interface CFish {
    readonly "Pool": CFishPool;
    "Id": number;
    "X": number;
    "Y": number;
    "Z": number;
    "Angle": number;
    "AngleChange": number;
    "Forward": Vector;
    "Perp": Vector;
    "PoolOrigin": Vector;
    "WaterLevel": number;
    "Speed": number;
    "DesiredSpeed": number;
    "CalmSpeed": number;
    "PanicSpeed": number;
    "AvoidRange": number;
    readonly "TurnTimer": CountdownTimer;
    "TurnClockwise": boolean;
    readonly "GoTimer": CountdownTimer;
    readonly "MoveTimer": CountdownTimer;
    readonly "PanicTimer": CountdownTimer;
    readonly "DisperseTimer": CountdownTimer;
    readonly "ProximityTimer": CountdownTimer;
    readonly "Visible": Object;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFish(ptr_or_class: string|AnySDKClass): CFish;

declare interface CFishPool {
    "FishCount": number;
    "MaxRange": number;
    "SwimDepth": number;
    "WaterLevel": number;
    "IsDormant": boolean;
    readonly "VisTimer": CountdownTimer;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFishPool(ptr_or_class: string|AnySDKClass): CFishPool;

declare interface CFists {
    "PlayingUninterruptableAct": boolean;
    "UninterruptableActivity": number;
    "RestorePrevWep": boolean;
    readonly "WeaponBeforePrevious": CBasePlayerWeapon;
    readonly "WeaponPrevious": CBasePlayerWeapon;
    "DelayedHardPunchIncoming": boolean;
    "DestroyAfterTaunt": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFists(ptr_or_class: string|AnySDKClass): CFists;

declare interface CFlashbang {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlashbang(ptr_or_class: string|AnySDKClass): CFlashbang;

declare interface CFlashbangProjectile {
    "TimeToDetonate": number;
    "NumOpponentsHit": number;
    "NumTeammatesHit": number;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlashbangProjectile(ptr_or_class: string|AnySDKClass): CFlashbangProjectile;

declare interface CFogController {
    readonly "Fog": fogparams_t;
    "UseAngles": boolean;
    "ChangedVariables": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFogController(ptr_or_class: string|AnySDKClass): CFogController;

declare interface CFogTrigger {
    readonly "Fog": fogparams_t;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFogTrigger(ptr_or_class: string|AnySDKClass): CFogTrigger;

declare interface CFogVolume {
    "FogName": string;
    "PostProcessName": string;
    "ColorCorrectionName": string;
    "Disabled": boolean;
    "InFogVolumesList": boolean;
    readonly "Parent": CServerOnlyModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFogVolume(ptr_or_class: string|AnySDKClass): CFogVolume;

declare interface CFootstepControl {
    "Source": string;
    "Destination": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootstepControl(ptr_or_class: string|AnySDKClass): CFootstepControl;

declare interface CFuncBrush {
    "Solidity": number;
    "Disabled": number;
    "SolidBsp": boolean;
    "ExcludedClass": string;
    "InvertExclusion": boolean;
    "ScriptedMovement": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncBrush(ptr_or_class: string|AnySDKClass): CFuncBrush;

declare interface CFuncConveyor {
    "ConveyorModels": string;
    "TransitionDurationSeconds": number;
    "MoveEntitySpace": QAngle;
    "MoveDirEntitySpace": Vector;
    "TargetSpeed": number;
    "TransitionStartTick": number;
    "TransitionDurationTicks": number;
    "TransitionStartSpeed": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncConveyor(ptr_or_class: string|AnySDKClass): CFuncConveyor;

declare interface CFuncElectrifiedVolume {
    "EffectName": string;
    "EffectInterpenetrateName": string;
    "EffectZapName": string;
    "EffectSource": string;
    readonly "Parent": CFuncBrush;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncElectrifiedVolume(ptr_or_class: string|AnySDKClass): CFuncElectrifiedVolume;

declare interface CFuncIllusionary {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncIllusionary(ptr_or_class: string|AnySDKClass): CFuncIllusionary;

declare interface CFuncInteractionLayerClip {
    "Disabled": boolean;
    "InteractsAs": string;
    "InteractsWith": string;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncInteractionLayerClip(ptr_or_class: string|AnySDKClass): CFuncInteractionLayerClip;

declare interface CFuncLadder {
    "LadderDir": Vector;
    "LocalTop": Vector;
    "PlayerMountPositionTop": Vector;
    "PlayerMountPositionBottom": Vector;
    "AutoRideSpeed": number;
    "Disabled": boolean;
    "FakeLadder": boolean;
    "HasSlack": boolean;
    "SurfacePropName": string;
    readonly "OnPlayerGotOnLadder": CEntityIOOutput;
    readonly "OnPlayerGotOffLadder": CEntityIOOutput;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncLadder(ptr_or_class: string|AnySDKClass): CFuncLadder;

declare interface CFuncLadderAlias_func_useableladder {
    readonly "Parent": CFuncLadder;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncLadderAlias_func_useableladder(ptr_or_class: string|AnySDKClass): CFuncLadderAlias_func_useableladder;

declare interface CFuncMonitor {
    "TargetCamera": string;
    "ResolutionEnum": number;
    "RenderShadows": boolean;
    "UseUniqueColorTarget": boolean;
    "BrushModelName": string;
    readonly "TargetCamera1": CBaseEntity;
    "Enabled": boolean;
    "Draw3DSkybox": boolean;
    "StartEnabled": boolean;
    readonly "Parent": CFuncBrush;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncMonitor(ptr_or_class: string|AnySDKClass): CFuncMonitor;

declare interface CFuncMoveLinear {
    "AuthoredPosition": number;
    "MoveEntitySpace": QAngle;
    "MoveDirParentSpace": Vector;
    "SoundStart": string;
    "SoundStop": string;
    "CurrentSound": string;
    "BlockDamage": number;
    "StartPosition": number;
    readonly "OnFullyOpen": CEntityIOOutput;
    readonly "OnFullyClosed": CEntityIOOutput;
    "CreateMovableNavMesh": boolean;
    "CreateNavObstacle": boolean;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncMoveLinear(ptr_or_class: string|AnySDKClass): CFuncMoveLinear;

declare interface CFuncMoveLinearAlias_momentary_door {
    readonly "Parent": CFuncMoveLinear;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncMoveLinearAlias_momentary_door(ptr_or_class: string|AnySDKClass): CFuncMoveLinearAlias_momentary_door;

declare interface CFuncMover {
    "CreateMovableNavMesh": boolean;
    "PathName": string;
    readonly "PathMover": CPathMover;
    "PathNodeStart": string;
    readonly "MoveType": any;
    "IsReversing": boolean;
    "Target": Vector;
    "StartSpeed": number;
    "PathLocation": number;
    "T": number;
    "CurrentNodeIndex": number;
    "PreviousNodeIndex": number;
    "FixedOrientation": boolean;
    "FixedPitch": boolean;
    "SolidType": number;
    "IsMoving": boolean;
    "TimeToReachMaxSpeed": number;
    "DistanceToReachMaxSpeed": number;
    "TimeToReachZeroSpeed": number;
    "DistanceToReachZeroSpeed": number;
    "TimeMovementStart": number;
    "TimeMovementStop": number;
    readonly "StopAtNode": CMoverPathNode;
    "PathLocationToBeginStop": number;
    "StartForwardSound": string;
    "LoopForwardSound": string;
    "StopForwardSound": string;
    "StartReverseSound": string;
    "LoopReverseSound": string;
    "StopReverseSound": string;
    "ArriveAtDestinationSound": string;
    readonly "OnMovementEnd": CEntityIOOutput;
    "StartAtEnd": boolean;
    readonly "OrientationUpdate": any;
    "TimeStartOrientationChange": number;
    "TimeToBlendToNewOrientation": number;
    "DurationBlendToNewOrientationRan": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncMover(ptr_or_class: string|AnySDKClass): CFuncMover;

declare interface CFuncMoverAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncMoverAPI(ptr_or_class: string|AnySDKClass): CFuncMoverAPI;

declare interface CFuncNavBlocker {
    "Disabled": boolean;
    "BlockedTeamNumber": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncNavBlocker(ptr_or_class: string|AnySDKClass): CFuncNavBlocker;

declare interface CFuncNavObstruction {
    "Disabled": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncNavObstruction(ptr_or_class: string|AnySDKClass): CFuncNavObstruction;

declare interface CFuncPlat {
    "Noise": string;
    readonly "Parent": CBasePlatTrain;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncPlat(ptr_or_class: string|AnySDKClass): CFuncPlat;

declare interface CFuncPlatRot {
    "End": QAngle;
    "Start": QAngle;
    readonly "Parent": CFuncPlat;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncPlatRot(ptr_or_class: string|AnySDKClass): CFuncPlatRot;

declare interface CFuncPropRespawnZone {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncPropRespawnZone(ptr_or_class: string|AnySDKClass): CFuncPropRespawnZone;

declare interface CFuncRotating {
    readonly "OnStopped": CEntityIOOutput;
    readonly "OnStarted": CEntityIOOutput;
    readonly "OnReachedStart": CEntityIOOutput;
    "LocalRotationVector": Vector;
    "FanFriction": number;
    "Attenuation": number;
    "Volume": number;
    "TargetSpeed": number;
    "MaxSpeed": number;
    "BlockDamage": number;
    "NoiseRunning": string;
    "Reversed": boolean;
    "AccelDecel": boolean;
    "PrevLocalAngles": QAngle;
    "Start": QAngle;
    "StopAtStartPos": boolean;
    "ClientOrigin": Vector;
    "ClientAngles": QAngle;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncRotating(ptr_or_class: string|AnySDKClass): CFuncRotating;

declare interface CFuncShatterglass {
    readonly "ShatterGlassShards": Object;
    "PanelSize": Vector2D;
    "LastShatterSoundEmitTime": number;
    "LastCleanupTime": number;
    "InitAtTime": number;
    "GlassThickness": number;
    "SpawnInvulnerability": number;
    "BreakSilent": boolean;
    "BreakShardless": boolean;
    "Broken": boolean;
    "GlassNavIgnore": boolean;
    "GlassInFrame": boolean;
    "StartBroken": boolean;
    "InitialDamageType": number;
    "DamagePositioningEntityName01": string;
    "DamagePositioningEntityName02": string;
    "DamagePositioningEntityName03": string;
    "DamagePositioningEntityName04": string;
    readonly "InitialDamagePositions": Object;
    readonly "ExtraDamagePositions": Object;
    readonly "InitialPanelVertices": Object;
    readonly "OnBroken": CEntityIOOutput;
    "SurfaceType": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncShatterglass(ptr_or_class: string|AnySDKClass): CFuncShatterglass;

declare interface CFuncTankTrain {
    readonly "OnDeath": CEntityIOOutput;
    readonly "Parent": CFuncTrackTrain;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTankTrain(ptr_or_class: string|AnySDKClass): CFuncTankTrain;

declare interface CFuncTimescale {
    "DesiredTimescale": number;
    "Acceleration": number;
    "MinBlendRate": number;
    "BlendDeltaMultiplier": number;
    "IsStarted": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTimescale(ptr_or_class: string|AnySDKClass): CFuncTimescale;

declare interface CFuncTrackAuto {
    readonly "Parent": CFuncTrackChange;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTrackAuto(ptr_or_class: string|AnySDKClass): CFuncTrackAuto;

declare interface CFuncTrackChange {
    readonly "TrackTop": CPathTrack;
    readonly "TrackBottom": CPathTrack;
    readonly "Train": CFuncTrackTrain;
    "TrackTopName": string;
    "TrackBottomName": string;
    "TrainName": string;
    "Code": number;
    "TargetState": number;
    "Use": number;
    readonly "Parent": CFuncPlatRot;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTrackChange(ptr_or_class: string|AnySDKClass): CFuncTrackChange;

declare interface CFuncTrackTrain {
    readonly "Ppath": CPathTrack;
    "Length": number;
    "PosPrev": Vector;
    "Prev": QAngle;
    "ControlMins": Vector;
    "ControlMaxs": Vector;
    "LastBlockPos": Vector;
    "LastBlockTick": number;
    "Volume": number;
    "Bank": number;
    "OldSpeed": number;
    "BlockDamage": number;
    "Height": number;
    "MaxSpeed": number;
    "Dir": number;
    "SoundMove": string;
    "SoundMovePing": string;
    "SoundStart": string;
    "SoundStop": string;
    "StrPathTarget": string;
    "MoveSoundMinDuration": number;
    "MoveSoundMaxDuration": number;
    "NextMoveSoundTime": number;
    "MoveSoundMinPitch": number;
    "MoveSoundMaxPitch": number;
    "OrientationType": number;
    "VelocityType": number;
    readonly "OnStart": CEntityIOOutput;
    readonly "OnNext": CEntityIOOutput;
    readonly "OnArrivedAtDestinationNode": CEntityIOOutput;
    "ManualSpeedChanges": boolean;
    "DesiredSpeed": number;
    "SpeedChangeTime": number;
    "AccelSpeed": number;
    "DecelSpeed": number;
    "AccelToSpeed": boolean;
    "NextMPSoundTime": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTrackTrain(ptr_or_class: string|AnySDKClass): CFuncTrackTrain;

declare interface CFuncTrain {
    readonly "CurrentTarget": CBaseEntity;
    "Activated": boolean;
    readonly "Enemy": CBaseEntity;
    "BlockDamage": number;
    "NextBlockTime": number;
    "LastTarget": string;
    readonly "Parent": CBasePlatTrain;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTrain(ptr_or_class: string|AnySDKClass): CFuncTrain;

declare interface CFuncTrainControls {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTrainControls(ptr_or_class: string|AnySDKClass): CFuncTrainControls;

declare interface CFuncVPhysicsClip {
    "Disabled": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncVPhysicsClip(ptr_or_class: string|AnySDKClass): CFuncVPhysicsClip;

declare interface CFuncVehicleClip {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncVehicleClip(ptr_or_class: string|AnySDKClass): CFuncVehicleClip;

declare interface CFuncWall {
    "State": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncWall(ptr_or_class: string|AnySDKClass): CFuncWall;

declare interface CFuncWallToggle {
    readonly "Parent": CFuncWall;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncWallToggle(ptr_or_class: string|AnySDKClass): CFuncWallToggle;

declare interface CGameChoreoServices {
    readonly "Owner": CBaseAnimGraph;
    readonly "ScriptedSequence": CScriptedSequence;
    "TimeStartedState": number;
    readonly "Parent": IChoreoServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameChoreoServices(ptr_or_class: string|AnySDKClass): CGameChoreoServices;

declare interface CGameEnd {
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameEnd(ptr_or_class: string|AnySDKClass): CGameEnd;

declare interface CGameGibManager {
    "AllowNewGibs": boolean;
    "CurrentMaxPieces": number;
    "MaxPieces": number;
    "LastFrame": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameGibManager(ptr_or_class: string|AnySDKClass): CGameGibManager;

declare interface CGameMoney {
    readonly "OnMoneySpent": CEntityIOOutput;
    readonly "OnMoneySpentFail": CEntityIOOutput;
    "Money": number;
    "StrAwardText": string;
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameMoney(ptr_or_class: string|AnySDKClass): CGameMoney;

declare interface CGamePlayerEquip {
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGamePlayerEquip(ptr_or_class: string|AnySDKClass): CGamePlayerEquip;

declare interface CGamePlayerZone {
    readonly "OnPlayerInZone": CEntityIOOutput;
    readonly "OnPlayerOutZone": CEntityIOOutput;
    readonly "Parent": CRuleBrushEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGamePlayerZone(ptr_or_class: string|AnySDKClass): CGamePlayerZone;

declare interface CGameRules {
    readonly "__pChainEntity": CNetworkVarChainer;
    "QuestName": string;
    "QuestPhase": number;
    "TotalPausedTicks": number;
    "PauseStartTick": number;
    "GamePaused": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameRules(ptr_or_class: string|AnySDKClass): CGameRules;

declare interface CGameRulesProxy {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameRulesProxy(ptr_or_class: string|AnySDKClass): CGameRulesProxy;

declare interface CGameScriptedMoveData {
    "AccumulatedRootMotion": Vector;
    "Dest": Vector;
    "Src": Vector;
    "Src1": QAngle;
    "Dst": QAngle;
    "Current": QAngle;
    readonly "DestEntity": CBaseEntity;
    "LockedSpeed": number;
    "AngRate": number;
    "Duration": number;
    "StartTime": number;
    "Active": boolean;
    "TeleportOnEnd": boolean;
    "IgnoreRotation": boolean;
    "Type": any;
    "Success": boolean;
    "ForcedCrouchState": number;
    "IgnoreCollisions": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameScriptedMoveData(ptr_or_class: string|AnySDKClass): CGameScriptedMoveData;

declare interface CGameScriptedMoveDef_t {
    "Type": any;
    "DestOffset": Vector;
    readonly "DestEntity": CBaseEntity;
    "Dest": QAngle;
    "Duration": number;
    "AngRate": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameScriptedMoveDef_t(ptr_or_class: string|AnySDKClass): CGameScriptedMoveDef_t;

declare interface CGameText {
    "Message": string;
    readonly "TextParms": hudtextparms_t;
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameText(ptr_or_class: string|AnySDKClass): CGameText;

declare interface CGenericConstraint {
    "LinearMotionX": number;
    "LinearMotionY": number;
    "LinearMotionZ": number;
    "LinearFrequencyX": number;
    "LinearFrequencyY": number;
    "LinearFrequencyZ": number;
    "LinearDampingRatioX": number;
    "LinearDampingRatioY": number;
    "LinearDampingRatioZ": number;
    "MaxLinearImpulseX": number;
    "MaxLinearImpulseY": number;
    "MaxLinearImpulseZ": number;
    "BreakAfterTimeX": number;
    "BreakAfterTimeY": number;
    "BreakAfterTimeZ": number;
    "BreakAfterTimeStartTimeX": number;
    "BreakAfterTimeStartTimeY": number;
    "BreakAfterTimeStartTimeZ": number;
    "BreakAfterTimeThresholdX": number;
    "BreakAfterTimeThresholdY": number;
    "BreakAfterTimeThresholdZ": number;
    "NotifyForceX": number;
    "NotifyForceY": number;
    "NotifyForceZ": number;
    "NotifyForceMinTimeX": number;
    "NotifyForceMinTimeY": number;
    "NotifyForceMinTimeZ": number;
    "NotifyForceLastTimeX": number;
    "NotifyForceLastTimeY": number;
    "NotifyForceLastTimeZ": number;
    "AxisNotifiedX": boolean;
    "AxisNotifiedY": boolean;
    "AxisNotifiedZ": boolean;
    "AngularMotionX": number;
    "AngularMotionY": number;
    "AngularMotionZ": number;
    "AngularFrequencyX": number;
    "AngularFrequencyY": number;
    "AngularFrequencyZ": number;
    "AngularDampingRatioX": number;
    "AngularDampingRatioY": number;
    "AngularDampingRatioZ": number;
    "MaxAngularImpulseX": number;
    "MaxAngularImpulseY": number;
    "MaxAngularImpulseZ": number;
    readonly "NotifyForceReachedX": CEntityIOOutput;
    readonly "NotifyForceReachedY": CEntityIOOutput;
    readonly "NotifyForceReachedZ": CEntityIOOutput;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGenericConstraint(ptr_or_class: string|AnySDKClass): CGenericConstraint;

declare interface CGradientFog {
    "FogStartDistance": number;
    "FogEndDistance": number;
    "HeightFogEnabled": boolean;
    "FogStartHeight": number;
    "FogEndHeight": number;
    "FarZ": number;
    "FogMaxOpacity": number;
    "FogFalloffExponent": number;
    "FogVerticalExponent": number;
    "FogColor": Color;
    "FogStrength": number;
    "FadeTime": number;
    "StartDisabled": boolean;
    "IsEnabled": boolean;
    "GradientFogNeedsTextures": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGradientFog(ptr_or_class: string|AnySDKClass): CGradientFog;

declare interface CGunTarget {
    "On": boolean;
    readonly "TargetEnt": CBaseEntity;
    readonly "OnDeath": CEntityIOOutput;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGunTarget(ptr_or_class: string|AnySDKClass): CGunTarget;

declare interface CHEGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHEGrenade(ptr_or_class: string|AnySDKClass): CHEGrenade;

declare interface CHEGrenadeProjectile {
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHEGrenadeProjectile(ptr_or_class: string|AnySDKClass): CHEGrenadeProjectile;

declare interface CHandleDummy {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHandleDummy(ptr_or_class: string|AnySDKClass): CHandleDummy;

declare interface CHandleTest {
    readonly "Handle": CBaseEntity;
    "SendHandle": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHandleTest(ptr_or_class: string|AnySDKClass): CHandleTest;

declare interface CHostage {
    readonly "OnHostageBeginGrab": CEntityIOOutput;
    readonly "OnFirstPickedUp": CEntityIOOutput;
    readonly "OnDroppedNotRescued": CEntityIOOutput;
    readonly "OnRescued": CEntityIOOutput;
    readonly "EntitySpottedState": EntitySpottedState_t;
    "SpotRules": number;
    "UiHostageSpawnExclusionGroupMask": number;
    "HostageSpawnRandomFactor": number;
    "Remove": boolean;
    "Vel": Vector;
    "IsRescued": boolean;
    "JumpedThisFrame": boolean;
    "HostageState": number;
    readonly "Leader": CBaseEntity;
    readonly "LastLeader": CCSPlayerPawnBase;
    readonly "ReuseTimer": CountdownTimer;
    "HasBeenUsed": boolean;
    "Accel": Vector;
    "IsRunning": boolean;
    "IsCrouching": boolean;
    readonly "JumpTimer": CountdownTimer;
    "IsWaitingForLeader": boolean;
    readonly "RepathTimer": CountdownTimer;
    readonly "InhibitDoorTimer": CountdownTimer;
    readonly "InhibitObstacleAvoidanceTimer": CountdownTimer;
    readonly "WiggleTimer": CountdownTimer;
    "IsAdjusted": boolean;
    "HandsHaveBeenCut": boolean;
    readonly "HostageGrabber": CCSPlayerPawn;
    "LastGrabTime": number;
    "PositionWhenStartedDroppingToGround": Vector;
    "GrabbedPos": Vector;
    "RescueStartTime": number;
    "GrabSuccessTime": number;
    "DropStartTime": number;
    "ApproachRewardPayouts": number;
    "PickupEventCount": number;
    "SpawnGroundPos": Vector;
    "HostageResetPosition": Vector;
    readonly "Parent": CHostageExpresserShim;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostage(ptr_or_class: string|AnySDKClass): CHostage;

declare interface CHostageAlias_info_hostage_spawn {
    readonly "Parent": CHostage;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageAlias_info_hostage_spawn(ptr_or_class: string|AnySDKClass): CHostageAlias_info_hostage_spawn;

declare interface CHostageCarriableProp {
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageCarriableProp(ptr_or_class: string|AnySDKClass): CHostageCarriableProp;

declare interface CHostageExpresserShim {
    readonly "Expresser": CAI_Expresser;
    readonly "Parent": CBaseCombatCharacter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageExpresserShim(ptr_or_class: string|AnySDKClass): CHostageExpresserShim;

declare interface CIncendiaryGrenade {
    readonly "Parent": CMolotovGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CIncendiaryGrenade(ptr_or_class: string|AnySDKClass): CIncendiaryGrenade;

declare interface CInferno {
    "FirePositions": Object;
    "FireParentPositions": Object;
    "FireIsBurning": Object;
    "BurnNormal": Object;
    "FireCount": number;
    "InfernoType": number;
    "FireEffectTickBegin": number;
    "FireLifetime": number;
    "InPostEffectTime": boolean;
    "FiresExtinguishCount": number;
    "WasCreatedInSmoke": boolean;
    readonly "Extent": Extent;
    readonly "DamageTimer": CountdownTimer;
    readonly "DamageRampTimer": CountdownTimer;
    "SplashVelocity": Vector;
    "InitialSplashVelocity": Vector;
    "StartPos": Vector;
    "OriginalSpawnLocation": Vector;
    readonly "ActiveTimer": IntervalTimer;
    "FireSpawnOffset": number;
    "MaxFlames": number;
    "SpreadCount": number;
    readonly "BookkeepingTimer": CountdownTimer;
    readonly "NextSpreadTimer": CountdownTimer;
    "SourceItemDefIndex": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInferno(ptr_or_class: string|AnySDKClass): CInferno;

declare interface CInfoData {
    readonly "Parent": CServerOnlyEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoData(ptr_or_class: string|AnySDKClass): CInfoData;

declare interface CInfoDeathmatchSpawn {
    readonly "Parent": SpawnPoint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoDeathmatchSpawn(ptr_or_class: string|AnySDKClass): CInfoDeathmatchSpawn;

declare interface CInfoGameEventProxy {
    "EventName": string;
    "Range": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoGameEventProxy(ptr_or_class: string|AnySDKClass): CInfoGameEventProxy;

declare interface CInfoInstructorHintBombTargetA {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoInstructorHintBombTargetA(ptr_or_class: string|AnySDKClass): CInfoInstructorHintBombTargetA;

declare interface CInfoInstructorHintBombTargetB {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoInstructorHintBombTargetB(ptr_or_class: string|AnySDKClass): CInfoInstructorHintBombTargetB;

declare interface CInfoInstructorHintHostageRescueZone {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoInstructorHintHostageRescueZone(ptr_or_class: string|AnySDKClass): CInfoInstructorHintHostageRescueZone;

declare interface CInfoInstructorHintTarget {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoInstructorHintTarget(ptr_or_class: string|AnySDKClass): CInfoInstructorHintTarget;

declare interface CInfoLadderDismount {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoLadderDismount(ptr_or_class: string|AnySDKClass): CInfoLadderDismount;

declare interface CInfoLandmark {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoLandmark(ptr_or_class: string|AnySDKClass): CInfoLandmark;

declare interface CInfoPlayerCounterterrorist {
    readonly "Parent": SpawnPoint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoPlayerCounterterrorist(ptr_or_class: string|AnySDKClass): CInfoPlayerCounterterrorist;

declare interface CInfoPlayerStart {
    "Disabled": boolean;
    "IsMaster": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoPlayerStart(ptr_or_class: string|AnySDKClass): CInfoPlayerStart;

declare interface CInfoPlayerTerrorist {
    readonly "Parent": SpawnPoint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoPlayerTerrorist(ptr_or_class: string|AnySDKClass): CInfoPlayerTerrorist;

declare interface CInfoSpawnGroupLandmark {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoSpawnGroupLandmark(ptr_or_class: string|AnySDKClass): CInfoSpawnGroupLandmark;

declare interface CInfoSpawnGroupLoadUnload {
    readonly "OnSpawnGroupLoadStarted": CEntityIOOutput;
    readonly "OnSpawnGroupLoadFinished": CEntityIOOutput;
    readonly "OnSpawnGroupUnloadStarted": CEntityIOOutput;
    readonly "OnSpawnGroupUnloadFinished": CEntityIOOutput;
    "SpawnGroupName": string;
    "SpawnGroupFilterName": string;
    "LandmarkName": string;
    "FixedSpawnGroupName": string;
    "TimeoutInterval": number;
    "StreamingStarted": boolean;
    "UnloadingStarted": boolean;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoSpawnGroupLoadUnload(ptr_or_class: string|AnySDKClass): CInfoSpawnGroupLoadUnload;

declare interface CInfoTargetServerOnly {
    readonly "Parent": CServerOnlyPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoTargetServerOnly(ptr_or_class: string|AnySDKClass): CInfoTargetServerOnly;

declare interface CInfoTeleportDestination {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoTeleportDestination(ptr_or_class: string|AnySDKClass): CInfoTeleportDestination;

declare interface CInfoVisibilityBox {
    "Mode": number;
    "BoxSize": Vector;
    "Enabled": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoVisibilityBox(ptr_or_class: string|AnySDKClass): CInfoVisibilityBox;

declare interface CInstancedSceneEntity {
    readonly "Owner": CBaseEntity;
    "HadOwner": boolean;
    "PostSpeakDelay": number;
    "PreDelay": number;
    "IsBackground": boolean;
    "RemoveOnCompletion": boolean;
    readonly "Target": CBaseEntity;
    readonly "Parent": CSceneEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInstancedSceneEntity(ptr_or_class: string|AnySDKClass): CInstancedSceneEntity;

declare interface CInstructorEventEntity {
    "Name": string;
    "HintTargetEntity": string;
    readonly "TargetPlayer": CBasePlayerPawn;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInstructorEventEntity(ptr_or_class: string|AnySDKClass): CInstructorEventEntity;

declare interface CIronSightController {
    "IronSightAvailable": boolean;
    "IronSightAmount": number;
    "IronSightAmountGained": number;
    "IronSightAmountBiased": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CIronSightController(ptr_or_class: string|AnySDKClass): CIronSightController;

declare interface CItem {
    readonly "OnPlayerTouch": CEntityIOOutput;
    readonly "OnPlayerPickup": CEntityIOOutput;
    "ActivateWhenAtRest": boolean;
    readonly "OnCacheInteraction": CEntityIOOutput;
    readonly "OnGlovePulled": CEntityIOOutput;
    "OriginalSpawnOrigin": Vector;
    "OriginalSpawnAngles": QAngle;
    "PhysStartAsleep": boolean;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItem(ptr_or_class: string|AnySDKClass): CItem;

declare interface CItemAssaultSuit {
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemAssaultSuit(ptr_or_class: string|AnySDKClass): CItemAssaultSuit;

declare interface CItemDefuser {
    readonly "EntitySpottedState": EntitySpottedState_t;
    "SpotRules": number;
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemDefuser(ptr_or_class: string|AnySDKClass): CItemDefuser;

declare interface CItemDefuserAlias_item_defuser {
    readonly "Parent": CItemDefuser;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemDefuserAlias_item_defuser(ptr_or_class: string|AnySDKClass): CItemDefuserAlias_item_defuser;

declare interface CItemDogtags {
    readonly "OwningPlayer": CCSPlayerPawn;
    readonly "KillingPlayer": CCSPlayerPawn;
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemDogtags(ptr_or_class: string|AnySDKClass): CItemDogtags;

declare interface CItemHeavyAssaultSuit {
    readonly "Parent": CItemAssaultSuit;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemHeavyAssaultSuit(ptr_or_class: string|AnySDKClass): CItemHeavyAssaultSuit;

declare interface CItemKevlar {
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemKevlar(ptr_or_class: string|AnySDKClass): CItemKevlar;

declare interface CItemSoda {
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemSoda(ptr_or_class: string|AnySDKClass): CItemSoda;

declare interface CItem_Healthshot {
    readonly "Parent": CWeaponBaseItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItem_Healthshot(ptr_or_class: string|AnySDKClass): CItem_Healthshot;

declare interface CKeepUpright {
    "WorldGoalAxis": Vector;
    "LocalTestAxis": Vector;
    "NameAttach": string;
    readonly "AttachedObject": CBaseEntity;
    "AngularLimit": number;
    "Active": boolean;
    "DampAllRotation": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CKeepUpright(ptr_or_class: string|AnySDKClass): CKeepUpright;

declare interface CKnife {
    "FirstAttack": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CKnife(ptr_or_class: string|AnySDKClass): CKnife;

declare interface CLightDirectionalEntity {
    readonly "Parent": CLightEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightDirectionalEntity(ptr_or_class: string|AnySDKClass): CLightDirectionalEntity;

declare interface CLightEntity {
    readonly "CLightComponent": CLightComponent;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightEntity(ptr_or_class: string|AnySDKClass): CLightEntity;

declare interface CLightEnvironmentEntity {
    readonly "Parent": CLightDirectionalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightEnvironmentEntity(ptr_or_class: string|AnySDKClass): CLightEnvironmentEntity;

declare interface CLightGlow {
    "HorizontalSize": number;
    "VerticalSize": number;
    "MinDist": number;
    "MaxDist": number;
    "OuterMaxDist": number;
    "GlowProxySize": number;
    "HDRColorScale": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightGlow(ptr_or_class: string|AnySDKClass): CLightGlow;

declare interface CLightOrthoEntity {
    readonly "Parent": CLightEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightOrthoEntity(ptr_or_class: string|AnySDKClass): CLightOrthoEntity;

declare interface CLightSpotEntity {
    readonly "Parent": CLightEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightSpotEntity(ptr_or_class: string|AnySDKClass): CLightSpotEntity;

declare interface CLogicAchievement {
    "Disabled": boolean;
    "AchievementEventID": string;
    readonly "OnFired": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicAchievement(ptr_or_class: string|AnySDKClass): CLogicAchievement;

declare interface CLogicActiveAutosave {
    "TriggerHitPoints": number;
    "TimeToTrigger": number;
    "StartTime": number;
    "DangerousTime": number;
    readonly "Parent": CLogicAutosave;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicActiveAutosave(ptr_or_class: string|AnySDKClass): CLogicActiveAutosave;

declare interface CLogicAuto {
    readonly "OnMapSpawn": CEntityIOOutput;
    readonly "OnDemoMapSpawn": CEntityIOOutput;
    readonly "OnNewGame": CEntityIOOutput;
    readonly "OnLoadGame": CEntityIOOutput;
    readonly "OnMapTransition": CEntityIOOutput;
    readonly "OnBackgroundMap": CEntityIOOutput;
    readonly "OnMultiNewMap": CEntityIOOutput;
    readonly "OnMultiNewRound": CEntityIOOutput;
    readonly "OnVREnabled": CEntityIOOutput;
    readonly "OnVRNotEnabled": CEntityIOOutput;
    "Globalstate": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicAuto(ptr_or_class: string|AnySDKClass): CLogicAuto;

declare interface CLogicAutosave {
    "ForceNewLevelUnit": boolean;
    "MinHitPoints": number;
    "MinHitPointsToCommit": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicAutosave(ptr_or_class: string|AnySDKClass): CLogicAutosave;

declare interface CLogicBranch {
    "InValue": boolean;
    readonly "OnTrue": CEntityIOOutput;
    readonly "OnFalse": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicBranch(ptr_or_class: string|AnySDKClass): CLogicBranch;

declare interface CLogicBranchList {
    "LogicBranchNames": Object;
    readonly "OnAllTrue": CEntityIOOutput;
    readonly "OnAllFalse": CEntityIOOutput;
    readonly "OnMixed": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicBranchList(ptr_or_class: string|AnySDKClass): CLogicBranchList;

declare interface CLogicCase {
    "Case": Object;
    "ShuffleCases": number;
    "LastShuffleCase": number;
    "UchShuffleCaseMap": Object;
    readonly "OnCase": Object;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicCase(ptr_or_class: string|AnySDKClass): CLogicCase;

declare interface CLogicCollisionPair {
    "NameAttach1": string;
    "NameAttach2": string;
    "SupportMultipleEntitiesWithSameName": boolean;
    "Disabled": boolean;
    "Succeeded": boolean;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicCollisionPair(ptr_or_class: string|AnySDKClass): CLogicCollisionPair;

declare interface CLogicCompare {
    "InValue": number;
    "CompareValue": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicCompare(ptr_or_class: string|AnySDKClass): CLogicCompare;

declare interface CLogicDistanceAutosave {
    "TargetEntity": string;
    "DistanceToPlayer": number;
    "ForceNewLevelUnit": boolean;
    "CheckCough": boolean;
    "ThinkDangerous": boolean;
    "DangerousTime": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicDistanceAutosave(ptr_or_class: string|AnySDKClass): CLogicDistanceAutosave;

declare interface CLogicDistanceCheck {
    "EntityA": string;
    "EntityB": string;
    "Zone1Distance": number;
    "Zone2Distance": number;
    readonly "InZone1": CEntityIOOutput;
    readonly "InZone2": CEntityIOOutput;
    readonly "InZone3": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicDistanceCheck(ptr_or_class: string|AnySDKClass): CLogicDistanceCheck;

declare interface CLogicEventListener {
    "StrEventName": string;
    "IsEnabled": boolean;
    "Team": number;
    readonly "OnEventFired": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicEventListener(ptr_or_class: string|AnySDKClass): CLogicEventListener;

declare interface CLogicGameEvent {
    "EventName": string;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicGameEvent(ptr_or_class: string|AnySDKClass): CLogicGameEvent;

declare interface CLogicGameEventListener {
    readonly "OnEventFired": CEntityIOOutput;
    "GameEventName": string;
    "GameEventItem": string;
    "Enabled": boolean;
    "StartDisabled": boolean;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicGameEventListener(ptr_or_class: string|AnySDKClass): CLogicGameEventListener;

declare interface CLogicLineToEntity {
    "SourceName": string;
    readonly "StartEntity": CBaseEntity;
    readonly "EndEntity": CBaseEntity;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicLineToEntity(ptr_or_class: string|AnySDKClass): CLogicLineToEntity;

declare interface CLogicMeasureMovement {
    "StrMeasureTarget": string;
    "StrMeasureReference": string;
    "StrTargetReference": string;
    readonly "MeasureTarget": CBaseEntity;
    readonly "MeasureReference": CBaseEntity;
    readonly "Target": CBaseEntity;
    readonly "TargetReference": CBaseEntity;
    "Scale": number;
    "MeasureType": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicMeasureMovement(ptr_or_class: string|AnySDKClass): CLogicMeasureMovement;

declare interface CLogicNPCCounter {
    readonly "OnMinCountAll": CEntityIOOutput;
    readonly "OnMaxCountAll": CEntityIOOutput;
    readonly "OnMinCount_1": CEntityIOOutput;
    readonly "OnMaxCount_1": CEntityIOOutput;
    readonly "OnMinCount_2": CEntityIOOutput;
    readonly "OnMaxCount_2": CEntityIOOutput;
    readonly "OnMinCount_3": CEntityIOOutput;
    readonly "OnMaxCount_3": CEntityIOOutput;
    readonly "Source": CEntityInstance;
    "SourceEntityName": string;
    "DistanceMax": number;
    "Disabled": boolean;
    "MinCountAll": number;
    "MaxCountAll": number;
    "MinFactorAll": number;
    "MaxFactorAll": number;
    "NPCClassname_1": string;
    "NPCState_1": number;
    "InvertState_1": boolean;
    "MinCount_1": number;
    "MaxCount_1": number;
    "MinFactor_1": number;
    "MaxFactor_1": number;
    "DefaultDist_1": number;
    "NPCClassname_2": string;
    "NPCState_2": number;
    "InvertState_2": boolean;
    "MinCount_2": number;
    "MaxCount_2": number;
    "MinFactor_2": number;
    "MaxFactor_2": number;
    "DefaultDist_2": number;
    "NPCClassname_3": string;
    "NPCState_3": number;
    "InvertState_3": boolean;
    "MinCount_3": number;
    "MaxCount_3": number;
    "MinFactor_3": number;
    "MaxFactor_3": number;
    "DefaultDist_3": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicNPCCounter(ptr_or_class: string|AnySDKClass): CLogicNPCCounter;

declare interface CLogicNPCCounterAABB {
    "DistanceOuterMins": Vector;
    "DistanceOuterMaxs": Vector;
    "OuterMins": Vector;
    "OuterMaxs": Vector;
    readonly "Parent": CLogicNPCCounter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicNPCCounterAABB(ptr_or_class: string|AnySDKClass): CLogicNPCCounterAABB;

declare interface CLogicNPCCounterOBB {
    readonly "Parent": CLogicNPCCounterAABB;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicNPCCounterOBB(ptr_or_class: string|AnySDKClass): CLogicNPCCounterOBB;

declare interface CLogicNavigation {
    "IsOn": boolean;
    "NavProperty": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicNavigation(ptr_or_class: string|AnySDKClass): CLogicNavigation;

declare interface CLogicPlayerProxy {
    readonly "Player": CBaseEntity;
    readonly "PlayerHasAmmo": CEntityIOOutput;
    readonly "PlayerHasNoAmmo": CEntityIOOutput;
    readonly "PlayerDied": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicPlayerProxy(ptr_or_class: string|AnySDKClass): CLogicPlayerProxy;

declare interface CLogicProximity {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicProximity(ptr_or_class: string|AnySDKClass): CLogicProximity;

declare interface CLogicScript {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicScript(ptr_or_class: string|AnySDKClass): CLogicScript;

declare interface CMapVetoPickController {
    "PlayedIntroVcd": boolean;
    "NeedToPlayFiveSecondsRemaining": boolean;
    "DblPreMatchDraftSequenceTime": number;
    "PreMatchDraftStateChanged": boolean;
    "DraftType": number;
    "TeamWinningCoinToss": number;
    "TeamWithFirstChoice": Object;
    "VoteMapIdsList": Object;
    "AccountIDs": Object;
    "MapId0": Object;
    "MapId1": Object;
    "MapId2": Object;
    "MapId3": Object;
    "MapId4": Object;
    "MapId5": Object;
    "StartingSide0": Object;
    "CurrentPhase": number;
    "PhaseStartTick": number;
    "PhaseDurationTicks": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMapVetoPickController(ptr_or_class: string|AnySDKClass): CMapVetoPickController;

declare interface CMarkupVolume {
    "Disabled": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolume(ptr_or_class: string|AnySDKClass): CMarkupVolume;

declare interface CMarkupVolumeTagged {
    "IsGroup": boolean;
    "GroupByPrefab": boolean;
    "GroupByVolume": boolean;
    "GroupOtherGroups": boolean;
    "IsInGroup": boolean;
    readonly "Parent": CMarkupVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolumeTagged(ptr_or_class: string|AnySDKClass): CMarkupVolumeTagged;

declare interface CMarkupVolumeTagged_Nav {
    readonly "Parent": CMarkupVolumeTagged;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolumeTagged_Nav(ptr_or_class: string|AnySDKClass): CMarkupVolumeTagged_Nav;

declare interface CMarkupVolumeTagged_NavGame {
    "FloodFillAttribute": boolean;
    readonly "Parent": CMarkupVolumeWithRef;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolumeTagged_NavGame(ptr_or_class: string|AnySDKClass): CMarkupVolumeTagged_NavGame;

declare interface CMarkupVolumeWithRef {
    "UseRef": boolean;
    "RefPos": Vector;
    "RefDot": number;
    readonly "Parent": CMarkupVolumeTagged;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolumeWithRef(ptr_or_class: string|AnySDKClass): CMarkupVolumeWithRef;

declare interface CMathColorBlend {
    "InMin": number;
    "InMax": number;
    "OutColor1": Color;
    "OutColor2": Color;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMathColorBlend(ptr_or_class: string|AnySDKClass): CMathColorBlend;

declare interface CMathCounter {
    "Min": number;
    "Max": number;
    "HitMin": boolean;
    "HitMax": boolean;
    "Disabled": boolean;
    readonly "OnHitMin": CEntityIOOutput;
    readonly "OnHitMax": CEntityIOOutput;
    readonly "OnChangedFromMin": CEntityIOOutput;
    readonly "OnChangedFromMax": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMathCounter(ptr_or_class: string|AnySDKClass): CMathCounter;

declare interface CMathRemap {
    "InMin": number;
    "InMax": number;
    "Out1": number;
    "Out2": number;
    "OldInValue": number;
    "Enabled": boolean;
    readonly "OnRoseAboveMin": CEntityIOOutput;
    readonly "OnRoseAboveMax": CEntityIOOutput;
    readonly "OnFellBelowMin": CEntityIOOutput;
    readonly "OnFellBelowMax": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMathRemap(ptr_or_class: string|AnySDKClass): CMathRemap;

declare interface CMelee {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMelee(ptr_or_class: string|AnySDKClass): CMelee;

declare interface CMessage {
    "Message": string;
    "MessageVolume": number;
    "MessageAttenuation": number;
    "Radius": number;
    "Noise": string;
    readonly "OnShowMessage": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMessage(ptr_or_class: string|AnySDKClass): CMessage;

declare interface CMessageEntity {
    "Radius": number;
    "MessageText": string;
    "DrawText": boolean;
    "DeveloperOnly": boolean;
    "Enabled": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMessageEntity(ptr_or_class: string|AnySDKClass): CMessageEntity;

declare interface CModelPointEntity {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelPointEntity(ptr_or_class: string|AnySDKClass): CModelPointEntity;

declare interface CMolotovGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMolotovGrenade(ptr_or_class: string|AnySDKClass): CMolotovGrenade;

declare interface CMolotovProjectile {
    "IsIncGrenade": boolean;
    "Detonated": boolean;
    readonly "StillTimer": IntervalTimer;
    "HasBouncedOffPlayer": boolean;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMolotovProjectile(ptr_or_class: string|AnySDKClass): CMolotovProjectile;

declare interface CMomentaryRotButton {
    readonly "OnUnpressed": CEntityIOOutput;
    readonly "OnFullyOpen": CEntityIOOutput;
    readonly "OnFullyClosed": CEntityIOOutput;
    readonly "OnReachedPosition": CEntityIOOutput;
    "LastUsed": number;
    "Start": QAngle;
    "End": QAngle;
    "IdealYaw": number;
    "Noise": string;
    "UpdateTarget": boolean;
    "Direction": number;
    "ReturnSpeed": number;
    "StartPosition": number;
    readonly "Parent": CRotButton;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMomentaryRotButton(ptr_or_class: string|AnySDKClass): CMomentaryRotButton;

declare interface CMotorController {
    "Speed": number;
    "MaxTorque": number;
    "Axis": Vector;
    "InertiaFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotorController(ptr_or_class: string|AnySDKClass): CMotorController;

declare interface CMoverPathNode {
    "InTangentLocal": Vector;
    "OutTangentLocal": Vector;
    "ParentPathUniqueID": string;
    readonly "OnPassThrough": CEntityIOOutput;
    readonly "OnPassThroughForward": CEntityIOOutput;
    readonly "OnPassThroughReverse": CEntityIOOutput;
    readonly "Mover": CPathMover;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMoverPathNode(ptr_or_class: string|AnySDKClass): CMoverPathNode;

declare interface CMultiLightProxy {
    "LightNameFilter": string;
    "LightClassFilter": string;
    "LightRadiusFilter": number;
    "BrightnessDelta": number;
    "PerformScreenFade": boolean;
    "TargetBrightnessMultiplier": number;
    "CurrentBrightnessMultiplier": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMultiLightProxy(ptr_or_class: string|AnySDKClass): CMultiLightProxy;

declare interface CMultiSource {
    readonly "RgEntities": Object;
    "RgTriggered": Object;
    readonly "OnTrigger": CEntityIOOutput;
    "Total": number;
    "Globalstate": string;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMultiSource(ptr_or_class: string|AnySDKClass): CMultiSource;

declare interface CMultiplayRules {
    readonly "Parent": CGameRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMultiplayRules(ptr_or_class: string|AnySDKClass): CMultiplayRules;

declare interface CMultiplayer_Expresser {
    "AllowMultipleScenes": boolean;
    readonly "Parent": CAI_ExpresserWithFollowup;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMultiplayer_Expresser(ptr_or_class: string|AnySDKClass): CMultiplayer_Expresser;

declare interface CNavLinkAreaEntity {
    "Width": number;
    "LocatorOffset": Vector;
    "LocatorAnglesOffset": QAngle;
    "StrMovementForward": string;
    "StrMovementReverse": string;
    "NavLinkIdForward": number;
    "NavLinkIdReverse": number;
    "Enabled": boolean;
    "StrFilterName": string;
    readonly "Filter": CBaseFilter;
    readonly "OnNavLinkStart": CEntityIOOutput;
    readonly "OnNavLinkFinish": CEntityIOOutput;
    "IsTerminus": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavLinkAreaEntity(ptr_or_class: string|AnySDKClass): CNavLinkAreaEntity;

declare interface CNavSpaceInfo {
    "CreateFlightSpace": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavSpaceInfo(ptr_or_class: string|AnySDKClass): CNavSpaceInfo;

declare interface CNavVolumeBreadthFirstSearch {
    "StartPos": Vector;
    "SearchDist": number;
    readonly "Parent": CNavVolumeCalculatedVector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeBreadthFirstSearch(ptr_or_class: string|AnySDKClass): CNavVolumeBreadthFirstSearch;

declare interface CNavVolumeCalculatedVector {
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeCalculatedVector(ptr_or_class: string|AnySDKClass): CNavVolumeCalculatedVector;

declare interface CNavVolumeMarkupVolume {
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeMarkupVolume(ptr_or_class: string|AnySDKClass): CNavVolumeMarkupVolume;

declare interface CNavWalkable {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavWalkable(ptr_or_class: string|AnySDKClass): CNavWalkable;

declare interface CNullEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNullEntity(ptr_or_class: string|AnySDKClass): CNullEntity;

declare interface COmniLight {
    "InnerAngle": number;
    "OuterAngle": number;
    "ShowLight": boolean;
    readonly "Parent": CBarnLight;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COmniLight(ptr_or_class: string|AnySDKClass): COmniLight;

declare interface COrnamentProp {
    "InitialOwner": string;
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COrnamentProp(ptr_or_class: string|AnySDKClass): COrnamentProp;

declare interface CParticleSystem {
    "SnapshotFileName": string;
    "Active": boolean;
    "Frozen": boolean;
    "FreezeTransitionDuration": number;
    "StopType": number;
    "AnimateDuringGameplayPause": boolean;
    "StartTime": number;
    "PreSimTime": number;
    "ServerControlPoints": Object;
    "ServerControlPointAssignments": Object;
    readonly "ControlPointEnts": Object;
    "NoSave": boolean;
    "NoFreeze": boolean;
    "NoRamp": boolean;
    "StartActive": boolean;
    "EffectName": string;
    "ControlPointNames": Object;
    "DataCP": number;
    "DataCPValue": Vector;
    "TintCP": number;
    "Tint": Color;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleSystem(ptr_or_class: string|AnySDKClass): CParticleSystem;

declare interface CPathCorner {
    "Wait": number;
    "Radius": number;
    readonly "OnPass": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathCorner(ptr_or_class: string|AnySDKClass): CPathCorner;

declare interface CPathCornerCrash {
    readonly "Parent": CPathCorner;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathCornerCrash(ptr_or_class: string|AnySDKClass): CPathCornerCrash;

declare interface CPathKeyFrame {
    "Origin": Vector;
    "Angles": QAngle;
    "NextKey": string;
    "NextTime": number;
    readonly "NextKey1": CPathKeyFrame;
    readonly "PrevKey": CPathKeyFrame;
    "MoveSpeed": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathKeyFrame(ptr_or_class: string|AnySDKClass): CPathKeyFrame;

declare interface CPathMover {
    "PathLength": number;
    "ClosedLoop": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathMover(ptr_or_class: string|AnySDKClass): CPathMover;

declare interface CPathParticleRope {
    "StartActive": boolean;
    "MaxSimulationTime": number;
    "EffectName": string;
    readonly "PathNodes_Name": Object;
    "ParticleSpacing": number;
    "Slack": number;
    "Radius": number;
    "ColorTint": Color;
    "EffectState": number;
    readonly "PathNodes_Position": Object;
    readonly "PathNodes_TangentIn": Object;
    readonly "PathNodes_TangentOut": Object;
    readonly "PathNodes_Color": Object;
    readonly "PathNodes_PinEnabled": Object;
    readonly "PathNodes_RadiusScale": Object;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathParticleRope(ptr_or_class: string|AnySDKClass): CPathParticleRope;

declare interface CPathParticleRopeAlias_path_particle_rope_clientside {
    readonly "Parent": CPathParticleRope;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathParticleRopeAlias_path_particle_rope_clientside(ptr_or_class: string|AnySDKClass): CPathParticleRopeAlias_path_particle_rope_clientside;

declare interface CPathTrack {
    readonly "Pnext": CPathTrack;
    readonly "Pprevious": CPathTrack;
    readonly "Paltpath": CPathTrack;
    "Radius": number;
    "Length": number;
    "AltName": string;
    "IterVal": number;
    "OrientationType": number;
    readonly "OnPass": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathTrack(ptr_or_class: string|AnySDKClass): CPathTrack;

declare interface CPhysBallSocket {
    "JointFriction": number;
    "EnableSwingLimit": boolean;
    "SwingLimit": number;
    "EnableTwistLimit": boolean;
    "MinTwistAngle": number;
    "MaxTwistAngle": number;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysBallSocket(ptr_or_class: string|AnySDKClass): CPhysBallSocket;

declare interface CPhysBox {
    "DamageType": number;
    "DamageToEnableMotion": number;
    "ForceToEnableMotion": number;
    "PreferredCarryAngles": QAngle;
    "NotSolidToWorld": boolean;
    "EnableUseOutput": boolean;
    "ExploitableByPlayer": number;
    "TouchOutputPerEntityDelay": number;
    readonly "OnDamaged": CEntityIOOutput;
    readonly "OnAwakened": CEntityIOOutput;
    readonly "OnMotionEnabled": CEntityIOOutput;
    readonly "OnPlayerUse": CEntityIOOutput;
    readonly "OnStartTouch": CEntityIOOutput;
    readonly "CarryingPlayer": CBasePlayerPawn;
    readonly "Parent": CBreakable;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysBox(ptr_or_class: string|AnySDKClass): CPhysBox;

declare interface CPhysConstraint {
    "NameAttach1": string;
    "NameAttach2": string;
    readonly "Attach1": CBaseEntity;
    readonly "Attach2": CBaseEntity;
    "NameAttachment1": string;
    "NameAttachment2": string;
    "BreakSound": string;
    "ForceLimit": number;
    "TorqueLimit": number;
    "TeleportTick": number;
    "MinTeleportDistance": number;
    "SnapObjectPositions": boolean;
    readonly "OnBreak": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysConstraint(ptr_or_class: string|AnySDKClass): CPhysConstraint;

declare interface CPhysExplosion {
    "ExplodeOnSpawn": boolean;
    "Magnitude": number;
    "Damage": number;
    "Radius": number;
    "TargetEntityName": string;
    "InnerRadius": number;
    "PushScale": number;
    "ConvertToDebrisWhenPossible": boolean;
    readonly "OnPushedPlayer": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysExplosion(ptr_or_class: string|AnySDKClass): CPhysExplosion;

declare interface CPhysFixed {
    "LinearFrequency": number;
    "LinearDampingRatio": number;
    "AngularFrequency": number;
    "AngularDampingRatio": number;
    "EnableLinearConstraint": boolean;
    "EnableAngularConstraint": boolean;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysFixed(ptr_or_class: string|AnySDKClass): CPhysFixed;

declare interface CPhysForce {
    "NameAttach": string;
    "Force": number;
    "ForceTime": number;
    readonly "AttachedObject": CBaseEntity;
    "WasRestored": boolean;
    readonly "Integrator": CConstantForceController;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysForce(ptr_or_class: string|AnySDKClass): CPhysForce;

declare interface CPhysHinge {
    readonly "SoundInfo": ConstraintSoundInfo;
    readonly "NotifyMinLimitReached": CEntityIOOutput;
    readonly "NotifyMaxLimitReached": CEntityIOOutput;
    "AtMinLimit": boolean;
    "AtMaxLimit": boolean;
    readonly "Hinge": constraint_hingeparams_t;
    "HingeFriction": number;
    "SystemLoadScale": number;
    "IsAxisLocal": boolean;
    "MinRotation": number;
    "MaxRotation": number;
    "InitialRotation": number;
    "MotorFrequency": number;
    "MotorDampingRatio": number;
    "AngleSpeed": number;
    "AngleSpeedThreshold": number;
    readonly "OnStartMoving": CEntityIOOutput;
    readonly "OnStopMoving": CEntityIOOutput;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysHinge(ptr_or_class: string|AnySDKClass): CPhysHinge;

declare interface CPhysHingeAlias_phys_hinge_local {
    readonly "Parent": CPhysHinge;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysHingeAlias_phys_hinge_local(ptr_or_class: string|AnySDKClass): CPhysHingeAlias_phys_hinge_local;

declare interface CPhysImpact {
    "Damage": number;
    "Distance": number;
    "DirectionEntityName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysImpact(ptr_or_class: string|AnySDKClass): CPhysImpact;

declare interface CPhysLength {
    "Offset": Object;
    "Attach": Vector;
    "AddLength": number;
    "MinLength": number;
    "TotalLength": number;
    "EnableCollision": boolean;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysLength(ptr_or_class: string|AnySDKClass): CPhysLength;

declare interface CPhysMagnet {
    readonly "OnMagnetAttach": CEntityIOOutput;
    readonly "OnMagnetDetach": CEntityIOOutput;
    "MassScale": number;
    "ForceLimit": number;
    "TorqueLimit": number;
    readonly "MagnettedEntities": Object;
    "Active": boolean;
    "HasHitSomething": boolean;
    "TotalMass": number;
    "Radius": number;
    "NextSuckTime": number;
    "MaxObjectsAttached": number;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysMagnet(ptr_or_class: string|AnySDKClass): CPhysMagnet;

declare interface CPhysMotor {
    "NameAttach": string;
    readonly "AttachedObject": CBaseEntity;
    "SpinUp": number;
    "AdditionalAcceleration": number;
    "AngularAcceleration": number;
    "LastTime": number;
    readonly "Motor": CMotorController;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysMotor(ptr_or_class: string|AnySDKClass): CPhysMotor;

declare interface CPhysPulley {
    "Position2": Vector;
    "Offset": Object;
    "AddLength": number;
    "GearRatio": number;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysPulley(ptr_or_class: string|AnySDKClass): CPhysPulley;

declare interface CPhysSlideConstraint {
    "AxisEnd": Vector;
    "SlideFriction": number;
    "SystemLoadScale": number;
    "InitialOffset": number;
    "EnableLinearConstraint": boolean;
    "EnableAngularConstraint": boolean;
    "MotorFrequency": number;
    "MotorDampingRatio": number;
    "UseEntityPivot": boolean;
    readonly "SoundInfo": ConstraintSoundInfo;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysSlideConstraint(ptr_or_class: string|AnySDKClass): CPhysSlideConstraint;

declare interface CPhysThruster {
    "LocalOrigin": Vector;
    readonly "Parent": CPhysForce;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysThruster(ptr_or_class: string|AnySDKClass): CPhysThruster;

declare interface CPhysTorque {
    "Axis": Vector;
    readonly "Parent": CPhysForce;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysTorque(ptr_or_class: string|AnySDKClass): CPhysTorque;

declare interface CPhysWheelConstraint {
    "SuspensionFrequency": number;
    "SuspensionDampingRatio": number;
    "SuspensionHeightOffset": number;
    "EnableSuspensionLimit": boolean;
    "MinSuspensionOffset": number;
    "MaxSuspensionOffset": number;
    "EnableSteeringLimit": boolean;
    "MinSteeringAngle": number;
    "MaxSteeringAngle": number;
    "SteeringAxisFriction": number;
    "SpinAxisFriction": number;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysWheelConstraint(ptr_or_class: string|AnySDKClass): CPhysWheelConstraint;

declare interface CPhysicalButton {
    readonly "Parent": CBaseButton;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicalButton(ptr_or_class: string|AnySDKClass): CPhysicalButton;

declare interface CPhysicsEntitySolver {
    readonly "MovingEntity": CBaseEntity;
    readonly "PhysicsBlocker": CBaseEntity;
    "SeparationDuration": number;
    "CancelTime": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsEntitySolver(ptr_or_class: string|AnySDKClass): CPhysicsEntitySolver;

declare interface CPhysicsProp {
    readonly "MotionEnabled": CEntityIOOutput;
    readonly "OnAwakened": CEntityIOOutput;
    readonly "OnAwake": CEntityIOOutput;
    readonly "OnAsleep": CEntityIOOutput;
    readonly "OnPlayerUse": CEntityIOOutput;
    readonly "OnOutOfWorld": CEntityIOOutput;
    readonly "OnPlayerPickup": CEntityIOOutput;
    "ForceNavIgnore": boolean;
    "NoNavmeshBlocker": boolean;
    "ForceNpcExclude": boolean;
    "MassScale": number;
    "InertiaScale": number;
    "BuoyancyScale": number;
    "DamageType": number;
    "DamageToEnableMotion": number;
    "ForceToEnableMotion": number;
    "ThrownByPlayer": boolean;
    "DroppedByPlayer": boolean;
    "TouchedByPlayer": boolean;
    "FirstCollisionAfterLaunch": boolean;
    "ExploitableByPlayer": number;
    "HasBeenAwakened": boolean;
    "IsOverrideProp": boolean;
    "NextCheckDisableMotionContactsTime": number;
    "InitialGlowState": number;
    "GlowRange": number;
    "GlowRangeMin": number;
    "GlowColor": Color;
    "ShouldAutoConvertBackFromDebris": boolean;
    "MuteImpactEffects": boolean;
    "AcceptDamageFromHeldObjects": boolean;
    "EnableUseOutput": boolean;
    readonly "CrateType": any;
    "StrItemClass": Object;
    "ItemCount": Object;
    "RemovableForAmmoBalancing": boolean;
    "Awake": boolean;
    readonly "Parent": CBreakableProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsProp(ptr_or_class: string|AnySDKClass): CPhysicsProp;

declare interface CPhysicsPropMultiplayer {
    readonly "Parent": CPhysicsProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsPropMultiplayer(ptr_or_class: string|AnySDKClass): CPhysicsPropMultiplayer;

declare interface CPhysicsPropOverride {
    readonly "Parent": CPhysicsProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsPropOverride(ptr_or_class: string|AnySDKClass): CPhysicsPropOverride;

declare interface CPhysicsPropRespawnable {
    "OriginalSpawnOrigin": Vector;
    "OriginalSpawnAngles": QAngle;
    "OriginalMins": Vector;
    "OriginalMaxs": Vector;
    "RespawnDuration": number;
    readonly "Parent": CPhysicsProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsPropRespawnable(ptr_or_class: string|AnySDKClass): CPhysicsPropRespawnable;

declare interface CPhysicsShake {
    "Force": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsShake(ptr_or_class: string|AnySDKClass): CPhysicsShake;

declare interface CPhysicsSpring {
    "Frequency": number;
    "DampingRatio": number;
    "RestLength": number;
    "NameAttachStart": string;
    "NameAttachEnd": string;
    "Start": Vector;
    "End": Vector;
    "TeleportTick": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsSpring(ptr_or_class: string|AnySDKClass): CPhysicsSpring;

declare interface CPhysicsWire {
    "Density": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsWire(ptr_or_class: string|AnySDKClass): CPhysicsWire;

declare interface CPlantedC4 {
    "BombTicking": boolean;
    "C4Blow": number;
    "BombSite": number;
    "SourceSoundscapeHash": number;
    readonly "AttributeManager": CAttributeContainer;
    readonly "OnBombDefused": CEntityIOOutput;
    readonly "OnBombBeginDefuse": CEntityIOOutput;
    readonly "OnBombDefuseAborted": CEntityIOOutput;
    "CannotBeDefused": boolean;
    readonly "EntitySpottedState": EntitySpottedState_t;
    "SpotRules": number;
    "TrainingPlacedByPlayer": boolean;
    "HasExploded": boolean;
    "TimerLength": number;
    "BeingDefused": boolean;
    "LastDefuseTime": number;
    "DefuseLength": number;
    "DefuseCountDown": number;
    "BombDefused": boolean;
    readonly "BombDefuser": CCSPlayerPawn;
    readonly "ControlPanel": CBaseEntity;
    "ProgressBarTime": number;
    "VoiceAlertFired": boolean;
    "VoiceAlertPlayed": Object;
    "NextBotBeepTime": number;
    "CatchUpToPlayerEye": QAngle;
    "LastSpinDetectionTime": number;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlantedC4(ptr_or_class: string|AnySDKClass): CPlantedC4;

declare interface CPlatTrigger {
    readonly "Platform": CFuncPlat;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlatTrigger(ptr_or_class: string|AnySDKClass): CPlatTrigger;

declare interface CPlayerPing {
    readonly "Player": CCSPlayerPawn;
    readonly "PingedEntity": CBaseEntity;
    "Type": number;
    "Urgent": boolean;
    "PlaceName": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerPing(ptr_or_class: string|AnySDKClass): CPlayerPing;

declare interface CPlayerSprayDecal {
    "UniqueID": number;
    "AccountID": number;
    "TraceID": number;
    "RtGcTime": number;
    "EndPos": Vector;
    "Start": Vector;
    "Left": Vector;
    "Normal": Vector;
    "Player": number;
    "Entity": number;
    "Hitbox": number;
    "CreationTime": number;
    "TintID": number;
    "Version": number;
    "Signature": Object;
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerSprayDecal(ptr_or_class: string|AnySDKClass): CPlayerSprayDecal;

declare interface CPlayerVisibility {
    "VisibilityStrength": number;
    "FogDistanceMultiplier": number;
    "FogMaxDensityMultiplier": number;
    "FadeTime": number;
    "StartDisabled": boolean;
    "IsEnabled": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerVisibility(ptr_or_class: string|AnySDKClass): CPlayerVisibility;

declare interface CPointAngleSensor {
    "Disabled": boolean;
    "LookAtName": string;
    readonly "TargetEntity": CBaseEntity;
    readonly "LookAtEntity": CBaseEntity;
    "Duration": number;
    "DotTolerance": number;
    "FacingTime": number;
    "Fired": boolean;
    readonly "OnFacingLookat": CEntityIOOutput;
    readonly "OnNotFacingLookat": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointAngleSensor(ptr_or_class: string|AnySDKClass): CPointAngleSensor;

declare interface CPointAngularVelocitySensor {
    readonly "TargetEntity": CBaseEntity;
    "Threshold": number;
    "LastCompareResult": number;
    "LastFireResult": number;
    "FireTime": number;
    "FireInterval": number;
    "LastAngVelocity": number;
    "LastOrientation": QAngle;
    "Axis": Vector;
    "UseHelper": boolean;
    readonly "OnLessThan": CEntityIOOutput;
    readonly "OnLessThanOrEqualTo": CEntityIOOutput;
    readonly "OnGreaterThan": CEntityIOOutput;
    readonly "OnGreaterThanOrEqualTo": CEntityIOOutput;
    readonly "OnEqualTo": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointAngularVelocitySensor(ptr_or_class: string|AnySDKClass): CPointAngularVelocitySensor;

declare interface CPointBroadcastClientCommand {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointBroadcastClientCommand(ptr_or_class: string|AnySDKClass): CPointBroadcastClientCommand;

declare interface CPointCamera {
    "FOV": number;
    "Resolution": number;
    "FogEnable": boolean;
    "FogColor": Color;
    "FogStart": number;
    "FogEnd": number;
    "FogMaxDensity": number;
    "Active": boolean;
    "UseScreenAspectRatio": boolean;
    "AspectRatio": number;
    "NoSky": boolean;
    "Brightness": number;
    "ZFar": number;
    "ZNear": number;
    "CanHLTVUse": boolean;
    "AlignWithParent": boolean;
    "DofEnabled": boolean;
    "DofNearBlurry": number;
    "DofNearCrisp": number;
    "DofFarCrisp": number;
    "DofFarBlurry": number;
    "DofTiltToGround": number;
    "TargetFOV": number;
    "DegreesPerSecond": number;
    "IsOn": boolean;
    readonly "Next": CPointCamera;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointCamera(ptr_or_class: string|AnySDKClass): CPointCamera;

declare interface CPointCameraVFOV {
    "VerticalFOV": number;
    readonly "Parent": CPointCamera;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointCameraVFOV(ptr_or_class: string|AnySDKClass): CPointCameraVFOV;

declare interface CPointClientCommand {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointClientCommand(ptr_or_class: string|AnySDKClass): CPointClientCommand;

declare interface CPointClientUIDialog {
    readonly "Activator": CBaseEntity;
    "StartEnabled": boolean;
    readonly "Parent": CBaseClientUIEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointClientUIDialog(ptr_or_class: string|AnySDKClass): CPointClientUIDialog;

declare interface CPointClientUIWorldPanel {
    "IgnoreInput": boolean;
    "Lit": boolean;
    "FollowPlayerAcrossTeleport": boolean;
    "Width": number;
    "Height": number;
    "DPI": number;
    "InteractDistance": number;
    "DepthOffset": number;
    "OwnerContext": number;
    "HorizontalAlign": number;
    "VerticalAlign": number;
    "Orientation": number;
    "AllowInteractionFromAllSceneWorlds": boolean;
    readonly "CSSClasses": Object;
    "Opaque": boolean;
    "NoDepth": boolean;
    "RenderBackface": boolean;
    "UseOffScreenIndicator": boolean;
    "ExcludeFromSaveGames": boolean;
    "Grabbable": boolean;
    "OnlyRenderToTexture": boolean;
    "DisableMipGen": boolean;
    "ExplicitImageLayout": number;
    readonly "Parent": CBaseClientUIEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointClientUIWorldPanel(ptr_or_class: string|AnySDKClass): CPointClientUIWorldPanel;

declare interface CPointClientUIWorldTextPanel {
    "MessageText": string;
    readonly "Parent": CPointClientUIWorldPanel;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointClientUIWorldTextPanel(ptr_or_class: string|AnySDKClass): CPointClientUIWorldTextPanel;

declare interface CPointEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointEntity(ptr_or_class: string|AnySDKClass): CPointEntity;

declare interface CPointEntityFinder {
    readonly "Entity": CBaseEntity;
    "FilterName": string;
    readonly "Filter": CBaseFilter;
    "RefName": string;
    readonly "Reference": CBaseEntity;
    "FindMethod": number;
    readonly "OnFoundEntity": CEntityIOOutput;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointEntityFinder(ptr_or_class: string|AnySDKClass): CPointEntityFinder;

declare interface CPointGamestatsCounter {
    "StrStatisticName": string;
    "Disabled": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointGamestatsCounter(ptr_or_class: string|AnySDKClass): CPointGamestatsCounter;

declare interface CPointGiveAmmo {
    readonly "Activator": CBaseEntity;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointGiveAmmo(ptr_or_class: string|AnySDKClass): CPointGiveAmmo;

declare interface CPointHurt {
    "Damage": number;
    "BitsDamageType": number;
    "Radius": number;
    "Delay": number;
    "StrTarget": string;
    readonly "Activator": CBaseEntity;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointHurt(ptr_or_class: string|AnySDKClass): CPointHurt;

declare interface CPointPrefab {
    "TargetMapName": string;
    "ForceWorldGroupID": string;
    "AssociatedRelayTargetName": string;
    "FixupNames": boolean;
    "LoadDynamic": boolean;
    readonly "AssociatedRelayEntity": CPointPrefab;
    readonly "Parent": CServerOnlyPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointPrefab(ptr_or_class: string|AnySDKClass): CPointPrefab;

declare interface CPointProximitySensor {
    "Disabled": boolean;
    readonly "TargetEntity": CBaseEntity;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointProximitySensor(ptr_or_class: string|AnySDKClass): CPointProximitySensor;

declare interface CPointPush {
    "Enabled": boolean;
    "Magnitude": number;
    "Radius": number;
    "InnerRadius": number;
    "ConeOfInfluence": number;
    "FilterName": string;
    readonly "Filter": CBaseFilter;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointPush(ptr_or_class: string|AnySDKClass): CPointPush;

declare interface CPointServerCommand {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointServerCommand(ptr_or_class: string|AnySDKClass): CPointServerCommand;

declare interface CPointTeleport {
    "SaveOrigin": Vector;
    "SaveAngles": QAngle;
    "TeleportParentedEntities": boolean;
    "TeleportUseCurrentAngle": boolean;
    readonly "Parent": CServerOnlyPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointTeleport(ptr_or_class: string|AnySDKClass): CPointTeleport;

declare interface CPointValueRemapper {
    "Disabled": boolean;
    "UpdateOnClient": boolean;
    "InputType": number;
    "RemapLineStartName": string;
    "RemapLineEndName": string;
    readonly "RemapLineStart": CBaseEntity;
    readonly "RemapLineEnd": CBaseEntity;
    "MaximumChangePerSecond": number;
    "DisengageDistance": number;
    "EngageDistance": number;
    "RequiresUseKey": boolean;
    "OutputType": number;
    "OutputEntityName": string;
    "OutputEntity2Name": string;
    "OutputEntity3Name": string;
    "OutputEntity4Name": string;
    "HapticsType": number;
    "MomentumType": number;
    "MomentumModifier": number;
    "SnapValue": number;
    "CurrentMomentum": number;
    "RatchetType": number;
    "RatchetOffset": number;
    "InputOffset": number;
    "Engaged": boolean;
    "FirstUpdate": boolean;
    "PreviousValue": number;
    "PreviousUpdateTickTime": number;
    "PreviousTestPoint": Vector;
    readonly "UsingPlayer": CBasePlayerPawn;
    "CustomOutputValue": number;
    "SoundEngage": string;
    "SoundDisengage": string;
    "SoundReachedValueZero": string;
    "SoundReachedValueOne": string;
    "SoundMovingLoop": string;
    readonly "OnReachedValueZero": CEntityIOOutput;
    readonly "OnReachedValueOne": CEntityIOOutput;
    readonly "OnReachedValueCustom": CEntityIOOutput;
    readonly "OnEngage": CEntityIOOutput;
    readonly "OnDisengage": CEntityIOOutput;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointValueRemapper(ptr_or_class: string|AnySDKClass): CPointValueRemapper;

declare interface CPointVelocitySensor {
    readonly "TargetEntity": CBaseEntity;
    "Axis": Vector;
    "Enabled": boolean;
    "PrevVelocity": number;
    "AvgInterval": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointVelocitySensor(ptr_or_class: string|AnySDKClass): CPointVelocitySensor;

declare interface CPointWorldText {
    "MessageText": string;
    "FontName": string;
    "BackgroundMaterialName": string;
    "Enabled": boolean;
    "Fullbright": boolean;
    "WorldUnitsPerPx": number;
    "FontSize": number;
    "DepthOffset": number;
    "DrawBackground": boolean;
    "BackgroundBorderWidth": number;
    "BackgroundBorderHeight": number;
    "BackgroundWorldToUV": number;
    "Color": Color;
    "JustifyHorizontal": number;
    "JustifyVertical": number;
    "ReorientMode": number;
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointWorldText(ptr_or_class: string|AnySDKClass): CPointWorldText;

declare interface CPostProcessingVolume {
    "FadeDuration": number;
    "MinLogExposure": number;
    "MaxLogExposure": number;
    "MinExposure": number;
    "MaxExposure": number;
    "ExposureCompensation": number;
    "ExposureFadeSpeedUp": number;
    "ExposureFadeSpeedDown": number;
    "TonemapEVSmoothingRange": number;
    "Master": boolean;
    "ExposureControl": boolean;
    "Rate": number;
    "TonemapPercentTarget": number;
    "TonemapPercentBrightPixels": number;
    "TonemapMinAvgLum": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPostProcessingVolume(ptr_or_class: string|AnySDKClass): CPostProcessingVolume;

declare interface CPrecipitation {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPrecipitation(ptr_or_class: string|AnySDKClass): CPrecipitation;

declare interface CPrecipitationBlocker {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPrecipitationBlocker(ptr_or_class: string|AnySDKClass): CPrecipitationBlocker;

declare interface CPredictedViewModel {
    readonly "Parent": CBaseViewModel;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPredictedViewModel(ptr_or_class: string|AnySDKClass): CPredictedViewModel;

declare interface CProjectedDecal {
    "Texture": number;
    "Distance": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CProjectedDecal(ptr_or_class: string|AnySDKClass): CProjectedDecal;

declare interface CPropDoorRotating {
    "Axis": Vector;
    "Distance": number;
    "SpawnPosition": number;
    "OpenDirection": number;
    "CurrentOpenDirection": number;
    "AjarAngle": number;
    "RotationAjarDeprecated": QAngle;
    "RotationClosed": QAngle;
    "RotationOpenForward": QAngle;
    "RotationOpenBack": QAngle;
    "Goal": QAngle;
    "ForwardBoundsMin": Vector;
    "ForwardBoundsMax": Vector;
    "BackBoundsMin": Vector;
    "BackBoundsMax": Vector;
    "AjarDoorShouldntAlwaysOpen": boolean;
    readonly "EntityBlocker": CEntityBlocker;
    readonly "Parent": CBasePropDoor;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPropDoorRotating(ptr_or_class: string|AnySDKClass): CPropDoorRotating;

declare interface CPropDoorRotatingBreakable {
    "Breakable": boolean;
    "IsAbleToCloseAreaPortals": boolean;
    "CurrentDamageState": number;
    readonly "DamageStates": Object;
    readonly "Parent": CPropDoorRotating;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPropDoorRotatingBreakable(ptr_or_class: string|AnySDKClass): CPropDoorRotatingBreakable;

declare interface CPushable {
    readonly "Parent": CBreakable;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPushable(ptr_or_class: string|AnySDKClass): CPushable;

declare interface CRagdollConstraint {
    "Xmin": number;
    "Xmax": number;
    "Ymin": number;
    "Ymax": number;
    "Zmin": number;
    "Zmax": number;
    "Xfriction": number;
    "Yfriction": number;
    "Zfriction": number;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollConstraint(ptr_or_class: string|AnySDKClass): CRagdollConstraint;

declare interface CRagdollMagnet {
    "Disabled": boolean;
    "Radius": number;
    "Force": number;
    "Axis": Vector;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollMagnet(ptr_or_class: string|AnySDKClass): CRagdollMagnet;

declare interface CRagdollProp {
    readonly "Ragdoll": ragdoll_t;
    "StartDisabled": boolean;
    readonly "RagPos": Object;
    readonly "RagAngles": Object;
    readonly "RagdollSource": CBaseEntity;
    "LastUpdateTickCount": number;
    "AllAsleep": boolean;
    "FirstCollisionAfterLaunch": boolean;
    readonly "DamageEntity": CBaseEntity;
    readonly "Killer": CBaseEntity;
    readonly "PhysicsAttacker": CBasePlayerPawn;
    "LastPhysicsInfluenceTime": number;
    "FadeOutStartTime": number;
    "FadeTime": number;
    "LastOrigin": Vector;
    "AwakeTime": number;
    "LastOriginChangeTime": number;
    "StrOriginClassName": string;
    "StrSourceClassName": string;
    "HasBeenPhysgunned": boolean;
    "ShouldTeleportPhysics": boolean;
    "BlendWeight": number;
    "DefaultFadeScale": number;
    readonly "RagdollMins": Object;
    readonly "RagdollMaxs": Object;
    "ShouldDeleteActivationRecord": boolean;
    "ValidatePoweredRagdollPose": boolean;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollProp(ptr_or_class: string|AnySDKClass): CRagdollProp;

declare interface CRagdollPropAlias_physics_prop_ragdoll {
    readonly "Parent": CRagdollProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollPropAlias_physics_prop_ragdoll(ptr_or_class: string|AnySDKClass): CRagdollPropAlias_physics_prop_ragdoll;

declare interface CRagdollPropAttached {
    "BoneIndexAttached": number;
    "RagdollAttachedObjectIndex": number;
    "AttachmentPointBoneSpace": Vector;
    "AttachmentPointRagdollSpace": Vector;
    "ShouldDetach": boolean;
    "ShouldDeleteAttachedActivationRecord": boolean;
    readonly "Parent": CRagdollProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollPropAttached(ptr_or_class: string|AnySDKClass): CRagdollPropAttached;

declare interface CRectLight {
    "ShowLight": boolean;
    readonly "Parent": CBarnLight;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRectLight(ptr_or_class: string|AnySDKClass): CRectLight;

declare interface CResponseQueue {
    readonly "ExpresserTargets": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CResponseQueue(ptr_or_class: string|AnySDKClass): CResponseQueue;

declare interface CRetakeGameRules {
    "MatchSeed": number;
    "BlockersPresent": boolean;
    "RoundInProgress": boolean;
    "FirstSecondHalfRound": number;
    "BombSite": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRetakeGameRules(ptr_or_class: string|AnySDKClass): CRetakeGameRules;

declare interface CRevertSaved {
    "LoadTime": number;
    "Duration": number;
    "HoldTime": number;
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRevertSaved(ptr_or_class: string|AnySDKClass): CRevertSaved;

declare interface CRopeKeyframe {
    "RopeFlags": number;
    "NextLinkName": string;
    "Slack": number;
    "Width": number;
    "TextureScale": number;
    "Segments": number;
    "ConstrainBetweenEndpoints": boolean;
    "StrRopeMaterialModel": string;
    "Subdiv": number;
    "ChangeCount": number;
    "RopeLength": number;
    "LockedPoints": number;
    "CreatedFromMapFile": boolean;
    "ScrollSpeed": number;
    "StartPointValid": boolean;
    "EndPointValid": boolean;
    readonly "StartPoint": CBaseEntity;
    readonly "EndPoint": CBaseEntity;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRopeKeyframe(ptr_or_class: string|AnySDKClass): CRopeKeyframe;

declare interface CRopeKeyframeAlias_move_rope {
    readonly "Parent": CRopeKeyframe;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRopeKeyframeAlias_move_rope(ptr_or_class: string|AnySDKClass): CRopeKeyframeAlias_move_rope;

declare interface CRotButton {
    readonly "Parent": CBaseButton;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRotButton(ptr_or_class: string|AnySDKClass): CRotButton;

declare interface CRotDoor {
    "SolidBsp": boolean;
    readonly "Parent": CBaseDoor;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRotDoor(ptr_or_class: string|AnySDKClass): CRotDoor;

declare interface CRuleBrushEntity {
    readonly "Parent": CRuleEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRuleBrushEntity(ptr_or_class: string|AnySDKClass): CRuleBrushEntity;

declare interface CRuleEntity {
    "Master": string;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRuleEntity(ptr_or_class: string|AnySDKClass): CRuleEntity;

declare interface CRulePointEntity {
    "Score": number;
    readonly "Parent": CRuleEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRulePointEntity(ptr_or_class: string|AnySDKClass): CRulePointEntity;

declare interface CSAdditionalMatchStats_t {
    "NumRoundsSurvived": number;
    "MaxNumRoundsSurvived": number;
    "NumRoundsSurvivedTotal": number;
    "RoundsWonWithoutPurchase": number;
    "RoundsWonWithoutPurchaseTotal": number;
    "NumFirstKills": number;
    "NumClutchKills": number;
    "NumPistolKills": number;
    "NumSniperKills": number;
    "NumSuicides": number;
    "NumTeamKills": number;
    "TeamDamage": number;
    readonly "Parent": CSAdditionalPerRoundStats_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSAdditionalMatchStats_t(ptr_or_class: string|AnySDKClass): CSAdditionalMatchStats_t;

declare interface CSAdditionalPerRoundStats_t {
    "NumChickensKilled": number;
    "KillsWhileBlind": number;
    "BombCarrierkills": number;
    "BurnDamageInflicted": number;
    "BlastDamageInflicted": number;
    "Dinks": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSAdditionalPerRoundStats_t(ptr_or_class: string|AnySDKClass): CSAdditionalPerRoundStats_t;

declare interface CSceneEntity {
    "SceneFile": string;
    "ResumeSceneFile": string;
    "Target1": string;
    "Target2": string;
    "Target3": string;
    "Target4": string;
    "Target5": string;
    "Target6": string;
    "Target7": string;
    "Target8": string;
    readonly "Target11": CBaseEntity;
    readonly "Target21": CBaseEntity;
    readonly "Target31": CBaseEntity;
    readonly "Target41": CBaseEntity;
    readonly "Target51": CBaseEntity;
    readonly "Target61": CBaseEntity;
    readonly "Target71": CBaseEntity;
    readonly "Target81": CBaseEntity;
    "TargetAttachment": string;
    "IsPlayingBack": boolean;
    "Paused": boolean;
    "Multiplayer": boolean;
    "Autogenerated": boolean;
    "ForceClientTime": number;
    "CurrentTime": number;
    "FrameTime": number;
    "CancelAtNextInterrupt": boolean;
    "Pitch": number;
    "Automated": boolean;
    "AutomatedAction": number;
    "AutomationDelay": number;
    "AutomationTime": number;
    readonly "WaitingForThisResumeScene": CBaseEntity;
    "WaitingForResumeScene": boolean;
    "PausedViaInput": boolean;
    "PauseAtNextInterrupt": boolean;
    "WaitingForActor": boolean;
    "WaitingForInterrupt": boolean;
    "InterruptedActorsScenes": boolean;
    "BreakOnNonIdle": boolean;
    "SceneFinished": boolean;
    "SceneFlushCounter": number;
    "SceneStringIndex": number;
    readonly "OnStart": CEntityIOOutput;
    readonly "OnCompletion": CEntityIOOutput;
    readonly "OnCanceled": CEntityIOOutput;
    readonly "OnPaused": CEntityIOOutput;
    readonly "OnResumed": CEntityIOOutput;
    readonly "OnTrigger": Object;
    readonly "InterruptScene": CSceneEntity;
    "InterruptCount": number;
    "SceneMissing": boolean;
    "Interrupted": boolean;
    "CompletedEarly": boolean;
    "InterruptSceneFinished": boolean;
    "Restoring": boolean;
    "SoundName": string;
    "SequenceName": string;
    readonly "Actor": CBaseFlex;
    readonly "Activator": CBaseEntity;
    "BusyActor": number;
    "PlayerDeathBehavior": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneEntity(ptr_or_class: string|AnySDKClass): CSceneEntity;

declare interface CSceneEntityAlias_logic_choreographed_scene {
    readonly "Parent": CSceneEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneEntityAlias_logic_choreographed_scene(ptr_or_class: string|AnySDKClass): CSceneEntityAlias_logic_choreographed_scene;

declare interface CSceneListManager {
    "Scenes": Object;
    readonly "Scenes1": Object;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneListManager(ptr_or_class: string|AnySDKClass): CSceneListManager;

declare interface CScriptItem {
    "MoveTypeOverride": number;
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptItem(ptr_or_class: string|AnySDKClass): CScriptItem;

declare interface CScriptNavBlocker {
    "Extent": Vector;
    readonly "Parent": CFuncNavBlocker;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptNavBlocker(ptr_or_class: string|AnySDKClass): CScriptNavBlocker;

declare interface CScriptTriggerHurt {
    "Extent": Vector;
    readonly "Parent": CTriggerHurt;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerHurt(ptr_or_class: string|AnySDKClass): CScriptTriggerHurt;

declare interface CScriptTriggerMultiple {
    "Extent": Vector;
    readonly "Parent": CTriggerMultiple;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerMultiple(ptr_or_class: string|AnySDKClass): CScriptTriggerMultiple;

declare interface CScriptTriggerOnce {
    "Extent": Vector;
    readonly "Parent": CTriggerOnce;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerOnce(ptr_or_class: string|AnySDKClass): CScriptTriggerOnce;

declare interface CScriptTriggerPush {
    "Extent": Vector;
    readonly "Parent": CTriggerPush;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerPush(ptr_or_class: string|AnySDKClass): CScriptTriggerPush;

declare interface CScriptedSequence {
    "Entry": string;
    "PreIdle": string;
    "Play": string;
    "PostIdle": string;
    "ModifierToAddOnPlay": string;
    "NextScript": string;
    "Entity": string;
    "SyncGroup": string;
    "MoveTo": number;
    "MoveToGait": number;
    "HeldWeaponBehavior": number;
    "IsPlayingPreIdle": boolean;
    "IsPlayingEntry": boolean;
    "IsPlayingAction": boolean;
    "IsPlayingPostIdle": boolean;
    "DontRotateOther": boolean;
    "IsRepeatable": boolean;
    "ShouldLeaveCorpse": boolean;
    "StartOnSpawn": boolean;
    "DisallowInterrupts": boolean;
    "CanOverrideNPCState": boolean;
    "DontTeleportAtEnd": boolean;
    "HighPriority": boolean;
    "HideDebugComplaints": boolean;
    "ContinueOnDeath": boolean;
    "LoopPreIdleSequence": boolean;
    "LoopActionSequence": boolean;
    "LoopPostIdleSequence": boolean;
    "SynchPostIdles": boolean;
    "IgnoreLookAt": boolean;
    "IgnoreGravity": boolean;
    "DisableNPCCollisions": boolean;
    "KeepAnimgraphLockedPost": boolean;
    "DontAddModifiers": boolean;
    "Radius": number;
    "Repeat": number;
    "PlayAnimFadeInTime": number;
    "MoveInterpTime": number;
    "AngRate": number;
    "WaitUntilMoveCompletesToStartAnimation": boolean;
    "NotReadySequenceCount": number;
    "StartTime": number;
    "WaitForBeginSequence": boolean;
    "Saved_effects": number;
    "SavedFlags": number;
    "SavedCollisionGroup": number;
    "Interruptable": boolean;
    "SequenceStarted": boolean;
    "PositionRelativeToOtherEntity": boolean;
    readonly "TargetEnt": CBaseEntity;
    readonly "NextCine": CScriptedSequence;
    "Thinking": boolean;
    "InitiatedSelfDelete": boolean;
    "IsTeleportingDueToMoveTo": boolean;
    "AllowCustomInterruptConditions": boolean;
    readonly "ForcedTarget": CBaseAnimGraph;
    "DontCancelOtherSequences": boolean;
    "ForceSynch": boolean;
    "PreventUpdateYawOnFinish": boolean;
    "EnsureOnNavmeshOnFinish": boolean;
    "OnDeathBehavior": number;
    "ConflictResponse": number;
    readonly "OnBeginSequence": CEntityIOOutput;
    readonly "OnActionStartOrLoop": CEntityIOOutput;
    readonly "OnEndSequence": CEntityIOOutput;
    readonly "OnPostIdleEndSequence": CEntityIOOutput;
    readonly "OnCancelSequence": CEntityIOOutput;
    readonly "OnCancelFailedSequence": CEntityIOOutput;
    readonly "OnScriptEvent": Object;
    readonly "InteractionMainEntity": CBaseEntity;
    "PlayerDeathBehavior": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptedSequence(ptr_or_class: string|AnySDKClass): CScriptedSequence;

declare interface CSensorGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSensorGrenade(ptr_or_class: string|AnySDKClass): CSensorGrenade;

declare interface CSensorGrenadeProjectile {
    "ExpireTime": number;
    "NextDetectPlayerSound": number;
    readonly "DisplayGrenade": CBaseEntity;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSensorGrenadeProjectile(ptr_or_class: string|AnySDKClass): CSensorGrenadeProjectile;

declare interface CServerOnlyEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerOnlyEntity(ptr_or_class: string|AnySDKClass): CServerOnlyEntity;

declare interface CServerOnlyPointEntity {
    readonly "Parent": CServerOnlyEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerOnlyPointEntity(ptr_or_class: string|AnySDKClass): CServerOnlyPointEntity;

declare interface CServerRagdollTrigger {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerRagdollTrigger(ptr_or_class: string|AnySDKClass): CServerRagdollTrigger;

declare interface CShatterGlassShard {
    "ShardHandle": number;
    readonly "PanelVertices": Object;
    "LocalPanelSpaceOrigin": Vector2D;
    readonly "PhysicsEntity": CShatterGlassShardPhysics;
    readonly "ParentPanel": CFuncShatterglass;
    "ParentShard": number;
    "ShatterStressType": number;
    "StressVelocity": Vector;
    "CreatedModel": boolean;
    "LongestEdge": number;
    "ShortestEdge": number;
    "LongestAcross": number;
    "ShortestAcross": number;
    "SumOfAllEdges": number;
    "Area": number;
    "OnFrameEdge": number;
    "SubShardGeneration": number;
    "AverageVertPosition": Vector2D;
    "AverageVertPositionIsValid": boolean;
    "PanelSpaceStressPositionA": Vector2D;
    "PanelSpaceStressPositionB": Vector2D;
    "StressPositionAIsValid": boolean;
    "StressPositionBIsValid": boolean;
    "FlaggedForRemoval": boolean;
    "PhysicsEntitySpawnedAtTime": number;
    readonly "EntityHittingMe": CBaseEntity;
    readonly "Neighbors": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CShatterGlassShard(ptr_or_class: string|AnySDKClass): CShatterGlassShard;

declare interface CShatterGlassShardPhysics {
    "Debris": boolean;
    "ParentShard": number;
    readonly "ShardDesc": shard_model_desc_t;
    readonly "Parent": CPhysicsProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CShatterGlassShardPhysics(ptr_or_class: string|AnySDKClass): CShatterGlassShardPhysics;

declare interface CShower {
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CShower(ptr_or_class: string|AnySDKClass): CShower;

declare interface CSimpleMarkupVolumeTagged {
    readonly "Parent": CMarkupVolumeTagged;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimpleMarkupVolumeTagged(ptr_or_class: string|AnySDKClass): CSimpleMarkupVolumeTagged;

declare interface CSingleplayRules {
    "SinglePlayerGameEnding": boolean;
    readonly "Parent": CGameRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSingleplayRules(ptr_or_class: string|AnySDKClass): CSingleplayRules;

declare interface CSkyCamera {
    readonly "SkyboxData": sky3dparams_t;
    "SkyboxSlotToken": number;
    "UseAngles": boolean;
    readonly "Next": CSkyCamera;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkyCamera(ptr_or_class: string|AnySDKClass): CSkyCamera;

declare interface CSmokeGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSmokeGrenade(ptr_or_class: string|AnySDKClass): CSmokeGrenade;

declare interface CSmokeGrenadeProjectile {
    "SmokeEffectTickBegin": number;
    "DidSmokeEffect": boolean;
    "RandomSeed": number;
    "SmokeColor": Vector;
    "SmokeDetonationPos": Vector;
    readonly "VoxelFrameData": Object;
    "VoxelFrameDataSize": number;
    "VoxelUpdate": number;
    "LastBounce": number;
    "FllastSimulationTime": number;
    "ExplodeFromInferno": boolean;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSmokeGrenadeProjectile(ptr_or_class: string|AnySDKClass): CSmokeGrenadeProjectile;

declare interface CSmoothFunc {
    "SmoothAmplitude": number;
    "SmoothBias": number;
    "SmoothDuration": number;
    "SmoothRemainingTime": number;
    "SmoothDir": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSmoothFunc(ptr_or_class: string|AnySDKClass): CSmoothFunc;

declare interface CSound {
    readonly "Owner": CBaseEntity;
    readonly "Target": CBaseEntity;
    "Volume": number;
    "OcclusionScale": number;
    "NextAudible": number;
    "ExpireTime": number;
    "Next": number;
    "NoExpirationTime": boolean;
    "OwnerChannelIndex": number;
    "Origin": Vector;
    "HasOwner": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSound(ptr_or_class: string|AnySDKClass): CSound;

declare interface CSoundAreaEntityBase {
    "Disabled": boolean;
    "SoundAreaType": string;
    "Pos": Vector;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundAreaEntityBase(ptr_or_class: string|AnySDKClass): CSoundAreaEntityBase;

declare interface CSoundAreaEntityOrientedBox {
    "Min": Vector;
    "Max": Vector;
    readonly "Parent": CSoundAreaEntityBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundAreaEntityOrientedBox(ptr_or_class: string|AnySDKClass): CSoundAreaEntityOrientedBox;

declare interface CSoundAreaEntitySphere {
    "Radius": number;
    readonly "Parent": CSoundAreaEntityBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundAreaEntitySphere(ptr_or_class: string|AnySDKClass): CSoundAreaEntitySphere;

declare interface CSoundEnt {
    "FreeSound": number;
    "ActiveSound": number;
    "CLastActiveSounds": number;
    readonly "SoundPool": Object;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEnt(ptr_or_class: string|AnySDKClass): CSoundEnt;

declare interface CSoundEventAABBEntity {
    "Mins": Vector;
    "Maxs": Vector;
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventAABBEntity(ptr_or_class: string|AnySDKClass): CSoundEventAABBEntity;

declare interface CSoundEventEntity {
    "StartOnSpawn": boolean;
    "ToLocalPlayer": boolean;
    "StopOnNew": boolean;
    "SaveRestore": boolean;
    "SavedIsPlaying": boolean;
    "SavedElapsedTime": number;
    "SourceEntityName": string;
    "AttachmentName": string;
    readonly "OnSoundFinished": CEntityIOOutput;
    "ClientCullRadius": number;
    "SoundName": string;
    readonly "Source": CEntityInstance;
    "EntityIndexSelection": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventEntity(ptr_or_class: string|AnySDKClass): CSoundEventEntity;

declare interface CSoundEventEntityAlias_snd_event_point {
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventEntityAlias_snd_event_point(ptr_or_class: string|AnySDKClass): CSoundEventEntityAlias_snd_event_point;

declare interface CSoundEventOBBEntity {
    "Mins": Vector;
    "Maxs": Vector;
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventOBBEntity(ptr_or_class: string|AnySDKClass): CSoundEventOBBEntity;

declare interface CSoundEventParameter {
    "ParamName": string;
    "FloatValue": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventParameter(ptr_or_class: string|AnySDKClass): CSoundEventParameter;

declare interface CSoundEventPathCornerEntity {
    "PathCorner": string;
    "CountMax": number;
    "DistanceMax": number;
    "DistMaxSqr": number;
    "DotProductMax": number;
    "Playing": boolean;
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventPathCornerEntity(ptr_or_class: string|AnySDKClass): CSoundEventPathCornerEntity;

declare interface CSoundEventSphereEntity {
    "Radius": number;
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventSphereEntity(ptr_or_class: string|AnySDKClass): CSoundEventSphereEntity;

declare interface CSoundOpvarSetAABBEntity {
    "DistanceInnerMins": Vector;
    "DistanceInnerMaxs": Vector;
    "DistanceOuterMins": Vector;
    "DistanceOuterMaxs": Vector;
    "AABBDirection": number;
    "InnerMins": Vector;
    "InnerMaxs": Vector;
    "OuterMins": Vector;
    "OuterMaxs": Vector;
    readonly "Parent": CSoundOpvarSetPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetAABBEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetAABBEntity;

declare interface CSoundOpvarSetAutoRoomEntity {
    readonly "TraceResults": Object;
    readonly "DoorwayPairs": Object;
    "Size": number;
    "HeightTolerance": number;
    "SizeSqr": number;
    readonly "Parent": CSoundOpvarSetPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetAutoRoomEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetAutoRoomEntity;

declare interface CSoundOpvarSetEntity {
    "StackName": string;
    "OperatorName": string;
    "OpvarName": string;
    "OpvarType": number;
    "OpvarIndex": number;
    "OpvarValue": number;
    "OpvarValueString": string;
    "SetOnSpawn": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetEntity;

declare interface CSoundOpvarSetOBBEntity {
    readonly "Parent": CSoundOpvarSetAABBEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetOBBEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetOBBEntity;

declare interface CSoundOpvarSetOBBWindEntity {
    "Mins": Vector;
    "Maxs": Vector;
    "DistanceMins": Vector;
    "DistanceMaxs": Vector;
    "WindMin": number;
    "WindMax": number;
    "WindMapMin": number;
    "WindMapMax": number;
    readonly "Parent": CSoundOpvarSetPointBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetOBBWindEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetOBBWindEntity;

declare interface CSoundOpvarSetPathCornerEntity {
    "DistMinSqr": number;
    "DistMaxSqr": number;
    "PathCornerEntityName": string;
    readonly "Parent": CSoundOpvarSetPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetPathCornerEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetPathCornerEntity;

declare interface CSoundOpvarSetPointBase {
    "Disabled": boolean;
    readonly "Source": CEntityInstance;
    "SourceEntityName": string;
    "LastPosition": Vector;
    "StackName": string;
    "OperatorName": string;
    "OpvarName": string;
    "OpvarIndex": number;
    "UseAutoCompare": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetPointBase(ptr_or_class: string|AnySDKClass): CSoundOpvarSetPointBase;

declare interface CSoundOpvarSetPointEntity {
    readonly "OnEnter": CEntityIOOutput;
    readonly "OnExit": CEntityIOOutput;
    "AutoDisable": boolean;
    "DistanceMin": number;
    "DistanceMax": number;
    "DistanceMapMin": number;
    "DistanceMapMax": number;
    "OcclusionRadius": number;
    "OcclusionMin": number;
    "OcclusionMax": number;
    "ValSetOnDisable": number;
    "SetValueOnDisable": boolean;
    "Reloading": boolean;
    "SimulationMode": number;
    "VisibilitySamples": number;
    "DynamicProxyPoint": Vector;
    "DynamicMaximumOcclusion": number;
    readonly "DynamicEntity": CEntityInstance;
    "DynamicEntityName": string;
    "PathingDistanceNormFactor": number;
    "PathingSourcePos": Vector;
    "PathingListenerPos": Vector;
    "PathingDirection": Vector;
    "PathingSourceIndex": number;
    readonly "Parent": CSoundOpvarSetPointBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetPointEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetPointEntity;

declare interface CSoundStackSave {
    "StackName": string;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundStackSave(ptr_or_class: string|AnySDKClass): CSoundStackSave;

declare interface CSplineConstraint {
    "AnchorOffsetRestore": Vector;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSplineConstraint(ptr_or_class: string|AnySDKClass): CSplineConstraint;

declare interface CSpotlightEnd {
    "LightScale": number;
    "Radius": number;
    "SpotlightDir": Vector;
    "SpotlightOrg": Vector;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpotlightEnd(ptr_or_class: string|AnySDKClass): CSpotlightEnd;

declare interface CSprite {
    readonly "AttachedToEntity": CBaseEntity;
    "SpriteFramerate": number;
    "Frame": number;
    "DieTime": number;
    "Brightness": number;
    "BrightnessDuration": number;
    "SpriteScale": number;
    "ScaleDuration": number;
    "WorldSpaceScale": boolean;
    "GlowProxySize": number;
    "HDRColorScale": number;
    "LastTime": number;
    "MaxFrame": number;
    "StartScale": number;
    "DestScale": number;
    "ScaleTimeStart": number;
    "StartBrightness": number;
    "DestBrightness": number;
    "BrightnessTimeStart": number;
    "SpriteWidth": number;
    "SpriteHeight": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSprite(ptr_or_class: string|AnySDKClass): CSprite;

declare interface CSpriteAlias_env_glow {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpriteAlias_env_glow(ptr_or_class: string|AnySDKClass): CSpriteAlias_env_glow;

declare interface CSun {
    "Direction": Vector;
    "Overlay": Color;
    "EffectName": string;
    "SSEffectName": string;
    "On": boolean;
    "BmaxColor": boolean;
    "Size": number;
    "Rotation": number;
    "HazeScale": number;
    "AlphaHaze": number;
    "AlphaHdr": number;
    "AlphaScale": number;
    "HDRColorScale": number;
    "FarZScale": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSun(ptr_or_class: string|AnySDKClass): CSun;

declare interface CTankTargetChange {
    "NewTargetName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTankTargetChange(ptr_or_class: string|AnySDKClass): CTankTargetChange;

declare interface CTankTrainAI {
    readonly "Train": CFuncTrackTrain;
    readonly "TargetEntity": CBaseEntity;
    "SoundPlaying": number;
    "StartSoundName": string;
    "EngineSoundName": string;
    "MovementSoundName": string;
    "TargetEntityName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTankTrainAI(ptr_or_class: string|AnySDKClass): CTankTrainAI;

declare interface CTeam {
    "Score": number;
    "Teamname": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTeam(ptr_or_class: string|AnySDKClass): CTeam;

declare interface CTeamplayRules {
    readonly "Parent": CMultiplayRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTeamplayRules(ptr_or_class: string|AnySDKClass): CTeamplayRules;

declare interface CTestEffect {
    "Loop": number;
    "Beam": number;
    readonly "Beam1": Object;
    "BeamTime": Object;
    "StartTime": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTestEffect(ptr_or_class: string|AnySDKClass): CTestEffect;

declare interface CTextureBasedAnimatable {
    "Loop": boolean;
    "FPS": number;
    "AnimationBoundsMin": Vector;
    "AnimationBoundsMax": Vector;
    "StartTime": number;
    "StartFrame": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTextureBasedAnimatable(ptr_or_class: string|AnySDKClass): CTextureBasedAnimatable;

declare interface CTimerEntity {
    readonly "OnTimer": CEntityIOOutput;
    readonly "OnTimerHigh": CEntityIOOutput;
    readonly "OnTimerLow": CEntityIOOutput;
    "Disabled": number;
    "InitialDelay": number;
    "RefireTime": number;
    "UpDownState": boolean;
    "UseRandomTime": number;
    "PauseAfterFiring": boolean;
    "LowerRandomBound": number;
    "UpperRandomBound": number;
    "RemainingTime": number;
    "Paused": boolean;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTimerEntity(ptr_or_class: string|AnySDKClass): CTimerEntity;

declare interface CTonemapController2 {
    "AutoExposureMin": number;
    "AutoExposureMax": number;
    "TonemapPercentTarget": number;
    "TonemapPercentBrightPixels": number;
    "TonemapMinAvgLum": number;
    "ExposureAdaptationSpeedUp": number;
    "ExposureAdaptationSpeedDown": number;
    "TonemapEVSmoothingRange": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTonemapController2(ptr_or_class: string|AnySDKClass): CTonemapController2;

declare interface CTonemapController2Alias_env_tonemap_controller2 {
    readonly "Parent": CTonemapController2;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTonemapController2Alias_env_tonemap_controller2(ptr_or_class: string|AnySDKClass): CTonemapController2Alias_env_tonemap_controller2;

declare interface CTonemapTrigger {
    "TonemapControllerName": string;
    readonly "TonemapController": CEntityInstance;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTonemapTrigger(ptr_or_class: string|AnySDKClass): CTonemapTrigger;

declare interface CTouchExpansionComponent {
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTouchExpansionComponent(ptr_or_class: string|AnySDKClass): CTouchExpansionComponent;

declare interface CTriggerActiveWeaponDetect {
    readonly "OnTouchedActiveWeapon": CEntityIOOutput;
    "WeaponClassName": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerActiveWeaponDetect(ptr_or_class: string|AnySDKClass): CTriggerActiveWeaponDetect;

declare interface CTriggerBombReset {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerBombReset(ptr_or_class: string|AnySDKClass): CTriggerBombReset;

declare interface CTriggerBrush {
    readonly "OnStartTouch": CEntityIOOutput;
    readonly "OnEndTouch": CEntityIOOutput;
    readonly "OnUse": CEntityIOOutput;
    "InputFilter": number;
    "DontMessageParent": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerBrush(ptr_or_class: string|AnySDKClass): CTriggerBrush;

declare interface CTriggerBuoyancy {
    readonly "BuoyancyHelper": CBuoyancyHelper;
    "FluidDensity": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerBuoyancy(ptr_or_class: string|AnySDKClass): CTriggerBuoyancy;

declare interface CTriggerCallback {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerCallback(ptr_or_class: string|AnySDKClass): CTriggerCallback;

declare interface CTriggerDetectBulletFire {
    "PlayerFireOnly": boolean;
    readonly "OnDetectedBulletFire": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerDetectBulletFire(ptr_or_class: string|AnySDKClass): CTriggerDetectBulletFire;

declare interface CTriggerDetectExplosion {
    readonly "OnDetectedExplosion": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerDetectExplosion(ptr_or_class: string|AnySDKClass): CTriggerDetectExplosion;

declare interface CTriggerFan {
    "FanOrigin": Vector;
    "FanEnd": Vector;
    "Noise": Vector;
    "Force": number;
    "RopeForceScale": number;
    "PlayerForce": number;
    "RampTime": number;
    "Falloff": boolean;
    "PushPlayer": boolean;
    "RampDown": boolean;
    "AddNoise": boolean;
    readonly "RampTimer": CountdownTimer;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerFan(ptr_or_class: string|AnySDKClass): CTriggerFan;

declare interface CTriggerGameEvent {
    "StrStartTouchEventName": string;
    "StrEndTouchEventName": string;
    "StrTriggerID": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerGameEvent(ptr_or_class: string|AnySDKClass): CTriggerGameEvent;

declare interface CTriggerGravity {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerGravity(ptr_or_class: string|AnySDKClass): CTriggerGravity;

declare interface CTriggerHostageReset {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerHostageReset(ptr_or_class: string|AnySDKClass): CTriggerHostageReset;

declare interface CTriggerHurt {
    "OriginalDamage": number;
    "Damage": number;
    "DamageCap": number;
    "LastDmgTime": number;
    "ForgivenessDelay": number;
    "BitsDamageInflict": number;
    "DamageModel": number;
    "NoDmgForce": boolean;
    "DamageForce": Vector;
    "ThinkAlways": boolean;
    "HurtThinkPeriod": number;
    readonly "OnHurt": CEntityIOOutput;
    readonly "OnHurtPlayer": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerHurt(ptr_or_class: string|AnySDKClass): CTriggerHurt;

declare interface CTriggerImpact {
    "Magnitude": number;
    "Noise": number;
    "Viewkick": number;
    readonly "Parent": CTriggerMultiple;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerImpact(ptr_or_class: string|AnySDKClass): CTriggerImpact;

declare interface CTriggerLerpObject {
    "LerpTarget": string;
    readonly "LerpTarget1": CBaseEntity;
    "LerpTargetAttachment": string;
    "LerpDuration": number;
    "LerpRestoreMoveType": boolean;
    "SingleLerpObject": boolean;
    readonly "LerpingObjects": Object;
    "LerpEffect": string;
    "LerpSound": string;
    "AttachTouchingObject": boolean;
    readonly "EntityToWaitForDisconnect": CBaseEntity;
    readonly "OnLerpStarted": CEntityIOOutput;
    readonly "OnLerpFinished": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerLerpObject(ptr_or_class: string|AnySDKClass): CTriggerLerpObject;

declare interface CTriggerLook {
    readonly "LookTarget": CBaseEntity;
    "FieldOfView": number;
    "LookTime": number;
    "LookTimeTotal": number;
    "LookTimeLast": number;
    "TimeoutDuration": number;
    "TimeoutFired": boolean;
    "IsLooking": boolean;
    "2DFOV": boolean;
    "UseVelocity": boolean;
    "TestOcclusion": boolean;
    readonly "OnTimeout": CEntityIOOutput;
    readonly "OnStartLook": CEntityIOOutput;
    readonly "OnEndLook": CEntityIOOutput;
    readonly "Parent": CTriggerOnce;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerLook(ptr_or_class: string|AnySDKClass): CTriggerLook;

declare interface CTriggerMultiple {
    readonly "OnTrigger": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerMultiple(ptr_or_class: string|AnySDKClass): CTriggerMultiple;

declare interface CTriggerOnce {
    readonly "Parent": CTriggerMultiple;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerOnce(ptr_or_class: string|AnySDKClass): CTriggerOnce;

declare interface CTriggerPhysics {
    "GravityScale": number;
    "LinearLimit": number;
    "LinearDamping": number;
    "AngularLimit": number;
    "AngularDamping": number;
    "LinearForce": number;
    "Frequency": number;
    "DampingRatio": number;
    "LinearForcePointAt": Vector;
    "CollapseToForcePoint": boolean;
    "LinearForcePointAtWorld": Vector;
    "LinearForceDirection": Vector;
    "ConvertToDebrisWhenPossible": boolean;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerPhysics(ptr_or_class: string|AnySDKClass): CTriggerPhysics;

declare interface CTriggerProximity {
    readonly "MeasureTarget": CBaseEntity;
    "MeasureTarget1": string;
    "Radius": number;
    "Touchers": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerProximity(ptr_or_class: string|AnySDKClass): CTriggerProximity;

declare interface CTriggerPush {
    "PushEntitySpace": QAngle;
    "PushDirEntitySpace": Vector;
    "TriggerOnStartTouch": boolean;
    "UsePathSimple": boolean;
    "PathSimpleName": string;
    readonly "PathSimple": CPathSimple;
    "SplinePushType": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerPush(ptr_or_class: string|AnySDKClass): CTriggerPush;

declare interface CTriggerRemove {
    readonly "OnRemove": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerRemove(ptr_or_class: string|AnySDKClass): CTriggerRemove;

declare interface CTriggerSave {
    "ForceNewLevelUnit": boolean;
    "DangerousTimer": number;
    "MinHitPoints": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerSave(ptr_or_class: string|AnySDKClass): CTriggerSave;

declare interface CTriggerSndSosOpvar {
    "Position": Vector;
    "CenterSize": number;
    "MinVal": number;
    "MaxVal": number;
    "OpvarName": string;
    "StackName": string;
    "OperatorName": string;
    "VolIs2D": boolean;
    "OpvarNameChar": string;
    "StackNameChar": string;
    "OperatorNameChar": string;
    "VecNormPos": Vector;
    "NormCenterSize": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerSndSosOpvar(ptr_or_class: string|AnySDKClass): CTriggerSndSosOpvar;

declare interface CTriggerSoundscape {
    readonly "Soundscape": CEnvSoundscapeTriggerable;
    "SoundscapeName": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerSoundscape(ptr_or_class: string|AnySDKClass): CTriggerSoundscape;

declare interface CTriggerTeleport {
    "Landmark": string;
    "UseLandmarkAngles": boolean;
    "MirrorPlayer": boolean;
    "CheckDestIfClearForPlayer": boolean;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerTeleport(ptr_or_class: string|AnySDKClass): CTriggerTeleport;

declare interface CTriggerToggleSave {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerToggleSave(ptr_or_class: string|AnySDKClass): CTriggerToggleSave;

declare interface CTriggerTripWire {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerTripWire(ptr_or_class: string|AnySDKClass): CTriggerTripWire;

declare interface CTriggerVolume {
    "FilterName": string;
    readonly "Filter": CBaseFilter;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerVolume(ptr_or_class: string|AnySDKClass): CTriggerVolume;

declare interface CWaterBullet {
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWaterBullet(ptr_or_class: string|AnySDKClass): CWaterBullet;

declare interface CWeaponAWP {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponAWP(ptr_or_class: string|AnySDKClass): CWeaponAWP;

declare interface CWeaponAug {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponAug(ptr_or_class: string|AnySDKClass): CWeaponAug;

declare interface CWeaponBaseItem {
    readonly "SequenceCompleteTimer": CountdownTimer;
    "Redraw": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponBaseItem(ptr_or_class: string|AnySDKClass): CWeaponBaseItem;

declare interface CWeaponBizon {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponBizon(ptr_or_class: string|AnySDKClass): CWeaponBizon;

declare interface CWeaponCZ75a {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponCZ75a(ptr_or_class: string|AnySDKClass): CWeaponCZ75a;

declare interface CWeaponElite {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponElite(ptr_or_class: string|AnySDKClass): CWeaponElite;

declare interface CWeaponFamas {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponFamas(ptr_or_class: string|AnySDKClass): CWeaponFamas;

declare interface CWeaponFiveSeven {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponFiveSeven(ptr_or_class: string|AnySDKClass): CWeaponFiveSeven;

declare interface CWeaponG3SG1 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponG3SG1(ptr_or_class: string|AnySDKClass): CWeaponG3SG1;

declare interface CWeaponGalilAR {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponGalilAR(ptr_or_class: string|AnySDKClass): CWeaponGalilAR;

declare interface CWeaponGlock {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponGlock(ptr_or_class: string|AnySDKClass): CWeaponGlock;

declare interface CWeaponHKP2000 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponHKP2000(ptr_or_class: string|AnySDKClass): CWeaponHKP2000;

declare interface CWeaponM249 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponM249(ptr_or_class: string|AnySDKClass): CWeaponM249;

declare interface CWeaponM4A1 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponM4A1(ptr_or_class: string|AnySDKClass): CWeaponM4A1;

declare interface CWeaponM4A1Silencer {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponM4A1Silencer(ptr_or_class: string|AnySDKClass): CWeaponM4A1Silencer;

declare interface CWeaponMAC10 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMAC10(ptr_or_class: string|AnySDKClass): CWeaponMAC10;

declare interface CWeaponMP5SD {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMP5SD(ptr_or_class: string|AnySDKClass): CWeaponMP5SD;

declare interface CWeaponMP7 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMP7(ptr_or_class: string|AnySDKClass): CWeaponMP7;

declare interface CWeaponMP9 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMP9(ptr_or_class: string|AnySDKClass): CWeaponMP9;

declare interface CWeaponMag7 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMag7(ptr_or_class: string|AnySDKClass): CWeaponMag7;

declare interface CWeaponNOVA {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponNOVA(ptr_or_class: string|AnySDKClass): CWeaponNOVA;

declare interface CWeaponNegev {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponNegev(ptr_or_class: string|AnySDKClass): CWeaponNegev;

declare interface CWeaponP250 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponP250(ptr_or_class: string|AnySDKClass): CWeaponP250;

declare interface CWeaponP90 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponP90(ptr_or_class: string|AnySDKClass): CWeaponP90;

declare interface CWeaponRevolver {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponRevolver(ptr_or_class: string|AnySDKClass): CWeaponRevolver;

declare interface CWeaponSCAR20 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSCAR20(ptr_or_class: string|AnySDKClass): CWeaponSCAR20;

declare interface CWeaponSG556 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSG556(ptr_or_class: string|AnySDKClass): CWeaponSG556;

declare interface CWeaponSSG08 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSSG08(ptr_or_class: string|AnySDKClass): CWeaponSSG08;

declare interface CWeaponSawedoff {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSawedoff(ptr_or_class: string|AnySDKClass): CWeaponSawedoff;

declare interface CWeaponShield {
    "BulletDamageAbsorbed": number;
    "LastBulletHitSoundTime": number;
    "DisplayHealth": number;
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponShield(ptr_or_class: string|AnySDKClass): CWeaponShield;

declare interface CWeaponTaser {
    "FireTime": number;
    "LastAttackTick": number;
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponTaser(ptr_or_class: string|AnySDKClass): CWeaponTaser;

declare interface CWeaponTec9 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponTec9(ptr_or_class: string|AnySDKClass): CWeaponTec9;

declare interface CWeaponUMP45 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponUMP45(ptr_or_class: string|AnySDKClass): CWeaponUMP45;

declare interface CWeaponUSPSilencer {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponUSPSilencer(ptr_or_class: string|AnySDKClass): CWeaponUSPSilencer;

declare interface CWeaponXM1014 {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponXM1014(ptr_or_class: string|AnySDKClass): CWeaponXM1014;

declare interface CWorld {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWorld(ptr_or_class: string|AnySDKClass): CWorld;

declare interface ConstraintSoundInfo {
    readonly "Sampler": VelocitySampler;
    readonly "SoundProfile": SimpleConstraintSoundProfile;
    "ForwardAxis": Vector;
    "TravelSoundFwd": string;
    "TravelSoundBack": string;
    "ReversalSounds": Object;
    "PlayTravelSound": boolean;
    "PlayReversalSound": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ConstraintSoundInfo(ptr_or_class: string|AnySDKClass): ConstraintSoundInfo;

declare interface FilterDamageType {
    "DamageType": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FilterDamageType(ptr_or_class: string|AnySDKClass): FilterDamageType;

declare interface FilterHealth {
    "AdrenalineActive": boolean;
    "HealthMin": number;
    "HealthMax": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FilterHealth(ptr_or_class: string|AnySDKClass): FilterHealth;

declare interface FilterTeam {
    "FilterTeam": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FilterTeam(ptr_or_class: string|AnySDKClass): FilterTeam;

declare interface RelationshipOverride_t {
    readonly "Entity": CBaseEntity;
    "ClassType": number;
    readonly "Parent": Relationship_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RelationshipOverride_t(ptr_or_class: string|AnySDKClass): RelationshipOverride_t;

declare interface Relationship_t {
    "Disposition": number;
    "Priority": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function Relationship_t(ptr_or_class: string|AnySDKClass): Relationship_t;

declare interface ResponseContext_t {
    "Name": string;
    "Value": string;
    "ExpirationTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ResponseContext_t(ptr_or_class: string|AnySDKClass): ResponseContext_t;

declare interface SimpleConstraintSoundProfile {
    "KeyPoints": Object;
    "ReversalSoundThresholds": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SimpleConstraintSoundProfile(ptr_or_class: string|AnySDKClass): SimpleConstraintSoundProfile;

declare interface SoundOpvarTraceResult_t {
    "Pos": Vector;
    "DidHit": boolean;
    "DistSqrToCenter": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SoundOpvarTraceResult_t(ptr_or_class: string|AnySDKClass): SoundOpvarTraceResult_t;

declare interface SpawnPoint {
    "Priority": number;
    "Enabled": boolean;
    "Type": number;
    readonly "Parent": CServerOnlyPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SpawnPoint(ptr_or_class: string|AnySDKClass): SpawnPoint;

declare interface VelocitySampler {
    "PrevSample": Vector;
    "PrevSampleTime": number;
    "IdealSampleRate": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VelocitySampler(ptr_or_class: string|AnySDKClass): VelocitySampler;

declare interface dynpitchvol_base_t {
    "Preset": number;
    "Pitchrun": number;
    "Pitchstart": number;
    "Spinup": number;
    "Spindown": number;
    "Volrun": number;
    "Volstart": number;
    "Fadein": number;
    "Fadeout": number;
    "Lfotype": number;
    "Lforate": number;
    "Lfomodpitch": number;
    "Lfomodvol": number;
    "Cspinup": number;
    "Cspincount": number;
    "Pitch": number;
    "Spinupsav": number;
    "Spindownsav": number;
    "Pitchfrac": number;
    "Vol": number;
    "Fadeinsav": number;
    "Fadeoutsav": number;
    "Volfrac": number;
    "Lfofrac": number;
    "Lfomult": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function dynpitchvol_base_t(ptr_or_class: string|AnySDKClass): dynpitchvol_base_t;

declare interface dynpitchvol_t {
    readonly "Parent": dynpitchvol_base_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function dynpitchvol_t(ptr_or_class: string|AnySDKClass): dynpitchvol_t;

declare interface fogplayerparams_t {
    readonly "Ctrl": CFogController;
    "TransitionTime": number;
    "OldColor": Color;
    "OldStart": number;
    "OldEnd": number;
    "OldMaxDensity": number;
    "OldHDRColorScale": number;
    "OldFarZ": number;
    "NewColor": Color;
    "NewStart": number;
    "NewEnd": number;
    "NewMaxDensity": number;
    "NewHDRColorScale": number;
    "NewFarZ": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function fogplayerparams_t(ptr_or_class: string|AnySDKClass): fogplayerparams_t;

declare interface lerpdata_t {
    readonly "Ent": CBaseEntity;
    "MoveType": number;
    "StartTime": number;
    "StartOrigin": Vector;
    readonly "FXIndex": ParticleIndex_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function lerpdata_t(ptr_or_class: string|AnySDKClass): lerpdata_t;

declare interface locksound_t {
    "LockedSound": string;
    "UnlockedSound": string;
    "FlwaitSound": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function locksound_t(ptr_or_class: string|AnySDKClass): locksound_t;

declare interface magnetted_objects_t {
    readonly "Entity": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function magnetted_objects_t(ptr_or_class: string|AnySDKClass): magnetted_objects_t;

declare interface CDSPMixgroupModifier {
    "Mixgroup": string;
    "Modifier": number;
    "ModifierMin": number;
    "SourceModifier": number;
    "SourceModifierMin": number;
    "ListenerReverbModifierWhenSourceReverbIsActive": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDSPMixgroupModifier(ptr_or_class: string|AnySDKClass): CDSPMixgroupModifier;

declare interface CDSPPresetMixgroupModifierTable {
    readonly "Table": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDSPPresetMixgroupModifierTable(ptr_or_class: string|AnySDKClass): CDSPPresetMixgroupModifierTable;

declare interface CDspPresetModifierList {
    "DspName": string;
    readonly "Modifiers": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDspPresetModifierList(ptr_or_class: string|AnySDKClass): CDspPresetModifierList;

declare interface CSosGroupActionLimitSchema {
    "MaxCount": number;
    "StopType": number;
    "SortType": number;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionLimitSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionLimitSchema;

declare interface CSosGroupActionMemberCountEnvelopeSchema {
    "BaseCount": number;
    "TargetCount": number;
    "BaseValue": number;
    "TargetValue": number;
    "Attack": number;
    "Decay": number;
    "ResultVarName": string;
    "SaveToGroup": boolean;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionMemberCountEnvelopeSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionMemberCountEnvelopeSchema;

declare interface CSosGroupActionSchema {
    "Name": string;
    "ActionType": number;
    "ActionInstanceType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSchema;

declare interface CSosGroupActionSetSoundeventParameterSchema {
    "MaxCount": number;
    "MinValue": number;
    "MaxValue": number;
    "OpvarName": string;
    "SortType": number;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSetSoundeventParameterSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSetSoundeventParameterSchema;

declare interface CSosGroupActionSoundeventClusterSchema {
    "MinNearby": number;
    "ClusterEpsilon": number;
    "ShouldPlayOpvar": string;
    "ShouldPlayClusterChild": string;
    "ClusterSizeOpvar": string;
    "GroupBoundingBoxMinsOpvar": string;
    "GroupBoundingBoxMaxsOpvar": string;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSoundeventClusterSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSoundeventClusterSchema;

declare interface CSosGroupActionSoundeventCountSchema {
    "ExcludeStoppedSounds": boolean;
    "StrCountKeyName": string;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSoundeventCountSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSoundeventCountSchema;

declare interface CSosGroupActionSoundeventMinMaxValuesSchema {
    "StrQueryPublicFieldName": string;
    "StrDelayPublicFieldName": string;
    "ExcludeStoppedSounds": boolean;
    "ExcludeDelayedSounds": boolean;
    "ExcludeSoundsBelowThreshold": boolean;
    "ExcludeSoundsMinThresholdValue": number;
    "ExcludSoundsAboveThreshold": boolean;
    "ExcludeSoundsMaxThresholdValue": number;
    "StrMinValueName": string;
    "StrMaxValueName": string;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSoundeventMinMaxValuesSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSoundeventMinMaxValuesSchema;

declare interface CSosGroupActionSoundeventPrioritySchema {
    "PriorityValue": string;
    "PriorityVolumeScalar": string;
    "PriorityContributeButDontRead": string;
    "PriorityReadButDontContribute": string;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSoundeventPrioritySchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSoundeventPrioritySchema;

declare interface CSosGroupActionTimeBlockLimitSchema {
    "MaxCount": number;
    "MaxDuration": number;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionTimeBlockLimitSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionTimeBlockLimitSchema;

declare interface CSosGroupActionTimeLimitSchema {
    "MaxDuration": number;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionTimeLimitSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionTimeLimitSchema;

declare interface CSosGroupBranchPattern {
    "MatchEventName": boolean;
    "MatchEventSubString": boolean;
    "MatchEntIndex": boolean;
    "MatchOpvar": boolean;
    "MatchString": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupBranchPattern(ptr_or_class: string|AnySDKClass): CSosGroupBranchPattern;

declare interface CSosGroupMatchPattern {
    "MatchSoundEventName": string;
    "MatchSoundEventSubString": string;
    "EntIndex": number;
    "Opvar": number;
    "OpvarString": string;
    readonly "Parent": CSosGroupBranchPattern;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupMatchPattern(ptr_or_class: string|AnySDKClass): CSosGroupMatchPattern;

declare interface CSosSoundEventGroupListSchema {
    readonly "GroupList": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosSoundEventGroupListSchema(ptr_or_class: string|AnySDKClass): CSosSoundEventGroupListSchema;

declare interface CSosSoundEventGroupSchema {
    "Name": string;
    "Type": number;
    "IsBlocking": boolean;
    "BlockMaxCount": number;
    "InvertMatch": boolean;
    readonly "MatchPattern": CSosGroupMatchPattern;
    readonly "BranchPattern": CSosGroupBranchPattern;
    "LifeSpanTime": number;
    readonly "Actions": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosSoundEventGroupSchema(ptr_or_class: string|AnySDKClass): CSosSoundEventGroupSchema;

declare interface CSoundEventMetaData {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventMetaData(ptr_or_class: string|AnySDKClass): CSoundEventMetaData;

declare interface CTestBlendContainer {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTestBlendContainer(ptr_or_class: string|AnySDKClass): CTestBlendContainer;

declare interface SelectedEditItemInfo_t {
    readonly "EditItems": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SelectedEditItemInfo_t(ptr_or_class: string|AnySDKClass): SelectedEditItemInfo_t;

declare interface SosEditItemInfo_t {
    "ItemType": number;
    "ItemName": string;
    "ItemTypeName": string;
    "ItemKVString": string;
    "ItemPos": Vector2D;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SosEditItemInfo_t(ptr_or_class: string|AnySDKClass): SosEditItemInfo_t;

declare interface VMixAutoFilterDesc_t {
    "EnvelopeAmount": number;
    "AttackTimeMS": number;
    "ReleaseTimeMS": number;
    readonly "Filter": VMixFilterDesc_t;
    "LFOAmount": number;
    "LFORate": number;
    "Phase": number;
    "LFOShape": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixAutoFilterDesc_t(ptr_or_class: string|AnySDKClass): VMixAutoFilterDesc_t;

declare interface VMixBoxverbDesc_t {
    "SizeMax": number;
    "SizeMin": number;
    "Complexity": number;
    "Diffusion": number;
    "ModDepth": number;
    "ModRate": number;
    "Parallel": boolean;
    readonly "FilterType": VMixFilterDesc_t;
    "Width": number;
    "Height": number;
    "Depth": number;
    "FeedbackScale": number;
    "FeedbackWidth": number;
    "FeedbackHeight": number;
    "FeedbackDepth": number;
    "OutputGain": number;
    "Taps": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixBoxverbDesc_t(ptr_or_class: string|AnySDKClass): VMixBoxverbDesc_t;

declare interface VMixConvolutionDesc_t {
    "FldbGain": number;
    "PreDelayMS": number;
    "WetMix": number;
    "FldbLow": number;
    "FldbMid": number;
    "FldbHigh": number;
    "LowCutoffFreq": number;
    "HighCutoffFreq": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixConvolutionDesc_t(ptr_or_class: string|AnySDKClass): VMixConvolutionDesc_t;

declare interface VMixDelayDesc_t {
    readonly "FeedbackFilter": VMixFilterDesc_t;
    "EnableFilter": boolean;
    "Delay": number;
    "DirectGain": number;
    "DelayGain": number;
    "FeedbackGain": number;
    "Width": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDelayDesc_t(ptr_or_class: string|AnySDKClass): VMixDelayDesc_t;

declare interface VMixDiffusorDesc_t {
    "Size": number;
    "Complexity": number;
    "Feedback": number;
    "OutputGain": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDiffusorDesc_t(ptr_or_class: string|AnySDKClass): VMixDiffusorDesc_t;

declare interface VMixDynamics3BandDesc_t {
    "FldbGainOutput": number;
    "RMSTimeMS": number;
    "FldbKneeWidth": number;
    "Depth": number;
    "WetMix": number;
    "TimeScale": number;
    "LowCutoffFreq": number;
    "HighCutoffFreq": number;
    "PeakMode": boolean;
    readonly "BandDesc": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDynamics3BandDesc_t(ptr_or_class: string|AnySDKClass): VMixDynamics3BandDesc_t;

declare interface VMixDynamicsBand_t {
    "FldbGainInput": number;
    "FldbGainOutput": number;
    "FldbThresholdBelow": number;
    "FldbThresholdAbove": number;
    "RatioBelow": number;
    "RatioAbove": number;
    "AttackTimeMS": number;
    "ReleaseTimeMS": number;
    "Enable": boolean;
    "Solo": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDynamicsBand_t(ptr_or_class: string|AnySDKClass): VMixDynamicsBand_t;

declare interface VMixDynamicsCompressorDesc_t {
    "FldbOutputGain": number;
    "FldbCompressionThreshold": number;
    "FldbKneeWidth": number;
    "CompressionRatio": number;
    "AttackTimeMS": number;
    "ReleaseTimeMS": number;
    "RMSTimeMS": number;
    "WetMix": number;
    "PeakMode": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDynamicsCompressorDesc_t(ptr_or_class: string|AnySDKClass): VMixDynamicsCompressorDesc_t;

declare interface VMixDynamicsDesc_t {
    "FldbGain": number;
    "FldbNoiseGateThreshold": number;
    "FldbCompressionThreshold": number;
    "FldbLimiterThreshold": number;
    "FldbKneeWidth": number;
    "Ratio": number;
    "LimiterRatio": number;
    "AttackTimeMS": number;
    "ReleaseTimeMS": number;
    "RMSTimeMS": number;
    "WetMix": number;
    "PeakMode": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDynamicsDesc_t(ptr_or_class: string|AnySDKClass): VMixDynamicsDesc_t;

declare interface VMixEQ8Desc_t {
    readonly "Stages": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixEQ8Desc_t(ptr_or_class: string|AnySDKClass): VMixEQ8Desc_t;

declare interface VMixEffectChainDesc_t {
    "CrossfadeTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixEffectChainDesc_t(ptr_or_class: string|AnySDKClass): VMixEffectChainDesc_t;

declare interface VMixEnvelopeDesc_t {
    "AttackTimeMS": number;
    "HoldTimeMS": number;
    "ReleaseTimeMS": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixEnvelopeDesc_t(ptr_or_class: string|AnySDKClass): VMixEnvelopeDesc_t;

declare interface VMixFilterDesc_t {
    "FilterType": number;
    "FilterSlope": number;
    "Enabled": boolean;
    "FldbGain": number;
    "CutoffFreq": number;
    "Q": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixFilterDesc_t(ptr_or_class: string|AnySDKClass): VMixFilterDesc_t;

declare interface VMixFreeverbDesc_t {
    "RoomSize": number;
    "Damp": number;
    "Width": number;
    "LateReflections": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixFreeverbDesc_t(ptr_or_class: string|AnySDKClass): VMixFreeverbDesc_t;

declare interface VMixModDelayDesc_t {
    readonly "FeedbackFilter": VMixFilterDesc_t;
    "PhaseInvert": boolean;
    "GlideTime": number;
    "Delay": number;
    "OutputGain": number;
    "FeedbackGain": number;
    "ModRate": number;
    "ModDepth": number;
    "ApplyAntialiasing": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixModDelayDesc_t(ptr_or_class: string|AnySDKClass): VMixModDelayDesc_t;

declare interface VMixOscDesc_t {
    "OscType": number;
    "Freq": number;
    "Phase": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixOscDesc_t(ptr_or_class: string|AnySDKClass): VMixOscDesc_t;

declare interface VMixPannerDesc_t {
    "Type": number;
    "Strength": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixPannerDesc_t(ptr_or_class: string|AnySDKClass): VMixPannerDesc_t;

declare interface VMixPitchShiftDesc_t {
    "GrainSampleCount": number;
    "PitchShift": number;
    "Quality": number;
    "ProcType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixPitchShiftDesc_t(ptr_or_class: string|AnySDKClass): VMixPitchShiftDesc_t;

declare interface VMixPlateverbDesc_t {
    "Prefilter": number;
    "InputDiffusion1": number;
    "InputDiffusion2": number;
    "Decay": number;
    "Damp": number;
    "FeedbackDiffusion1": number;
    "FeedbackDiffusion2": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixPlateverbDesc_t(ptr_or_class: string|AnySDKClass): VMixPlateverbDesc_t;

declare interface VMixShaperDesc_t {
    "Shape": number;
    "FldbDrive": number;
    "FldbOutputGain": number;
    "WetMix": number;
    "OversampleFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixShaperDesc_t(ptr_or_class: string|AnySDKClass): VMixShaperDesc_t;

declare interface VMixSubgraphSwitchDesc_t {
    "InterpolationMode": number;
    "OnlyTailsOnFadeOut": boolean;
    "InterpolationTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixSubgraphSwitchDesc_t(ptr_or_class: string|AnySDKClass): VMixSubgraphSwitchDesc_t;

declare interface VMixUtilityDesc_t {
    "Op": number;
    "InputPan": number;
    "OutputBalance": number;
    "FldbOutputGain": number;
    "BassMono": boolean;
    "BassFreq": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixUtilityDesc_t(ptr_or_class: string|AnySDKClass): VMixUtilityDesc_t;

declare interface VMixVocoderDesc_t {
    "BandCount": number;
    "Bandwidth": number;
    "FldBModGain": number;
    "FreqRangeStart": number;
    "FreqRangeEnd": number;
    "FldBUnvoicedGain": number;
    "AttackTimeMS": number;
    "ReleaseTimeMS": number;
    "DebugBand": number;
    "PeakMode": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixVocoderDesc_t(ptr_or_class: string|AnySDKClass): VMixVocoderDesc_t;

declare interface CAudioEmphasisSample {
    "Time": number;
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioEmphasisSample(ptr_or_class: string|AnySDKClass): CAudioEmphasisSample;

declare interface CAudioMorphData {
    readonly "Times": Object;
    readonly "NameHashCodes": Object;
    readonly "NameStrings": Object;
    "EaseIn": number;
    "EaseOut": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioMorphData(ptr_or_class: string|AnySDKClass): CAudioMorphData;

declare interface CAudioPhonemeTag {
    "StartTime": number;
    "EndTime": number;
    "PhonemeCode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioPhonemeTag(ptr_or_class: string|AnySDKClass): CAudioPhonemeTag;

declare interface CAudioSentence {
    "ShouldVoiceDuck": boolean;
    readonly "RunTimePhonemes": Object;
    readonly "EmphasisSamples": Object;
    readonly "MorphData": CAudioMorphData;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioSentence(ptr_or_class: string|AnySDKClass): CAudioSentence;

declare interface CSoundContainerReference {
    "UseReference": boolean;
    readonly "Sound": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundContainerReference(ptr_or_class: string|AnySDKClass): CSoundContainerReference;

declare interface CSoundContainerReferenceArray {
    "UseReference": boolean;
    readonly "Sounds": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundContainerReferenceArray(ptr_or_class: string|AnySDKClass): CSoundContainerReferenceArray;

declare interface CSoundInfoHeader {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundInfoHeader(ptr_or_class: string|AnySDKClass): CSoundInfoHeader;

declare interface CVoiceContainerAmpedDecayingSineWave {
    "GainAmount": number;
    readonly "Parent": CVoiceContainerDecayingSineWave;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerAmpedDecayingSineWave(ptr_or_class: string|AnySDKClass): CVoiceContainerAmpedDecayingSineWave;

declare interface CVoiceContainerAnalysisBase {
    "RegenerateCurveOnCompile": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerAnalysisBase(ptr_or_class: string|AnySDKClass): CVoiceContainerAnalysisBase;

declare interface CVoiceContainerBase {
    readonly "EnvelopeAnalyzer": CVoiceContainerAnalysisBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerBase(ptr_or_class: string|AnySDKClass): CVoiceContainerBase;

declare interface CVoiceContainerBlender {
    readonly "FirstSound": CSoundContainerReference;
    readonly "SecondSound": CSoundContainerReference;
    "BlendFactor": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerBlender(ptr_or_class: string|AnySDKClass): CVoiceContainerBlender;

declare interface CVoiceContainerDecayingSineWave {
    "Frequency": number;
    "DecayTime": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerDecayingSineWave(ptr_or_class: string|AnySDKClass): CVoiceContainerDecayingSineWave;

declare interface CVoiceContainerDefault {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerDefault(ptr_or_class: string|AnySDKClass): CVoiceContainerDefault;

declare interface CVoiceContainerEnvelope {
    readonly "AnalysisContainer": CVoiceContainerAnalysisBase;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerEnvelope(ptr_or_class: string|AnySDKClass): CVoiceContainerEnvelope;

declare interface CVoiceContainerEnvelopeAnalyzer {
    "Mode": number;
    "Samples": number;
    "Threshold": number;
    readonly "Parent": CVoiceContainerAnalysisBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerEnvelopeAnalyzer(ptr_or_class: string|AnySDKClass): CVoiceContainerEnvelopeAnalyzer;

declare interface CVoiceContainerGranulator {
    "GrainLength": number;
    "GrainCrossfadeAmount": number;
    "StartJitter": number;
    "PlaybackJitter": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerGranulator(ptr_or_class: string|AnySDKClass): CVoiceContainerGranulator;

declare interface CVoiceContainerLoopTrigger {
    readonly "Sound": CSoundContainerReference;
    "RetriggerTimeMin": number;
    "RetriggerTimeMax": number;
    "FadeTime": number;
    "CrossFade": boolean;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerLoopTrigger(ptr_or_class: string|AnySDKClass): CVoiceContainerLoopTrigger;

declare interface CVoiceContainerNull {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerNull(ptr_or_class: string|AnySDKClass): CVoiceContainerNull;

declare interface CVoiceContainerRandomSampler {
    "Amplitude": number;
    "AmplitudeJitter": number;
    "TimeJitter": number;
    "MaxLength": number;
    "NumDelayVariations": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerRandomSampler(ptr_or_class: string|AnySDKClass): CVoiceContainerRandomSampler;

declare interface CVoiceContainerRealtimeFMSineWave {
    "CarrierFrequency": number;
    "ModulatorFrequency": number;
    "ModulatorAmount": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerRealtimeFMSineWave(ptr_or_class: string|AnySDKClass): CVoiceContainerRealtimeFMSineWave;

declare interface CVoiceContainerSelector {
    "Mode": number;
    readonly "SoundsToPlay": CSoundContainerReferenceArray;
    readonly "ProbabilityWeights": Object;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSelector(ptr_or_class: string|AnySDKClass): CVoiceContainerSelector;

declare interface CVoiceContainerSet {
    readonly "SoundsToPlay": Object;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSet(ptr_or_class: string|AnySDKClass): CVoiceContainerSet;

declare interface CVoiceContainerSetElement {
    readonly "Sound": CSoundContainerReference;
    "VolumeDB": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSetElement(ptr_or_class: string|AnySDKClass): CVoiceContainerSetElement;

declare interface CVoiceContainerShapedNoise {
    "UseCurveForFrequency": boolean;
    "Frequency": number;
    "UseCurveForResonance": boolean;
    "Resonance": number;
    "UseCurveForAmplitude": boolean;
    "GainInDecibels": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerShapedNoise(ptr_or_class: string|AnySDKClass): CVoiceContainerShapedNoise;

declare interface CVoiceContainerStaticAdditiveSynth {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerStaticAdditiveSynth(ptr_or_class: string|AnySDKClass): CVoiceContainerStaticAdditiveSynth;

declare interface CVoiceContainerSwitch {
    readonly "SoundsToPlay": Object;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSwitch(ptr_or_class: string|AnySDKClass): CVoiceContainerSwitch;

declare interface CRangeFloat {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRangeFloat(ptr_or_class: string|AnySDKClass): CRangeFloat;

declare interface CRangeInt {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRangeInt(ptr_or_class: string|AnySDKClass): CRangeInt;

declare interface IPhysicsPlayerController {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IPhysicsPlayerController(ptr_or_class: string|AnySDKClass): IPhysicsPlayerController;

declare interface constraint_axislimit_t {
    "MinRotation": number;
    "MaxRotation": number;
    "MotorTargetAngSpeed": number;
    "MotorMaxTorque": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function constraint_axislimit_t(ptr_or_class: string|AnySDKClass): constraint_axislimit_t;

declare interface constraint_breakableparams_t {
    "Strength": number;
    "ForceLimit": number;
    "TorqueLimit": number;
    "BodyMassScale": Object;
    "IsActive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function constraint_breakableparams_t(ptr_or_class: string|AnySDKClass): constraint_breakableparams_t;

declare interface constraint_hingeparams_t {
    "WorldPosition": Vector;
    "WorldAxisDirection": Vector;
    readonly "HingeAxis": constraint_axislimit_t;
    readonly "Constraint": constraint_breakableparams_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function constraint_hingeparams_t(ptr_or_class: string|AnySDKClass): constraint_hingeparams_t;

declare interface vphysics_save_cphysicsbody_t {
    "OldPointer": number;
    readonly "Parent": RnBodyDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function vphysics_save_cphysicsbody_t(ptr_or_class: string|AnySDKClass): vphysics_save_cphysicsbody_t;

declare interface AggregateLODSetup_t {
    "LODOrigin": Vector;
    "MaxObjectScale": number;
    readonly "SwitchDistances": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AggregateLODSetup_t(ptr_or_class: string|AnySDKClass): AggregateLODSetup_t;

declare interface AggregateMeshInfo_t {
    "VisClusterMemberOffset": number;
    "VisClusterMemberCount": number;
    "HasTransform": boolean;
    "DrawCallIndex": number;
    "LODSetupIndex": number;
    "LODGroupMask": number;
    "TintColor": Color;
    "ObjectFlags": number;
    "LightProbeVolumePrecomputedHandshake": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AggregateMeshInfo_t(ptr_or_class: string|AnySDKClass): AggregateMeshInfo_t;

declare interface AggregateSceneObject_t {
    "AllFlags": number;
    "AnyFlags": number;
    "Layer": number;
    readonly "AggregateMeshes": Object;
    readonly "LodSetups": Object;
    readonly "VisClusterMembership": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AggregateSceneObject_t(ptr_or_class: string|AnySDKClass): AggregateSceneObject_t;

declare interface BakedLightingInfo_t {
    "LightmapVersionNumber": number;
    "LightmapGameVersionNumber": number;
    "LightmapUvScale": Vector2D;
    "HasLightmaps": boolean;
    "BakedShadowsGamma20": boolean;
    "CompressionEnabled": boolean;
    "ChartPackIterations": number;
    "VradQuality": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function BakedLightingInfo_t(ptr_or_class: string|AnySDKClass): BakedLightingInfo_t;

declare interface BaseSceneObjectOverride_t {
    "SceneObjectIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function BaseSceneObjectOverride_t(ptr_or_class: string|AnySDKClass): BaseSceneObjectOverride_t;

declare interface CVoxelVisibility {
    "BaseClusterCount": number;
    "PVSBytesPerCluster": number;
    "MinBounds": Vector;
    "MaxBounds": Vector;
    "GridSize": number;
    "SkyVisibilityCluster": number;
    "SunVisibilityCluster": number;
    readonly "NodeBlock": VoxelVisBlockOffset_t;
    readonly "RegionBlock": VoxelVisBlockOffset_t;
    readonly "EnclosedClusterListBlock": VoxelVisBlockOffset_t;
    readonly "EnclosedClustersBlock": VoxelVisBlockOffset_t;
    readonly "MasksBlock": VoxelVisBlockOffset_t;
    readonly "VisBlocks": VoxelVisBlockOffset_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoxelVisibility(ptr_or_class: string|AnySDKClass): CVoxelVisibility;

declare interface ClutterSceneObject_t {
    readonly "Bounds": AABB_t;
    "Flags": number;
    "Layer": number;
    readonly "InstancePositions": Object;
    readonly "InstanceScales": Object;
    readonly "InstanceTintSrgb": Object;
    readonly "Tiles": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ClutterSceneObject_t(ptr_or_class: string|AnySDKClass): ClutterSceneObject_t;

declare interface ClutterTile_t {
    "FirstInstance": number;
    "LastInstance": number;
    readonly "BoundsWs": AABB_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ClutterTile_t(ptr_or_class: string|AnySDKClass): ClutterTile_t;

declare interface EntityIOConnectionData_t {
    "OutputName": string;
    "TargetType": number;
    "TargetName": string;
    "InputName": string;
    "OverrideParam": string;
    "Delay": number;
    "TimesToFire": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntityIOConnectionData_t(ptr_or_class: string|AnySDKClass): EntityIOConnectionData_t;

declare interface EntityKeyValueData_t {
    readonly "Connections": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntityKeyValueData_t(ptr_or_class: string|AnySDKClass): EntityKeyValueData_t;

declare interface ExtraVertexStreamOverride_t {
    "SubSceneObject": number;
    "DrawCallIndex": number;
    "AdditionalMeshDrawPrimitiveFlags": number;
    readonly "ExtraBufferBinding": CRenderBufferBinding;
    readonly "Parent": BaseSceneObjectOverride_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ExtraVertexStreamOverride_t(ptr_or_class: string|AnySDKClass): ExtraVertexStreamOverride_t;

declare interface InfoOverlayData_t {
    "Width": number;
    "Height": number;
    "Depth": number;
    "UVStart": Vector2D;
    "UVEnd": Vector2D;
    "RenderOrder": number;
    "TintColor": Vector4D;
    "SequenceOverride": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function InfoOverlayData_t(ptr_or_class: string|AnySDKClass): InfoOverlayData_t;

declare interface MaterialOverride_t {
    "SubSceneObject": number;
    "DrawCallIndex": number;
    readonly "Parent": BaseSceneObjectOverride_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialOverride_t(ptr_or_class: string|AnySDKClass): MaterialOverride_t;

declare interface NodeData_t {
    "Parent": number;
    "Origin": Vector;
    "MinBounds": Vector;
    "MaxBounds": Vector;
    "MinimumDistance": number;
    readonly "ChildNodeIndices": Object;
    "WorldNodePrefix": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NodeData_t(ptr_or_class: string|AnySDKClass): NodeData_t;

declare interface PermEntityLumpData_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermEntityLumpData_t(ptr_or_class: string|AnySDKClass): PermEntityLumpData_t;

declare interface SceneObject_t {
    "ObjectID": number;
    "Transform": Object;
    "FadeStartDistance": number;
    "FadeEndDistance": number;
    "TintColor": Vector4D;
    "Skin": string;
    "ObjectTypeFlags": number;
    "LightingOrigin": Vector;
    "OverlayRenderOrder": number;
    "LODOverride": number;
    "CubeMapPrecomputedHandshake": number;
    "LightProbeVolumePrecomputedHandshake": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SceneObject_t(ptr_or_class: string|AnySDKClass): SceneObject_t;

declare interface VMapResourceData_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMapResourceData_t(ptr_or_class: string|AnySDKClass): VMapResourceData_t;

declare interface VoxelVisBlockOffset_t {
    "Offset": number;
    "ElementCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VoxelVisBlockOffset_t(ptr_or_class: string|AnySDKClass): VoxelVisBlockOffset_t;

declare interface WorldBuilderParams_t {
    "MinDrawVolumeSize": number;
    "BuildBakedLighting": boolean;
    readonly "BakedLightingInfo": BakedLightingInfo_t;
    "CompileTimestamp": number;
    "CompileFingerprint": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WorldBuilderParams_t(ptr_or_class: string|AnySDKClass): WorldBuilderParams_t;

declare interface WorldNodeOnDiskBufferData_t {
    "ElementCount": number;
    "ElementSizeInBytes": number;
    readonly "InputLayoutFields": Object;
    readonly "Data": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WorldNodeOnDiskBufferData_t(ptr_or_class: string|AnySDKClass): WorldNodeOnDiskBufferData_t;

declare interface WorldNode_t {
    readonly "SceneObjects": Object;
    readonly "InfoOverlays": Object;
    readonly "VisClusterMembership": Object;
    readonly "AggregateSceneObjects": Object;
    readonly "ClutterSceneObjects": Object;
    readonly "ExtraVertexStreamOverrides": Object;
    readonly "MaterialOverrides": Object;
    readonly "ExtraVertexStreams": Object;
    readonly "LayerNames": Object;
    readonly "SceneObjectLayerIndices": Object;
    readonly "OverlayLayerIndices": Object;
    "GrassFileName": string;
    readonly "NodeLightingInfo": BakedLightingInfo_t;
    "HasBakedGeometryFlag": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WorldNode_t(ptr_or_class: string|AnySDKClass): WorldNode_t;

declare interface World_t {
    readonly "BuilderParams": WorldBuilderParams_t;
    readonly "WorldNodes": Object;
    readonly "WorldLightingInfo": BakedLightingInfo_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function World_t(ptr_or_class: string|AnySDKClass): World_t;
declare interface ICommands {
    GetAllCommands: () => Object;
    GetCommands: () => Object;
    UnregisterAlias: (alias: string) => null|undefined;
    RegisterAlias: (commandName: string,alias: string) => null|undefined;
    RegisterRawAlias: (commandName: string,alias: string) => null|undefined;
    Unregister: (commandName: string) => null|undefined;
    Register: (commandName: string,callback: (playerid:number,args:Object[],argsCount:number,silent:boolean,prefix:string) => void) => null|undefined;
}
declare const commands : ICommands
declare interface IConfiguration {
    Exists: (key: string) => boolean;
    Fetch: (key: string) => any;
    FetchArraySize: (key: string) => number;
    Reload: (key: string) => null|undefined;
    Create: (config_key: string,value: Object) => null|undefined;
}
declare const config : IConfiguration
declare interface IConvars {
    HasFlags: (name: string,flags: number) => boolean;
    GetFlags: (name: string) => number;
    RemoveFlags: (name: string,flags: number) => null|undefined;
    AddFlags: (name: string,flags: number) => null|undefined;
    ExistsFake: (name: string) => boolean;
    Exists: (name: string) => boolean;
    Set: (name: string,value: string) => null|undefined;
    GetType: (name: string) => EConVarType;
    Get: (name: string) => any;
    DeleteFake: (name: string) => null|undefined;
    CreateFake: (name: string,cvartype: EConVarType,defaultValue: any,protected: boolean) => null|undefined;
}
declare const convar : IConvars
declare interface IEntities {
}
declare function AddHookEntityOutput(className: string,output: string) : HookHandle;
declare function FindEntitiesByClassname(className: string) : Object;
declare function CreateEntityByName(className: string) : CEntityInstance;
declare interface IFunctions {
}
declare function AddEventHandler(eventName: GameEvent,callback: (event:Event,...args: any[]) => EventResult|void) : EventHandler;
declare function RemoveEventHandler(eventHandler: EventHandler) : null|undefined;
declare function TriggerEvent(eventName: GameEvent,...args: any[]) : [EventResult, Event];
type GameEvent =
      "OnGameuiHidden"
    | "OnPostGameuiHidden"
    | "OnPlayerTeam"
    | "OnPostPlayerTeam"
    | "OnPlayerChat"
    | "OnPostPlayerChat"
    | "OnPlayerScore"
    | "OnPostPlayerScore"
    | "OnPlayerShoot"
    | "OnPostPlayerShoot"
    | "OnGameInit"
    | "OnPostGameInit"
    | "OnGameNewmap"
    | "OnPostGameNewmap"
    | "OnGameStart"
    | "OnPostGameStart"
    | "OnGameEnd"
    | "OnPostGameEnd"
    | "OnRoundAnnounceMatchPoint"
    | "OnPostRoundAnnounceMatchPoint"
    | "OnRoundAnnounceFinal"
    | "OnPostRoundAnnounceFinal"
    | "OnRoundAnnounceLastRoundHalf"
    | "OnPostRoundAnnounceLastRoundHalf"
    | "OnRoundAnnounceMatchStart"
    | "OnPostRoundAnnounceMatchStart"
    | "OnRoundAnnounceWarmup"
    | "OnPostRoundAnnounceWarmup"
    | "OnWarmupEnd"
    | "OnPostWarmupEnd"
    | "OnRoundEnd"
    | "OnPostRoundEnd"
    | "OnRoundEndUploadStats"
    | "OnPostRoundEndUploadStats"
    | "OnRoundOfficiallyEnded"
    | "OnPostRoundOfficiallyEnded"
    | "OnRoundTimeWarning"
    | "OnPostRoundTimeWarning"
    | "OnUgcMapInfoReceived"
    | "OnPostUgcMapInfoReceived"
    | "OnUgcMapUnsubscribed"
    | "OnPostUgcMapUnsubscribed"
    | "OnUgcMapDownloadError"
    | "OnPostUgcMapDownloadError"
    | "OnUgcFileDownloadFinished"
    | "OnPostUgcFileDownloadFinished"
    | "OnUgcFileDownloadStart"
    | "OnPostUgcFileDownloadStart"
    | "OnBeginNewMatch"
    | "OnPostBeginNewMatch"
    | "OnDmBonusWeaponStart"
    | "OnPostDmBonusWeaponStart"
    | "OnSurvivalAnnouncePhase"
    | "OnPostSurvivalAnnouncePhase"
    | "OnBreakProp"
    | "OnPostBreakProp"
    | "OnPlayerDecal"
    | "OnPostPlayerDecal"
    | "OnEntityVisible"
    | "OnPostEntityVisible"
    | "OnInstructorServerHintCreate"
    | "OnPostInstructorServerHintCreate"
    | "OnInstructorServerHintStop"
    | "OnPostInstructorServerHintStop"
    | "OnReadGameTitledata"
    | "OnPostReadGameTitledata"
    | "OnWriteGameTitledata"
    | "OnPostWriteGameTitledata"
    | "OnResetGameTitledata"
    | "OnPostResetGameTitledata"
    | "OnWeaponhudSelection"
    | "OnPostWeaponhudSelection"
    | "OnVoteEnded"
    | "OnPostVoteEnded"
    | "OnVoteStarted"
    | "OnPostVoteStarted"
    | "OnVoteChanged"
    | "OnPostVoteChanged"
    | "OnVoteCast"
    | "OnPostVoteCast"
    | "OnVoteOptions"
    | "OnPostVoteOptions"
    | "OnEndmatchMapvoteSelectingMap"
    | "OnPostEndmatchMapvoteSelectingMap"
    | "OnEndmatchCmmStartRevealItems"
    | "OnPostEndmatchCmmStartRevealItems"
    | "OnInventoryUpdated"
    | "OnPostInventoryUpdated"
    | "OnClientLoadoutChanged"
    | "OnPostClientLoadoutChanged"
    | "OnAddPlayerSonarIcon"
    | "OnPostAddPlayerSonarIcon"
    | "OnDoorOpen"
    | "OnPostDoorOpen"
    | "OnDoorClosed"
    | "OnPostDoorClosed"
    | "OnDoorBreak"
    | "OnPostDoorBreak"
    | "OnAddBulletHitMarker"
    | "OnPostAddBulletHitMarker"
    | "OnPlayerDeath"
    | "OnPostPlayerDeath"
    | "OnOtherDeath"
    | "OnPostOtherDeath"
    | "OnPlayerHurt"
    | "OnPostPlayerHurt"
    | "OnBulletDamage"
    | "OnPostBulletDamage"
    | "OnItemPurchase"
    | "OnPostItemPurchase"
    | "OnBombBeginplant"
    | "OnPostBombBeginplant"
    | "OnBombAbortplant"
    | "OnPostBombAbortplant"
    | "OnBombPlanted"
    | "OnPostBombPlanted"
    | "OnBombDefused"
    | "OnPostBombDefused"
    | "OnBombExploded"
    | "OnPostBombExploded"
    | "OnBombDropped"
    | "OnPostBombDropped"
    | "OnBombPickup"
    | "OnPostBombPickup"
    | "OnDefuserDropped"
    | "OnPostDefuserDropped"
    | "OnDefuserPickup"
    | "OnPostDefuserPickup"
    | "OnAnnouncePhaseEnd"
    | "OnPostAnnouncePhaseEnd"
    | "OnCsIntermission"
    | "OnPostCsIntermission"
    | "OnBombBegindefuse"
    | "OnPostBombBegindefuse"
    | "OnBombAbortdefuse"
    | "OnPostBombAbortdefuse"
    | "OnHostageFollows"
    | "OnPostHostageFollows"
    | "OnHostageHurt"
    | "OnPostHostageHurt"
    | "OnHostageKilled"
    | "OnPostHostageKilled"
    | "OnHostageRescued"
    | "OnPostHostageRescued"
    | "OnHostageStopsFollowing"
    | "OnPostHostageStopsFollowing"
    | "OnHostageRescuedAll"
    | "OnPostHostageRescuedAll"
    | "OnHostageCallForHelp"
    | "OnPostHostageCallForHelp"
    | "OnVipEscaped"
    | "OnPostVipEscaped"
    | "OnVipKilled"
    | "OnPostVipKilled"
    | "OnPlayerRadio"
    | "OnPostPlayerRadio"
    | "OnBombBeep"
    | "OnPostBombBeep"
    | "OnWeaponFire"
    | "OnPostWeaponFire"
    | "OnWeaponFireOnEmpty"
    | "OnPostWeaponFireOnEmpty"
    | "OnGrenadeThrown"
    | "OnPostGrenadeThrown"
    | "OnWeaponReload"
    | "OnPostWeaponReload"
    | "OnWeaponZoom"
    | "OnPostWeaponZoom"
    | "OnSilencerDetach"
    | "OnPostSilencerDetach"
    | "OnInspectWeapon"
    | "OnPostInspectWeapon"
    | "OnWeaponZoomRifle"
    | "OnPostWeaponZoomRifle"
    | "OnPlayerSpawned"
    | "OnPostPlayerSpawned"
    | "OnItemPickup"
    | "OnPostItemPickup"
    | "OnItemPickupSlerp"
    | "OnPostItemPickupSlerp"
    | "OnItemPickupFailed"
    | "OnPostItemPickupFailed"
    | "OnItemRemove"
    | "OnPostItemRemove"
    | "OnAmmoPickup"
    | "OnPostAmmoPickup"
    | "OnItemEquip"
    | "OnPostItemEquip"
    | "OnEnterBuyzone"
    | "OnPostEnterBuyzone"
    | "OnExitBuyzone"
    | "OnPostExitBuyzone"
    | "OnBuytimeEnded"
    | "OnPostBuytimeEnded"
    | "OnEnterBombzone"
    | "OnPostEnterBombzone"
    | "OnExitBombzone"
    | "OnPostExitBombzone"
    | "OnEnterRescueZone"
    | "OnPostEnterRescueZone"
    | "OnExitRescueZone"
    | "OnPostExitRescueZone"
    | "OnSilencerOff"
    | "OnPostSilencerOff"
    | "OnSilencerOn"
    | "OnPostSilencerOn"
    | "OnBuymenuOpen"
    | "OnPostBuymenuOpen"
    | "OnBuymenuClose"
    | "OnPostBuymenuClose"
    | "OnRoundPrestart"
    | "OnPostRoundPrestart"
    | "OnRoundPoststart"
    | "OnPostRoundPoststart"
    | "OnGrenadeBounce"
    | "OnPostGrenadeBounce"
    | "OnHegrenadeDetonate"
    | "OnPostHegrenadeDetonate"
    | "OnFlashbangDetonate"
    | "OnPostFlashbangDetonate"
    | "OnSmokegrenadeDetonate"
    | "OnPostSmokegrenadeDetonate"
    | "OnSmokegrenadeExpired"
    | "OnPostSmokegrenadeExpired"
    | "OnMolotovDetonate"
    | "OnPostMolotovDetonate"
    | "OnDecoyDetonate"
    | "OnPostDecoyDetonate"
    | "OnDecoyStarted"
    | "OnPostDecoyStarted"
    | "OnTagrenadeDetonate"
    | "OnPostTagrenadeDetonate"
    | "OnInfernoStartburn"
    | "OnPostInfernoStartburn"
    | "OnInfernoExpire"
    | "OnPostInfernoExpire"
    | "OnInfernoExtinguish"
    | "OnPostInfernoExtinguish"
    | "OnDecoyFiring"
    | "OnPostDecoyFiring"
    | "OnBulletImpact"
    | "OnPostBulletImpact"
    | "OnPlayerFootstep"
    | "OnPostPlayerFootstep"
    | "OnPlayerJump"
    | "OnPostPlayerJump"
    | "OnPlayerBlind"
    | "OnPostPlayerBlind"
    | "OnPlayerFalldamage"
    | "OnPostPlayerFalldamage"
    | "OnDoorMoving"
    | "OnPostDoorMoving"
    | "OnMbInputLockSuccess"
    | "OnPostMbInputLockSuccess"
    | "OnMbInputLockCancel"
    | "OnPostMbInputLockCancel"
    | "OnNavBlocked"
    | "OnPostNavBlocked"
    | "OnNavGenerate"
    | "OnPostNavGenerate"
    | "OnAchievementInfoLoaded"
    | "OnPostAchievementInfoLoaded"
    | "OnSpecModeUpdated"
    | "OnPostSpecModeUpdated"
    | "OnHltvChangedMode"
    | "OnPostHltvChangedMode"
    | "OnCsGameDisconnected"
    | "OnPostCsGameDisconnected"
    | "OnCsRoundFinalBeep"
    | "OnPostCsRoundFinalBeep"
    | "OnCsRoundStartBeep"
    | "OnPostCsRoundStartBeep"
    | "OnCsWinPanelRound"
    | "OnPostCsWinPanelRound"
    | "OnCsWinPanelMatch"
    | "OnPostCsWinPanelMatch"
    | "OnCsMatchEndRestart"
    | "OnPostCsMatchEndRestart"
    | "OnCsPreRestart"
    | "OnPostCsPreRestart"
    | "OnShowDeathpanel"
    | "OnPostShowDeathpanel"
    | "OnHideDeathpanel"
    | "OnPostHideDeathpanel"
    | "OnPlayerAvengedTeammate"
    | "OnPostPlayerAvengedTeammate"
    | "OnAchievementEarnedLocal"
    | "OnPostAchievementEarnedLocal"
    | "OnRepostXboxAchievements"
    | "OnPostRepostXboxAchievements"
    | "OnMatchEndConditions"
    | "OnPostMatchEndConditions"
    | "OnRoundMvp"
    | "OnPostRoundMvp"
    | "OnShowSurvivalRespawnStatus"
    | "OnPostShowSurvivalRespawnStatus"
    | "OnGgKilledEnemy"
    | "OnPostGgKilledEnemy"
    | "OnSwitchTeam"
    | "OnPostSwitchTeam"
    | "OnWriteProfileData"
    | "OnPostWriteProfileData"
    | "OnTrialTimeExpired"
    | "OnPostTrialTimeExpired"
    | "OnUpdateMatchmakingStats"
    | "OnPostUpdateMatchmakingStats"
    | "OnPlayerResetVote"
    | "OnPostPlayerResetVote"
    | "OnEnableRestartVoting"
    | "OnPostEnableRestartVoting"
    | "OnSfuievent"
    | "OnPostSfuievent"
    | "OnStartVote"
    | "OnPostStartVote"
    | "OnPlayerGivenC4"
    | "OnPostPlayerGivenC4"
    | "OnBotTakeover"
    | "OnPostBotTakeover"
    | "OnJointeamFailed"
    | "OnPostJointeamFailed"
    | "OnTeamchangePending"
    | "OnPostTeamchangePending"
    | "OnMaterialDefaultComplete"
    | "OnPostMaterialDefaultComplete"
    | "OnCsPrevNextSpectator"
    | "OnPostCsPrevNextSpectator"
    | "OnNextlevelChanged"
    | "OnPostNextlevelChanged"
    | "OnSeasoncoinLevelup"
    | "OnPostSeasoncoinLevelup"
    | "OnTournamentReward"
    | "OnPostTournamentReward"
    | "OnStartHalftime"
    | "OnPostStartHalftime"
    | "OnAmmoRefill"
    | "OnPostAmmoRefill"
    | "OnParachutePickup"
    | "OnPostParachutePickup"
    | "OnParachuteDeploy"
    | "OnPostParachuteDeploy"
    | "OnDronegunAttack"
    | "OnPostDronegunAttack"
    | "OnDroneDispatched"
    | "OnPostDroneDispatched"
    | "OnLootCrateVisible"
    | "OnPostLootCrateVisible"
    | "OnLootCrateOpened"
    | "OnPostLootCrateOpened"
    | "OnOpenCrateInstr"
    | "OnPostOpenCrateInstr"
    | "OnSmokeBeaconParadrop"
    | "OnPostSmokeBeaconParadrop"
    | "OnSurvivalParadropSpawn"
    | "OnPostSurvivalParadropSpawn"
    | "OnSurvivalParadropBreak"
    | "OnPostSurvivalParadropBreak"
    | "OnDroneCargoDetached"
    | "OnPostDroneCargoDetached"
    | "OnDroneAboveRoof"
    | "OnPostDroneAboveRoof"
    | "OnChoppersIncomingWarning"
    | "OnPostChoppersIncomingWarning"
    | "OnFirstbombsIncomingWarning"
    | "OnPostFirstbombsIncomingWarning"
    | "OnDzItemInteraction"
    | "OnPostDzItemInteraction"
    | "OnSurvivalTeammateRespawn"
    | "OnPostSurvivalTeammateRespawn"
    | "OnSurvivalNoRespawnsWarning"
    | "OnPostSurvivalNoRespawnsWarning"
    | "OnSurvivalNoRespawnsFinal"
    | "OnPostSurvivalNoRespawnsFinal"
    | "OnPlayerPing"
    | "OnPostPlayerPing"
    | "OnPlayerPingStop"
    | "OnPostPlayerPingStop"
    | "OnPlayerSound"
    | "OnPostPlayerSound"
    | "OnGuardianWaveRestart"
    | "OnPostGuardianWaveRestart"
    | "OnTeamIntroStart"
    | "OnPostTeamIntroStart"
    | "OnTeamIntroEnd"
    | "OnPostTeamIntroEnd"
    | "OnBulletFlightResolution"
    | "OnPostBulletFlightResolution"
    | "OnGamePhaseChanged"
    | "OnPostGamePhaseChanged"
    | "OnClientsideReloadCustomEcon"
    | "OnPostClientsideReloadCustomEcon"
    | "OnServerSpawn"
    | "OnPostServerSpawn"
    | "OnServerPreShutdown"
    | "OnPostServerPreShutdown"
    | "OnServerShutdown"
    | "OnPostServerShutdown"
    | "OnServerMessage"
    | "OnPostServerMessage"
    | "OnServerCvar"
    | "OnPostServerCvar"
    | "OnPlayerActivate"
    | "OnPostPlayerActivate"
    | "OnPlayerConnectFull"
    | "OnPostPlayerConnectFull"
    | "OnPlayerFullUpdate"
    | "OnPostPlayerFullUpdate"
    | "OnPlayerConnect"
    | "OnPostPlayerConnect"
    | "OnPlayerDisconnect"
    | "OnPostPlayerDisconnect"
    | "OnPlayerInfo"
    | "OnPostPlayerInfo"
    | "OnPlayerSpawn"
    | "OnPostPlayerSpawn"
    | "OnLocalPlayerTeam"
    | "OnPostLocalPlayerTeam"
    | "OnLocalPlayerControllerTeam"
    | "OnPostLocalPlayerControllerTeam"
    | "OnPlayerChangename"
    | "OnPostPlayerChangename"
    | "OnLocalPlayerPawnChanged"
    | "OnPostLocalPlayerPawnChanged"
    | "OnTeamplayBroadcastAudio"
    | "OnPostTeamplayBroadcastAudio"
    | "OnFinaleStart"
    | "OnPostFinaleStart"
    | "OnPlayerStatsUpdated"
    | "OnPostPlayerStatsUpdated"
    | "OnUserDataDownloaded"
    | "OnPostUserDataDownloaded"
    | "OnRagdollDissolved"
    | "OnPostRagdollDissolved"
    | "OnTeamInfo"
    | "OnPostTeamInfo"
    | "OnTeamScore"
    | "OnPostTeamScore"
    | "OnHltvCameraman"
    | "OnPostHltvCameraman"
    | "OnHltvChase"
    | "OnPostHltvChase"
    | "OnHltvRankCamera"
    | "OnPostHltvRankCamera"
    | "OnHltvRankEntity"
    | "OnPostHltvRankEntity"
    | "OnHltvFixed"
    | "OnPostHltvFixed"
    | "OnHltvMessage"
    | "OnPostHltvMessage"
    | "OnHltvStatus"
    | "OnPostHltvStatus"
    | "OnHltvTitle"
    | "OnPostHltvTitle"
    | "OnHltvChat"
    | "OnPostHltvChat"
    | "OnHltvVersioninfo"
    | "OnPostHltvVersioninfo"
    | "OnHltvReplay"
    | "OnPostHltvReplay"
    | "OnHltvReplayStatus"
    | "OnPostHltvReplayStatus"
    | "OnDemoStop"
    | "OnPostDemoStop"
    | "OnMapShutdown"
    | "OnPostMapShutdown"
    | "OnMapTransition"
    | "OnPostMapTransition"
    | "OnHostnameChanged"
    | "OnPostHostnameChanged"
    | "OnDifficultyChanged"
    | "OnPostDifficultyChanged"
    | "OnGameMessage"
    | "OnPostGameMessage"
    | "OnRoundStart"
    | "OnPostRoundStart"
    | "OnRoundStartPreEntity"
    | "OnPostRoundStartPreEntity"
    | "OnRoundStartPostNav"
    | "OnPostRoundStartPostNav"
    | "OnRoundFreezeEnd"
    | "OnPostRoundFreezeEnd"
    | "OnTeamplayRoundStart"
    | "OnPostTeamplayRoundStart"
    | "OnPlayerHintmessage"
    | "OnPostPlayerHintmessage"
    | "OnBreakBreakable"
    | "OnPostBreakBreakable"
    | "OnBrokenBreakable"
    | "OnPostBrokenBreakable"
    | "OnEntityKilled"
    | "OnPostEntityKilled"
    | "OnDoorClose"
    | "OnPostDoorClose"
    | "OnVoteFailed"
    | "OnPostVoteFailed"
    | "OnVotePassed"
    | "OnPostVotePassed"
    | "OnVoteCastYes"
    | "OnPostVoteCastYes"
    | "OnVoteCastNo"
    | "OnPostVoteCastNo"
    | "OnAchievementEvent"
    | "OnPostAchievementEvent"
    | "OnAchievementEarned"
    | "OnPostAchievementEarned"
    | "OnAchievementWriteFailed"
    | "OnPostAchievementWriteFailed"
    | "OnBonusUpdated"
    | "OnPostBonusUpdated"
    | "OnSpecTargetUpdated"
    | "OnPostSpecTargetUpdated"
    | "OnGameinstructorDraw"
    | "OnPostGameinstructorDraw"
    | "OnGameinstructorNodraw"
    | "OnPostGameinstructorNodraw"
    | "OnFlareIgniteNpc"
    | "OnPostFlareIgniteNpc"
    | "OnHelicopterGrenadePuntMiss"
    | "OnPostHelicopterGrenadePuntMiss"
    | "OnPhysgunPickup"
    | "OnPostPhysgunPickup"
    | "OnCartUpdated"
    | "OnPostCartUpdated"
    | "OnStorePricesheetUpdated"
    | "OnPostStorePricesheetUpdated"
    | "OnItemSchemaInitialized"
    | "OnPostItemSchemaInitialized"
    | "OnDropRateModified"
    | "OnPostDropRateModified"
    | "OnEventTicketModified"
    | "OnPostEventTicketModified"
    | "OnGcConnected"
    | "OnPostGcConnected"
    | "OnInstructorStartLesson"
    | "OnPostInstructorStartLesson"
    | "OnInstructorCloseLesson"
    | "OnPostInstructorCloseLesson"
    | "OnSetInstructorGroupEnabled"
    | "OnPostSetInstructorGroupEnabled"
    | "OnClientsideLessonClosed"
    | "OnPostClientsideLessonClosed"
    | "OnDynamicShadowLightChanged"
    | "OnPostDynamicShadowLightChanged"
    | "OnPluginStart"
    | "OnPluginStop"
    | "OnAllPluginsLoaded"
    | "OnMapLoad"
    | "OnMapUnload"
    | "OnGameTick"
    | "OnClientDisconnect"
    | "OnTerminateRound"
    | "OnEntityAcceptInput"
    | "OnPlayerCheckTransmit"
    | "OnClientConnect"
    | "OnEntitySpawned"
    | "OnEntityCreated"
    | "OnEntityDeleted"
    | "OnClientKeyStateChange"
    | "OnClientConvarQuery"
    | "OnClientCommand"
    | "OnClientChat"
    | "OnPlayerDamage"
    | "OnPlayerPostThink"
    | "OnUserMessageSend"
    | "OnUserMessageReceive"
declare interface IExports {
    [plugin_name: string]: {
        [function_name: string]: (...args: any[]) => any;
    }
}
declare const exports : IExports
declare function exp(exportName: string,callback: (...args: any[]) => void) : null|undefined;
declare interface IFiles {
    Decompress: (path: string,output: string) => boolean;
    Compress: (path: string,output: string) => boolean;
    Write: (path: string,content: string,hasdate: boolean) => null|undefined;
    Read: (path: string) => string;
    IsDirectory: (path: string) => boolean;
    GetBase: (path: string) => string;
    FetchFileNames: (path: string) => Object;
    FetchDirectories: (path: string) => Object;
    ExistsPath: (path: string) => boolean;
    Delete: (path: string) => null|undefined;
    CreateDirectory: (path: string) => boolean;
    Append: (path: string,content: string,hasdate: boolean) => null|undefined;
}
declare const files : IFiles
declare interface IGeneric {
}
declare function GetCurrentPluginName() : string;
declare function GetPluginPath(plugin_name: string) : string;
declare function GetPluginState(plugin_name: string) : PluginState_t;
declare function CreateTextTable(data: Object) : string;
declare interface IHooks {
}
declare function AddHook(memory: IMemory,args_list: string,return_type: string) : HookHandle;
declare function AddPreHookListener(hookHandle: HookHandle,callback: (event:Event) => EventResult) : EventHandler;
declare function AddPostHookListener(hookHandle: HookHandle,callback: (event:Event) => EventResult) : EventHandler;
declare function RemoveHookListener(eventHandler: EventHandler) : null|undefined;
declare function CallHook(hookHandle: HookHandle,...args: any[]) : any;
declare interface IHTTP {
    Listen: (ip_addr: string,port: number,callback: (req:HTTPRequest,res:HTTPResponse) => void) => null|undefined;
}
declare function PerformHTTPRequest(url: string,callback: (status:number,body:string,headers:Object[],err:string) => void,method: string,data: string,headers: Object,files: Object) : null|undefined;
declare interface IIP {
    GetASN: (ip: string) => string;
    GetLongitude: (ip: string) => number;
    GetLatitude: (ip: string) => number;
    GetTimezone: (ip: string) => string;
    GetCity: (ip: string) => string;
    GetRegion: (ip: string) => string;
    GetCountry: (ip: string) => string;
    GetContinent: (ip: string) => string;
    GetIsoCode: (ip: string) => string;
}
declare const ip : IIP
declare interface ILogs {
    Write: (log_type: LogType_t,text: string) => null|undefined;
}
declare const logger : ILogs
declare interface IMemory {
    IsValid: () => boolean;
    GetPtr: () => string;
    Clear: () => null|undefined;
    Deallocate: () => null|undefined;
    Allocate: (size: number) => null|undefined;
    RemoveOffsetByName: (offsetName: string) => null|undefined;
    AddOffsetByName: (offsetName: string) => null|undefined;
    RemoveOffset: (offset: number) => null|undefined;
    AddOffset: (offset: number) => null|undefined;
    LoadFromSignatureName: (signature: string) => null|undefined;
    LoadFromSignature: (library: string,signature: string) => null|undefined;
    LoadFromAddress: (address: string) => null|undefined;
    GetInt64: () => number;
    SetInt64: (value: number) => null|undefined;
    GetDouble: () => number;
    SetDouble: (value: number) => null|undefined;
    GetFloat: () => number;
    SetFloat: (value: number) => null|undefined;
    GetUInt64: () => number;
    SetUInt64: (value: number) => null|undefined;
    GetUInt: () => number;
    SetUInt: (value: number) => null|undefined;
    GetInt: () => number;
    SetInt: (value: number) => null|undefined;
    GetBool: () => boolean;
    SetBool: (value: boolean) => null|undefined;
    AccessVTableFromOffset: (offsetName: string) => null|undefined;
    AccessVTable: (offset: number) => null|undefined;
    AccessedVTable: () => boolean;
    AccessIndexFromOffset: (offsetName: string) => null|undefined;
    AccessIndex: (index: number) => null|undefined;
}
declare const memory : IMemory

declare function Memory(): IMemory;
declare interface IMenus {
    Unregister: (id: string) => null|undefined;
    RegisterTemporary: (id: string,title: string,color: string,options: Object,kind: string|null) => null|undefined;
    Register: (id: string,title: string,color: string,options: Object,kind: string|null) => null|undefined;
}
declare const menus : IMenus
declare interface IPlayer {
    GetWeaponManager: () => IWeaponManager;
    SetVoiceFlags: (flags: number) => null|undefined;
    GetVoiceFlags: () => number;
    QueryConvar: (convar_name: string) => null|undefined;
    SetListening: (id: number,override: ListenOverride) => null|undefined;
    GetListening: (id: number) => ListenOverride;
    ChangeTeam: (team: Team) => null|undefined;
    SwitchTeam: (team: Team) => null|undefined;
    SendMsg: (msgType: MessageType,text: string) => null|undefined;
    Respawn: () => null|undefined;
    Kill: () => null|undefined;
    IsFirstSpawn: () => boolean;
    IsFakeClient: () => boolean;
    SetVar: (key: string,value: any) => null|undefined;
    GetVar: (key: string) => any;
    ShowMenu: (menuid: string) => null|undefined;
    HideMenu: () => null|undefined;
    GetSteamID2: () => string;
    GetConnectedTime: () => number;
    GetSteamID: () => number;
    GetSlot: () => number;
    GetIPAddress: () => string;
    SetConvar: (convar: string,value: string) => null|undefined;
    GetConvar: (convar: string) => string;
    ExecuteCommand: (command: string) => null|undefined;
    SetChatColor: (color: string) => null|undefined;
    GetChatColor: () => string;
    SetNameColor: (color: string) => null|undefined;
    GetNameColor: () => string;
    SetChatTagColor: (color: string) => null|undefined;
    GetChatTagColor: () => string;
    SetChatTag: (tag: string) => null|undefined;
    GetChatTag: () => string;
    Drop: (reason: DisconnectReason) => null|undefined;
    CCSPlayerPawnBase: () => CCSPlayerPawnBase;
    CCSPlayerPawn: () => CCSPlayerPawn;
    CCSPlayerController: () => CCSPlayerController;
    CBasePlayerPawn: () => CBasePlayerPawn;
    CBasePlayerController: () => CBasePlayerController;
    CBaseEntity: () => CBaseEntity;
    PerformMenuAction: (action: string,value: number) => null|undefined;
    IsValid: () => boolean;
}
declare const player : IPlayer
declare interface IPlayerManager {
    SendMsg: (msgType: MessageType,text: string) => null|undefined;
    GetPlayerCap: () => number;
    GetPlayerCount: () => number;
}
declare const playermanager : IPlayerManager
declare interface IPrecacher {
    PrecacheItem: (path: string) => null|undefined;
    PrecacheSound: (path: string) => null|undefined;
    PrecacheModel: (model: string) => null|undefined;
}
declare const precacher : IPrecacher
declare interface IPlayerUtils {
    IsListeningToGameEvent: (playerid: number,event_name: string) => boolean;
    GetBunnyhop: (playerid: number) => boolean;
    SetBunnyhop: (playerid: number,state: boolean) => null|undefined;
}
declare const playerutils : IPlayerUtils
type AnySDKClass = 
    | CEntityKeyValues
    | AnimationDecodeDebugDumpElement_t
    | AnimationDecodeDebugDump_t
    | AnimationSnapshotBase_t
    | AnimationSnapshot_t
    | CAnimActivity
    | CAnimBone
    | CAnimBoneDifference
    | CAnimData
    | CAnimDataChannelDesc
    | CAnimDecoder
    | CAnimDesc
    | CAnimDesc_Flag
    | CAnimEncodeDifference
    | CAnimEncodedFrames
    | CAnimEnum
    | CAnimEventDefinition
    | CAnimFrameBlockAnim
    | CAnimFrameSegment
    | CAnimKeyData
    | CAnimLocalHierarchy
    | CAnimMorphDifference
    | CAnimMovement
    | CAnimSequenceParams
    | CAnimUser
    | CAnimUserDifference
    | CAnimationGroup
    | CMoodVData
    | CSeqAutoLayer
    | CSeqAutoLayerFlag
    | CSeqBoneMaskList
    | CSeqCmdLayer
    | CSeqCmdSeqDesc
    | CSeqIKLock
    | CSeqMultiFetch
    | CSeqMultiFetchFlag
    | CSeqPoseParamDesc
    | CSeqPoseSetting
    | CSeqS1SeqDesc
    | CSeqScaleSet
    | CSeqSeqDescFlag
    | CSeqSynthAnimDesc
    | CSeqTransition
    | CSequenceGroupData
    | MoodAnimation_t
    | AimCameraOpFixedSettings_t
    | AimMatrixOpFixedSettings_t
    | BlendItem_t
    | BoneDemoCaptureSettings_t
    | CActionComponentUpdater
    | CAddUpdateNode
    | CAimCameraUpdateNode
    | CAimMatrixUpdateNode
    | CAnimActionUpdater
    | CAnimComponentUpdater
    | CAnimDemoCaptureSettings
    | CAnimGraphDebugReplay
    | CAnimGraphModelBinding
    | CAnimGraphNetworkSettings
    | CAnimGraphSettingsGroup
    | CAnimGraphSettingsManager
    | CAnimInputDamping
    | CAnimMotorUpdaterBase
    | CAnimNodePath
    | CAnimParamHandle
    | CAnimParamHandleMap
    | CAnimParameterBase
    | CAnimParameterManagerUpdater
    | CAnimReplayFrame
    | CAnimScriptComponentUpdater
    | CAnimScriptManager
    | CAnimStateMachineUpdater
    | CAnimTagBase
    | CAnimTagManagerUpdater
    | CAnimUpdateNodeBase
    | CAnimUpdateNodeRef
    | CAnimUpdateSharedData
    | CAnimationGraphVisualizerAxis
    | CAnimationGraphVisualizerLine
    | CAnimationGraphVisualizerPie
    | CAnimationGraphVisualizerPrimitiveBase
    | CAnimationGraphVisualizerSphere
    | CAnimationGraphVisualizerText
    | CAudioAnimTag
    | CBinaryUpdateNode
    | CBindPoseUpdateNode
    | CBlend2DUpdateNode
    | CBlendCurve
    | CBlendUpdateNode
    | CBlockSelectionMetricEvaluator
    | CBodyGroupAnimTag
    | CBodyGroupSetting
    | CBoneMaskUpdateNode
    | CBonePositionMetricEvaluator
    | CBoneVelocityMetricEvaluator
    | CBoolAnimParameter
    | CCPPScriptComponentUpdater
    | CCachedPose
    | CChoiceUpdateNode
    | CChoreoUpdateNode
    | CClothSettingsAnimTag
    | CConcreteAnimParameter
    | CCurrentRotationVelocityMetricEvaluator
    | CCurrentVelocityMetricEvaluator
    | CCycleControlClipUpdateNode
    | CCycleControlUpdateNode
    | CDampedPathAnimMotorUpdater
    | CDampedValueComponentUpdater
    | CDampedValueUpdateItem
    | CDemoSettingsComponentUpdater
    | CDirectPlaybackTagData
    | CDirectPlaybackUpdateNode
    | CDirectionalBlendUpdateNode
    | CDistanceRemainingMetricEvaluator
    | CEditableMotionGraph
    | CEmitTagActionUpdater
    | CEnumAnimParameter
    | CExpressionActionUpdater
    | CFloatAnimParameter
    | CFollowAttachmentUpdateNode
    | CFollowPathUpdateNode
    | CFollowTargetUpdateNode
    | CFootAdjustmentUpdateNode
    | CFootCycleMetricEvaluator
    | CFootFallAnimTag
    | CFootLockUpdateNode
    | CFootPinningUpdateNode
    | CFootPositionMetricEvaluator
    | CFootStepTriggerUpdateNode
    | CFootstepLandedAnimTag
    | CFutureFacingMetricEvaluator
    | CFutureVelocityMetricEvaluator
    | CHandshakeAnimTagBase
    | CHitReactUpdateNode
    | CInputStreamUpdateNode
    | CIntAnimParameter
    | CJiggleBoneUpdateNode
    | CJumpHelperUpdateNode
    | CLODComponentUpdater
    | CLeafUpdateNode
    | CLeanMatrixUpdateNode
    | CLookAtUpdateNode
    | CLookComponentUpdater
    | CMaterialAttributeAnimTag
    | CMotionDataSet
    | CMotionGraph
    | CMotionGraphConfig
    | CMotionGraphGroup
    | CMotionGraphUpdateNode
    | CMotionMatchingUpdateNode
    | CMotionMetricEvaluator
    | CMotionNode
    | CMotionNodeBlend1D
    | CMotionNodeSequence
    | CMotionSearchDB
    | CMotionSearchNode
    | CMovementComponentUpdater
    | CMovementHandshakeAnimTag
    | CMoverUpdateNode
    | COrientationWarpUpdateNode
    | CPairedSequenceComponentUpdater
    | CPairedSequenceUpdateNode
    | CParamSpanUpdater
    | CParticleAnimTag
    | CPathAnimMotorUpdater
    | CPathAnimMotorUpdaterBase
    | CPathHelperUpdateNode
    | CPathMetricEvaluator
    | CPlayerInputAnimMotorUpdater
    | CPoseHandle
    | CProductQuantizer
    | CRagdollAnimTag
    | CRagdollComponentUpdater
    | CRagdollUpdateNode
    | CRootUpdateNode
    | CSelectorUpdateNode
    | CSequenceFinishedAnimTag
    | CSequenceTagSpans
    | CSequenceUpdateNode
    | CSequenceUpdateNodeBase
    | CSetParameterActionUpdater
    | CSingleFrameUpdateNode
    | CSlopeComponentUpdater
    | CSlowDownOnSlopesUpdateNode
    | CSolveIKChainUpdateNode
    | CSolveIKTargetHandle_t
    | CSpeedScaleUpdateNode
    | CStanceOverrideUpdateNode
    | CStanceScaleUpdateNode
    | CStateActionUpdater
    | CStateMachineComponentUpdater
    | CStateMachineUpdateNode
    | CStateNodeStateData
    | CStateNodeTransitionData
    | CStateUpdateData
    | CStaticPoseCache
    | CStaticPoseCacheBuilder
    | CStepsRemainingMetricEvaluator
    | CStopAtGoalUpdateNode
    | CStringAnimTag
    | CSubtractUpdateNode
    | CSymbolAnimParameter
    | CTargetSelectorUpdateNode
    | CTargetWarpUpdateNode
    | CTaskHandshakeAnimTag
    | CTaskStatusAnimTag
    | CTimeRemainingMetricEvaluator
    | CToggleComponentActionUpdater
    | CTransitionUpdateData
    | CTurnHelperUpdateNode
    | CTwoBoneIKUpdateNode
    | CUnaryUpdateNode
    | CVectorAnimParameter
    | CVectorQuantizer
    | CVirtualAnimParameter
    | CWayPointHelperUpdateNode
    | CZeroPoseUpdateNode
    | ChainToSolveData_t
    | ConfigIndex
    | FollowAttachmentSettings_t
    | FollowTargetOpFixedSettings_t
    | FootFixedData_t
    | FootFixedSettings
    | FootLockPoseOpFixedSettings
    | FootPinningPoseOpFixedData_t
    | FootStepTrigger
    | HitReactFixedSettings_t
    | IKBoneNameAndIndex_t
    | IKDemoCaptureSettings_t
    | IKSolverSettings_t
    | IKTargetSettings_t
    | JiggleBoneSettingsList_t
    | JiggleBoneSettings_t
    | LookAtBone_t
    | LookAtOpFixedSettings_t
    | MotionBlendItem
    | MotionDBIndex
    | MotionIndex
    | ParamSpanSample_t
    | ParamSpan_t
    | SampleCode
    | ScriptInfo_t
    | SolveIKChainPoseOpFixedSettings_t
    | StanceInfo_t
    | TagSpan_t
    | TraceSettings_t
    | TwoBoneIKSettings_t
    | WeightList
    | CNmAdditiveBlendTask
    | CNmBitFlags
    | CNmBlendTask
    | CNmBlendTaskBase
    | CNmBoneMask
    | CNmCachedPoseReadTask
    | CNmCachedPoseWriteTask
    | CNmClip
    | CNmEvent
    | CNmFootEvent
    | CNmFrameSnapEvent
    | CNmGraphDefinition
    | CNmGraphVariation
    | CNmIDEvent
    | CNmIKRig
    | CNmLegacyEvent
    | CNmModelSpaceBlendTask
    | CNmOrientationWarpEvent
    | CNmOverlayBlendTask
    | CNmReferencePoseTask
    | CNmRootMotionData
    | CNmRootMotionEvent
    | CNmSampleTask
    | CNmSkeleton
    | CNmSyncTrack
    | CNmTarget
    | CNmTargetWarpEvent
    | CNmTask
    | CNmTransitionEvent
    | CNmZeroPoseTask
    | NmCompressionSettings_t
    | NmPercent_t
    | NmSyncTrackTimeRange_t
    | NmSyncTrackTime_t
    | ActiveModelConfig_t
    | AmmoIndex_t
    | AmmoTypeInfo_t
    | CAnimEventListener
    | CAnimEventListenerBase
    | CAnimEventQueueListener
    | CAnimGraphControllerBase
    | CAnimGraphNetworkedVariables
    | CAttributeList
    | CAttributeManager
    | CBaseAnimGraph
    | CBaseAnimGraphController
    | CBasePlayerController
    | CBasePlayerControllerAPI
    | CBasePlayerVData
    | CBasePlayerWeaponVData
    | CBaseProp
    | CBodyComponent
    | CBodyComponentBaseAnimGraph
    | CBodyComponentBaseModelEntity
    | CBodyComponentPoint
    | CBodyComponentSkeletonInstance
    | CBombTarget
    | CBreachCharge
    | CBreachChargeProjectile
    | CBreakableStageHelper
    | CBumpMine
    | CBumpMineProjectile
    | CBuoyancyHelper
    | CCSClientPointScriptEntity
    | CCSGOPlayerAnimGraphState
    | CCSGOViewModel_GraphController
    | CCSGO_WingmanIntroCharacterPosition
    | CCSGO_WingmanIntroCounterTerroristPosition
    | CCSGO_WingmanIntroTerroristPosition
    | CCSGameModeRules
    | CCSGameModeRules_ArmsRace
    | CCSGameModeRules_Deathmatch
    | CCSGameModeRules_Noop
    | CCSObserver_CameraServices
    | CCSObserver_MovementServices
    | CCSObserver_ObserverServices
    | CCSObserver_UseServices
    | CCSObserver_ViewModelServices
    | CCSPlayerBase_CameraServices
    | CCSPlayerController
    | CCSPlayerController_ActionTrackingServices
    | CCSPlayerController_DamageServices
    | CCSPlayerController_InGameMoneyServices
    | CCSPlayerController_InventoryServices
    | CCSPlayer_ActionTrackingServices
    | CCSPlayer_BulletServices
    | CCSPlayer_BuyServices
    | CCSPlayer_CameraServices
    | CCSPlayer_DamageReactServices
    | CCSPlayer_GlowServices
    | CCSPlayer_HostageServices
    | CCSPlayer_ItemServices
    | CCSPlayer_MovementServices
    | CCSPlayer_PingServices
    | CCSPlayer_UseServices
    | CCSPlayer_ViewModelServices
    | CCSPlayer_WaterServices
    | CCSPlayer_WeaponServices
    | CCSPointScript
    | CCSPointScriptEntity
    | CCSPointScriptExtensions_CCSWeaponBaseVData
    | CCSPointScriptExtensions_entity
    | CCSPointScriptExtensions_observer
    | CCSPointScriptExtensions_player
    | CCSPointScriptExtensions_player_controller
    | CCSPointScriptExtensions_weapon_cs_base
    | CCSWeaponBaseVData
    | CCitadelSoundOpvarSetOBB
    | CClientAlphaProperty
    | CClientGapTypeQueryRegistration
    | CCollisionProperty
    | CCompositeMaterialEditorDoc
    | CCopyRecipientFilter
    | CDamageRecord
    | CDecalInfo
    | CDestructiblePartRuntimeData
    | CDestructiblePartRuntimeDataVector
    | CDestructiblePartsSystemData
    | CDestructiblePartsSystemData_HitGroupInfoAndPartData
    | CDestructiblePartsSystemData_PartData
    | CEconItemAttribute
    | CEffectData
    | CEntitySubclassVDataBase
    | CEnvSoundscape
    | CEnvSoundscapeAlias_snd_soundscape
    | CEnvSoundscapeProxy
    | CEnvSoundscapeProxyAlias_snd_soundscape_proxy
    | CEnvSoundscapeTriggerable
    | CEnvSoundscapeTriggerableAlias_snd_soundscape_triggerable
    | CFireOverlay
    | CFiringModeFloat
    | CFiringModeInt
    | CFlashlightEffect
    | CFootstepTableHandle
    | CFuncWater
    | CGameSceneNode
    | CGlobalLightBase
    | CGlowOverlay
    | CGlowProperty
    | CGlowSprite
    | CGrenadeTracer
    | CHitboxComponent
    | CHostageRescueZone
    | CHostageRescueZoneShim
    | CInButtonState
    | CInfoDynamicShadowHint
    | CInfoDynamicShadowHintBox
    | CInfoOffscreenPanoramaTexture
    | CInfoParticleTarget
    | CInfoTarget
    | CInfoWorldLayer
    | CInterpolatedValue
    | CLightComponent
    | CLogicRelay
    | CLogicalEntity
    | CMapInfo
    | CModelState
    | CNavLinkAnimgraphVar
    | CNavLinkMovementVData
    | CNetworkOriginCellCoordQuantizedVector
    | CNetworkOriginQuantizedVector
    | CNetworkTransmitComponent
    | CNetworkVelocityVector
    | CNetworkViewOffsetVector
    | CNetworkedSequenceOperation
    | CPathSimple
    | CPathSimpleAPI
    | CPlayerControllerComponent
    | CPlayerPawnComponent
    | CPlayerSprayDecalRenderHelper
    | CPlayer_AutoaimServices
    | CPlayer_CameraServices
    | CPlayer_FlashlightServices
    | CPlayer_ItemServices
    | CPlayer_MovementServices
    | CPlayer_MovementServices_Humanoid
    | CPlayer_ObserverServices
    | CPlayer_UseServices
    | CPlayer_ViewModelServices
    | CPlayer_WaterServices
    | CPlayer_WeaponServices
    | CPointChildModifier
    | CPointOffScreenIndicatorUi
    | CPointTemplate
    | CPointTemplateAPI
    | CPrecipitationVData
    | CProjectedTextureBase
    | CPropDataComponent
    | CRagdollManager
    | CRandSimTimer
    | CRandStopwatch
    | CRemapFloat
    | CRenderComponent
    | CResponseCriteriaSet
    | CRopeOverlapHit
    | CSMatchStats_t
    | CSPerRoundStats_t
    | CSceneEventInfo
    | CScriptUniformRandomStream
    | CServerOnlyModelEntity
    | CSharedGapTypeQueryRegistration
    | CSimTimer
    | CSimpleSimTimer
    | CSimpleStopwatch
    | CSkeletonAnimationController
    | CSkeletonInstance
    | CSkillDamage
    | CSkillFloat
    | CSkillInt
    | CSkyboxReference
    | CSoundEnvelope
    | CSoundPatch
    | CSpriteOriented
    | CStopwatch
    | CStopwatchBase
    | CTablet
    | CTakeDamageInfo
    | CTakeDamageInfoAPI
    | CTakeDamageResult
    | CTakeDamageSummaryScopeGuard
    | CTimeline
    | CTripWireFire
    | CTripWireFireProjectile
    | CWaterSplasher
    | CWeaponZoneRepulsor
    | CWorldCompositionChunkReferenceElement_t
    | CommandToolCommand_t
    | CompMatMutatorCondition_t
    | CompMatPropertyMutator_t
    | CompositeMaterialAssemblyProcedure_t
    | CompositeMaterialEditorPoint_t
    | CompositeMaterialInputContainer_t
    | CompositeMaterialInputLooseVariable_t
    | CompositeMaterialMatchFilter_t
    | CompositeMaterial_t
    | CountdownTimer
    | EngineCountdownTimer
    | EngineLoopState_t
    | EntityRenderAttribute_t
    | EntitySpottedState_t
    | EventAdvanceTick_t
    | EventAppShutdown_t
    | EventClientAdvanceNonRenderedFrame_t
    | EventClientAdvanceTick_t
    | EventClientFrameSimulate_t
    | EventClientOutput_t
    | EventClientPauseSimulate_t
    | EventClientPollInput_t
    | EventClientPollNetworking_t
    | EventClientPostAdvanceTick_t
    | EventClientPostOutput_t
    | EventClientPostSimulate_t
    | EventClientPreOutput_t
    | EventClientPreSimulate_t
    | EventClientProcessGameInput_t
    | EventClientProcessInput_t
    | EventClientProcessNetworking_t
    | EventClientSceneSystemThreadStateChange_t
    | EventClientSimulate_t
    | EventFrameBoundary_t
    | EventModInitialized_t
    | EventPostAdvanceTick_t
    | EventPostDataUpdate_t
    | EventPreDataUpdate_t
    | EventProfileStorageAvailable_t
    | EventServerAdvanceTick_t
    | EventServerBeginAsyncPostTickWork_t
    | EventServerEndAsyncPostTickWork_t
    | EventServerPollNetworking_t
    | EventServerPostAdvanceTick_t
    | EventServerPostSimulate_t
    | EventServerProcessNetworking_t
    | EventServerSimulate_t
    | EventSetTime_t
    | EventSimpleLoopFrameUpdate_t
    | EventSimulate_t
    | EventSplitScreenStateChanged_t
    | GameAmmoTypeInfo_t
    | GeneratedTextureHandle_t
    | HullFlags_t
    | IChoreoServices
    | IClientAlphaProperty
    | IEconItemInterface
    | IGapHost_GameEntity
    | IHasAttributes
    | IRagdoll
    | ISkeletonAnimationController
    | IntervalTimer
    | ModelConfigHandle_t
    | ParticleIndex_t
    | PhysicsRagdollPose_t
    | PointCameraSettings_t
    | PredictedDamageTag_t
    | QuestProgress
    | RagdollCreationParams_t
    | ResponseFollowup
    | ResponseParams
    | SceneEventId_t
    | SellbackPurchaseEntry_t
    | SequenceHistory_t
    | ServerAuthoritativeWeaponSlot_t
    | SummaryTakeDamageInfo_t
    | TimedEvent
    | VPhysicsCollisionAttribute_t
    | ViewAngleServerChange_t
    | WaterWheelDrag_t
    | WaterWheelFrictionScale_t
    | WeaponPurchaseCount_t
    | WeaponPurchaseTracker_t
    | WrappedPhysicsJoint_t
    | audioparams_t
    | fogparams_t
    | hudtextparms_t
    | ragdoll_t
    | ragdollelement_t
    | shard_model_desc_t
    | sky3dparams_t
    | sndopvarlatchdata_t
    | thinkfunc_t
    | CEmptyEntityInstance
    | CEntityComponent
    | CEntityComponentHelper
    | CEntityIOOutput
    | CEntityIdentity
    | CEntityInstance
    | CNetworkVarChainer
    | CScriptComponent
    | CVariantDefaultAllocator
    | EntComponentInfo_t
    | EntInput_t
    | EntOutput_t
    | CAnimScriptBase
    | MaterialParamBuffer_t
    | MaterialParamFloat_t
    | MaterialParamInt_t
    | MaterialParamString_t
    | MaterialParamTexture_t
    | MaterialParamVector_t
    | MaterialParam_t
    | MaterialResourceData_t
    | PostProcessingBloomParameters_t
    | PostProcessingLocalContrastParameters_t
    | PostProcessingResource_t
    | PostProcessingTonemapParameters_t
    | PostProcessingVignetteParameters_t
    | AABB_t
    | CFuseProgram
    | CFuseSymbolTable
    | ConstantInfo_t
    | FunctionInfo_t
    | FuseFunctionIndex_t
    | FuseVariableIndex_t
    | VariableInfo_t
    | AnimComponentID
    | AnimNodeID
    | AnimNodeOutputID
    | AnimParamID
    | AnimScriptHandle
    | AnimStateID
    | AnimTagID
    | CAimConstraint
    | CAnimAttachment
    | CAnimCycle
    | CAnimFoot
    | CAnimSkeleton
    | CAttachment
    | CBaseConstraint
    | CBoneConstraintBase
    | CBoneConstraintDotToMorph
    | CBoneConstraintPoseSpaceBone
    | CBoneConstraintPoseSpaceMorph
    | CConstraintSlave
    | CConstraintTarget
    | CCycleBase
    | CDrawCullingData
    | CFlexController
    | CFlexDesc
    | CFlexOp
    | CFlexRule
    | CFootCycle
    | CFootCycleDefinition
    | CFootDefinition
    | CFootMotion
    | CFootStride
    | CFootTrajectories
    | CFootTrajectory
    | CHitBox
    | CHitBoxSet
    | CHitBoxSetList
    | CMaterialDrawDescriptor
    | CMeshletDescriptor
    | CModelConfig
    | CModelConfigElement
    | CModelConfigElement_AttachedModel
    | CModelConfigElement_Command
    | CModelConfigElement_RandomColor
    | CModelConfigElement_RandomPick
    | CModelConfigElement_SetBodygroup
    | CModelConfigElement_SetBodygroupOnAttachedModels
    | CModelConfigElement_SetMaterialGroup
    | CModelConfigElement_SetMaterialGroupOnAttachedModels
    | CModelConfigElement_SetRenderColor
    | CModelConfigElement_UserPick
    | CModelConfigList
    | CMorphBundleData
    | CMorphConstraint
    | CMorphData
    | CMorphRectData
    | CMorphSetData
    | COrientConstraint
    | CParentConstraint
    | CPhysSurfaceProperties
    | CPhysSurfacePropertiesAudio
    | CPhysSurfacePropertiesPhysics
    | CPhysSurfacePropertiesSoundNames
    | CPointConstraint
    | CRenderBufferBinding
    | CRenderGroom
    | CRenderMesh
    | CRenderSkeleton
    | CSceneObjectData
    | CTiltTwistConstraint
    | CTwistConstraint
    | CVPhysXSurfacePropertiesList
    | DynamicMeshDeformParams_t
    | MaterialGroup_t
    | ModelBoneFlexDriverControl_t
    | ModelBoneFlexDriver_t
    | ModelSkeletonData_t
    | PermModelDataAnimatedMaterialAttribute_t
    | PermModelData_t
    | PermModelExtPart_t
    | PermModelInfo_t
    | PhysSoftbodyDesc_t
    | RenderHairStrandInfo_t
    | RenderSkeletonBone_t
    | SkeletonAnimCapture_t
    | SkeletonBoneBounds_t
    | SkeletonDemoDb_t
    | VPhysXAggregateData_t
    | VPhysXBodyPart_t
    | VPhysXCollisionAttributes_t
    | VPhysXConstraint2_t
    | VPhysXConstraintParams_t
    | VPhysXJoint_t
    | VPhysXRange_t
    | VPhysics2ShapeDef_t
    | CNavHullPresetVData
    | CNavHullVData
    | CNavVolume
    | CNavVolumeAll
    | CNavVolumeSphere
    | CNavVolumeSphericalShell
    | CNavVolumeVector
    | Extent
    | NavGravity_t
    | ChangeAccessorFieldPathIndex_t
    | CBaseRendererSource2
    | CBaseTrailRenderer
    | CGeneralRandomRotation
    | CGeneralSpin
    | CParticleFunction
    | CParticleFunctionConstraint
    | CParticleFunctionEmitter
    | CParticleFunctionForce
    | CParticleFunctionInitializer
    | CParticleFunctionOperator
    | CParticleFunctionPreEmission
    | CParticleFunctionRenderer
    | CParticleMassCalculationParameters
    | CParticleSystemDefinition
    | CParticleVisibilityInputs
    | CPathParameters
    | CRandomNumberGeneratorParameters
    | CReplicationParameters
    | CSpinUpdateBase
    | CollisionGroupContext_t
    | ControlPointReference_t
    | IParticleCollection
    | MaterialVariable_t
    | ModelReference_t
    | ParticleAttributeIndex_t
    | ParticleChildrenInfo_t
    | ParticleControlPointConfiguration_t
    | ParticleControlPointDriver_t
    | ParticlePreviewBodyGroup_t
    | ParticlePreviewState_t
    | PointDefinitionWithTimeValues_t
    | PointDefinition_t
    | RenderProjectedMaterial_t
    | SequenceWeightedList_t
    | TextureControls_t
    | TextureGroup_t
    | VecInputMaterialVariable_t
    | CNewParticleEffect
    | CParticleCollectionBindingInstance
    | CParticleCollectionFloatInput
    | CParticleCollectionRendererFloatInput
    | CParticleCollectionRendererVecInput
    | CParticleFloatInput
    | CParticleInput
    | CParticleModelInput
    | CParticleProperty
    | CParticleRemapFloatInput
    | CParticleTransformInput
    | CParticleVecInput
    | CPerParticleFloatInput
    | CPerParticleVecInput
    | IParticleEffect
    | PARTICLE_EHANDLE__
    | PARTICLE_WORLD_HANDLE__
    | ParticleNamedValueConfiguration_t
    | ParticleNamedValueSource_t
    | CFeIndexedJiggleBone
    | CFeJiggleBone
    | CFeMorphLayer
    | CFeNamedJiggleBone
    | CFeVertexMapBuildArray
    | CRegionSVM
    | CastSphereSATParams_t
    | CovMatrix3
    | Dop26_t
    | FeAnimStrayRadius_t
    | FeAntiTunnelProbeBuild_t
    | FeAntiTunnelProbe_t
    | FeAxialEdgeBend_t
    | FeBandBendLimit_t
    | FeBoxRigid_t
    | FeBuildBoxRigid_t
    | FeBuildSDFRigid_t
    | FeBuildSphereRigid_t
    | FeBuildTaperedCapsuleRigid_t
    | FeCollisionPlane_t
    | FeCtrlOffset_t
    | FeCtrlOsOffset_t
    | FeCtrlSoftOffset_t
    | FeEdgeDesc_t
    | FeEffectDesc_t
    | FeFitInfluence_t
    | FeFitMatrix_t
    | FeFitWeight_t
    | FeFollowNode_t
    | FeHingeLimitBuild_t
    | FeHingeLimit_t
    | FeKelagerBend2_t
    | FeMorphLayerDepr_t
    | FeNodeBase_t
    | FeNodeIntegrator_t
    | FeNodeReverseOffset_t
    | FeNodeWindBase_t
    | FeProxyVertexMap_t
    | FeQuad_t
    | FeRigidColliderIndices_t
    | FeRodConstraint_t
    | FeSDFRigid_t
    | FeSimdAnimStrayRadius_t
    | FeSimdNodeBase_t
    | FeSimdQuad_t
    | FeSimdRodConstraintAnim_t
    | FeSimdRodConstraint_t
    | FeSimdSpringIntegrator_t
    | FeSimdTri_t
    | FeSoftParent_t
    | FeSourceEdge_t
    | FeSphereRigid_t
    | FeSpringIntegrator_t
    | FeStiffHingeBuild_t
    | FeTaperedCapsuleRigid_t
    | FeTaperedCapsuleStretch_t
    | FeTreeChildren_t
    | FeTri_t
    | FeTwistConstraint_t
    | FeVertexMapBuild_t
    | FeVertexMapDesc_t
    | FeWeightedNode_t
    | FeWorldCollisionParams_t
    | FourCovMatrices3
    | OldFeEdge_t
    | PhysFeModelDesc_t
    | RnBlendVertex_t
    | RnBodyDesc_t
    | RnCapsuleDesc_t
    | RnCapsule_t
    | RnFace_t
    | RnHalfEdge_t
    | RnHullDesc_t
    | RnHull_t
    | RnMeshDesc_t
    | RnMesh_t
    | RnNode_t
    | RnPlane_t
    | RnShapeDesc_t
    | RnSoftbodyCapsule_t
    | RnSoftbodyParticle_t
    | RnSoftbodySpring_t
    | RnSphereDesc_t
    | RnTriangle_t
    | RnVertex_t
    | RnWing_t
    | VertexPositionColor_t
    | VertexPositionNormal_t
    | CTestDomainDerived_Cursor
    | FakeEntityDerivedA_tAPI
    | FakeEntityDerivedB_tAPI
    | FakeEntity_tAPI
    | IGapHost_Cursor
    | IGapHost_ExecLog
    | IGapHost_YieldingCursor
    | SignatureOutflow_Continue
    | SignatureOutflow_Resume
    | RenderInputLayoutField_t
    | VsInputSignatureElement_t
    | VsInputSignature_t
    | CExampleSchemaVData_Monomorphic
    | CExampleSchemaVData_PolymorphicBase
    | CExampleSchemaVData_PolymorphicDerivedA
    | CExampleSchemaVData_PolymorphicDerivedB
    | ResourceId_t
    | ManifestTestResource_t
    | TestResource_t
    | CSSDSEndFrameViewInfo
    | CSSDSMsg_EndFrame
    | CSSDSMsg_LayerBase
    | CSSDSMsg_PostLayer
    | CSSDSMsg_PreLayer
    | CSSDSMsg_ViewRender
    | CSSDSMsg_ViewTarget
    | CSSDSMsg_ViewTargetList
    | SceneViewId_t
    | AutoRoomDoorwayPairs_t
    | CAISound
    | CAI_ChangeHintGroup
    | CAI_Expresser
    | CAI_ExpresserWithFollowup
    | CAK47
    | CAmbientGeneric
    | CAttributeContainer
    | CBarnLight
    | CBaseButton
    | CBaseCSGrenade
    | CBaseCSGrenadeProjectile
    | CBaseClientUIEntity
    | CBaseCombatCharacter
    | CBaseDMStart
    | CBaseDoor
    | CBaseEntity
    | CBaseEntityAPI
    | CBaseFilter
    | CBaseFire
    | CBaseFlex
    | CBaseFlexAlias_funCBaseFlex
    | CBaseGrenade
    | CBaseIssue
    | CBaseModelEntity
    | CBaseMoveBehavior
    | CBasePlatTrain
    | CBasePlayerPawn
    | CBasePlayerWeapon
    | CBasePropDoor
    | CBaseToggle
    | CBaseTrigger
    | CBaseViewModel
    | CBeam
    | CBlood
    | CBot
    | CBreakable
    | CBreakableProp
    | CBtActionAim
    | CBtActionCombatPositioning
    | CBtActionMoveTo
    | CBtActionParachutePositioning
    | CBtNode
    | CBtNodeComposite
    | CBtNodeCondition
    | CBtNodeConditionInactive
    | CBtNodeDecorator
    | CBubbling
    | CBuyZone
    | CC4
    | CCSBot
    | CCSGOViewModel
    | CCSGO_TeamIntroCharacterPosition
    | CCSGO_TeamIntroCounterTerroristPosition
    | CCSGO_TeamIntroTerroristPosition
    | CCSGO_TeamPreviewCharacterPosition
    | CCSGO_TeamSelectCharacterPosition
    | CCSGO_TeamSelectCounterTerroristPosition
    | CCSGO_TeamSelectTerroristPosition
    | CCSGameRules
    | CCSGameRulesProxy
    | CCSMinimapBoundary
    | CCSObserverPawn
    | CCSPlace
    | CCSPlayerPawn
    | CCSPlayerPawnBase
    | CCSPlayerResource
    | CCSPlayer_RadioServices
    | CCSServerPointScriptEntity
    | CCSSprite
    | CCSTeam
    | CCSWeaponBase
    | CCSWeaponBaseGun
    | CChangeLevel
    | CChicken
    | CColorCorrection
    | CColorCorrectionVolume
    | CCommentaryAuto
    | CCommentarySystem
    | CCommentaryViewPosition
    | CConstantForceController
    | CConstraintAnchor
    | CCredits
    | CDEagle
    | CDebugHistory
    | CDecoyGrenade
    | CDecoyProjectile
    | CDynamicLight
    | CDynamicProp
    | CDynamicPropAlias_cable_dynamic
    | CDynamicPropAlias_dynamic_prop
    | CDynamicPropAlias_prop_dynamic_override
    | CEconEntity
    | CEconItemView
    | CEconWearable
    | CEnableMotionFixup
    | CEntityBlocker
    | CEntityDissolve
    | CEntityFlame
    | CEnvBeam
    | CEnvBeverage
    | CEnvCombinedLightProbeVolume
    | CEnvCubemap
    | CEnvCubemapBox
    | CEnvCubemapFog
    | CEnvDecal
    | CEnvDetailController
    | CEnvEntityIgniter
    | CEnvEntityMaker
    | CEnvExplosion
    | CEnvFade
    | CEnvFireSensor
    | CEnvFireSource
    | CEnvFunnel
    | CEnvGlobal
    | CEnvHudHint
    | CEnvInstructorHint
    | CEnvInstructorVRHint
    | CEnvLaser
    | CEnvLightProbeVolume
    | CEnvMicrophone
    | CEnvMuzzleFlash
    | CEnvParticleGlow
    | CEnvProjectedTexture
    | CEnvScreenOverlay
    | CEnvShake
    | CEnvSky
    | CEnvSpark
    | CEnvSplash
    | CEnvTilt
    | CEnvTracer
    | CEnvViewPunch
    | CEnvVolumetricFogController
    | CEnvVolumetricFogVolume
    | CEnvWind
    | CEnvWindShared
    | CFilterAttributeInt
    | CFilterClass
    | CFilterContext
    | CFilterEnemy
    | CFilterLOS
    | CFilterMassGreater
    | CFilterModel
    | CFilterMultiple
    | CFilterName
    | CFilterProximity
    | CFire
    | CFireCrackerBlast
    | CFireSmoke
    | CFish
    | CFishPool
    | CFists
    | CFlashbang
    | CFlashbangProjectile
    | CFogController
    | CFogTrigger
    | CFogVolume
    | CFootstepControl
    | CFuncBrush
    | CFuncConveyor
    | CFuncElectrifiedVolume
    | CFuncIllusionary
    | CFuncInteractionLayerClip
    | CFuncLadder
    | CFuncLadderAlias_func_useableladder
    | CFuncMonitor
    | CFuncMoveLinear
    | CFuncMoveLinearAlias_momentary_door
    | CFuncMover
    | CFuncMoverAPI
    | CFuncNavBlocker
    | CFuncNavObstruction
    | CFuncPlat
    | CFuncPlatRot
    | CFuncPropRespawnZone
    | CFuncRotating
    | CFuncShatterglass
    | CFuncTankTrain
    | CFuncTimescale
    | CFuncTrackAuto
    | CFuncTrackChange
    | CFuncTrackTrain
    | CFuncTrain
    | CFuncTrainControls
    | CFuncVPhysicsClip
    | CFuncVehicleClip
    | CFuncWall
    | CFuncWallToggle
    | CGameChoreoServices
    | CGameEnd
    | CGameGibManager
    | CGameMoney
    | CGamePlayerEquip
    | CGamePlayerZone
    | CGameRules
    | CGameRulesProxy
    | CGameScriptedMoveData
    | CGameScriptedMoveDef_t
    | CGameText
    | CGenericConstraint
    | CGradientFog
    | CGunTarget
    | CHEGrenade
    | CHEGrenadeProjectile
    | CHandleDummy
    | CHandleTest
    | CHostage
    | CHostageAlias_info_hostage_spawn
    | CHostageCarriableProp
    | CHostageExpresserShim
    | CIncendiaryGrenade
    | CInferno
    | CInfoData
    | CInfoDeathmatchSpawn
    | CInfoGameEventProxy
    | CInfoInstructorHintBombTargetA
    | CInfoInstructorHintBombTargetB
    | CInfoInstructorHintHostageRescueZone
    | CInfoInstructorHintTarget
    | CInfoLadderDismount
    | CInfoLandmark
    | CInfoPlayerCounterterrorist
    | CInfoPlayerStart
    | CInfoPlayerTerrorist
    | CInfoSpawnGroupLandmark
    | CInfoSpawnGroupLoadUnload
    | CInfoTargetServerOnly
    | CInfoTeleportDestination
    | CInfoVisibilityBox
    | CInstancedSceneEntity
    | CInstructorEventEntity
    | CIronSightController
    | CItem
    | CItemAssaultSuit
    | CItemDefuser
    | CItemDefuserAlias_item_defuser
    | CItemDogtags
    | CItemHeavyAssaultSuit
    | CItemKevlar
    | CItemSoda
    | CItem_Healthshot
    | CKeepUpright
    | CKnife
    | CLightDirectionalEntity
    | CLightEntity
    | CLightEnvironmentEntity
    | CLightGlow
    | CLightOrthoEntity
    | CLightSpotEntity
    | CLogicAchievement
    | CLogicActiveAutosave
    | CLogicAuto
    | CLogicAutosave
    | CLogicBranch
    | CLogicBranchList
    | CLogicCase
    | CLogicCollisionPair
    | CLogicCompare
    | CLogicDistanceAutosave
    | CLogicDistanceCheck
    | CLogicEventListener
    | CLogicGameEvent
    | CLogicGameEventListener
    | CLogicLineToEntity
    | CLogicMeasureMovement
    | CLogicNPCCounter
    | CLogicNPCCounterAABB
    | CLogicNPCCounterOBB
    | CLogicNavigation
    | CLogicPlayerProxy
    | CLogicProximity
    | CLogicScript
    | CMapVetoPickController
    | CMarkupVolume
    | CMarkupVolumeTagged
    | CMarkupVolumeTagged_Nav
    | CMarkupVolumeTagged_NavGame
    | CMarkupVolumeWithRef
    | CMathColorBlend
    | CMathCounter
    | CMathRemap
    | CMelee
    | CMessage
    | CMessageEntity
    | CModelPointEntity
    | CMolotovGrenade
    | CMolotovProjectile
    | CMomentaryRotButton
    | CMotorController
    | CMoverPathNode
    | CMultiLightProxy
    | CMultiSource
    | CMultiplayRules
    | CMultiplayer_Expresser
    | CNavLinkAreaEntity
    | CNavSpaceInfo
    | CNavVolumeBreadthFirstSearch
    | CNavVolumeCalculatedVector
    | CNavVolumeMarkupVolume
    | CNavWalkable
    | CNullEntity
    | COmniLight
    | COrnamentProp
    | CParticleSystem
    | CPathCorner
    | CPathCornerCrash
    | CPathKeyFrame
    | CPathMover
    | CPathParticleRope
    | CPathParticleRopeAlias_path_particle_rope_clientside
    | CPathTrack
    | CPhysBallSocket
    | CPhysBox
    | CPhysConstraint
    | CPhysExplosion
    | CPhysFixed
    | CPhysForce
    | CPhysHinge
    | CPhysHingeAlias_phys_hinge_local
    | CPhysImpact
    | CPhysLength
    | CPhysMagnet
    | CPhysMotor
    | CPhysPulley
    | CPhysSlideConstraint
    | CPhysThruster
    | CPhysTorque
    | CPhysWheelConstraint
    | CPhysicalButton
    | CPhysicsEntitySolver
    | CPhysicsProp
    | CPhysicsPropMultiplayer
    | CPhysicsPropOverride
    | CPhysicsPropRespawnable
    | CPhysicsShake
    | CPhysicsSpring
    | CPhysicsWire
    | CPlantedC4
    | CPlatTrigger
    | CPlayerPing
    | CPlayerSprayDecal
    | CPlayerVisibility
    | CPointAngleSensor
    | CPointAngularVelocitySensor
    | CPointBroadcastClientCommand
    | CPointCamera
    | CPointCameraVFOV
    | CPointClientCommand
    | CPointClientUIDialog
    | CPointClientUIWorldPanel
    | CPointClientUIWorldTextPanel
    | CPointEntity
    | CPointEntityFinder
    | CPointGamestatsCounter
    | CPointGiveAmmo
    | CPointHurt
    | CPointPrefab
    | CPointProximitySensor
    | CPointPush
    | CPointServerCommand
    | CPointTeleport
    | CPointValueRemapper
    | CPointVelocitySensor
    | CPointWorldText
    | CPostProcessingVolume
    | CPrecipitation
    | CPrecipitationBlocker
    | CPredictedViewModel
    | CProjectedDecal
    | CPropDoorRotating
    | CPropDoorRotatingBreakable
    | CPushable
    | CRagdollConstraint
    | CRagdollMagnet
    | CRagdollProp
    | CRagdollPropAlias_physics_prop_ragdoll
    | CRagdollPropAttached
    | CRectLight
    | CResponseQueue
    | CRetakeGameRules
    | CRevertSaved
    | CRopeKeyframe
    | CRopeKeyframeAlias_move_rope
    | CRotButton
    | CRotDoor
    | CRuleBrushEntity
    | CRuleEntity
    | CRulePointEntity
    | CSAdditionalMatchStats_t
    | CSAdditionalPerRoundStats_t
    | CSceneEntity
    | CSceneEntityAlias_logic_choreographed_scene
    | CSceneListManager
    | CScriptItem
    | CScriptNavBlocker
    | CScriptTriggerHurt
    | CScriptTriggerMultiple
    | CScriptTriggerOnce
    | CScriptTriggerPush
    | CScriptedSequence
    | CSensorGrenade
    | CSensorGrenadeProjectile
    | CServerOnlyEntity
    | CServerOnlyPointEntity
    | CServerRagdollTrigger
    | CShatterGlassShard
    | CShatterGlassShardPhysics
    | CShower
    | CSimpleMarkupVolumeTagged
    | CSingleplayRules
    | CSkyCamera
    | CSmokeGrenade
    | CSmokeGrenadeProjectile
    | CSmoothFunc
    | CSound
    | CSoundAreaEntityBase
    | CSoundAreaEntityOrientedBox
    | CSoundAreaEntitySphere
    | CSoundEnt
    | CSoundEventAABBEntity
    | CSoundEventEntity
    | CSoundEventEntityAlias_snd_event_point
    | CSoundEventOBBEntity
    | CSoundEventParameter
    | CSoundEventPathCornerEntity
    | CSoundEventSphereEntity
    | CSoundOpvarSetAABBEntity
    | CSoundOpvarSetAutoRoomEntity
    | CSoundOpvarSetEntity
    | CSoundOpvarSetOBBEntity
    | CSoundOpvarSetOBBWindEntity
    | CSoundOpvarSetPathCornerEntity
    | CSoundOpvarSetPointBase
    | CSoundOpvarSetPointEntity
    | CSoundStackSave
    | CSplineConstraint
    | CSpotlightEnd
    | CSprite
    | CSpriteAlias_env_glow
    | CSun
    | CTankTargetChange
    | CTankTrainAI
    | CTeam
    | CTeamplayRules
    | CTestEffect
    | CTextureBasedAnimatable
    | CTimerEntity
    | CTonemapController2
    | CTonemapController2Alias_env_tonemap_controller2
    | CTonemapTrigger
    | CTouchExpansionComponent
    | CTriggerActiveWeaponDetect
    | CTriggerBombReset
    | CTriggerBrush
    | CTriggerBuoyancy
    | CTriggerCallback
    | CTriggerDetectBulletFire
    | CTriggerDetectExplosion
    | CTriggerFan
    | CTriggerGameEvent
    | CTriggerGravity
    | CTriggerHostageReset
    | CTriggerHurt
    | CTriggerImpact
    | CTriggerLerpObject
    | CTriggerLook
    | CTriggerMultiple
    | CTriggerOnce
    | CTriggerPhysics
    | CTriggerProximity
    | CTriggerPush
    | CTriggerRemove
    | CTriggerSave
    | CTriggerSndSosOpvar
    | CTriggerSoundscape
    | CTriggerTeleport
    | CTriggerToggleSave
    | CTriggerTripWire
    | CTriggerVolume
    | CWaterBullet
    | CWeaponAWP
    | CWeaponAug
    | CWeaponBaseItem
    | CWeaponBizon
    | CWeaponCZ75a
    | CWeaponElite
    | CWeaponFamas
    | CWeaponFiveSeven
    | CWeaponG3SG1
    | CWeaponGalilAR
    | CWeaponGlock
    | CWeaponHKP2000
    | CWeaponM249
    | CWeaponM4A1
    | CWeaponM4A1Silencer
    | CWeaponMAC10
    | CWeaponMP5SD
    | CWeaponMP7
    | CWeaponMP9
    | CWeaponMag7
    | CWeaponNOVA
    | CWeaponNegev
    | CWeaponP250
    | CWeaponP90
    | CWeaponRevolver
    | CWeaponSCAR20
    | CWeaponSG556
    | CWeaponSSG08
    | CWeaponSawedoff
    | CWeaponShield
    | CWeaponTaser
    | CWeaponTec9
    | CWeaponUMP45
    | CWeaponUSPSilencer
    | CWeaponXM1014
    | CWorld
    | ConstraintSoundInfo
    | FilterDamageType
    | FilterHealth
    | FilterTeam
    | RelationshipOverride_t
    | Relationship_t
    | ResponseContext_t
    | SimpleConstraintSoundProfile
    | SoundOpvarTraceResult_t
    | SpawnPoint
    | VelocitySampler
    | dynpitchvol_base_t
    | dynpitchvol_t
    | fogplayerparams_t
    | lerpdata_t
    | locksound_t
    | magnetted_objects_t
    | CDSPMixgroupModifier
    | CDSPPresetMixgroupModifierTable
    | CDspPresetModifierList
    | CSosGroupActionLimitSchema
    | CSosGroupActionMemberCountEnvelopeSchema
    | CSosGroupActionSchema
    | CSosGroupActionSetSoundeventParameterSchema
    | CSosGroupActionSoundeventClusterSchema
    | CSosGroupActionSoundeventCountSchema
    | CSosGroupActionSoundeventMinMaxValuesSchema
    | CSosGroupActionSoundeventPrioritySchema
    | CSosGroupActionTimeBlockLimitSchema
    | CSosGroupActionTimeLimitSchema
    | CSosGroupBranchPattern
    | CSosGroupMatchPattern
    | CSosSoundEventGroupListSchema
    | CSosSoundEventGroupSchema
    | CSoundEventMetaData
    | CTestBlendContainer
    | SelectedEditItemInfo_t
    | SosEditItemInfo_t
    | VMixAutoFilterDesc_t
    | VMixBoxverbDesc_t
    | VMixConvolutionDesc_t
    | VMixDelayDesc_t
    | VMixDiffusorDesc_t
    | VMixDynamics3BandDesc_t
    | VMixDynamicsBand_t
    | VMixDynamicsCompressorDesc_t
    | VMixDynamicsDesc_t
    | VMixEQ8Desc_t
    | VMixEffectChainDesc_t
    | VMixEnvelopeDesc_t
    | VMixFilterDesc_t
    | VMixFreeverbDesc_t
    | VMixModDelayDesc_t
    | VMixOscDesc_t
    | VMixPannerDesc_t
    | VMixPitchShiftDesc_t
    | VMixPlateverbDesc_t
    | VMixShaperDesc_t
    | VMixSubgraphSwitchDesc_t
    | VMixUtilityDesc_t
    | VMixVocoderDesc_t
    | CAudioEmphasisSample
    | CAudioMorphData
    | CAudioPhonemeTag
    | CAudioSentence
    | CSoundContainerReference
    | CSoundContainerReferenceArray
    | CSoundInfoHeader
    | CVoiceContainerAmpedDecayingSineWave
    | CVoiceContainerAnalysisBase
    | CVoiceContainerBase
    | CVoiceContainerBlender
    | CVoiceContainerDecayingSineWave
    | CVoiceContainerDefault
    | CVoiceContainerEnvelope
    | CVoiceContainerEnvelopeAnalyzer
    | CVoiceContainerGranulator
    | CVoiceContainerLoopTrigger
    | CVoiceContainerNull
    | CVoiceContainerRandomSampler
    | CVoiceContainerRealtimeFMSineWave
    | CVoiceContainerSelector
    | CVoiceContainerSet
    | CVoiceContainerSetElement
    | CVoiceContainerShapedNoise
    | CVoiceContainerStaticAdditiveSynth
    | CVoiceContainerSwitch
    | CRangeFloat
    | CRangeInt
    | IPhysicsPlayerController
    | constraint_axislimit_t
    | constraint_breakableparams_t
    | constraint_hingeparams_t
    | vphysics_save_cphysicsbody_t
    | AggregateLODSetup_t
    | AggregateMeshInfo_t
    | AggregateSceneObject_t
    | BakedLightingInfo_t
    | BaseSceneObjectOverride_t
    | CVoxelVisibility
    | ClutterSceneObject_t
    | ClutterTile_t
    | EntityIOConnectionData_t
    | EntityKeyValueData_t
    | ExtraVertexStreamOverride_t
    | InfoOverlayData_t
    | MaterialOverride_t
    | NodeData_t
    | PermEntityLumpData_t
    | SceneObject_t
    | VMapResourceData_t
    | VoxelVisBlockOffset_t
    | WorldBuilderParams_t
    | WorldNodeOnDiskBufferData_t
    | WorldNode_t
    | World_t
declare interface IServer {
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
declare interface ITimers {
}
declare function SetTimeout(delay: number,callback: () => void) : null|undefined;
declare function SetTimer(delay: number,callback: () => void) : TimerHandle;
declare function StopTimer(timerid: TimerHandle) : null|undefined;
declare function NextTick(callback: () => void) : null|undefined;
declare interface ITranslation {
}
declare function FetchTranslation(key: string,playerid: number|null) : string;


declare const enum ConvarFlags {
    FCVAR_NONE = 0,
    FCVAR_LINKED_CONCOMMAND = 1<<0,
    FCVAR_DEVELOPMENTONLY = 1<<1,
    FCVAR_GAMEDLL = 1<<2,
    FCVAR_CLIENTDLL = 1<<3,
    FCVAR_HIDDEN = 1<<4,
    FCVAR_PROTECTED = 1<<5,
    FCVAR_SPONLY = 1<<6,
    FCVAR_ARCHIVE = 1<<7,
    FCVAR_NOTIFY = 1<<8,
    FCVAR_USERINFO = 1<<9,
    FCVAR_MISSING0 = 1<<10,
    FCVAR_UNLOGGED = 1<<11,
    FCVAR_MISSING1 = 1<<12,
    FCVAR_REPLICATED = 1<<13,
    FCVAR_CHEAT = 1<<14,
    FCVAR_PER_USER = 1<<15,
    FCVAR_DEMO = 1<<16,
    FCVAR_DONTRECORD = 1<<17,
    FCVAR_MISSING2 = 1<<18,
    FCVAR_RELEASE = 1<<19,
    FCVAR_MENUBAR_ITEM = 1<<20,
    FCVAR_MISSING3 = 1<<21,
    FCVAR_NOT_CONNECTED = 1<<22,
    FCVAR_VCONSOLE_FUZZY_MATCHING = 1<<23,
    FCVAR_SERVER_CAN_EXECUTE = 1<<24,
    FCVAR_CLIENT_CAN_EXECUTE = 1<<25,
    FCVAR_SERVER_CANNOT_QUERY = 1<<26,
    FCVAR_VCONSOLE_SET_FOCUS = 1<<27,
    FCVAR_CLIENTCMD_CAN_EXECUTE = 1<<28,
    FCVAR_EXECUTE_PER_TICK = 1<<29
}

declare const enum RoundEndReason_t {
    Unknown = 0,
    TargetBombed = 0x1,
    TerroristsEscaped = 0x4,
    CTsPreventEscape = 0x5,
    EscapingTerroristsNeutralized = 0x6,
    BombDefused = 0x7,
    CTsWin = 0x8,
    TerroristsWin = 0x9,
    RoundDraw = 0xA,
    AllHostageRescued = 0xB,
    TargetSaved = 0xC,
    HostagesNotRescued = 0xD,
    TerroristsNotEscaped = 0xE,
    GameCommencing = 0x10,
    TerroristsSurrender = 0x11,
    CTsSurrender = 0x12,
    TerroristsPlanted = 0x13,
    CTsReachedHostage = 0x14,
    SurvivalWin = 0x15,
    SurvivalDraw = 0x16
}

declare const enum PluginState_t {
    Started = 0,
    Stopped = 1
}

declare const enum Team {
    None = 0,
    Spectator = 1,
    T = 2,
    CT = 3
}

declare const enum HookHandle {

}

declare const enum TimerHandle {

}

declare const enum EventHandler {

}

declare const enum EventResult {
    Continue = 0,
    Stop = 1,
    Handled = 2
}

declare const enum MessageType {
    Notify = 1,
    Console = 2,
    Chat = 3,
    Center = 4
}

declare const enum DisconnectReason {
    Invalid = 0,
    Shutdown = 1,
    DisconnectByUser = 2,
    DisconnectByServer = 3,
    Lost = 4,
    Overflow = 5,
    SteamBanned = 6,
    SteamInUse = 7,
    SteamTicket = 8,
    SteamLogon = 9,
    SteamAuthCancelled = 10,
    SteamAuthAlreadyUsed = 11,
    SteamAuthInvalid = 12,
    SteamVacBanned = 13,
    SteamLoggedInElsewhere = 14,
    SteamVacCheckTimedout = 15,
    SteamDropped = 16,
    SteamOwnership = 17,
    ServerInfoOverflow = 18,
    TickMsgOverflow = 19,
    StringTableMsgOverflow = 20,
    DeltaentMsgOverflow = 21,
    TempentMsgOverflow = 22,
    SoundsMsgOverflow = 23,
    SnapshotOverflow = 24,
    SnapshotError = 25,
    ReliableOverflow = 26,
    BadDeltaTick = 27,
    NoMoreSplits = 28,
    Timedout = 29,
    Disconnected = 30,
    LeavingSplit = 31,
    DifferentClassTables = 32,
    BadRelayPassword = 33,
    BadSpectatorPassword = 34,
    HLTVRestricted = 35,
    NoSpectators = 36,
    HLTVUnavailable = 37,
    HLTVStop = 38,
    Kicked = 39,
    BanAdded = 40,
    KickBanAdded = 41,
    HLTVDirect = 42,
    PureServerClientExtra = 43,
    PureServerMismatch = 44,
    UserCmd = 45,
    RejectedByGame = 46,
    MessageParseError = 47,
    InvalidMessageError = 48,
    BadServerPassword = 49,
    DirectConnectReservation = 50,
    ConnectionFailure = 51,
    NoPeerGroupHandlers = 52,
    Reconnection = 53,
    LoopShutdown = 54,
    LoopDeactivate = 55,
    HostEndGame = 56,
    LoopLevelLoadActivate = 57,
    CreateServerFailed = 58,
    Exiting = 59,
    RequestHostStateIdle = 60,
    RequestHostStateHLTVRelay = 61,
    ClientConsistencyFail = 62,
    UnableToCRCMap = 63,
    ClientNoMap = 64,
    ClientDifferentMap = 65,
    ServerRequiresSteam = 66,
    SteamDenyMisc = 67,
    SteamDenyBadAnticheat = 68,
    ServerShutdown = 69,
    ReplayIncompatible = 71,
    ConnectRequestTimedOut = 72,
    ServerIncompatible = 73,
    LocalProblemManyRelays = 74,
    LocalProblemHostedServerPrimaryRelay = 75,
    LocalProblemNetworkConfig = 76,
    LocalProblemOther = 77,
    RemoteTimeout = 79,
    RemoteTimeoutConnecting = 80,
    RemoteOther = 81,
    RemoteBadCrypt = 82,
    RemoteCertNotTrusted = 83,
    Unusual = 84,
    InternalError = 85,
    RejectBadChallenge = 128,
    RejectNoLobby = 129,
    RejectBackgroundMap = 130,
    RejectSinglePlayer = 131,
    RejectHiddenGame = 132,
    RejectLanRestrict = 133,
    RejectBadPassword = 134,
    RejectServerFull = 135,
    RejectInvalidReservation = 136,
    RejectFailedChannel = 137,
    RejectConnectFromLobby = 138,
    RejectReservedForLobby = 139,
    RejectInvalidKeyLength = 140,
    RejectOldProtocol = 141,
    RejectNewProtocol = 142,
    RejectInvalidConnection = 143,
    RejectInvalidCertLen = 144,
    RejectInvalidSteamCertLen = 145,
    RejectSteam = 146,
    RejectServerAuthDisabled = 147,
    RejectServerCDKeyAuthInvalid = 148,
    RejectBanned = 149,
    KickedTeamKilling = 150,
    KickedTKStart = 151,
    KickedUntrustedAccount = 152,
    KickedConvictedAccount = 153,
    KickedCompetitiveCooldown = 154,
    KickedTeamHurting = 155,
    KickedHostageKilling = 156,
    KickedVotedOff = 157,
    KickedIdle = 158,
    KickedSuicide = 159,
    KickedNoSteamLogin = 160,
    KickedNoSteamTicket = 161,
    KickedInputAutomation = 162,
    KickedVACNetAbnormalBehavior = 163
}

declare const enum EConVarType {
    EConVarType_Invalid = -1,
    EConVarType_Bool = 0,
    EConVarType_Int16 = 1,
    EConVarType_UInt16 = 2,
    EConVarType_Int32 = 3,
    EConVarType_UInt32 = 4,
    EConVarType_Int64 = 5,
    EConVarType_UInt64 = 6,
    EConVarType_Float32 = 7,
    EConVarType_Float64 = 8,
    EConVarType_String = 9,
    EConVarType_Color = 10,
    EConVarType_Vector2 = 11,
    EConVarType_Vector3 = 12,
    EConVarType_Vector4 = 13,
    EConVarType_Qangle = 14
}

declare const enum ListenOverride {
    Listen_Default = 0,
    Listen_Mute = 1,
    Listen_Hear = 2
}

declare const enum VoiceFlagValue {
    Speak_Normal = 0,
    Speak_Muted = 1,
    Speak_All = 2,
    Speak_ListenAll = 4,
    Speak_Team = 8,
    Speak_ListenTeam = 16
}

declare const enum LogType_t {
    Debug = 1,
    Warning = 2,
    Error = 3,
    Common = 4
}

declare const enum AnimParamButton_t {
    ANIMPARAM_BUTTON_NONE = 0,
    ANIMPARAM_BUTTON_DPAD_UP = 1,
    ANIMPARAM_BUTTON_DPAD_RIGHT = 2,
    ANIMPARAM_BUTTON_DPAD_DOWN = 3,
    ANIMPARAM_BUTTON_DPAD_LEFT = 4,
    ANIMPARAM_BUTTON_A = 5,
    ANIMPARAM_BUTTON_B = 6,
    ANIMPARAM_BUTTON_X = 7,
    ANIMPARAM_BUTTON_Y = 8,
    ANIMPARAM_BUTTON_LEFT_SHOULDER = 9,
    ANIMPARAM_BUTTON_RIGHT_SHOULDER = 10,
    ANIMPARAM_BUTTON_LTRIGGER = 11,
    ANIMPARAM_BUTTON_RTRIGGER = 12
}

declare const enum AnimParamNetworkSetting {
    Auto = 0,
    AlwaysNetwork = 1,
    NeverNetwork = 2
}

declare const enum AnimParamType_t {
    ANIMPARAM_UNKNOWN = 0,
    ANIMPARAM_BOOL = 1,
    ANIMPARAM_ENUM = 2,
    ANIMPARAM_INT = 3,
    ANIMPARAM_FLOAT = 4,
    ANIMPARAM_VECTOR = 5,
    ANIMPARAM_QUATERNION = 6,
    ANIMPARAM_GLOBALSYMBOL = 7,
    ANIMPARAM_COUNT = 8
}

declare const enum AnimPoseControl {
    NoPoseControl = 0,
    AbsolutePoseControl = 1,
    RelativePoseControl = 2
}

declare const enum AnimationProcessingType_t {
    ANIMATION_PROCESSING_SERVER_SIMULATION = 0,
    ANIMATION_PROCESSING_CLIENT_SIMULATION = 1,
    ANIMATION_PROCESSING_CLIENT_PREDICTION = 2,
    ANIMATION_PROCESSING_CLIENT_INTERPOLATION = 3,
    ANIMATION_PROCESSING_CLIENT_RENDER = 4,
    ANIMATION_PROCESSING_MAX = 5
}

declare const enum AnimationSnapshotType_t {
    ANIMATION_SNAPSHOT_SERVER_SIMULATION = 0,
    ANIMATION_SNAPSHOT_CLIENT_SIMULATION = 1,
    ANIMATION_SNAPSHOT_CLIENT_PREDICTION = 2,
    ANIMATION_SNAPSHOT_CLIENT_INTERPOLATION = 3,
    ANIMATION_SNAPSHOT_CLIENT_RENDER = 4,
    ANIMATION_SNAPSHOT_FINAL_COMPOSITE = 5,
    ANIMATION_SNAPSHOT_MAX = 6
}

declare const enum BoneTransformSpace_t {
    BoneTransformSpace_Invalid = -1,
    BoneTransformSpace_Parent = 0,
    BoneTransformSpace_Model = 1,
    BoneTransformSpace_World = 2
}

declare const enum FootstepLandedFootSoundType_t {
    FOOTSOUND_Left = 0,
    FOOTSOUND_Right = 1,
    FOOTSOUND_UseOverrideSound = 2
}

declare const enum MoodType_t {
    eMoodType_Head = 0,
    eMoodType_Body = 1
}

declare const enum ParticleAttachment_t {
    PATTACH_INVALID = -1,
    PATTACH_ABSORIGIN = 0,
    PATTACH_ABSORIGIN_FOLLOW = 1,
    PATTACH_CUSTOMORIGIN = 2,
    PATTACH_CUSTOMORIGIN_FOLLOW = 3,
    PATTACH_POINT = 4,
    PATTACH_POINT_FOLLOW = 5,
    PATTACH_EYES_FOLLOW = 6,
    PATTACH_OVERHEAD_FOLLOW = 7,
    PATTACH_WORLDORIGIN = 8,
    PATTACH_ROOTBONE_FOLLOW = 9,
    PATTACH_RENDERORIGIN_FOLLOW = 10,
    PATTACH_MAIN_VIEW = 11,
    PATTACH_WATERWAKE = 12,
    PATTACH_CENTER_FOLLOW = 13,
    PATTACH_CUSTOM_GAME_STATE_1 = 14,
    PATTACH_HEALTHBAR = 15,
    MAX_PATTACH_TYPES = 16
}

declare const enum RagdollPoseControl {
    Absolute = 0,
    Relative = 1
}

declare const enum SeqCmd_t {
    SeqCmd_Nop = 0,
    SeqCmd_LinearDelta = 1,
    SeqCmd_FetchFrameRange = 2,
    SeqCmd_Slerp = 3,
    SeqCmd_Add = 4,
    SeqCmd_Subtract = 5,
    SeqCmd_Scale = 6,
    SeqCmd_Copy = 7,
    SeqCmd_Blend = 8,
    SeqCmd_Worldspace = 9,
    SeqCmd_Sequence = 10,
    SeqCmd_FetchCycle = 11,
    SeqCmd_FetchFrame = 12,
    SeqCmd_IKLockInPlace = 13,
    SeqCmd_IKRestoreAll = 14,
    SeqCmd_ReverseSequence = 15,
    SeqCmd_Transform = 16
}

declare const enum SeqPoseSetting_t {
    SEQ_POSE_SETTING_CONSTANT = 0,
    SEQ_POSE_SETTING_ROTATION = 1,
    SEQ_POSE_SETTING_POSITION = 2,
    SEQ_POSE_SETTING_VELOCITY = 3
}

declare const enum AimMatrixBlendMode {
    AimMatrixBlendMode_None = 0,
    AimMatrixBlendMode_Additive = 1,
    AimMatrixBlendMode_ModelSpaceAdditive = 2,
    AimMatrixBlendMode_BoneMask = 3
}

declare const enum AnimNodeNetworkMode {
    ServerAuthoritative = 0,
    ClientSimulate = 1
}

declare const enum AnimScriptType {
    ANIMSCRIPT_TYPE_INVALID = -1,
    ANIMSCRIPT_FUSE_GENERAL = 0,
    ANIMSCRIPT_FUSE_STATEMACHINE = 1
}

declare const enum AnimValueSource {
    MoveHeading = 0,
    MoveSpeed = 1,
    ForwardSpeed = 2,
    StrafeSpeed = 3,
    FacingHeading = 4,
    LookHeading = 5,
    LookPitch = 6,
    LookDistance = 7,
    Parameter = 8,
    WayPointHeading = 9,
    WayPointDistance = 10,
    BoundaryRadius = 11,
    TargetMoveHeading = 12,
    TargetMoveSpeed = 13,
    AccelerationHeading = 14,
    AccelerationSpeed = 15,
    SlopeHeading = 16,
    SlopeAngle = 17,
    SlopePitch = 18,
    SlopeYaw = 19,
    GoalDistance = 20,
    AccelerationLeftRight = 21,
    AccelerationFrontBack = 22,
    RootMotionSpeed = 23,
    RootMotionTurnSpeed = 24,
    MoveHeadingRelativeToLookHeading = 25,
    MaxMoveSpeed = 26,
    FingerCurl_Thumb = 27,
    FingerCurl_Index = 28,
    FingerCurl_Middle = 29,
    FingerCurl_Ring = 30,
    FingerCurl_Pinky = 31,
    FingerSplay_Thumb_Index = 32,
    FingerSplay_Index_Middle = 33,
    FingerSplay_Middle_Ring = 34,
    FingerSplay_Ring_Pinky = 35
}

declare const enum AnimVectorSource {
    MoveDirection = 0,
    FacingPosition = 1,
    LookDirection = 2,
    VectorParameter = 3,
    WayPointDirection = 4,
    Acceleration = 5,
    SlopeNormal = 6,
    SlopeNormal_WorldSpace = 7,
    LookTarget = 8,
    LookTarget_WorldSpace = 9,
    WayPointPosition = 10,
    GoalPosition = 11,
    RootMotionVelocity = 12,
    ManualTarget_WorldSpace = 13
}

declare const enum BinaryNodeChildOption {
    Child1 = 0,
    Child2 = 1
}

declare const enum BinaryNodeTiming {
    UseChild1 = 0,
    UseChild2 = 1,
    SyncChildren = 2
}

declare const enum Blend2DMode {
    Blend2DMode_General = 0,
    Blend2DMode_Directional = 1
}

declare const enum BlendKeyType {
    BlendKey_UserValue = 0,
    BlendKey_Velocity = 1,
    BlendKey_Distance = 2,
    BlendKey_RemainingDistance = 3
}

declare const enum BoneMaskBlendSpace {
    BlendSpace_Parent = 0,
    BlendSpace_Model = 1,
    BlendSpace_Model_RotationOnly = 2,
    BlendSpace_Model_TranslationOnly = 3
}

declare const enum CAnimationGraphVisualizerPrimitiveType {
    ANIMATIONGRAPHVISUALIZERPRIMITIVETYPE_Text = 0,
    ANIMATIONGRAPHVISUALIZERPRIMITIVETYPE_Sphere = 1,
    ANIMATIONGRAPHVISUALIZERPRIMITIVETYPE_Line = 2,
    ANIMATIONGRAPHVISUALIZERPRIMITIVETYPE_Pie = 3,
    ANIMATIONGRAPHVISUALIZERPRIMITIVETYPE_Axis = 4
}

declare const enum ChoiceBlendMethod {
    SingleBlendTime = 0,
    PerChoiceBlendTimes = 1
}

declare const enum ChoiceChangeMethod {
    OnReset = 0,
    OnCycleEnd = 1,
    OnResetOrCycleEnd = 2
}

declare const enum ChoiceMethod {
    WeightedRandom = 0,
    WeightedRandomNoRepeat = 1,
    Iterate = 2,
    IterateRandom = 3
}

declare const enum DampingSpeedFunction {
    NoDamping = 0,
    Constant = 1,
    Spring = 2
}

declare const enum EDemoBoneSelectionMode {
    CaptureAllBones = 0,
    CaptureSelectedBones = 1
}

declare const enum EIKEndEffectorRotationFixUpMode {
    None = 0,
    MatchTargetOrientation = 1,
    LookAtTargetForward = 2,
    MaintainParentOrientation = 3,
    Count = 4
}

declare const enum FacingMode {
    FacingMode_Invalid = 0,
    FacingMode_Manual = 1,
    FacingMode_Path = 2,
    FacingMode_LookTarget = 3,
    FacingMode_ManualPosition = 4
}

declare const enum FieldNetworkOption {
    Auto = 0,
    ForceEnable = 1,
    ForceDisable = 2
}

declare const enum FootFallTagFoot_t {
    FOOT1 = 0,
    FOOT2 = 1,
    FOOT3 = 2,
    FOOT4 = 3,
    FOOT5 = 4,
    FOOT6 = 5,
    FOOT7 = 6,
    FOOT8 = 7
}

declare const enum FootLockSubVisualization {
    FOOTLOCKSUBVISUALIZATION_ReachabilityAnalysis = 0,
    FOOTLOCKSUBVISUALIZATION_IKSolve = 1
}

declare const enum FootPinningTimingSource {
    FootMotion = 0,
    Tag = 1,
    Parameter = 2
}

declare const enum HandshakeTagType_t {
    eInvalid = -1,
    eTask = 0,
    eMovement = 1,
    eCount = 2
}

declare const enum IKChannelMode {
    TwoBone = 0,
    TwoBone_Translate = 1,
    OneBone = 2,
    OneBone_Translate = 3
}

declare const enum IKSolverType {
    IKSOLVER_Perlin = 0,
    IKSOLVER_TwoBone = 1,
    IKSOLVER_Fabrik = 2,
    IKSOLVER_DogLeg3Bone = 3,
    IKSOLVER_CCD = 4,
    IKSOLVER_COUNT = 5
}

declare const enum IKTargetCoordinateSystem {
    IKTARGETCOORDINATESYSTEM_WorldSpace = 0,
    IKTARGETCOORDINATESYSTEM_ModelSpace = 1,
    IKTARGETCOORDINATESYSTEM_COUNT = 2
}

declare const enum IKTargetSource {
    IKTARGETSOURCE_Bone = 0,
    IKTARGETSOURCE_AnimgraphParameter = 1,
    IKTARGETSOURCE_COUNT = 2
}

declare const enum IkEndEffectorType {
    IkEndEffector_Attachment = 0,
    IkEndEffector_Bone = 1
}

declare const enum IkTargetType {
    IkTarget_Attachment = 0,
    IkTarget_Bone = 1,
    IkTarget_Parameter_ModelSpace = 2,
    IkTarget_Parameter_WorldSpace = 3
}

declare const enum JiggleBoneSimSpace {
    SimSpace_Local = 0,
    SimSpace_Model = 1,
    SimSpace_World = 2
}

declare const enum JumpCorrectionMethod {
    ScaleMotion = 0,
    AddCorrectionDelta = 1
}

declare const enum MatterialAttributeTagType_t {
    MATERIAL_ATTRIBUTE_TAG_VALUE = 0,
    MATERIAL_ATTRIBUTE_TAG_COLOR = 1
}

declare const enum PoseType_t {
    POSETYPE_STATIC = 0,
    POSETYPE_DYNAMIC = 1,
    POSETYPE_INVALID = 255
}

declare const enum ResetCycleOption {
    Beginning = 0,
    SameCycleAsSource = 1,
    InverseSourceCycle = 2,
    FixedValue = 3,
    SameTimeAsSource = 4
}

declare const enum SelectorTagBehavior_t {
    SelectorTagBehavior_OnWhileCurrent = 0,
    SelectorTagBehavior_OffWhenFinished = 1,
    SelectorTagBehavior_OffBeforeFinished = 2
}

declare const enum SolveIKChainAnimNodeDebugSetting {
    SOLVEIKCHAINANIMNODEDEBUGSETTING_None = 0,
    SOLVEIKCHAINANIMNODEDEBUGSETTING_X_Axis_Circle = 1,
    SOLVEIKCHAINANIMNODEDEBUGSETTING_Y_Axis_Circle = 2,
    SOLVEIKCHAINANIMNODEDEBUGSETTING_Z_Axis_Circle = 3,
    SOLVEIKCHAINANIMNODEDEBUGSETTING_Forward = 4,
    SOLVEIKCHAINANIMNODEDEBUGSETTING_Up = 5,
    SOLVEIKCHAINANIMNODEDEBUGSETTING_Left = 6
}

declare const enum StanceOverrideMode {
    Sequence = 0,
    Node = 1
}

declare const enum StateActionBehavior {
    STATETAGBEHAVIOR_ACTIVE_WHILE_CURRENT = 0,
    STATETAGBEHAVIOR_FIRE_ON_ENTER = 1,
    STATETAGBEHAVIOR_FIRE_ON_EXIT = 2,
    STATETAGBEHAVIOR_FIRE_ON_ENTER_AND_EXIT = 3
}

declare const enum StepPhase {
    StepPhase_OnGround = 0,
    StepPhase_InAir = 1
}

declare const enum VelocityMetricMode {
    DirectionOnly = 0,
    MagnitudeOnly = 1,
    DirectionAndMagnitude = 2
}

declare const enum NmCachedValueMode_t {
    OnEntry = 0,
    OnExit = 1
}

declare const enum NmEasingFunction_t {
    Linear = 0,
    Quad = 1,
    Cubic = 2,
    Quart = 3,
    Quint = 4,
    Sine = 5,
    Expo = 6,
    Circ = 7,
    Back = 8
}

declare const enum NmEasingOperation_t {
    Linear = 0,
    InQuad = 1,
    OutQuad = 2,
    InOutQuad = 3,
    InCubic = 4,
    OutCubic = 5,
    InOutCubic = 6,
    InQuart = 7,
    OutQuart = 8,
    InOutQuart = 9,
    InQuint = 10,
    OutQuint = 11,
    InOutQuint = 12,
    InSine = 13,
    OutSine = 14,
    InOutSine = 15,
    InExpo = 16,
    OutExpo = 17,
    InOutExpo = 18,
    InCirc = 19,
    OutCirc = 20,
    InOutCirc = 21,
    None = 22
}

declare const enum NmEventConditionRules_t {
    LimitSearchToSourceState = 0,
    IgnoreInactiveEvents = 1,
    PreferHighestWeight = 2,
    PreferHighestProgress = 3,
    OperatorOr = 4,
    OperatorAnd = 5,
    SearchOnlyStateEvents = 6,
    SearchOnlyAnimEvents = 7,
    SearchBothStateAndAnimEvents = 8
}

declare const enum NmFootPhaseCondition_t {
    LeftFootDown = 0,
    LeftFootPassing = 1,
    LeftPhase = 4,
    RightFootDown = 2,
    RightFootPassing = 3,
    RightPhase = 5
}

declare const enum NmFootPhase_t {
    LeftFootDown = 0,
    RightFootPassing = 1,
    RightFootDown = 2,
    LeftFootPassing = 3
}

declare const enum NmFrameSnapEventMode_t {
    Floor = 0,
    Round = 1
}

declare const enum NmGraphValueType_t {
    Unknown = 0,
    Bool = 1,
    ID = 2,
    Float = 3,
    Vector = 4,
    Target = 5,
    BoneMask = 6,
    Pose = 7,
    Special = 8
}

declare const enum NmPoseBlendMode_t {
    Overlay = 0,
    Additive = 1,
    ModelSpace = 2
}

declare const enum NmRootMotionBlendMode_t {
    Blend = 0,
    Additive = 1,
    IgnoreSource = 2,
    IgnoreTarget = 3
}

declare const enum NmStateEventTypeCondition_t {
    Entry = 0,
    FullyInState = 1,
    Exit = 2,
    Timed = 3,
    Any = 4
}

declare const enum NmTargetWarpAlgorithm_t {
    Lerp = 0,
    Hermite = 1,
    HermiteFeaturePreserving = 2,
    Bezier = 3
}

declare const enum NmTargetWarpRule_t {
    WarpXY = 0,
    WarpZ = 1,
    WarpXYZ = 2,
    RotationOnly = 3
}

declare const enum NmTransitionRuleCondition_t {
    AnyAllowed = 0,
    FullyAllowed = 1,
    ConditionallyAllowed = 2,
    Blocked = 3
}

declare const enum NmTransitionRule_t {
    AllowTransition = 0,
    ConditionallyAllowTransition = 1,
    BlockTransition = 2
}

declare const enum AmmoFlags_t {
    AMMO_FORCE_DROP_IF_CARRIED = 1,
    AMMO_RESERVE_STAYS_WITH_WEAPON = 2,
    AMMO_FLAG_MAX = 2
}

declare const enum AmmoPosition_t {
    AMMO_POSITION_INVALID = -1,
    AMMO_POSITION_PRIMARY = 0,
    AMMO_POSITION_SECONDARY = 1,
    AMMO_POSITION_COUNT = 2
}

declare const enum AnimLoopMode_t {
    ANIM_LOOP_MODE_INVALID = -1,
    ANIM_LOOP_MODE_NOT_LOOPING = 0,
    ANIM_LOOP_MODE_LOOPING = 1,
    ANIM_LOOP_MODE_USE_SEQUENCE_SETTINGS = 2,
    ANIM_LOOP_MODE_COUNT = 3
}

declare const enum BaseExplosionTypes_t {
    EXPLOSION_TYPE_DEFAULT = 0,
    EXPLOSION_TYPE_GRENADE = 1,
    EXPLOSION_TYPE_MOLOTOV = 2,
    EXPLOSION_TYPE_FIREWORKS = 3,
    EXPLOSION_TYPE_GASCAN = 4,
    EXPLOSION_TYPE_GASCYLINDER = 5,
    EXPLOSION_TYPE_EXPLOSIVEBARREL = 6,
    EXPLOSION_TYPE_ELECTRICAL = 7,
    EXPLOSION_TYPE_EMP = 8,
    EXPLOSION_TYPE_SHRAPNEL = 9,
    EXPLOSION_TYPE_SMOKEGRENADE = 10,
    EXPLOSION_TYPE_FLASHBANG = 11,
    EXPLOSION_TYPE_TRIPMINE = 12,
    EXPLOSION_TYPE_ICE = 13,
    EXPLOSION_TYPE_NONE = 14,
    EXPLOSION_TYPE_CUSTOM = 15,
    EXPLOSION_TYPE_COUNT = 16
}

declare const enum BeamClipStyle_t {
    kNOCLIP = 0,
    kGEOCLIP = 1,
    kMODELCLIP = 2,
    kBEAMCLIPSTYLE_NUMBITS = 2
}

declare const enum BeamType_t {
    BEAM_INVALID = 0,
    BEAM_POINTS = 1,
    BEAM_ENTPOINT = 2,
    BEAM_ENTS = 3,
    BEAM_HOSE = 4,
    BEAM_SPLINE = 5,
    BEAM_LASER = 6
}

declare const enum BeginDeathLifeStateTransition_t {
    NO_CHANGE_IN_LIFESTATE = 0,
    TRANSITION_TO_LIFESTATE_DYING = 1,
    TRANSITION_TO_LIFESTATE_DEAD = 2
}

declare const enum BloodType {
    None = -1,
    ColorRed = 0,
    ColorYellow = 1,
    ColorGreen = 2,
    ColorRedLVL2 = 3,
    ColorRedLVL3 = 4,
    ColorRedLVL4 = 5,
    ColorRedLVL5 = 6,
    ColorRedLVL6 = 7
}

declare const enum BreakableContentsType_t {
    BC_DEFAULT = 0,
    BC_EMPTY = 1,
    BC_PROP_GROUP_OVERRIDE = 2,
    BC_PARTICLE_SYSTEM_OVERRIDE = 3
}

declare const enum BrushSolidities_e {
    BRUSHSOLID_TOGGLE = 0,
    BRUSHSOLID_NEVER = 1,
    BRUSHSOLID_ALWAYS = 2
}

declare const enum C4LightEffect_t {
    eLightEffectNone = 0,
    eLightEffectDropped = 1,
    eLightEffectThirdPersonHeld = 2
}

declare const enum CDebugOverlayCombinedTypes_t {
    ALL = 0,
    ANY = 1,
    COUNT = 2
}

declare const enum CDebugOverlayFilterType_t {
    NONE = 0,
    TEXT = 1,
    ENTITY = 2,
    COUNT = 3,
    TACTICAL_SEARCH = 4,
    AI_SCHEDULE = 5,
    AI_TASK = 6,
    AI_EVENT = 7,
    END_SIM_HISTORY_TYPES = 8,
    COMBINED = -1
}

declare const enum CSPlayerBlockingUseAction_t {
    k_CSPlayerBlockingUseAction_None = 0,
    k_CSPlayerBlockingUseAction_DefusingDefault = 1,
    k_CSPlayerBlockingUseAction_DefusingWithKit = 2,
    k_CSPlayerBlockingUseAction_HostageGrabbing = 3,
    k_CSPlayerBlockingUseAction_HostageDropping = 4,
    k_CSPlayerBlockingUseAction_OpeningSafe = 5,
    k_CSPlayerBlockingUseAction_EquippingParachute = 6,
    k_CSPlayerBlockingUseAction_EquippingHeavyArmor = 7,
    k_CSPlayerBlockingUseAction_EquippingContract = 8,
    k_CSPlayerBlockingUseAction_EquippingTabletUpgrade = 9,
    k_CSPlayerBlockingUseAction_TakingOffHeavyArmor = 10,
    k_CSPlayerBlockingUseAction_PayingToOpenDoor = 11,
    k_CSPlayerBlockingUseAction_CancelingSpawnRappelling = 12,
    k_CSPlayerBlockingUseAction_EquippingExoJump = 13,
    k_CSPlayerBlockingUseAction_PickingUpBumpMine = 14,
    k_CSPlayerBlockingUseAction_MapLongUseEntity_Pickup = 15,
    k_CSPlayerBlockingUseAction_MapLongUseEntity_Place = 16,
    k_CSPlayerBlockingUseAction_MaxCount = 17
}

declare const enum CSPlayerState {
    STATE_ACTIVE = 0,
    STATE_WELCOME = 1,
    STATE_PICKINGTEAM = 2,
    STATE_PICKINGCLASS = 3,
    STATE_DEATH_ANIM = 4,
    STATE_DEATH_WAIT_FOR_KEY = 5,
    STATE_OBSERVER_MODE = 6,
    STATE_GUNGAME_RESPAWN = 7,
    STATE_DORMANT = 8,
    NUM_PLAYER_STATES = 9
}

declare const enum CSWeaponCategory {
    WEAPONCATEGORY_OTHER = 0,
    WEAPONCATEGORY_MELEE = 1,
    WEAPONCATEGORY_SECONDARY = 2,
    WEAPONCATEGORY_SMG = 3,
    WEAPONCATEGORY_RIFLE = 4,
    WEAPONCATEGORY_HEAVY = 5,
    WEAPONCATEGORY_COUNT = 6
}

declare const enum CSWeaponMode {
    Primary_Mode = 0,
    Secondary_Mode = 1,
    WeaponMode_MAX = 2
}

declare const enum CSWeaponSilencerType {
    WEAPONSILENCER_NONE = 0,
    WEAPONSILENCER_DETACHABLE = 1,
    WEAPONSILENCER_INTEGRATED = 2
}

declare const enum CSWeaponState_t {
    WEAPON_NOT_CARRIED = 0,
    WEAPON_IS_CARRIED_BY_PLAYER = 1,
    WEAPON_IS_ACTIVE = 2
}

declare const enum CSWeaponType {
    WEAPONTYPE_KNIFE = 0,
    WEAPONTYPE_PISTOL = 1,
    WEAPONTYPE_SUBMACHINEGUN = 2,
    WEAPONTYPE_RIFLE = 3,
    WEAPONTYPE_SHOTGUN = 4,
    WEAPONTYPE_SNIPER_RIFLE = 5,
    WEAPONTYPE_MACHINEGUN = 6,
    WEAPONTYPE_C4 = 7,
    WEAPONTYPE_TASER = 8,
    WEAPONTYPE_GRENADE = 9,
    WEAPONTYPE_EQUIPMENT = 10,
    WEAPONTYPE_STACKABLEITEM = 11,
    WEAPONTYPE_FISTS = 12,
    WEAPONTYPE_BREACHCHARGE = 13,
    WEAPONTYPE_BUMPMINE = 14,
    WEAPONTYPE_TABLET = 15,
    WEAPONTYPE_MELEE = 16,
    WEAPONTYPE_SHIELD = 17,
    WEAPONTYPE_ZONE_REPULSOR = 18,
    WEAPONTYPE_UNKNOWN = 19
}

declare const enum CanPlaySequence_t {
    CANNOT_PLAY = 0,
    CAN_PLAY_NOW = 1,
    CAN_PLAY_ENQUEUED = 2
}

declare const enum ChatIgnoreType_t {
    CHAT_IGNORE_NONE = 0,
    CHAT_IGNORE_ALL = 1,
    CHAT_IGNORE_TEAM = 2
}

declare const enum ChoreoLookAtMode_t {
    eInvalid = -1,
    eChest = 0,
    eHead = 1,
    eEyesOnly = 2
}

declare const enum ChoreoLookAtSpeed_t {
    eInvalid = -1,
    eSlow = 0,
    eMedium = 1,
    eFast = 2
}

declare const enum Class_T {
    CLASS_NONE = 0,
    CLASS_PLAYER = 1,
    CLASS_PLAYER_ALLY = 2,
    CLASS_BOMB = 3,
    CLASS_FOOT_CONTACT_SHADOW = 4,
    CLASS_WEAPON = 5,
    CLASS_WATER_SPLASHER = 6,
    CLASS_WEAPON_VIEWMODEL = 7,
    CLASS_DOOR = 8,
    NUM_CLASSIFY_CLASSES = 9
}

declare const enum CommandEntitySpecType_t {
    SPEC_SEARCH = 0,
    SPEC_TYPES_COUNT = 1
}

declare const enum CommandExecMode_t {
    EXEC_MANUAL = 0,
    EXEC_LEVELSTART = 1,
    EXEC_PERIODIC = 2,
    EXEC_MODES_COUNT = 3
}

declare const enum CompMatPropertyMutatorConditionType_t {
    COMP_MAT_MUTATOR_CONDITION_INPUT_CONTAINER_EXISTS = 0,
    COMP_MAT_MUTATOR_CONDITION_INPUT_CONTAINER_VALUE_EXISTS = 1,
    COMP_MAT_MUTATOR_CONDITION_INPUT_CONTAINER_VALUE_EQUALS = 2
}

declare const enum CompMatPropertyMutatorType_t {
    COMP_MAT_PROPERTY_MUTATOR_INIT = 0,
    COMP_MAT_PROPERTY_MUTATOR_COPY_MATCHING_KEYS = 1,
    COMP_MAT_PROPERTY_MUTATOR_COPY_KEYS_WITH_SUFFIX = 2,
    COMP_MAT_PROPERTY_MUTATOR_COPY_PROPERTY = 3,
    COMP_MAT_PROPERTY_MUTATOR_SET_VALUE = 4,
    COMP_MAT_PROPERTY_MUTATOR_GENERATE_TEXTURE = 5,
    COMP_MAT_PROPERTY_MUTATOR_CONDITIONAL_MUTATORS = 6,
    COMP_MAT_PROPERTY_MUTATOR_POP_INPUT_QUEUE = 7,
    COMP_MAT_PROPERTY_MUTATOR_DRAW_TEXT = 8,
    COMP_MAT_PROPERTY_MUTATOR_RANDOM_ROLL_INPUT_VARIABLES = 9
}

declare const enum CompositeMaterialInputContainerSourceType_t {
    CONTAINER_SOURCE_TYPE_TARGET_MATERIAL = 0,
    CONTAINER_SOURCE_TYPE_MATERIAL_FROM_TARGET_ATTR = 1,
    CONTAINER_SOURCE_TYPE_SPECIFIC_MATERIAL = 2,
    CONTAINER_SOURCE_TYPE_LOOSE_VARIABLES = 3,
    CONTAINER_SOURCE_TYPE_VARIABLE_FROM_TARGET_ATTR = 4,
    CONTAINER_SOURCE_TYPE_TARGET_INSTANCE_MATERIAL = 5
}

declare const enum CompositeMaterialInputLooseVariableType_t {
    LOOSE_VARIABLE_TYPE_BOOLEAN = 0,
    LOOSE_VARIABLE_TYPE_INTEGER1 = 1,
    LOOSE_VARIABLE_TYPE_INTEGER2 = 2,
    LOOSE_VARIABLE_TYPE_INTEGER3 = 3,
    LOOSE_VARIABLE_TYPE_INTEGER4 = 4,
    LOOSE_VARIABLE_TYPE_FLOAT1 = 5,
    LOOSE_VARIABLE_TYPE_FLOAT2 = 6,
    LOOSE_VARIABLE_TYPE_FLOAT3 = 7,
    LOOSE_VARIABLE_TYPE_FLOAT4 = 8,
    LOOSE_VARIABLE_TYPE_COLOR4 = 9,
    LOOSE_VARIABLE_TYPE_STRING = 10,
    LOOSE_VARIABLE_TYPE_SYSTEMVAR = 11,
    LOOSE_VARIABLE_TYPE_RESOURCE_MATERIAL = 12,
    LOOSE_VARIABLE_TYPE_RESOURCE_TEXTURE = 13,
    LOOSE_VARIABLE_TYPE_PANORAMA_RENDER = 14
}

declare const enum CompositeMaterialInputTextureType_t {
    INPUT_TEXTURE_TYPE_DEFAULT = 0,
    INPUT_TEXTURE_TYPE_NORMALMAP = 1,
    INPUT_TEXTURE_TYPE_COLOR = 2,
    INPUT_TEXTURE_TYPE_MASKS = 3,
    INPUT_TEXTURE_TYPE_ROUGHNESS = 4,
    INPUT_TEXTURE_TYPE_PEARLESCENCE_MASK = 5,
    INPUT_TEXTURE_TYPE_AO = 6
}

declare const enum CompositeMaterialMatchFilterType_t {
    MATCH_FILTER_MATERIAL_ATTRIBUTE_EXISTS = 0,
    MATCH_FILTER_MATERIAL_SHADER = 1,
    MATCH_FILTER_MATERIAL_NAME_SUBSTR = 2,
    MATCH_FILTER_MATERIAL_ATTRIBUTE_EQUALS = 3,
    MATCH_FILTER_MATERIAL_PROPERTY_EXISTS = 4,
    MATCH_FILTER_MATERIAL_PROPERTY_EQUALS = 5
}

declare const enum CompositeMaterialVarSystemVar_t {
    COMPMATSYSVAR_COMPOSITETIME = 0,
    COMPMATSYSVAR_EMPTY_RESOURCE_SPACER = 1
}

declare const enum DamageTypes_t {
    DMG_GENERIC = 0,
    DMG_CRUSH = 1,
    DMG_BULLET = 2,
    DMG_SLASH = 4,
    DMG_BURN = 8,
    DMG_VEHICLE = 16,
    DMG_FALL = 32,
    DMG_BLAST = 64,
    DMG_CLUB = 128,
    DMG_SHOCK = 256,
    DMG_SONIC = 512,
    DMG_ENERGYBEAM = 1024,
    DMG_DROWN = 16384,
    DMG_POISON = 32768,
    DMG_RADIATION = 65536,
    DMG_DROWNRECOVER = 131072,
    DMG_ACID = 262144,
    DMG_PHYSGUN = 1048576,
    DMG_DISSOLVE = 2097152,
    DMG_BLAST_SURFACE = 4194304,
    DMG_BUCKSHOT = 16777216,
    DMG_LASTGENERICFLAG = 16777216,
    DMG_HEADSHOT = 33554432,
    DMG_DANGERZONE = 67108864
}

declare const enum DebugOverlayBits_t {
    OVERLAY_TEXT_BIT = 1,
    OVERLAY_NAME_BIT = 2,
    OVERLAY_BBOX_BIT = 4,
    OVERLAY_PIVOT_BIT = 8,
    OVERLAY_MESSAGE_BIT = 16,
    OVERLAY_ABSBOX_BIT = 32,
    OVERLAY_RBOX_BIT = 64,
    OVERLAY_SHOW_BLOCKSLOS = 128,
    OVERLAY_ATTACHMENTS_BIT = 256,
    OVERLAY_INTERPOLATED_ATTACHMENTS_BIT = 512,
    OVERLAY_INTERPOLATED_PIVOT_BIT = 1024,
    OVERLAY_SKELETON_BIT = 2048,
    OVERLAY_INTERPOLATED_SKELETON_BIT = 4096,
    OVERLAY_TRIGGER_BOUNDS_BIT = 8192,
    OVERLAY_HITBOX_BIT = 16384,
    OVERLAY_INTERPOLATED_HITBOX_BIT = 32768,
    OVERLAY_AUTOAIM_BIT = 65536,
    OVERLAY_NPC_SELECTED_BIT = 131072,
    OVERLAY_JOINT_INFO_BIT = 262144,
    OVERLAY_NPC_ROUTE_BIT = 524288,
    OVERLAY_VISIBILITY_TRACES_BIT = 1048576,
    OVERLAY_NPC_ENEMIES_BIT = 4194304,
    OVERLAY_NPC_CONDITIONS_BIT = 8388608,
    OVERLAY_NPC_COMBAT_BIT = 16777216,
    OVERLAY_NPC_TASK_BIT = 33554432,
    OVERLAY_NPC_BODYLOCATIONS = 67108864,
    OVERLAY_NPC_VIEWCONE_BIT = 134217728,
    OVERLAY_NPC_KILL_BIT = 268435456,
    OVERLAY_WC_CHANGE_ENTITY = 536870912,
    OVERLAY_BUDDHA_MODE = 1073741824,
    OVERLAY_NPC_STEERING_REGULATIONS = 2147483648,
    OVERLAY_NPC_TASK_TEXT_BIT = 4294967296,
    OVERLAY_PROP_DEBUG = 8589934592,
    OVERLAY_NPC_RELATION_BIT = 17179869184,
    OVERLAY_VIEWOFFSET = 34359738368,
    OVERLAY_VCOLLIDE_WIREFRAME_BIT = 68719476736,
    OVERLAY_NPC_SCRIPTED_COMMANDS_BIT = 137438953472,
    OVERLAY_ACTORNAME_BIT = 274877906944,
    OVERLAY_NPC_CONDITIONS_TEXT_BIT = 549755813888,
    OVERLAY_NPC_ABILITY_RANGE_DEBUG_BIT = 1099511627776
}

declare const enum Disposition_t {
    D_ER = 0,
    D_HT = 1,
    D_FR = 2,
    D_LI = 3,
    D_NU = 4,
    D_ERROR = 0,
    D_HATE = 1,
    D_FEAR = 2,
    D_LIKE = 3,
    D_NEUTRAL = 4
}

declare const enum DoorState_t {
    DOOR_STATE_CLOSED = 0,
    DOOR_STATE_OPENING = 1,
    DOOR_STATE_OPEN = 2,
    DOOR_STATE_CLOSING = 3,
    DOOR_STATE_AJAR = 4
}

declare const enum EContributionScoreFlag_t {
    k_EContributionScoreFlag_Default = 0,
    k_EContributionScoreFlag_Objective = 1,
    k_EContributionScoreFlag_Bullets = 2
}

declare const enum EDestructiblePartDamagePassThroughType {
    Normal = 0,
    Absorb = 1
}

declare const enum EInButtonState {
    IN_BUTTON_UP = 0,
    IN_BUTTON_DOWN = 1,
    IN_BUTTON_DOWN_UP = 2,
    IN_BUTTON_UP_DOWN = 3,
    IN_BUTTON_UP_DOWN_UP = 4,
    IN_BUTTON_DOWN_UP_DOWN = 5,
    IN_BUTTON_DOWN_UP_DOWN_UP = 6,
    IN_BUTTON_UP_DOWN_UP_DOWN = 7,
    IN_BUTTON_STATE_COUNT = 8
}

declare const enum EKillTypes_t {
    KILL_NONE = 0,
    KILL_DEFAULT = 1,
    KILL_HEADSHOT = 2,
    KILL_BLAST = 3,
    KILL_BURN = 4,
    KILL_SLASH = 5,
    KILL_SHOCK = 6,
    KILLTYPE_COUNT = 7
}

declare const enum EProceduralRagdollWeightIndexPropagationMethod {
    Bone = 0,
    BoneAndChildren = 1
}

declare const enum EntityDisolveType_t {
    ENTITY_DISSOLVE_INVALID = -1,
    ENTITY_DISSOLVE_NORMAL = 0,
    ENTITY_DISSOLVE_ELECTRICAL = 1,
    ENTITY_DISSOLVE_ELECTRICAL_LIGHT = 2,
    ENTITY_DISSOLVE_CORE = 3
}

declare const enum EntityDistanceMode_t {
    eOriginToOrigin = 0,
    eCenterToCenter = 1,
    eAxisToAxis = 2
}

declare const enum EntityPlatformTypes_t {
    ENTITY_NOT_PLATFORM = 0,
    ENTITY_PLATFORM_PLAYER_FOLLOWS_YAW = 1,
    ENTITY_PLATFORM_PLAYER_IGNORES_YAW = 2
}

declare const enum EntitySubclassScope_t {
    SUBCLASS_SCOPE_NONE = -1,
    SUBCLASS_SCOPE_PRECIPITATION = 0,
    SUBCLASS_SCOPE_PLAYER_WEAPONS = 1,
    SUBCLASS_SCOPE_COUNT = 2
}

declare const enum FixAngleSet_t {
    None = 0,
    Absolute = 1,
    Relative = 2
}

declare const enum GameAnimEventIndex_t {
    AE_EMPTY = 0,
    AE_CL_PLAYSOUND = 1,
    AE_CL_PLAYSOUND_ATTACHMENT = 2,
    AE_CL_PLAYSOUND_POSITION = 3,
    AE_SV_PLAYSOUND = 4,
    AE_CL_STOPSOUND = 5,
    AE_CL_PLAYSOUND_LOOPING = 6,
    AE_CL_CREATE_PARTICLE_EFFECT = 7,
    AE_CL_STOP_PARTICLE_EFFECT = 8,
    AE_CL_CREATE_PARTICLE_EFFECT_CFG = 9,
    AE_SV_CREATE_PARTICLE_EFFECT_CFG = 10,
    AE_SV_STOP_PARTICLE_EFFECT = 11,
    AE_FOOTSTEP = 12,
    AE_RAGDOLL = 13,
    AE_CL_STOP_RAGDOLL_CONTROL = 14,
    AE_CL_ENABLE_BODYGROUP = 15,
    AE_CL_DISABLE_BODYGROUP = 16,
    AE_BODYGROUP_SET_VALUE = 17,
    AE_CL_BODYGROUP_SET_VALUE_CMODEL_WPN = 18,
    AE_WEAPON_PERFORM_ATTACK = 19,
    AE_FIRE_INPUT = 20,
    AE_CL_CLOTH_ATTR = 21,
    AE_CL_CLOTH_GROUND_OFFSET = 22,
    AE_CL_CLOTH_STIFFEN = 23,
    AE_CL_CLOTH_EFFECT = 24,
    AE_CL_CREATE_ANIM_SCOPE_PROP = 25,
    AE_SV_IKLOCK = 26,
    AE_PULSE_GRAPH = 27,
    AE_PULSE_GRAPH_LOOKAT = 28,
    AE_PULSE_GRAPH_AIMAT = 29,
    AE_PULSE_GRAPH_IKLOCKLEFTARM = 30,
    AE_PULSE_GRAPH_IKLOCKRIGHTARM = 31,
    AE_DISABLE_PLATFORM = 32,
    AE_ENABLE_PLATFORM = 33,
    AE_ANIMGRAPH_SET_PARAM = 34,
    AE_CL_WEAPON_TRANSITION_INTO_HAND = 35,
    AE_CL_BODYGROUP_SET_TO_CLIP = 36,
    AE_CL_BODYGROUP_SET_TO_NEXTCLIP = 37,
    AE_SV_SHOW_SILENCER = 38,
    AE_SV_ATTACH_SILENCER_COMPLETE = 39,
    AE_SV_HIDE_SILENCER = 40,
    AE_SV_DETACH_SILENCER_COMPLETE = 41,
    AE_CL_EJECT_MAG = 42,
    AE_WPN_COMPLETE_RELOAD = 43,
    AE_WPN_HEALTHSHOT_INJECT = 44,
    AE_CL_C4_SCREEN_TEXT = 45,
    AE_GRENADE_THROW_COMPLETE = 46
}

declare const enum GrenadeType_t {
    GRENADE_TYPE_EXPLOSIVE = 0,
    GRENADE_TYPE_FLASH = 1,
    GRENADE_TYPE_FIRE = 2,
    GRENADE_TYPE_DECOY = 3,
    GRENADE_TYPE_SMOKE = 4,
    GRENADE_TYPE_SENSOR = 5,
    GRENADE_TYPE_SNOWBALL = 6,
    GRENADE_TYPE_TOTAL = 7
}

declare const enum HierarchyType_t {
    HIERARCHY_NONE = 0,
    HIERARCHY_BONE_MERGE = 1,
    HIERARCHY_ATTACHMENT = 2,
    HIERARCHY_ABSORIGIN = 3,
    HIERARCHY_BONE = 4,
    HIERARCHY_TYPE_COUNT = 5
}

declare const enum HitGroup_t {
    HITGROUP_INVALID = -1,
    HITGROUP_GENERIC = 0,
    HITGROUP_HEAD = 1,
    HITGROUP_CHEST = 2,
    HITGROUP_STOMACH = 3,
    HITGROUP_LEFTARM = 4,
    HITGROUP_RIGHTARM = 5,
    HITGROUP_LEFTLEG = 6,
    HITGROUP_RIGHTLEG = 7,
    HITGROUP_NECK = 8,
    HITGROUP_UNUSED = 9,
    HITGROUP_GEAR = 10,
    HITGROUP_SPECIAL = 11,
    HITGROUP_COUNT = 12
}

declare const enum Hull_t {
    HULL_HUMAN = 0,
    HULL_SMALL_CENTERED = 1,
    HULL_WIDE_HUMAN = 2,
    HULL_TINY = 3,
    HULL_MEDIUM = 4,
    HULL_TINY_CENTERED = 5,
    HULL_LARGE = 6,
    HULL_LARGE_CENTERED = 7,
    HULL_MEDIUM_TALL = 8,
    HULL_SMALL = 9,
    NUM_HULLS = 10,
    HULL_NONE = 11
}

declare const enum InputBitMask_t {
    IN_NONE = 0,
    IN_ALL = -1,
    IN_ATTACK = 1,
    IN_JUMP = 2,
    IN_DUCK = 4,
    IN_FORWARD = 8,
    IN_BACK = 16,
    IN_USE = 32,
    IN_TURNLEFT = 128,
    IN_TURNRIGHT = 256,
    IN_MOVELEFT = 512,
    IN_MOVERIGHT = 1024,
    IN_ATTACK2 = 2048,
    IN_RELOAD = 8192,
    IN_SPEED = 65536,
    IN_JOYAUTOSPRINT = 131072,
    IN_FIRST_MOD_SPECIFIC_BIT = 4294967296,
    IN_USEORRELOAD = 4294967296,
    IN_SCORE = 8589934592,
    IN_ZOOM = 17179869184,
    IN_LOOK_AT_WEAPON = 34359738368
}

declare const enum ItemFlagTypes_t {
    ITEM_FLAG_NONE = 0,
    ITEM_FLAG_CAN_SELECT_WITHOUT_AMMO = 1,
    ITEM_FLAG_NOAUTORELOAD = 2,
    ITEM_FLAG_NOAUTOSWITCHEMPTY = 4,
    ITEM_FLAG_LIMITINWORLD = 8,
    ITEM_FLAG_EXHAUSTIBLE = 16,
    ITEM_FLAG_DOHITLOCATIONDMG = 32,
    ITEM_FLAG_NOAMMOPICKUPS = 64,
    ITEM_FLAG_NOITEMPICKUP = 128
}

declare const enum LatchDirtyPermission_t {
    LATCH_DIRTY_DISALLOW = 0,
    LATCH_DIRTY_SERVER_CONTROLLED = 1,
    LATCH_DIRTY_CLIENT_SIMULATED = 2,
    LATCH_DIRTY_PREDICTION = 3,
    LATCH_DIRTY_FRAMESIMULATE = 4,
    LATCH_DIRTY_PARTICLE_SIMULATE = 5
}

declare const enum LifeState_t {
    LIFE_ALIVE = 0,
    LIFE_DYING = 1,
    LIFE_DEAD = 2,
    LIFE_RESPAWNABLE = 3,
    LIFE_RESPAWNING = 4
}

declare const enum MedalRank_t {
    MEDAL_RANK_NONE = 0,
    MEDAL_RANK_BRONZE = 1,
    MEDAL_RANK_SILVER = 2,
    MEDAL_RANK_GOLD = 3,
    MEDAL_RANK_COUNT = 4
}

declare const enum ModifyDamageReturn_t {
    CONTINUE_TO_APPLY_DAMAGE = 0,
    ABORT_DO_NOT_APPLY_DAMAGE = 1
}

declare const enum MoveCollide_t {
    MOVECOLLIDE_DEFAULT = 0,
    MOVECOLLIDE_FLY_BOUNCE = 1,
    MOVECOLLIDE_FLY_CUSTOM = 2,
    MOVECOLLIDE_FLY_SLIDE = 3,
    MOVECOLLIDE_COUNT = 4,
    MOVECOLLIDE_MAX_BITS = 3
}

declare const enum MoveMountingAmount_t {
    MOVE_MOUNT_NONE = 0,
    MOVE_MOUNT_LOW = 1,
    MOVE_MOUNT_HIGH = 2,
    MOVE_MOUNT_MAXCOUNT = 3
}

declare const enum MoveType_t {
    MOVETYPE_NONE = 0,
    MOVETYPE_OBSOLETE = 1,
    MOVETYPE_WALK = 2,
    MOVETYPE_FLY = 3,
    MOVETYPE_FLYGRAVITY = 4,
    MOVETYPE_VPHYSICS = 5,
    MOVETYPE_PUSH = 6,
    MOVETYPE_NOCLIP = 7,
    MOVETYPE_OBSERVER = 8,
    MOVETYPE_LADDER = 9,
    MOVETYPE_CUSTOM = 10,
    MOVETYPE_LAST = 11,
    MOVETYPE_INVALID = 11,
    MOVETYPE_MAX_BITS = 5
}

declare const enum ObserverInterpState_t {
    OBSERVER_INTERP_NONE = 0,
    OBSERVER_INTERP_TRAVELING = 1,
    OBSERVER_INTERP_SETTLING = 2
}

declare const enum ObserverMode_t {
    OBS_MODE_NONE = 0,
    OBS_MODE_FIXED = 1,
    OBS_MODE_IN_EYE = 2,
    OBS_MODE_CHASE = 3,
    OBS_MODE_ROAMING = 4,
    OBS_MODE_DIRECTED = 5,
    NUM_OBSERVER_MODES = 6
}

declare const enum OnFrame {
    ONFRAME_UNKNOWN = 0,
    ONFRAME_TRUE = 1,
    ONFRAME_FALSE = 2
}

declare const enum PerformanceMode_t {
    PM_NORMAL = 0,
    PM_NO_GIBS = 1,
    PM_FULL_GIBS = 2,
    PM_REDUCED_GIBS = 3
}

declare const enum PlayerAnimEvent_t {
    PLAYERANIMEVENT_FIRE_GUN_PRIMARY = 0,
    PLAYERANIMEVENT_FIRE_GUN_SECONDARY = 1,
    PLAYERANIMEVENT_GRENADE_PULL_PIN = 2,
    PLAYERANIMEVENT_THROW_GRENADE = 3,
    PLAYERANIMEVENT_JUMP = 4,
    PLAYERANIMEVENT_RELOAD = 5,
    PLAYERANIMEVENT_CLEAR_FIRING = 6,
    PLAYERANIMEVENT_DEPLOY = 7,
    PLAYERANIMEVENT_SILENCER_STATE = 8,
    PLAYERANIMEVENT_SILENCER_TOGGLE = 9,
    PLAYERANIMEVENT_THROW_GRENADE_UNDERHAND = 10,
    PLAYERANIMEVENT_CATCH_WEAPON = 11,
    PLAYERANIMEVENT_LOOKATWEAPON_REQUEST = 12,
    PLAYERANIMEVENT_RELOAD_CANCEL_LOOKATWEAPON = 13,
    PLAYERANIMEVENT_HAULBACK = 14,
    PLAYERANIMEVENT_IDLE = 15,
    PLAYERANIMEVENT_STRIKE_HIT = 16,
    PLAYERANIMEVENT_STRIKE_MISS = 17,
    PLAYERANIMEVENT_BACKSTAB = 18,
    PLAYERANIMEVENT_DRYFIRE = 19,
    PLAYERANIMEVENT_FIDGET = 20,
    PLAYERANIMEVENT_RELEASE = 21,
    PLAYERANIMEVENT_TAUNT = 22,
    PLAYERANIMEVENT_COUNT = 23
}

declare const enum PlayerConnectedState {
    PlayerNeverConnected = -1,
    PlayerConnected = 0,
    PlayerConnecting = 1,
    PlayerReconnecting = 2,
    PlayerDisconnecting = 3,
    PlayerDisconnected = 4,
    PlayerReserved = 5
}

declare const enum PointTemplateClientOnlyEntityBehavior_t {
    CREATE_FOR_CURRENTLY_CONNECTED_CLIENTS_ONLY = 0,
    CREATE_FOR_CLIENTS_WHO_CONNECT_LATER = 1
}

declare const enum PointTemplateOwnerSpawnGroupType_t {
    INSERT_INTO_POINT_TEMPLATE_SPAWN_GROUP = 0,
    INSERT_INTO_CURRENTLY_ACTIVE_SPAWN_GROUP = 1,
    INSERT_INTO_NEWLY_CREATED_SPAWN_GROUP = 2
}

declare const enum PointWorldTextJustifyHorizontal_t {
    POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_LEFT = 0,
    POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_CENTER = 1,
    POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_RIGHT = 2
}

declare const enum PointWorldTextJustifyVertical_t {
    POINT_WORLD_TEXT_JUSTIFY_VERTICAL_BOTTOM = 0,
    POINT_WORLD_TEXT_JUSTIFY_VERTICAL_CENTER = 1,
    POINT_WORLD_TEXT_JUSTIFY_VERTICAL_TOP = 2
}

declare const enum PointWorldTextReorientMode_t {
    POINT_WORLD_TEXT_REORIENT_NONE = 0,
    POINT_WORLD_TEXT_REORIENT_AROUND_UP = 1
}

declare const enum PreviewCharacterMode {
    DIORAMA = 0,
    MAIN_MENU = 1,
    BUY_MENU = 2,
    TEAM_SELECT = 3,
    END_OF_MATCH = 4,
    INVENTORY_INSPECT = 5,
    WALKING = 6,
    TEAM_INTRO = 7,
    WINGMAN_INTRO = 8,
    BANNER = 9
}

declare const enum PreviewEOMCelebration {
    WALKUP = 0,
    PUNCHING = 1,
    SWAGGER = 2,
    DROPDOWN = 3,
    STRETCH = 4,
    SWAT_FEMALE = 5,
    MASK_F = 6,
    GUERILLA = 7,
    GUERILLA02 = 8,
    GENDARMERIE = 9,
    SCUBA_FEMALE = 10,
    SCUBA_MALE = 11,
    AVA_DEFEAT = 12,
    GENDARMERIE_DEFEAT = 13,
    MAE_DEFEAT = 14,
    RICKSAW_DEFEAT = 15,
    SCUBA_FEMALE_DEFEAT = 16,
    SCUBA_MALE_DEFEAT = 17,
    CRASSWATER_DEFEAT = 18,
    DARRYL_DEFEAT = 19,
    DOCTOR_DEFEAT = 20,
    MUHLIK_DEFEAT = 21,
    VYPA_DEFEAT = 22
}

declare const enum PreviewWeaponState {
    DROPPED = 0,
    HOLSTERED = 1,
    DEPLOYED = 2,
    PLANTED = 3,
    INSPECT = 4,
    ICON = 5
}

declare const enum RenderFx_t {
    kRenderFxNone = 0,
    kRenderFxPulseSlow = 1,
    kRenderFxPulseFast = 2,
    kRenderFxPulseSlowWide = 3,
    kRenderFxPulseFastWide = 4,
    kRenderFxFadeSlow = 5,
    kRenderFxFadeFast = 6,
    kRenderFxSolidSlow = 7,
    kRenderFxSolidFast = 8,
    kRenderFxStrobeSlow = 9,
    kRenderFxStrobeFast = 10,
    kRenderFxStrobeFaster = 11,
    kRenderFxFlickerSlow = 12,
    kRenderFxFlickerFast = 13,
    kRenderFxNoDissipation = 14,
    kRenderFxFadeOut = 15,
    kRenderFxFadeIn = 16,
    kRenderFxPulseFastWider = 17,
    kRenderFxGlowShell = 18,
    kRenderFxMax = 19
}

declare const enum RenderMode_t {
    kRenderNormal = 0,
    kRenderTransColor = 1,
    kRenderTransTexture = 2,
    kRenderGlow = 3,
    kRenderTransAlpha = 4,
    kRenderTransAdd = 5,
    kRenderEnvironmental = 6,
    kRenderTransAddFrameBlend = 7,
    kRenderTransAlphaAdd = 8,
    kRenderWorldGlow = 9,
    kRenderNone = 10,
    kRenderDevVisualizer = 11,
    kRenderModeCount = 12
}

declare const enum RumbleEffect_t {
    RUMBLE_INVALID = -1,
    RUMBLE_STOP_ALL = 0,
    RUMBLE_PISTOL = 1,
    RUMBLE_357 = 2,
    RUMBLE_SMG1 = 3,
    RUMBLE_AR2 = 4,
    RUMBLE_SHOTGUN_SINGLE = 5,
    RUMBLE_SHOTGUN_DOUBLE = 6,
    RUMBLE_AR2_ALT_FIRE = 7,
    RUMBLE_RPG_MISSILE = 8,
    RUMBLE_CROWBAR_SWING = 9,
    RUMBLE_AIRBOAT_GUN = 10,
    RUMBLE_JEEP_ENGINE_LOOP = 11,
    RUMBLE_FLAT_LEFT = 12,
    RUMBLE_FLAT_RIGHT = 13,
    RUMBLE_FLAT_BOTH = 14,
    RUMBLE_DMG_LOW = 15,
    RUMBLE_DMG_MED = 16,
    RUMBLE_DMG_HIGH = 17,
    RUMBLE_FALL_LONG = 18,
    RUMBLE_FALL_SHORT = 19,
    RUMBLE_PHYSCANNON_OPEN = 20,
    RUMBLE_PHYSCANNON_PUNT = 21,
    RUMBLE_PHYSCANNON_LOW = 22,
    RUMBLE_PHYSCANNON_MEDIUM = 23,
    RUMBLE_PHYSCANNON_HIGH = 24,
    NUM_RUMBLE_EFFECTS = 25
}

declare const enum ScriptedHeldWeaponBehavior_t {
    eInvalid = -1,
    eHolster = 0,
    eDeploy = 1,
    eDrop = 2
}

declare const enum ScriptedMoveTo_t {
    eWait = 0,
    eMoveWithGait = 3,
    eTeleport = 4,
    eWaitFacing = 5,
    eObsoleteBackCompat1 = 1,
    eObsoleteBackCompat2 = 2
}

declare const enum ScriptedOnDeath_t {
    SS_ONDEATH_NOT_APPLICABLE = -1,
    SS_ONDEATH_UNDEFINED = 0,
    SS_ONDEATH_RAGDOLL = 1,
    SS_ONDEATH_ANIMATED_DEATH = 2
}

declare const enum SequenceFinishNotifyState_t {
    eDoNotNotify = 0,
    eNotifyWhenFinished = 1,
    eNotifyTriggered = 2
}

declare const enum ShadowType_t {
    SHADOWS_NONE = 0,
    SHADOWS_SIMPLE = 1
}

declare const enum ShakeCommand_t {
    SHAKE_START = 0,
    SHAKE_STOP = 1,
    SHAKE_AMPLITUDE = 2,
    SHAKE_FREQUENCY = 3,
    SHAKE_START_RUMBLEONLY = 4,
    SHAKE_START_NORUMBLE = 5
}

declare const enum ShardSolid_t {
    SHARD_SOLID = 0,
    SHARD_DEBRIS = 1
}

declare const enum ShatterDamageCause {
    SHATTERDAMAGE_BULLET = 0,
    SHATTERDAMAGE_MELEE = 1,
    SHATTERDAMAGE_THROWN = 2,
    SHATTERDAMAGE_SCRIPT = 3,
    SHATTERDAMAGE_EXPLOSIVE = 4
}

declare const enum ShatterGlassStressType {
    SHATTERGLASS_BLUNT = 0,
    SHATTERGLASS_BALLISTIC = 1,
    SHATTERGLASS_PULSE = 2,
    SHATTERGLASS_EXPLOSIVE = 3
}

declare const enum SolidType_t {
    SOLID_NONE = 0,
    SOLID_BSP = 1,
    SOLID_BBOX = 2,
    SOLID_OBB = 3,
    SOLID_SPHERE = 4,
    SOLID_POINT = 5,
    SOLID_VPHYSICS = 6,
    SOLID_CAPSULE = 7,
    SOLID_LAST = 8
}

declare const enum StanceType_t {
    STANCE_CURRENT = -1,
    STANCE_DEFAULT = 0,
    STANCE_CROUCHING = 1,
    STANCE_PRONE = 2,
    NUM_STANCES = 3
}

declare const enum SubclassVDataChangeType_t {
    SUBCLASS_VDATA_CREATED = 0,
    SUBCLASS_VDATA_SUBCLASS_CHANGED = 1,
    SUBCLASS_VDATA_RELOADED = 2
}

declare const enum SurroundingBoundsType_t {
    USE_OBB_COLLISION_BOUNDS = 0,
    USE_BEST_COLLISION_BOUNDS = 1,
    USE_HITBOXES = 2,
    USE_SPECIFIED_BOUNDS = 3,
    USE_GAME_CODE = 4,
    USE_ROTATION_EXPANDED_BOUNDS = 5,
    USE_ROTATION_EXPANDED_ORIENTED_BOUNDS = 6,
    USE_COLLISION_BOUNDS_NEVER_VPHYSICS = 7,
    USE_ROTATION_EXPANDED_SEQUENCE_BOUNDS = 8,
    SURROUNDING_TYPE_BIT_COUNT = 3
}

declare const enum TakeDamageFlags_t {
    DFLAG_NONE = 0,
    DFLAG_SUPPRESS_HEALTH_CHANGES = 1,
    DFLAG_SUPPRESS_PHYSICS_FORCE = 2,
    DFLAG_SUPPRESS_EFFECTS = 4,
    DFLAG_PREVENT_DEATH = 8,
    DFLAG_FORCE_DEATH = 16,
    DFLAG_ALWAYS_GIB = 32,
    DFLAG_NEVER_GIB = 64,
    DFLAG_REMOVE_NO_RAGDOLL = 128,
    DFLAG_SUPPRESS_DAMAGE_MODIFICATION = 256,
    DFLAG_ALWAYS_FIRE_DAMAGE_EVENTS = 512,
    DFLAG_RADIUS_DMG = 1024,
    DFLAG_FORCEREDUCEARMOR_DMG = 2048,
    DFLAG_SUPPRESS_INTERRUPT_FLINCH = 4096,
    DMG_LASTDFLAG = 4096,
    DFLAG_IGNORE_ARMOR = 8192,
    DFLAG_SUPPRESS_UTILREMOVE = 16384
}

declare const enum TimelineCompression_t {
    TIMELINE_COMPRESSION_SUM = 0,
    TIMELINE_COMPRESSION_COUNT_PER_INTERVAL = 1,
    TIMELINE_COMPRESSION_AVERAGE = 2,
    TIMELINE_COMPRESSION_AVERAGE_BLEND = 3,
    TIMELINE_COMPRESSION_TOTAL = 4
}

declare const enum ValueRemapperHapticsType_t {
    HaticsType_Default = 0,
    HaticsType_None = 1
}

declare const enum ValueRemapperInputType_t {
    InputType_PlayerShootPosition = 0,
    InputType_PlayerShootPositionAroundAxis = 1
}

declare const enum ValueRemapperMomentumType_t {
    MomentumType_None = 0,
    MomentumType_Friction = 1,
    MomentumType_SpringTowardSnapValue = 2,
    MomentumType_SpringAwayFromSnapValue = 3
}

declare const enum ValueRemapperOutputType_t {
    OutputType_AnimationCycle = 0,
    OutputType_RotationX = 1,
    OutputType_RotationY = 2,
    OutputType_RotationZ = 3
}

declare const enum ValueRemapperRatchetType_t {
    RatchetType_Absolute = 0,
    RatchetType_EachEngage = 1
}

declare const enum WaterLevel_t {
    WL_NotInWater = 0,
    WL_Feet = 1,
    WL_Knees = 2,
    WL_Waist = 3,
    WL_Chest = 4,
    WL_FullyUnderwater = 5,
    WL_Count = 6
}

declare const enum WeaponAttackType_t {
    eInvalid = -1,
    ePrimary = 0,
    eSecondary = 1,
    eCount = 2
}

declare const enum WeaponSound_t {
    WEAPON_SOUND_EMPTY = 0,
    WEAPON_SOUND_SECONDARY_EMPTY = 1,
    WEAPON_SOUND_SINGLE = 2,
    WEAPON_SOUND_SECONDARY_ATTACK = 3,
    WEAPON_SOUND_MELEE_MISS = 4,
    WEAPON_SOUND_MELEE_HIT = 5,
    WEAPON_SOUND_MELEE_HIT_WORLD = 6,
    WEAPON_SOUND_MELEE_HIT_PLAYER = 7,
    WEAPON_SOUND_MELEE_HIT_NPC = 8,
    WEAPON_SOUND_SPECIAL1 = 9,
    WEAPON_SOUND_SPECIAL2 = 10,
    WEAPON_SOUND_SPECIAL3 = 11,
    WEAPON_SOUND_NEARLYEMPTY = 12,
    WEAPON_SOUND_IMPACT = 13,
    WEAPON_SOUND_REFLECT = 14,
    WEAPON_SOUND_SECONDARY_IMPACT = 15,
    WEAPON_SOUND_SECONDARY_REFLECT = 16,
    WEAPON_SOUND_RELOAD = 17,
    WEAPON_SOUND_SINGLE_ACCURATE = 18,
    WEAPON_SOUND_ZOOM_IN = 19,
    WEAPON_SOUND_ZOOM_OUT = 20,
    WEAPON_SOUND_MOUSE_PRESSED = 21,
    WEAPON_SOUND_DROP = 22,
    WEAPON_SOUND_RADIO_USE = 23,
    WEAPON_SOUND_NUM_TYPES = 24
}

declare const enum WeaponSwitchReason_t {
    eDrawn = 0,
    eEquipped = 1,
    eUserInitiatedSwitchToLast = 2,
    eUserInitiatedSwitchHands = 3
}

declare const enum WorldTextPanelHorizontalAlign_t {
    WORLDTEXT_HORIZONTAL_ALIGN_LEFT = 0,
    WORLDTEXT_HORIZONTAL_ALIGN_CENTER = 1,
    WORLDTEXT_HORIZONTAL_ALIGN_RIGHT = 2
}

declare const enum WorldTextPanelOrientation_t {
    WORLDTEXT_ORIENTATION_DEFAULT = 0,
    WORLDTEXT_ORIENTATION_FACEUSER = 1,
    WORLDTEXT_ORIENTATION_FACEUSER_UPRIGHT = 2
}

declare const enum WorldTextPanelVerticalAlign_t {
    WORLDTEXT_VERTICAL_ALIGN_TOP = 0,
    WORLDTEXT_VERTICAL_ALIGN_CENTER = 1,
    WORLDTEXT_VERTICAL_ALIGN_BOTTOM = 2
}

declare const enum attributeprovidertypes_t {
    PROVIDER_GENERIC = 0,
    PROVIDER_WEAPON = 1
}

declare const enum gear_slot_t {
    GEAR_SLOT_INVALID = -1,
    GEAR_SLOT_RIFLE = 0,
    GEAR_SLOT_PISTOL = 1,
    GEAR_SLOT_KNIFE = 2,
    GEAR_SLOT_GRENADES = 3,
    GEAR_SLOT_C4 = 4,
    GEAR_SLOT_RESERVED_SLOT6 = 5,
    GEAR_SLOT_RESERVED_SLOT7 = 6,
    GEAR_SLOT_RESERVED_SLOT8 = 7,
    GEAR_SLOT_RESERVED_SLOT9 = 8,
    GEAR_SLOT_RESERVED_SLOT10 = 9,
    GEAR_SLOT_RESERVED_SLOT11 = 10,
    GEAR_SLOT_BOOSTS = 11,
    GEAR_SLOT_UTILITY = 12,
    GEAR_SLOT_COUNT = 13,
    GEAR_SLOT_FIRST = 0,
    GEAR_SLOT_LAST = 12
}

declare const enum loadout_slot_t {
    LOADOUT_SLOT_PROMOTED = -2,
    LOADOUT_SLOT_INVALID = -1,
    LOADOUT_SLOT_MELEE = 0,
    LOADOUT_SLOT_C4 = 1,
    LOADOUT_SLOT_FIRST_AUTO_BUY_WEAPON = 0,
    LOADOUT_SLOT_LAST_AUTO_BUY_WEAPON = 1,
    LOADOUT_SLOT_SECONDARY0 = 2,
    LOADOUT_SLOT_SECONDARY1 = 3,
    LOADOUT_SLOT_SECONDARY2 = 4,
    LOADOUT_SLOT_SECONDARY3 = 5,
    LOADOUT_SLOT_SECONDARY4 = 6,
    LOADOUT_SLOT_SECONDARY5 = 7,
    LOADOUT_SLOT_SMG0 = 8,
    LOADOUT_SLOT_SMG1 = 9,
    LOADOUT_SLOT_SMG2 = 10,
    LOADOUT_SLOT_SMG3 = 11,
    LOADOUT_SLOT_SMG4 = 12,
    LOADOUT_SLOT_SMG5 = 13,
    LOADOUT_SLOT_RIFLE0 = 14,
    LOADOUT_SLOT_RIFLE1 = 15,
    LOADOUT_SLOT_RIFLE2 = 16,
    LOADOUT_SLOT_RIFLE3 = 17,
    LOADOUT_SLOT_RIFLE4 = 18,
    LOADOUT_SLOT_RIFLE5 = 19,
    LOADOUT_SLOT_HEAVY0 = 20,
    LOADOUT_SLOT_HEAVY1 = 21,
    LOADOUT_SLOT_HEAVY2 = 22,
    LOADOUT_SLOT_HEAVY3 = 23,
    LOADOUT_SLOT_HEAVY4 = 24,
    LOADOUT_SLOT_HEAVY5 = 25,
    LOADOUT_SLOT_FIRST_WHEEL_WEAPON = 2,
    LOADOUT_SLOT_LAST_WHEEL_WEAPON = 25,
    LOADOUT_SLOT_FIRST_PRIMARY_WEAPON = 8,
    LOADOUT_SLOT_LAST_PRIMARY_WEAPON = 25,
    LOADOUT_SLOT_FIRST_WHEEL_GRENADE = 26,
    LOADOUT_SLOT_GRENADE0 = 26,
    LOADOUT_SLOT_GRENADE1 = 27,
    LOADOUT_SLOT_GRENADE2 = 28,
    LOADOUT_SLOT_GRENADE3 = 29,
    LOADOUT_SLOT_GRENADE4 = 30,
    LOADOUT_SLOT_GRENADE5 = 31,
    LOADOUT_SLOT_LAST_WHEEL_GRENADE = 31,
    LOADOUT_SLOT_EQUIPMENT0 = 32,
    LOADOUT_SLOT_EQUIPMENT1 = 33,
    LOADOUT_SLOT_EQUIPMENT2 = 34,
    LOADOUT_SLOT_EQUIPMENT3 = 35,
    LOADOUT_SLOT_EQUIPMENT4 = 36,
    LOADOUT_SLOT_EQUIPMENT5 = 37,
    LOADOUT_SLOT_FIRST_WHEEL_EQUIPMENT = 32,
    LOADOUT_SLOT_LAST_WHEEL_EQUIPMENT = 37,
    LOADOUT_SLOT_CLOTHING_CUSTOMPLAYER = 38,
    LOADOUT_SLOT_CLOTHING_CUSTOMHEAD = 39,
    LOADOUT_SLOT_CLOTHING_FACEMASK = 40,
    LOADOUT_SLOT_CLOTHING_HANDS = 41,
    LOADOUT_SLOT_FIRST_COSMETIC = 41,
    LOADOUT_SLOT_LAST_COSMETIC = 41,
    LOADOUT_SLOT_CLOTHING_EYEWEAR = 42,
    LOADOUT_SLOT_CLOTHING_HAT = 43,
    LOADOUT_SLOT_CLOTHING_LOWERBODY = 44,
    LOADOUT_SLOT_CLOTHING_TORSO = 45,
    LOADOUT_SLOT_CLOTHING_APPEARANCE = 46,
    LOADOUT_SLOT_MISC0 = 47,
    LOADOUT_SLOT_MISC1 = 48,
    LOADOUT_SLOT_MISC2 = 49,
    LOADOUT_SLOT_MISC3 = 50,
    LOADOUT_SLOT_MISC4 = 51,
    LOADOUT_SLOT_MISC5 = 52,
    LOADOUT_SLOT_MISC6 = 53,
    LOADOUT_SLOT_MUSICKIT = 54,
    LOADOUT_SLOT_FLAIR0 = 55,
    LOADOUT_SLOT_SPRAY0 = 56,
    LOADOUT_SLOT_FIRST_ALL_CHARACTER = 54,
    LOADOUT_SLOT_LAST_ALL_CHARACTER = 56,
    LOADOUT_SLOT_COUNT = 57
}

declare const enum vote_create_failed_t {
    VOTE_FAILED_GENERIC = 0,
    VOTE_FAILED_TRANSITIONING_PLAYERS = 1,
    VOTE_FAILED_RATE_EXCEEDED = 2,
    VOTE_FAILED_YES_MUST_EXCEED_NO = 3,
    VOTE_FAILED_QUORUM_FAILURE = 4,
    VOTE_FAILED_ISSUE_DISABLED = 5,
    VOTE_FAILED_MAP_NOT_FOUND = 6,
    VOTE_FAILED_MAP_NAME_REQUIRED = 7,
    VOTE_FAILED_FAILED_RECENTLY = 8,
    VOTE_FAILED_TEAM_CANT_CALL = 9,
    VOTE_FAILED_WAITINGFORPLAYERS = 10,
    VOTE_FAILED_PLAYERNOTFOUND = 11,
    VOTE_FAILED_CANNOT_KICK_ADMIN = 12,
    VOTE_FAILED_SCRAMBLE_IN_PROGRESS = 13,
    VOTE_FAILED_SPECTATOR = 14,
    VOTE_FAILED_FAILED_RECENT_KICK = 15,
    VOTE_FAILED_FAILED_RECENT_CHANGEMAP = 16,
    VOTE_FAILED_FAILED_RECENT_SWAPTEAMS = 17,
    VOTE_FAILED_FAILED_RECENT_SCRAMBLETEAMS = 18,
    VOTE_FAILED_FAILED_RECENT_RESTART = 19,
    VOTE_FAILED_SWAP_IN_PROGRESS = 20,
    VOTE_FAILED_DISABLED = 21,
    VOTE_FAILED_NEXTLEVEL_SET = 22,
    VOTE_FAILED_TOO_EARLY_SURRENDER = 23,
    VOTE_FAILED_MATCH_PAUSED = 24,
    VOTE_FAILED_MATCH_NOT_PAUSED = 25,
    VOTE_FAILED_NOT_IN_WARMUP = 26,
    VOTE_FAILED_NOT_10_PLAYERS = 27,
    VOTE_FAILED_TIMEOUT_ACTIVE = 28,
    VOTE_FAILED_TIMEOUT_INACTIVE = 29,
    VOTE_FAILED_TIMEOUT_EXHAUSTED = 30,
    VOTE_FAILED_CANT_ROUND_END = 31,
    VOTE_FAILED_REMATCH = 32,
    VOTE_FAILED_CONTINUE = 33,
    VOTE_FAILED_MAX = 34
}

declare const enum SpawnDebugOverrideState_t {
    SPAWN_DEBUG_OVERRIDE_NONE = 0,
    SPAWN_DEBUG_OVERRIDE_FORCE_ENABLED = 1,
    SPAWN_DEBUG_OVERRIDE_FORCE_DISABLED = 2
}

declare const enum SpawnDebugRestrictionOverrideState_t {
    SPAWN_DEBUG_RESTRICT_NONE = 0,
    SPAWN_DEBUG_RESTRICT_IGNORE_MANAGER_DISTANCE_REQS = 1,
    SPAWN_DEBUG_RESTRICT_IGNORE_TEMPLATE_DISTANCE_LOS_REQS = 2,
    SPAWN_DEBUG_RESTRICT_IGNORE_TEMPLATE_COOLDOWN_LIMITS = 4,
    SPAWN_DEBUG_RESTRICT_IGNORE_TARGET_COOLDOWN_LIMITS = 8
}

declare const enum EntityDormancyType_t {
    ENTITY_NOT_DORMANT = 0,
    ENTITY_DORMANT = 1,
    ENTITY_SUSPENDED = 2
}

declare const enum EntityIOTargetType_t {
    ENTITY_IO_TARGET_INVALID = -1,
    ENTITY_IO_TARGET_ENTITYNAME = 2,
    ENTITY_IO_TARGET_EHANDLE = 6,
    ENTITY_IO_TARGET_ENTITYNAME_OR_CLASSNAME = 7
}

declare const enum BloomBlendMode_t {
    BLOOM_BLEND_ADD = 0,
    BLOOM_BLEND_SCREEN = 1,
    BLOOM_BLEND_BLUR = 2
}

declare const enum HorizJustification_e {
    HORIZ_JUSTIFICATION_LEFT = 0,
    HORIZ_JUSTIFICATION_CENTER = 1,
    HORIZ_JUSTIFICATION_RIGHT = 2,
    HORIZ_JUSTIFICATION_NONE = 3
}

declare const enum LayoutPositionType_e {
    LAYOUTPOSITIONTYPE_VIEWPORT_RELATIVE = 0,
    LAYOUTPOSITIONTYPE_FRACTIONAL = 1,
    LAYOUTPOSITIONTYPE_NONE = 2
}

declare const enum VertJustification_e {
    VERT_JUSTIFICATION_TOP = 0,
    VERT_JUSTIFICATION_CENTER = 1,
    VERT_JUSTIFICATION_BOTTOM = 2,
    VERT_JUSTIFICATION_NONE = 3
}

declare const enum ViewFadeMode_t {
    VIEW_FADE_CONSTANT_COLOR = 0,
    VIEW_FADE_MODULATE = 1,
    VIEW_FADE_MOD2X = 2
}

declare const enum FuseVariableAccess_t {
    WRITABLE = 0,
    READ_ONLY = 1
}

declare const enum FuseVariableType_t {
    INVALID = 0,
    BOOL = 1,
    INT8 = 2,
    INT16 = 3,
    INT32 = 4,
    UINT8 = 5,
    UINT16 = 6,
    UINT32 = 7,
    FLOAT32 = 8
}

declare const enum FlexOpCode_t {
    FLEX_OP_CONST = 1,
    FLEX_OP_FETCH1 = 2,
    FLEX_OP_FETCH2 = 3,
    FLEX_OP_ADD = 4,
    FLEX_OP_SUB = 5,
    FLEX_OP_MUL = 6,
    FLEX_OP_DIV = 7,
    FLEX_OP_NEG = 8,
    FLEX_OP_EXP = 9,
    FLEX_OP_OPEN = 10,
    FLEX_OP_CLOSE = 11,
    FLEX_OP_COMMA = 12,
    FLEX_OP_MAX = 13,
    FLEX_OP_MIN = 14,
    FLEX_OP_2WAY_0 = 15,
    FLEX_OP_2WAY_1 = 16,
    FLEX_OP_NWAY = 17,
    FLEX_OP_COMBO = 18,
    FLEX_OP_DOMINATE = 19,
    FLEX_OP_DME_LOWER_EYELID = 20,
    FLEX_OP_DME_UPPER_EYELID = 21,
    FLEX_OP_SQRT = 22,
    FLEX_OP_REMAPVALCLAMPED = 23,
    FLEX_OP_SIN = 24,
    FLEX_OP_COS = 25,
    FLEX_OP_ABS = 26
}

declare const enum MeshDrawPrimitiveFlags_t {
    MESH_DRAW_FLAGS_NONE = 0,
    MESH_DRAW_FLAGS_USE_SHADOW_FAST_PATH = 1,
    MESH_DRAW_FLAGS_USE_COMPRESSED_NORMAL_TANGENT = 2,
    MESH_DRAW_INPUT_LAYOUT_IS_NOT_MATCHED_TO_MATERIAL = 8,
    MESH_DRAW_FLAGS_USE_COMPRESSED_PER_VERTEX_LIGHTING = 16,
    MESH_DRAW_FLAGS_USE_UNCOMPRESSED_PER_VERTEX_LIGHTING = 32,
    MESH_DRAW_FLAGS_CAN_BATCH_WITH_DYNAMIC_SHADER_CONSTANTS = 64,
    MESH_DRAW_FLAGS_DRAW_LAST = 128
}

declare const enum ModelBoneFlexComponent_t {
    MODEL_BONE_FLEX_INVALID = -1,
    MODEL_BONE_FLEX_TX = 0,
    MODEL_BONE_FLEX_TY = 1,
    MODEL_BONE_FLEX_TZ = 2
}

declare const enum ModelConfigAttachmentType_t {
    MODEL_CONFIG_ATTACHMENT_INVALID = -1,
    MODEL_CONFIG_ATTACHMENT_BONE_OR_ATTACHMENT = 0,
    MODEL_CONFIG_ATTACHMENT_ROOT_RELATIVE = 1,
    MODEL_CONFIG_ATTACHMENT_BONEMERGE = 2,
    MODEL_CONFIG_ATTACHMENT_COUNT = 3
}

declare const enum MorphBundleType_t {
    MORPH_BUNDLE_TYPE_NONE = 0,
    MORPH_BUNDLE_TYPE_POSITION_SPEED = 1,
    MORPH_BUNDLE_TYPE_NORMAL_WRINKLE = 2,
    MORPH_BUNDLE_TYPE_COUNT = 3
}

declare const enum MorphFlexControllerRemapType_t {
    MORPH_FLEXCONTROLLER_REMAP_PASSTHRU = 0,
    MORPH_FLEXCONTROLLER_REMAP_2WAY = 1,
    MORPH_FLEXCONTROLLER_REMAP_NWAY = 2,
    MORPH_FLEXCONTROLLER_REMAP_EYELID = 3
}

declare const enum MovementGait_t {
    eInvalid = -1,
    eSlow = 0,
    eMedium = 1,
    eFast = 2,
    eVeryFast = 3,
    eCount = 4
}

declare const enum NavAttributeEnum {
    NAV_MESH_AVOID = 128,
    NAV_MESH_STAIRS = 4096,
    NAV_MESH_NON_ZUP = 32768,
    NAV_MESH_SHORT_HEIGHT = 65536,
    NAV_MESH_NON_ZUP_TRANSITION = 131072,
    NAV_MESH_CROUCH = 65536,
    NAV_MESH_JUMP = 2,
    NAV_MESH_PRECISE = 4,
    NAV_MESH_NO_JUMP = 8,
    NAV_MESH_STOP = 16,
    NAV_MESH_RUN = 32,
    NAV_MESH_WALK = 64,
    NAV_MESH_TRANSIENT = 256,
    NAV_MESH_DONT_HIDE = 512,
    NAV_MESH_STAND = 1024,
    NAV_MESH_NO_HOSTAGES = 2048,
    NAV_MESH_NO_MERGE = 8192,
    NAV_MESH_OBSTACLE_TOP = 16384,
    NAV_ATTR_FIRST_GAME_INDEX = 19,
    NAV_ATTR_LAST_INDEX = 31
}

declare const enum NavDirType {
    NORTH = 0,
    EAST = 1,
    SOUTH = 2,
    WEST = 3,
    NUM_NAV_DIR_TYPE_DIRECTIONS = 4
}

declare const enum ELayoutNodeType {
    ROOT = 0,
    STYLES = 1,
    SCRIPT_BODY = 2,
    SCRIPTS = 3,
    SNIPPETS = 4,
    INCLUDE = 5,
    SNIPPET = 6,
    PANEL = 7,
    PANEL_ATTRIBUTE = 8,
    PANEL_ATTRIBUTE_VALUE = 9,
    REFERENCE_CONTENT = 10,
    REFERENCE_COMPILED = 11,
    REFERENCE_PASSTHROUGH = 12
}

declare const enum EStyleNodeType {
    ROOT = 0,
    EXPRESSION = 1,
    PROPERTY = 2,
    DEFINE = 3,
    IMPORT = 4,
    KEYFRAMES = 5,
    KEYFRAME_SELECTOR = 6,
    STYLE_SELECTOR = 7,
    WHITESPACE = 8,
    EXPRESSION_TEXT = 9,
    EXPRESSION_URL = 10,
    EXPRESSION_CONCAT = 11,
    REFERENCE_CONTENT = 12,
    REFERENCE_COMPILED = 13,
    REFERENCE_PASSTHROUGH = 14,
    COMPILER_CONDITIONAL = 15
}

declare const enum AnimationType_t {
    ANIMATION_TYPE_FIXED_RATE = 0,
    ANIMATION_TYPE_FIT_LIFETIME = 1,
    ANIMATION_TYPE_MANUAL_FRAMES = 2
}

declare const enum BBoxVolumeType_t {
    BBOX_VOLUME = 0,
    BBOX_DIMENSIONS = 1,
    BBOX_MINS_MAXS = 2
}

declare const enum BlurFilterType_t {
    BLURFILTER_GAUSSIAN = 0,
    BLURFILTER_BOX = 1
}

declare const enum ClosestPointTestType_t {
    PARTICLE_CLOSEST_TYPE_BOX = 0,
    PARTICLE_CLOSEST_TYPE_CAPSULE = 1,
    PARTICLE_CLOSEST_TYPE_HYBRID = 2
}

declare const enum Detail2Combo_t {
    DETAIL_2_COMBO_UNINITIALIZED = -1,
    DETAIL_2_COMBO_OFF = 0,
    DETAIL_2_COMBO_ADD = 1,
    DETAIL_2_COMBO_ADD_SELF_ILLUM = 2,
    DETAIL_2_COMBO_MOD2X = 3,
    DETAIL_2_COMBO_MUL = 4,
    DETAIL_2_COMBO_CROSSFADE = 5
}

declare const enum DetailCombo_t {
    DETAIL_COMBO_OFF = 0,
    DETAIL_COMBO_ADD = 1,
    DETAIL_COMBO_ADD_SELF_ILLUM = 2,
    DETAIL_COMBO_MOD2X = 3
}

declare const enum EventTypeSelection_t {
    PARTICLE_EVENT_TYPE_MASK_NONE = 0,
    PARTICLE_EVENT_TYPE_MASK_SPAWNED = 1,
    PARTICLE_EVENT_TYPE_MASK_KILLED = 2,
    PARTICLE_EVENT_TYPE_MASK_COLLISION = 4,
    PARTICLE_EVENT_TYPE_MASK_FIRST_COLLISION = 8,
    PARTICLE_EVENT_TYPE_MASK_COLLISION_STOPPED = 16,
    PARTICLE_EVENT_TYPE_MASK_KILLED_ON_COLLISION = 32,
    PARTICLE_EVENT_TYPE_MASK_USER_1 = 64,
    PARTICLE_EVENT_TYPE_MASK_USER_2 = 128,
    PARTICLE_EVENT_TYPE_MASK_USER_3 = 256,
    PARTICLE_EVENT_TYPE_MASK_USER_4 = 512
}

declare const enum HitboxLerpType_t {
    HITBOX_LERP_LIFETIME = 0,
    HITBOX_LERP_CONSTANT = 1
}

declare const enum InheritableBoolType_t {
    INHERITABLE_BOOL_INHERIT = 0,
    INHERITABLE_BOOL_FALSE = 1,
    INHERITABLE_BOOL_TRUE = 2
}

declare const enum MaterialProxyType_t {
    MATERIAL_PROXY_STATUS_EFFECT = 0,
    MATERIAL_PROXY_TINT = 1
}

declare const enum MissingParentInheritBehavior_t {
    MISSING_PARENT_DO_NOTHING = -1,
    MISSING_PARENT_KILL = 0,
    MISSING_PARENT_FIND_NEW = 1,
    MISSING_PARENT_SAME_INDEX = 2
}

declare const enum ModelHitboxType_t {
    MODEL_HITBOX_TYPE_STANDARD = 0,
    MODEL_HITBOX_TYPE_RAW_BONES = 1,
    MODEL_HITBOX_TYPE_RENDERBOUNDS = 2,
    MODEL_HITBOX_TYPE_SNAPSHOT = 3
}

declare const enum PFuncVisualizationType_t {
    PFUNC_VISUALIZATION_SPHERE_WIREFRAME = 0,
    PFUNC_VISUALIZATION_SPHERE_SOLID = 1,
    PFUNC_VISUALIZATION_BOX = 2,
    PFUNC_VISUALIZATION_RING = 3,
    PFUNC_VISUALIZATION_PLANE = 4,
    PFUNC_VISUALIZATION_LINE = 5,
    PFUNC_VISUALIZATION_CYLINDER = 6
}

declare const enum ParticleAlphaReferenceType_t {
    PARTICLE_ALPHA_REFERENCE_ALPHA_ALPHA = 0,
    PARTICLE_ALPHA_REFERENCE_OPAQUE_ALPHA = 1,
    PARTICLE_ALPHA_REFERENCE_ALPHA_OPAQUE = 2,
    PARTICLE_ALPHA_REFERENCE_OPAQUE_OPAQUE = 3
}

declare const enum ParticleAttrBoxFlags_t {
    PARTICLE_ATTR_BOX_FLAGS_NONE = 0,
    PARTICLE_ATTR_BOX_FLAGS_WATER = 1
}

declare const enum ParticleCollisionMode_t {
    COLLISION_MODE_PER_PARTICLE_TRACE = 3,
    COLLISION_MODE_USE_NEAREST_TRACE = 2,
    COLLISION_MODE_PER_FRAME_PLANESET = 1,
    COLLISION_MODE_INITIAL_TRACE_DOWN = 0,
    COLLISION_MODE_DISABLED = -1
}

declare const enum ParticleColorBlendMode_t {
    PARTICLEBLEND_DEFAULT = 0,
    PARTICLEBLEND_OVERLAY = 1,
    PARTICLEBLEND_DARKEN = 2,
    PARTICLEBLEND_LIGHTEN = 3,
    PARTICLEBLEND_MULTIPLY = 4
}

declare const enum ParticleColorBlendType_t {
    PARTICLE_COLOR_BLEND_MULTIPLY = 0,
    PARTICLE_COLOR_BLEND_MULTIPLY2X = 1,
    PARTICLE_COLOR_BLEND_DIVIDE = 2,
    PARTICLE_COLOR_BLEND_ADD = 3,
    PARTICLE_COLOR_BLEND_SUBTRACT = 4,
    PARTICLE_COLOR_BLEND_MOD2X = 5,
    PARTICLE_COLOR_BLEND_SCREEN = 6,
    PARTICLE_COLOR_BLEND_MAX = 7,
    PARTICLE_COLOR_BLEND_MIN = 8,
    PARTICLE_COLOR_BLEND_REPLACE = 9,
    PARTICLE_COLOR_BLEND_AVERAGE = 10,
    PARTICLE_COLOR_BLEND_NEGATE = 11,
    PARTICLE_COLOR_BLEND_LUMINANCE = 12
}

declare const enum ParticleControlPointAxis_t {
    PARTICLE_CP_AXIS_X = 0,
    PARTICLE_CP_AXIS_Y = 1,
    PARTICLE_CP_AXIS_Z = 2,
    PARTICLE_CP_AXIS_NEGATIVE_X = 3,
    PARTICLE_CP_AXIS_NEGATIVE_Y = 4,
    PARTICLE_CP_AXIS_NEGATIVE_Z = 5
}

declare const enum ParticleDepthFeatheringMode_t {
    PARTICLE_DEPTH_FEATHERING_OFF = 0,
    PARTICLE_DEPTH_FEATHERING_ON_OPTIONAL = 1,
    PARTICLE_DEPTH_FEATHERING_ON_REQUIRED = 2
}

declare const enum ParticleDetailLevel_t {
    PARTICLEDETAIL_LOW = 0,
    PARTICLEDETAIL_MEDIUM = 1,
    PARTICLEDETAIL_HIGH = 2,
    PARTICLEDETAIL_ULTRA = 3
}

declare const enum ParticleDirectionNoiseType_t {
    PARTICLE_DIR_NOISE_PERLIN = 0,
    PARTICLE_DIR_NOISE_CURL = 1,
    PARTICLE_DIR_NOISE_WORLEY_BASIC = 2
}

declare const enum ParticleEndcapMode_t {
    PARTICLE_ENDCAP_ALWAYS_ON = -1,
    PARTICLE_ENDCAP_ENDCAP_OFF = 0,
    PARTICLE_ENDCAP_ENDCAP_ON = 1
}

declare const enum ParticleFalloffFunction_t {
    PARTICLE_FALLOFF_CONSTANT = 0,
    PARTICLE_FALLOFF_LINEAR = 1,
    PARTICLE_FALLOFF_EXPONENTIAL = 2
}

declare const enum ParticleFogType_t {
    PARTICLE_FOG_GAME_DEFAULT = 0,
    PARTICLE_FOG_ENABLED = 1,
    PARTICLE_FOG_DISABLED = 2
}

declare const enum ParticleHitboxBiasType_t {
    PARTICLE_HITBOX_BIAS_ENTITY = 0,
    PARTICLE_HITBOX_BIAS_HITBOX = 1
}

declare const enum ParticleHitboxDataSelection_t {
    PARTICLE_HITBOX_AVERAGE_SPEED = 0,
    PARTICLE_HITBOX_COUNT = 1
}

declare const enum ParticleImpulseType_t {
    IMPULSE_TYPE_NONE = 0,
    IMPULSE_TYPE_GENERIC = 1,
    IMPULSE_TYPE_ROPE = 2,
    IMPULSE_TYPE_EXPLOSION = 4,
    IMPULSE_TYPE_EXPLOSION_UNDERWATER = 8,
    IMPULSE_TYPE_PARTICLE_SYSTEM = 16
}

declare const enum ParticleLightBehaviorChoiceList_t {
    PARTICLE_LIGHT_BEHAVIOR_FOLLOW_DIRECTION = 0,
    PARTICLE_LIGHT_BEHAVIOR_ROPE = 1,
    PARTICLE_LIGHT_BEHAVIOR_TRAILS = 2
}

declare const enum ParticleLightFogLightingMode_t {
    PARTICLE_LIGHT_FOG_LIGHTING_MODE_NONE = 0,
    PARTICLE_LIGHT_FOG_LIGHTING_MODE_DYNAMIC = 2,
    PARTICLE_LIGHT_FOG_LIGHTING_MODE_DYNAMIC_NOSHADOWS = 4
}

declare const enum ParticleLightTypeChoiceList_t {
    PARTICLE_LIGHT_TYPE_POINT = 0,
    PARTICLE_LIGHT_TYPE_SPOT = 1,
    PARTICLE_LIGHT_TYPE_FX = 2,
    PARTICLE_LIGHT_TYPE_CAPSULE = 3
}

declare const enum ParticleLightUnitChoiceList_t {
    PARTICLE_LIGHT_UNIT_CANDELAS = 0,
    PARTICLE_LIGHT_UNIT_LUMENS = 1
}

declare const enum ParticleLightingQuality_t {
    PARTICLE_LIGHTING_PER_PARTICLE = 0,
    PARTICLE_LIGHTING_PER_VERTEX = 1,
    PARTICLE_LIGHTING_PER_PIXEL = -1
}

declare const enum ParticleLightnintBranchBehavior_t {
    PARTICLE_LIGHTNING_BRANCH_CURRENT_DIR = 0,
    PARTICLE_LIGHTNING_BRANCH_ENDPOINT_DIR = 1
}

declare const enum ParticleMassMode_t {
    PARTICLE_MASSMODE_RADIUS_CUBED = 0,
    PARTICLE_MASSMODE_RADIUS_SQUARED = 2
}

declare const enum ParticleOmni2LightTypeChoiceList_t {
    PARTICLE_OMNI2_LIGHT_TYPE_POINT = 0,
    PARTICLE_OMNI2_LIGHT_TYPE_SPHERE = 1
}

declare const enum ParticleOrientationChoiceList_t {
    PARTICLE_ORIENTATION_SCREEN_ALIGNED = 0,
    PARTICLE_ORIENTATION_SCREEN_Z_ALIGNED = 1,
    PARTICLE_ORIENTATION_WORLD_Z_ALIGNED = 2,
    PARTICLE_ORIENTATION_ALIGN_TO_PARTICLE_NORMAL = 3,
    PARTICLE_ORIENTATION_SCREENALIGN_TO_PARTICLE_NORMAL = 4,
    PARTICLE_ORIENTATION_FULL_3AXIS_ROTATION = 5
}

declare const enum ParticleOrientationSetMode_t {
    PARTICLE_ORIENTATION_SET_FROM_VELOCITY = 0,
    PARTICLE_ORIENTATION_SET_FROM_ROTATIONS = 1
}

declare const enum ParticleOutputBlendMode_t {
    PARTICLE_OUTPUT_BLEND_MODE_ALPHA = 0,
    PARTICLE_OUTPUT_BLEND_MODE_ADD = 1,
    PARTICLE_OUTPUT_BLEND_MODE_BLEND_ADD = 2,
    PARTICLE_OUTPUT_BLEND_MODE_HALF_BLEND_ADD = 3,
    PARTICLE_OUTPUT_BLEND_MODE_NEG_HALF_BLEND_ADD = 4,
    PARTICLE_OUTPUT_BLEND_MODE_MOD2X = 5,
    PARTICLE_OUTPUT_BLEND_MODE_LIGHTEN = 6
}

declare const enum ParticleParentSetMode_t {
    PARTICLE_SET_PARENT_NO = 0,
    PARTICLE_SET_PARENT_IMMEDIATE = 1,
    PARTICLE_SET_PARENT_ROOT = 1
}

declare const enum ParticlePinDistance_t {
    PARTICLE_PIN_DISTANCE_NONE = -1,
    PARTICLE_PIN_DISTANCE_NEIGHBOR = 0,
    PARTICLE_PIN_DISTANCE_FARTHEST = 1,
    PARTICLE_PIN_DISTANCE_FIRST = 2,
    PARTICLE_PIN_DISTANCE_LAST = 3,
    PARTICLE_PIN_DISTANCE_CENTER = 5,
    PARTICLE_PIN_DISTANCE_CP = 6,
    PARTICLE_PIN_DISTANCE_CP_PAIR_EITHER = 7,
    PARTICLE_PIN_DISTANCE_CP_PAIR_BOTH = 8,
    PARTICLE_PIN_SPEED = 9,
    PARTICLE_PIN_COLLECTION_AGE = 10,
    PARTICLE_PIN_FLOAT_VALUE = 11
}

declare const enum ParticlePostProcessPriorityGroup_t {
    PARTICLE_POST_PROCESS_PRIORITY_LEVEL_VOLUME = 0,
    PARTICLE_POST_PROCESS_PRIORITY_LEVEL_OVERRIDE = 1,
    PARTICLE_POST_PROCESS_PRIORITY_GAMEPLAY_EFFECT = 2,
    PARTICLE_POST_PROCESS_PRIORITY_GAMEPLAY_STATE_LOW = 3,
    PARTICLE_POST_PROCESS_PRIORITY_GAMEPLAY_STATE_HIGH = 4,
    PARTICLE_POST_PROCESS_PRIORITY_GLOBAL_UI = 5
}

declare const enum ParticleReplicationMode_t {
    PARTICLE_REPLICATIONMODE_NONE = 0,
    PARTICLE_REPLICATIONMODE_REPLICATE_FOR_EACH_PARENT_PARTICLE = 1
}

declare const enum ParticleRotationLockType_t {
    PARTICLE_ROTATION_LOCK_NONE = 0,
    PARTICLE_ROTATION_LOCK_ROTATIONS = 1,
    PARTICLE_ROTATION_LOCK_NORMAL = 2
}

declare const enum ParticleSelection_t {
    PARTICLE_SELECTION_FIRST = 0,
    PARTICLE_SELECTION_LAST = 1,
    PARTICLE_SELECTION_NUMBER = 2
}

declare const enum ParticleSequenceCropOverride_t {
    PARTICLE_SEQUENCE_CROP_OVERRIDE_DEFAULT = -1,
    PARTICLE_SEQUENCE_CROP_OVERRIDE_FORCE_OFF = 0,
    PARTICLE_SEQUENCE_CROP_OVERRIDE_FORCE_ON = 1
}

declare const enum ParticleSetMethod_t {
    PARTICLE_SET_REPLACE_VALUE = 0,
    PARTICLE_SET_SCALE_INITIAL_VALUE = 1,
    PARTICLE_SET_ADD_TO_INITIAL_VALUE = 2,
    PARTICLE_SET_RAMP_CURRENT_VALUE = 3,
    PARTICLE_SET_SCALE_CURRENT_VALUE = 4,
    PARTICLE_SET_ADD_TO_CURRENT_VALUE = 5
}

declare const enum ParticleSortingChoiceList_t {
    PARTICLE_SORTING_NEAREST = 0,
    PARTICLE_SORTING_CREATION_TIME = 1
}

declare const enum ParticleTextureLayerBlendType_t {
    SPRITECARD_TEXTURE_BLEND_MULTIPLY = 0,
    SPRITECARD_TEXTURE_BLEND_MOD2X = 1,
    SPRITECARD_TEXTURE_BLEND_REPLACE = 2,
    SPRITECARD_TEXTURE_BLEND_ADD = 3,
    SPRITECARD_TEXTURE_BLEND_SUBTRACT = 4,
    SPRITECARD_TEXTURE_BLEND_AVERAGE = 5,
    SPRITECARD_TEXTURE_BLEND_LUMINANCE = 6
}

declare const enum ParticleTopology_t {
    PARTICLE_TOPOLOGY_POINTS = 0,
    PARTICLE_TOPOLOGY_LINES = 1,
    PARTICLE_TOPOLOGY_TRIS = 2,
    PARTICLE_TOPOLOGY_QUADS = 3,
    PARTICLE_TOPOLOGY_CUBES = 4
}

declare const enum ParticleTraceMissBehavior_t {
    PARTICLE_TRACE_MISS_BEHAVIOR_NONE = 0,
    PARTICLE_TRACE_MISS_BEHAVIOR_KILL = 1,
    PARTICLE_TRACE_MISS_BEHAVIOR_TRACE_END = 2
}

declare const enum ParticleTraceSet_t {
    PARTICLE_TRACE_SET_ALL = 0,
    PARTICLE_TRACE_SET_STATIC = 1,
    PARTICLE_TRACE_SET_STATIC_AND_KEYFRAMED = 2,
    PARTICLE_TRACE_SET_DYNAMIC = 3
}

declare const enum ParticleVRHandChoiceList_t {
    PARTICLE_VRHAND_LEFT = 0,
    PARTICLE_VRHAND_RIGHT = 1,
    PARTICLE_VRHAND_CP = 2,
    PARTICLE_VRHAND_CP_OBJECT = 3
}

declare const enum PetGroundType_t {
    PET_GROUND_NONE = 0,
    PET_GROUND_GRID = 1,
    PET_GROUND_PLANE = 2
}

declare const enum RenderModelSubModelFieldType_t {
    SUBMODEL_AS_BODYGROUP_SUBMODEL = 0,
    SUBMODEL_AS_MESHGROUP_INDEX = 1,
    SUBMODEL_AS_MESHGROUP_MASK = 2,
    SUBMODEL_IGNORED_USE_MODEL_DEFAULT_MESHGROUP_MASK = 3
}

declare const enum ScalarExpressionType_t {
    SCALAR_EXPRESSION_UNINITIALIZED = -1,
    SCALAR_EXPRESSION_ADD = 0,
    SCALAR_EXPRESSION_SUBTRACT = 1,
    SCALAR_EXPRESSION_MUL = 2,
    SCALAR_EXPRESSION_DIVIDE = 3,
    SCALAR_EXPRESSION_INPUT_1 = 4,
    SCALAR_EXPRESSION_MIN = 5,
    SCALAR_EXPRESSION_MAX = 6,
    SCALAR_EXPRESSION_MOD = 7
}

declare const enum SnapshotIndexType_t {
    SNAPSHOT_INDEX_INCREMENT = 0,
    SNAPSHOT_INDEX_DIRECT = 1
}

declare const enum SpriteCardPerParticleScale_t {
    SPRITECARD_TEXTURE_PP_SCALE_NONE = 0,
    SPRITECARD_TEXTURE_PP_SCALE_PARTICLE_AGE = 1,
    SPRITECARD_TEXTURE_PP_SCALE_ANIMATION_FRAME = 2,
    SPRITECARD_TEXTURE_PP_SCALE_SHADER_EXTRA_DATA1 = 3,
    SPRITECARD_TEXTURE_PP_SCALE_SHADER_EXTRA_DATA2 = 4,
    SPRITECARD_TEXTURE_PP_SCALE_PARTICLE_ALPHA = 5,
    SPRITECARD_TEXTURE_PP_SCALE_SHADER_RADIUS = 6,
    SPRITECARD_TEXTURE_PP_SCALE_ROLL = 7,
    SPRITECARD_TEXTURE_PP_SCALE_YAW = 8,
    SPRITECARD_TEXTURE_PP_SCALE_PITCH = 9,
    SPRITECARD_TEXTURE_PP_SCALE_RANDOM = 10,
    SPRITECARD_TEXTURE_PP_SCALE_NEG_RANDOM = 11,
    SPRITECARD_TEXTURE_PP_SCALE_RANDOM_TIME = 12,
    SPRITECARD_TEXTURE_PP_SCALE_NEG_RANDOM_TIME = 13
}

declare const enum SpriteCardShaderType_t {
    SPRITECARD_SHADER_BASE = 0,
    SPRITECARD_SHADER_CUSTOM = 1
}

declare const enum SpriteCardTextureChannel_t {
    SPRITECARD_TEXTURE_CHANNEL_MIX_RGB = 0,
    SPRITECARD_TEXTURE_CHANNEL_MIX_RGBA = 1,
    SPRITECARD_TEXTURE_CHANNEL_MIX_A = 2,
    SPRITECARD_TEXTURE_CHANNEL_MIX_RGB_A = 3,
    SPRITECARD_TEXTURE_CHANNEL_MIX_RGB_ALPHAMASK = 4,
    SPRITECARD_TEXTURE_CHANNEL_MIX_RGB_RGBMASK = 5,
    SPRITECARD_TEXTURE_CHANNEL_MIX_RGBA_RGBALPHA = 6,
    SPRITECARD_TEXTURE_CHANNEL_MIX_A_RGBALPHA = 7,
    SPRITECARD_TEXTURE_CHANNEL_MIX_RGB_A_RGBALPHA = 8,
    SPRITECARD_TEXTURE_CHANNEL_MIX_R = 9,
    SPRITECARD_TEXTURE_CHANNEL_MIX_G = 10,
    SPRITECARD_TEXTURE_CHANNEL_MIX_B = 11,
    SPRITECARD_TEXTURE_CHANNEL_MIX_RALPHA = 12,
    SPRITECARD_TEXTURE_CHANNEL_MIX_GALPHA = 13,
    SPRITECARD_TEXTURE_CHANNEL_MIX_BALPHA = 14
}

declare const enum SpriteCardTextureType_t {
    SPRITECARD_TEXTURE_DIFFUSE = 0,
    SPRITECARD_TEXTURE_ZOOM = 1,
    SPRITECARD_TEXTURE_1D_COLOR_LOOKUP = 2,
    SPRITECARD_TEXTURE_UVDISTORTION = 3,
    SPRITECARD_TEXTURE_UVDISTORTION_ZOOM = 4,
    SPRITECARD_TEXTURE_NORMALMAP = 5,
    SPRITECARD_TEXTURE_ANIMMOTIONVEC = 6,
    SPRITECARD_TEXTURE_SPHERICAL_HARMONICS_A = 7,
    SPRITECARD_TEXTURE_SPHERICAL_HARMONICS_B = 8,
    SPRITECARD_TEXTURE_SPHERICAL_HARMONICS_C = 9
}

declare const enum StandardLightingAttenuationStyle_t {
    LIGHT_STYLE_OLD = 0,
    LIGHT_STYLE_NEW = 1
}

declare const enum TextureRepetitionMode_t {
    TEXTURE_REPETITION_PARTICLE = 0,
    TEXTURE_REPETITION_PATH = 1
}

declare const enum VectorExpressionType_t {
    VECTOR_EXPRESSION_UNINITIALIZED = -1,
    VECTOR_EXPRESSION_ADD = 0,
    VECTOR_EXPRESSION_SUBTRACT = 1,
    VECTOR_EXPRESSION_MUL = 2,
    VECTOR_EXPRESSION_DIVIDE = 3,
    VECTOR_EXPRESSION_INPUT_1 = 4,
    VECTOR_EXPRESSION_MIN = 5,
    VECTOR_EXPRESSION_MAX = 6,
    VECTOR_EXPRESSION_CROSSPRODUCT = 7
}

declare const enum VectorFloatExpressionType_t {
    VECTOR_FLOAT_EXPRESSION_UNINITIALIZED = -1,
    VECTOR_FLOAT_EXPRESSION_DOTPRODUCT = 0,
    VECTOR_FLOAT_EXPRESSION_DISTANCE = 1,
    VECTOR_FLOAT_EXPRESSION_DISTANCESQR = 2,
    VECTOR_FLOAT_EXPRESSION_INPUT1_LENGTH = 3,
    VECTOR_FLOAT_EXPRESSION_INPUT1_LENGTHSQR = 4,
    VECTOR_FLOAT_EXPRESSION_INPUT1_NOISE = 5
}

declare const enum PFNoiseModifier_t {
    PF_NOISE_MODIFIER_NONE = 0,
    PF_NOISE_MODIFIER_LINES = 1,
    PF_NOISE_MODIFIER_CLUMPS = 2,
    PF_NOISE_MODIFIER_RINGS = 3
}

declare const enum PFNoiseTurbulence_t {
    PF_NOISE_TURB_NONE = 0,
    PF_NOISE_TURB_HIGHLIGHT = 1,
    PF_NOISE_TURB_FEEDBACK = 2,
    PF_NOISE_TURB_LOOPY = 3,
    PF_NOISE_TURB_CONTRAST = 4,
    PF_NOISE_TURB_ALTERNATE = 5
}

declare const enum PFNoiseType_t {
    PF_NOISE_TYPE_PERLIN = 0,
    PF_NOISE_TYPE_SIMPLEX = 1,
    PF_NOISE_TYPE_WORLEY = 2,
    PF_NOISE_TYPE_CURL = 3
}

declare const enum ParticleFloatBiasType_t {
    PF_BIAS_TYPE_INVALID = -1,
    PF_BIAS_TYPE_STANDARD = 0,
    PF_BIAS_TYPE_GAIN = 1,
    PF_BIAS_TYPE_EXPONENTIAL = 2,
    PF_BIAS_TYPE_COUNT = 3
}

declare const enum ParticleFloatInputMode_t {
    PF_INPUT_MODE_INVALID = -1,
    PF_INPUT_MODE_CLAMPED = 0,
    PF_INPUT_MODE_LOOPED = 1,
    PF_INPUT_MODE_COUNT = 2
}

declare const enum ParticleFloatMapType_t {
    PF_MAP_TYPE_INVALID = -1,
    PF_MAP_TYPE_DIRECT = 0,
    PF_MAP_TYPE_MULT = 1,
    PF_MAP_TYPE_REMAP = 2,
    PF_MAP_TYPE_REMAP_BIASED = 3,
    PF_MAP_TYPE_CURVE = 4,
    PF_MAP_TYPE_NOTCHED = 5,
    PF_MAP_TYPE_ROUND = 6,
    PF_MAP_TYPE_COUNT = 7
}

declare const enum ParticleFloatRandomMode_t {
    PF_RANDOM_MODE_INVALID = -1,
    PF_RANDOM_MODE_CONSTANT = 0,
    PF_RANDOM_MODE_VARYING = 1,
    PF_RANDOM_MODE_COUNT = 2
}

declare const enum ParticleFloatRoundType_t {
    PF_ROUND_TYPE_INVALID = -1,
    PF_ROUND_TYPE_NEAREST = 0,
    PF_ROUND_TYPE_FLOOR = 1,
    PF_ROUND_TYPE_CEIL = 2,
    PF_ROUND_TYPE_COUNT = 3
}

declare const enum ParticleFloatType_t {
    PF_TYPE_INVALID = -1,
    PF_TYPE_LITERAL = 0,
    PF_TYPE_NAMED_VALUE = 1,
    PF_TYPE_RANDOM_UNIFORM = 2,
    PF_TYPE_RANDOM_BIASED = 3,
    PF_TYPE_COLLECTION_AGE = 4,
    PF_TYPE_ENDCAP_AGE = 5,
    PF_TYPE_CONTROL_POINT_COMPONENT = 6,
    PF_TYPE_CONTROL_POINT_CHANGE_AGE = 7,
    PF_TYPE_CONTROL_POINT_SPEED = 8,
    PF_TYPE_PARTICLE_DETAIL_LEVEL = 9,
    PF_TYPE_CONCURRENT_DEF_COUNT = 10,
    PF_TYPE_CLOSEST_CAMERA_DISTANCE = 11,
    PF_TYPE_RENDERER_CAMERA_DISTANCE = 12,
    PF_TYPE_RENDERER_CAMERA_DOT_PRODUCT = 13,
    PF_TYPE_PARTICLE_NOISE = 14,
    PF_TYPE_PARTICLE_AGE = 15,
    PF_TYPE_PARTICLE_AGE_NORMALIZED = 16,
    PF_TYPE_PARTICLE_FLOAT = 17,
    PF_TYPE_PARTICLE_VECTOR_COMPONENT = 18,
    PF_TYPE_PARTICLE_SPEED = 19,
    PF_TYPE_PARTICLE_NUMBER = 20,
    PF_TYPE_PARTICLE_NUMBER_NORMALIZED = 21,
    PF_TYPE_COUNT = 22
}

declare const enum ParticleModelType_t {
    PM_TYPE_INVALID = 0,
    PM_TYPE_NAMED_VALUE_MODEL = 1,
    PM_TYPE_NAMED_VALUE_EHANDLE = 2,
    PM_TYPE_CONTROL_POINT = 3,
    PM_TYPE_COUNT = 4
}

declare const enum ParticleTransformType_t {
    PT_TYPE_INVALID = 0,
    PT_TYPE_NAMED_VALUE = 1,
    PT_TYPE_CONTROL_POINT = 2,
    PT_TYPE_CONTROL_POINT_RANGE = 3,
    PT_TYPE_COUNT = 4
}

declare const enum ParticleVecType_t {
    PVEC_TYPE_INVALID = -1,
    PVEC_TYPE_LITERAL = 0,
    PVEC_TYPE_LITERAL_COLOR = 1,
    PVEC_TYPE_NAMED_VALUE = 2,
    PVEC_TYPE_PARTICLE_VECTOR = 3,
    PVEC_TYPE_PARTICLE_VELOCITY = 4,
    PVEC_TYPE_CP_VALUE = 5,
    PVEC_TYPE_CP_RELATIVE_POSITION = 6,
    PVEC_TYPE_CP_RELATIVE_DIR = 7,
    PVEC_TYPE_CP_RELATIVE_RANDOM_DIR = 8,
    PVEC_TYPE_FLOAT_COMPONENTS = 9,
    PVEC_TYPE_FLOAT_INTERP_CLAMPED = 10,
    PVEC_TYPE_FLOAT_INTERP_OPEN = 11,
    PVEC_TYPE_FLOAT_INTERP_GRADIENT = 12,
    PVEC_TYPE_RANDOM_UNIFORM = 13,
    PVEC_TYPE_RANDOM_UNIFORM_OFFSET = 14,
    PVEC_TYPE_CP_DELTA = 15,
    PVEC_TYPE_CLOSEST_CAMERA_POSITION = 16,
    PVEC_TYPE_COUNT = 17
}

declare const enum JointAxis_t {
    JOINT_AXIS_X = 0,
    JOINT_AXIS_Y = 1,
    JOINT_AXIS_Z = 2,
    JOINT_AXIS_COUNT = 3
}

declare const enum JointMotion_t {
    JOINT_MOTION_FREE = 0,
    JOINT_MOTION_LOCKED = 1,
    JOINT_MOTION_COUNT = 2
}

declare const enum InputLayoutVariation_t {
    INPUT_LAYOUT_VARIATION_DEFAULT = 0,
    INPUT_LAYOUT_VARIATION_STREAM1_INSTANCEID = 1,
    INPUT_LAYOUT_VARIATION_STREAM1_INSTANCEID_MORPH_VERT_ID = 2,
    INPUT_LAYOUT_VARIATION_MAX = 3
}

declare const enum RenderBufferFlags_t {
    RENDER_BUFFER_USAGE_VERTEX_BUFFER = 1,
    RENDER_BUFFER_USAGE_INDEX_BUFFER = 2,
    RENDER_BUFFER_USAGE_SHADER_RESOURCE = 4,
    RENDER_BUFFER_USAGE_UNORDERED_ACCESS = 8,
    RENDER_BUFFER_BYTEADDRESS_BUFFER = 16,
    RENDER_BUFFER_STRUCTURED_BUFFER = 32,
    RENDER_BUFFER_APPEND_CONSUME_BUFFER = 64,
    RENDER_BUFFER_UAV_COUNTER = 128,
    RENDER_BUFFER_UAV_DRAW_INDIRECT_ARGS = 256,
    RENDER_BUFFER_ACCELERATION_STRUCTURE = 512,
    RENDER_BUFFER_SHADER_BINDING_TABLE = 1024,
    RENDER_BUFFER_PER_FRAME_WRITE_ONCE = 2048,
    RENDER_BUFFER_POOL_ALLOCATED = 4096
}

declare const enum RenderMultisampleType_t {
    RENDER_MULTISAMPLE_INVALID = -1,
    RENDER_MULTISAMPLE_NONE = 0,
    RENDER_MULTISAMPLE_2X = 1,
    RENDER_MULTISAMPLE_4X = 2,
    RENDER_MULTISAMPLE_6X = 3,
    RENDER_MULTISAMPLE_8X = 4,
    RENDER_MULTISAMPLE_16X = 5,
    RENDER_MULTISAMPLE_TYPE_COUNT = 6
}

declare const enum RenderPrimitiveType_t {
    RENDER_PRIM_POINTS = 0,
    RENDER_PRIM_LINES = 1,
    RENDER_PRIM_LINES_WITH_ADJACENCY = 2,
    RENDER_PRIM_LINE_STRIP = 3,
    RENDER_PRIM_LINE_STRIP_WITH_ADJACENCY = 4,
    RENDER_PRIM_TRIANGLES = 5,
    RENDER_PRIM_TRIANGLES_WITH_ADJACENCY = 6,
    RENDER_PRIM_TRIANGLE_STRIP = 7,
    RENDER_PRIM_TRIANGLE_STRIP_WITH_ADJACENCY = 8,
    RENDER_PRIM_INSTANCED_QUADS = 9,
    RENDER_PRIM_HETEROGENOUS = 10,
    RENDER_PRIM_COMPUTE_SHADER = 11,
    RENDER_PRIM_TYPE_COUNT = 12
}

declare const enum RenderSlotType_t {
    RENDER_SLOT_INVALID = -1,
    RENDER_SLOT_PER_VERTEX = 0,
    RENDER_SLOT_PER_INSTANCE = 1
}

declare const enum DisableShadows_t {
    kDisableShadows_None = 0,
    kDisableShadows_All = 1,
    kDisableShadows_Baked = 2,
    kDisableShadows_Realtime = 3
}

declare const enum ThreeState_t {
    TRS_FALSE = 0,
    TRS_TRUE = 1,
    TRS_NONE = 2
}

declare const enum fieldtype_t {
    FIELD_VOID = 0,
    FIELD_FLOAT32 = 1,
    FIELD_STRING = 2,
    FIELD_VECTOR = 3,
    FIELD_QUATERNION = 4,
    FIELD_INT32 = 5,
    FIELD_BOOLEAN = 6,
    FIELD_INT16 = 7,
    FIELD_CHARACTER = 8,
    FIELD_COLOR32 = 9,
    FIELD_EMBEDDED = 10,
    FIELD_CUSTOM = 11,
    FIELD_CLASSPTR = 12,
    FIELD_EHANDLE = 13,
    FIELD_POSITION_VECTOR = 14,
    FIELD_TIME = 15,
    FIELD_TICK = 16,
    FIELD_SOUNDNAME = 17,
    FIELD_INPUT = 18,
    FIELD_FUNCTION = 19,
    FIELD_VMATRIX = 20,
    FIELD_VMATRIX_WORLDSPACE = 21,
    FIELD_MATRIX3X4_WORLDSPACE = 22,
    FIELD_INTERVAL = 23,
    FIELD_UNUSED = 24,
    FIELD_VECTOR2D = 25,
    FIELD_INT64 = 26,
    FIELD_VECTOR4D = 27,
    FIELD_RESOURCE = 28,
    FIELD_TYPEUNKNOWN = 29,
    FIELD_CSTRING = 30,
    FIELD_HSCRIPT = 31,
    FIELD_VARIANT = 32,
    FIELD_UINT64 = 33,
    FIELD_FLOAT64 = 34,
    FIELD_POSITIVEINTEGER_OR_NULL = 35,
    FIELD_HSCRIPT_NEW_INSTANCE = 36,
    FIELD_UINT32 = 37,
    FIELD_UTLSTRINGTOKEN = 38,
    FIELD_QANGLE = 39,
    FIELD_NETWORK_ORIGIN_CELL_QUANTIZED_VECTOR = 40,
    FIELD_HMATERIAL = 41,
    FIELD_HMODEL = 42,
    FIELD_NETWORK_QUANTIZED_VECTOR = 43,
    FIELD_NETWORK_QUANTIZED_FLOAT = 44,
    FIELD_DIRECTION_VECTOR_WORLDSPACE = 45,
    FIELD_QANGLE_WORLDSPACE = 46,
    FIELD_QUATERNION_WORLDSPACE = 47,
    FIELD_HSCRIPT_LIGHTBINDING = 48,
    FIELD_V8_VALUE = 49,
    FIELD_V8_OBJECT = 50,
    FIELD_V8_ARRAY = 51,
    FIELD_V8_CALLBACK_INFO = 52,
    FIELD_UTLSTRING = 53,
    FIELD_NETWORK_ORIGIN_CELL_QUANTIZED_POSITION_VECTOR = 54,
    FIELD_HRENDERTEXTURE = 55,
    FIELD_HPARTICLESYSTEMDEFINITION = 56,
    FIELD_UINT8 = 57,
    FIELD_UINT16 = 58,
    FIELD_CTRANSFORM = 59,
    FIELD_CTRANSFORM_WORLDSPACE = 60,
    FIELD_HPOSTPROCESSING = 61,
    FIELD_MATRIX3X4 = 62,
    FIELD_SHIM = 63,
    FIELD_CMOTIONTRANSFORM = 64,
    FIELD_CMOTIONTRANSFORM_WORLDSPACE = 65,
    FIELD_ATTACHMENT_HANDLE = 66,
    FIELD_AMMO_INDEX = 67,
    FIELD_CONDITION_ID = 68,
    FIELD_AI_SCHEDULE_BITS = 69,
    FIELD_MODIFIER_HANDLE = 70,
    FIELD_ROTATION_VECTOR = 71,
    FIELD_ROTATION_VECTOR_WORLDSPACE = 72,
    FIELD_HVDATA = 73,
    FIELD_SCALE32 = 74,
    FIELD_STRING_AND_TOKEN = 75,
    FIELD_ENGINE_TIME = 76,
    FIELD_ENGINE_TICK = 77,
    FIELD_WORLD_GROUP_ID = 78,
    FIELD_GLOBALSYMBOL = 79,
    FIELD_TYPECOUNT = 80
}

declare const enum ChickenActivity {
    IDLE = 0,
    SQUAT = 1,
    WALK = 2,
    RUN = 3,
    GLIDE = 4,
    LAND = 5,
    PANIC = 6,
    TRICK = 7,
    TURN_IN_PLACE = 8
}

declare const enum EOverrideBlockLOS_t {
    BLOCK_LOS_DEFAULT = 0,
    BLOCK_LOS_FORCE_FALSE = 1,
    BLOCK_LOS_FORCE_TRUE = 2
}

declare const enum EntFinderMethod_t {
    ENT_FIND_METHOD_NEAREST = 0,
    ENT_FIND_METHOD_FARTHEST = 1,
    ENT_FIND_METHOD_RANDOM = 2
}

declare const enum Explosions {
    expRandom = 0,
    expDirected = 1,
    expUsePrecise = 2
}

declare const enum ForcedCrouchState_t {
    FORCEDCROUCH_NONE = 0,
    FORCEDCROUCH_CROUCHED = 1,
    FORCEDCROUCH_UNCROUCHED = 2
}

declare const enum FuncDoorSpawnPos_t {
    FUNC_DOOR_SPAWN_CLOSED = 0,
    FUNC_DOOR_SPAWN_OPEN = 1
}

declare const enum LessonPanelLayoutFileTypes_t {
    LAYOUT_HAND_DEFAULT = 0,
    LAYOUT_WORLD_DEFAULT = 1,
    LAYOUT_CUSTOM = 2
}

declare const enum Materials {
    matGlass = 0,
    matWood = 1,
    matMetal = 2,
    matFlesh = 3,
    matCinderBlock = 4,
    matCeilingTile = 5,
    matComputer = 6,
    matUnbreakableGlass = 7,
    matRocks = 8,
    matWeb = 9,
    matNone = 10,
    matLastMaterial = 11
}

declare const enum MoveLinearAuthoredPos_t {
    MOVELINEAR_AUTHORED_AT_START_POSITION = 0,
    MOVELINEAR_AUTHORED_AT_OPEN_POSITION = 1,
    MOVELINEAR_AUTHORED_AT_CLOSED_POSITION = 2
}

declare const enum NPCFollowFormation_t {
    Default = -1,
    CloseCircle = 0,
    WideCircle = 1,
    MediumCircle = 5,
    Sidekick = 6
}

declare const enum PropDoorRotatingOpenDirection_e {
    DOOR_ROTATING_OPEN_BOTH_WAYS = 0,
    DOOR_ROTATING_OPEN_FORWARD = 1,
    DOOR_ROTATING_OPEN_BACKWARD = 2
}

declare const enum PropDoorRotatingSpawnPos_t {
    DOOR_SPAWN_CLOSED = 0,
    DOOR_SPAWN_OPEN_FORWARD = 1,
    DOOR_SPAWN_OPEN_BACK = 2,
    DOOR_SPAWN_AJAR = 3
}

declare const enum SceneOnPlayerDeath_t {
    SCENE_ONPLAYERDEATH_DO_NOTHING = 0,
    SCENE_ONPLAYERDEATH_CANCEL = 1
}

declare const enum ScriptedConflictResponse_t {
    SS_CONFLICT_ENQUEUE = 0,
    SS_CONFLICT_INTERRUPT = 1
}

declare const enum ScriptedMoveType_t {
    SCRIPTED_MOVETYPE_NONE = 0,
    SCRIPTED_MOVETYPE_TO_WITH_DURATION = 1,
    SCRIPTED_MOVETYPE_TO_WITH_MOVESPEED = 2,
    SCRIPTED_MOVETYPE_SWEEP_TO_AT_MOVEMENT_SPEED = 3
}

declare const enum SoundEventStartType_t {
    SOUNDEVENT_START_PLAYER = 0,
    SOUNDEVENT_START_WORLD = 1,
    SOUNDEVENT_START_ENTITY = 2
}

declare const enum SoundFlags_t {
    SOUND_FLAGS_NONE = 0,
    SOUND_FLAG_GUNFIRE = 1,
    SOUND_FLAG_COMBINE_ONLY = 2,
    SOUND_FLAG_REACT_TO_SOURCE = 4,
    SOUND_FLAG_EXPLOSION = 8,
    SOUND_FLAG_EXCLUDE_COMBINE = 16,
    SOUND_FLAG_DANGER_APPROACH = 32,
    SOUND_FLAG_ALLIES_ONLY = 64,
    SOUND_FLAG_PANIC_NPCS = 128,
    SOUND_FLAG_SQUAD_ONLY = 256
}

declare const enum SoundTypes_t {
    SOUND_NONE = 0,
    SOUND_COMBAT = 1,
    SOUND_PLAYER = 2,
    SOUND_DANGER = 3,
    SOUND_BULLET_IMPACT = 4,
    SOUND_THUMPER = 5,
    SOUND_PHYSICS_DANGER = 6,
    SOUND_MOVE_AWAY = 7,
    SOUND_PLAYER_VEHICLE = 8,
    SOUND_GLASS_BREAK = 9,
    SOUND_PHYSICS_OBJECT = 10,
    SOUND_WARN_FRIENDS = 11,
    SOUND_FOOD = 12,
    NUM_AI_SOUND_TYPES = 13
}

declare const enum TOGGLE_STATE {
    TS_AT_TOP = 0,
    TS_AT_BOTTOM = 1,
    TS_GOING_UP = 2,
    TS_GOING_DOWN = 3,
    DOOR_OPEN = 0,
    DOOR_CLOSED = 1,
    DOOR_OPENING = 2,
    DOOR_CLOSING = 3
}

declare const enum TRAIN_CODE {
    TRAIN_SAFE = 0,
    TRAIN_BLOCKING = 1,
    TRAIN_FOLLOWING = 2
}

declare const enum Touch_t {
    touch_none = 0,
    touch_player_only = 1,
    touch_npc_only = 2,
    touch_player_or_npc = 3,
    touch_player_or_npc_or_physicsprop = 4
}

declare const enum TrackOrientationType_t {
    TrackOrientation_Fixed = 0,
    TrackOrientation_FacePath = 1,
    TrackOrientation_FacePathAngles = 2
}

declare const enum TrainOrientationType_t {
    TrainOrientation_Fixed = 0,
    TrainOrientation_AtPathTracks = 1,
    TrainOrientation_LinearBlend = 2,
    TrainOrientation_EaseInEaseOut = 3
}

declare const enum TrainVelocityType_t {
    TrainVelocity_Instantaneous = 0,
    TrainVelocity_LinearBlend = 1,
    TrainVelocity_EaseInEaseOut = 2
}

declare const enum doorCheck_e {
    DOOR_CHECK_FORWARD = 0,
    DOOR_CHECK_BACKWARD = 1,
    DOOR_CHECK_FULL = 2
}

declare const enum eSplinePushType {
    k_eSplinePushAlong = 0,
    k_eSplinePushAway = 1,
    k_eSplinePushTowards = 2
}

declare const enum filter_t {
    FILTER_AND = 0,
    FILTER_OR = 1
}

declare const enum navproperties_t {
    NAV_IGNORE = 1
}

declare const enum ActionType_t {
    SOS_ACTION_NONE = 0,
    SOS_ACTION_LIMITER = 1,
    SOS_ACTION_TIME_LIMIT = 2,
    SOS_ACTION_TIME_BLOCK_LIMITER = 3,
    SOS_ACTION_SET_SOUNDEVENT_PARAM = 4,
    SOS_ACTION_SOUNDEVENT_CLUSTER = 5,
    SOS_ACTION_SOUNDEVENT_PRIORITY = 6,
    SOS_ACTION_COUNT_ENVELOPE = 7,
    SOS_ACTION_SOUNDEVENT_COUNT = 8,
    SOS_ACTION_SOUNDEVENT_MIN_MAX_VALUES = 9
}

declare const enum SosActionSortType_t {
    SOS_SORTTYPE_HIGHEST = 0,
    SOS_SORTTYPE_LOWEST = 1
}

declare const enum SosActionStopType_t {
    SOS_STOPTYPE_NONE = 0,
    SOS_STOPTYPE_TIME = 1,
    SOS_STOPTYPE_OPVAR = 2
}

declare const enum SosEditItemType_t {
    SOS_EDIT_ITEM_TYPE_SOUNDEVENTS = 0,
    SOS_EDIT_ITEM_TYPE_SOUNDEVENT = 1,
    SOS_EDIT_ITEM_TYPE_LIBRARYSTACKS = 2,
    SOS_EDIT_ITEM_TYPE_STACK = 3,
    SOS_EDIT_ITEM_TYPE_OPERATOR = 4,
    SOS_EDIT_ITEM_TYPE_FIELD = 5
}

declare const enum SosGroupType_t {
    SOS_GROUPTYPE_DYNAMIC = 0,
    SOS_GROUPTYPE_STATIC = 1
}

declare const enum soundlevel_t {
    SNDLVL_NONE = 0,
    SNDLVL_20dB = 20,
    SNDLVL_25dB = 25,
    SNDLVL_30dB = 30,
    SNDLVL_35dB = 35,
    SNDLVL_40dB = 40,
    SNDLVL_45dB = 45,
    SNDLVL_50dB = 50,
    SNDLVL_55dB = 55,
    SNDLVL_IDLE = 60,
    SNDLVL_60dB = 60,
    SNDLVL_65dB = 65,
    SNDLVL_STATIC = 66,
    SNDLVL_70dB = 70,
    SNDLVL_NORM = 75,
    SNDLVL_75dB = 75,
    SNDLVL_80dB = 80,
    SNDLVL_TALKING = 80,
    SNDLVL_85dB = 85,
    SNDLVL_90dB = 90,
    SNDLVL_95dB = 95,
    SNDLVL_100dB = 100,
    SNDLVL_105dB = 105,
    SNDLVL_110dB = 110,
    SNDLVL_120dB = 120,
    SNDLVL_130dB = 130,
    SNDLVL_GUNFIRE = 140,
    SNDLVL_140dB = 140,
    SNDLVL_150dB = 150,
    SNDLVL_180dB = 180
}

declare const enum VMixChannelOperation_t {
    VMIX_CHAN_STEREO = 0,
    VMIX_CHAN_LEFT = 1,
    VMIX_CHAN_RIGHT = 2,
    VMIX_CHAN_SWAP = 3,
    VMIX_CHAN_MONO = 4,
    VMIX_CHAN_MID_SIDE = 5
}

declare const enum VMixFilterSlope_t {
    FILTER_SLOPE_1POLE_6dB = 0,
    FILTER_SLOPE_1POLE_12dB = 1,
    FILTER_SLOPE_1POLE_18dB = 2,
    FILTER_SLOPE_1POLE_24dB = 3,
    FILTER_SLOPE_12dB = 4,
    FILTER_SLOPE_24dB = 5,
    FILTER_SLOPE_36dB = 6,
    FILTER_SLOPE_48dB = 7,
    FILTER_SLOPE_MAX = 7
}

declare const enum VMixFilterType_t {
    FILTER_UNKNOWN = -1,
    FILTER_LOWPASS = 0,
    FILTER_HIGHPASS = 1,
    FILTER_BANDPASS = 2,
    FILTER_NOTCH = 3,
    FILTER_PEAKING_EQ = 4,
    FILTER_LOW_SHELF = 5,
    FILTER_HIGH_SHELF = 6,
    FILTER_ALLPASS = 7,
    FILTER_PASSTHROUGH = 8
}

declare const enum VMixLFOShape_t {
    LFO_SHAPE_SINE = 0,
    LFO_SHAPE_SQUARE = 1,
    LFO_SHAPE_TRI = 2,
    LFO_SHAPE_SAW = 3,
    LFO_SHAPE_NOISE = 4
}

declare const enum VMixPannerType_t {
    PANNER_TYPE_LINEAR = 0,
    PANNER_TYPE_EQUAL_POWER = 1
}

declare const enum VMixProcessorType_t {
    VPROCESSOR_UNKNOWN = 0,
    VPROCESSOR_RT_PITCH = 1,
    VPROCESSOR_STEAMAUDIO_HRTF = 2,
    VPROCESSOR_DYNAMICS = 3,
    VPROCESSOR_PRESETDSP = 4,
    VPROCESSOR_DELAY = 5,
    VPROCESSOR_MOD_DELAY = 6,
    VPROCESSOR_DIFFUSOR = 7,
    VPROCESSOR_BOXVERB = 8,
    VPROCESSOR_FREEVERB = 9,
    VPROCESSOR_PLATEVERB = 10,
    VPROCESSOR_FULLWAVE_INTEGRATOR = 11,
    VPROCESSOR_FILTER = 12,
    VPROCESSOR_STEAMAUDIO_PATHING = 13,
    VPROCESSOR_EQ8 = 14,
    VPROCESSOR_ENVELOPE = 15,
    VPROCESSOR_VOCODER = 16,
    VPROCESSOR_CONVOLUTION = 17,
    VPROCESSOR_DYNAMICS_3BAND = 18,
    VPROCESSOR_DYNAMICS_COMPRESSOR = 19,
    VPROCESSOR_SHAPER = 20,
    VPROCESSOR_PANNER = 21,
    VPROCESSOR_UTILITY = 22,
    VPROCESSOR_AUTOFILTER = 23,
    VPROCESSOR_OSC = 24,
    VPROCESSOR_STEREODELAY = 25,
    VPROCESSOR_EFFECT_CHAIN = 26,
    VPROCESSOR_SUBGRAPH_SWITCH = 27,
    VPROCESSOR_STEAMAUDIO_DIRECT = 28,
    VPROCESSOR_STEAMAUDIO_HYBRIDREVERB = 29
}

declare const enum VMixSubgraphSwitchInterpolationType_t {
    SUBGRAPH_INTERPOLATION_TEMPORAL_CROSSFADE = 0,
    SUBGRAPH_INTERPOLATION_TEMPORAL_FADE_OUT = 1,
    SUBGRAPH_INTERPOLATION_KEEP_LAST_SUBGRAPH_RUNNING = 2
}

declare const enum CVSoundFormat_t {
    PCM16 = 0,
    PCM8 = 1,
    MP3 = 2,
    ADPCM = 3
}

declare const enum EMidiNote {
    C = 0,
    C_Sharp = 1,
    D = 2,
    D_Sharp = 3,
    E = 4,
    F = 5,
    F_Sharp = 6,
    G = 7,
    G_Sharp = 8,
    A = 9,
    A_Sharp = 10,
    B = 11,
    Count = 12
}

declare const enum EMode_t {
    Peak = 0,
    RMS = 1
}

declare const enum EWaveform {
    Sine = 0,
    Square = 1,
    Saw = 2,
    Triangle = 3,
    Noise = 4
}

declare const enum PlayBackMode_t {
    Random = 0,
    RandomNoRepeats = 1,
    RandomAvoidLast = 2,
    Sequential = 3,
    RandomWeights = 4
}

declare const enum ObjectTypeFlags_t {
    OBJECT_TYPE_NONE = 0,
    OBJECT_TYPE_MODEL = 8,
    OBJECT_TYPE_BLOCK_LIGHT = 16,
    OBJECT_TYPE_NO_SHADOWS = 32,
    OBJECT_TYPE_WORLDSPACE_TEXURE_BLEND = 64,
    OBJECT_TYPE_DISABLED_IN_LOW_QUALITY = 128,
    OBJECT_TYPE_NO_SUN_SHADOWS = 256,
    OBJECT_TYPE_RENDER_WITH_DYNAMIC = 512,
    OBJECT_TYPE_RENDER_TO_CUBEMAPS = 1024,
    OBJECT_TYPE_MODEL_HAS_LODS = 2048,
    OBJECT_TYPE_OVERLAY = 8192,
    OBJECT_TYPE_PRECOMPUTED_VISMEMBERS = 16384,
    OBJECT_TYPE_STATIC_CUBE_MAP = 32768,
    OBJECT_TYPE_DISABLE_VIS_CULLING = 65536,
    OBJECT_TYPE_BAKED_GEOMETRY = 131072
}
declare interface IJSON {
    parse: (str: string) => Object;
    stringify: (value: any) => string;
}
declare const json : IJSON
declare interface IMisc {
    find: (tbl: Object,element: any) => number|null;
    contains: (tbl: Object,element: any) => boolean;
    filter: (tbl: Object,callback: (element:any) => boolean) => Object;
    map: (tbl: Object,callback: (element:any) => boolean) => Object;
    trim: (str: string) => string;
    split: (str: string,delimiter: string) => Object;
}
declare function StateUpdate(ptr: string,classname: string,field: string) : null|undefined;
declare function GetUserMessage(uuid: string) : UserMessage;
declare function uuid() : string;
declare function ReplyToCommand(playerid: number,prefix: string,text: string) : null|undefined;
declare function ComputePrettyTime(seconds: number) : string;
declare function GetCCSGameRules() : CCSGameRules;
declare function IsValidItem(name: string) : boolean;
declare function IsValidWeapon(name: string) : boolean;
declare interface IOS {
}
declare function GetOS() : string;
declare function IsWindows() : boolean;
declare function IsLinux() : boolean;
declare interface ITargetSelector {
}
declare function GetPlayer(playerid: number) : IPlayer;
declare function FindPlayersByTarget(target: string,matchbots: boolean) : Object[]; // of Player
declare interface ITime {
}
declare function GetTime() : number;
declare interface IVGUI {
    SetTextPosition: (textID: number,posX: number,posY: number) => null|undefined;
    SetTextMessage: (textID: number,message: string) => null|undefined;
    RemoveText: (textID: number) => null|undefined;
    ShowText: (playerid: number,color: Color,text: string,posX: number,posY: number,font_name: string,background: boolean|null) => number;
}
declare const vgui : IVGUI
declare interface IWeaponManager {
    GetWeapons: () => Object[]; // Weapon
    DropWeapons: () => null|undefined;
    RemoveWeapons: () => null|undefined;
    GetInSlot: (slot: gear_slot_t) => Object[]; // Weapon
    GetFIrstInSlot: (slot: gear_slot_t) => Weapon;
    RemoveByItemDefinition: (idx: number) => null|undefined;
    RemoveBySlot: (slot: gear_slot_t) => null|undefined;
    RemoveByClassname: (classname: string) => null|undefined;
    GiveWeapon: (weapon_name: string) => null|undefined;
}
declare const weaponmanager : IWeaponManager
