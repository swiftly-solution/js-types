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