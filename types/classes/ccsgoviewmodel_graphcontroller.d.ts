interface CCSGOViewModel_GraphController {
    "ReloadComplete": any;
    readonly "Parent": CAnimGraphControllerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGOViewModel_GraphController(ptr_or_class: string|AnySDKClass): CCSGOViewModel_GraphController;