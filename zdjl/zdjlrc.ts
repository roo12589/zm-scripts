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

            {
                name: '一键碾压',
                gap: 1,
                order: 0,
                /*                 configList: [
                    {
                        key: 'crushBlessing',
                        label: '手动选择祝福',
                        type: 'boolean',
                        valueConfig: {
                            value: false,
                        },
                    },
                ], */
            },
            { name: '仙宝材料', gap: 1, order: 10000 },
            { name: '扫蛋', gap: 1, order: 100 },
            { name: '极光天照', gap: 1, order: -100 },
            { name: '祝福', gap: 1, order: 100 },
            { name: '混沌副本', gap: 1, order: 100 },
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
            { name: '联盟任务', gap: 0, order: 10 },
            { name: '妖兽', gap: 0, order: 1000 },
            { name: '天选阁', gap: 0, order: 0 },
            { name: '灵物空战', gap: 0, order: 0 },
            { name: '炼狱黄泉路', gap: 0, order: 10 },
            { name: '妖域', gap: 0, order: 20 },
        ],
    },
    _hd: {
        name: '活动：',
        list: [
            { name: '活跃兑换', gap: 1, order: 100 },
            { name: '机缘令兑换', gap: 1, order: 100 },
            // { name: '见缝插针', gap: 1, order: 100 },
            // { name: '灵能', gap: 0.5, order: 1000 },

            // { name: '进宝领取', gap: 1, order: 95 },
            { name: '好运来', gap: 1, order: 102 },
            { name: '大家发财', gap: 1, order: 102 },
            { name: '分享', gap: 1, order: 999 },
            { name: '招财进宝', gap: 1, order: 100 },
            // { name: '食粽果盘', gap: 1, order: 100 },
            // { name: '邪羊副本', gap: 1, order: 1 },
            // { name: '捕虫虫胶', gap: 1, order: 101 },
            //      { name: '海钓礼包', gap: 1, order: 1002 },
            //     { name: '海钓交换', gap: 1, order: 1001 },
            // { name: '海钓领取', gap: 1, order: 1000 },

            // { name: '捕虫领取', gap: 1, order: 100 },
            { name: '青龙秘境', gap: 1, order: 1000 },
            { name: '龙虎领取', gap: 1, order: 100 },
            { name: '御剑', gap: 1, order: 50 },
            { name: '龙宫', gap: 0.5, order: 11 },
            { name: '天降领取', gap: 0.5, order: 10 },
            // { name: '寻宝领取', gap: 1, order: 100 },
            // { name: '印章兑换', gap: 1, order: 1000 },
            { name: '青龙交换', gap: 1, order: 1000 },
            { name: '青龙领取', gap: 1, order: 10 },
            // { name: '多关卡v2', gap: 0.5, order: 10000 },
            //  { name: '熔炉领取', gap: 1, order: 110 },
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
        list: [] /* .map((name) => ({
            name: name,
            gap: 0,
        })), */,
    },
    _otherTab: {
        name: '_',
        list: [
            {
                name: '辅助进图',
                gap: 0,
                order: 0,
                configList: [
                    {
                        key: 'fzJintuStrategy',
                        label: '目标地点',
                        type: 'stringArray' as 'stringArray',
                        valueConfig: {
                            value: '村庄',
                            stringItems: [
                                '村庄',
                                '天庭',
                                '炼狱',
                                '蓬莱',
                                '极北',
                                '仙盟',
                                '联盟',
                                '活动面板',
                            ],
                            rememberInputValue: true,
                        },
                    },
                ],
            },
            {
                name: '云游',
                gap: 0,
                order: 1000,
                configList: [
                    {
                        key: 'yunyouSlot',
                        label: '云游槽位',
                        type: 'numberArray' as 'numberArray',
                        valueConfig: {
                            number: 2,
                            selectItems: [1, 2, 3],
                            showInputWidthBasis: '25%',
                        },
                    },
                ],
            },
            { name: '联盟悬赏辅助', gap: 0, order: 0 },
            { name: '仙女消费', gap: 0, order: 9998 },
            { name: '领取邮件', gap: 0, order: 10000 },
            { name: '真灵装备', gap: 0, order: 9999 },
            { name: '天庭碾压', gap: 1, order: 1000 },
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
    .map((sc: any) => {
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
            // promptType: 'alert',
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
            showInputHiddenView: {
                varType: 'expression',
                valueExp: `curTab !== 'mainTab'`,
            },
        },
    },
})
//@ts-ignore
const computedScriptOption = (sc: Script): Option | VarOption[] => {
    let op: Option = {
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
    }
    if (!sc.configList) return op

    return [
        op,
        ...sc.configList.map((cf) => {
            cf.valueConfig = cf.valueConfig || {}
            cf.valueConfig.__vars = cf.valueConfig.__vars || {}
            cf.valueConfig.__vars.showInputHiddenView = {
                varType: 'expression',
                valueExp: `curTab !== '${sc?.tab || 'mainTab'}'`,
            }
            return computedConfigOption(cf)
        }),
    ]
}
interface CustomConfig {
    key: string
    type: 'boolean' | 'numberArray' | 'stringArray'
    label?: string
    valueConfig?: Partial<ConfigOption['value']> &
        (
            | { selectItems: string[]; number?: number }
            | { stringItems: string[]; string?: string }
            | { value?: boolean }
        )
}
const computedConfigOption = (config: CustomConfig) => {
    const { key, type, label = key, valueConfig } = config
    let res: ConfigOption = {
        name: key,
        value: {
            varType: 'number',
            varScope: 'script',
            showInput: true,
            showInputLabel: label,
            mustInput: true,
            showInputWidthBasis: '50%',
            showInputContentAlign: 'left',
            syncValueOnChange: true,
            rememberInputValue: false,
        },
    }
    if (type === 'numberArray') {
        let diff = {
            varType: 'number',
            showInputWidthBasis: '25%',
            number:
                valueConfig?.number ||
                (valueConfig?.selectItems as number[])[0] ||
                1,
            // selectItems: [1, 2, 3, 4, 5, 6, 7, 8],
        }
        Object.assign(res.value, diff, valueConfig)
    }
    if (type === 'stringArray') {
        let diff = {
            varType: 'string',
            varScope: 'global',
            string:
                valueConfig?.value ||
                (valueConfig?.stringItems as string[])[0] ||
                '',
        }
        Object.assign(res.value, diff, valueConfig)
    }
    if (type === 'boolean') {
        let diff = {
            varType: 'bool',
            varScope: 'global',
            value: false,
        }
        Object.assign(res.value, diff, valueConfig)
    }

    return res
}

const rcList: (VarOption | VarOption[])[] = [
    computedUIOption('_rc', scripts['_rc'].name),
    ...scripts['_rc'].list.map(computedScriptOption),
]
const rc2List: (VarOption | VarOption[])[] = [
    computedUIOption('_rc2', scripts['_rc2'].name),
    ...scripts['_rc2'].list.map(computedScriptOption),
]
const zcList: (VarOption | VarOption[])[] = [
    computedUIOption('_zc', scripts['_zc'].name),
    ...scripts['_zc'].list.map(computedScriptOption),
]
const hdList: (VarOption | VarOption[])[] = [
    computedUIOption('_hd', scripts['_hd'].name),
    ...scripts['_hd'].list.map(computedScriptOption),
]
const qtList: (VarOption | VarOption[])[] = [
    computedUIOption('_qt', scripts['_qt'].name),
    ...scripts['_qt'].list.map(computedScriptOption),
]
const configList: (VarOption | VarOption[])[] = [
    computedUIOption('_cf', scripts['_cf'].name),
    ...scripts['_cf'].list.map(computedScriptOption),
]
const otherTabList: (VarOption | VarOption[])[] =
    scripts['_otherTab'].list.map(computedScriptOption)

qtList.splice(
    1,
    0,
    computedConfigOption({
        key: '天庭关卡',
        type: 'boolean',
        valueConfig: {
            varScope: 'script',
            value: false,
            __vars: {
                showInputHiddenView: {
                    varType: 'expression',
                    valueExp: "curTab !== 'mainTab'",
                },
            },
        },
    }),
    computedConfigOption({
        key: '关卡',
        type: 'stringArray',
        valueConfig: {
            stringItems: [
                '无',
                '神兽森林',
                '九重天',
                '天宫道',
                '天宫道1',
                '南天门',
                '南天王殿',
                '西天王殿',
                '南天王殿-精英',
                '西天王殿-精英',
                '北天王殿',
                '彩虹楼',
                '朝会殿',
                '凌霄宝殿',
                // '青龙秘境',  //bug
                '龙宫',
                '龙宫1',
                '玲珑塔-李天王',
                '玲珑塔-哪吒',
                '玲珑塔-雷震子',
                '玲珑塔-土行孙',
                '转轮殿-精英',
                '牛魔殿-精英',
                '御马监',
                '蟠桃园',
                '罗刹宫-惊鸿殿',
                '罗刹宫-月夜宫',
                '时空裂缝-涅槃',
                '时空裂缝终',
                '时空裂缝-锋刃',
                '时空裂缝-精英',
                '东天王殿',
            ],
            __vars: {
                showInputHiddenView: {
                    varType: 'expression',
                    valueExp: "curTab !== 'mainTab'",
                },
            },
        },
    })
)
// qtList.push({
//     name: 'content',
//     value: {
//         varType: 'string',
//         varScope: 'global',
//         mustInput: false,
//         showInput: true,
//         showInputContentAlign: 'left',
//         value: '上仙大气',
//         __vars: {
//             showInputHiddenView: {
//                 varType: 'expression',
//                 valueExp: "curTab !==  'fzTab'",
//             },
//         },
//     },
// })
const _configList = [
    computedConfigOption({
        key: 'lianmengPurchaseStrategy',
        label: '炼妖购买策略',
        type: 'stringArray',
        valueConfig: {
            stringItems: ['无', '二级丹', '启灵符'],
            value: '无',
            rememberInputValue: true,
        },
    }),
    computedConfigOption({
        key: 'kunlunStrategy',
        label: '昆仑山策略',
        type: 'stringArray',
        valueConfig: {
            value: '全自动',
            stringItems: ['半自动', '全自动'],
            rememberInputValue: true,
        },
    }),
    computedConfigOption({
        key: 'crushBlessing',
        label: '手动碾压祝福',
        type: 'boolean',
        valueConfig: {
            value: false,
        },
    }),
    computedConfigOption({
        key: 'blessIndex1',
        label: '天庭祝福',
        type: 'numberArray' as 'numberArray',
        valueConfig: {
            number: 0,
            selectItems: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
            ],
            showInputWidthBasis: '25%',
            // rememberInputValue: true,
        },
    }),
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
].flat()
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
            showInputLabel: '配置',
            mustInput: true,
            rememberInputValue: true,
            showInputWidthBasis: '70%',
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
                                    showInputLabel: '替代项',
                                    mustInput: true,
                                    rememberInputValue: true,
                                    showInputWidthBasis: 'auto',
                                    syncValueOnChange: true,
                                    __vars: {
                                        stringItems: {
                                            varType: 'expression',
                                            valueExp:
                                                "['手动输入', ...Object.keys(zdjl.getStorage('userConfigMap'))]",
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
                                        jsCode: 'console.warn(\'保存配置\')\r\nconst scriptVars = zdjl.getVars()\r\nconst globalVars = zdjl.getVars(\'global\')\r\nlet saveUserConfigName =        (zdjl.getVar(\'alternative\') === \'手动输入\'? zdjl.getVar(\'saveUserConfigName\') : zdjl.getVar(\'alternative\'))  || zdjl.getVar(\'saveUserConfigName\') || \'默认\'\r\nlet curUserConfig = {\r\n    scriptVars,\r\n    globalVars,\r\n}\r\nlet userConfigMap = zdjl.getStorage(\'userConfigMap\') || {}\r\nuserConfigMap[saveUserConfigName] = curUserConfig\r\n\r\nzdjl.setStorage(\'userConfigMap\', userConfigMap)\r\nzdjl.toast(`保存配置成功：${saveUserConfigName}`, 5000);\r\nzdjl.runAction({\r\n    "type": "控制执行",\r\n    "delay": "0",\r\n    "delayUnit": 1,\r\n    "controlRunType": "jumpTo",\r\n    "jumpToPosition": "-0",\r\n    "ContinueParentExecute": false\r\n})',
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
                                        jsCode: "(function () {\\n    let userConfigMap = zdjl.getStorage('userConfigMap') || {}\\n    let cn =\\n        (zdjl.getVar('alternative') === '手动输入'\\n            ? zdjl.getVar('saveUserConfigName')\\n            : zdjl.getVar('alternative')) ||\\n        zdjl.getVar('curUserConfigName') ||\\n        '默认'\\n    delete userConfigMap[cn]\\n\\n    zdjl.setStorage('userConfigMap', userConfigMap)\\n    console.log('warn-----', zdjl.getStorage('userConfigMap')[cn])\\n    zdjl.toast('删除配置成功：'+cn, 5000)\\n    zdjl.runAction({\\n        type: '控制执行',\\n        delay: '0',\\n        delayUnit: 1,\\n        controlRunType: 'jumpTo',\\n        jumpToPosition: '-0',\\n        ContinueParentExecute: false,\\n    })\\n})()\\n",
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
                        dialogOKText: 'none',
                        dialogCancelText: '确定',
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
