interface CEntityKeyValues {

    GetBool: (key: string) => boolean;
    GetInt: (key: string) => number;
    GetUint: (key: string) => number;
    GetInt64: (key: string) => number;
    GetUint64: (key: string) => number;
    GetFloat: (key: string) => number;
    GetDouble: (key: string) => number;
    GetString: (key: string) => string;
    GetPtr: (key: string) => string;
    GetStringToken: (key: string) => number;
    GetColor: (key: string) => Color;
    GetVector: (key: string) => Vector;
    GetVector2D: (key: string) => Vector2D;
    GetVector4D: (key: string) => Vector4D;
    GetQAngle: (key: string) => QAngle;
    SetBool: (key: string,value: boolean) => null|undefined;
    SetInt: (key: string,value: number) => null|undefined;
    SetUint: (key: string,value: number) => null|undefined;
    SetInt64: (key: string,value: number) => null|undefined;
    SetUint64: (key: string,value: number) => null|undefined;
    SetFloat: (key: string,value: number) => null|undefined;
    SetDouble: (key: string,value: number) => null|undefined;
    SetString: (key: string,value: string) => null|undefined;
    SetPtr: (key: string,value: string) => null|undefined;
    SetStringToken: (key: string,value: number) => null|undefined;
    SetColor: (key: string,value: Color) => null|undefined;
    SetVector: (key: string,value: Vector) => null|undefined;
    SetVector2D: (key: string,value: Vector2D) => null|undefined;
    SetVector4D: (key: string,value: Vector4D) => null|undefined;
    SetQAngle: (key: string,value: QAngle) => null|undefined;
}

declare function CEntityKeyValues(): CEntityKeyValues;