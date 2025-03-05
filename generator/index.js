const { readFileSync, writeFileSync, existsSync, appendFileSync, mkdirSync } = require("fs")
const { dirname } = require('path')

const dataFiles = [
    "../documentation/data/coretypes/data.json",
    "../documentation/data/sdktypes/data.json",
    "../documentation/data/coreclass/data.json",
    "../documentation/data/gameevents/data.json",
    "../documentation/data/scripting/data.json",
    "../documentation/data/sdkclass/data.json",
]

let functionStxPoll = {}
let sdkclasses = [];
let sdktypes = [];

const AddInArray = (arr, idx, element) => {
    arr.splice(idx, 0, element);
}

const anyTypes = ["CTypedBitVec", "uint32_t", "value", "C_", "CAttachmentNameSymbolWithStorage", "CAnimGraphTagOptionalRef", "uint8_t", "V_uuid_t", "PulseValueType_t"]

const GetType = (type) => {
    if (!type) return "any;"

    type = type.replace(new RegExp("nil", "g"), "null")
    type = type.replace("...)", "...args: any[])")
    type = type.replace("event:Event", "event:IEvent")
    if (type == "bool") type = "boolean"
    if (type.startsWith("bitfield:")) {
        return "any;";
    }
    for (const t of anyTypes) {
        if (type.includes(t)) return "any;"
    }

    if (type == "Player") return "IPlayer;";
    else if (type == "Memory") return "IMemory;";
    else if (type == "WeaponManager") return "IWeaponManager;"

    if (type.includes("EventResult|null")) type = type.replace("EventResult|null", "EventResult|void");

    if (type == "any") return "any;"
    else if (type == "void") return "null|undefined;"
    else if (type.startsWith("table")) {
        const split = type.split(" ");
        if (split.length == 1) return `${type.replace(new RegExp("table", "g"), "Object")};`
        else return `${split[0].replace(new RegExp("table", "g"), "Object[]")}; // ${split.filter((v, i) => i != 0).join(" ")}`
    }
    else if (type.includes("/")) return `${type.split("/").map((p) => p.trim()).join("|")};`;
    else if (type.includes("|") && !type.includes("fun")) return `${type};`;
    else if (type.includes("fun")) {
        if (type == "function") return `() => void;`
        else if (type == "fun(...args: any[])") return `(...args: any[]) => any;`
        else if (type.includes("):")) {
            const fun = type.split("):")
            return `${fun[0].replace("fun", "")}) => ${fun[1]};`
        } else if (type.includes(")|")) {
            const fun = type.split(")|")
            return `${fun[1].split(" ")[0]} | (${fun[0].replace("fun", "").replace(new RegExp("table", "g"), "Object[]")}) => void);`
        } else return `${type.replace("fun", "").replace(new RegExp("table", "g"), "Object[]")} => void;`
    } else if (type.includes(",")) {
        return `[${type}];`
    } else return `${type};`
}

var existsTypes = false

const ProcessParameters = (params) => {
    const returnParams = [];
    for (const paramkey of Object.keys(params)) {
        let name = paramkey
        if (name == "eventName") params[paramkey] = "GameEvent"
        if (name == "...") {
            returnParams.push("...args: any[]");
        } else returnParams.push(`${name}: ${GetType(params[paramkey]).replace(/\//g, "|").slice(0, -1)}`)
    }
    if (returnParams.length == 0) return "";
    return returnParams.join(",");
}

const GenerateClassProperties = (properties) => {
    const props = []
    for (const [propertyName, propertyValues] of Object.entries(properties)) {
        if (propertyName == "IsValid") continue;
        props.push(`    ${propertyValues.writable == false ? "readonly " : ""}"${propertyName}": ${GetType(propertyValues.type)}`)
    }

    if (props.length == 0) return "";
    return `${props.join("\n")}`
}

const GenerateClassFunctions = (key, data) => {
    const functions = []

    for (const [fnc, fncData] of Object.entries(data.functions || {})) {
        let forlang = "js"
        let name = fnc
        if (fnc.includes("/")) {
            forlang = fnc.split("/")[0];
            name = fnc.split("/")[1];
        }

        if (forlang == "js") {
            const params = ProcessParameters(fncData.params)
            functions.push(`    ${name}: (${params}) => ${GetType(fncData.return['js'])}`)
        }
    }

    if (functions.length == 0) return "";
    return functions.join("\n")
}

const ProcessData = (data, subfolder, className) => {
    for (const key of Object.keys(data)) {
        if (data[key].file != undefined) continue;
        if (data[key].template == "category") {
            ProcessData(data[key].data, `${subfolder}/${key}`, data[key].title)
        } else {
            const dir = subfolder + ".d.ts"
            if (!existsSync(dirname(dir))) mkdirSync(dirname(dir))
            if (data[key].template == "function-syntax") {
                if (!functionStxPoll[dir]) {
                    let classVariable = data[key].variable["js"].split(":")[0].split(".")[0]
                    if (classVariable.includes('[')) classVariable = classVariable.split('[')[0]
                    if (classVariable.toLowerCase() == "console") continue;

                    functionStxPoll[dir] = { className: (className == "Weapons Manager" ? "WeaponManager" : className.split(" ").join("")), file: [] };

                    functionStxPoll[dir].file.push(`declare interface I${functionStxPoll[dir].className} {`);
                    functionStxPoll[dir].file.push(`}`);

                    if (data[key].variable["js"].split(":").length >= 2 || data[key].variable["js"].split(".").length >= 2 || key == "constructor")
                        functionStxPoll[dir].file.push(`declare const ${classVariable.toLowerCase()} : I${className == "Weapons Manager" ? "WeaponManager" : className.split(" ").join("")}`)
                }

                if (subfolder.endsWith("database")) {
                    if (!functionStxPoll[dir].file.join("\n").includes("function Database")) {
                        functionStxPoll[dir].file.push(`\ndeclare function Database(connection_name: string): IDatabase;`)
                    }
                }
                if (subfolder.endsWith("memory")) {
                    if (!functionStxPoll[dir].file.join("\n").includes("function Memory")) {
                        functionStxPoll[dir].file.push(`\ndeclare function Memory(): IMemory;`)
                    }
                }
                if (!data[key].variable['js']) continue;
                const splitted = data[key].variable['js'].split(".");
                if (splitted.length > 1) {
                    if (splitted[1] == "EXPORT_NAME") {
                        splitted[1] = `[plugin_name: string]`;
                        AddInArray(functionStxPoll[dir].file, 1, `    ${splitted[1]}: {\n        [function_name: string]: (${ProcessParameters(data[key].params)}) => ${GetType(data[key].return['js'])}\n    }`);
                    } else {
                        AddInArray(functionStxPoll[dir].file, 1, `    ${splitted[1]}: (${ProcessParameters(data[key].params)}) => ${GetType(data[key].return['js'])}`);
                    }
                } else {
                    functionStxPoll[dir].file.push(`declare function ${data[key].variable['js']}(${ProcessParameters(data[key].params)}) : ${GetType(data[key].return['js'])}`);
                }
            } else if (data[key].template == "types-syntax") {
                if (!existsTypes) {
                    writeFileSync(subfolder + "/types.d.ts", "")
                    existsTypes = true
                }
                appendFileSync(subfolder + "/types.d.ts", `\n\ndeclare const enum ${data[key].title} {\n${Object.keys(data[key].values).map((val) => `    ${val} = ${data[key].values[val]}`).join(",\n")}\n}`)
                sdktypes.push(data[key].title)
            } else if (data[key].template.includes("event-syntax")) {
                var subfld = `../types/events/list.d.ts`
                let created = false;
                if (!existsSync("../types/events")) mkdirSync("../types/events")
                if (!existsSync(subfld)) {
                    created = true;
                    writeFileSync(subfld, `type GameEvent =`);
                }
                appendFileSync(subfld, `\n    ${!created ? "| " : "  "}"${data[key].title}"`)
            } else if (data[key].template == "class-syntax") {
                if (!existsSync("../types/classes.d.ts")) writeFileSync("../types/classes.d.ts", "")
                if (key.startsWith("c_")) continue;
                appendFileSync("../types/classes.d.ts", `\n\ndeclare interface ${data[key].title.split(" ").join("") == "Event" ? "I" : ""}${data[key].title.split(" ").join("")} {\n${GenerateClassProperties(data[key].properties)}\n${GenerateClassFunctions(key, data[key])}\n}${data[key].constructor.hide != true && data[key].description != "" ? `\n\ndeclare function ${data[key].title == "Event" ? "PEvent" : data[key].title}(${ProcessParameters(data[key].constructor)}): ${data[key].title.split(" ").join("") == "Event" ? "I" : ""}${data[key].title.split(" ").join("")};` : ""}`)

                let created = false;
                if (!existsSync("../types/sdkclassalias.d.ts")) {
                    created = true;
                    writeFileSync("../types/sdkclassalias.d.ts", `type AnySDKClass = `)
                }
                if (data[key].description == "" && data[key].title != "CEntityKeyValues") {
                    appendFileSync("../types/sdkclassalias.d.ts", `\n    ${!created ? "| " : "  "}${data[key].title.split(" ").join("")}`)
                    sdkclasses.push(data[key].title.split(" ").join(""))
                }
            }
        }
    }
}

for (const dataFile of dataFiles) {
    ProcessData(JSON.parse(readFileSync(dataFile)), __dirname + "/../types")
}

for (const key in functionStxPoll) {
    writeFileSync(key, functionStxPoll[key].file.join("\n"));
}

writeFileSync(__dirname + "/../types/sdkcls.d.ts", `declare interface ISDK {\n${sdkclasses.map((v) => `    ${v}: (ptr_or_class: string|AnySDKClass) => ${v};`).join("\n")}\n${sdktypes.map((v) => `    ${v}: ${v};`).join("\n")}\n}\ndeclare const sdk : ISDK`);