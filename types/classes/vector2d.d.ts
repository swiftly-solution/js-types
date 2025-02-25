interface Vector2D {
    "x": number;
    "y": number;
    GetPtr: () => string;
    add: (value: Vector2D) => Vector2D;
    equal: (value: Vector2D) => boolean;
    length: () => number;
    unm: (value: Vector2D) => Vector2D;
    sub: (value: Vector2D) => Vector2D;
    mul: (value: Vector2D) => Vector2D;
    div: (value: Vector2D) => Vector2D;
}

declare function Vector2D(x: number,y: number): Vector2D;