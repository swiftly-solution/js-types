

interface CCheckTransmitInfo {

    GetPlayers: () => Object;
    GetEntities: () => Object;
    SetEntities: (value: Object) => null|undefined;
}

declare function CCheckTransmitInfo(ptr_or_cchectransmitinfo: any): CCheckTransmitInfo;

interface CHandle {

    GetPtr: () => string;
    SetPtr: (ptr: string) => null|undefined;
    GetHandlePtr: () => string;
}

declare function CHandle(ptr: string): CHandle;

interface Color {
    "r": number;
    "g": number;
    "b": number;
    "a": number;
    GetPtr: () => string;
}

declare function Color(r: number,g: number,b: number,a: number): Color;

interface QAngle {
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

interface Vector {
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

interface Vector2D {
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

interface Vector4D {
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

interface QueryBuilder {

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

interface Database {

    IsConnected: () => boolean;
    QueryBuilder: () => QueryBuilder;
    EscapeString: (value: string) => string;
    Query: (query: string,callback: null | ((err:string,result:Object[]) => void)) => null|undefined;
    QueryParams: (query: string,callback: null | ((err:string,result:Object[]) => void)) => null|undefined;
}

declare function Database(connection_name: string): Database;

interface CEntityKeyValues {

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

interface IEvent {

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

interface HTTPRequest {
    readonly "path": string;
    readonly "method": string;
    readonly "body": string;
    readonly "files": Object;
    readonly "headers": Object;
    readonly "params": Object;

}

interface HTTPResponse {

    WriteBody: (content: string) => null|undefined;
    GetHeaders: () => Object;
    GetHeader: (key: string) => string;
    SetHeader: (key: string,params: string) => null|undefined;
    Send: (response_code: number) => null|undefined;
    IsCompleted: () => boolean;
}

interface UserMessage {

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

interface Weapon {

    CBasePlayerWeapon: () => CBasePlayerWeapon;
    CCSWeaponBase: () => CCSWeaponBase;
    CBasePlayerWeaponVData: () => CBasePlayerWeaponVData;
    CCSWeaponBaseVData: () => CCSWeaponBaseVData;
    SetDefaultAttributes: () => null|undefined;
    Remove: () => null|undefined;
    Drop: () => null|undefined;
}

declare function Weapon(playerid: number,ptr: string): Weapon;

interface AnimationDecodeDebugDumpElement_t {
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

interface AnimationDecodeDebugDump_t {
    "ProcessingType": number;
    readonly "Elems": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimationDecodeDebugDump_t(ptr_or_class: string|AnySDKClass): AnimationDecodeDebugDump_t;

interface AnimationSnapshotBase_t {
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

interface AnimationSnapshot_t {
    "EntIndex": number;
    "ModelName": string;
    readonly "Parent": AnimationSnapshotBase_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimationSnapshot_t(ptr_or_class: string|AnySDKClass): AnimationSnapshot_t;

interface CAnimActivity {
    "Activity": number;
    "Flags": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimActivity(ptr_or_class: string|AnySDKClass): CAnimActivity;

interface CAnimBone {
    "Parent": number;
    "Pos": Vector;
    "Scale": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimBone(ptr_or_class: string|AnySDKClass): CAnimBone;

interface CAnimBoneDifference {
    "PosError": Vector;
    "HasRotation": boolean;
    "HasMovement": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimBoneDifference(ptr_or_class: string|AnySDKClass): CAnimBoneDifference;

interface CAnimData {
    readonly "AnimArray": Object;
    readonly "DecoderArray": Object;
    "MaxUniqueFrameIndex": number;
    readonly "SegmentArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimData(ptr_or_class: string|AnySDKClass): CAnimData;

interface CAnimDataChannelDesc {
    "Flags": number;
    "Type": number;
    readonly "ElementIndexArray": Object;
    readonly "ElementMaskArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDataChannelDesc(ptr_or_class: string|AnySDKClass): CAnimDataChannelDesc;

interface CAnimDecoder {
    "Version": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDecoder(ptr_or_class: string|AnySDKClass): CAnimDecoder;

interface CAnimDesc {
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

interface CAnimDesc_Flag {
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

interface CAnimEncodeDifference {
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

interface CAnimEncodedFrames {
    "Frames": number;
    "FramesPerBlock": number;
    readonly "FrameblockArray": Object;
    readonly "UsageDifferences": CAnimEncodeDifference;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEncodedFrames(ptr_or_class: string|AnySDKClass): CAnimEncodedFrames;

interface CAnimEnum {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEnum(ptr_or_class: string|AnySDKClass): CAnimEnum;

interface CAnimEventDefinition {
    "Frame": number;
    "EndFrame": number;
    "Cycle": number;
    "Duration": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventDefinition(ptr_or_class: string|AnySDKClass): CAnimEventDefinition;

interface CAnimFrameBlockAnim {
    "StartFrame": number;
    "EndFrame": number;
    readonly "SegmentIndexArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimFrameBlockAnim(ptr_or_class: string|AnySDKClass): CAnimFrameBlockAnim;

interface CAnimFrameSegment {
    "UniqueFrameIndex": number;
    "LocalElementMasks": number;
    "LocalChannel": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimFrameSegment(ptr_or_class: string|AnySDKClass): CAnimFrameSegment;

interface CAnimKeyData {
    readonly "BoneArray": Object;
    readonly "UserArray": Object;
    "ChannelElements": number;
    readonly "DataChannelArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimKeyData(ptr_or_class: string|AnySDKClass): CAnimKeyData;

interface CAnimLocalHierarchy {
    "StartFrame": number;
    "PeakFrame": number;
    "TailFrame": number;
    "EndFrame": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimLocalHierarchy(ptr_or_class: string|AnySDKClass): CAnimLocalHierarchy;

interface CAnimMorphDifference {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimMorphDifference(ptr_or_class: string|AnySDKClass): CAnimMorphDifference;

interface CAnimMovement {
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

interface CAnimSequenceParams {
    "FadeInTime": number;
    "FadeOutTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimSequenceParams(ptr_or_class: string|AnySDKClass): CAnimSequenceParams;

interface CAnimUser {
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUser(ptr_or_class: string|AnySDKClass): CAnimUser;

interface CAnimUserDifference {
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUserDifference(ptr_or_class: string|AnySDKClass): CAnimUserDifference;

interface CAnimationGroup {
    "Flags": number;
    readonly "DecodeKey": CAnimKeyData;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGroup(ptr_or_class: string|AnySDKClass): CAnimationGroup;

interface CMoodVData {
    "MoodType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMoodVData(ptr_or_class: string|AnySDKClass): CMoodVData;

interface CSeqAutoLayer {
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

interface CSeqAutoLayerFlag {
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

interface CSeqBoneMaskList {
    readonly "LocalBoneArray": Object;
    readonly "BoneWeightArray": Object;
    "DefaultMorphCtrlWeight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqBoneMaskList(ptr_or_class: string|AnySDKClass): CSeqBoneMaskList;

interface CSeqCmdLayer {
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

interface CSeqCmdSeqDesc {
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

interface CSeqIKLock {
    "PosWeight": number;
    "AngleWeight": number;
    "LocalBone": number;
    "BonesOrientedAlongPositiveX": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqIKLock(ptr_or_class: string|AnySDKClass): CSeqIKLock;

interface CSeqMultiFetch {
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

interface CSeqMultiFetchFlag {
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

interface CSeqPoseParamDesc {
    "Start": number;
    "End": number;
    "Loop": number;
    "Looping": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqPoseParamDesc(ptr_or_class: string|AnySDKClass): CSeqPoseParamDesc;

interface CSeqPoseSetting {
    "Value": number;
    "X": boolean;
    "Y": boolean;
    "Z": boolean;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqPoseSetting(ptr_or_class: string|AnySDKClass): CSeqPoseSetting;

interface CSeqS1SeqDesc {
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

interface CSeqScaleSet {
    "RootOffset": boolean;
    "RootOffset1": Vector;
    readonly "LocalBoneArray": Object;
    readonly "BoneScaleArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqScaleSet(ptr_or_class: string|AnySDKClass): CSeqScaleSet;

interface CSeqSeqDescFlag {
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

interface CSeqSynthAnimDesc {
    readonly "Flags": CSeqSeqDescFlag;
    readonly "Transition": CSeqTransition;
    "LocalBaseReference": number;
    "LocalBoneMask": number;
    readonly "ActivityArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqSynthAnimDesc(ptr_or_class: string|AnySDKClass): CSeqSynthAnimDesc;

interface CSeqTransition {
    "FadeInTime": number;
    "FadeOutTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqTransition(ptr_or_class: string|AnySDKClass): CSeqTransition;

interface CSequenceGroupData {
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

interface MoodAnimation_t {
    "Name": string;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MoodAnimation_t(ptr_or_class: string|AnySDKClass): MoodAnimation_t;

interface AimCameraOpFixedSettings_t {
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

interface AimMatrixOpFixedSettings_t {
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

interface BlendItem_t {
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

interface BoneDemoCaptureSettings_t {
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

interface CActionComponentUpdater {
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CActionComponentUpdater(ptr_or_class: string|AnySDKClass): CActionComponentUpdater;

interface CAddUpdateNode {
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

interface CAimCameraUpdateNode {
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

interface CAimMatrixUpdateNode {
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

interface CAnimActionUpdater {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimActionUpdater(ptr_or_class: string|AnySDKClass): CAnimActionUpdater;

interface CAnimComponentUpdater {
    "Name": string;
    readonly "Id": AnimComponentID;
    "NetworkMode": number;
    "StartEnabled": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimComponentUpdater(ptr_or_class: string|AnySDKClass): CAnimComponentUpdater;

interface CAnimDemoCaptureSettings {
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

interface CAnimGraphDebugReplay {
    "AnimGraphFileName": string;
    "StartIndex": number;
    "WriteIndex": number;
    "FrameCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphDebugReplay(ptr_or_class: string|AnySDKClass): CAnimGraphDebugReplay;

interface CAnimGraphModelBinding {
    "ModelName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphModelBinding(ptr_or_class: string|AnySDKClass): CAnimGraphModelBinding;

interface CAnimGraphNetworkSettings {
    "NetworkingEnabled": boolean;
    readonly "Parent": CAnimGraphSettingsGroup;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphNetworkSettings(ptr_or_class: string|AnySDKClass): CAnimGraphNetworkSettings;

interface CAnimGraphSettingsGroup {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphSettingsGroup(ptr_or_class: string|AnySDKClass): CAnimGraphSettingsGroup;

interface CAnimGraphSettingsManager {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphSettingsManager(ptr_or_class: string|AnySDKClass): CAnimGraphSettingsManager;

interface CAnimInputDamping {
    "SpeedFunction": number;
    "SpeedScale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimInputDamping(ptr_or_class: string|AnySDKClass): CAnimInputDamping;

interface CAnimMotorUpdaterBase {
    "Name": string;
    "Default": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimMotorUpdaterBase(ptr_or_class: string|AnySDKClass): CAnimMotorUpdaterBase;

interface CAnimNodePath {
    readonly "Path": Object;
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimNodePath(ptr_or_class: string|AnySDKClass): CAnimNodePath;

interface CAnimParamHandle {
    "Type": number;
    "Index": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimParamHandle(ptr_or_class: string|AnySDKClass): CAnimParamHandle;

interface CAnimParamHandleMap {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimParamHandleMap(ptr_or_class: string|AnySDKClass): CAnimParamHandleMap;

interface CAnimParameterBase {
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

interface CAnimParameterManagerUpdater {
    readonly "IndexToHandle": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimParameterManagerUpdater(ptr_or_class: string|AnySDKClass): CAnimParameterManagerUpdater;

interface CAnimReplayFrame {
    "TimeStamp": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimReplayFrame(ptr_or_class: string|AnySDKClass): CAnimReplayFrame;

interface CAnimScriptComponentUpdater {
    readonly "Script": AnimScriptHandle;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimScriptComponentUpdater(ptr_or_class: string|AnySDKClass): CAnimScriptComponentUpdater;

interface CAnimScriptManager {
    readonly "ScriptInfo": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimScriptManager(ptr_or_class: string|AnySDKClass): CAnimScriptManager;

interface CAnimStateMachineUpdater {
    readonly "States": Object;
    readonly "Transitions": Object;
    "StartStateIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimStateMachineUpdater(ptr_or_class: string|AnySDKClass): CAnimStateMachineUpdater;

interface CAnimTagBase {
    "Comment": string;
    readonly "TagID": AnimTagID;
    "IsReferenced": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimTagBase(ptr_or_class: string|AnySDKClass): CAnimTagBase;

interface CAnimTagManagerUpdater {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimTagManagerUpdater(ptr_or_class: string|AnySDKClass): CAnimTagManagerUpdater;

interface CAnimUpdateNodeBase {
    readonly "NodePath": CAnimNodePath;
    "NetworkMode": number;
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUpdateNodeBase(ptr_or_class: string|AnySDKClass): CAnimUpdateNodeBase;

interface CAnimUpdateNodeRef {
    "NodeIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUpdateNodeRef(ptr_or_class: string|AnySDKClass): CAnimUpdateNodeRef;

interface CAnimUpdateSharedData {
    readonly "Settings": CAnimGraphSettingsManager;
    readonly "RootNodePath": CAnimNodePath;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimUpdateSharedData(ptr_or_class: string|AnySDKClass): CAnimUpdateSharedData;

interface CAnimationGraphVisualizerAxis {
    "AxisSize": number;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerAxis(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerAxis;

interface CAnimationGraphVisualizerLine {
    "WsPositionStart": Vector;
    "WsPositionEnd": Vector;
    "Color": Color;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerLine(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerLine;

interface CAnimationGraphVisualizerPie {
    "WsCenter": Vector;
    "WsStart": Vector;
    "WsEnd": Vector;
    "Color": Color;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerPie(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerPie;

interface CAnimationGraphVisualizerPrimitiveBase {
    "Type": number;
    readonly "OwningAnimNodePaths": Object;
    "OwningAnimNodePathCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerPrimitiveBase(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerPrimitiveBase;

interface CAnimationGraphVisualizerSphere {
    "WsPosition": Vector;
    "Radius": number;
    "Color": Color;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerSphere(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerSphere;

interface CAnimationGraphVisualizerText {
    "WsPosition": Vector;
    "Color": Color;
    "Text": string;
    readonly "Parent": CAnimationGraphVisualizerPrimitiveBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimationGraphVisualizerText(ptr_or_class: string|AnySDKClass): CAnimationGraphVisualizerText;

interface CAudioAnimTag {
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

interface CBinaryUpdateNode {
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

interface CBindPoseUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBindPoseUpdateNode(ptr_or_class: string|AnySDKClass): CBindPoseUpdateNode;

interface CBlend2DUpdateNode {
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

interface CBlendCurve {
    "ControlPoint1": number;
    "ControlPoint2": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlendCurve(ptr_or_class: string|AnySDKClass): CBlendCurve;

interface CBlendUpdateNode {
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

interface CBlockSelectionMetricEvaluator {
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlockSelectionMetricEvaluator(ptr_or_class: string|AnySDKClass): CBlockSelectionMetricEvaluator;

interface CBodyGroupAnimTag {
    "Priority": number;
    readonly "BodyGroupSettings": Object;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyGroupAnimTag(ptr_or_class: string|AnySDKClass): CBodyGroupAnimTag;

interface CBodyGroupSetting {
    "BodyGroupName": string;
    "BodyGroupOption": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyGroupSetting(ptr_or_class: string|AnySDKClass): CBodyGroupSetting;

interface CBoneMaskUpdateNode {
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

interface CBonePositionMetricEvaluator {
    "BoneIndex": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBonePositionMetricEvaluator(ptr_or_class: string|AnySDKClass): CBonePositionMetricEvaluator;

interface CBoneVelocityMetricEvaluator {
    "BoneIndex": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CBoneVelocityMetricEvaluator;

interface CBoolAnimParameter {
    "DefaultValue": boolean;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoolAnimParameter(ptr_or_class: string|AnySDKClass): CBoolAnimParameter;

interface CCPPScriptComponentUpdater {
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCPPScriptComponentUpdater(ptr_or_class: string|AnySDKClass): CCPPScriptComponentUpdater;

interface CCachedPose {
    readonly "MorphWeights": Object;
    "Sequence": number;
    "Cycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCachedPose(ptr_or_class: string|AnySDKClass): CCachedPose;

interface CChoiceUpdateNode {
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

interface CChoreoUpdateNode {
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CChoreoUpdateNode(ptr_or_class: string|AnySDKClass): CChoreoUpdateNode;

interface CClothSettingsAnimTag {
    "Stiffness": number;
    "EaseIn": number;
    "EaseOut": number;
    "VertexSet": string;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CClothSettingsAnimTag(ptr_or_class: string|AnySDKClass): CClothSettingsAnimTag;

interface CConcreteAnimParameter {
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

interface CCurrentRotationVelocityMetricEvaluator {
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCurrentRotationVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CCurrentRotationVelocityMetricEvaluator;

interface CCurrentVelocityMetricEvaluator {
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCurrentVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CCurrentVelocityMetricEvaluator;

interface CCycleControlClipUpdateNode {
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

interface CCycleControlUpdateNode {
    "ValueSource": number;
    readonly "ParamIndex": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCycleControlUpdateNode(ptr_or_class: string|AnySDKClass): CCycleControlUpdateNode;

interface CDampedPathAnimMotorUpdater {
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

interface CDampedValueComponentUpdater {
    readonly "Items": Object;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDampedValueComponentUpdater(ptr_or_class: string|AnySDKClass): CDampedValueComponentUpdater;

interface CDampedValueUpdateItem {
    readonly "Damping": CAnimInputDamping;
    readonly "ParamIn": CAnimParamHandle;
    readonly "ParamOut": CAnimParamHandle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDampedValueUpdateItem(ptr_or_class: string|AnySDKClass): CDampedValueUpdateItem;

interface CDemoSettingsComponentUpdater {
    readonly "Settings": CAnimDemoCaptureSettings;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDemoSettingsComponentUpdater(ptr_or_class: string|AnySDKClass): CDemoSettingsComponentUpdater;

interface CDirectPlaybackTagData {
    "SequenceName": string;
    readonly "Tags": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDirectPlaybackTagData(ptr_or_class: string|AnySDKClass): CDirectPlaybackTagData;

interface CDirectPlaybackUpdateNode {
    "FinishEarly": boolean;
    "ResetOnFinish": boolean;
    readonly "AllTags": Object;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDirectPlaybackUpdateNode(ptr_or_class: string|AnySDKClass): CDirectPlaybackUpdateNode;

interface CDirectionalBlendUpdateNode {
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

interface CDistanceRemainingMetricEvaluator {
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

interface CEditableMotionGraph {
    readonly "Parent": CMotionGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEditableMotionGraph(ptr_or_class: string|AnySDKClass): CEditableMotionGraph;

interface CEmitTagActionUpdater {
    "TagIndex": number;
    "IsZeroDuration": boolean;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEmitTagActionUpdater(ptr_or_class: string|AnySDKClass): CEmitTagActionUpdater;

interface CEnumAnimParameter {
    "DefaultValue": number;
    readonly "EnumOptions": Object;
    readonly "EnumReferenced": Object;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnumAnimParameter(ptr_or_class: string|AnySDKClass): CEnumAnimParameter;

interface CExpressionActionUpdater {
    readonly "Param": CAnimParamHandle;
    "ParamType": number;
    readonly "Script": AnimScriptHandle;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExpressionActionUpdater(ptr_or_class: string|AnySDKClass): CExpressionActionUpdater;

interface CFloatAnimParameter {
    "DefaultValue": number;
    "MinValue": number;
    "MaxValue": number;
    "Interpolate": boolean;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFloatAnimParameter(ptr_or_class: string|AnySDKClass): CFloatAnimParameter;

interface CFollowAttachmentUpdateNode {
    readonly "OpFixedData": FollowAttachmentSettings_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFollowAttachmentUpdateNode(ptr_or_class: string|AnySDKClass): CFollowAttachmentUpdateNode;

interface CFollowPathUpdateNode {
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

interface CFollowTargetUpdateNode {
    readonly "OpFixedData": FollowTargetOpFixedSettings_t;
    readonly "ParameterPosition": CAnimParamHandle;
    readonly "ParameterOrientation": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFollowTargetUpdateNode(ptr_or_class: string|AnySDKClass): CFollowTargetUpdateNode;

interface CFootAdjustmentUpdateNode {
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

interface CFootCycleMetricEvaluator {
    readonly "FootIndices": Object;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootCycleMetricEvaluator(ptr_or_class: string|AnySDKClass): CFootCycleMetricEvaluator;

interface CFootFallAnimTag {
    "Foot": number;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootFallAnimTag(ptr_or_class: string|AnySDKClass): CFootFallAnimTag;

interface CFootLockUpdateNode {
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

interface CFootPinningUpdateNode {
    readonly "PoseOpFixedData": FootPinningPoseOpFixedData_t;
    "TimingSource": number;
    readonly "Params": Object;
    "ResetChild": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootPinningUpdateNode(ptr_or_class: string|AnySDKClass): CFootPinningUpdateNode;

interface CFootPositionMetricEvaluator {
    readonly "FootIndices": Object;
    "IgnoreSlope": boolean;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootPositionMetricEvaluator(ptr_or_class: string|AnySDKClass): CFootPositionMetricEvaluator;

interface CFootStepTriggerUpdateNode {
    readonly "Triggers": Object;
    "Tolerance": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootStepTriggerUpdateNode(ptr_or_class: string|AnySDKClass): CFootStepTriggerUpdateNode;

interface CFootstepLandedAnimTag {
    "FootstepType": number;
    "OverrideSoundName": string;
    "DebugAnimSourceString": string;
    "BoneName": string;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootstepLandedAnimTag(ptr_or_class: string|AnySDKClass): CFootstepLandedAnimTag;

interface CFutureFacingMetricEvaluator {
    "Distance": number;
    "Time": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFutureFacingMetricEvaluator(ptr_or_class: string|AnySDKClass): CFutureFacingMetricEvaluator;

interface CFutureVelocityMetricEvaluator {
    "Distance": number;
    "StoppingDistance": number;
    "TargetSpeed": number;
    "Mode": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFutureVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CFutureVelocityMetricEvaluator;

interface CHandshakeAnimTagBase {
    "IsDisableTag": boolean;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHandshakeAnimTagBase(ptr_or_class: string|AnySDKClass): CHandshakeAnimTagBase;

interface CHitReactUpdateNode {
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

interface CInputStreamUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInputStreamUpdateNode(ptr_or_class: string|AnySDKClass): CInputStreamUpdateNode;

interface CIntAnimParameter {
    "DefaultValue": number;
    "MinValue": number;
    "MaxValue": number;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CIntAnimParameter(ptr_or_class: string|AnySDKClass): CIntAnimParameter;

interface CJiggleBoneUpdateNode {
    readonly "OpFixedData": JiggleBoneSettingsList_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CJiggleBoneUpdateNode(ptr_or_class: string|AnySDKClass): CJiggleBoneUpdateNode;

interface CJumpHelperUpdateNode {
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

interface CLODComponentUpdater {
    "ServerLOD": number;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLODComponentUpdater(ptr_or_class: string|AnySDKClass): CLODComponentUpdater;

interface CLeafUpdateNode {
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLeafUpdateNode(ptr_or_class: string|AnySDKClass): CLeafUpdateNode;

interface CLeanMatrixUpdateNode {
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

interface CLookAtUpdateNode {
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

interface CLookComponentUpdater {
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

interface CMaterialAttributeAnimTag {
    "AttributeName": string;
    "AttributeType": number;
    "Value": number;
    "Color": Color;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMaterialAttributeAnimTag(ptr_or_class: string|AnySDKClass): CMaterialAttributeAnimTag;

interface CMotionDataSet {
    readonly "Groups": Object;
    "DimensionCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionDataSet(ptr_or_class: string|AnySDKClass): CMotionDataSet;

interface CMotionGraph {
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

interface CMotionGraphConfig {
    "ParamValues": Object;
    "Duration": number;
    readonly "MotionIndex": MotionIndex;
    "SampleStart": number;
    "SampleCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionGraphConfig(ptr_or_class: string|AnySDKClass): CMotionGraphConfig;

interface CMotionGraphGroup {
    readonly "SearchDB": CMotionSearchDB;
    readonly "MotionGraphConfigs": Object;
    readonly "SampleToConfig": Object;
    readonly "IsActiveScript": AnimScriptHandle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionGraphGroup(ptr_or_class: string|AnySDKClass): CMotionGraphGroup;

interface CMotionGraphUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionGraphUpdateNode(ptr_or_class: string|AnySDKClass): CMotionGraphUpdateNode;

interface CMotionMatchingUpdateNode {
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

interface CMotionMetricEvaluator {
    readonly "Means": Object;
    readonly "StandardDeviations": Object;
    "Weight": number;
    "DimensionStartIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionMetricEvaluator(ptr_or_class: string|AnySDKClass): CMotionMetricEvaluator;

interface CMotionNode {
    "Name": string;
    readonly "Id": AnimNodeID;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionNode(ptr_or_class: string|AnySDKClass): CMotionNode;

interface CMotionNodeBlend1D {
    readonly "BlendItems": Object;
    "ParamIndex": number;
    readonly "Parent": CMotionNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionNodeBlend1D(ptr_or_class: string|AnySDKClass): CMotionNodeBlend1D;

interface CMotionNodeSequence {
    readonly "Tags": Object;
    "Sequence": number;
    "PlaybackSpeed": number;
    readonly "Parent": CMotionNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionNodeSequence(ptr_or_class: string|AnySDKClass): CMotionNodeSequence;

interface CMotionSearchDB {
    readonly "RootNode": CMotionSearchNode;
    readonly "ResidualQuantizer": CProductQuantizer;
    readonly "CodeIndices": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionSearchDB(ptr_or_class: string|AnySDKClass): CMotionSearchDB;

interface CMotionSearchNode {
    readonly "Children": Object;
    readonly "Quantizer": CVectorQuantizer;
    readonly "SelectableSamples": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionSearchNode(ptr_or_class: string|AnySDKClass): CMotionSearchNode;

interface CMovementComponentUpdater {
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

interface CMovementHandshakeAnimTag {
    readonly "Parent": CHandshakeAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMovementHandshakeAnimTag(ptr_or_class: string|AnySDKClass): CMovementHandshakeAnimTag;

interface CMoverUpdateNode {
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

interface COrientationWarpUpdateNode {
    readonly "FacingPositionParameter": CAnimParamHandle;
    readonly "TurnDamping": CAnimInputDamping;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COrientationWarpUpdateNode(ptr_or_class: string|AnySDKClass): COrientationWarpUpdateNode;

interface CPairedSequenceComponentUpdater {
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPairedSequenceComponentUpdater(ptr_or_class: string|AnySDKClass): CPairedSequenceComponentUpdater;

interface CPairedSequenceUpdateNode {
    readonly "Parent": CSequenceUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPairedSequenceUpdateNode(ptr_or_class: string|AnySDKClass): CPairedSequenceUpdateNode;

interface CParamSpanUpdater {
    readonly "Spans": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParamSpanUpdater(ptr_or_class: string|AnySDKClass): CParamSpanUpdater;

interface CParticleAnimTag {
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

interface CPathAnimMotorUpdater {
    readonly "Parent": CPathAnimMotorUpdaterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathAnimMotorUpdater(ptr_or_class: string|AnySDKClass): CPathAnimMotorUpdater;

interface CPathAnimMotorUpdaterBase {
    "LockToPath": boolean;
    readonly "Parent": CAnimMotorUpdaterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathAnimMotorUpdaterBase(ptr_or_class: string|AnySDKClass): CPathAnimMotorUpdaterBase;

interface CPathHelperUpdateNode {
    "StoppingRadius": number;
    "StoppingSpeedScale": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathHelperUpdateNode(ptr_or_class: string|AnySDKClass): CPathHelperUpdateNode;

interface CPathMetricEvaluator {
    readonly "PathTimeSamples": Object;
    "Distance": number;
    "ExtrapolateMovement": boolean;
    "MinExtrapolationSpeed": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathMetricEvaluator(ptr_or_class: string|AnySDKClass): CPathMetricEvaluator;

interface CPlayerInputAnimMotorUpdater {
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

interface CPoseHandle {
    "Index": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPoseHandle(ptr_or_class: string|AnySDKClass): CPoseHandle;

interface CProductQuantizer {
    readonly "SubQuantizers": Object;
    "Dimensions": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CProductQuantizer(ptr_or_class: string|AnySDKClass): CProductQuantizer;

interface CRagdollAnimTag {
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

interface CRagdollComponentUpdater {
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

interface CRagdollUpdateNode {
    "WeightListIndex": number;
    "PoseControlMethod": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollUpdateNode(ptr_or_class: string|AnySDKClass): CRagdollUpdateNode;

interface CRootUpdateNode {
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRootUpdateNode(ptr_or_class: string|AnySDKClass): CRootUpdateNode;

interface CSelectorUpdateNode {
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

interface CSequenceFinishedAnimTag {
    "SequenceName": string;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceFinishedAnimTag(ptr_or_class: string|AnySDKClass): CSequenceFinishedAnimTag;

interface CSequenceTagSpans {
    readonly "Tags": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceTagSpans(ptr_or_class: string|AnySDKClass): CSequenceTagSpans;

interface CSequenceUpdateNode {
    "Sequence": number;
    "Duration": number;
    readonly "ParamSpans": CParamSpanUpdater;
    readonly "Tags": Object;
    readonly "Parent": CSequenceUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceUpdateNode(ptr_or_class: string|AnySDKClass): CSequenceUpdateNode;

interface CSequenceUpdateNodeBase {
    "PlaybackSpeed": number;
    "Loop": boolean;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceUpdateNodeBase(ptr_or_class: string|AnySDKClass): CSequenceUpdateNodeBase;

interface CSetParameterActionUpdater {
    readonly "Param": CAnimParamHandle;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSetParameterActionUpdater(ptr_or_class: string|AnySDKClass): CSetParameterActionUpdater;

interface CSingleFrameUpdateNode {
    readonly "PoseCacheHandle": CPoseHandle;
    "Sequence": number;
    "Cycle": number;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSingleFrameUpdateNode(ptr_or_class: string|AnySDKClass): CSingleFrameUpdateNode;

interface CSlopeComponentUpdater {
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

interface CSlowDownOnSlopesUpdateNode {
    "SlowDownStrength": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSlowDownOnSlopesUpdateNode(ptr_or_class: string|AnySDKClass): CSlowDownOnSlopesUpdateNode;

interface CSolveIKChainUpdateNode {
    readonly "TargetHandles": Object;
    readonly "OpFixedData": SolveIKChainPoseOpFixedSettings_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSolveIKChainUpdateNode(ptr_or_class: string|AnySDKClass): CSolveIKChainUpdateNode;

interface CSolveIKTargetHandle_t {
    readonly "PositionHandle": CAnimParamHandle;
    readonly "OrientationHandle": CAnimParamHandle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSolveIKTargetHandle_t(ptr_or_class: string|AnySDKClass): CSolveIKTargetHandle_t;

interface CSpeedScaleUpdateNode {
    readonly "ParamIndex": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpeedScaleUpdateNode(ptr_or_class: string|AnySDKClass): CSpeedScaleUpdateNode;

interface CStanceOverrideUpdateNode {
    readonly "FootStanceInfo": Object;
    readonly "StanceSourceNode": CAnimUpdateNodeRef;
    readonly "Parameter": CAnimParamHandle;
    "Mode": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStanceOverrideUpdateNode(ptr_or_class: string|AnySDKClass): CStanceOverrideUpdateNode;

interface CStanceScaleUpdateNode {
    readonly "Param": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStanceScaleUpdateNode(ptr_or_class: string|AnySDKClass): CStanceScaleUpdateNode;

interface CStateActionUpdater {
    "Behavior": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateActionUpdater(ptr_or_class: string|AnySDKClass): CStateActionUpdater;

interface CStateMachineComponentUpdater {
    readonly "StateMachine": CAnimStateMachineUpdater;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateMachineComponentUpdater(ptr_or_class: string|AnySDKClass): CStateMachineComponentUpdater;

interface CStateMachineUpdateNode {
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

interface CStateNodeStateData {
    readonly "Child": CAnimUpdateNodeRef;
    "ExclusiveRootMotion": any;
    "ExclusiveRootMotionFirstFrame": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateNodeStateData(ptr_or_class: string|AnySDKClass): CStateNodeStateData;

interface CStateNodeTransitionData {
    readonly "Curve": CBlendCurve;
    "Reset": any;
    "ResetCycleOption": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateNodeTransitionData(ptr_or_class: string|AnySDKClass): CStateNodeTransitionData;

interface CStateUpdateData {
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

interface CStaticPoseCache {
    readonly "Poses": Object;
    "BoneCount": number;
    "MorphCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStaticPoseCache(ptr_or_class: string|AnySDKClass): CStaticPoseCache;

interface CStaticPoseCacheBuilder {
    readonly "Parent": CStaticPoseCache;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStaticPoseCacheBuilder(ptr_or_class: string|AnySDKClass): CStaticPoseCacheBuilder;

interface CStepsRemainingMetricEvaluator {
    readonly "FootIndices": Object;
    "MinStepsRemaining": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStepsRemainingMetricEvaluator(ptr_or_class: string|AnySDKClass): CStepsRemainingMetricEvaluator;

interface CStopAtGoalUpdateNode {
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

interface CStringAnimTag {
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStringAnimTag(ptr_or_class: string|AnySDKClass): CStringAnimTag;

interface CSubtractUpdateNode {
    "FootMotionTiming": number;
    "ApplyToFootMotion": boolean;
    "ApplyChannelsSeparately": boolean;
    "UseModelSpace": boolean;
    readonly "Parent": CBinaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSubtractUpdateNode(ptr_or_class: string|AnySDKClass): CSubtractUpdateNode;

interface CSymbolAnimParameter {
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSymbolAnimParameter(ptr_or_class: string|AnySDKClass): CSymbolAnimParameter;

interface CTargetSelectorUpdateNode {
    readonly "Children": Object;
    readonly "PositionParameter": CAnimParamHandle;
    readonly "FacePositionParameter": CAnimParamHandle;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTargetSelectorUpdateNode(ptr_or_class: string|AnySDKClass): CTargetSelectorUpdateNode;

interface CTargetWarpUpdateNode {
    readonly "PositionParameter": CAnimParamHandle;
    readonly "FacePositionParameter": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTargetWarpUpdateNode(ptr_or_class: string|AnySDKClass): CTargetWarpUpdateNode;

interface CTaskHandshakeAnimTag {
    readonly "Parent": CHandshakeAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTaskHandshakeAnimTag(ptr_or_class: string|AnySDKClass): CTaskHandshakeAnimTag;

interface CTaskStatusAnimTag {
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTaskStatusAnimTag(ptr_or_class: string|AnySDKClass): CTaskStatusAnimTag;

interface CTimeRemainingMetricEvaluator {
    "MatchByTimeRemaining": boolean;
    "MaxTimeRemaining": number;
    "FilterByTimeRemaining": boolean;
    "MinTimeRemaining": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTimeRemainingMetricEvaluator(ptr_or_class: string|AnySDKClass): CTimeRemainingMetricEvaluator;

interface CToggleComponentActionUpdater {
    readonly "ComponentID": AnimComponentID;
    "SetEnabled": boolean;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CToggleComponentActionUpdater(ptr_or_class: string|AnySDKClass): CToggleComponentActionUpdater;

interface CTransitionUpdateData {
    "SrcStateIndex": number;
    "DestStateIndex": number;
    "HandshakeMaskToDisableFirst": any;
    "Disabled": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTransitionUpdateData(ptr_or_class: string|AnySDKClass): CTransitionUpdateData;

interface CTurnHelperUpdateNode {
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

interface CTwoBoneIKUpdateNode {
    readonly "OpFixedData": TwoBoneIKSettings_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTwoBoneIKUpdateNode(ptr_or_class: string|AnySDKClass): CTwoBoneIKUpdateNode;

interface CUnaryUpdateNode {
    readonly "ChildNode": CAnimUpdateNodeRef;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CUnaryUpdateNode(ptr_or_class: string|AnySDKClass): CUnaryUpdateNode;

interface CVectorAnimParameter {
    "DefaultValue": Vector;
    "Interpolate": boolean;
    readonly "Parent": CConcreteAnimParameter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVectorAnimParameter(ptr_or_class: string|AnySDKClass): CVectorAnimParameter;

interface CVectorQuantizer {
    readonly "CentroidVectors": Object;
    "Centroids": number;
    "Dimensions": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVectorQuantizer(ptr_or_class: string|AnySDKClass): CVectorQuantizer;

interface CVirtualAnimParameter {
    "ExpressionString": string;
    "ParamType": number;
    readonly "Parent": CAnimParameterBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVirtualAnimParameter(ptr_or_class: string|AnySDKClass): CVirtualAnimParameter;

interface CWayPointHelperUpdateNode {
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

interface CZeroPoseUpdateNode {
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CZeroPoseUpdateNode(ptr_or_class: string|AnySDKClass): CZeroPoseUpdateNode;

interface ChainToSolveData_t {
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

interface ConfigIndex {
    "Group": number;
    "Config": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ConfigIndex(ptr_or_class: string|AnySDKClass): ConfigIndex;

interface FollowAttachmentSettings_t {
    readonly "Attachment": CAnimAttachment;
    "BoneIndex": number;
    "MatchTranslation": boolean;
    "MatchRotation": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FollowAttachmentSettings_t(ptr_or_class: string|AnySDKClass): FollowAttachmentSettings_t;

interface FollowTargetOpFixedSettings_t {
    "BoneIndex": number;
    "BoneTarget": boolean;
    "BoneTargetIndex": number;
    "WorldCoodinateTarget": boolean;
    "MatchTargetOrientation": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FollowTargetOpFixedSettings_t(ptr_or_class: string|AnySDKClass): FollowTargetOpFixedSettings_t;

interface FootFixedData_t {
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

interface FootFixedSettings {
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

interface FootLockPoseOpFixedSettings {
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

interface FootPinningPoseOpFixedData_t {
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

interface FootStepTrigger {
    readonly "Tags": Object;
    "FootIndex": number;
    "TriggerPhase": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FootStepTrigger(ptr_or_class: string|AnySDKClass): FootStepTrigger;

interface HitReactFixedSettings_t {
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

interface IKBoneNameAndIndex_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKBoneNameAndIndex_t(ptr_or_class: string|AnySDKClass): IKBoneNameAndIndex_t;

interface IKDemoCaptureSettings_t {
    "ParentBoneName": string;
    "Mode": number;
    "IkChainName": string;
    "OneBoneStart": string;
    "OneBoneEnd": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKDemoCaptureSettings_t(ptr_or_class: string|AnySDKClass): IKDemoCaptureSettings_t;

interface IKSolverSettings_t {
    "SolverType": number;
    "NumIterations": number;
    "EndEffectorRotationFixUpMode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKSolverSettings_t(ptr_or_class: string|AnySDKClass): IKSolverSettings_t;

interface IKTargetSettings_t {
    "TargetSource": number;
    readonly "Bone": IKBoneNameAndIndex_t;
    readonly "AnimgraphParameterNamePosition": AnimParamID;
    readonly "AnimgraphParameterNameOrientation": AnimParamID;
    "TargetCoordSystem": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKTargetSettings_t(ptr_or_class: string|AnySDKClass): IKTargetSettings_t;

interface JiggleBoneSettingsList_t {
    readonly "BoneSettings": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function JiggleBoneSettingsList_t(ptr_or_class: string|AnySDKClass): JiggleBoneSettingsList_t;

interface JiggleBoneSettings_t {
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

interface LookAtBone_t {
    "Index": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function LookAtBone_t(ptr_or_class: string|AnySDKClass): LookAtBone_t;

interface LookAtOpFixedSettings_t {
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

interface MotionBlendItem {
    "KeyValue": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MotionBlendItem(ptr_or_class: string|AnySDKClass): MotionBlendItem;

interface MotionDBIndex {
    "Index": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MotionDBIndex(ptr_or_class: string|AnySDKClass): MotionDBIndex;

interface MotionIndex {
    "Group": number;
    "Motion": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MotionIndex(ptr_or_class: string|AnySDKClass): MotionIndex;

interface ParamSpanSample_t {
    "Cycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParamSpanSample_t(ptr_or_class: string|AnySDKClass): ParamSpanSample_t;

interface ParamSpan_t {
    readonly "Samples": Object;
    readonly "Param": CAnimParamHandle;
    "ParamType": number;
    "StartCycle": number;
    "EndCycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParamSpan_t(ptr_or_class: string|AnySDKClass): ParamSpan_t;

interface SampleCode {
    "SubCode": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SampleCode(ptr_or_class: string|AnySDKClass): SampleCode;

interface ScriptInfo_t {
    "Code": string;
    readonly "ParamsModified": Object;
    readonly "ProxyReadParams": Object;
    readonly "ProxyWriteParams": Object;
    "ScriptType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ScriptInfo_t(ptr_or_class: string|AnySDKClass): ScriptInfo_t;

interface SolveIKChainPoseOpFixedSettings_t {
    readonly "ChainsToSolveData": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SolveIKChainPoseOpFixedSettings_t(ptr_or_class: string|AnySDKClass): SolveIKChainPoseOpFixedSettings_t;

interface StanceInfo_t {
    "Position": Vector;
    "Direction": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function StanceInfo_t(ptr_or_class: string|AnySDKClass): StanceInfo_t;

interface TagSpan_t {
    "TagIndex": number;
    "StartCycle": number;
    "EndCycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TagSpan_t(ptr_or_class: string|AnySDKClass): TagSpan_t;

interface TraceSettings_t {
    "TraceHeight": number;
    "TraceRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TraceSettings_t(ptr_or_class: string|AnySDKClass): TraceSettings_t;

interface TwoBoneIKSettings_t {
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

interface WeightList {
    "Name": string;
    readonly "Weights": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WeightList(ptr_or_class: string|AnySDKClass): WeightList;

interface CNmAdditiveBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmAdditiveBlendTask(ptr_or_class: string|AnySDKClass): CNmAdditiveBlendTask;

interface CNmBitFlags {
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBitFlags(ptr_or_class: string|AnySDKClass): CNmBitFlags;

interface CNmBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBlendTask(ptr_or_class: string|AnySDKClass): CNmBlendTask;

interface CNmBlendTaskBase {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBlendTaskBase(ptr_or_class: string|AnySDKClass): CNmBlendTaskBase;

interface CNmBoneMask {
    readonly "WeightInfo": any;
    readonly "Weights": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBoneMask(ptr_or_class: string|AnySDKClass): CNmBoneMask;

interface CNmCachedPoseReadTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmCachedPoseReadTask(ptr_or_class: string|AnySDKClass): CNmCachedPoseReadTask;

interface CNmCachedPoseWriteTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmCachedPoseWriteTask(ptr_or_class: string|AnySDKClass): CNmCachedPoseWriteTask;

interface CNmClip {
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

interface CNmEvent {
    "StartTimeSeconds": number;
    "DurationSeconds": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmEvent(ptr_or_class: string|AnySDKClass): CNmEvent;

interface CNmFootEvent {
    "Phase": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmFootEvent(ptr_or_class: string|AnySDKClass): CNmFootEvent;

interface CNmFrameSnapEvent {
    "FrameSnapMode": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmFrameSnapEvent(ptr_or_class: string|AnySDKClass): CNmFrameSnapEvent;

interface CNmGraphDefinition {
    readonly "PersistentNodeIndices": Object;
    "RootNodeIdx": number;
    readonly "VirtualParameterNodeIndices": Object;
    readonly "NodePaths": Object;
    "RuntimeVersionID": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmGraphDefinition(ptr_or_class: string|AnySDKClass): CNmGraphDefinition;

interface CNmGraphVariation {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmGraphVariation(ptr_or_class: string|AnySDKClass): CNmGraphVariation;

interface CNmIDEvent {
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmIDEvent(ptr_or_class: string|AnySDKClass): CNmIDEvent;

interface CNmIKRig {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmIKRig(ptr_or_class: string|AnySDKClass): CNmIKRig;

interface CNmLegacyEvent {
    "AnimEventClassName": string;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmLegacyEvent(ptr_or_class: string|AnySDKClass): CNmLegacyEvent;

interface CNmModelSpaceBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmModelSpaceBlendTask(ptr_or_class: string|AnySDKClass): CNmModelSpaceBlendTask;

interface CNmOrientationWarpEvent {
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmOrientationWarpEvent(ptr_or_class: string|AnySDKClass): CNmOrientationWarpEvent;

interface CNmOverlayBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmOverlayBlendTask(ptr_or_class: string|AnySDKClass): CNmOverlayBlendTask;

interface CNmReferencePoseTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmReferencePoseTask(ptr_or_class: string|AnySDKClass): CNmReferencePoseTask;

interface CNmRootMotionData {
    "NumFrames": number;
    "AverageLinearVelocity": number;
    "AverageAngularVelocityRadians": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmRootMotionData(ptr_or_class: string|AnySDKClass): CNmRootMotionData;

interface CNmRootMotionEvent {
    "BlendTimeSeconds": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmRootMotionEvent(ptr_or_class: string|AnySDKClass): CNmRootMotionEvent;

interface CNmSampleTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmSampleTask(ptr_or_class: string|AnySDKClass): CNmSampleTask;

interface CNmSkeleton {
    readonly "ParentIndices": Object;
    "NumBonesToSampleAtLowLOD": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmSkeleton(ptr_or_class: string|AnySDKClass): CNmSkeleton;

interface CNmSyncTrack {
    "StartEventOffset": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmSyncTrack(ptr_or_class: string|AnySDKClass): CNmSyncTrack;

interface CNmTarget {
    "IsBoneTarget": boolean;
    "IsUsingBoneSpaceOffsets": boolean;
    "HasOffsets": boolean;
    "IsSet": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTarget(ptr_or_class: string|AnySDKClass): CNmTarget;

interface CNmTargetWarpEvent {
    "Rule": number;
    "Algorithm": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTargetWarpEvent(ptr_or_class: string|AnySDKClass): CNmTargetWarpEvent;

interface CNmTask {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTask(ptr_or_class: string|AnySDKClass): CNmTask;

interface CNmTransitionEvent {
    "Rule": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTransitionEvent(ptr_or_class: string|AnySDKClass): CNmTransitionEvent;

interface CNmZeroPoseTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmZeroPoseTask(ptr_or_class: string|AnySDKClass): CNmZeroPoseTask;

interface NmCompressionSettings_t {
    "IsRotationStatic": boolean;
    "IsTranslationStatic": boolean;
    "IsScaleStatic": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmCompressionSettings_t(ptr_or_class: string|AnySDKClass): NmCompressionSettings_t;

interface NmPercent_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmPercent_t(ptr_or_class: string|AnySDKClass): NmPercent_t;

interface NmSyncTrackTimeRange_t {
    readonly "StartTime": NmSyncTrackTime_t;
    readonly "EndTime": NmSyncTrackTime_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmSyncTrackTimeRange_t(ptr_or_class: string|AnySDKClass): NmSyncTrackTimeRange_t;

interface NmSyncTrackTime_t {
    "EventIdx": number;
    readonly "PercentageThrough": NmPercent_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmSyncTrackTime_t(ptr_or_class: string|AnySDKClass): NmSyncTrackTime_t;

interface ActiveModelConfig_t {
    readonly "Handle": ModelConfigHandle_t;
    "Name": string;
    readonly "AssociatedEntityNames": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ActiveModelConfig_t(ptr_or_class: string|AnySDKClass): ActiveModelConfig_t;

interface AmmoIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AmmoIndex_t(ptr_or_class: string|AnySDKClass): AmmoIndex_t;

interface AmmoTypeInfo_t {
    "MaxCarry": number;
    readonly "SplashSize": CRangeInt;
    "Flags": number;
    "Mass": number;
    readonly "Speed": CRangeFloat;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AmmoTypeInfo_t(ptr_or_class: string|AnySDKClass): AmmoTypeInfo_t;

interface CAnimEventListener {
    readonly "Parent": CAnimEventListenerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventListener(ptr_or_class: string|AnySDKClass): CAnimEventListener;

interface CAnimEventListenerBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventListenerBase(ptr_or_class: string|AnySDKClass): CAnimEventListenerBase;

interface CAnimEventQueueListener {
    readonly "Parent": CAnimEventListenerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventQueueListener(ptr_or_class: string|AnySDKClass): CAnimEventQueueListener;

interface CAnimGraphControllerBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphControllerBase(ptr_or_class: string|AnySDKClass): CAnimGraphControllerBase;

interface CAnimGraphNetworkedVariables {
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

interface CAttributeList {
    readonly "Attributes": Object;
    readonly "Manager": CAttributeManager;
    SetOrAddAttributeValueByName: (str: string,value: number) => null|undefined;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAttributeList(ptr_or_class: string|AnySDKClass): CAttributeList;

interface CAttributeManager {
    "ReapplyProvisionParity": number;
    readonly "Outer": CBaseEntity;
    "PreventLoopback": boolean;
    "ProviderType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAttributeManager(ptr_or_class: string|AnySDKClass): CAttributeManager;

interface CBaseAnimGraph {
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

interface CBaseAnimGraphController {
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

interface CBasePlayerController {
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

interface CBasePlayerControllerAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerControllerAPI(ptr_or_class: string|AnySDKClass): CBasePlayerControllerAPI;

interface CBasePlayerVData {
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

interface CBasePlayerWeaponVData {
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

interface CBaseProp {
    "ModelOverrodeBlockLOS": boolean;
    "ShapeType": number;
    "ConformToCollisionBounds": boolean;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseProp(ptr_or_class: string|AnySDKClass): CBaseProp;

interface CBodyComponent {
    readonly "SceneNode": CGameSceneNode;
    readonly "__pChainEntity": CNetworkVarChainer;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponent(ptr_or_class: string|AnySDKClass): CBodyComponent;

interface CBodyComponentBaseAnimGraph {
    readonly "AnimationController": CBaseAnimGraphController;
    readonly "Parent": CBodyComponentSkeletonInstance;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentBaseAnimGraph(ptr_or_class: string|AnySDKClass): CBodyComponentBaseAnimGraph;

interface CBodyComponentBaseModelEntity {
    readonly "Parent": CBodyComponentSkeletonInstance;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentBaseModelEntity(ptr_or_class: string|AnySDKClass): CBodyComponentBaseModelEntity;

interface CBodyComponentPoint {
    readonly "SceneNode": CGameSceneNode;
    readonly "Parent": CBodyComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentPoint(ptr_or_class: string|AnySDKClass): CBodyComponentPoint;

interface CBodyComponentSkeletonInstance {
    readonly "SkeletonInstance": CSkeletonInstance;
    readonly "Parent": CBodyComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentSkeletonInstance(ptr_or_class: string|AnySDKClass): CBodyComponentSkeletonInstance;

interface CBombTarget {
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

interface CBreachCharge {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreachCharge(ptr_or_class: string|AnySDKClass): CBreachCharge;

interface CBreachChargeProjectile {
    readonly "Parent": CBaseGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreachChargeProjectile(ptr_or_class: string|AnySDKClass): CBreachChargeProjectile;

interface CBreakableStageHelper {
    "CurrentStage": number;
    "StageCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreakableStageHelper(ptr_or_class: string|AnySDKClass): CBreakableStageHelper;

interface CBumpMine {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBumpMine(ptr_or_class: string|AnySDKClass): CBumpMine;

interface CBumpMineProjectile {
    readonly "Parent": CBaseGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBumpMineProjectile(ptr_or_class: string|AnySDKClass): CBumpMineProjectile;

interface CBuoyancyHelper {
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

interface CCSClientPointScriptEntity {
    readonly "Parent": CCSPointScriptEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSClientPointScriptEntity(ptr_or_class: string|AnySDKClass): CCSClientPointScriptEntity;

interface CCSGOPlayerAnimGraphState {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGOPlayerAnimGraphState(ptr_or_class: string|AnySDKClass): CCSGOPlayerAnimGraphState;

interface CCSGOViewModel_GraphController {
    "ReloadComplete": any;
    readonly "Parent": CAnimGraphControllerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGOViewModel_GraphController(ptr_or_class: string|AnySDKClass): CCSGOViewModel_GraphController;

interface CCSGO_WingmanIntroCharacterPosition {
    readonly "Parent": CCSGO_TeamIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_WingmanIntroCharacterPosition(ptr_or_class: string|AnySDKClass): CCSGO_WingmanIntroCharacterPosition;

interface CCSGO_WingmanIntroCounterTerroristPosition {
    readonly "Parent": CCSGO_WingmanIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_WingmanIntroCounterTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_WingmanIntroCounterTerroristPosition;

interface CCSGO_WingmanIntroTerroristPosition {
    readonly "Parent": CCSGO_WingmanIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_WingmanIntroTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_WingmanIntroTerroristPosition;

interface CCSGameModeRules {
    readonly "__pChainEntity": CNetworkVarChainer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules(ptr_or_class: string|AnySDKClass): CCSGameModeRules;

interface CCSGameModeRules_ArmsRace {
    readonly "WeaponSequence": Object;
    readonly "Parent": CCSGameModeRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules_ArmsRace(ptr_or_class: string|AnySDKClass): CCSGameModeRules_ArmsRace;

interface CCSGameModeRules_Deathmatch {
    "DMBonusStartTime": number;
    "DMBonusTimeLength": number;
    "DMBonusWeapon": string;
    readonly "Parent": CCSGameModeRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules_Deathmatch(ptr_or_class: string|AnySDKClass): CCSGameModeRules_Deathmatch;

interface CCSGameModeRules_Noop {
    readonly "Parent": CCSGameModeRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameModeRules_Noop(ptr_or_class: string|AnySDKClass): CCSGameModeRules_Noop;

interface CCSObserver_CameraServices {
    readonly "Parent": CCSPlayerBase_CameraServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_CameraServices(ptr_or_class: string|AnySDKClass): CCSObserver_CameraServices;

interface CCSObserver_MovementServices {
    readonly "Parent": CPlayer_MovementServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_MovementServices(ptr_or_class: string|AnySDKClass): CCSObserver_MovementServices;

interface CCSObserver_ObserverServices {
    readonly "Parent": CPlayer_ObserverServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_ObserverServices(ptr_or_class: string|AnySDKClass): CCSObserver_ObserverServices;

interface CCSObserver_UseServices {
    readonly "Parent": CPlayer_UseServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_UseServices(ptr_or_class: string|AnySDKClass): CCSObserver_UseServices;

interface CCSObserver_ViewModelServices {
    readonly "Parent": CPlayer_ViewModelServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_ViewModelServices(ptr_or_class: string|AnySDKClass): CCSObserver_ViewModelServices;

interface CCSPlayerBase_CameraServices {
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

interface CCSPlayerController {
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

interface CCSPlayerController_ActionTrackingServices {
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

interface CCSPlayerController_DamageServices {
    "SendUpdate": number;
    readonly "DamageList": Object;
    readonly "Parent": CPlayerControllerComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerController_DamageServices(ptr_or_class: string|AnySDKClass): CCSPlayerController_DamageServices;

interface CCSPlayerController_InGameMoneyServices {
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

interface CCSPlayerController_InventoryServices {
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

interface CCSPlayer_ActionTrackingServices {
    readonly "LastWeaponBeforeC4AutoSwitch": CBasePlayerWeapon;
    "IsRescuing": boolean;
    readonly "WeaponPurchasesThisMatch": WeaponPurchaseTracker_t;
    readonly "WeaponPurchasesThisRound": WeaponPurchaseTracker_t;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_ActionTrackingServices(ptr_or_class: string|AnySDKClass): CCSPlayer_ActionTrackingServices;

interface CCSPlayer_BulletServices {
    "TotalHitsOnServer": number;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_BulletServices(ptr_or_class: string|AnySDKClass): CCSPlayer_BulletServices;

interface CCSPlayer_BuyServices {
    readonly "SellbackPurchaseEntries": Object;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_BuyServices(ptr_or_class: string|AnySDKClass): CCSPlayer_BuyServices;

interface CCSPlayer_CameraServices {
    readonly "Parent": CCSPlayerBase_CameraServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_CameraServices(ptr_or_class: string|AnySDKClass): CCSPlayer_CameraServices;

interface CCSPlayer_DamageReactServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_DamageReactServices(ptr_or_class: string|AnySDKClass): CCSPlayer_DamageReactServices;

interface CCSPlayer_GlowServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_GlowServices(ptr_or_class: string|AnySDKClass): CCSPlayer_GlowServices;

interface CCSPlayer_HostageServices {
    readonly "CarriedHostage": CBaseEntity;
    readonly "CarriedHostageProp": CBaseEntity;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_HostageServices(ptr_or_class: string|AnySDKClass): CCSPlayer_HostageServices;

interface CCSPlayer_ItemServices {
    "HasDefuser": boolean;
    "HasHelmet": boolean;
    "HasHeavyArmor": boolean;
    readonly "Parent": CPlayer_ItemServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_ItemServices(ptr_or_class: string|AnySDKClass): CCSPlayer_ItemServices;

interface CCSPlayer_MovementServices {
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

interface CCSPlayer_PingServices {
    "PlayerPingTokens": Object;
    readonly "PlayerPing": CBaseEntity;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_PingServices(ptr_or_class: string|AnySDKClass): CCSPlayer_PingServices;

interface CCSPlayer_UseServices {
    readonly "LastKnownUseEntity": CBaseEntity;
    "LastUseTimeStamp": number;
    "TimeLastUsedWindow": number;
    readonly "Parent": CPlayer_UseServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_UseServices(ptr_or_class: string|AnySDKClass): CCSPlayer_UseServices;

interface CCSPlayer_ViewModelServices {
    readonly "ViewModel": Object;
    readonly "Parent": CPlayer_ViewModelServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_ViewModelServices(ptr_or_class: string|AnySDKClass): CCSPlayer_ViewModelServices;

interface CCSPlayer_WaterServices {
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

interface CCSPlayer_WeaponServices {
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

interface CCSPointScript {
    readonly "Parent": CCSPointScriptEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScript(ptr_or_class: string|AnySDKClass): CCSPointScript;

interface CCSPointScriptEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptEntity(ptr_or_class: string|AnySDKClass): CCSPointScriptEntity;

interface CCSPointScriptExtensions_CCSWeaponBaseVData {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_CCSWeaponBaseVData(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_CCSWeaponBaseVData;

interface CCSPointScriptExtensions_entity {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_entity(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_entity;

interface CCSPointScriptExtensions_observer {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_observer(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_observer;

interface CCSPointScriptExtensions_player {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_player(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_player;

interface CCSPointScriptExtensions_player_controller {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_player_controller(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_player_controller;

interface CCSPointScriptExtensions_weapon_cs_base {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPointScriptExtensions_weapon_cs_base(ptr_or_class: string|AnySDKClass): CCSPointScriptExtensions_weapon_cs_base;

interface CCSWeaponBaseVData {
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

interface CCitadelSoundOpvarSetOBB {
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

interface CClientAlphaProperty {
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

interface CClientGapTypeQueryRegistration {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CClientGapTypeQueryRegistration(ptr_or_class: string|AnySDKClass): CClientGapTypeQueryRegistration;

interface CCollisionProperty {
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

interface CCompositeMaterialEditorDoc {
    "Version": number;
    readonly "Points": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCompositeMaterialEditorDoc(ptr_or_class: string|AnySDKClass): CCompositeMaterialEditorDoc;

interface CCopyRecipientFilter {
    "Flags": number;
    readonly "Recipients": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCopyRecipientFilter(ptr_or_class: string|AnySDKClass): CCopyRecipientFilter;

interface CDamageRecord {
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

interface CDecalInfo {
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

interface CDestructiblePartRuntimeData {
    "HealthRemaining": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartRuntimeData(ptr_or_class: string|AnySDKClass): CDestructiblePartRuntimeData;

interface CDestructiblePartRuntimeDataVector {
    readonly "DestructiblePartsRuntimeData": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartRuntimeDataVector(ptr_or_class: string|AnySDKClass): CDestructiblePartRuntimeDataVector;

interface CDestructiblePartsSystemData {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartsSystemData(ptr_or_class: string|AnySDKClass): CDestructiblePartsSystemData;

interface CDestructiblePartsSystemData_HitGroupInfoAndPartData {
    "Name": string;
    readonly "DestructiblePartsData": Object;
    "DisableHitGroupWhenDestroyed": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartsSystemData_HitGroupInfoAndPartData(ptr_or_class: string|AnySDKClass): CDestructiblePartsSystemData_HitGroupInfoAndPartData;

interface CDestructiblePartsSystemData_PartData {
    "Name": string;
    "BodyGroupValue": number;
    readonly "Health": CSkillInt;
    "DamagePassthroughType": number;
    "KillNPCOnDestruction": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDestructiblePartsSystemData_PartData(ptr_or_class: string|AnySDKClass): CDestructiblePartsSystemData_PartData;

interface CEconItemAttribute {
    "AttributeDefinitionIndex": number;
    "Value": number;
    "InitialValue": number;
    "RefundableCurrency": number;
    "SetBonus": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEconItemAttribute(ptr_or_class: string|AnySDKClass): CEconItemAttribute;

interface CEffectData {
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

interface CEntitySubclassVDataBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntitySubclassVDataBase(ptr_or_class: string|AnySDKClass): CEntitySubclassVDataBase;

interface CEnvSoundscape {
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

interface CEnvSoundscapeAlias_snd_soundscape {
    readonly "Parent": CEnvSoundscape;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeAlias_snd_soundscape(ptr_or_class: string|AnySDKClass): CEnvSoundscapeAlias_snd_soundscape;

interface CEnvSoundscapeProxy {
    "MainSoundscapeName": string;
    readonly "Parent": CEnvSoundscape;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeProxy(ptr_or_class: string|AnySDKClass): CEnvSoundscapeProxy;

interface CEnvSoundscapeProxyAlias_snd_soundscape_proxy {
    readonly "Parent": CEnvSoundscapeProxy;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeProxyAlias_snd_soundscape_proxy(ptr_or_class: string|AnySDKClass): CEnvSoundscapeProxyAlias_snd_soundscape_proxy;

interface CEnvSoundscapeTriggerable {
    readonly "Parent": CEnvSoundscape;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeTriggerable(ptr_or_class: string|AnySDKClass): CEnvSoundscapeTriggerable;

interface CEnvSoundscapeTriggerableAlias_snd_soundscape_triggerable {
    readonly "Parent": CEnvSoundscapeTriggerable;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSoundscapeTriggerableAlias_snd_soundscape_triggerable(ptr_or_class: string|AnySDKClass): CEnvSoundscapeTriggerableAlias_snd_soundscape_triggerable;

interface CFireOverlay {
    readonly "Owner": any;
    "BaseColors": Object;
    "Scale": number;
    "GUID": number;
    readonly "Parent": CGlowOverlay;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFireOverlay(ptr_or_class: string|AnySDKClass): CFireOverlay;

interface CFiringModeFloat {
    "Values": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFiringModeFloat(ptr_or_class: string|AnySDKClass): CFiringModeFloat;

interface CFiringModeInt {
    "Values": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFiringModeInt(ptr_or_class: string|AnySDKClass): CFiringModeInt;

interface CFlashlightEffect {
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

interface CFootstepTableHandle {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootstepTableHandle(ptr_or_class: string|AnySDKClass): CFootstepTableHandle;

interface CFuncWater {
    readonly "BuoyancyHelper": CBuoyancyHelper;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncWater(ptr_or_class: string|AnySDKClass): CFuncWater;

interface CGameSceneNode {
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

interface CGlobalLightBase {
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

interface CGlowOverlay {
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

interface CGlowProperty {
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

interface CGlowSprite {
    "Color": Vector;
    "HorzSize": number;
    "VertSize": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGlowSprite(ptr_or_class: string|AnySDKClass): CGlowSprite;

interface CGrenadeTracer {
    "TracerDuration": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGrenadeTracer(ptr_or_class: string|AnySDKClass): CGrenadeTracer;

interface CHitboxComponent {
    "DisabledHitGroups": Object;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitboxComponent(ptr_or_class: string|AnySDKClass): CHitboxComponent;

interface CHostageRescueZone {
    readonly "Parent": CHostageRescueZoneShim;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageRescueZone(ptr_or_class: string|AnySDKClass): CHostageRescueZone;

interface CHostageRescueZoneShim {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageRescueZoneShim(ptr_or_class: string|AnySDKClass): CHostageRescueZoneShim;

interface CInButtonState {
    "ButtonStates": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInButtonState(ptr_or_class: string|AnySDKClass): CInButtonState;

interface CInfoDynamicShadowHint {
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

interface CInfoDynamicShadowHintBox {
    "BoxMins": Vector;
    "BoxMaxs": Vector;
    readonly "Parent": CInfoDynamicShadowHint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoDynamicShadowHintBox(ptr_or_class: string|AnySDKClass): CInfoDynamicShadowHintBox;

interface CInfoOffscreenPanoramaTexture {
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

interface CInfoParticleTarget {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoParticleTarget(ptr_or_class: string|AnySDKClass): CInfoParticleTarget;

interface CInfoTarget {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoTarget(ptr_or_class: string|AnySDKClass): CInfoTarget;

interface CInfoWorldLayer {
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

interface CInterpolatedValue {
    "StartTime": number;
    "EndTime": number;
    "StartValue": number;
    "EndValue": number;
    "InterpType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInterpolatedValue(ptr_or_class: string|AnySDKClass): CInterpolatedValue;

interface CLightComponent {
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

interface CLogicRelay {
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

interface CLogicalEntity {
    readonly "Parent": CServerOnlyEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicalEntity(ptr_or_class: string|AnySDKClass): CLogicalEntity;

interface CMapInfo {
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

interface CModelState {
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

interface CNavLinkAnimgraphVar {
    "AlignmentDegrees": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavLinkAnimgraphVar(ptr_or_class: string|AnySDKClass): CNavLinkAnimgraphVar;

interface CNavLinkMovementVData {
    "IsInterpolated": boolean;
    "RecommendedDistance": number;
    readonly "AnimgraphVars": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavLinkMovementVData(ptr_or_class: string|AnySDKClass): CNavLinkMovementVData;

interface CNetworkOriginCellCoordQuantizedVector {
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

interface CNetworkOriginQuantizedVector {
    "X": number;
    "Y": number;
    "Z": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkOriginQuantizedVector(ptr_or_class: string|AnySDKClass): CNetworkOriginQuantizedVector;

interface CNetworkTransmitComponent {
    "TransmitStateOwnedCounter": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkTransmitComponent(ptr_or_class: string|AnySDKClass): CNetworkTransmitComponent;

interface CNetworkVelocityVector {
    "X": number;
    "Y": number;
    "Z": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkVelocityVector(ptr_or_class: string|AnySDKClass): CNetworkVelocityVector;

interface CNetworkViewOffsetVector {
    "X": number;
    "Y": number;
    "Z": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkViewOffsetVector(ptr_or_class: string|AnySDKClass): CNetworkViewOffsetVector;

interface CNetworkedSequenceOperation {
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

interface CPathSimple {
    "PathString": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathSimple(ptr_or_class: string|AnySDKClass): CPathSimple;

interface CPathSimpleAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathSimpleAPI(ptr_or_class: string|AnySDKClass): CPathSimpleAPI;

interface CPlayerControllerComponent {
    readonly "__pChainEntity": CNetworkVarChainer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerControllerComponent(ptr_or_class: string|AnySDKClass): CPlayerControllerComponent;

interface CPlayerPawnComponent {
    readonly "__pChainEntity": CNetworkVarChainer;
    GetPawn: () => CBasePlayerPawn;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerPawnComponent(ptr_or_class: string|AnySDKClass): CPlayerPawnComponent;

interface CPlayerSprayDecalRenderHelper {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerSprayDecalRenderHelper(ptr_or_class: string|AnySDKClass): CPlayerSprayDecalRenderHelper;

interface CPlayer_AutoaimServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_AutoaimServices(ptr_or_class: string|AnySDKClass): CPlayer_AutoaimServices;

interface CPlayer_CameraServices {
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

interface CPlayer_FlashlightServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_FlashlightServices(ptr_or_class: string|AnySDKClass): CPlayer_FlashlightServices;

interface CPlayer_ItemServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_ItemServices(ptr_or_class: string|AnySDKClass): CPlayer_ItemServices;

interface CPlayer_MovementServices {
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

interface CPlayer_MovementServices_Humanoid {
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

interface CPlayer_ObserverServices {
    "ObserverMode": number;
    readonly "ObserverTarget": CBaseEntity;
    "ObserverLastMode": number;
    "ForcedObserverMode": boolean;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_ObserverServices(ptr_or_class: string|AnySDKClass): CPlayer_ObserverServices;

interface CPlayer_UseServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_UseServices(ptr_or_class: string|AnySDKClass): CPlayer_UseServices;

interface CPlayer_ViewModelServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_ViewModelServices(ptr_or_class: string|AnySDKClass): CPlayer_ViewModelServices;

interface CPlayer_WaterServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_WaterServices(ptr_or_class: string|AnySDKClass): CPlayer_WaterServices;

interface CPlayer_WeaponServices {
    readonly "ActiveWeapon": CBasePlayerWeapon;
    readonly "LastWeapon": CBasePlayerWeapon;
    "Ammo": Object;
    "PreventWeaponPickup": boolean;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_WeaponServices(ptr_or_class: string|AnySDKClass): CPlayer_WeaponServices;

interface CPointChildModifier {
    "OrphanInsteadOfDeletingChildrenOnRemove": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointChildModifier(ptr_or_class: string|AnySDKClass): CPointChildModifier;

interface CPointOffScreenIndicatorUi {
    "BeenEnabled": boolean;
    "Hide": boolean;
    "SeenTargetTime": number;
    readonly "TargetPanel": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointOffScreenIndicatorUi(ptr_or_class: string|AnySDKClass): CPointOffScreenIndicatorUi;

interface CPointTemplate {
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

interface CPointTemplateAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointTemplateAPI(ptr_or_class: string|AnySDKClass): CPointTemplateAPI;

interface CPrecipitationVData {
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

interface CProjectedTextureBase {
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

interface CPropDataComponent {
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

interface CRagdollManager {
    "CurrentMaxRagdollCount": number;
    "MaxRagdollCount": number;
    "SaveImportant": boolean;
    "CanTakeDamage": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollManager(ptr_or_class: string|AnySDKClass): CRagdollManager;

interface CRandSimTimer {
    "MinInterval": number;
    "MaxInterval": number;
    readonly "Parent": CSimpleSimTimer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRandSimTimer(ptr_or_class: string|AnySDKClass): CRandSimTimer;

interface CRandStopwatch {
    "MinInterval": number;
    "MaxInterval": number;
    readonly "Parent": CStopwatchBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRandStopwatch(ptr_or_class: string|AnySDKClass): CRandStopwatch;

interface CRemapFloat {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRemapFloat(ptr_or_class: string|AnySDKClass): CRemapFloat;

interface CRenderComponent {
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

interface CResponseCriteriaSet {
    "NumPrefixedContexts": number;
    "OverrideOnAppend": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CResponseCriteriaSet(ptr_or_class: string|AnySDKClass): CResponseCriteriaSet;

interface CRopeOverlapHit {
    readonly "Entity": any;
    readonly "OverlappingLinks": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRopeOverlapHit(ptr_or_class: string|AnySDKClass): CRopeOverlapHit;

interface CSMatchStats_t {
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

interface CSPerRoundStats_t {
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

interface CSceneEventInfo {
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

interface CScriptUniformRandomStream {
    "InitialSeed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptUniformRandomStream(ptr_or_class: string|AnySDKClass): CScriptUniformRandomStream;

interface CServerOnlyModelEntity {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerOnlyModelEntity(ptr_or_class: string|AnySDKClass): CServerOnlyModelEntity;

interface CSharedGapTypeQueryRegistration {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSharedGapTypeQueryRegistration(ptr_or_class: string|AnySDKClass): CSharedGapTypeQueryRegistration;

interface CSimTimer {
    "Interval": number;
    readonly "Parent": CSimpleSimTimer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimTimer(ptr_or_class: string|AnySDKClass): CSimTimer;

interface CSimpleSimTimer {
    "Next": number;
    "WorldGroupId": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimpleSimTimer(ptr_or_class: string|AnySDKClass): CSimpleSimTimer;

interface CSimpleStopwatch {
    readonly "Parent": CStopwatchBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimpleStopwatch(ptr_or_class: string|AnySDKClass): CSimpleStopwatch;

interface CSkeletonAnimationController {
    readonly "SkeletonInstance": CSkeletonInstance;
    readonly "Parent": ISkeletonAnimationController;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkeletonAnimationController(ptr_or_class: string|AnySDKClass): CSkeletonAnimationController;

interface CSkeletonInstance {
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

interface CSkillDamage {
    readonly "Damage": CSkillFloat;
    "NPCDamageScalarVsNPC": number;
    "PhysicsForceDamage": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkillDamage(ptr_or_class: string|AnySDKClass): CSkillDamage;

interface CSkillFloat {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkillFloat(ptr_or_class: string|AnySDKClass): CSkillFloat;

interface CSkillInt {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkillInt(ptr_or_class: string|AnySDKClass): CSkillInt;

interface CSkyboxReference {
    "WorldGroupId": number;
    readonly "SkyCamera": CSkyCamera;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkyboxReference(ptr_or_class: string|AnySDKClass): CSkyboxReference;

interface CSoundEnvelope {
    "Current": number;
    "Target": number;
    "Rate": number;
    "Forceupdate": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEnvelope(ptr_or_class: string|AnySDKClass): CSoundEnvelope;

interface CSoundPatch {
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

interface CSpriteOriented {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpriteOriented(ptr_or_class: string|AnySDKClass): CSpriteOriented;

interface CStopwatch {
    "Interval": number;
    readonly "Parent": CStopwatchBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStopwatch(ptr_or_class: string|AnySDKClass): CStopwatch;

interface CStopwatchBase {
    "IsRunning": boolean;
    readonly "Parent": CSimpleSimTimer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStopwatchBase(ptr_or_class: string|AnySDKClass): CStopwatchBase;

interface CTablet {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTablet(ptr_or_class: string|AnySDKClass): CTablet;

interface CTakeDamageInfo {
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

interface CTakeDamageInfoAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTakeDamageInfoAPI(ptr_or_class: string|AnySDKClass): CTakeDamageInfoAPI;

interface CTakeDamageResult {
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

interface CTakeDamageSummaryScopeGuard {
    readonly "Summaries": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTakeDamageSummaryScopeGuard(ptr_or_class: string|AnySDKClass): CTakeDamageSummaryScopeGuard;

interface CTimeline {
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

interface CTripWireFire {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTripWireFire(ptr_or_class: string|AnySDKClass): CTripWireFire;

interface CTripWireFireProjectile {
    readonly "Parent": CBaseGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTripWireFireProjectile(ptr_or_class: string|AnySDKClass): CTripWireFireProjectile;

interface CWaterSplasher {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWaterSplasher(ptr_or_class: string|AnySDKClass): CWaterSplasher;

interface CWeaponZoneRepulsor {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponZoneRepulsor(ptr_or_class: string|AnySDKClass): CWeaponZoneRepulsor;

interface CWorldCompositionChunkReferenceElement_t {
    "StrMapToLoad": string;
    "StrLandmarkName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWorldCompositionChunkReferenceElement_t(ptr_or_class: string|AnySDKClass): CWorldCompositionChunkReferenceElement_t;

interface CommandToolCommand_t {
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

interface CompMatMutatorCondition_t {
    "MutatorCondition": number;
    "StrMutatorConditionContainerName": string;
    "StrMutatorConditionContainerVarName": string;
    "StrMutatorConditionContainerVarValue": string;
    "PassWhenTrue": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompMatMutatorCondition_t(ptr_or_class: string|AnySDKClass): CompMatMutatorCondition_t;

interface CompMatPropertyMutator_t {
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

interface CompositeMaterialAssemblyProcedure_t {
    readonly "MatchFilters": Object;
    readonly "CompositeInputContainers": Object;
    readonly "PropertyMutators": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialAssemblyProcedure_t(ptr_or_class: string|AnySDKClass): CompositeMaterialAssemblyProcedure_t;

interface CompositeMaterialEditorPoint_t {
    "SequenceIndex": number;
    "Cycle": number;
    "EnableChildModel": boolean;
    readonly "CompositeMaterialAssemblyProcedures": Object;
    readonly "CompositeMaterials": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialEditorPoint_t(ptr_or_class: string|AnySDKClass): CompositeMaterialEditorPoint_t;

interface CompositeMaterialInputContainer_t {
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

interface CompositeMaterialInputLooseVariable_t {
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

interface CompositeMaterialMatchFilter_t {
    "CompositeMaterialMatchFilterType": number;
    "StrMatchFilter": string;
    "StrMatchValue": string;
    "PassWhenTrue": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialMatchFilter_t(ptr_or_class: string|AnySDKClass): CompositeMaterialMatchFilter_t;

interface CompositeMaterial_t {
    readonly "GeneratedTextures": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterial_t(ptr_or_class: string|AnySDKClass): CompositeMaterial_t;

interface CountdownTimer {
    "Duration": number;
    "Timestamp": number;
    "Timescale": number;
    "WorldGroupId": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CountdownTimer(ptr_or_class: string|AnySDKClass): CountdownTimer;

interface EngineCountdownTimer {
    "Duration": number;
    "Timestamp": number;
    "Timescale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EngineCountdownTimer(ptr_or_class: string|AnySDKClass): EngineCountdownTimer;

interface EngineLoopState_t {
    "PlatWindowWidth": number;
    "PlatWindowHeight": number;
    "RenderWidth": number;
    "RenderHeight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EngineLoopState_t(ptr_or_class: string|AnySDKClass): EngineLoopState_t;

interface EntityRenderAttribute_t {
    "ID": number;
    "Values": Vector4D;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntityRenderAttribute_t(ptr_or_class: string|AnySDKClass): EntityRenderAttribute_t;

interface EntitySpottedState_t {
    "Spotted": boolean;
    "SpottedByMask": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntitySpottedState_t(ptr_or_class: string|AnySDKClass): EntitySpottedState_t;

interface EventAdvanceTick_t {
    "CurrentTick": number;
    "CurrentTickThisFrame": number;
    "TotalTicksThisFrame": number;
    "TotalTicks": number;
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventAdvanceTick_t;

interface EventAppShutdown_t {
    "Dummy0": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventAppShutdown_t(ptr_or_class: string|AnySDKClass): EventAppShutdown_t;

interface EventClientAdvanceNonRenderedFrame_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientAdvanceNonRenderedFrame_t(ptr_or_class: string|AnySDKClass): EventClientAdvanceNonRenderedFrame_t;

interface EventClientAdvanceTick_t {
    readonly "Parent": EventAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventClientAdvanceTick_t;

interface EventClientFrameSimulate_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "FrameTime": number;
    "ScheduleSendTickPacket": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientFrameSimulate_t(ptr_or_class: string|AnySDKClass): EventClientFrameSimulate_t;

interface EventClientOutput_t {
    readonly "LoopState": EngineLoopState_t;
    "RenderTime": number;
    "RealTime": number;
    "RenderFrameTimeUnbounded": number;
    "RenderOnly": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientOutput_t(ptr_or_class: string|AnySDKClass): EventClientOutput_t;

interface EventClientPauseSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPauseSimulate_t(ptr_or_class: string|AnySDKClass): EventClientPauseSimulate_t;

interface EventClientPollInput_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPollInput_t(ptr_or_class: string|AnySDKClass): EventClientPollInput_t;

interface EventClientPollNetworking_t {
    "TickCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPollNetworking_t(ptr_or_class: string|AnySDKClass): EventClientPollNetworking_t;

interface EventClientPostAdvanceTick_t {
    readonly "Parent": EventPostAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPostAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventClientPostAdvanceTick_t;

interface EventClientPostOutput_t {
    readonly "LoopState": EngineLoopState_t;
    "RenderTime": number;
    "RenderFrameTime": number;
    "RenderFrameTimeUnbounded": number;
    "RenderOnly": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPostOutput_t(ptr_or_class: string|AnySDKClass): EventClientPostOutput_t;

interface EventClientPostSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPostSimulate_t(ptr_or_class: string|AnySDKClass): EventClientPostSimulate_t;

interface EventClientPreOutput_t {
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

interface EventClientPreSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPreSimulate_t(ptr_or_class: string|AnySDKClass): EventClientPreSimulate_t;

interface EventClientProcessGameInput_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "FrameTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientProcessGameInput_t(ptr_or_class: string|AnySDKClass): EventClientProcessGameInput_t;

interface EventClientProcessInput_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "TickInterval": number;
    "TickStartTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientProcessInput_t(ptr_or_class: string|AnySDKClass): EventClientProcessInput_t;

interface EventClientProcessNetworking_t {
    "TickCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientProcessNetworking_t(ptr_or_class: string|AnySDKClass): EventClientProcessNetworking_t;

interface EventClientSceneSystemThreadStateChange_t {
    "ThreadsActive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientSceneSystemThreadStateChange_t(ptr_or_class: string|AnySDKClass): EventClientSceneSystemThreadStateChange_t;

interface EventClientSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientSimulate_t(ptr_or_class: string|AnySDKClass): EventClientSimulate_t;

interface EventFrameBoundary_t {
    "FrameTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventFrameBoundary_t(ptr_or_class: string|AnySDKClass): EventFrameBoundary_t;

interface EventModInitialized_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventModInitialized_t(ptr_or_class: string|AnySDKClass): EventModInitialized_t;

interface EventPostAdvanceTick_t {
    "CurrentTick": number;
    "CurrentTickThisFrame": number;
    "TotalTicksThisFrame": number;
    "TotalTicks": number;
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventPostAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventPostAdvanceTick_t;

interface EventPostDataUpdate_t {
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventPostDataUpdate_t(ptr_or_class: string|AnySDKClass): EventPostDataUpdate_t;

interface EventPreDataUpdate_t {
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventPreDataUpdate_t(ptr_or_class: string|AnySDKClass): EventPreDataUpdate_t;

interface EventProfileStorageAvailable_t {
    "SplitScreenSlot": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventProfileStorageAvailable_t(ptr_or_class: string|AnySDKClass): EventProfileStorageAvailable_t;

interface EventServerAdvanceTick_t {
    readonly "Parent": EventAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventServerAdvanceTick_t;

interface EventServerBeginAsyncPostTickWork_t {
    readonly "Parent": EventPostAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerBeginAsyncPostTickWork_t(ptr_or_class: string|AnySDKClass): EventServerBeginAsyncPostTickWork_t;

interface EventServerEndAsyncPostTickWork_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerEndAsyncPostTickWork_t(ptr_or_class: string|AnySDKClass): EventServerEndAsyncPostTickWork_t;

interface EventServerPollNetworking_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerPollNetworking_t(ptr_or_class: string|AnySDKClass): EventServerPollNetworking_t;

interface EventServerPostAdvanceTick_t {
    readonly "Parent": EventPostAdvanceTick_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerPostAdvanceTick_t(ptr_or_class: string|AnySDKClass): EventServerPostAdvanceTick_t;

interface EventServerPostSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerPostSimulate_t(ptr_or_class: string|AnySDKClass): EventServerPostSimulate_t;

interface EventServerProcessNetworking_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerProcessNetworking_t(ptr_or_class: string|AnySDKClass): EventServerProcessNetworking_t;

interface EventServerSimulate_t {
    readonly "Parent": EventSimulate_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventServerSimulate_t(ptr_or_class: string|AnySDKClass): EventServerSimulate_t;

interface EventSetTime_t {
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

interface EventSimpleLoopFrameUpdate_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "FrameTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventSimpleLoopFrameUpdate_t(ptr_or_class: string|AnySDKClass): EventSimpleLoopFrameUpdate_t;

interface EventSimulate_t {
    readonly "LoopState": EngineLoopState_t;
    "FirstTick": boolean;
    "LastTick": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventSimulate_t(ptr_or_class: string|AnySDKClass): EventSimulate_t;

interface EventSplitScreenStateChanged_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventSplitScreenStateChanged_t(ptr_or_class: string|AnySDKClass): EventSplitScreenStateChanged_t;

interface GameAmmoTypeInfo_t {
    "BuySize": number;
    "Cost": number;
    readonly "Parent": AmmoTypeInfo_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function GameAmmoTypeInfo_t(ptr_or_class: string|AnySDKClass): GameAmmoTypeInfo_t;

interface GeneratedTextureHandle_t {
    "StrBitmapName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function GeneratedTextureHandle_t(ptr_or_class: string|AnySDKClass): GeneratedTextureHandle_t;

interface HullFlags_t {
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

interface IChoreoServices {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IChoreoServices(ptr_or_class: string|AnySDKClass): IChoreoServices;

interface IClientAlphaProperty {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IClientAlphaProperty(ptr_or_class: string|AnySDKClass): IClientAlphaProperty;

interface IEconItemInterface {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IEconItemInterface(ptr_or_class: string|AnySDKClass): IEconItemInterface;

interface IGapHost_GameEntity {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_GameEntity(ptr_or_class: string|AnySDKClass): IGapHost_GameEntity;

interface IHasAttributes {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IHasAttributes(ptr_or_class: string|AnySDKClass): IHasAttributes;

interface IRagdoll {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IRagdoll(ptr_or_class: string|AnySDKClass): IRagdoll;

interface ISkeletonAnimationController {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ISkeletonAnimationController(ptr_or_class: string|AnySDKClass): ISkeletonAnimationController;

interface IntervalTimer {
    "Timestamp": number;
    "WorldGroupId": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IntervalTimer(ptr_or_class: string|AnySDKClass): IntervalTimer;

interface ModelConfigHandle_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelConfigHandle_t(ptr_or_class: string|AnySDKClass): ModelConfigHandle_t;

interface ParticleIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleIndex_t(ptr_or_class: string|AnySDKClass): ParticleIndex_t;

interface PhysicsRagdollPose_t {
    readonly "Owner": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PhysicsRagdollPose_t(ptr_or_class: string|AnySDKClass): PhysicsRagdollPose_t;

interface PointCameraSettings_t {
    "NearBlurryDistance": number;
    "NearCrispDistance": number;
    "FarCrispDistance": number;
    "FarBlurryDistance": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PointCameraSettings_t(ptr_or_class: string|AnySDKClass): PointCameraSettings_t;

interface PredictedDamageTag_t {
    "TagTick": number;
    "FlinchModSmall": number;
    "FlinchModLarge": number;
    "FriendlyFireDamageReductionRatio": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PredictedDamageTag_t(ptr_or_class: string|AnySDKClass): PredictedDamageTag_t;

interface QuestProgress {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function QuestProgress(ptr_or_class: string|AnySDKClass): QuestProgress;

interface RagdollCreationParams_t {
    "Force": Vector;
    "ForceBone": number;
    "ForceCurrentWorldTransform": boolean;
    "HealthToGrant": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RagdollCreationParams_t(ptr_or_class: string|AnySDKClass): RagdollCreationParams_t;

interface ResponseFollowup {
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

interface ResponseParams {
    "Odds": number;
    "Flags": number;
    readonly "Followup": ResponseFollowup;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ResponseParams(ptr_or_class: string|AnySDKClass): ResponseParams;

interface SceneEventId_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SceneEventId_t(ptr_or_class: string|AnySDKClass): SceneEventId_t;

interface SellbackPurchaseEntry_t {
    "DefIdx": number;
    "Cost": number;
    "PrevArmor": number;
    "PrevHelmet": boolean;
    readonly "Item": CEntityInstance;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SellbackPurchaseEntry_t(ptr_or_class: string|AnySDKClass): SellbackPurchaseEntry_t;

interface SequenceHistory_t {
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

interface ServerAuthoritativeWeaponSlot_t {
    "Class": number;
    "Slot": number;
    "ItemDefIdx": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ServerAuthoritativeWeaponSlot_t(ptr_or_class: string|AnySDKClass): ServerAuthoritativeWeaponSlot_t;

interface SummaryTakeDamageInfo_t {
    "SummarisedCount": number;
    readonly "Info": CTakeDamageInfo;
    readonly "Result": CTakeDamageResult;
    readonly "Target": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SummaryTakeDamageInfo_t(ptr_or_class: string|AnySDKClass): SummaryTakeDamageInfo_t;

interface TimedEvent {
    "TimeBetweenEvents": number;
    "NextEvent": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TimedEvent(ptr_or_class: string|AnySDKClass): TimedEvent;

interface VPhysicsCollisionAttribute_t {
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

interface ViewAngleServerChange_t {
    "Type": number;
    "Angle": QAngle;
    "Index": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ViewAngleServerChange_t(ptr_or_class: string|AnySDKClass): ViewAngleServerChange_t;

interface WaterWheelDrag_t {
    "FractionOfWheelSubmerged": number;
    "WheelDrag": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WaterWheelDrag_t(ptr_or_class: string|AnySDKClass): WaterWheelDrag_t;

interface WaterWheelFrictionScale_t {
    "FractionOfWheelSubmerged": number;
    "FrictionScale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WaterWheelFrictionScale_t(ptr_or_class: string|AnySDKClass): WaterWheelFrictionScale_t;

interface WeaponPurchaseCount_t {
    "ItemDefIndex": number;
    "Count": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WeaponPurchaseCount_t(ptr_or_class: string|AnySDKClass): WeaponPurchaseCount_t;

interface WeaponPurchaseTracker_t {
    readonly "WeaponPurchases": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WeaponPurchaseTracker_t(ptr_or_class: string|AnySDKClass): WeaponPurchaseTracker_t;

interface WrappedPhysicsJoint_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WrappedPhysicsJoint_t(ptr_or_class: string|AnySDKClass): WrappedPhysicsJoint_t;

interface audioparams_t {
    "LocalSound": Object;
    "SoundscapeIndex": number;
    "LocalBits": number;
    "SoundscapeEntityListIndex": number;
    "SoundEventHash": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function audioparams_t(ptr_or_class: string|AnySDKClass): audioparams_t;

interface fogparams_t {
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

interface hudtextparms_t {
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

interface ragdoll_t {
    readonly "List": Object;
    readonly "BoneIndex": Object;
    "AllowStretch": boolean;
    "Unused": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ragdoll_t(ptr_or_class: string|AnySDKClass): ragdoll_t;

interface ragdollelement_t {
    "OriginParentSpace": Vector;
    "ParentIndex": number;
    "Radius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ragdollelement_t(ptr_or_class: string|AnySDKClass): ragdollelement_t;

interface shard_model_desc_t {
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

interface sky3dparams_t {
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

interface sndopvarlatchdata_t {
    "Stack": string;
    "Operator": string;
    "Opvar": string;
    "Val": number;
    "Pos": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function sndopvarlatchdata_t(ptr_or_class: string|AnySDKClass): sndopvarlatchdata_t;

interface thinkfunc_t {
    "Context": number;
    "NextThinkTick": number;
    "LastThinkTick": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function thinkfunc_t(ptr_or_class: string|AnySDKClass): thinkfunc_t;

interface CEmptyEntityInstance {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEmptyEntityInstance(ptr_or_class: string|AnySDKClass): CEmptyEntityInstance;

interface CEntityComponent {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityComponent(ptr_or_class: string|AnySDKClass): CEntityComponent;

interface CEntityComponentHelper {
    "Flags": number;
    readonly "Info": EntComponentInfo_t;
    "Priority": number;
    readonly "Next": CEntityComponentHelper;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityComponentHelper(ptr_or_class: string|AnySDKClass): CEntityComponentHelper;

interface CEntityIOOutput {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityIOOutput(ptr_or_class: string|AnySDKClass): CEntityIOOutput;

interface CEntityIdentity {
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

interface CEntityInstance {
    "PrivateVScripts": string;
    readonly "Entity": CEntityIdentity;
    readonly "CScriptComponent": CScriptComponent;
    "VisibleinPVS": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityInstance(ptr_or_class: string|AnySDKClass): CEntityInstance;

interface CNetworkVarChainer {
    readonly "PathIndex": ChangeAccessorFieldPathIndex_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkVarChainer(ptr_or_class: string|AnySDKClass): CNetworkVarChainer;

interface CScriptComponent {
    "ScriptClassName": string;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptComponent(ptr_or_class: string|AnySDKClass): CScriptComponent;

interface CVariantDefaultAllocator {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVariantDefaultAllocator(ptr_or_class: string|AnySDKClass): CVariantDefaultAllocator;

interface EntComponentInfo_t {
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

interface EntInput_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntInput_t(ptr_or_class: string|AnySDKClass): EntInput_t;

interface EntOutput_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntOutput_t(ptr_or_class: string|AnySDKClass): EntOutput_t;

interface CAnimScriptBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimScriptBase(ptr_or_class: string|AnySDKClass): CAnimScriptBase;

interface MaterialParamBuffer_t {
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamBuffer_t(ptr_or_class: string|AnySDKClass): MaterialParamBuffer_t;

interface MaterialParamFloat_t {
    "Value": number;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamFloat_t(ptr_or_class: string|AnySDKClass): MaterialParamFloat_t;

interface MaterialParamInt_t {
    "Value": number;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamInt_t(ptr_or_class: string|AnySDKClass): MaterialParamInt_t;

interface MaterialParamString_t {
    "Value": string;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamString_t(ptr_or_class: string|AnySDKClass): MaterialParamString_t;

interface MaterialParamTexture_t {
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamTexture_t(ptr_or_class: string|AnySDKClass): MaterialParamTexture_t;

interface MaterialParamVector_t {
    "Value": Vector4D;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamVector_t(ptr_or_class: string|AnySDKClass): MaterialParamVector_t;

interface MaterialParam_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParam_t(ptr_or_class: string|AnySDKClass): MaterialParam_t;

interface MaterialResourceData_t {
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

interface PostProcessingBloomParameters_t {
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

interface PostProcessingLocalContrastParameters_t {
    "LocalContrastStrength": number;
    "LocalContrastEdgeStrength": number;
    "LocalContrastVignetteStart": number;
    "LocalContrastVignetteEnd": number;
    "LocalContrastVignetteBlur": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PostProcessingLocalContrastParameters_t(ptr_or_class: string|AnySDKClass): PostProcessingLocalContrastParameters_t;

interface PostProcessingResource_t {
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

interface PostProcessingTonemapParameters_t {
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

interface PostProcessingVignetteParameters_t {
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

interface AABB_t {
    "MinBounds": Vector;
    "MaxBounds": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AABB_t(ptr_or_class: string|AnySDKClass): AABB_t;

interface CFuseProgram {
    readonly "ProgramBuffer": Object;
    readonly "VariablesRead": Object;
    readonly "VariablesWritten": Object;
    "MaxTempVarsUsed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuseProgram(ptr_or_class: string|AnySDKClass): CFuseProgram;

interface CFuseSymbolTable {
    readonly "Constants": Object;
    readonly "Variables": Object;
    readonly "Functions": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuseSymbolTable(ptr_or_class: string|AnySDKClass): CFuseSymbolTable;

interface ConstantInfo_t {
    "Name": string;
    "NameToken": number;
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ConstantInfo_t(ptr_or_class: string|AnySDKClass): ConstantInfo_t;

interface FunctionInfo_t {
    "Name": string;
    "NameToken": number;
    "ParamCount": number;
    readonly "Index": FuseFunctionIndex_t;
    "IsPure": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FunctionInfo_t(ptr_or_class: string|AnySDKClass): FunctionInfo_t;

interface FuseFunctionIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FuseFunctionIndex_t(ptr_or_class: string|AnySDKClass): FuseFunctionIndex_t;

interface FuseVariableIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FuseVariableIndex_t(ptr_or_class: string|AnySDKClass): FuseVariableIndex_t;

interface VariableInfo_t {
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

interface AnimComponentID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimComponentID(ptr_or_class: string|AnySDKClass): AnimComponentID;

interface AnimNodeID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimNodeID(ptr_or_class: string|AnySDKClass): AnimNodeID;

interface AnimNodeOutputID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimNodeOutputID(ptr_or_class: string|AnySDKClass): AnimNodeOutputID;

interface AnimParamID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimParamID(ptr_or_class: string|AnySDKClass): AnimParamID;

interface AnimScriptHandle {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimScriptHandle(ptr_or_class: string|AnySDKClass): AnimScriptHandle;

interface AnimStateID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimStateID(ptr_or_class: string|AnySDKClass): AnimStateID;

interface AnimTagID {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimTagID(ptr_or_class: string|AnySDKClass): AnimTagID;

interface CAimConstraint {
    "UpType": number;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAimConstraint(ptr_or_class: string|AnySDKClass): CAimConstraint;

interface CAnimAttachment {
    "InfluenceOffsets": Object;
    "InfluenceIndices": Object;
    "InfluenceWeights": Object;
    "NumInfluences": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimAttachment(ptr_or_class: string|AnySDKClass): CAnimAttachment;

interface CAnimCycle {
    readonly "Parent": CCycleBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimCycle(ptr_or_class: string|AnySDKClass): CAnimCycle;

interface CAnimFoot {
    "Name": string;
    "BallOffset": Vector;
    "HeelOffset": Vector;
    "AnkleBoneIndex": number;
    "ToeBoneIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimFoot(ptr_or_class: string|AnySDKClass): CAnimFoot;

interface CAnimSkeleton {
    readonly "BoneNames": Object;
    readonly "Parents": Object;
    readonly "Feet": Object;
    readonly "MorphNames": Object;
    readonly "LodBoneCounts": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimSkeleton(ptr_or_class: string|AnySDKClass): CAnimSkeleton;

interface CAttachment {
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

interface CBaseConstraint {
    "Name": string;
    "UpVector": Vector;
    readonly "Targets": Object;
    readonly "Parent": CBoneConstraintBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseConstraint(ptr_or_class: string|AnySDKClass): CBaseConstraint;

interface CBoneConstraintBase {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintBase(ptr_or_class: string|AnySDKClass): CBoneConstraintBase;

interface CBoneConstraintDotToMorph {
    "BoneName": string;
    "TargetBoneName": string;
    "MorphChannelName": string;
    "Remap": Object;
    readonly "Parent": CBoneConstraintBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintDotToMorph(ptr_or_class: string|AnySDKClass): CBoneConstraintDotToMorph;

interface CBoneConstraintPoseSpaceBone {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintPoseSpaceBone(ptr_or_class: string|AnySDKClass): CBoneConstraintPoseSpaceBone;

interface CBoneConstraintPoseSpaceMorph {
    "BoneName": string;
    "AttachmentName": string;
    readonly "OutputMorph": Object;
    "Clamp": boolean;
    readonly "Parent": CBoneConstraintBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneConstraintPoseSpaceMorph(ptr_or_class: string|AnySDKClass): CBoneConstraintPoseSpaceMorph;

interface CConstraintSlave {
    "BasePosition": Vector;
    "BoneHash": number;
    "Weight": number;
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstraintSlave(ptr_or_class: string|AnySDKClass): CConstraintSlave;

interface CConstraintTarget {
    "Offset": Vector;
    "BoneHash": number;
    "Name": string;
    "Weight": number;
    "IsAttachment": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstraintTarget(ptr_or_class: string|AnySDKClass): CConstraintTarget;

interface CCycleBase {
    "Cycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCycleBase(ptr_or_class: string|AnySDKClass): CCycleBase;

interface CDrawCullingData {
    "ConeApex": Vector;
    "ConeAxis": Object;
    "ConeCutoff": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDrawCullingData(ptr_or_class: string|AnySDKClass): CDrawCullingData;

interface CFlexController {
    "Name": string;
    "Type": string;
    "Min": number;
    "Max": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexController(ptr_or_class: string|AnySDKClass): CFlexController;

interface CFlexDesc {
    "Facs": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexDesc(ptr_or_class: string|AnySDKClass): CFlexDesc;

interface CFlexOp {
    "OpCode": number;
    "Data": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexOp(ptr_or_class: string|AnySDKClass): CFlexOp;

interface CFlexRule {
    "Flex": number;
    readonly "FlexOps": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexRule(ptr_or_class: string|AnySDKClass): CFlexRule;

interface CFootCycle {
    readonly "Parent": CCycleBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootCycle(ptr_or_class: string|AnySDKClass): CFootCycle;

interface CFootCycleDefinition {
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

interface CFootDefinition {
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

interface CFootMotion {
    readonly "Strides": Object;
    "Name": string;
    "Additive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootMotion(ptr_or_class: string|AnySDKClass): CFootMotion;

interface CFootStride {
    readonly "Definition": CFootCycleDefinition;
    readonly "Trajectories": CFootTrajectories;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootStride(ptr_or_class: string|AnySDKClass): CFootStride;

interface CFootTrajectories {
    readonly "Trajectories": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootTrajectories(ptr_or_class: string|AnySDKClass): CFootTrajectories;

interface CFootTrajectory {
    "Offset": Vector;
    "RotationOffset": number;
    "Progression": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootTrajectory(ptr_or_class: string|AnySDKClass): CFootTrajectory;

interface CHitBox {
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

interface CHitBoxSet {
    "Name": string;
    "NameHash": number;
    readonly "HitBoxes": Object;
    "SourceFilename": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitBoxSet(ptr_or_class: string|AnySDKClass): CHitBoxSet;

interface CHitBoxSetList {
    readonly "HitBoxSets": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitBoxSetList(ptr_or_class: string|AnySDKClass): CHitBoxSetList;

interface CMaterialDrawDescriptor {
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

interface CMeshletDescriptor {
    readonly "CullingData": CDrawCullingData;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMeshletDescriptor(ptr_or_class: string|AnySDKClass): CMeshletDescriptor;

interface CModelConfig {
    "ConfigName": string;
    readonly "Elements": Object;
    "TopLevel": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfig(ptr_or_class: string|AnySDKClass): CModelConfig;

interface CModelConfigElement {
    "ElementName": string;
    readonly "NestedElements": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement(ptr_or_class: string|AnySDKClass): CModelConfigElement;

interface CModelConfigElement_AttachedModel {
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

interface CModelConfigElement_Command {
    "Command": string;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_Command(ptr_or_class: string|AnySDKClass): CModelConfigElement_Command;

interface CModelConfigElement_RandomColor {
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_RandomColor(ptr_or_class: string|AnySDKClass): CModelConfigElement_RandomColor;

interface CModelConfigElement_RandomPick {
    readonly "Choices": Object;
    readonly "ChoiceWeights": Object;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_RandomPick(ptr_or_class: string|AnySDKClass): CModelConfigElement_RandomPick;

interface CModelConfigElement_SetBodygroup {
    "GroupName": string;
    "Choice": number;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetBodygroup(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetBodygroup;

interface CModelConfigElement_SetBodygroupOnAttachedModels {
    "GroupName": string;
    "Choice": number;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetBodygroupOnAttachedModels(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetBodygroupOnAttachedModels;

interface CModelConfigElement_SetMaterialGroup {
    "MaterialGroupName": string;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetMaterialGroup(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetMaterialGroup;

interface CModelConfigElement_SetMaterialGroupOnAttachedModels {
    "MaterialGroupName": string;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetMaterialGroupOnAttachedModels(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetMaterialGroupOnAttachedModels;

interface CModelConfigElement_SetRenderColor {
    "Color": Color;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetRenderColor(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetRenderColor;

interface CModelConfigElement_UserPick {
    readonly "Choices": Object;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_UserPick(ptr_or_class: string|AnySDKClass): CModelConfigElement_UserPick;

interface CModelConfigList {
    "HideMaterialGroupInTools": boolean;
    "HideRenderColorInTools": boolean;
    readonly "Configs": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigList(ptr_or_class: string|AnySDKClass): CModelConfigList;

interface CMorphBundleData {
    "ULeftSrc": number;
    "VTopSrc": number;
    readonly "Offsets": Object;
    readonly "Ranges": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphBundleData(ptr_or_class: string|AnySDKClass): CMorphBundleData;

interface CMorphConstraint {
    "TargetMorph": string;
    "SlaveChannel": number;
    "Min": number;
    "Max": number;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphConstraint(ptr_or_class: string|AnySDKClass): CMorphConstraint;

interface CMorphData {
    "Name": string;
    readonly "MorphRectDatas": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphData(ptr_or_class: string|AnySDKClass): CMorphData;

interface CMorphRectData {
    "XLeftDst": number;
    "YTopDst": number;
    "UWidthSrc": number;
    "VHeightSrc": number;
    readonly "BundleDatas": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphRectData(ptr_or_class: string|AnySDKClass): CMorphRectData;

interface CMorphSetData {
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

interface COrientConstraint {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COrientConstraint(ptr_or_class: string|AnySDKClass): COrientConstraint;

interface CParentConstraint {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParentConstraint(ptr_or_class: string|AnySDKClass): CParentConstraint;

interface CPhysSurfaceProperties {
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

interface CPhysSurfacePropertiesAudio {
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

interface CPhysSurfacePropertiesPhysics {
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

interface CPhysSurfacePropertiesSoundNames {
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

interface CPointConstraint {
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointConstraint(ptr_or_class: string|AnySDKClass): CPointConstraint;

interface CRenderBufferBinding {
    "Buffer": number;
    "BindOffsetBytes": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderBufferBinding(ptr_or_class: string|AnySDKClass): CRenderBufferBinding;

interface CRenderGroom {
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

interface CRenderMesh {
    readonly "Skeleton": CRenderSkeleton;
    readonly "MeshDeformParams": DynamicMeshDeformParams_t;
    readonly "GroomData": CRenderGroom;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderMesh(ptr_or_class: string|AnySDKClass): CRenderMesh;

interface CRenderSkeleton {
    readonly "Bones": Object;
    readonly "BoneParents": Object;
    "BoneWeightCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderSkeleton(ptr_or_class: string|AnySDKClass): CRenderSkeleton;

interface CSceneObjectData {
    "MinBounds": Vector;
    "MaxBounds": Vector;
    "TintColor": Vector4D;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneObjectData(ptr_or_class: string|AnySDKClass): CSceneObjectData;

interface CTiltTwistConstraint {
    "TargetAxis": number;
    "SlaveAxis": number;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTiltTwistConstraint(ptr_or_class: string|AnySDKClass): CTiltTwistConstraint;

interface CTwistConstraint {
    "Inverse": boolean;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTwistConstraint(ptr_or_class: string|AnySDKClass): CTwistConstraint;

interface CVPhysXSurfacePropertiesList {
    readonly "SurfacePropertiesList": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVPhysXSurfacePropertiesList(ptr_or_class: string|AnySDKClass): CVPhysXSurfacePropertiesList;

interface DynamicMeshDeformParams_t {
    "TensionCompressScale": number;
    "TensionStretchScale": number;
    "RecomputeSmoothNormalsAfterAnimation": boolean;
    "ComputeDynamicMeshTensionAfterAnimation": boolean;
    "SmoothNormalsAcrossUvSeams": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function DynamicMeshDeformParams_t(ptr_or_class: string|AnySDKClass): DynamicMeshDeformParams_t;

interface MaterialGroup_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialGroup_t(ptr_or_class: string|AnySDKClass): MaterialGroup_t;

interface ModelBoneFlexDriverControl_t {
    "BoneComponent": number;
    "FlexController": string;
    "FlexControllerToken": number;
    "Min": number;
    "Max": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelBoneFlexDriverControl_t(ptr_or_class: string|AnySDKClass): ModelBoneFlexDriverControl_t;

interface ModelBoneFlexDriver_t {
    "BoneName": string;
    "BoneNameToken": number;
    readonly "Controls": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelBoneFlexDriver_t(ptr_or_class: string|AnySDKClass): ModelBoneFlexDriver_t;

interface ModelSkeletonData_t {
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

interface PermModelDataAnimatedMaterialAttribute_t {
    "AttributeName": string;
    "NumChannels": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermModelDataAnimatedMaterialAttribute_t(ptr_or_class: string|AnySDKClass): PermModelDataAnimatedMaterialAttribute_t;

interface PermModelData_t {
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

interface PermModelExtPart_t {
    "Name": string;
    "Parent": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermModelExtPart_t(ptr_or_class: string|AnySDKClass): PermModelExtPart_t;

interface PermModelInfo_t {
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

interface PhysSoftbodyDesc_t {
    readonly "ParticleBoneHash": Object;
    readonly "Particles": Object;
    readonly "Springs": Object;
    readonly "Capsules": Object;
    readonly "ParticleBoneName": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PhysSoftbodyDesc_t(ptr_or_class: string|AnySDKClass): PhysSoftbodyDesc_t;

interface RenderHairStrandInfo_t {
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

interface RenderSkeletonBone_t {
    "BoneName": string;
    "ParentName": string;
    readonly "Bbox": SkeletonBoneBounds_t;
    "SphereRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RenderSkeletonBone_t(ptr_or_class: string|AnySDKClass): RenderSkeletonBone_t;

interface SkeletonAnimCapture_t {
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

interface SkeletonBoneBounds_t {
    "Center": Vector;
    "Size": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SkeletonBoneBounds_t(ptr_or_class: string|AnySDKClass): SkeletonBoneBounds_t;

interface SkeletonDemoDb_t {
    readonly "AnimCaptures": Object;
    "RecordingTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SkeletonDemoDb_t(ptr_or_class: string|AnySDKClass): SkeletonDemoDb_t;

interface VPhysXAggregateData_t {
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

interface VPhysXBodyPart_t {
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

interface VPhysXCollisionAttributes_t {
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

interface VPhysXConstraint2_t {
    "Flags": number;
    "Parent": number;
    "Child": number;
    readonly "Params": VPhysXConstraintParams_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXConstraint2_t(ptr_or_class: string|AnySDKClass): VPhysXConstraint2_t;

interface VPhysXConstraintParams_t {
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

interface VPhysXJoint_t {
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

interface VPhysXRange_t {
    "Min": number;
    "Max": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXRange_t(ptr_or_class: string|AnySDKClass): VPhysXRange_t;

interface VPhysics2ShapeDef_t {
    readonly "Spheres": Object;
    readonly "Capsules": Object;
    readonly "Hulls": Object;
    readonly "Meshes": Object;
    readonly "CollisionAttributeIndices": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysics2ShapeDef_t(ptr_or_class: string|AnySDKClass): VPhysics2ShapeDef_t;

interface CNavHullPresetVData {
    readonly "NavHulls": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavHullPresetVData(ptr_or_class: string|AnySDKClass): CNavHullPresetVData;

interface CNavHullVData {
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

interface CNavVolume {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolume(ptr_or_class: string|AnySDKClass): CNavVolume;

interface CNavVolumeAll {
    readonly "Parent": CNavVolumeVector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeAll(ptr_or_class: string|AnySDKClass): CNavVolumeAll;

interface CNavVolumeSphere {
    "Center": Vector;
    "Radius": number;
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeSphere(ptr_or_class: string|AnySDKClass): CNavVolumeSphere;

interface CNavVolumeSphericalShell {
    "RadiusInner": number;
    readonly "Parent": CNavVolumeSphere;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeSphericalShell(ptr_or_class: string|AnySDKClass): CNavVolumeSphericalShell;

interface CNavVolumeVector {
    "HasBeenPreFiltered": boolean;
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeVector(ptr_or_class: string|AnySDKClass): CNavVolumeVector;

interface Extent {
    "Lo": Vector;
    "Hi": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function Extent(ptr_or_class: string|AnySDKClass): Extent;

interface NavGravity_t {
    "Gravity": Vector;
    "Default": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NavGravity_t(ptr_or_class: string|AnySDKClass): NavGravity_t;

interface ChangeAccessorFieldPathIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ChangeAccessorFieldPathIndex_t(ptr_or_class: string|AnySDKClass): ChangeAccessorFieldPathIndex_t;

interface CBaseRendererSource2 {
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

interface CBaseTrailRenderer {
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

interface CGeneralRandomRotation {
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

interface CGeneralSpin {
    "SpinRateDegrees": number;
    "SpinRateMinDegrees": number;
    "SpinRateStopTime": number;
    readonly "Parent": CParticleFunctionOperator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGeneralSpin(ptr_or_class: string|AnySDKClass): CGeneralSpin;

interface CParticleFunction {
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

interface CParticleFunctionConstraint {
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionConstraint(ptr_or_class: string|AnySDKClass): CParticleFunctionConstraint;

interface CParticleFunctionEmitter {
    "EmitterIndex": number;
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionEmitter(ptr_or_class: string|AnySDKClass): CParticleFunctionEmitter;

interface CParticleFunctionForce {
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionForce(ptr_or_class: string|AnySDKClass): CParticleFunctionForce;

interface CParticleFunctionInitializer {
    "AssociatedEmitterIndex": number;
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionInitializer(ptr_or_class: string|AnySDKClass): CParticleFunctionInitializer;

interface CParticleFunctionOperator {
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionOperator(ptr_or_class: string|AnySDKClass): CParticleFunctionOperator;

interface CParticleFunctionPreEmission {
    "RunOnce": boolean;
    readonly "Parent": CParticleFunctionOperator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionPreEmission(ptr_or_class: string|AnySDKClass): CParticleFunctionPreEmission;

interface CParticleFunctionRenderer {
    readonly "VisibilityInputs": CParticleVisibilityInputs;
    "CannotBeRefracted": boolean;
    "SkipRenderingOnMobile": boolean;
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionRenderer(ptr_or_class: string|AnySDKClass): CParticleFunctionRenderer;

interface CParticleMassCalculationParameters {
    "MassMode": number;
    readonly "Radius": CPerParticleFloatInput;
    readonly "NominalRadius": CPerParticleFloatInput;
    readonly "Scale": CPerParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleMassCalculationParameters(ptr_or_class: string|AnySDKClass): CParticleMassCalculationParameters;

interface CParticleSystemDefinition {
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

interface CParticleVisibilityInputs {
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

interface CPathParameters {
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

interface CRandomNumberGeneratorParameters {
    "DistributeEvenly": boolean;
    "Seed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRandomNumberGeneratorParameters(ptr_or_class: string|AnySDKClass): CRandomNumberGeneratorParameters;

interface CReplicationParameters {
    "ReplicationMode": number;
    "ScaleChildParticleRadii": boolean;
    readonly "MinRandomRadiusScale": CParticleCollectionFloatInput;
    readonly "MaxRandomRadiusScale": CParticleCollectionFloatInput;
    readonly "ModellingScale": CParticleCollectionFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CReplicationParameters(ptr_or_class: string|AnySDKClass): CReplicationParameters;

interface CSpinUpdateBase {
    readonly "Parent": CParticleFunctionOperator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpinUpdateBase(ptr_or_class: string|AnySDKClass): CSpinUpdateBase;

interface CollisionGroupContext_t {
    "CollisionGroupNumber": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CollisionGroupContext_t(ptr_or_class: string|AnySDKClass): CollisionGroupContext_t;

interface ControlPointReference_t {
    "ControlPointNameString": number;
    "OffsetFromControlPoint": Vector;
    "OffsetInLocalSpace": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ControlPointReference_t(ptr_or_class: string|AnySDKClass): ControlPointReference_t;

interface IParticleCollection {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IParticleCollection(ptr_or_class: string|AnySDKClass): IParticleCollection;

interface MaterialVariable_t {
    "StrVariable": string;
    readonly "VariableField": ParticleAttributeIndex_t;
    "Scale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialVariable_t(ptr_or_class: string|AnySDKClass): MaterialVariable_t;

interface ModelReference_t {
    "RelativeProbabilityOfSpawn": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelReference_t(ptr_or_class: string|AnySDKClass): ModelReference_t;

interface ParticleAttributeIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleAttributeIndex_t(ptr_or_class: string|AnySDKClass): ParticleAttributeIndex_t;

interface ParticleChildrenInfo_t {
    "Delay": number;
    "EndCap": boolean;
    "DisableChild": boolean;
    "DetailLevel": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleChildrenInfo_t(ptr_or_class: string|AnySDKClass): ParticleChildrenInfo_t;

interface ParticleControlPointConfiguration_t {
    "Name": string;
    readonly "Drivers": Object;
    readonly "PreviewState": ParticlePreviewState_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleControlPointConfiguration_t(ptr_or_class: string|AnySDKClass): ParticleControlPointConfiguration_t;

interface ParticleControlPointDriver_t {
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

interface ParticlePreviewBodyGroup_t {
    "BodyGroupName": string;
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticlePreviewBodyGroup_t(ptr_or_class: string|AnySDKClass): ParticlePreviewBodyGroup_t;

interface ParticlePreviewState_t {
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

interface PointDefinitionWithTimeValues_t {
    "TimeDuration": number;
    readonly "Parent": PointDefinition_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PointDefinitionWithTimeValues_t(ptr_or_class: string|AnySDKClass): PointDefinitionWithTimeValues_t;

interface PointDefinition_t {
    "ControlPoint": number;
    "LocalCoords": boolean;
    "Offset": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PointDefinition_t(ptr_or_class: string|AnySDKClass): PointDefinition_t;

interface RenderProjectedMaterial_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RenderProjectedMaterial_t(ptr_or_class: string|AnySDKClass): RenderProjectedMaterial_t;

interface SequenceWeightedList_t {
    "Sequence": number;
    "RelativeWeight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SequenceWeightedList_t(ptr_or_class: string|AnySDKClass): SequenceWeightedList_t;

interface TextureControls_t {
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

interface TextureGroup_t {
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

interface VecInputMaterialVariable_t {
    "StrVariable": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VecInputMaterialVariable_t(ptr_or_class: string|AnySDKClass): VecInputMaterialVariable_t;

interface CNewParticleEffect {
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

interface CParticleCollectionBindingInstance {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleCollectionBindingInstance(ptr_or_class: string|AnySDKClass): CParticleCollectionBindingInstance;

interface CParticleCollectionFloatInput {
    readonly "Parent": CParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleCollectionFloatInput(ptr_or_class: string|AnySDKClass): CParticleCollectionFloatInput;

interface CParticleCollectionRendererFloatInput {
    readonly "Parent": CParticleCollectionFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleCollectionRendererFloatInput(ptr_or_class: string|AnySDKClass): CParticleCollectionRendererFloatInput;

interface CParticleCollectionRendererVecInput {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleCollectionRendererVecInput(ptr_or_class: string|AnySDKClass): CParticleCollectionRendererVecInput;

interface CParticleFloatInput {
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

interface CParticleInput {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleInput(ptr_or_class: string|AnySDKClass): CParticleInput;

interface CParticleModelInput {
    "Type": number;
    "ControlPoint": number;
    readonly "Parent": CParticleInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleModelInput(ptr_or_class: string|AnySDKClass): CParticleModelInput;

interface CParticleProperty {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleProperty(ptr_or_class: string|AnySDKClass): CParticleProperty;

interface CParticleRemapFloatInput {
    readonly "Parent": CParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleRemapFloatInput(ptr_or_class: string|AnySDKClass): CParticleRemapFloatInput;

interface CParticleTransformInput {
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

interface CParticleVecInput {
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

interface CPerParticleFloatInput {
    readonly "Parent": CParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPerParticleFloatInput(ptr_or_class: string|AnySDKClass): CPerParticleFloatInput;

interface CPerParticleVecInput {
    readonly "Parent": CParticleVecInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPerParticleVecInput(ptr_or_class: string|AnySDKClass): CPerParticleVecInput;

interface IParticleEffect {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IParticleEffect(ptr_or_class: string|AnySDKClass): IParticleEffect;

interface PARTICLE_EHANDLE__ {
    "Unused": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PARTICLE_EHANDLE__(ptr_or_class: string|AnySDKClass): PARTICLE_EHANDLE__;

interface PARTICLE_WORLD_HANDLE__ {
    "Unused": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PARTICLE_WORLD_HANDLE__(ptr_or_class: string|AnySDKClass): PARTICLE_WORLD_HANDLE__;

interface ParticleNamedValueConfiguration_t {
    "ConfigName": string;
    "AttachType": number;
    "BoundEntityPath": string;
    "StrEntityScope": string;
    "StrAttachmentName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleNamedValueConfiguration_t(ptr_or_class: string|AnySDKClass): ParticleNamedValueConfiguration_t;

interface ParticleNamedValueSource_t {
    "Name": string;
    "IsPublic": boolean;
    "ValueType": any;
    readonly "DefaultConfig": ParticleNamedValueConfiguration_t;
    readonly "NamedConfigs": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleNamedValueSource_t(ptr_or_class: string|AnySDKClass): ParticleNamedValueSource_t;

interface CFeIndexedJiggleBone {
    "Node": number;
    "JiggleParent": number;
    readonly "JiggleBone": CFeJiggleBone;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeIndexedJiggleBone(ptr_or_class: string|AnySDKClass): CFeIndexedJiggleBone;

interface CFeJiggleBone {
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

interface CFeMorphLayer {
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

interface CFeNamedJiggleBone {
    "StrParentBone": string;
    "JiggleParent": number;
    readonly "JiggleBone": CFeJiggleBone;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeNamedJiggleBone(ptr_or_class: string|AnySDKClass): CFeNamedJiggleBone;

interface CFeVertexMapBuildArray {
    readonly "Array": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFeVertexMapBuildArray(ptr_or_class: string|AnySDKClass): CFeVertexMapBuildArray;

interface CRegionSVM {
    readonly "Planes": Object;
    readonly "Nodes": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRegionSVM(ptr_or_class: string|AnySDKClass): CRegionSVM;

interface CastSphereSATParams_t {
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

interface CovMatrix3 {
    "Diag": Vector;
    "XY": number;
    "XZ": number;
    "YZ": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CovMatrix3(ptr_or_class: string|AnySDKClass): CovMatrix3;

interface Dop26_t {
    "Support": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function Dop26_t(ptr_or_class: string|AnySDKClass): Dop26_t;

interface FeAnimStrayRadius_t {
    "Node": Object;
    "MaxDist": number;
    "RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeAnimStrayRadius_t(ptr_or_class: string|AnySDKClass): FeAnimStrayRadius_t;

interface FeAntiTunnelProbeBuild_t {
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

interface FeAntiTunnelProbe_t {
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

interface FeAxialEdgeBend_t {
    "Te": number;
    "Tv": number;
    "Dist": number;
    "Weight": Object;
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeAxialEdgeBend_t(ptr_or_class: string|AnySDKClass): FeAxialEdgeBend_t;

interface FeBandBendLimit_t {
    "DistMin": number;
    "DistMax": number;
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBandBendLimit_t(ptr_or_class: string|AnySDKClass): FeBandBendLimit_t;

interface FeBoxRigid_t {
    "Node": number;
    "CollisionMask": number;
    "Size": Vector;
    "VertexMapIndex": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBoxRigid_t(ptr_or_class: string|AnySDKClass): FeBoxRigid_t;

interface FeBuildBoxRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeBoxRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildBoxRigid_t(ptr_or_class: string|AnySDKClass): FeBuildBoxRigid_t;

interface FeBuildSDFRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeSDFRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildSDFRigid_t(ptr_or_class: string|AnySDKClass): FeBuildSDFRigid_t;

interface FeBuildSphereRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeSphereRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildSphereRigid_t(ptr_or_class: string|AnySDKClass): FeBuildSphereRigid_t;

interface FeBuildTaperedCapsuleRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeTaperedCapsuleRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildTaperedCapsuleRigid_t(ptr_or_class: string|AnySDKClass): FeBuildTaperedCapsuleRigid_t;

interface FeCollisionPlane_t {
    "CtrlParent": number;
    "ChildNode": number;
    readonly "Plane": RnPlane_t;
    "Strength": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCollisionPlane_t(ptr_or_class: string|AnySDKClass): FeCollisionPlane_t;

interface FeCtrlOffset_t {
    "Offset": Vector;
    "CtrlParent": number;
    "CtrlChild": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCtrlOffset_t(ptr_or_class: string|AnySDKClass): FeCtrlOffset_t;

interface FeCtrlOsOffset_t {
    "CtrlParent": number;
    "CtrlChild": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCtrlOsOffset_t(ptr_or_class: string|AnySDKClass): FeCtrlOsOffset_t;

interface FeCtrlSoftOffset_t {
    "CtrlParent": number;
    "CtrlChild": number;
    "Offset": Vector;
    "Alpha": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCtrlSoftOffset_t(ptr_or_class: string|AnySDKClass): FeCtrlSoftOffset_t;

interface FeEdgeDesc_t {
    "Edge": Object;
    "VirtElem": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeEdgeDesc_t(ptr_or_class: string|AnySDKClass): FeEdgeDesc_t;

interface FeEffectDesc_t {
    "Name": string;
    "NameHash": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeEffectDesc_t(ptr_or_class: string|AnySDKClass): FeEffectDesc_t;

interface FeFitInfluence_t {
    "VertexNode": number;
    "Weight": number;
    "MatrixNode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFitInfluence_t(ptr_or_class: string|AnySDKClass): FeFitInfluence_t;

interface FeFitMatrix_t {
    "Center": Vector;
    "End": number;
    "Node": number;
    "BeginDynamic": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFitMatrix_t(ptr_or_class: string|AnySDKClass): FeFitMatrix_t;

interface FeFitWeight_t {
    "Weight": number;
    "Node": number;
    "Dummy": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFitWeight_t(ptr_or_class: string|AnySDKClass): FeFitWeight_t;

interface FeFollowNode_t {
    "ParentNode": number;
    "ChildNode": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFollowNode_t(ptr_or_class: string|AnySDKClass): FeFollowNode_t;

interface FeHingeLimitBuild_t {
    "Node": Object;
    "Flags": number;
    "LimitCW": number;
    "LimitCCW": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeHingeLimitBuild_t(ptr_or_class: string|AnySDKClass): FeHingeLimitBuild_t;

interface FeHingeLimit_t {
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

interface FeKelagerBend2_t {
    "Weight": Object;
    "Height0": number;
    "Node": Object;
    "Reserved": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeKelagerBend2_t(ptr_or_class: string|AnySDKClass): FeKelagerBend2_t;

interface FeMorphLayerDepr_t {
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

interface FeNodeBase_t {
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

interface FeNodeIntegrator_t {
    "PointDamping": number;
    "AnimationForceAttraction": number;
    "AnimationVertexAttraction": number;
    "Gravity": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeNodeIntegrator_t(ptr_or_class: string|AnySDKClass): FeNodeIntegrator_t;

interface FeNodeReverseOffset_t {
    "Offset": Vector;
    "BoneCtrl": number;
    "TargetNode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeNodeReverseOffset_t(ptr_or_class: string|AnySDKClass): FeNodeReverseOffset_t;

interface FeNodeWindBase_t {
    "NodeX0": number;
    "NodeX1": number;
    "NodeY0": number;
    "NodeY1": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeNodeWindBase_t(ptr_or_class: string|AnySDKClass): FeNodeWindBase_t;

interface FeProxyVertexMap_t {
    "Name": string;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeProxyVertexMap_t(ptr_or_class: string|AnySDKClass): FeProxyVertexMap_t;

interface FeQuad_t {
    "Node": Object;
    "Slack": number;
    "Shape": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeQuad_t(ptr_or_class: string|AnySDKClass): FeQuad_t;

interface FeRigidColliderIndices_t {
    "TaperedCapsuleRigidIndex": number;
    "SphereRigidIndex": number;
    "BoxRigidIndex": number;
    "SDFRigidIndex": number;
    "CollisionPlaneIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeRigidColliderIndices_t(ptr_or_class: string|AnySDKClass): FeRigidColliderIndices_t;

interface FeRodConstraint_t {
    "Node": Object;
    "MaxDist": number;
    "MinDist": number;
    "Weight0": number;
    "RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeRodConstraint_t(ptr_or_class: string|AnySDKClass): FeRodConstraint_t;

interface FeSDFRigid_t {
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

interface FeSimdAnimStrayRadius_t {
    "MaxDist": number;
    "RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdAnimStrayRadius_t(ptr_or_class: string|AnySDKClass): FeSimdAnimStrayRadius_t;

interface FeSimdNodeBase_t {
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

interface FeSimdQuad_t {
    "4Slack": number;
    "4Weights": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdQuad_t(ptr_or_class: string|AnySDKClass): FeSimdQuad_t;

interface FeSimdRodConstraintAnim_t {
    "4Weight0": number;
    "4RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdRodConstraintAnim_t(ptr_or_class: string|AnySDKClass): FeSimdRodConstraintAnim_t;

interface FeSimdRodConstraint_t {
    "4MaxDist": number;
    "4MinDist": number;
    "4Weight0": number;
    "4RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdRodConstraint_t(ptr_or_class: string|AnySDKClass): FeSimdRodConstraint_t;

interface FeSimdSpringIntegrator_t {
    "SpringRestLength": number;
    "SpringConstant": number;
    "SpringDamping": number;
    "NodeWeight0": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdSpringIntegrator_t(ptr_or_class: string|AnySDKClass): FeSimdSpringIntegrator_t;

interface FeSimdTri_t {
    "W1": number;
    "W2": number;
    "1x": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdTri_t(ptr_or_class: string|AnySDKClass): FeSimdTri_t;

interface FeSoftParent_t {
    "Parent": number;
    "Alpha": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSoftParent_t(ptr_or_class: string|AnySDKClass): FeSoftParent_t;

interface FeSourceEdge_t {
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSourceEdge_t(ptr_or_class: string|AnySDKClass): FeSourceEdge_t;

interface FeSphereRigid_t {
    "Sphere": number;
    "Node": number;
    "CollisionMask": number;
    "VertexMapIndex": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSphereRigid_t(ptr_or_class: string|AnySDKClass): FeSphereRigid_t;

interface FeSpringIntegrator_t {
    "Node": Object;
    "SpringRestLength": number;
    "SpringConstant": number;
    "SpringDamping": number;
    "NodeWeight0": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSpringIntegrator_t(ptr_or_class: string|AnySDKClass): FeSpringIntegrator_t;

interface FeStiffHingeBuild_t {
    "MaxAngle": number;
    "Strength": number;
    "MotionBias": Object;
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeStiffHingeBuild_t(ptr_or_class: string|AnySDKClass): FeStiffHingeBuild_t;

interface FeTaperedCapsuleRigid_t {
    "Sphere": Object;
    "Node": number;
    "CollisionMask": number;
    "VertexMapIndex": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTaperedCapsuleRigid_t(ptr_or_class: string|AnySDKClass): FeTaperedCapsuleRigid_t;

interface FeTaperedCapsuleStretch_t {
    "Node": Object;
    "CollisionMask": number;
    "Dummy": number;
    "Radius": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTaperedCapsuleStretch_t(ptr_or_class: string|AnySDKClass): FeTaperedCapsuleStretch_t;

interface FeTreeChildren_t {
    "Child": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTreeChildren_t(ptr_or_class: string|AnySDKClass): FeTreeChildren_t;

interface FeTri_t {
    "2": Vector2D;
    "Node": Object;
    "W1": number;
    "W2": number;
    "1x": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTri_t(ptr_or_class: string|AnySDKClass): FeTri_t;

interface FeTwistConstraint_t {
    "NodeOrient": number;
    "NodeEnd": number;
    "TwistRelax": number;
    "SwingRelax": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTwistConstraint_t(ptr_or_class: string|AnySDKClass): FeTwistConstraint_t;

interface FeVertexMapBuild_t {
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

interface FeVertexMapDesc_t {
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

interface FeWeightedNode_t {
    "Node": number;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeWeightedNode_t(ptr_or_class: string|AnySDKClass): FeWeightedNode_t;

interface FeWorldCollisionParams_t {
    "WorldFriction": number;
    "GroundFriction": number;
    "ListBegin": number;
    "ListEnd": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeWorldCollisionParams_t(ptr_or_class: string|AnySDKClass): FeWorldCollisionParams_t;

interface FourCovMatrices3 {
    "XY": number;
    "XZ": number;
    "YZ": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FourCovMatrices3(ptr_or_class: string|AnySDKClass): FourCovMatrices3;

interface OldFeEdge_t {
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

interface PhysFeModelDesc_t {
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

interface RnBlendVertex_t {
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

interface RnBodyDesc_t {
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

interface RnCapsuleDesc_t {
    readonly "Capsule": RnCapsule_t;
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnCapsuleDesc_t(ptr_or_class: string|AnySDKClass): RnCapsuleDesc_t;

interface RnCapsule_t {
    "Center": Object;
    "Radius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnCapsule_t(ptr_or_class: string|AnySDKClass): RnCapsule_t;

interface RnFace_t {
    "Edge": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnFace_t(ptr_or_class: string|AnySDKClass): RnFace_t;

interface RnHalfEdge_t {
    "Next": number;
    "Twin": number;
    "Origin": number;
    "Face": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnHalfEdge_t(ptr_or_class: string|AnySDKClass): RnHalfEdge_t;

interface RnHullDesc_t {
    readonly "Hull": any;
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnHullDesc_t(ptr_or_class: string|AnySDKClass): RnHullDesc_t;

interface RnHull_t {
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

interface RnMeshDesc_t {
    readonly "Mesh": RnMesh_t;
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnMeshDesc_t(ptr_or_class: string|AnySDKClass): RnMeshDesc_t;

interface RnMesh_t {
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

interface RnNode_t {
    "Min": Vector;
    "Children": number;
    "Max": Vector;
    "TriangleOffset": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnNode_t(ptr_or_class: string|AnySDKClass): RnNode_t;

interface RnPlane_t {
    "Normal": Vector;
    "Offset": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnPlane_t(ptr_or_class: string|AnySDKClass): RnPlane_t;

interface RnShapeDesc_t {
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

interface RnSoftbodyCapsule_t {
    "Center": Object;
    "Radius": number;
    "Particle": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSoftbodyCapsule_t(ptr_or_class: string|AnySDKClass): RnSoftbodyCapsule_t;

interface RnSoftbodyParticle_t {
    "MassInv": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSoftbodyParticle_t(ptr_or_class: string|AnySDKClass): RnSoftbodyParticle_t;

interface RnSoftbodySpring_t {
    "Particle": Object;
    "Length": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSoftbodySpring_t(ptr_or_class: string|AnySDKClass): RnSoftbodySpring_t;

interface RnSphereDesc_t {
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSphereDesc_t(ptr_or_class: string|AnySDKClass): RnSphereDesc_t;

interface RnTriangle_t {
    "Index": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnTriangle_t(ptr_or_class: string|AnySDKClass): RnTriangle_t;

interface RnVertex_t {
    "Edge": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnVertex_t(ptr_or_class: string|AnySDKClass): RnVertex_t;

interface RnWing_t {
    "Index": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnWing_t(ptr_or_class: string|AnySDKClass): RnWing_t;

interface VertexPositionColor_t {
    "Position": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VertexPositionColor_t(ptr_or_class: string|AnySDKClass): VertexPositionColor_t;

interface VertexPositionNormal_t {
    "Position": Vector;
    "Normal": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VertexPositionNormal_t(ptr_or_class: string|AnySDKClass): VertexPositionNormal_t;

interface CTestDomainDerived_Cursor {
    "CursorValueA": number;
    "CursorValueB": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTestDomainDerived_Cursor(ptr_or_class: string|AnySDKClass): CTestDomainDerived_Cursor;

interface FakeEntityDerivedA_tAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FakeEntityDerivedA_tAPI(ptr_or_class: string|AnySDKClass): FakeEntityDerivedA_tAPI;

interface FakeEntityDerivedB_tAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FakeEntityDerivedB_tAPI(ptr_or_class: string|AnySDKClass): FakeEntityDerivedB_tAPI;

interface FakeEntity_tAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FakeEntity_tAPI(ptr_or_class: string|AnySDKClass): FakeEntity_tAPI;

interface IGapHost_Cursor {
    readonly "Parent": IGapHost_ExecLog;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_Cursor(ptr_or_class: string|AnySDKClass): IGapHost_Cursor;

interface IGapHost_ExecLog {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_ExecLog(ptr_or_class: string|AnySDKClass): IGapHost_ExecLog;

interface IGapHost_YieldingCursor {
    readonly "Parent": IGapHost_Cursor;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_YieldingCursor(ptr_or_class: string|AnySDKClass): IGapHost_YieldingCursor;

interface SignatureOutflow_Continue {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SignatureOutflow_Continue(ptr_or_class: string|AnySDKClass): SignatureOutflow_Continue;

interface SignatureOutflow_Resume {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SignatureOutflow_Resume(ptr_or_class: string|AnySDKClass): SignatureOutflow_Resume;

interface RenderInputLayoutField_t {
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

interface VsInputSignatureElement_t {
    "Name": string;
    "Semantic": string;
    "D3DSemanticName": string;
    "D3DSemanticIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VsInputSignatureElement_t(ptr_or_class: string|AnySDKClass): VsInputSignatureElement_t;

interface VsInputSignature_t {
    readonly "Elems": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VsInputSignature_t(ptr_or_class: string|AnySDKClass): VsInputSignature_t;

interface CExampleSchemaVData_Monomorphic {
    "Example1": number;
    "Example2": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_Monomorphic(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_Monomorphic;

interface CExampleSchemaVData_PolymorphicBase {
    "Base": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_PolymorphicBase(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_PolymorphicBase;

interface CExampleSchemaVData_PolymorphicDerivedA {
    "DerivedA": number;
    readonly "Parent": CExampleSchemaVData_PolymorphicBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_PolymorphicDerivedA(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_PolymorphicDerivedA;

interface CExampleSchemaVData_PolymorphicDerivedB {
    "DerivedB": number;
    readonly "Parent": CExampleSchemaVData_PolymorphicBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CExampleSchemaVData_PolymorphicDerivedB(ptr_or_class: string|AnySDKClass): CExampleSchemaVData_PolymorphicDerivedB;

interface ResourceId_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ResourceId_t(ptr_or_class: string|AnySDKClass): ResourceId_t;

interface ManifestTestResource_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ManifestTestResource_t(ptr_or_class: string|AnySDKClass): ManifestTestResource_t;

interface TestResource_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TestResource_t(ptr_or_class: string|AnySDKClass): TestResource_t;

interface CSSDSEndFrameViewInfo {
    "ViewId": number;
    "ViewName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSEndFrameViewInfo(ptr_or_class: string|AnySDKClass): CSSDSEndFrameViewInfo;

interface CSSDSMsg_EndFrame {
    readonly "Views": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_EndFrame(ptr_or_class: string|AnySDKClass): CSSDSMsg_EndFrame;

interface CSSDSMsg_LayerBase {
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

interface CSSDSMsg_PostLayer {
    readonly "Parent": CSSDSMsg_LayerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_PostLayer(ptr_or_class: string|AnySDKClass): CSSDSMsg_PostLayer;

interface CSSDSMsg_PreLayer {
    readonly "Parent": CSSDSMsg_LayerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_PreLayer(ptr_or_class: string|AnySDKClass): CSSDSMsg_PreLayer;

interface CSSDSMsg_ViewRender {
    readonly "ViewId": SceneViewId_t;
    "ViewName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_ViewRender(ptr_or_class: string|AnySDKClass): CSSDSMsg_ViewRender;

interface CSSDSMsg_ViewTarget {
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

interface CSSDSMsg_ViewTargetList {
    readonly "ViewId": SceneViewId_t;
    "ViewName": string;
    readonly "Targets": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_ViewTargetList(ptr_or_class: string|AnySDKClass): CSSDSMsg_ViewTargetList;

interface SceneViewId_t {
    "ViewId": number;
    "FrameCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SceneViewId_t(ptr_or_class: string|AnySDKClass): SceneViewId_t;

interface AutoRoomDoorwayPairs_t {
    "P1": Vector;
    "P2": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AutoRoomDoorwayPairs_t(ptr_or_class: string|AnySDKClass): AutoRoomDoorwayPairs_t;

interface CAISound {
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

interface CAI_ChangeHintGroup {
    "SearchType": number;
    "StrSearchName": string;
    "StrNewHintGroup": string;
    "Radius": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAI_ChangeHintGroup(ptr_or_class: string|AnySDKClass): CAI_ChangeHintGroup;

interface CAI_Expresser {
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

interface CAI_ExpresserWithFollowup {
    readonly "PostponedFollowup": ResponseFollowup;
    readonly "Parent": CAI_Expresser;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAI_ExpresserWithFollowup(ptr_or_class: string|AnySDKClass): CAI_ExpresserWithFollowup;

interface CAK47 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAK47(ptr_or_class: string|AnySDKClass): CAK47;

interface CAmbientGeneric {
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

interface CAttributeContainer {
    readonly "Item": CEconItemView;
    readonly "Parent": CAttributeManager;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAttributeContainer(ptr_or_class: string|AnySDKClass): CAttributeContainer;

interface CBarnLight {
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

interface CBaseButton {
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

interface CBaseCSGrenade {
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

interface CBaseCSGrenadeProjectile {
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

interface CBaseClientUIEntity {
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

interface CBaseCombatCharacter {
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

interface CBaseDMStart {
    "Master": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseDMStart(ptr_or_class: string|AnySDKClass): CBaseDMStart;

interface CBaseDoor {
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

interface CBaseEntity {
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

interface CBaseEntityAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseEntityAPI(ptr_or_class: string|AnySDKClass): CBaseEntityAPI;

interface CBaseFilter {
    "Negated": boolean;
    readonly "OnPass": CEntityIOOutput;
    readonly "OnFail": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseFilter(ptr_or_class: string|AnySDKClass): CBaseFilter;

interface CBaseFire {
    "Scale": number;
    "StartScale": number;
    "ScaleTime": number;
    "Flags": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseFire(ptr_or_class: string|AnySDKClass): CBaseFire;

interface CBaseFlex {
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

interface CBaseFlexAlias_funCBaseFlex {
    readonly "Parent": CBaseFlex;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseFlexAlias_funCBaseFlex(ptr_or_class: string|AnySDKClass): CBaseFlexAlias_funCBaseFlex;

interface CBaseGrenade {
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

interface CBaseIssue {
    "TypeString": string;
    "DetailsString": string;
    "NumYesVotes": number;
    "NumNoVotes": number;
    "NumPotentialVotes": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseIssue(ptr_or_class: string|AnySDKClass): CBaseIssue;

interface CBaseModelEntity {
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

interface CBaseMoveBehavior {
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

interface CBasePlatTrain {
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

interface CBasePlayerPawn {
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

interface CBasePlayerWeapon {
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

interface CBasePropDoor {
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

interface CBaseToggle {
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

interface CBaseTrigger {
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

interface CBaseViewModel {
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

interface CBeam {
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

interface CBlood {
    "SprayAngles": QAngle;
    "SprayDir": Vector;
    "Amount": number;
    "Color": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlood(ptr_or_class: string|AnySDKClass): CBlood;

interface CBot {
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

interface CBreakable {
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

interface CBreakableProp {
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

interface CBtActionAim {
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

interface CBtActionCombatPositioning {
    "SensorInputKey": string;
    "IsAttackingKey": string;
    readonly "ActionTimer": CountdownTimer;
    "Crouching": boolean;
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtActionCombatPositioning(ptr_or_class: string|AnySDKClass): CBtActionCombatPositioning;

interface CBtActionMoveTo {
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

interface CBtActionParachutePositioning {
    readonly "ActionTimer": CountdownTimer;
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtActionParachutePositioning(ptr_or_class: string|AnySDKClass): CBtActionParachutePositioning;

interface CBtNode {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNode(ptr_or_class: string|AnySDKClass): CBtNode;

interface CBtNodeComposite {
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeComposite(ptr_or_class: string|AnySDKClass): CBtNodeComposite;

interface CBtNodeCondition {
    "Negated": boolean;
    readonly "Parent": CBtNodeDecorator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeCondition(ptr_or_class: string|AnySDKClass): CBtNodeCondition;

interface CBtNodeConditionInactive {
    "RoundStartThresholdSeconds": number;
    "SensorInactivityThresholdSeconds": number;
    readonly "SensorInactivityTimer": CountdownTimer;
    readonly "Parent": CBtNodeCondition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeConditionInactive(ptr_or_class: string|AnySDKClass): CBtNodeConditionInactive;

interface CBtNodeDecorator {
    readonly "Parent": CBtNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeDecorator(ptr_or_class: string|AnySDKClass): CBtNodeDecorator;

interface CBubbling {
    "Density": number;
    "Frequency": number;
    "State": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBubbling(ptr_or_class: string|AnySDKClass): CBubbling;

interface CBuyZone {
    "LegacyTeamNum": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBuyZone(ptr_or_class: string|AnySDKClass): CBuyZone;

interface CC4 {
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

interface CCSBot {
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

interface CCSGOViewModel {
    "ShouldIgnoreOffsetAndAccuracy": boolean;
    readonly "Parent": CPredictedViewModel;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGOViewModel(ptr_or_class: string|AnySDKClass): CCSGOViewModel;

interface CCSGO_TeamIntroCharacterPosition {
    readonly "Parent": CCSGO_TeamPreviewCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamIntroCharacterPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamIntroCharacterPosition;

interface CCSGO_TeamIntroCounterTerroristPosition {
    readonly "Parent": CCSGO_TeamIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamIntroCounterTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamIntroCounterTerroristPosition;

interface CCSGO_TeamIntroTerroristPosition {
    readonly "Parent": CCSGO_TeamIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamIntroTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamIntroTerroristPosition;

interface CCSGO_TeamPreviewCharacterPosition {
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

interface CCSGO_TeamSelectCharacterPosition {
    readonly "Parent": CCSGO_TeamPreviewCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamSelectCharacterPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamSelectCharacterPosition;

interface CCSGO_TeamSelectCounterTerroristPosition {
    readonly "Parent": CCSGO_TeamSelectCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamSelectCounterTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamSelectCounterTerroristPosition;

interface CCSGO_TeamSelectTerroristPosition {
    readonly "Parent": CCSGO_TeamSelectCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamSelectTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamSelectTerroristPosition;

interface CCSGameRules {
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

interface CCSGameRulesProxy {
    readonly "GameRules": CCSGameRules;
    readonly "Parent": CGameRulesProxy;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameRulesProxy(ptr_or_class: string|AnySDKClass): CCSGameRulesProxy;

interface CCSMinimapBoundary {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSMinimapBoundary(ptr_or_class: string|AnySDKClass): CCSMinimapBoundary;

interface CCSObserverPawn {
    readonly "Parent": CCSPlayerPawnBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserverPawn(ptr_or_class: string|AnySDKClass): CCSObserverPawn;

interface CCSPlace {
    "Name": string;
    readonly "Parent": CServerOnlyModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlace(ptr_or_class: string|AnySDKClass): CCSPlace;

interface CCSPlayerPawn {
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

interface CCSPlayerPawnBase {
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

interface CCSPlayerResource {
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

interface CCSPlayer_RadioServices {
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

interface CCSServerPointScriptEntity {
    readonly "Parent": CCSPointScriptEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSServerPointScriptEntity(ptr_or_class: string|AnySDKClass): CCSServerPointScriptEntity;

interface CCSSprite {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSSprite(ptr_or_class: string|AnySDKClass): CCSSprite;

interface CCSTeam {
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

interface CCSWeaponBase {
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

interface CCSWeaponBaseGun {
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

interface CChangeLevel {
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

interface CChicken {
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

interface CColorCorrection {
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

interface CColorCorrectionVolume {
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

interface CCommentaryAuto {
    readonly "OnCommentaryNewGame": CEntityIOOutput;
    readonly "OnCommentaryMidGame": CEntityIOOutput;
    readonly "OnCommentaryMultiplayerSpawn": CEntityIOOutput;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCommentaryAuto(ptr_or_class: string|AnySDKClass): CCommentaryAuto;

interface CCommentarySystem {
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

interface CCommentaryViewPosition {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCommentaryViewPosition(ptr_or_class: string|AnySDKClass): CCommentaryViewPosition;

interface CConstantForceController {
    "Linear": Vector;
    "Angular": Vector;
    "LinearSave": Vector;
    "AngularSave": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstantForceController(ptr_or_class: string|AnySDKClass): CConstantForceController;

interface CConstraintAnchor {
    "MassScale": number;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstraintAnchor(ptr_or_class: string|AnySDKClass): CConstraintAnchor;

interface CCredits {
    readonly "OnCreditsDone": CEntityIOOutput;
    "RolledOutroCredits": boolean;
    "LogoLength": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCredits(ptr_or_class: string|AnySDKClass): CCredits;

interface CDEagle {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDEagle(ptr_or_class: string|AnySDKClass): CDEagle;

interface CDebugHistory {
    "NpcEvents": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDebugHistory(ptr_or_class: string|AnySDKClass): CDebugHistory;

interface CDecoyGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDecoyGrenade(ptr_or_class: string|AnySDKClass): CDecoyGrenade;

interface CDecoyProjectile {
    "DecoyShotTick": number;
    "ShotsRemaining": number;
    "ExpireTime": number;
    "DecoyWeaponDefIndex": number;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDecoyProjectile(ptr_or_class: string|AnySDKClass): CDecoyProjectile;

interface CDynamicLight {
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

interface CDynamicProp {
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

interface CDynamicPropAlias_cable_dynamic {
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicPropAlias_cable_dynamic(ptr_or_class: string|AnySDKClass): CDynamicPropAlias_cable_dynamic;

interface CDynamicPropAlias_dynamic_prop {
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicPropAlias_dynamic_prop(ptr_or_class: string|AnySDKClass): CDynamicPropAlias_dynamic_prop;

interface CDynamicPropAlias_prop_dynamic_override {
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicPropAlias_prop_dynamic_override(ptr_or_class: string|AnySDKClass): CDynamicPropAlias_prop_dynamic_override;

interface CEconEntity {
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

interface CEconItemView {
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

interface CEconWearable {
    "ForceSkin": number;
    "AlwaysAllow": boolean;
    readonly "Parent": CEconEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEconWearable(ptr_or_class: string|AnySDKClass): CEconWearable;

interface CEnableMotionFixup {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnableMotionFixup(ptr_or_class: string|AnySDKClass): CEnableMotionFixup;

interface CEntityBlocker {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityBlocker(ptr_or_class: string|AnySDKClass): CEntityBlocker;

interface CEntityDissolve {
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

interface CEntityFlame {
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

interface CEnvBeam {
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

interface CEnvBeverage {
    "CanInDispenser": boolean;
    "BeverageType": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvBeverage(ptr_or_class: string|AnySDKClass): CEnvBeverage;

interface CEnvCombinedLightProbeVolume {
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

interface CEnvCubemap {
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

interface CEnvCubemapBox {
    readonly "Parent": CEnvCubemap;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvCubemapBox(ptr_or_class: string|AnySDKClass): CEnvCubemapBox;

interface CEnvCubemapFog {
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

interface CEnvDecal {
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

interface CEnvDetailController {
    "FadeStartDist": number;
    "FadeEndDist": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvDetailController(ptr_or_class: string|AnySDKClass): CEnvDetailController;

interface CEnvEntityIgniter {
    "Lifetime": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvEntityIgniter(ptr_or_class: string|AnySDKClass): CEnvEntityIgniter;

interface CEnvEntityMaker {
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

interface CEnvExplosion {
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

interface CEnvFade {
    "FadeColor": Color;
    "Duration": number;
    "HoldDuration": number;
    readonly "OnBeginFade": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvFade(ptr_or_class: string|AnySDKClass): CEnvFade;

interface CEnvFireSensor {
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

interface CEnvFireSource {
    "Enabled": boolean;
    "Radius": number;
    "Damage": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvFireSource(ptr_or_class: string|AnySDKClass): CEnvFireSource;

interface CEnvFunnel {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvFunnel(ptr_or_class: string|AnySDKClass): CEnvFunnel;

interface CEnvGlobal {
    "Globalstate": string;
    "Triggermode": number;
    "Initialstate": number;
    "Counter": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvGlobal(ptr_or_class: string|AnySDKClass): CEnvGlobal;

interface CEnvHudHint {
    "Message": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvHudHint(ptr_or_class: string|AnySDKClass): CEnvHudHint;

interface CEnvInstructorHint {
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

interface CEnvInstructorVRHint {
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

interface CEnvLaser {
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

interface CEnvLightProbeVolume {
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

interface CEnvMicrophone {
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

interface CEnvMuzzleFlash {
    "Scale": number;
    "ParentAttachment": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvMuzzleFlash(ptr_or_class: string|AnySDKClass): CEnvMuzzleFlash;

interface CEnvParticleGlow {
    "AlphaScale": number;
    "RadiusScale": number;
    "SelfIllumScale": number;
    "ColorTint": Color;
    readonly "Parent": CParticleSystem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvParticleGlow(ptr_or_class: string|AnySDKClass): CEnvParticleGlow;

interface CEnvProjectedTexture {
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

interface CEnvScreenOverlay {
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

interface CEnvShake {
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

interface CEnvSky {
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

interface CEnvSpark {
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

interface CEnvSplash {
    "Scale": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSplash(ptr_or_class: string|AnySDKClass): CEnvSplash;

interface CEnvTilt {
    "Duration": number;
    "Radius": number;
    "TiltTime": number;
    "StopTime": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvTilt(ptr_or_class: string|AnySDKClass): CEnvTilt;

interface CEnvTracer {
    "End": Vector;
    "Delay": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvTracer(ptr_or_class: string|AnySDKClass): CEnvTracer;

interface CEnvViewPunch {
    "Radius": number;
    "ViewPunch": QAngle;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvViewPunch(ptr_or_class: string|AnySDKClass): CEnvViewPunch;

interface CEnvVolumetricFogController {
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

interface CEnvVolumetricFogVolume {
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

interface CEnvWind {
    readonly "EnvWindShared": CEnvWindShared;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvWind(ptr_or_class: string|AnySDKClass): CEnvWind;

interface CEnvWindShared {
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

interface CFilterAttributeInt {
    "AttributeName": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterAttributeInt(ptr_or_class: string|AnySDKClass): CFilterAttributeInt;

interface CFilterClass {
    "FilterClass": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterClass(ptr_or_class: string|AnySDKClass): CFilterClass;

interface CFilterContext {
    "FilterContext": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterContext(ptr_or_class: string|AnySDKClass): CFilterContext;

interface CFilterEnemy {
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

interface CFilterLOS {
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterLOS(ptr_or_class: string|AnySDKClass): CFilterLOS;

interface CFilterMassGreater {
    "FilterMass": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterMassGreater(ptr_or_class: string|AnySDKClass): CFilterMassGreater;

interface CFilterModel {
    "FilterModel": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterModel(ptr_or_class: string|AnySDKClass): CFilterModel;

interface CFilterMultiple {
    "FilterType": number;
    "FilterName": Object;
    readonly "Filter": Object;
    "FilterCount": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterMultiple(ptr_or_class: string|AnySDKClass): CFilterMultiple;

interface CFilterName {
    "FilterName": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterName(ptr_or_class: string|AnySDKClass): CFilterName;

interface CFilterProximity {
    "Radius": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterProximity(ptr_or_class: string|AnySDKClass): CFilterProximity;

interface CFire {
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

interface CFireCrackerBlast {
    readonly "Parent": CInferno;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFireCrackerBlast(ptr_or_class: string|AnySDKClass): CFireCrackerBlast;

interface CFireSmoke {
    "FlameModelIndex": number;
    "FlameFromAboveModelIndex": number;
    readonly "Parent": CBaseFire;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFireSmoke(ptr_or_class: string|AnySDKClass): CFireSmoke;

interface CFish {
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

interface CFishPool {
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

interface CFists {
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

interface CFlashbang {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlashbang(ptr_or_class: string|AnySDKClass): CFlashbang;

interface CFlashbangProjectile {
    "TimeToDetonate": number;
    "NumOpponentsHit": number;
    "NumTeammatesHit": number;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlashbangProjectile(ptr_or_class: string|AnySDKClass): CFlashbangProjectile;

interface CFogController {
    readonly "Fog": fogparams_t;
    "UseAngles": boolean;
    "ChangedVariables": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFogController(ptr_or_class: string|AnySDKClass): CFogController;

interface CFogTrigger {
    readonly "Fog": fogparams_t;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFogTrigger(ptr_or_class: string|AnySDKClass): CFogTrigger;

interface CFogVolume {
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

interface CFootstepControl {
    "Source": string;
    "Destination": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootstepControl(ptr_or_class: string|AnySDKClass): CFootstepControl;

interface CFuncBrush {
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

interface CFuncConveyor {
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

interface CFuncElectrifiedVolume {
    "EffectName": string;
    "EffectInterpenetrateName": string;
    "EffectZapName": string;
    "EffectSource": string;
    readonly "Parent": CFuncBrush;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncElectrifiedVolume(ptr_or_class: string|AnySDKClass): CFuncElectrifiedVolume;

interface CFuncIllusionary {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncIllusionary(ptr_or_class: string|AnySDKClass): CFuncIllusionary;

interface CFuncInteractionLayerClip {
    "Disabled": boolean;
    "InteractsAs": string;
    "InteractsWith": string;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncInteractionLayerClip(ptr_or_class: string|AnySDKClass): CFuncInteractionLayerClip;

interface CFuncLadder {
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

interface CFuncLadderAlias_func_useableladder {
    readonly "Parent": CFuncLadder;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncLadderAlias_func_useableladder(ptr_or_class: string|AnySDKClass): CFuncLadderAlias_func_useableladder;

interface CFuncMonitor {
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

interface CFuncMoveLinear {
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

interface CFuncMoveLinearAlias_momentary_door {
    readonly "Parent": CFuncMoveLinear;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncMoveLinearAlias_momentary_door(ptr_or_class: string|AnySDKClass): CFuncMoveLinearAlias_momentary_door;

interface CFuncMover {
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

interface CFuncMoverAPI {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncMoverAPI(ptr_or_class: string|AnySDKClass): CFuncMoverAPI;

interface CFuncNavBlocker {
    "Disabled": boolean;
    "BlockedTeamNumber": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncNavBlocker(ptr_or_class: string|AnySDKClass): CFuncNavBlocker;

interface CFuncNavObstruction {
    "Disabled": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncNavObstruction(ptr_or_class: string|AnySDKClass): CFuncNavObstruction;

interface CFuncPlat {
    "Noise": string;
    readonly "Parent": CBasePlatTrain;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncPlat(ptr_or_class: string|AnySDKClass): CFuncPlat;

interface CFuncPlatRot {
    "End": QAngle;
    "Start": QAngle;
    readonly "Parent": CFuncPlat;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncPlatRot(ptr_or_class: string|AnySDKClass): CFuncPlatRot;

interface CFuncPropRespawnZone {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncPropRespawnZone(ptr_or_class: string|AnySDKClass): CFuncPropRespawnZone;

interface CFuncRotating {
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

interface CFuncShatterglass {
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

interface CFuncTankTrain {
    readonly "OnDeath": CEntityIOOutput;
    readonly "Parent": CFuncTrackTrain;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTankTrain(ptr_or_class: string|AnySDKClass): CFuncTankTrain;

interface CFuncTimescale {
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

interface CFuncTrackAuto {
    readonly "Parent": CFuncTrackChange;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTrackAuto(ptr_or_class: string|AnySDKClass): CFuncTrackAuto;

interface CFuncTrackChange {
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

interface CFuncTrackTrain {
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

interface CFuncTrain {
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

interface CFuncTrainControls {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTrainControls(ptr_or_class: string|AnySDKClass): CFuncTrainControls;

interface CFuncVPhysicsClip {
    "Disabled": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncVPhysicsClip(ptr_or_class: string|AnySDKClass): CFuncVPhysicsClip;

interface CFuncVehicleClip {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncVehicleClip(ptr_or_class: string|AnySDKClass): CFuncVehicleClip;

interface CFuncWall {
    "State": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncWall(ptr_or_class: string|AnySDKClass): CFuncWall;

interface CFuncWallToggle {
    readonly "Parent": CFuncWall;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncWallToggle(ptr_or_class: string|AnySDKClass): CFuncWallToggle;

interface CGameChoreoServices {
    readonly "Owner": CBaseAnimGraph;
    readonly "ScriptedSequence": CScriptedSequence;
    "TimeStartedState": number;
    readonly "Parent": IChoreoServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameChoreoServices(ptr_or_class: string|AnySDKClass): CGameChoreoServices;

interface CGameEnd {
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameEnd(ptr_or_class: string|AnySDKClass): CGameEnd;

interface CGameGibManager {
    "AllowNewGibs": boolean;
    "CurrentMaxPieces": number;
    "MaxPieces": number;
    "LastFrame": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameGibManager(ptr_or_class: string|AnySDKClass): CGameGibManager;

interface CGameMoney {
    readonly "OnMoneySpent": CEntityIOOutput;
    readonly "OnMoneySpentFail": CEntityIOOutput;
    "Money": number;
    "StrAwardText": string;
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameMoney(ptr_or_class: string|AnySDKClass): CGameMoney;

interface CGamePlayerEquip {
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGamePlayerEquip(ptr_or_class: string|AnySDKClass): CGamePlayerEquip;

interface CGamePlayerZone {
    readonly "OnPlayerInZone": CEntityIOOutput;
    readonly "OnPlayerOutZone": CEntityIOOutput;
    readonly "Parent": CRuleBrushEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGamePlayerZone(ptr_or_class: string|AnySDKClass): CGamePlayerZone;

interface CGameRules {
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

interface CGameRulesProxy {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameRulesProxy(ptr_or_class: string|AnySDKClass): CGameRulesProxy;

interface CGameScriptedMoveData {
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

interface CGameScriptedMoveDef_t {
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

interface CGameText {
    "Message": string;
    readonly "TextParms": hudtextparms_t;
    readonly "Parent": CRulePointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameText(ptr_or_class: string|AnySDKClass): CGameText;

interface CGenericConstraint {
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

interface CGradientFog {
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

interface CGunTarget {
    "On": boolean;
    readonly "TargetEnt": CBaseEntity;
    readonly "OnDeath": CEntityIOOutput;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGunTarget(ptr_or_class: string|AnySDKClass): CGunTarget;

interface CHEGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHEGrenade(ptr_or_class: string|AnySDKClass): CHEGrenade;

interface CHEGrenadeProjectile {
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHEGrenadeProjectile(ptr_or_class: string|AnySDKClass): CHEGrenadeProjectile;

interface CHandleDummy {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHandleDummy(ptr_or_class: string|AnySDKClass): CHandleDummy;

interface CHandleTest {
    readonly "Handle": CBaseEntity;
    "SendHandle": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHandleTest(ptr_or_class: string|AnySDKClass): CHandleTest;

interface CHostage {
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

interface CHostageAlias_info_hostage_spawn {
    readonly "Parent": CHostage;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageAlias_info_hostage_spawn(ptr_or_class: string|AnySDKClass): CHostageAlias_info_hostage_spawn;

interface CHostageCarriableProp {
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageCarriableProp(ptr_or_class: string|AnySDKClass): CHostageCarriableProp;

interface CHostageExpresserShim {
    readonly "Expresser": CAI_Expresser;
    readonly "Parent": CBaseCombatCharacter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageExpresserShim(ptr_or_class: string|AnySDKClass): CHostageExpresserShim;

interface CIncendiaryGrenade {
    readonly "Parent": CMolotovGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CIncendiaryGrenade(ptr_or_class: string|AnySDKClass): CIncendiaryGrenade;

interface CInferno {
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

interface CInfoData {
    readonly "Parent": CServerOnlyEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoData(ptr_or_class: string|AnySDKClass): CInfoData;

interface CInfoDeathmatchSpawn {
    readonly "Parent": SpawnPoint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoDeathmatchSpawn(ptr_or_class: string|AnySDKClass): CInfoDeathmatchSpawn;

interface CInfoGameEventProxy {
    "EventName": string;
    "Range": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoGameEventProxy(ptr_or_class: string|AnySDKClass): CInfoGameEventProxy;

interface CInfoInstructorHintBombTargetA {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoInstructorHintBombTargetA(ptr_or_class: string|AnySDKClass): CInfoInstructorHintBombTargetA;

interface CInfoInstructorHintBombTargetB {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoInstructorHintBombTargetB(ptr_or_class: string|AnySDKClass): CInfoInstructorHintBombTargetB;

interface CInfoInstructorHintHostageRescueZone {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoInstructorHintHostageRescueZone(ptr_or_class: string|AnySDKClass): CInfoInstructorHintHostageRescueZone;

interface CInfoInstructorHintTarget {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoInstructorHintTarget(ptr_or_class: string|AnySDKClass): CInfoInstructorHintTarget;

interface CInfoLadderDismount {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoLadderDismount(ptr_or_class: string|AnySDKClass): CInfoLadderDismount;

interface CInfoLandmark {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoLandmark(ptr_or_class: string|AnySDKClass): CInfoLandmark;

interface CInfoPlayerCounterterrorist {
    readonly "Parent": SpawnPoint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoPlayerCounterterrorist(ptr_or_class: string|AnySDKClass): CInfoPlayerCounterterrorist;

interface CInfoPlayerStart {
    "Disabled": boolean;
    "IsMaster": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoPlayerStart(ptr_or_class: string|AnySDKClass): CInfoPlayerStart;

interface CInfoPlayerTerrorist {
    readonly "Parent": SpawnPoint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoPlayerTerrorist(ptr_or_class: string|AnySDKClass): CInfoPlayerTerrorist;

interface CInfoSpawnGroupLandmark {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoSpawnGroupLandmark(ptr_or_class: string|AnySDKClass): CInfoSpawnGroupLandmark;

interface CInfoSpawnGroupLoadUnload {
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

interface CInfoTargetServerOnly {
    readonly "Parent": CServerOnlyPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoTargetServerOnly(ptr_or_class: string|AnySDKClass): CInfoTargetServerOnly;

interface CInfoTeleportDestination {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoTeleportDestination(ptr_or_class: string|AnySDKClass): CInfoTeleportDestination;

interface CInfoVisibilityBox {
    "Mode": number;
    "BoxSize": Vector;
    "Enabled": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoVisibilityBox(ptr_or_class: string|AnySDKClass): CInfoVisibilityBox;

interface CInstancedSceneEntity {
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

interface CInstructorEventEntity {
    "Name": string;
    "HintTargetEntity": string;
    readonly "TargetPlayer": CBasePlayerPawn;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInstructorEventEntity(ptr_or_class: string|AnySDKClass): CInstructorEventEntity;

interface CIronSightController {
    "IronSightAvailable": boolean;
    "IronSightAmount": number;
    "IronSightAmountGained": number;
    "IronSightAmountBiased": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CIronSightController(ptr_or_class: string|AnySDKClass): CIronSightController;

interface CItem {
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

interface CItemAssaultSuit {
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemAssaultSuit(ptr_or_class: string|AnySDKClass): CItemAssaultSuit;

interface CItemDefuser {
    readonly "EntitySpottedState": EntitySpottedState_t;
    "SpotRules": number;
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemDefuser(ptr_or_class: string|AnySDKClass): CItemDefuser;

interface CItemDefuserAlias_item_defuser {
    readonly "Parent": CItemDefuser;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemDefuserAlias_item_defuser(ptr_or_class: string|AnySDKClass): CItemDefuserAlias_item_defuser;

interface CItemDogtags {
    readonly "OwningPlayer": CCSPlayerPawn;
    readonly "KillingPlayer": CCSPlayerPawn;
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemDogtags(ptr_or_class: string|AnySDKClass): CItemDogtags;

interface CItemHeavyAssaultSuit {
    readonly "Parent": CItemAssaultSuit;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemHeavyAssaultSuit(ptr_or_class: string|AnySDKClass): CItemHeavyAssaultSuit;

interface CItemKevlar {
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemKevlar(ptr_or_class: string|AnySDKClass): CItemKevlar;

interface CItemSoda {
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemSoda(ptr_or_class: string|AnySDKClass): CItemSoda;

interface CItem_Healthshot {
    readonly "Parent": CWeaponBaseItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItem_Healthshot(ptr_or_class: string|AnySDKClass): CItem_Healthshot;

interface CKeepUpright {
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

interface CKnife {
    "FirstAttack": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CKnife(ptr_or_class: string|AnySDKClass): CKnife;

interface CLightDirectionalEntity {
    readonly "Parent": CLightEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightDirectionalEntity(ptr_or_class: string|AnySDKClass): CLightDirectionalEntity;

interface CLightEntity {
    readonly "CLightComponent": CLightComponent;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightEntity(ptr_or_class: string|AnySDKClass): CLightEntity;

interface CLightEnvironmentEntity {
    readonly "Parent": CLightDirectionalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightEnvironmentEntity(ptr_or_class: string|AnySDKClass): CLightEnvironmentEntity;

interface CLightGlow {
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

interface CLightOrthoEntity {
    readonly "Parent": CLightEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightOrthoEntity(ptr_or_class: string|AnySDKClass): CLightOrthoEntity;

interface CLightSpotEntity {
    readonly "Parent": CLightEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightSpotEntity(ptr_or_class: string|AnySDKClass): CLightSpotEntity;

interface CLogicAchievement {
    "Disabled": boolean;
    "AchievementEventID": string;
    readonly "OnFired": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicAchievement(ptr_or_class: string|AnySDKClass): CLogicAchievement;

interface CLogicActiveAutosave {
    "TriggerHitPoints": number;
    "TimeToTrigger": number;
    "StartTime": number;
    "DangerousTime": number;
    readonly "Parent": CLogicAutosave;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicActiveAutosave(ptr_or_class: string|AnySDKClass): CLogicActiveAutosave;

interface CLogicAuto {
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

interface CLogicAutosave {
    "ForceNewLevelUnit": boolean;
    "MinHitPoints": number;
    "MinHitPointsToCommit": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicAutosave(ptr_or_class: string|AnySDKClass): CLogicAutosave;

interface CLogicBranch {
    "InValue": boolean;
    readonly "OnTrue": CEntityIOOutput;
    readonly "OnFalse": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicBranch(ptr_or_class: string|AnySDKClass): CLogicBranch;

interface CLogicBranchList {
    "LogicBranchNames": Object;
    readonly "OnAllTrue": CEntityIOOutput;
    readonly "OnAllFalse": CEntityIOOutput;
    readonly "OnMixed": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicBranchList(ptr_or_class: string|AnySDKClass): CLogicBranchList;

interface CLogicCase {
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

interface CLogicCollisionPair {
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

interface CLogicCompare {
    "InValue": number;
    "CompareValue": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicCompare(ptr_or_class: string|AnySDKClass): CLogicCompare;

interface CLogicDistanceAutosave {
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

interface CLogicDistanceCheck {
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

interface CLogicEventListener {
    "StrEventName": string;
    "IsEnabled": boolean;
    "Team": number;
    readonly "OnEventFired": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicEventListener(ptr_or_class: string|AnySDKClass): CLogicEventListener;

interface CLogicGameEvent {
    "EventName": string;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicGameEvent(ptr_or_class: string|AnySDKClass): CLogicGameEvent;

interface CLogicGameEventListener {
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

interface CLogicLineToEntity {
    "SourceName": string;
    readonly "StartEntity": CBaseEntity;
    readonly "EndEntity": CBaseEntity;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicLineToEntity(ptr_or_class: string|AnySDKClass): CLogicLineToEntity;

interface CLogicMeasureMovement {
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

interface CLogicNPCCounter {
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

interface CLogicNPCCounterAABB {
    "DistanceOuterMins": Vector;
    "DistanceOuterMaxs": Vector;
    "OuterMins": Vector;
    "OuterMaxs": Vector;
    readonly "Parent": CLogicNPCCounter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicNPCCounterAABB(ptr_or_class: string|AnySDKClass): CLogicNPCCounterAABB;

interface CLogicNPCCounterOBB {
    readonly "Parent": CLogicNPCCounterAABB;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicNPCCounterOBB(ptr_or_class: string|AnySDKClass): CLogicNPCCounterOBB;

interface CLogicNavigation {
    "IsOn": boolean;
    "NavProperty": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicNavigation(ptr_or_class: string|AnySDKClass): CLogicNavigation;

interface CLogicPlayerProxy {
    readonly "Player": CBaseEntity;
    readonly "PlayerHasAmmo": CEntityIOOutput;
    readonly "PlayerHasNoAmmo": CEntityIOOutput;
    readonly "PlayerDied": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicPlayerProxy(ptr_or_class: string|AnySDKClass): CLogicPlayerProxy;

interface CLogicProximity {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicProximity(ptr_or_class: string|AnySDKClass): CLogicProximity;

interface CLogicScript {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicScript(ptr_or_class: string|AnySDKClass): CLogicScript;

interface CMapVetoPickController {
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

interface CMarkupVolume {
    "Disabled": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolume(ptr_or_class: string|AnySDKClass): CMarkupVolume;

interface CMarkupVolumeTagged {
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

interface CMarkupVolumeTagged_Nav {
    readonly "Parent": CMarkupVolumeTagged;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolumeTagged_Nav(ptr_or_class: string|AnySDKClass): CMarkupVolumeTagged_Nav;

interface CMarkupVolumeTagged_NavGame {
    "FloodFillAttribute": boolean;
    readonly "Parent": CMarkupVolumeWithRef;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolumeTagged_NavGame(ptr_or_class: string|AnySDKClass): CMarkupVolumeTagged_NavGame;

interface CMarkupVolumeWithRef {
    "UseRef": boolean;
    "RefPos": Vector;
    "RefDot": number;
    readonly "Parent": CMarkupVolumeTagged;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolumeWithRef(ptr_or_class: string|AnySDKClass): CMarkupVolumeWithRef;

interface CMathColorBlend {
    "InMin": number;
    "InMax": number;
    "OutColor1": Color;
    "OutColor2": Color;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMathColorBlend(ptr_or_class: string|AnySDKClass): CMathColorBlend;

interface CMathCounter {
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

interface CMathRemap {
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

interface CMelee {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMelee(ptr_or_class: string|AnySDKClass): CMelee;

interface CMessage {
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

interface CMessageEntity {
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

interface CModelPointEntity {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelPointEntity(ptr_or_class: string|AnySDKClass): CModelPointEntity;

interface CMolotovGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMolotovGrenade(ptr_or_class: string|AnySDKClass): CMolotovGrenade;

interface CMolotovProjectile {
    "IsIncGrenade": boolean;
    "Detonated": boolean;
    readonly "StillTimer": IntervalTimer;
    "HasBouncedOffPlayer": boolean;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMolotovProjectile(ptr_or_class: string|AnySDKClass): CMolotovProjectile;

interface CMomentaryRotButton {
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

interface CMotorController {
    "Speed": number;
    "MaxTorque": number;
    "Axis": Vector;
    "InertiaFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotorController(ptr_or_class: string|AnySDKClass): CMotorController;

interface CMoverPathNode {
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

interface CMultiLightProxy {
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

interface CMultiSource {
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

interface CMultiplayRules {
    readonly "Parent": CGameRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMultiplayRules(ptr_or_class: string|AnySDKClass): CMultiplayRules;

interface CMultiplayer_Expresser {
    "AllowMultipleScenes": boolean;
    readonly "Parent": CAI_ExpresserWithFollowup;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMultiplayer_Expresser(ptr_or_class: string|AnySDKClass): CMultiplayer_Expresser;

interface CNavLinkAreaEntity {
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

interface CNavSpaceInfo {
    "CreateFlightSpace": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavSpaceInfo(ptr_or_class: string|AnySDKClass): CNavSpaceInfo;

interface CNavVolumeBreadthFirstSearch {
    "StartPos": Vector;
    "SearchDist": number;
    readonly "Parent": CNavVolumeCalculatedVector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeBreadthFirstSearch(ptr_or_class: string|AnySDKClass): CNavVolumeBreadthFirstSearch;

interface CNavVolumeCalculatedVector {
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeCalculatedVector(ptr_or_class: string|AnySDKClass): CNavVolumeCalculatedVector;

interface CNavVolumeMarkupVolume {
    readonly "Parent": CNavVolume;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeMarkupVolume(ptr_or_class: string|AnySDKClass): CNavVolumeMarkupVolume;

interface CNavWalkable {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavWalkable(ptr_or_class: string|AnySDKClass): CNavWalkable;

interface CNullEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNullEntity(ptr_or_class: string|AnySDKClass): CNullEntity;

interface COmniLight {
    "InnerAngle": number;
    "OuterAngle": number;
    "ShowLight": boolean;
    readonly "Parent": CBarnLight;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COmniLight(ptr_or_class: string|AnySDKClass): COmniLight;

interface COrnamentProp {
    "InitialOwner": string;
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function COrnamentProp(ptr_or_class: string|AnySDKClass): COrnamentProp;

interface CParticleSystem {
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

interface CPathCorner {
    "Wait": number;
    "Radius": number;
    readonly "OnPass": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathCorner(ptr_or_class: string|AnySDKClass): CPathCorner;

interface CPathCornerCrash {
    readonly "Parent": CPathCorner;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathCornerCrash(ptr_or_class: string|AnySDKClass): CPathCornerCrash;

interface CPathKeyFrame {
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

interface CPathMover {
    "PathLength": number;
    "ClosedLoop": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathMover(ptr_or_class: string|AnySDKClass): CPathMover;

interface CPathParticleRope {
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

interface CPathParticleRopeAlias_path_particle_rope_clientside {
    readonly "Parent": CPathParticleRope;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathParticleRopeAlias_path_particle_rope_clientside(ptr_or_class: string|AnySDKClass): CPathParticleRopeAlias_path_particle_rope_clientside;

interface CPathTrack {
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

interface CPhysBallSocket {
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

interface CPhysBox {
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

interface CPhysConstraint {
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

interface CPhysExplosion {
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

interface CPhysFixed {
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

interface CPhysForce {
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

interface CPhysHinge {
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

interface CPhysHingeAlias_phys_hinge_local {
    readonly "Parent": CPhysHinge;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysHingeAlias_phys_hinge_local(ptr_or_class: string|AnySDKClass): CPhysHingeAlias_phys_hinge_local;

interface CPhysImpact {
    "Damage": number;
    "Distance": number;
    "DirectionEntityName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysImpact(ptr_or_class: string|AnySDKClass): CPhysImpact;

interface CPhysLength {
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

interface CPhysMagnet {
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

interface CPhysMotor {
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

interface CPhysPulley {
    "Position2": Vector;
    "Offset": Object;
    "AddLength": number;
    "GearRatio": number;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysPulley(ptr_or_class: string|AnySDKClass): CPhysPulley;

interface CPhysSlideConstraint {
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

interface CPhysThruster {
    "LocalOrigin": Vector;
    readonly "Parent": CPhysForce;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysThruster(ptr_or_class: string|AnySDKClass): CPhysThruster;

interface CPhysTorque {
    "Axis": Vector;
    readonly "Parent": CPhysForce;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysTorque(ptr_or_class: string|AnySDKClass): CPhysTorque;

interface CPhysWheelConstraint {
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

interface CPhysicalButton {
    readonly "Parent": CBaseButton;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicalButton(ptr_or_class: string|AnySDKClass): CPhysicalButton;

interface CPhysicsEntitySolver {
    readonly "MovingEntity": CBaseEntity;
    readonly "PhysicsBlocker": CBaseEntity;
    "SeparationDuration": number;
    "CancelTime": number;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsEntitySolver(ptr_or_class: string|AnySDKClass): CPhysicsEntitySolver;

interface CPhysicsProp {
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

interface CPhysicsPropMultiplayer {
    readonly "Parent": CPhysicsProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsPropMultiplayer(ptr_or_class: string|AnySDKClass): CPhysicsPropMultiplayer;

interface CPhysicsPropOverride {
    readonly "Parent": CPhysicsProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsPropOverride(ptr_or_class: string|AnySDKClass): CPhysicsPropOverride;

interface CPhysicsPropRespawnable {
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

interface CPhysicsShake {
    "Force": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsShake(ptr_or_class: string|AnySDKClass): CPhysicsShake;

interface CPhysicsSpring {
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

interface CPhysicsWire {
    "Density": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsWire(ptr_or_class: string|AnySDKClass): CPhysicsWire;

interface CPlantedC4 {
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

interface CPlatTrigger {
    readonly "Platform": CFuncPlat;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlatTrigger(ptr_or_class: string|AnySDKClass): CPlatTrigger;

interface CPlayerPing {
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

interface CPlayerSprayDecal {
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

interface CPlayerVisibility {
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

interface CPointAngleSensor {
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

interface CPointAngularVelocitySensor {
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

interface CPointBroadcastClientCommand {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointBroadcastClientCommand(ptr_or_class: string|AnySDKClass): CPointBroadcastClientCommand;

interface CPointCamera {
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

interface CPointCameraVFOV {
    "VerticalFOV": number;
    readonly "Parent": CPointCamera;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointCameraVFOV(ptr_or_class: string|AnySDKClass): CPointCameraVFOV;

interface CPointClientCommand {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointClientCommand(ptr_or_class: string|AnySDKClass): CPointClientCommand;

interface CPointClientUIDialog {
    readonly "Activator": CBaseEntity;
    "StartEnabled": boolean;
    readonly "Parent": CBaseClientUIEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointClientUIDialog(ptr_or_class: string|AnySDKClass): CPointClientUIDialog;

interface CPointClientUIWorldPanel {
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

interface CPointClientUIWorldTextPanel {
    "MessageText": string;
    readonly "Parent": CPointClientUIWorldPanel;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointClientUIWorldTextPanel(ptr_or_class: string|AnySDKClass): CPointClientUIWorldTextPanel;

interface CPointEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointEntity(ptr_or_class: string|AnySDKClass): CPointEntity;

interface CPointEntityFinder {
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

interface CPointGamestatsCounter {
    "StrStatisticName": string;
    "Disabled": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointGamestatsCounter(ptr_or_class: string|AnySDKClass): CPointGamestatsCounter;

interface CPointGiveAmmo {
    readonly "Activator": CBaseEntity;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointGiveAmmo(ptr_or_class: string|AnySDKClass): CPointGiveAmmo;

interface CPointHurt {
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

interface CPointPrefab {
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

interface CPointProximitySensor {
    "Disabled": boolean;
    readonly "TargetEntity": CBaseEntity;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointProximitySensor(ptr_or_class: string|AnySDKClass): CPointProximitySensor;

interface CPointPush {
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

interface CPointServerCommand {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointServerCommand(ptr_or_class: string|AnySDKClass): CPointServerCommand;

interface CPointTeleport {
    "SaveOrigin": Vector;
    "SaveAngles": QAngle;
    "TeleportParentedEntities": boolean;
    "TeleportUseCurrentAngle": boolean;
    readonly "Parent": CServerOnlyPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointTeleport(ptr_or_class: string|AnySDKClass): CPointTeleport;

interface CPointValueRemapper {
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

interface CPointVelocitySensor {
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

interface CPointWorldText {
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

interface CPostProcessingVolume {
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

interface CPrecipitation {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPrecipitation(ptr_or_class: string|AnySDKClass): CPrecipitation;

interface CPrecipitationBlocker {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPrecipitationBlocker(ptr_or_class: string|AnySDKClass): CPrecipitationBlocker;

interface CPredictedViewModel {
    readonly "Parent": CBaseViewModel;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPredictedViewModel(ptr_or_class: string|AnySDKClass): CPredictedViewModel;

interface CProjectedDecal {
    "Texture": number;
    "Distance": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CProjectedDecal(ptr_or_class: string|AnySDKClass): CProjectedDecal;

interface CPropDoorRotating {
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

interface CPropDoorRotatingBreakable {
    "Breakable": boolean;
    "IsAbleToCloseAreaPortals": boolean;
    "CurrentDamageState": number;
    readonly "DamageStates": Object;
    readonly "Parent": CPropDoorRotating;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPropDoorRotatingBreakable(ptr_or_class: string|AnySDKClass): CPropDoorRotatingBreakable;

interface CPushable {
    readonly "Parent": CBreakable;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPushable(ptr_or_class: string|AnySDKClass): CPushable;

interface CRagdollConstraint {
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

interface CRagdollMagnet {
    "Disabled": boolean;
    "Radius": number;
    "Force": number;
    "Axis": Vector;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollMagnet(ptr_or_class: string|AnySDKClass): CRagdollMagnet;

interface CRagdollProp {
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

interface CRagdollPropAlias_physics_prop_ragdoll {
    readonly "Parent": CRagdollProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollPropAlias_physics_prop_ragdoll(ptr_or_class: string|AnySDKClass): CRagdollPropAlias_physics_prop_ragdoll;

interface CRagdollPropAttached {
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

interface CRectLight {
    "ShowLight": boolean;
    readonly "Parent": CBarnLight;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRectLight(ptr_or_class: string|AnySDKClass): CRectLight;

interface CResponseQueue {
    readonly "ExpresserTargets": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CResponseQueue(ptr_or_class: string|AnySDKClass): CResponseQueue;

interface CRetakeGameRules {
    "MatchSeed": number;
    "BlockersPresent": boolean;
    "RoundInProgress": boolean;
    "FirstSecondHalfRound": number;
    "BombSite": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRetakeGameRules(ptr_or_class: string|AnySDKClass): CRetakeGameRules;

interface CRevertSaved {
    "LoadTime": number;
    "Duration": number;
    "HoldTime": number;
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRevertSaved(ptr_or_class: string|AnySDKClass): CRevertSaved;

interface CRopeKeyframe {
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

interface CRopeKeyframeAlias_move_rope {
    readonly "Parent": CRopeKeyframe;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRopeKeyframeAlias_move_rope(ptr_or_class: string|AnySDKClass): CRopeKeyframeAlias_move_rope;

interface CRotButton {
    readonly "Parent": CBaseButton;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRotButton(ptr_or_class: string|AnySDKClass): CRotButton;

interface CRotDoor {
    "SolidBsp": boolean;
    readonly "Parent": CBaseDoor;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRotDoor(ptr_or_class: string|AnySDKClass): CRotDoor;

interface CRuleBrushEntity {
    readonly "Parent": CRuleEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRuleBrushEntity(ptr_or_class: string|AnySDKClass): CRuleBrushEntity;

interface CRuleEntity {
    "Master": string;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRuleEntity(ptr_or_class: string|AnySDKClass): CRuleEntity;

interface CRulePointEntity {
    "Score": number;
    readonly "Parent": CRuleEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRulePointEntity(ptr_or_class: string|AnySDKClass): CRulePointEntity;

interface CSAdditionalMatchStats_t {
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

interface CSAdditionalPerRoundStats_t {
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

interface CSceneEntity {
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

interface CSceneEntityAlias_logic_choreographed_scene {
    readonly "Parent": CSceneEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneEntityAlias_logic_choreographed_scene(ptr_or_class: string|AnySDKClass): CSceneEntityAlias_logic_choreographed_scene;

interface CSceneListManager {
    "Scenes": Object;
    readonly "Scenes1": Object;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneListManager(ptr_or_class: string|AnySDKClass): CSceneListManager;

interface CScriptItem {
    "MoveTypeOverride": number;
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptItem(ptr_or_class: string|AnySDKClass): CScriptItem;

interface CScriptNavBlocker {
    "Extent": Vector;
    readonly "Parent": CFuncNavBlocker;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptNavBlocker(ptr_or_class: string|AnySDKClass): CScriptNavBlocker;

interface CScriptTriggerHurt {
    "Extent": Vector;
    readonly "Parent": CTriggerHurt;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerHurt(ptr_or_class: string|AnySDKClass): CScriptTriggerHurt;

interface CScriptTriggerMultiple {
    "Extent": Vector;
    readonly "Parent": CTriggerMultiple;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerMultiple(ptr_or_class: string|AnySDKClass): CScriptTriggerMultiple;

interface CScriptTriggerOnce {
    "Extent": Vector;
    readonly "Parent": CTriggerOnce;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerOnce(ptr_or_class: string|AnySDKClass): CScriptTriggerOnce;

interface CScriptTriggerPush {
    "Extent": Vector;
    readonly "Parent": CTriggerPush;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptTriggerPush(ptr_or_class: string|AnySDKClass): CScriptTriggerPush;

interface CScriptedSequence {
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

interface CSensorGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSensorGrenade(ptr_or_class: string|AnySDKClass): CSensorGrenade;

interface CSensorGrenadeProjectile {
    "ExpireTime": number;
    "NextDetectPlayerSound": number;
    readonly "DisplayGrenade": CBaseEntity;
    readonly "Parent": CBaseCSGrenadeProjectile;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSensorGrenadeProjectile(ptr_or_class: string|AnySDKClass): CSensorGrenadeProjectile;

interface CServerOnlyEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerOnlyEntity(ptr_or_class: string|AnySDKClass): CServerOnlyEntity;

interface CServerOnlyPointEntity {
    readonly "Parent": CServerOnlyEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerOnlyPointEntity(ptr_or_class: string|AnySDKClass): CServerOnlyPointEntity;

interface CServerRagdollTrigger {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerRagdollTrigger(ptr_or_class: string|AnySDKClass): CServerRagdollTrigger;

interface CShatterGlassShard {
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

interface CShatterGlassShardPhysics {
    "Debris": boolean;
    "ParentShard": number;
    readonly "ShardDesc": shard_model_desc_t;
    readonly "Parent": CPhysicsProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CShatterGlassShardPhysics(ptr_or_class: string|AnySDKClass): CShatterGlassShardPhysics;

interface CShower {
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CShower(ptr_or_class: string|AnySDKClass): CShower;

interface CSimpleMarkupVolumeTagged {
    readonly "Parent": CMarkupVolumeTagged;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSimpleMarkupVolumeTagged(ptr_or_class: string|AnySDKClass): CSimpleMarkupVolumeTagged;

interface CSingleplayRules {
    "SinglePlayerGameEnding": boolean;
    readonly "Parent": CGameRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSingleplayRules(ptr_or_class: string|AnySDKClass): CSingleplayRules;

interface CSkyCamera {
    readonly "SkyboxData": sky3dparams_t;
    "SkyboxSlotToken": number;
    "UseAngles": boolean;
    readonly "Next": CSkyCamera;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkyCamera(ptr_or_class: string|AnySDKClass): CSkyCamera;

interface CSmokeGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSmokeGrenade(ptr_or_class: string|AnySDKClass): CSmokeGrenade;

interface CSmokeGrenadeProjectile {
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

interface CSmoothFunc {
    "SmoothAmplitude": number;
    "SmoothBias": number;
    "SmoothDuration": number;
    "SmoothRemainingTime": number;
    "SmoothDir": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSmoothFunc(ptr_or_class: string|AnySDKClass): CSmoothFunc;

interface CSound {
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

interface CSoundAreaEntityBase {
    "Disabled": boolean;
    "SoundAreaType": string;
    "Pos": Vector;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundAreaEntityBase(ptr_or_class: string|AnySDKClass): CSoundAreaEntityBase;

interface CSoundAreaEntityOrientedBox {
    "Min": Vector;
    "Max": Vector;
    readonly "Parent": CSoundAreaEntityBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundAreaEntityOrientedBox(ptr_or_class: string|AnySDKClass): CSoundAreaEntityOrientedBox;

interface CSoundAreaEntitySphere {
    "Radius": number;
    readonly "Parent": CSoundAreaEntityBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundAreaEntitySphere(ptr_or_class: string|AnySDKClass): CSoundAreaEntitySphere;

interface CSoundEnt {
    "FreeSound": number;
    "ActiveSound": number;
    "CLastActiveSounds": number;
    readonly "SoundPool": Object;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEnt(ptr_or_class: string|AnySDKClass): CSoundEnt;

interface CSoundEventAABBEntity {
    "Mins": Vector;
    "Maxs": Vector;
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventAABBEntity(ptr_or_class: string|AnySDKClass): CSoundEventAABBEntity;

interface CSoundEventEntity {
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

interface CSoundEventEntityAlias_snd_event_point {
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventEntityAlias_snd_event_point(ptr_or_class: string|AnySDKClass): CSoundEventEntityAlias_snd_event_point;

interface CSoundEventOBBEntity {
    "Mins": Vector;
    "Maxs": Vector;
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventOBBEntity(ptr_or_class: string|AnySDKClass): CSoundEventOBBEntity;

interface CSoundEventParameter {
    "ParamName": string;
    "FloatValue": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventParameter(ptr_or_class: string|AnySDKClass): CSoundEventParameter;

interface CSoundEventPathCornerEntity {
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

interface CSoundEventSphereEntity {
    "Radius": number;
    readonly "Parent": CSoundEventEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventSphereEntity(ptr_or_class: string|AnySDKClass): CSoundEventSphereEntity;

interface CSoundOpvarSetAABBEntity {
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

interface CSoundOpvarSetAutoRoomEntity {
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

interface CSoundOpvarSetEntity {
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

interface CSoundOpvarSetOBBEntity {
    readonly "Parent": CSoundOpvarSetAABBEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetOBBEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetOBBEntity;

interface CSoundOpvarSetOBBWindEntity {
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

interface CSoundOpvarSetPathCornerEntity {
    "DistMinSqr": number;
    "DistMaxSqr": number;
    "PathCornerEntityName": string;
    readonly "Parent": CSoundOpvarSetPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetPathCornerEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetPathCornerEntity;

interface CSoundOpvarSetPointBase {
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

interface CSoundOpvarSetPointEntity {
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

interface CSoundStackSave {
    "StackName": string;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundStackSave(ptr_or_class: string|AnySDKClass): CSoundStackSave;

interface CSplineConstraint {
    "AnchorOffsetRestore": Vector;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSplineConstraint(ptr_or_class: string|AnySDKClass): CSplineConstraint;

interface CSpotlightEnd {
    "LightScale": number;
    "Radius": number;
    "SpotlightDir": Vector;
    "SpotlightOrg": Vector;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpotlightEnd(ptr_or_class: string|AnySDKClass): CSpotlightEnd;

interface CSprite {
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

interface CSpriteAlias_env_glow {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpriteAlias_env_glow(ptr_or_class: string|AnySDKClass): CSpriteAlias_env_glow;

interface CSun {
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

interface CTankTargetChange {
    "NewTargetName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTankTargetChange(ptr_or_class: string|AnySDKClass): CTankTargetChange;

interface CTankTrainAI {
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

interface CTeam {
    "Score": number;
    "Teamname": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTeam(ptr_or_class: string|AnySDKClass): CTeam;

interface CTeamplayRules {
    readonly "Parent": CMultiplayRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTeamplayRules(ptr_or_class: string|AnySDKClass): CTeamplayRules;

interface CTestEffect {
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

interface CTextureBasedAnimatable {
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

interface CTimerEntity {
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

interface CTonemapController2 {
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

interface CTonemapController2Alias_env_tonemap_controller2 {
    readonly "Parent": CTonemapController2;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTonemapController2Alias_env_tonemap_controller2(ptr_or_class: string|AnySDKClass): CTonemapController2Alias_env_tonemap_controller2;

interface CTonemapTrigger {
    "TonemapControllerName": string;
    readonly "TonemapController": CEntityInstance;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTonemapTrigger(ptr_or_class: string|AnySDKClass): CTonemapTrigger;

interface CTouchExpansionComponent {
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTouchExpansionComponent(ptr_or_class: string|AnySDKClass): CTouchExpansionComponent;

interface CTriggerActiveWeaponDetect {
    readonly "OnTouchedActiveWeapon": CEntityIOOutput;
    "WeaponClassName": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerActiveWeaponDetect(ptr_or_class: string|AnySDKClass): CTriggerActiveWeaponDetect;

interface CTriggerBombReset {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerBombReset(ptr_or_class: string|AnySDKClass): CTriggerBombReset;

interface CTriggerBrush {
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

interface CTriggerBuoyancy {
    readonly "BuoyancyHelper": CBuoyancyHelper;
    "FluidDensity": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerBuoyancy(ptr_or_class: string|AnySDKClass): CTriggerBuoyancy;

interface CTriggerCallback {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerCallback(ptr_or_class: string|AnySDKClass): CTriggerCallback;

interface CTriggerDetectBulletFire {
    "PlayerFireOnly": boolean;
    readonly "OnDetectedBulletFire": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerDetectBulletFire(ptr_or_class: string|AnySDKClass): CTriggerDetectBulletFire;

interface CTriggerDetectExplosion {
    readonly "OnDetectedExplosion": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerDetectExplosion(ptr_or_class: string|AnySDKClass): CTriggerDetectExplosion;

interface CTriggerFan {
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

interface CTriggerGameEvent {
    "StrStartTouchEventName": string;
    "StrEndTouchEventName": string;
    "StrTriggerID": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerGameEvent(ptr_or_class: string|AnySDKClass): CTriggerGameEvent;

interface CTriggerGravity {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerGravity(ptr_or_class: string|AnySDKClass): CTriggerGravity;

interface CTriggerHostageReset {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerHostageReset(ptr_or_class: string|AnySDKClass): CTriggerHostageReset;

interface CTriggerHurt {
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

interface CTriggerImpact {
    "Magnitude": number;
    "Noise": number;
    "Viewkick": number;
    readonly "Parent": CTriggerMultiple;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerImpact(ptr_or_class: string|AnySDKClass): CTriggerImpact;

interface CTriggerLerpObject {
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

interface CTriggerLook {
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

interface CTriggerMultiple {
    readonly "OnTrigger": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerMultiple(ptr_or_class: string|AnySDKClass): CTriggerMultiple;

interface CTriggerOnce {
    readonly "Parent": CTriggerMultiple;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerOnce(ptr_or_class: string|AnySDKClass): CTriggerOnce;

interface CTriggerPhysics {
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

interface CTriggerProximity {
    readonly "MeasureTarget": CBaseEntity;
    "MeasureTarget1": string;
    "Radius": number;
    "Touchers": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerProximity(ptr_or_class: string|AnySDKClass): CTriggerProximity;

interface CTriggerPush {
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

interface CTriggerRemove {
    readonly "OnRemove": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerRemove(ptr_or_class: string|AnySDKClass): CTriggerRemove;

interface CTriggerSave {
    "ForceNewLevelUnit": boolean;
    "DangerousTimer": number;
    "MinHitPoints": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerSave(ptr_or_class: string|AnySDKClass): CTriggerSave;

interface CTriggerSndSosOpvar {
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

interface CTriggerSoundscape {
    readonly "Soundscape": CEnvSoundscapeTriggerable;
    "SoundscapeName": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerSoundscape(ptr_or_class: string|AnySDKClass): CTriggerSoundscape;

interface CTriggerTeleport {
    "Landmark": string;
    "UseLandmarkAngles": boolean;
    "MirrorPlayer": boolean;
    "CheckDestIfClearForPlayer": boolean;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerTeleport(ptr_or_class: string|AnySDKClass): CTriggerTeleport;

interface CTriggerToggleSave {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerToggleSave(ptr_or_class: string|AnySDKClass): CTriggerToggleSave;

interface CTriggerTripWire {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerTripWire(ptr_or_class: string|AnySDKClass): CTriggerTripWire;

interface CTriggerVolume {
    "FilterName": string;
    readonly "Filter": CBaseFilter;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerVolume(ptr_or_class: string|AnySDKClass): CTriggerVolume;

interface CWaterBullet {
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWaterBullet(ptr_or_class: string|AnySDKClass): CWaterBullet;

interface CWeaponAWP {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponAWP(ptr_or_class: string|AnySDKClass): CWeaponAWP;

interface CWeaponAug {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponAug(ptr_or_class: string|AnySDKClass): CWeaponAug;

interface CWeaponBaseItem {
    readonly "SequenceCompleteTimer": CountdownTimer;
    "Redraw": boolean;
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponBaseItem(ptr_or_class: string|AnySDKClass): CWeaponBaseItem;

interface CWeaponBizon {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponBizon(ptr_or_class: string|AnySDKClass): CWeaponBizon;

interface CWeaponCZ75a {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponCZ75a(ptr_or_class: string|AnySDKClass): CWeaponCZ75a;

interface CWeaponElite {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponElite(ptr_or_class: string|AnySDKClass): CWeaponElite;

interface CWeaponFamas {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponFamas(ptr_or_class: string|AnySDKClass): CWeaponFamas;

interface CWeaponFiveSeven {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponFiveSeven(ptr_or_class: string|AnySDKClass): CWeaponFiveSeven;

interface CWeaponG3SG1 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponG3SG1(ptr_or_class: string|AnySDKClass): CWeaponG3SG1;

interface CWeaponGalilAR {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponGalilAR(ptr_or_class: string|AnySDKClass): CWeaponGalilAR;

interface CWeaponGlock {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponGlock(ptr_or_class: string|AnySDKClass): CWeaponGlock;

interface CWeaponHKP2000 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponHKP2000(ptr_or_class: string|AnySDKClass): CWeaponHKP2000;

interface CWeaponM249 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponM249(ptr_or_class: string|AnySDKClass): CWeaponM249;

interface CWeaponM4A1 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponM4A1(ptr_or_class: string|AnySDKClass): CWeaponM4A1;

interface CWeaponM4A1Silencer {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponM4A1Silencer(ptr_or_class: string|AnySDKClass): CWeaponM4A1Silencer;

interface CWeaponMAC10 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMAC10(ptr_or_class: string|AnySDKClass): CWeaponMAC10;

interface CWeaponMP5SD {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMP5SD(ptr_or_class: string|AnySDKClass): CWeaponMP5SD;

interface CWeaponMP7 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMP7(ptr_or_class: string|AnySDKClass): CWeaponMP7;

interface CWeaponMP9 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMP9(ptr_or_class: string|AnySDKClass): CWeaponMP9;

interface CWeaponMag7 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponMag7(ptr_or_class: string|AnySDKClass): CWeaponMag7;

interface CWeaponNOVA {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponNOVA(ptr_or_class: string|AnySDKClass): CWeaponNOVA;

interface CWeaponNegev {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponNegev(ptr_or_class: string|AnySDKClass): CWeaponNegev;

interface CWeaponP250 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponP250(ptr_or_class: string|AnySDKClass): CWeaponP250;

interface CWeaponP90 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponP90(ptr_or_class: string|AnySDKClass): CWeaponP90;

interface CWeaponRevolver {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponRevolver(ptr_or_class: string|AnySDKClass): CWeaponRevolver;

interface CWeaponSCAR20 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSCAR20(ptr_or_class: string|AnySDKClass): CWeaponSCAR20;

interface CWeaponSG556 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSG556(ptr_or_class: string|AnySDKClass): CWeaponSG556;

interface CWeaponSSG08 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSSG08(ptr_or_class: string|AnySDKClass): CWeaponSSG08;

interface CWeaponSawedoff {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponSawedoff(ptr_or_class: string|AnySDKClass): CWeaponSawedoff;

interface CWeaponShield {
    "BulletDamageAbsorbed": number;
    "LastBulletHitSoundTime": number;
    "DisplayHealth": number;
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponShield(ptr_or_class: string|AnySDKClass): CWeaponShield;

interface CWeaponTaser {
    "FireTime": number;
    "LastAttackTick": number;
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponTaser(ptr_or_class: string|AnySDKClass): CWeaponTaser;

interface CWeaponTec9 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponTec9(ptr_or_class: string|AnySDKClass): CWeaponTec9;

interface CWeaponUMP45 {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponUMP45(ptr_or_class: string|AnySDKClass): CWeaponUMP45;

interface CWeaponUSPSilencer {
    readonly "Parent": CCSWeaponBaseGun;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponUSPSilencer(ptr_or_class: string|AnySDKClass): CWeaponUSPSilencer;

interface CWeaponXM1014 {
    readonly "Parent": CCSWeaponBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWeaponXM1014(ptr_or_class: string|AnySDKClass): CWeaponXM1014;

interface CWorld {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWorld(ptr_or_class: string|AnySDKClass): CWorld;

interface ConstraintSoundInfo {
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

interface FilterDamageType {
    "DamageType": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FilterDamageType(ptr_or_class: string|AnySDKClass): FilterDamageType;

interface FilterHealth {
    "AdrenalineActive": boolean;
    "HealthMin": number;
    "HealthMax": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FilterHealth(ptr_or_class: string|AnySDKClass): FilterHealth;

interface FilterTeam {
    "FilterTeam": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FilterTeam(ptr_or_class: string|AnySDKClass): FilterTeam;

interface RelationshipOverride_t {
    readonly "Entity": CBaseEntity;
    "ClassType": number;
    readonly "Parent": Relationship_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RelationshipOverride_t(ptr_or_class: string|AnySDKClass): RelationshipOverride_t;

interface Relationship_t {
    "Disposition": number;
    "Priority": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function Relationship_t(ptr_or_class: string|AnySDKClass): Relationship_t;

interface ResponseContext_t {
    "Name": string;
    "Value": string;
    "ExpirationTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ResponseContext_t(ptr_or_class: string|AnySDKClass): ResponseContext_t;

interface SimpleConstraintSoundProfile {
    "KeyPoints": Object;
    "ReversalSoundThresholds": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SimpleConstraintSoundProfile(ptr_or_class: string|AnySDKClass): SimpleConstraintSoundProfile;

interface SoundOpvarTraceResult_t {
    "Pos": Vector;
    "DidHit": boolean;
    "DistSqrToCenter": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SoundOpvarTraceResult_t(ptr_or_class: string|AnySDKClass): SoundOpvarTraceResult_t;

interface SpawnPoint {
    "Priority": number;
    "Enabled": boolean;
    "Type": number;
    readonly "Parent": CServerOnlyPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SpawnPoint(ptr_or_class: string|AnySDKClass): SpawnPoint;

interface VelocitySampler {
    "PrevSample": Vector;
    "PrevSampleTime": number;
    "IdealSampleRate": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VelocitySampler(ptr_or_class: string|AnySDKClass): VelocitySampler;

interface dynpitchvol_base_t {
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

interface dynpitchvol_t {
    readonly "Parent": dynpitchvol_base_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function dynpitchvol_t(ptr_or_class: string|AnySDKClass): dynpitchvol_t;

interface fogplayerparams_t {
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

interface lerpdata_t {
    readonly "Ent": CBaseEntity;
    "MoveType": number;
    "StartTime": number;
    "StartOrigin": Vector;
    readonly "FXIndex": ParticleIndex_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function lerpdata_t(ptr_or_class: string|AnySDKClass): lerpdata_t;

interface locksound_t {
    "LockedSound": string;
    "UnlockedSound": string;
    "FlwaitSound": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function locksound_t(ptr_or_class: string|AnySDKClass): locksound_t;

interface magnetted_objects_t {
    readonly "Entity": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function magnetted_objects_t(ptr_or_class: string|AnySDKClass): magnetted_objects_t;

interface CDSPMixgroupModifier {
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

interface CDSPPresetMixgroupModifierTable {
    readonly "Table": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDSPPresetMixgroupModifierTable(ptr_or_class: string|AnySDKClass): CDSPPresetMixgroupModifierTable;

interface CDspPresetModifierList {
    "DspName": string;
    readonly "Modifiers": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDspPresetModifierList(ptr_or_class: string|AnySDKClass): CDspPresetModifierList;

interface CSosGroupActionLimitSchema {
    "MaxCount": number;
    "StopType": number;
    "SortType": number;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionLimitSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionLimitSchema;

interface CSosGroupActionMemberCountEnvelopeSchema {
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

interface CSosGroupActionSchema {
    "Name": string;
    "ActionType": number;
    "ActionInstanceType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSchema;

interface CSosGroupActionSetSoundeventParameterSchema {
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

interface CSosGroupActionSoundeventClusterSchema {
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

interface CSosGroupActionSoundeventCountSchema {
    "ExcludeStoppedSounds": boolean;
    "StrCountKeyName": string;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSoundeventCountSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSoundeventCountSchema;

interface CSosGroupActionSoundeventMinMaxValuesSchema {
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

interface CSosGroupActionSoundeventPrioritySchema {
    "PriorityValue": string;
    "PriorityVolumeScalar": string;
    "PriorityContributeButDontRead": string;
    "PriorityReadButDontContribute": string;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSoundeventPrioritySchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSoundeventPrioritySchema;

interface CSosGroupActionTimeBlockLimitSchema {
    "MaxCount": number;
    "MaxDuration": number;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionTimeBlockLimitSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionTimeBlockLimitSchema;

interface CSosGroupActionTimeLimitSchema {
    "MaxDuration": number;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionTimeLimitSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionTimeLimitSchema;

interface CSosGroupBranchPattern {
    "MatchEventName": boolean;
    "MatchEventSubString": boolean;
    "MatchEntIndex": boolean;
    "MatchOpvar": boolean;
    "MatchString": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupBranchPattern(ptr_or_class: string|AnySDKClass): CSosGroupBranchPattern;

interface CSosGroupMatchPattern {
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

interface CSosSoundEventGroupListSchema {
    readonly "GroupList": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosSoundEventGroupListSchema(ptr_or_class: string|AnySDKClass): CSosSoundEventGroupListSchema;

interface CSosSoundEventGroupSchema {
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

interface CSoundEventMetaData {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventMetaData(ptr_or_class: string|AnySDKClass): CSoundEventMetaData;

interface CTestBlendContainer {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTestBlendContainer(ptr_or_class: string|AnySDKClass): CTestBlendContainer;

interface SelectedEditItemInfo_t {
    readonly "EditItems": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SelectedEditItemInfo_t(ptr_or_class: string|AnySDKClass): SelectedEditItemInfo_t;

interface SosEditItemInfo_t {
    "ItemType": number;
    "ItemName": string;
    "ItemTypeName": string;
    "ItemKVString": string;
    "ItemPos": Vector2D;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SosEditItemInfo_t(ptr_or_class: string|AnySDKClass): SosEditItemInfo_t;

interface VMixAutoFilterDesc_t {
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

interface VMixBoxverbDesc_t {
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

interface VMixConvolutionDesc_t {
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

interface VMixDelayDesc_t {
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

interface VMixDiffusorDesc_t {
    "Size": number;
    "Complexity": number;
    "Feedback": number;
    "OutputGain": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDiffusorDesc_t(ptr_or_class: string|AnySDKClass): VMixDiffusorDesc_t;

interface VMixDynamics3BandDesc_t {
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

interface VMixDynamicsBand_t {
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

interface VMixDynamicsCompressorDesc_t {
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

interface VMixDynamicsDesc_t {
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

interface VMixEQ8Desc_t {
    readonly "Stages": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixEQ8Desc_t(ptr_or_class: string|AnySDKClass): VMixEQ8Desc_t;

interface VMixEffectChainDesc_t {
    "CrossfadeTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixEffectChainDesc_t(ptr_or_class: string|AnySDKClass): VMixEffectChainDesc_t;

interface VMixEnvelopeDesc_t {
    "AttackTimeMS": number;
    "HoldTimeMS": number;
    "ReleaseTimeMS": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixEnvelopeDesc_t(ptr_or_class: string|AnySDKClass): VMixEnvelopeDesc_t;

interface VMixFilterDesc_t {
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

interface VMixFreeverbDesc_t {
    "RoomSize": number;
    "Damp": number;
    "Width": number;
    "LateReflections": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixFreeverbDesc_t(ptr_or_class: string|AnySDKClass): VMixFreeverbDesc_t;

interface VMixModDelayDesc_t {
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

interface VMixOscDesc_t {
    "OscType": number;
    "Freq": number;
    "Phase": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixOscDesc_t(ptr_or_class: string|AnySDKClass): VMixOscDesc_t;

interface VMixPannerDesc_t {
    "Type": number;
    "Strength": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixPannerDesc_t(ptr_or_class: string|AnySDKClass): VMixPannerDesc_t;

interface VMixPitchShiftDesc_t {
    "GrainSampleCount": number;
    "PitchShift": number;
    "Quality": number;
    "ProcType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixPitchShiftDesc_t(ptr_or_class: string|AnySDKClass): VMixPitchShiftDesc_t;

interface VMixPlateverbDesc_t {
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

interface VMixShaperDesc_t {
    "Shape": number;
    "FldbDrive": number;
    "FldbOutputGain": number;
    "WetMix": number;
    "OversampleFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixShaperDesc_t(ptr_or_class: string|AnySDKClass): VMixShaperDesc_t;

interface VMixSubgraphSwitchDesc_t {
    "InterpolationMode": number;
    "OnlyTailsOnFadeOut": boolean;
    "InterpolationTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixSubgraphSwitchDesc_t(ptr_or_class: string|AnySDKClass): VMixSubgraphSwitchDesc_t;

interface VMixUtilityDesc_t {
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

interface VMixVocoderDesc_t {
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

interface CAudioEmphasisSample {
    "Time": number;
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioEmphasisSample(ptr_or_class: string|AnySDKClass): CAudioEmphasisSample;

interface CAudioMorphData {
    readonly "Times": Object;
    readonly "NameHashCodes": Object;
    readonly "NameStrings": Object;
    "EaseIn": number;
    "EaseOut": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioMorphData(ptr_or_class: string|AnySDKClass): CAudioMorphData;

interface CAudioPhonemeTag {
    "StartTime": number;
    "EndTime": number;
    "PhonemeCode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioPhonemeTag(ptr_or_class: string|AnySDKClass): CAudioPhonemeTag;

interface CAudioSentence {
    "ShouldVoiceDuck": boolean;
    readonly "RunTimePhonemes": Object;
    readonly "EmphasisSamples": Object;
    readonly "MorphData": CAudioMorphData;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioSentence(ptr_or_class: string|AnySDKClass): CAudioSentence;

interface CSoundContainerReference {
    "UseReference": boolean;
    readonly "Sound": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundContainerReference(ptr_or_class: string|AnySDKClass): CSoundContainerReference;

interface CSoundContainerReferenceArray {
    "UseReference": boolean;
    readonly "Sounds": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundContainerReferenceArray(ptr_or_class: string|AnySDKClass): CSoundContainerReferenceArray;

interface CSoundInfoHeader {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundInfoHeader(ptr_or_class: string|AnySDKClass): CSoundInfoHeader;

interface CVoiceContainerAmpedDecayingSineWave {
    "GainAmount": number;
    readonly "Parent": CVoiceContainerDecayingSineWave;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerAmpedDecayingSineWave(ptr_or_class: string|AnySDKClass): CVoiceContainerAmpedDecayingSineWave;

interface CVoiceContainerAnalysisBase {
    "RegenerateCurveOnCompile": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerAnalysisBase(ptr_or_class: string|AnySDKClass): CVoiceContainerAnalysisBase;

interface CVoiceContainerBase {
    readonly "EnvelopeAnalyzer": CVoiceContainerAnalysisBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerBase(ptr_or_class: string|AnySDKClass): CVoiceContainerBase;

interface CVoiceContainerBlender {
    readonly "FirstSound": CSoundContainerReference;
    readonly "SecondSound": CSoundContainerReference;
    "BlendFactor": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerBlender(ptr_or_class: string|AnySDKClass): CVoiceContainerBlender;

interface CVoiceContainerDecayingSineWave {
    "Frequency": number;
    "DecayTime": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerDecayingSineWave(ptr_or_class: string|AnySDKClass): CVoiceContainerDecayingSineWave;

interface CVoiceContainerDefault {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerDefault(ptr_or_class: string|AnySDKClass): CVoiceContainerDefault;

interface CVoiceContainerEnvelope {
    readonly "AnalysisContainer": CVoiceContainerAnalysisBase;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerEnvelope(ptr_or_class: string|AnySDKClass): CVoiceContainerEnvelope;

interface CVoiceContainerEnvelopeAnalyzer {
    "Mode": number;
    "Samples": number;
    "Threshold": number;
    readonly "Parent": CVoiceContainerAnalysisBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerEnvelopeAnalyzer(ptr_or_class: string|AnySDKClass): CVoiceContainerEnvelopeAnalyzer;

interface CVoiceContainerGranulator {
    "GrainLength": number;
    "GrainCrossfadeAmount": number;
    "StartJitter": number;
    "PlaybackJitter": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerGranulator(ptr_or_class: string|AnySDKClass): CVoiceContainerGranulator;

interface CVoiceContainerLoopTrigger {
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

interface CVoiceContainerNull {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerNull(ptr_or_class: string|AnySDKClass): CVoiceContainerNull;

interface CVoiceContainerRandomSampler {
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

interface CVoiceContainerRealtimeFMSineWave {
    "CarrierFrequency": number;
    "ModulatorFrequency": number;
    "ModulatorAmount": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerRealtimeFMSineWave(ptr_or_class: string|AnySDKClass): CVoiceContainerRealtimeFMSineWave;

interface CVoiceContainerSelector {
    "Mode": number;
    readonly "SoundsToPlay": CSoundContainerReferenceArray;
    readonly "ProbabilityWeights": Object;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSelector(ptr_or_class: string|AnySDKClass): CVoiceContainerSelector;

interface CVoiceContainerSet {
    readonly "SoundsToPlay": Object;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSet(ptr_or_class: string|AnySDKClass): CVoiceContainerSet;

interface CVoiceContainerSetElement {
    readonly "Sound": CSoundContainerReference;
    "VolumeDB": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSetElement(ptr_or_class: string|AnySDKClass): CVoiceContainerSetElement;

interface CVoiceContainerShapedNoise {
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

interface CVoiceContainerStaticAdditiveSynth {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerStaticAdditiveSynth(ptr_or_class: string|AnySDKClass): CVoiceContainerStaticAdditiveSynth;

interface CVoiceContainerSwitch {
    readonly "SoundsToPlay": Object;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSwitch(ptr_or_class: string|AnySDKClass): CVoiceContainerSwitch;

interface CRangeFloat {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRangeFloat(ptr_or_class: string|AnySDKClass): CRangeFloat;

interface CRangeInt {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRangeInt(ptr_or_class: string|AnySDKClass): CRangeInt;

interface IPhysicsPlayerController {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IPhysicsPlayerController(ptr_or_class: string|AnySDKClass): IPhysicsPlayerController;

interface constraint_axislimit_t {
    "MinRotation": number;
    "MaxRotation": number;
    "MotorTargetAngSpeed": number;
    "MotorMaxTorque": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function constraint_axislimit_t(ptr_or_class: string|AnySDKClass): constraint_axislimit_t;

interface constraint_breakableparams_t {
    "Strength": number;
    "ForceLimit": number;
    "TorqueLimit": number;
    "BodyMassScale": Object;
    "IsActive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function constraint_breakableparams_t(ptr_or_class: string|AnySDKClass): constraint_breakableparams_t;

interface constraint_hingeparams_t {
    "WorldPosition": Vector;
    "WorldAxisDirection": Vector;
    readonly "HingeAxis": constraint_axislimit_t;
    readonly "Constraint": constraint_breakableparams_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function constraint_hingeparams_t(ptr_or_class: string|AnySDKClass): constraint_hingeparams_t;

interface vphysics_save_cphysicsbody_t {
    "OldPointer": number;
    readonly "Parent": RnBodyDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function vphysics_save_cphysicsbody_t(ptr_or_class: string|AnySDKClass): vphysics_save_cphysicsbody_t;

interface AggregateLODSetup_t {
    "LODOrigin": Vector;
    "MaxObjectScale": number;
    readonly "SwitchDistances": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AggregateLODSetup_t(ptr_or_class: string|AnySDKClass): AggregateLODSetup_t;

interface AggregateMeshInfo_t {
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

interface AggregateSceneObject_t {
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

interface BakedLightingInfo_t {
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

interface BaseSceneObjectOverride_t {
    "SceneObjectIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function BaseSceneObjectOverride_t(ptr_or_class: string|AnySDKClass): BaseSceneObjectOverride_t;

interface CVoxelVisibility {
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

interface ClutterSceneObject_t {
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

interface ClutterTile_t {
    "FirstInstance": number;
    "LastInstance": number;
    readonly "BoundsWs": AABB_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ClutterTile_t(ptr_or_class: string|AnySDKClass): ClutterTile_t;

interface EntityIOConnectionData_t {
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

interface EntityKeyValueData_t {
    readonly "Connections": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntityKeyValueData_t(ptr_or_class: string|AnySDKClass): EntityKeyValueData_t;

interface ExtraVertexStreamOverride_t {
    "SubSceneObject": number;
    "DrawCallIndex": number;
    "AdditionalMeshDrawPrimitiveFlags": number;
    readonly "ExtraBufferBinding": CRenderBufferBinding;
    readonly "Parent": BaseSceneObjectOverride_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ExtraVertexStreamOverride_t(ptr_or_class: string|AnySDKClass): ExtraVertexStreamOverride_t;

interface InfoOverlayData_t {
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

interface MaterialOverride_t {
    "SubSceneObject": number;
    "DrawCallIndex": number;
    readonly "Parent": BaseSceneObjectOverride_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialOverride_t(ptr_or_class: string|AnySDKClass): MaterialOverride_t;

interface NodeData_t {
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

interface PermEntityLumpData_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermEntityLumpData_t(ptr_or_class: string|AnySDKClass): PermEntityLumpData_t;

interface SceneObject_t {
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

interface VMapResourceData_t {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMapResourceData_t(ptr_or_class: string|AnySDKClass): VMapResourceData_t;

interface VoxelVisBlockOffset_t {
    "Offset": number;
    "ElementCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VoxelVisBlockOffset_t(ptr_or_class: string|AnySDKClass): VoxelVisBlockOffset_t;

interface WorldBuilderParams_t {
    "MinDrawVolumeSize": number;
    "BuildBakedLighting": boolean;
    readonly "BakedLightingInfo": BakedLightingInfo_t;
    "CompileTimestamp": number;
    "CompileFingerprint": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WorldBuilderParams_t(ptr_or_class: string|AnySDKClass): WorldBuilderParams_t;

interface WorldNodeOnDiskBufferData_t {
    "ElementCount": number;
    "ElementSizeInBytes": number;
    readonly "InputLayoutFields": Object;
    readonly "Data": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WorldNodeOnDiskBufferData_t(ptr_or_class: string|AnySDKClass): WorldNodeOnDiskBufferData_t;

interface WorldNode_t {
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

interface World_t {
    readonly "BuilderParams": WorldBuilderParams_t;
    readonly "WorldNodes": Object;
    readonly "WorldLightingInfo": BakedLightingInfo_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function World_t(ptr_or_class: string|AnySDKClass): World_t;