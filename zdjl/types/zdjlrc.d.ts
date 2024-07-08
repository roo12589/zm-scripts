interface Script {
    name: string
    gap: number
    order?: number
}
type VarOption = UIOption | ScriptOption | ConfigOption

interface UIOption {
    name: string
    value: {
        varType: string
        varScope: string
        showInput: boolean
        mustInput: boolean
        textContent?: string
        textSize?: number
        textColor?: string
    }
}
interface ScriptOption {
    name: string
    value: {
        varType: string
        varScope: string
        showInput: boolean
        mustInput: boolean
        showInputWidthBasis: string
        showInputContentAlign: string
        showInputLabel: string
        syncValueOnChange: boolean
        value: boolean
        __vars: {
            textAppendRight: {
                varType: string
                valueExp: string
            }
        }
    }
}
interface ConfigOption {
    name: string
    value: {
        varType: string
        varScope: string
        showInput: boolean
        showInputLabel?: string
        mustInput: boolean
        showInputWidthBasis?: string
        showInputContentAlign?: string
        syncValueOnChange?: boolean
        number?: number
        selectItems?: number[]
        value?: string
        stringItems?: string[]
        string?: string
        rememberInputValue?: boolean
        __vars?: {
            stringItems?: {
                varType: 'expression'
                varScope: 'script'
                mustInput: true
                valueExp: string
            }
        }
    }
}

/**
 * 用户配置，内存脚本变量
 */
interface UserConfigValue {
    scriptVars: Record<string, any>
    globalVars: Record<string, any>
}
type UserConfigMapObj = Record<string, UserConfigValue>
