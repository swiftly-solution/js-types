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