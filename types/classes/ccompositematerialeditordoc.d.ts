interface CCompositeMaterialEditorDoc {
    "Version": number;
    readonly "Points": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCompositeMaterialEditorDoc(ptr_or_class: string|AnySDKClass): CCompositeMaterialEditorDoc;