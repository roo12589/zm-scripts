declare module zdjl {
    function getVars(): any
    function setVar(key: string, value: any): void
    function getVar(key: string): any
    function setStorage(key: string, value: any): void
    function getStorage(key: string): any
    function runAction(actionOption: any): void
}
