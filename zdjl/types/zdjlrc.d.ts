interface Script {
    name: string
    gap: number
    order?: number
    tab?: string
    configList?: CustomConfig[]
}
/**
 * 规定的的脚本配置信息，即需要的完整变量格式
 * 包含name和value
 */
interface Option extends Variable {}

type VarOption = UIOption | Option | ConfigOption

interface UIOption {
    name: string
    value: TextVariable | ButtonVariable | ImageVariable
}
interface ConfigOption extends Option {
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
        value?: string | boolean
        stringItems?: string[]
        // string?: string
        rememberInputValue?: boolean
        __vars?: Partial<
            Record<
                keyof VariableValue,
                { varType: 'expression'; valueExp: string }
            >
        >
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

/**
 * 用户配置，内存脚本变量
 */
interface UserConfigValue {
    scriptVars: Record<string, any>
    globalVars: Record<string, any>
}
type UserConfigMapObj = Record<string, UserConfigValue>

interface ScriptStatistics {
    type: 'daily' | 'weekly' | 'special'
    isCompleted: boolean
    currentTimes: number
    targetTimes: number
}

// 顶层接口
interface actionJSON {
    type: string // 动作类型，固定值
    vars: Variable[] // 变量列表
    condition?: Condition // 运行条件
    jumpId?: string // 设置跳转标识
    dialog?: string // 弹窗标题
    dialogShowOnce?: boolean // 弹窗仅展示一次
    dialogOKText?: string // 确定按钮文字
    dialogCancelText?: string // 取消按钮文字
    playAudio?: boolean // 播放提示音
    dialogAutoClickBtn?: DialogAutoClickBtn // 自定义按钮点击动作
    dialogCancelAction?: CancelAction // 取消按钮行为
    __vars?: DialogVars // 开启变量模式
}

// 变量接口
/**
 * 规定的的脚本配置信息，即需要的完整变量格式
 * 包含name和value
 */
interface Variable {
    name: string // 变量名
    value: VariableValue // 变量配置参数
}

// 变量值接口
interface VariableValue {
    /** varType 基础
     * 'string'|'number'(number)|'bool'|'object'|'expression'(valueExp)|'js_function'(jsCode)|'delete'
     */
    varType: string // 变量类型
    value: /* string | boolean | number  */ any // 变量默认
    stringItems?: string[] // 选项代替输入
    showInput?: boolean // 需要界面手动输入
    showInputLabel?: string // 变量展示名称
    showInputHiddenLabel?: boolean // 不展示变量名称
    textLineBefore?: string // 额外文本(上)
    textLineAfter?: string // 额外文本()
    textAppendRight?: string // 额外文本(右)
    mustInput?: boolean // 是否必填
    rememberInputValue?: boolean // 记住输入的值
    syncValueOnChange?: boolean // 改动后实时设置值
    showInputContentAlign?: 'left' | 'center' | 'right' // 内容对齐方式
    showInputWidthBasis?: 'auto' | `${number}%` // 显示宽度
    showInputWidthGrow?: number // 撑满剩余空间
    backgroundColor?: string // 背景颜色
    backgroundImageData?: string // 背景图片
    showInputHiddenView?: boolean // 隐藏变量显示
    showInputHiddenDesc?: boolean // 隐藏变量描述展示
    varScope?: 'script' | 'global' // 变量作用域
    varDesc?: string // 变量描述
    __vars?: Partial<
        Record<keyof VariableValue, { varType: 'expression'; valueExp: string }>
    >
}
// 运行条件接口
interface Condition {
    type: string // 条件类型
    expression: string // 表达式
    runWhenFalse?: boolean // 条件相
    checkBeforeDelay?: boolean // 等待前检查
    repeatWhenFalse?: boolean // 重复检查直到满足
    repeatWhenFalseLimit?: number // 重复上限
    repeatWhenFalseRepeatDelay?: number // 重复间隔
    desc?: string // 条件描述
}

interface TextVariable extends Omit<VariableValue, 'value'> {
    varType: 'ui_text'
    showInput: true
    textContent: string
    textSize?: number
    textColor?: string
}
interface ButtonVariable extends Omit<VariableValue, 'value'> {
    varType: 'ui_button'
    showInput: true
    buttonText: string
    buttonStyle: 'button' | 'link' | 'none'
    action: actionJSON
}
interface ImageVariable extends Omit<VariableValue, 'value'> {
    varType: 'imageData'
    showInput: true
    onlyForShow: true
    imageData: {
        data: string
    }
}