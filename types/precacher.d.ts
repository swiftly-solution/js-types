interface IPrecacher {
    PrecacheItem: (path: string) => null|undefined;
    PrecacheSound: (path: string) => null|undefined;
    PrecacheModel: (model: string) => null|undefined;
}
declare const precacher : IPrecacher