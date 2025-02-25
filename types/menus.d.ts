interface IMenus {
    Unregister: (id: string) => null|undefined;
    RegisterTemporary: (id: string,title: string,color: string,options: Object,kind: string|null) => null|undefined;
    Register: (id: string,title: string,color: string,options: Object,kind: string|null) => null|undefined;
}
declare const menus : IMenus