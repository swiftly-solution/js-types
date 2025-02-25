interface QAngle {
    "x": number;
    "y": number;
    "z": number;
    GetPtr: () => string;
    add: (value: QAngle) => QAngle;
    equal: (value: QAngle) => boolean;
    length: () => number;
    unm: (value: QAngle) => QAngle;
    sub: (value: QAngle) => QAngle;
    mul: (value: QAngle) => QAngle;
    div: (value: QAngle) => QAngle;
}

declare function QAngle(x: number,y: number,z: number): QAngle;