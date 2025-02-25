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