declare module zdjl {
    function getVars(): any
    function setVar(key: string, value: any): void
    function getVar(key: string): any
    function setStorage(key: string, value: any): void
    function getStorage(key: string): any
    function runAction(actionOption: any): void
    function findLocation(locationOption: any): Location
    function recognitionScreen(recognitionOption: any): string|OCROriginData[]
}

interface OCROriginData{
    text:string
    left:number
    top:number
    right:number
    bottom:number
}

interface Location {
    x: number
    y: number
    x_100: number
    y_100: number
    x_dp: number
    y_dp: number
}

declare interface Script{
    name:string
    gap:number
    order?:number
}