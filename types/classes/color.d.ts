interface Color {
    "r": number;
    "g": number;
    "b": number;
    "a": number;
    GetPtr: () => string;
}

declare function Color(r: number,g: number,b: number,a: number): Color;