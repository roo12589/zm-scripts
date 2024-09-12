/**
 * 4.16
 * add 极光天照 辅助进图 扫除
 * refactor 脚本分类结构;部分脚本config预置
 * 4.17
 * 7日 =>本周
 * 存储时间 修正5小时
 * 进人游戏zjs 每日仅一次活动弹窗
 * 4.24
 * add 天选阁
 * fix configScope global
 * add kunlunStrategy
 *
 *
 * todo
 * 仙迹商店？
 * 碾压
 * 仙盟/联盟任务领取提交
 * 联盟任务/魔窟
 * config schema
 * 每周首次退出规避联盟动画
 *
 */

// @ts-ignore
const scripts: Record<string, { name: string; list: Script[] }> = {
    _rc: {
        name: '日常：',
        list: [
            { name: '日常活跃1000', gap: 1, order: 0 },
            { name: '日常爬山v2', gap: 1, order: 0 },
            { name: '炼狱黄泉路', gap: 1, order: 10 },
            { name: '极光天照', gap: 1, order: -100 },
            { name: '一键碾压', gap: 1, order: 0 },
            { name: '扫蛋', gap: 1, order: 100 },
        ],
    },
    _rc2: {
        name: '选做日常：',
        list: [
            { name: '联盟炼妖挂机', gap: 2, order: -1 },
            { name: '仙迹扫荡', gap: 3, order: 0 },
            { name: '战令', gap: 0.5, order: 1000 },
            { name: '极北自动扫荡', gap: 0.5, order: -10 },
            { name: '仙迹商店', gap: 1, order: 100 },
            { name: '联盟任务', gap: 1, order: 10 },
            { name: '妖兽', gap: 0, order: 1000 },
            { name: '天选阁', gap: 0, order: 0 },
            { name: '祝福', gap: 1, order: 100 },
        ],
    },
    _hd: {
        name: '活动：',
        list: [
            // { name: '活跃兑换', gap: 1, order: 100 },
            // { name: '机缘令兑换', gap: 1, order: 100 },
            { name: '见缝插针', gap: 1, order: 100 },
            //{ name: '灵能', gap: 0.5, order: 1000 },
            // { name: '食粽果盘', gap: 1, order: 100 },
            // { name: '邪羊副本', gap: 1, order: 1 },
            // { name: '捕虫虫胶', gap: 1, order: 101 },
      //      { name: '海钓礼包', gap: 1, order: 1002 },
       //     { name: '海钓交换', gap: 1, order: 1001 },
           // { name: '海钓领取', gap: 1, order: 1000 },
           // { name: '分享', gap: 1, order: 999 },
            // { name: '捕虫领取', gap: 1, order: 100 },
            // { name: '龙虎领取', gap: 1, order: 100 },
            // { name: '天降领取', gap: 1, order: 100 },
            // { name: '印章兑换', gap: 1, order: 1000 },
            // { name: '青龙秘境', gap: 1, order: 1000 },
            // { name: '青龙交换', gap: 1, order: 1000 },
            // { name: '青龙领取', gap: 1, order: 10 },
            // { name: '多关卡v2', gap: 1, order: 10000 },
            // { name: '熔炉领取', gap: 1, order: 100 },
            // { name: '移形白嫖', gap: 1, order: 100 },
            // { name: '扫除', gap: 1, order: 10 },
            // { name: '邪羊领取', gap: 1, order: 10 },
            // { name: '邪羊交换', gap: 1, order: 10 },
            // { name: '邪羊副本', gap: 1, order: 1 },
        ],
    },
    _zc: {
        name: '周常：',
        list: [
            { name: '每周竞技', gap: 7, order: 0 },
            { name: '周登入', gap: 7, order: 0 },
            { name: '荣耀', gap: 7, order: 0 },
        ],
    },
    _qt: {
        name: '其他：',
        list: [],
    },
    _cf: {
        name: '配置：',
        list: ['周悬赏任务'].map((name) => ({
            name: name,
            gap: 0,
        })),
    },
    _otherTab: {
        name: '_',
        list: [
            { name: '辅助进图', gap: 0, order: 0 },
            { name: '联盟悬赏辅助', gap: 0, order: 0 },
            { name: '云游', gap: 0, order: 1000 },
            { name: '仙女消费', gap: 0, order: 998 },
            { name: '领取邮件', gap: 0, order: 1000 },
            { name: '真灵装备', gap: 0, order: 999 },
            { name: '极北出售', gap: 0, order: 99 },
            { name: '龙宫', gap: 0, order: 100 },
            { name: '决斗场', gap: 1, order: 1000 },
        ].map((sc) => ({ ...sc, tab: 'fzTab' })),
    },
}
const tabs: { name: string; key: string }[] = [
    { name: '首页', key: 'main' },
    { name: '辅助', key: 'fz' },
    { name: '待办', key: 'todo' },
]
/* 
to do面板 额外处理 后续直接插入baseVars
*/

/**
 * 获取脚本的统计信息
 * @param sc 脚本对象
 * @returns 统计信息字符串
 */
function getScriptStatistics(sc: Script): ScriptStatistics {
    let res: ScriptStatistics = {
        type: 'daily',
        isCompleted: false,
        currentTimes: 0,
        targetTimes: 0,
    }
    const { name, gap } = sc

    function getCurrentMonday() {
        const d = new Date()
        const date = d.getDate()
        const day = d.getDay() === 0 ? 7 : d.getDay()
        const targetMonday = new Date()
        targetMonday.setDate(date - day + 1)
        targetMonday.setHours(0, 0, 0, 0)
        return targetMonday
    }

    const statistics = zdjl.getStorage('statistics_2')
    if (statistics && statistics[name]) {
        const scriptStatistic = Object.keys(statistics[name]).sort()
        let lastTime = scriptStatistic[scriptStatistic.length - 1]
        if (!lastTime) return res
        let lastTimeStr = `${lastTime.slice(0, 4)}-${lastTime.slice(
            4,
            6
        )}-${lastTime.slice(6, 8)}`
        // zdjl引擎不兼容 new Date 2023-02-02 00:00:00格式字符串
        const lastDate = new Date(lastTimeStr)
        lastDate.setHours(0, 0, 0, 0)
        const now = new Date()
        // console.log('scriptStatistic', scriptStatistic)
        // console.log('lastTime', lastTime)
        // console.log('lastDate', lastDate)
        const differ =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate()
            ).valueOf() - lastDate.getTime()

        // text = `${currentTime}/${targetTime}次`
        if (gap <= 1) {
            res.type = 'daily'
            res.targetTimes = Math.floor(1 / gap)
            if (differ < 24 * 60 * 60 * 1000) {
                res.currentTimes = statistics[name][lastTime]

                if (res.currentTimes >= res.targetTimes) res.isCompleted = true
            }
        } else if (gap === 7) {
            res.type = 'weekly'
            res.targetTimes = 1
            const Monday = getCurrentMonday()
            if (lastDate >= Monday) {
                res.isCompleted = true
            }
        } else {
            if (differ < gap * 24 * 60 * 60 * 1000) {
                res.isCompleted = true
            }
        }
    }
    return res
}
let otherTodoList = [
    { name: '联盟炼妖挂机', gap: 2 },
    { name: '仙迹扫荡', gap: 3 },
    { name: '战令', gap: 0.5 },
    { name: '极北自动扫荡', gap: 0.5 },
    // { name: '仙迹商店', gap: 1, },
    // { name: '联盟任务', gap: 1,},
    { name: '妖兽', gap: 0, date: [5, 6, 0] },
    { name: '天选阁', gap: 0, date: [5, 6, 0] },
    { name: '联盟化身', gap: 0, date: [5] },
    { name: '祝福', gap: 1 },
    // { name: '混沌战场', gap: 1, noScript: true },
    // { name: '捕虫2号', gap: 1, noScript: true },
]
let mainTodoContent = `#MD
<font color="yellow">日待办</font><br>
<font color="red">${[...scripts._rc.list, ...scripts._hd.list]
    .map((sc) => {
        const statistics = getScriptStatistics(sc)
        return {
            name: sc.name,
            ...statistics,
        }
    })
    .filter((st) => !st.isCompleted)
    .map((st) => st.name + ': ' + st.currentTimes + '/' + st.targetTimes + '次')
    .join('<br>')}

</font><font>   ${otherTodoList
    .map((sc:any) => {
        if (sc.noScript) {
            return sc.name + '?'
        }

        let day = new Date().getDay()
        if (sc.date && !sc.date.includes(day)) return ''
        let statistics = getScriptStatistics(sc)

        return `${sc.name}: ${statistics.currentTimes}/${statistics.targetTimes}次`
    })
    .join('<br>')}
</font>
    <br>
<font color="yellow">周待办</font><br>
<font>${scripts._zc.list
    .map((sc) => {
        const statistics = getScriptStatistics(sc)
        return {
            name: sc.name,
            ...statistics,
        }
    })
    .filter((st) => !st.isCompleted)
    .map((st) => st.name + ': ' + st.currentTimes + '/' + st.targetTimes + '次')
    .join('<br>')}
</font>
`
let todayHour = new Date().getHours()
if (todayHour >= 19 && todayHour <= 20) {
    let sc = { name: '妖兽', gap: 0, date: [5, 6, 0] }
    const st = getScriptStatistics(sc)
    let day = new Date().getDay()
    if (sc.date.includes(day) && !st.isCompleted) {
        zdjl.runAction({
            type: '系统提示',
            promptType: 'alert',
            promptTitle: '妖兽',
            promptText: '妖兽未完成',
            showDuration: 3000,
            playAudio: 'true',
            delay: '0',
        })
    }
}
/*
if (todayHour >= 21) {
    zdjl.runAction({
        type: '系统提示',
        promptType: 'alert',
        promptTitle: '待办',

        promptText: mainTodoContent,

        showDuration: 3000,
        playAudio: 'true',
        delay: '0',
    })
}
 */
const todoVars = [
    {
        name: '_todo_main1',
        value: {
            varType: 'ui_text',
            varScope: 'script',
            showInput: true,
            mustInput: true,
            textContent: mainTodoContent,
            textSize: 16,
            showInputHiddenView: true,
            __vars: {
                showInputHiddenView: {
                    varType: 'expression',
                    valueExp: `curTab !== 'todoTab'`,
                },
            },
        },
    },
]

tabs.forEach(({ name, key }) => {
    zdjl.setVar('_tab_btn_' + key, {
        varType: 'ui_button',
        varScope: 'script',
        mustInput: true,
        showInput: false,
        buttonText: '_',
        action: {
            type: '运行JS代码',
            jsCode: `zdjl.setVar('curTab','${key}Tab')`,
            delay: '0',
        },
        closeDialogOnAction: false,
    })
})

const scriptOrderMap = {
    天庭关卡: 101,
}
Object.keys(scripts).forEach((key) => {
    scripts[key].list.forEach((sc) => {
        scriptOrderMap[sc.name] = sc.order || 0
    })
})
// @ts-ignore
zdjl.setStorage('scriptOrderMap', scriptOrderMap)
/*      
'天庭关卡',
'关卡',
'content',
*/
const computedUIOption = (key: string, name: string): UIOption => ({
    name: key,
    value: {
        varType: 'ui_text',
        varScope: 'script',
        showInput: true,
        mustInput: true,
        textContent: name,
        textSize: 13,
        textColor: '#f2ff00',
        showInputHiddenView: true,
        __vars: {
            showInputContentAlign: {
                valueExp: `curTab === '${key}Tab' ? '#000000' : '#00000000'`,
                varType: 'expression',
            },
        },
    },
})
//@ts-ignore
const computedScriptOption = (sc: Script): Option => ({
    name: sc.name,
    value: {
        varType: 'bool',
        varScope: 'script',
        showInput: true,
        mustInput: true,
        showInputWidthBasis: '50%',
        showInputContentAlign: 'left',
        syncValueOnChange: true,
        value: zdjl.getVar(sc.name) || false,
        showInputHiddenView: true,
        __vars: {
            textAppendRight: {
                varType: 'expression',
                valueExp:
                    "(function(){function getCurrentMonday(){const d=new Date();const date=d.getDate();const day=d.getDay()===0?7:d.getDay();const targetMonday=new Date();targetMonday.setDate(date-day+1);targetMonday.setHours(0,0,0,0);return targetMonday;}let name='" +
                    sc.name +
                    "';let gap=" +
                    sc.gap +
                    ";const statistics=zdjl.getStorage('statistics_2');if(statistics&&statistics[name]){const scriptStatistic=Object.keys(statistics[name]).sort();let lastTime=scriptStatistic[scriptStatistic.length-1];if(!lastTime)return'';let lastTimeStr=`${lastTime.slice(0,4)}-${lastTime.slice(4,6)}-${lastTime.slice(6,8)}`;const lastDate=new Date(lastTimeStr);lastDate.setHours(0,0,0,0);const now=new Date();console.log('scriptStatistic',scriptStatistic);console.log('lastTime',lastTime);console.log('lastDate',lastDate);const differ=new Date(now.getFullYear(),now.getMonth(),now.getDate())-lastDate.getTime();let color='#ffffff';let text;if(differ<24*60*60*1000){text='今天';}else if(differ<2*24*60*60*1000){text='昨天';}else if(differ<3*24*60*60*1000){text='前天';}else{text=differ/(24*60*60*1000)+'天前';}console.log(scriptStatistic,gap,gap*24*60*60*1000,differ);if(gap&&gap<1){color=zdjl.getVar('color_0');if(differ<24*60*60*1000){let targetTime=Math.floor(1/gap);let currentTime=statistics[name][lastTime]||0;text=`${currentTime}/${targetTime}次`;if(currentTime>=targetTime){color=zdjl.getVar('color_100');}}}if(gap&&gap>=1){if(differ<gap*24*60*60*1000){color=zdjl.getVar('color_100');}else{color=zdjl.getVar('color_0');}if(gap===7){const Monday=getCurrentMonday();if(lastDate>=Monday){text='完成';color=zdjl.getVar('color_100');}else{color=zdjl.getVar('color_0');}}}return`#MD<font color=${color}>${text}</font>`;}return'';})()",
            },
            showInputHiddenView: {
                varType: 'expression',
                valueExp: `curTab !== '${sc?.tab || 'mainTab'}'`,
            },
        },
    },
})

const rcList: VarOption[] = [
    computedUIOption('_rc', scripts['_rc'].name),
    ...scripts['_rc'].list.map(computedScriptOption),
]
const rc2List: VarOption[] = [
    computedUIOption('_rc2', scripts['_rc2'].name),
    ...scripts['_rc2'].list.map(computedScriptOption),
]
const zcList: VarOption[] = [
    computedUIOption('_zc', scripts['_zc'].name),
    ...scripts['_zc'].list.map(computedScriptOption),
]
const hdList: VarOption[] = [
    computedUIOption('_hd', scripts['_hd'].name),
    ...scripts['_hd'].list.map(computedScriptOption),
]
const qtList: VarOption[] = [
    computedUIOption('_qt', scripts['_qt'].name),
    ...scripts['_qt'].list.map(computedScriptOption),
]
const configList: VarOption[] = [
    computedUIOption('_cf', scripts['_cf'].name),
    ...scripts['_cf'].list.map(computedScriptOption),
]
const otherTabList: VarOption[] =
    scripts['_otherTab'].list.map(computedScriptOption)

qtList.splice(
    1,
    0,
    {
        name: '天庭关卡',
        value: {
            varType: 'bool',
            varScope: 'script',
            showInput: true,
            mustInput: true,
            showInputWidthBasis: '50%',
            showInputContentAlign: 'left',
            syncValueOnChange: true,
            value: false,
            __vars: {
                showInputHiddenView: {
                    varType: 'expression',
                    valueExp: "curTab !== 'mainTab'",
                },
            },
        },
    },
    {
        name: '关卡',
        value: {
            varType: 'string',
            varScope: 'global',
            showInput: true,
            mustInput: true,
            showInputWidthBasis: '50%',
            showInputContentAlign: 'left',
            syncValueOnChange: true,
            value: '',
            __vars: {
                showInputHiddenView: {
                    varType: 'expression',
                    valueExp: "curTab !== 'mainTab'",
                },

                stringItems: {
                    varType: 'expression',
                    // varScope: 'script',
                    // mustInput: true,
                    valueExp: `[
  '无', '神兽森林', '九重天',
  '天宫道', '天宫道1', '南天门',
  '南天王殿', '西天王殿',
  '南天王殿-精英', '西天王殿-精英',
  '北天王殿', '彩虹楼',
  '朝会殿', '凌霄宝殿',
  '青龙秘境', '龙宫', '龙宫1',
  '玲珑塔-李天王', '玲珑塔-哪吒',
  '玲珑塔-雷震子', '玲珑塔-土行孙',
  '转轮殿-精英', '牛魔殿-精英',
  '御马监', '蟠桃园',
  '罗刹宫-惊鸿殿', '罗刹宫-月夜宫',
  '时空裂缝-涅槃','时空裂缝终',
  '时空裂缝-锋刃','时空裂缝-精英',
  '东天王殿'
]`,
                },
            },
        },
    }
)
qtList.push({
    name: 'content',
    value: {
        varType: 'string',
        varScope: 'global',
        mustInput: false,
        showInput: true,
        showInputContentAlign: 'left',
        value: '上仙大气',
        __vars: {
            showInputHiddenView: {
                varType: 'expression',
                valueExp: "curTab !==  'fzTab'",
            },
        },
    },
})
const _configList = [
    {
        name: 'yunyouSlot',
        value: {
            varType: 'number',
            varScope: 'global',
            showInput: true,
            showInputLabel: '云游槽位',
            mustInput: true,
            showInputWidthBasis: '25%',
            showInputContentAlign: 'left',
            syncValueOnChange: true,
            number: 2,
            selectItems: [1, 2, 3],
        },
    },
    {
        name: 'crushBlessing',
        value: {
            varType: 'bool',
            varScope: 'global',
            showInput: true,
            showInputLabel: '手动碾压祝福',
            mustInput: true,
            showInputWidthBasis: '50%',
            showInputContentAlign: 'left',
            value: false,
        },
    },
    {
        name: 'lianmengPurchaseStrategy',
        value: {
            varType: 'string',
            varScope: 'global',
            showInput: true,
            showInputLabel: '炼妖购买策略',
            mustInput: true,
            showInputWidthBasis: '50%',
            showInputContentAlign: 'left',
            syncValueOnChange: true,
            rememberInputValue: true,
            string: '无',
            stringItems: ['无', '二级丹', '启灵符'],
        },
    },
    {
        name: 'kunlunStrategy',
        value: {
            varType: 'string',
            varScope: 'global',
            showInput: true,
            showInputLabel: '昆仑山策略',
            mustInput: true,
            showInputWidthBasis: '50%',
            showInputContentAlign: 'left',
            syncValueOnChange: true,
            string: '半自动',
            stringItems: ['半自动', '全自动'],
        },
    },
    {
        name: 'lianmengRewardStrategy',
        value: {
            varType: 'string',
            varScope: 'global',
            showInput: true,
            showInputLabel: '悬赏策略',
            mustInput: true,
            showInputWidthBasis: '50%',
            showInputContentAlign: 'left',
            syncValueOnChange: true,
            string: '全自动',
            stringItems: ['半自动', '全自动'],
        },
    },
]
configList.push(
    ..._configList.map((_c: any) => {
        _c.value.__vars = {
            showInputHiddenView: {
                varType: 'expression',
                valueExp: "curTab !== 'mainTab'",
            },
        } as any
        return _c
    })
)

const scriptVars = [
    ...rcList,
    ...rc2List,
    ...hdList,
    ...zcList,
    ...qtList,
    ...configList,
    ...otherTabList,
]
const baseVars = [
    {
        name: 'startSlot',
        value: {
            varType: 'number',
            varScope: 'script',
            showInput: true,
            showInputLabel: '开始槽位',
            mustInput: true,
            showInputWidthBasis: '25%',
            showInputContentAlign: 'left',
            syncValueOnChange: true,
            number: 1,
            selectItems: [1, 2, 3, 4, 5, 6, 7, 8],
        },
    },
    {
        name: 'stopSlot',
        value: {
            varType: 'number',
            varScope: 'script',
            showInput: true,
            showInputLabel: '结束槽位',
            mustInput: true,
            showInputWidthBasis: '25%',
            showInputContentAlign: 'left',
            syncValueOnChange: true,
            number: 8,
            selectItems: [1, 2, 3, 4, 5, 6, 7, 8],
        },
    },
    {
        name: 'noti',
        value: {
            varType: 'bool',
            varScope: 'script',
            showInput: true,
            showInputLabel: '提示',
            mustInput: true,
            rememberInputValue: true,
            showInputWidthBasis: '25%',
            showInputContentAlign: 'left',
            value: true,
        },
    },
    {
        name: 'curUserConfigName',
        value: {
            varType: 'string',
            varScope: 'script',
            showInput: true,
            showInputLabel: '读取配置',
            mustInput: true,
            rememberInputValue: true,
            showInputWidthBasis: 'auto',
            syncValueOnChange: true,
            __vars: {
                stringItems: {
                    varType: 'expression',
                    valueExp:
                        "Object.keys(zdjl.getStorage('userConfigMap') || {'否':{}})",
                },
            },
            showInputWidthGrow: 1,
        },
    },
    {
        name: '_btn_confirm',
        value: {
            varType: 'ui_button',
            varScope: 'script',
            showInput: true,
            mustInput: true,
            showInputWidthBasis: 'auto',
            buttonText: '确认',
            action: {
                type: '运行JS代码',
                delayUnit: 1,
                jsCode: 'let userConfigMap = zdjl.getStorage(\'userConfigMap\') || {}\r\nconsole.log("get---userConfigMap",userConfigMap);let curUserConfigName = zdjl.getVar(\'curUserConfigName\') || \'默认\'\r\n\r\nlet curConfigScriptVars = userConfigMap[curUserConfigName].scriptVars\r\nlet curConfigGlobalVars = userConfigMap[curUserConfigName].globalVars\r\n\r\nfor (let key of Object.keys(curConfigGlobalVars)) {\r\n    if (curConfigGlobalVars.hasOwnProperty(key) && !key.startsWith(\'__\')) {\r\n        zdjl.setVar(key, curConfigGlobalVars[key], \'global\')\r\n    }\r\n}\r\nfor (let key of Object.keys(curConfigScriptVars)) {\r\n   console.warn(`if var`,curConfigGlobalVars.hasOwnProperty(key),key,curConfigGlobalVars[key]); if (curConfigScriptVars.hasOwnProperty(key) && !key.startsWith(\'__\')) {\r\n zdjl.setVar(key, curConfigScriptVars[key])\r\n    }\r\n}\r\nzdjl.runAction({\r\n    "type": "控制执行",\r\n    "delay": "0",\r\n    "delayUnit": 1,\r\n    "controlRunType": "jumpTo",\r\n    "jumpToPosition": "-0",\r\n    "ContinueParentExecute": false\r\n})',
            },
            closeDialogOnAction: false,
            showInputContentAlign: 'right',
        },
    },
    {
        name: '_btn_more',
        value: {
            varType: 'ui_button',
            varScope: 'script',
            showInput: true,
            mustInput: true,
            showInputWidthBasis: 'auto',
            buttonText: '更多',
            action: {
                type: '运行多个动作',
                delayUnit: 1,
                scriptCallbacks: {
                    afterExecFail: {
                        type: '设置变量',
                        delayUnit: 1,
                        vars: [
                            {
                                name: '_cancel',
                                value: {
                                    varType: 'string',
                                    varScope: 'script',
                                    mustInput: true,
                                    value: "''",
                                },
                            },
                        ],
                    },
                },
                scriptSet: [
                    {
                        type: '设置变量',
                        delayUnit: 1,
                        vars: [
                            {
                                name: 'alternative',
                                value: {
                                    varType: 'string',
                                    varScope: 'script',
                                    showInput: true,
                                    showInputLabel: '替代项 未完成',
                                    mustInput: true,
                                    rememberInputValue: true,
                                    showInputWidthBasis: '50%',
                                    syncValueOnChange: true,
                                    __vars: {
                                        stringItems: {
                                            varType: 'expression',
                                            valueExp:
                                                "Object.keys(zdjl.getStorage('userConfigMap') || {'否':{}})",
                                        },
                                    },
                                },
                            },
                            {
                                name: 'saveUserConfigName',
                                value: {
                                    varType: 'string',
                                    varScope: 'script',
                                    showInput: true,
                                    showInputLabel: '目标配置',
                                    mustInput: true,
                                    syncValueOnChange: true,
                                },
                            },
                            {
                                name: '_btn_save',
                                value: {
                                    varType: 'ui_button',
                                    varScope: 'script',
                                    showInput: true,
                                    mustInput: true,
                                    buttonText: '保存配置',
                                    action: {
                                        type: '运行JS代码',
                                        delayUnit: 1,
                                        jsCode: 'console.warn(\'保存配置\')\r\nconst scriptVars = zdjl.getVars()\r\nconst globalVars = zdjl.getVars(\'global\')\r\nlet saveUserConfigName = zdjl.getVar(\'saveUserConfigName\') || \'默认\'\r\nlet curUserConfig = {\r\n    scriptVars,\r\n    globalVars,\r\n}\r\nlet userConfigMap = zdjl.getStorage(\'userConfigMap\') || {}\r\nuserConfigMap[saveUserConfigName] = curUserConfig\r\n\r\nzdjl.setStorage(\'userConfigMap\', userConfigMap)\r\nzdjl.toast(`保存配置成功：${saveUserConfigName}`, 5000);\r\nzdjl.runAction({\r\n    "type": "控制执行",\r\n    "delay": "0",\r\n    "delayUnit": 1,\r\n    "controlRunType": "jumpTo",\r\n    "jumpToPosition": "-0",\r\n    "ContinueParentExecute": false\r\n})',
                                    },
                                    closeDialogOnAction: true,
                                    showInputWidthBasis: '50%',
                                    showInputContentAlign: 'center',
                                },
                            },
                            {
                                name: '_btn_clear_storage',
                                value: {
                                    varType: 'ui_button',
                                    varScope: 'script',
                                    showInput: true,
                                    mustInput: true,
                                    buttonText: '删除配置',
                                    action: {
                                        type: '运行JS代码',
                                        delayUnit: 1,
                                        jsCode: 'let userConfigMap = zdjl.getStorage(\'userConfigMap\') || {}\r\ndelete userConfigMap[saveUserConfigName]\r\n\r\nzdjl.setStorage(\'userConfigMap\', userConfigMap)\r\nconsole.log(\'warnnn-----\',zdjl.getStorage(\'userConfigMap\')[saveUserConfigName])\r\nzdjl.toast(`删除配置成功：${saveUserConfigName}`, 5000);\r\nzdjl.runAction({\r\n    "type": "控制执行",\r\n    "delay": "0",\r\n    "delayUnit": 1,\r\n    "controlRunType": "jumpTo",\r\n    "jumpToPosition": "-0",\r\n    "ContinueParentExecute": false\r\n})',
                                    },
                                    closeDialogOnAction: true,
                                    showInputWidthBasis: '50%',
                                    showInputContentAlign: 'center',
                                },
                            },
                            {
                                name: '_btn_clear_vars',
                                value: {
                                    varType: 'ui_button',
                                    varScope: 'script',
                                    showInput: true,
                                    mustInput: true,
                                    buttonText: '清除变量',
                                    action: {
                                        type: '运行JS代码',
                                        delayUnit: 1,
                                        jsCode: "zdjl.clearVars()\r\nzdjl.toast('清空变量成功', 5000);",
                                    },
                                    closeDialogOnAction: true,
                                },
                            },
                        ],
                        dialogOKText: '勿点无用',
                    },
                ],
            },
            closeDialogOnAction: false,
            showInputContentAlign: 'right',
        },
    },
    ...todoVars,
]
var actionOption = {
    type: '设置变量',
    delay: '0',
    delayUnit: 1,
    vars: [...baseVars, ...scriptVars],
    dialogTitle: tabs.reduce(
        (pre, { name, key }) => pre + `[${name}](button:_tab_btn_${key}) `,
        '#MD'
    ),
}
// @ts-ignore
await zdjl.runActionAsync(actionOption)
