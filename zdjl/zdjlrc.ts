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
            { name: '云游', gap: 1, order: 1000 },
            { name: '极光天照', gap: 1, order: -100 },
            { name: '战力碾压', gap: 1, order: 0 },
        ],
    },
    _rc2: {
        name: '选做日常：',
        list: [
            { name: '联盟炼妖挂机', gap: 2, order: -1 },
            { name: '仙迹扫荡', gap: 3, order: 0 },
            { name: '战令', gap: 0.5, order: 1000 },
            { name: '极北自动扫荡', gap: 0.5, order: -10 },
            { name: '妖兽', gap: 0, order: 1000 },
            { name: '天选阁', gap: 0, order: 0 },
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
    _hd: {
        name: '活动：',
        list: [
            //  '龙虎领取',
            { name: '活跃兑换', gap: 1, order: 100 },
            { name: '灵能', gap: 0.5, order: 1000 },
            { name: '活动合集', gap: 1, order: 100 },
            { name: '邪羊副本', gap: 1, order: 1 },
        ],
    },
    _qt: {
        name: '其他：',
        list: ['联盟悬赏辅助v2', '辅助进图'].map((name) => ({
            name: name,
            gap: 0,
        })),
    },
    _td: {
        name: '配置及待做：',
        list: ['周悬赏任务'].map((name) => ({
            name: name,
            gap: 0,
        })),
    },
}

const scriptOrderMap = {}
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
const computedUIOption = (key: string, name: string) => ({
    name: key,
    value: {
        varType: 'ui_text',
        varScope: 'script',
        showInput: true,
        mustInput: true,
        textContent: name,
        textSize: 13,
        textColor: '#f2ff00',
    },
})
//@ts-ignore
const computedScriptOption = (sc: Script) => ({
    name: sc.name,
    value: {
        varType: 'bool',
        varScope: 'script',
        showInput: true,
        mustInput: true,
        showInputWidthBasis: '50%',
        showInputContentAlign: 'left',
        value: false,
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
        },
    },
})

const rcList = [
    computedUIOption('_rc', scripts['_rc'].name),
    ...scripts['_rc'].list.map(computedScriptOption),
]
const rc2List = [
    computedUIOption('_rc2', scripts['_rc2'].name),
    ...scripts['_rc2'].list.map(computedScriptOption),
]
const zcList = [
    computedUIOption('_zc', scripts['_zc'].name),
    ...scripts['_zc'].list.map(computedScriptOption),
]
const hdList = [
    computedUIOption('_hd', scripts['_hd'].name),
    ...scripts['_hd'].list.map(computedScriptOption),
]
const qtList: any[] = [
    computedUIOption('_qt', scripts['_qt'].name),
    ...scripts['_qt'].list.map(computedScriptOption),
]
const tdList: any[] = [
    computedUIOption('_td', scripts['_td'].name),
    ...scripts['_td'].list.map(computedScriptOption),
]

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
                stringItems: {
                    varType: 'expression',
                    varScope: 'script',
                    mustInput: true,
                    valueExp:
                        '[ "神兽森林", "九重天-未完成", "天宫道", "南天门", "南天王殿", "西天王殿",  "南天王殿-精英", "西天王殿-精英", "北天王殿", "彩虹楼", "朝会殿", "凌霄宝殿","青龙秘境","龙宫","玲珑塔-李天王","玲珑塔-哪吒","玲珑塔-雷震子",]\n',
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
        showInputContentAlign: 'left',
        value: '上仙大气',
    },
})
tdList.push(
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
            string: '二级丹',
            stringItems: ['二级丹', '启灵符'],
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
    }
)

const scriptVars = [
    ...rcList,
    ...rc2List,
    ...zcList,
    ...hdList,
    ...qtList,
    ...tdList,
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
]

const actionOption = {
    type: '设置变量',
    delay: '0',
    delayUnit: 1,
    vars: [...baseVars, ...scriptVars],
}
// @ts-ignore
await zdjl.runActionAsync(actionOption)
