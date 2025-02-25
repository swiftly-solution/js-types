

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