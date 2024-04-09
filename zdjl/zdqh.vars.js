(function () {
    const scriptVars = [

        {
            "name": "_0",
            "value": {
                "varType": "ui_text",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "textContent": "日常：",
                "textSize": 13,
                "textColor": "#f2ff00"
            }
        },
        {
            "name": "日常活跃1000",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false,
                "__vars": {
                    "backgroundColor": {
                        "varType": "expression",
                        "varScope": "script",
                        "mustInput": true,
                        "valueExp": "    (function () {\r\n        let name = '日常活跃1000'\r\n        const today = `${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}${new Date().getDate().toString().padStart(2, '0')}`\r\n        const statistics = zdjl.getStorage('statistics')\r\n        if (statistics && statistics[today] && statistics[today][name]) {\r\n            if (statistics[today][name] === 1)\r\n                return zdjl.getVar('color_100')\r\n        }\r\n        return ''\r\n    })()"
                    },
                    "textAppendRight": {
                        "varType": "expression",
                        "valueExp": "(function () {\r\n        function getDateStr(date) {\r\n            return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`\r\n        }\r\n        let name = '日常活跃1000'\r\n        const today = getDateStr(new Date())\r\n        const yesterday = getDateStr(new Date(Date.now() - 24 * 60 * 60 * 1000))\r\n        const yeyesterday = getDateStr(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000))\r\n\r\n\r\n        const statistics = zdjl.getStorage('statistics')\r\n        if (statistics) {\r\n            if (statistics[today] && statistics[today][name]) {\r\n                return \"今天\"\r\n            }\r\n            if (statistics[yesterday] && statistics[yesterday][name]) {\r\n                return \"昨天\"\r\n            }\r\n            if (statistics[yeyesterday] && statistics[yeyesterday][name]) {\r\n                return \"前天\"\r\n            }\r\n        }\r\n        return ''\r\n    })()"
                    }
                }
            }
        },
        {
            "name": "日常爬山v2",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false,
                "__vars": {
                    "backgroundColor": {
                        "varType": "expression",
                        "valueExp": "    (function () {\r\n        let name = '日常爬山v2'\r\n        const today = `${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}${new Date().getDate().toString().padStart(2, '0')}`\r\n        const statistics = zdjl.getStorage('statistics')\r\n        if (statistics && statistics[today] && statistics[today][name]) {\r\n            if (statistics[today][name] === 1)\r\n                return zdjl.getVar('color_100')\r\n        }\r\n        return ''\r\n    })()"
                    }
                }
            }
        },
        {
            "name": "炼狱黄泉路",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false,
                "__vars": {
                    "backgroundColor": {
                        "varType": "expression",
                        "valueExp": "    (function () {\r\n        let name = '炼狱黄泉路'\r\n        const today = `${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}${new Date().getDate().toString().padStart(2, '0')}`\r\n        const statistics = zdjl.getStorage('statistics')\r\n        if (statistics && statistics[today] && statistics[today][name]) {\r\n            if (statistics[today][name] === 1)\r\n                return zdjl.getVar('color_100')\r\n        }\r\n        return ''\r\n    })()"
                    }
                }
            }
        },
        {
            "name": "导航云游",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false,
                "__vars": {
                    "backgroundColor": {
                        "varType": "expression",
                        "valueExp": "    (function () {\r\n        let name = '导航云游'\r\n        const today = `${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}${new Date().getDate().toString().padStart(2, '0')}`\r\n        const statistics = zdjl.getStorage('statistics')\r\n        if (statistics && statistics[today] && statistics[today][name]) {\r\n            if (statistics[today][name] === 1)\r\n                return zdjl.getVar('color_100')\r\n        }\r\n        return ''\r\n    })()"
                    }
                }
            }
        },
        {
            "name": "极北自动扫荡",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false,
                "__vars": {
                    "backgroundColor": {
                        "varType": "expression",
                        "valueExp": "(function () {\r\n    let name = '极北自动扫荡'\r\n    const today = `${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}${new Date().getDate().toString().padStart(2, '0')}`\r\n    const statistics = zdjl.getStorage('statistics')\r\n    if (statistics && statistics[today] && statistics[today][name]) {\r\n        if (statistics[today][name] === 1)\r\n            return zdjl.getVar('color_50')\r\n        if (statistics[today][name] === 2)\r\n            return zdjl.getVar('color_100')\r\n    }\r\n    return ''\r\n})()"
                    }
                }
            }
        },
        {
            "name": "_rc2",
            "value": {
                "varType": "ui_text",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "textContent": "选做日常：",
                "textSize": 13,
                "textColor": "#f2ff00"
            }
        },
        {
            "name": "联盟炼妖挂机",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false,
                "__vars": {
                    "textAppendRight": {
                        "varType": "expression",
                        "varScope": "script",
                        "mustInput": true,
                        "valueExp": "(function () {\r\n        function getDateStr(date) {\r\n            return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`\r\n        }\r\n        let name = '联盟炼妖挂机'\r\n        const today = getDateStr(new Date())\r\n        const yesterday = getDateStr(new Date(Date.now() - 24 * 60 * 60 * 1000))\r\n        const yeyesterday = getDateStr(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000))\r\n\r\n\r\n        const statistics = zdjl.getStorage('statistics')\r\n        if (statistics) {\r\n            if (statistics[today] && statistics[today][name]) {\r\n                return \"今天\"\r\n            }\r\n            if (statistics[yesterday] && statistics[yesterday][name]) {\r\n                return \"昨天\"\r\n            }\r\n            if (statistics[yeyesterday] && statistics[yeyesterday][name]) {\r\n                return \"前天\"\r\n            }\r\n        }\r\n        return ''\r\n    })()"
                    }
                }
            }
        },
        {
            "name": "仙迹扫荡",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false
            }
        },
        {
            "name": "_zc",
            "value": {
                "varType": "ui_text",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "textContent": "周常：",
                "textSize": 13,
                "textColor": "#f2ff00"
            }
        },
        {
            "name": "每周竞技",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false
            }
        },
        {
            "name": "周登入",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false
            }
        },
        {
            "name": "_qt",
            "value": {
                "varType": "ui_text",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "textContent": "其他：",
                "textSize": 13,
                "textColor": "#f2ff00"
            }
        },
        {
            "name": "天庭关卡",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "syncValueOnChange": true,
                "value": false
            }
        },
        {
            "name": "关卡",
            "value": {
                "varType": "string",
                "varScope": "global",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "syncValueOnChange": true,
                "value": "",
                "__vars": {
                    "stringItems": {
                        "varType": "expression",
                        "varScope": "script",
                        "mustInput": true,
                        "valueExp": "[ \"神兽森林\", \"九重天\", \"天宫道\", \"南天门\", \"南天王殿\", \"西天王殿\", \"北天王殿\", \"彩虹楼\", \"朝会殿\", \"凌霄宝殿\",\"青龙秘境\",\"龙宫\"]\n"
                    }
                }
            }
        },
        {
            "name": "联盟悬赏辅助v2",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false
            }
        },
        {
            "name": "龙虎领取",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false
            }
        },
        {
            "name": "活跃兑换",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false
            }
        },
        {
            "name": "荣耀",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "mustInput": true,
                "showInputWidthBasis": "50%",
                "showInputContentAlign": "left",
                "value": false
            }
        },
        {
            "name": "content",
            "value": {
                "varType": "string",
                "varScope": "global",
                "mustInput": false,
                "showInputContentAlign": "left",
                "value": "上仙大气"
            }
        }
    ]

    const baseVars = [
        {
            "name": "startSlot",
            "value": {
                "varType": "number",
                "varScope": "script",
                "showInput": true,
                "showInputLabel": "开始槽位",
                "mustInput": true,
                "showInputWidthBasis": "25%",
                "showInputContentAlign": "left",
                "syncValueOnChange": true,
                "number": 1,
                "selectItems": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8
                ]
            }
        },
        {
            "name": "stopSlot",
            "value": {
                "varType": "number",
                "varScope": "script",
                "showInput": true,
                "showInputLabel": "结束槽位",
                "mustInput": true,
                "showInputWidthBasis": "25%",
                "showInputContentAlign": "left",
                "syncValueOnChange": true,
                "number": 8,
                "selectItems": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8
                ]
            }
        },
        {
            "name": "noti",
            "value": {
                "varType": "string",
                "varScope": "script",
                "showInput": true,
                "showInputLabel": "提示",
                "mustInput": true,
                "rememberInputValue": true,
                "showInputWidthBasis": "25%",
                "showInputContentAlign": "left",
                "value": "通知声",
                "stringItems": [
                    "无",
                    "电话声",
                    "通知声",
                    "闹铃声"
                ]
            }
        },
        {
            "name": "vibrator",
            "value": {
                "varType": "bool",
                "varScope": "script",
                "showInput": true,
                "showInputLabel": "震动",
                "mustInput": true,
                "rememberInputValue": true,
                "showInputWidthBasis": "25%",
                "showInputContentAlign": "left",
                "value": true
            }
        },
    ]

    const actionOption = {
        "type": "设置变量",
        "delay": "0",
        "delayUnit": 1,
        "vars": [...baseVars, ...scriptVars]
    }
    zdjl.runAction(actionOption)
})()
