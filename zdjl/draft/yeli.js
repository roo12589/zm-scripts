const laiyuanPosition = zdjl.findLocation({
    "type": "text",
    "text": "来源"
}, false);

const areaStr = `0% 0% ${laiyuanPosition.x_100}% ${laiyuanPosition.y_100}%`;
const text = zdjl.recognitionScreen({ recognitionMode: 'ocr_local', recognitionArea: areaStr });

console.log("laiyuanPosition", laiyuanPosition);
console.log("text", text);
let i = zdjl.getVar('i');
/* 
1 att 子
2 def 丑
3 hp 寅
4 att def 卯
5 hp def 辰
6 hp att 巳
*/
const eq = {
    position: undefined,
    attrs: {},
    rate: 0,
    rate2: 0
};

const eqMax = {
    子: {
        att: 240
    },
    丑: {
        def: 90
    },
    寅: {
        hp: 2100
    },
    卯: {
        att: 160,
        def: 75
    },
    辰: {
        hp: 1225,
        def: 67
    },
    巳: {
        hp: 1260,
        att: 140
    }
};

const nums = text.match(/\d+/g);

console.log("",);

if (eq.att && eq.def) {
    eq.type = '卯';
}
if (eq.hp && eq.def) {
    eq.type = '辰';
}
if (eq.hp && eq.att) {
    eq.type = '巳';
}
if (eq.att) {
    eq.type = '子';
}
if (eq.def) {
    eq.type = '丑';
}
if (eq.hp) {
    eq.type = '寅';
}

Object.keys(eq.attrs).forEach(attr => {
    console.log("eq[attr]", eq.attrs[attr]);
    if (!eq.rate) {
        eq.rate = eq.attrs[attr] / eqMax[attr];
    } else {
        eq.rate2 = eq.attrs[attr] / eqMax[attr];

    }
}
);



const notiText = `位置:${eq.position} 比率:${eq.rate} ${eq.rate2 || ''}`;

console.log(notiText);
all.push(notiText);
let targetRate = zdjl.getVar('targetRate') || 0.8;
const condition = eq.rate > targetRate && (eq.rate2 === 0 || eq.rate2 > targetRate);
if (condition) {
    filtered.push(notiText);
    zdjl.getVar('singleNoti') && zdjl.runAction({
        "type": "系统提示",
        "delay": "0",
        "delayUnit": 1,
        "promptType": "alert",
        "promptTitle": "",
        "showPosition": "default",
        "playAudio": "alarm",
        "useVibrator": true,
        "showDuration": 2000,
        "actions": [
            {
                "name": "确定(点击等待观察5s)",
                "script": {
                    "type": "设置变量",
                    "delay": "5",
                    "delayUnit": 1,
                    "vars": [
                        {
                            "name": "_a",
                            "value": {
                                "varType": "string",
                                "varScope": "script",
                                "showInputInObjectSubVar": false,
                                "mustInput": true,
                                "showInputContentAlign": "left",
                                "value": "a"
                            }
                        }
                    ]
                }
            }
        ],
        "__vars": {
            "promptText": {
                "varType": "expression",
                "varScope": "script",
                "mustInput": true,
                "valueExp": " notiText"
            }
        }
    });
}
//   console.log(curEqs)
// console.log(word)
