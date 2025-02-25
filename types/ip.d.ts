interface IIP {
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