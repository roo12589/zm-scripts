const weaponWords = [
    '断筋', '碎甲',
    '冲撞', '狂暴',
    '穿刺', '穿杨',
    '割裂', '振奋',
    '沉舟', '怒爆',
    '魔战'
];
const armorWords = [
    '春芒', '回春',
    '金刚', '春晖',
    '不灭', '回天',
    '脱兔', '背水',
    '顿悟', '免死',
    '残照', '骨脉'
];
const ornamentWords = [
    '固本', '复仇', '破魔',
    '凝神', '磐石', '欺凌',
    '连击', '金身', '血爆',
    '护体', '聚集', '膨胀',
    '自在', '霸体', '镇压',
    '自爆', '碾碎', '余力',
    '血怒', '太极', '斗转',
    '重劲'
];
const commonWords = [
    '重伤',
    '溅射',
    '噬返',
    '明神',
    '混元',
    '如梭'
];

const computedReg = (arr) => new RegExp(arr.join('|'), 'g');

function chineseToNumber(chineseNumber) {
    // 定义中文数字与阿拉伯数字的映射关系
    const numberMap = {
        '品一': 1,
        '品二': 2,
        '品三': 3,
        '品四': 4,
        '品五': 5,
        '品六': 6,
        '品七': 7,
        '品八': 8,
        '品九': 9,
        '品十': 10,
        '十一': 11,
        '十二': 12,
        '十三': 13,
        '十四': 14,
        '十五': 15,
        '十六': 16,
        '十七': 17,
        '十八': 18,
        '十九': 19,
        '二十': 20
    };

    // 检查输入是否在映射关系中，如果是则返回对应的阿拉伯数字，否则返回 null
    return numberMap[chineseNumber] || null;
}
 

const jieReg = /([\u4e00-\u9fa5]{2})阶/;

const _jie = text.match(jieReg)[1];
const jie = chineseToNumber(_jie);


const words = text.match(computedReg([...weaponWords, ...armorWords, ...ornamentWords, ...commonWords]));

console.log(words, jie);