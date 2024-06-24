/**自动精灵 js提示 */
namespace zdjl {
    var _prepareReadFileConfig: any
    var _prepareWriteFileConfig: any

    interface RequestUrlConfig {
        /** 连接url */
        url: string
        /** 请求方法 */
        method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'
        /** 请求头 */
        headers?: { [key: string]: string }[]
        /** 请求格式 */
        requestBody?: string
        /** 请求格式 */
        requestType?: string
        /** 返回格式 */
        responseType?: string
        /** 超时时间 */
        timeout?: number
    }

    type LocationResult = {
        /**横坐标（屏幕物理像素） */
        x: number
        /**纵坐标（屏幕物理像素） */
        y: number
        /**横坐标（屏幕 dp 逻辑像素） */
        x_dp: number
        /**纵坐标（屏幕 dp 逻辑像素） */
        y_dp: number
        /**横坐标（屏幕百分比） */
        x_100: number
        /**纵坐标（屏幕百分比） */
        y_100: number
    }

    interface FindNodeResult {
        /** 节点文本 */
        text: string
        /** 所属 app 包名 */
        packageName: string
        /** 节点id */
        idResName: string
        /** 节点类目 */
        className: string
        /**子节点信息 */
        children?: FindNodeResult[]
        /**节点位置（上） */
        boundTop: number
        /**节点位置（下） */
        boundBottom: number
        /**节点位置（左） */
        boundLeft: number
        /**节点位置（右） */
        boundRight: number
    }

    /**
     * 点击指定坐标
     */
    function click(
        x: string | number,
        y: string | number,
        duration?: number
    ): void

    /**
     * 点击指定坐标（异步非阻塞）
     */
    function clickAsync(
        x: string | number,
        y: string | number,
        duration?: number
    ): Promise<void>

    /**
     * 展示 alert 提示弹窗
     */
    function alert(
        message: string,
        options?: {
            duration?: number
            title?: string
        }
    ): void

    /**
     * 展示 alert 提示弹窗（异步非阻塞）
     */
    function alertAsync(
        message: string,
        options?: {
            duration?: number
            title?: string
        }
    ): Promise<void>

    /**
     * 添加文件内容到目标路径的文件末尾
     */
    function appendFile(
        filePath: string,
        fileContent: string | ArrayBuffer | Uint8Array
    ): void

    /**
     * 添加文件内容到目标路径的文件末尾（异步非阻塞）
     */
    function appendFileAsync(
        filePath: string,
        fileContent: string | ArrayBuffer | Uint8Array
    ): Promise<void>

    /**
     * 检查运行条件，返回条件是否成立
     */
    function check(conditionJSON: any): boolean

    /**
     * 检查运行条件，返回条件是否成立（异步非阻塞）
     */
    function check(conditionJSON: any): Promise<boolean>

    /**
     * 清空变量
     * @param scopeId — 作用域，不填则清除全部
     */
    function clearVars(scopeId?: string): void

    /**
     * 清空变量（带确认提示）
     */
    function clearVarsWithConfirm(scope: string): void

    /**
     * 展示 confirm 确认弹窗
     */
    function confirm(
        message: string,
        options?: {
            duration?: number
            title?: string
        }
    ): any

    /**
     * 展示 confirm 确认弹窗（异步非阻塞）
     */
    function confirmAsync(
        message: string,
        options?: {
            duration?: number
            title?: string
        }
    ): Promise<any>

    /**
     * 删除变量值
     */
    function deleteVar(varName: string, scope?: string): void

    /**
     * 删除变量值（带确认提示）
     */
    function deleteVarWithConfirm(varName: string, scope?: string): void

    /**
     * 查找坐标，具体参数值请查看 变量-坐标 查看值表达式
     */
    function findLocation(posData: any, findAll: boolean): LocationResult

    /**
     * 查找坐标，具体参数值请查看 变量-坐标 查看值表达式（异步非阻塞）
     */
    function findLocationAsync(
        posData: any,
        findAll: boolean
    ): Promise<LocationResult>

    /**
     * 查找节点，具体参数值请查看 变量-节点 查看值表达式
     */
    function findNode<FindAll extends boolean>(
        posData: any,
        config: {
            findAll?: FindAll
            withChildren?: boolean
        }
    ): FindAll extends true ? FindNodeResult[] : FindNodeResult

    /**
     * 查找节点，具体参数值请查看 变量-节点 查看值表达式（异步非阻塞）
     */
    function findNodeAsync<FindAll extends boolean>(
        posData: any,
        config: {
            findAll?: FindAll
            withChildren?: boolean
        }
    ): Promise<FindAll extends true ? FindNodeResult[] : FindNodeResult>

    /**
     * 执行一段手势
     */
    function gesture(
        duration: number,
        ...xyArray: [string | number, string | number][]
    ): void

    /**
     * 执行一段手势 （异步非阻塞）
     */
    function gestureAsync(
        duration: number,
        ...xyArray: [string | number, string | number][]
    ): Promise<void>

    /**
     * 执行多指手势
     */
    function gestures(
        ...gestureConfigs: (
            | [number, ...[string | number, string | number][]]
            | [number, number, ...[string | number, string | number][]]
        )[]
    ): void

    /**
     * 执行多指手势（异步非阻塞）
     */
    function gesturesAsync(
        ...gestureConfigs: (
            | [number, ...[string | number, string | number][]]
            | [number, number, ...[string | number, string | number][]]
        )[]
    ): Promise<void>

    /**
     * 获取当前 app 版本
     */
    function getAppVersion(): string

    /**
     * 获取粘贴板文本
     */
    function getClipboard(): string

    /**
     * 获取当前设备信息
     */
    function getDeviceInfo(): {
        appVersion: string
        appVersionCode: number
        deviceId: string
        userAgent: string
        screenRotation: number
        screenWidth: number
        screenHeight: number
        width: number
        height: number
        density: number
        densityDpi: number
        clientType: 'android' | 'pc'
    }

    /**
     * 获取安装的所有应用信息
     */
    function getInstalledAppInfo(): {
        isSystemApp: boolean
        packageName: string
        versionCode: number
        versionName: string
        label: string
    }[]

    /**
     * 获取当前手机定位经纬度
     */
    function getLocation(param: { timeout?: number }): any

    /**
     * 获取当前手机定位经纬度（异步非阻塞）
     */
    function getLocationAsync(param: { timeout?: number }): Promise<any>

    /**
     * 获取当前鼠标位置
     */
    function getMousePosition(): {
        x: number
        y: number
        xInScreen: number
        yInScreen: number
    }

    /**
     * 获取屏幕指定区域的所有颜色（异步非阻塞）
     */
    function getScreenAreaColors(param: {
        x: string | number
        y: string | number
        width: string | number
        height: string | number
        ignoreCache?: boolean
        sampleSize?: number
    }): {
        data: number[]
        x: number
        y: number
        width: number
        height: number
    }

    /**
     * 获取屏幕指定区域的所有颜色（异步非阻塞）
     */
    function getScreenAreaColorsAsync(param: {
        x: string | number
        y: string | number
        width: string | number
        height: string | number
        ignoreCache?: boolean
        sampleSize?: number
    }): Promise<{
        data: number[]
        x: number
        y: number
        width: number
        height: number
    }>

    /**
     * 获取屏幕指定位置的颜色
     */
    function getScreenColor(
        x: string | number,
        y: string | number,
        ignoreCache?: boolean
    ): number

    /**
     * 获取屏幕指定位置的颜色（异步非阻塞）
     */
    function getScreenColorAsync(
        x: string | number,
        y: string | number,
        ignoreCache?: boolean
    ): Promise<number>

    /**
     * 获取本地储存值
     */
    function getStorage(storageKey: string, scope?: string): any

    /**
     * 获取当前登录的用户信息
     */
    function getUser(): {
        userId: string
        userName: string
        isVip: boolean
    }

    /**
     * 获得变量值
     */
    function getVar(varName: string, scope?: string): any

    /**
     * 获得一个作用域下的所有变量值
     */
    function getVars(scope?: string): Record<string, any>

    /**
     * 键盘按下
     */
    function keyDown(keyName: string): void

    /**
     * 键盘按下并抬起，最后一个参数可以是数值代表时间
     */
    function keyPress(...keyNameOrDuration: (string | number)[]): void

    /**
     * 键盘按下并抬起（异步），最后一个参数可以是数值代表时间
     */
    function keyPressAsync(
        ...keyNameOrDuration: (string | number)[]
    ): Promise<void>

    /**
     * 键盘抬起
     */
    function keyUp(keyName: string): void

    /**
     * 长按指定坐标
     */
    function longClick(x: string | number, y: string | number): void

    /**
     * 长按指定坐标（异步非阻塞）
     */
    function longClickAsync(
        x: string | number,
        y: string | number
    ): Promise<void>

    /**
     * 对传入的 base64 图片内容执行 ocr 识别
     */
    function ocr(param: {
        mode?: 'local' | 'online'
        base64: string
        resultType?: 'text' | 'raw'
    }): string

    /**
     * 对传入的 base64 图片内容执行 ocr 识别（异步非阻塞）
     */
    function ocrAsync(param: {
        mode?: 'local' | 'online'
        base64: string
        resultType?: 'text' | 'raw'
    }): Promise<string>

    /**
     * 播放指定路径的音频
     */
    function playMedia(url: string): any

    /**
     * 播放指定路径的音频（异步非阻塞）
     */
    function playMediaAsync(url: string): Promise<void>

    /**
     * 点击指定坐标（同 click）
     */
    function press(
        x: string | number,
        y: string | number,
        duration?: number
    ): void

    /**
     * 点击指定坐标（异步非阻塞，同 clickAsync）
     */
    function pressAsync(
        x: string | number,
        y: string | number,
        duration?: number
    ): Promise<void>

    /**
     * 弹窗展示所有变量值
     */
    function printVars(): Promise<void>

    /**
     * 展示 输入内容弹窗，返回值为输入的内容
     */
    function prompt(
        message: string,
        defaultValue?: string,
        options?: {
            duration?: number
        }
    ): any

    /**
     * 展示 输入内容弹窗，返回值为输入的内容（异步非阻塞）
     */
    function promptAsync(
        message: string,
        defaultValue?: string,
        options?: {
            duration?: number
        }
    ): Promise<any>

    /**
     * 读取目标路径的文件内容
     */
    function readFile(
        filePath: string,
        options?: {
            encode?: 'UTF-8' | 'GBK' | 'BASE64'
            returnBuffer?: boolean
        }
    ): string | ArrayBuffer

    /**
     * 读取目标路径的文件内容（异步非阻塞）
     */
    function readFileAsync(
        filePath: string,
        options?: {
            encode?: 'UTF-8' | 'GBK' | 'BASE64'
            returnBuffer?: boolean
        }
    ): Promise<string | ArrayBuffer>

    /**
     * 识别屏幕内容，具体参数值请查看 变量-识别屏幕 查看值表达式
     */
    function recognitionScreen(config: any): string | OCROriginData[]

    /**
     * 识别屏幕内容，具体参数值请查看 变量-识别屏幕 查看值表达式（异步非阻塞）
     */
    function recognitionScreenAsync(
        config: any
    ): Promise<string | OCROriginData[]>

    /**
     * 删除本地储存值
     */
    function removeStorage(storageKey: string, scope?: string): void

    /**
     * 请求链接内容，具体参数请查看 变量-链接内容 查看值表达式
     */
    function requestUrl(config: RequestUrlConfig): {
        code: number
        body: string
        headers: Record<string, string | string[]>
    }

    /**
     * 请求链接内容，具体参数请查看 变量-链接内容 查看值表达式（异步非阻塞）
     */
    function requestUrlAsync(config: RequestUrlConfig): Promise<{
        code: number
        body: string
        headers: Record<string, string | string[]>
    }>

    /**
     * 运行一个动作，具体参数值请查看 变量-动作 查看值表达式
     */
    function runAction(actionJSON: any): void

    /**
     * 运行一个动作，具体参数值请查看 变量-动作 查看值表达式（异步非阻塞）
     */
    function runActionAsync(actionJSON: any): Promise<void>

    /**
     * 展示 选择弹窗，返回值为选择的条目
     */
    function select(config: {
        title?: string
        items: string[]
        selectItems?: string[]
        multi?: false
        duration?: number
    }): {
        result: number
        item: string
    }

    /**
     * 展示 选择弹窗，返回值为选择的条目（异步非阻塞）
     */
    function selectAsync(config: {
        title?: string
        items: string[]
        selectItems?: string[]
        multi?: false
        duration?: number
    }): Promise<{
        result: number
        item: string
    }>

    /**
     * 设置 蓝牙 开关
     */
    function setBluetoothEnable(enable: boolean): void

    /**
     * 设置 蓝牙 开关(异步)
     */
    function setBluetoothEnableAsync(enable: boolean): Promise<void>

    /**
     * 设置 闪光灯 开关
     */
    function setCameraFlashEnable(enable: boolean): void

    /**
     * 设置 闪光灯 开关(异步)
     */
    function setCameraFlashEnableAsync(enable: boolean): Promise<void>

    /**
     * 设置粘贴板文本
     */
    function setClipboard(text: string): void

    /**
     * 设置屏幕亮度（-1 ～ 255）
     */
    function setScreenBrightness(value: number): string

    /**
     * 设置本地储存值
     */
    function setStorage(storageKey: string, content: any, scope?: string): void

    /**
     * 设置变量值
     */
    function setVar(varName: string, varValue: any, scope?: string): void

    /**
     * 设置 WIFI 开关
     */
    function setWifiEnable(enable: boolean): void

    /**
     * 设置 WIFI 开关(异步)
     */
    function setWifiEnableAsync(enable: boolean): void

    /**
     * 等待一定时间
     * @param duration 等待时长，单位：毫秒
     */
    function sleep(duration: number): void

    /**
     * 等待一定时间（异步非阻塞）
     * @param duration 等待时长，单位：毫秒
     */
    function sleepAsync(duration: number): Promise<void>

    /** 滑动 */
    function swipe(
        x1: string | number,
        y1: string | number,
        x2: string | number,
        y2: string | number,
        duration?: number
    ): void

    /** 滑动（异步非阻塞） */
    function swipeAsync(
        x1: string | number,
        y1: string | number,
        x2: string | number,
        y2: string | number,
        duration?: number
    ): Promise<void>

    /**展示 toast 简易提示 */
    function toast(message: string, duration?: number): void

    /**手势按下 */
    function touchDown(x: number, y: number): void

    /**手势按下（异步非阻塞） */
    function touchDownAsync(x: number, y: number): Promise<void>

    /**手势移动 */
    function touchMove(x: number, y: number, duration?: number): void

    /**手势移动（异步非阻塞） */
    function touchMoveAsync(
        x: number,
        y: number,
        duration?: number
    ): Promise<void>

    /**手势抬起 */
    function touchUp(): void

    /**手势抬起（异步非阻塞） */
    function touchUpAsync(): Promise<void>

    /**
     * 震动
     * @param duration 震动时长
     * @param amplitude 震动强度（1-255）部分机器不支持
     */
    function vibrator(duration?: number, amplitude?: number): any

    /**
     * 震动（异步非阻塞）
     * @param duration 震动时长
     * @param amplitude 震动强度（1-255）部分机器不支持
     */
    function vibratorAsync(duration?: number, amplitude?: number): Promise<void>

    /**唤醒屏幕 */
    function wakeupScreen(): void

    /**写入文件内容到目标路径 */
    function writeFile(
        filePath: string,
        fileContent: string | ArrayBuffer | Uint8Array
    ): void

    /**写入文件内容到目标路径（异步非阻塞） */
    function writeFileAsync(
        filePath: string,
        fileContent: string | ArrayBuffer | Uint8Array
    ): Promise<void>
}

interface OCROriginData {
    text: string
    left: number
    top: number
    right: number
    bottom: number
}

