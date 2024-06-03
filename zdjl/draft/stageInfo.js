(function () {

    const stageList =
        [
            {
                name: "神兽森林",
                img: "img神兽森林",
                slideDirection: false,
                stageIndex: 1,
                slideTimes: 1
            },
            {
                name: "九重天",
                img: "img九重天",
                slideDirection: false,
                stageIndex: 1,
                slideTimes: 1
            },
            {
                name: "天宫道",
                img: "img天宫道",
                slideDirection: false,
                stageIndex: 1,
                slideTimes: 1
            },
            {
                name: "南天门",
                img: "img南天门",
                slideDirection: false,
                stageIndex: 1,
                slideTimes: 1
            },
            {
                name: "南天王殿",
                img: "img南天王殿",
                slideDirection: "up",
                stageIndex: 2,
                slideTimes: 1
            },
            {
                name: "西天王殿",
                img: "img西天王殿",
                slideDirection: "up",
                stageIndex: 2,
                slideTimes: 1
            },
            {
                name: "南天王殿-精英",
                img: "img南天王殿",
                slideDirection: "up",
                stageIndex: 1,
                slideTimes: 1
            },
            {
                name: "西天王殿-精英",
                img: "img西天王殿",
                slideDirection: "up",
                stageIndex: 1,
                slideTimes: 1
            },
            {
                name: "北天王殿",
                img: "img北天王殿",
                slideDirection: "up",
                stageIndex: 1,
                slideTimes: 1
            },
            {
                name: "彩虹楼",
                img: "img彩虹楼",
                slideDirection: "up",
                stageIndex: 2,
                slideTimes: 1
            },
            {
                name: "朝会殿",
                img: "img朝会殿",
                slideDirection: "up",
                stageIndex: 1,
                slideTimes: 2
            },
            {
                name: "凌霄宝殿",
                img: "img凌霄宝殿",
                slideDirection: "up",
                stageIndex: 1,
                slideTimes: 2
            },
            {
                name: "青龙秘境",
                img: "img青龙秘境",
                slideDirection: "down",
                stageIndex: 3,
                slideTimes: 2
            },
            {
                name: "龙宫",
                img: "img龙宫",
                slideDirection: "down",
                stageIndex: 1,
                slideTimes: 4
            },
            {
                name: "玲珑塔-李天王",
                img: "img玲珑塔",
                slideDirection: "down",
                stageIndex: 1,
                slideTimes: 1
            },
            {
                name: "玲珑塔-哪吒",
                img: "img玲珑塔",
                slideDirection: "down",
                stageIndex: 2,
                slideTimes: 1
            },
            {
                name: "玲珑塔-雷震子",
                img: "img玲珑塔",
                slideDirection: "down",
                stageIndex: 4,
                slideTimes: 1
            },
            {
                name: "玲珑塔-土行孙",
                img: "img玲珑塔",
                slideDirection: "down",
                stageNextPage: true,
                stageIndex: 3,
                slideTimes: 1
            },
            {
                name: "转轮殿-精英",
                img: "img混沌之门",
                slideDirection: "down",
                stageIndex: 0,
                slideTimes: 2,
                type: 'special',
                position: '66.8% 58.5%'
            },
            {
                name: "牛魔殿-精英",
                img: "img混沌之门",
                slideDirection: "down",
                stageIndex: 0,
                slideTimes: 2,
                type: 'special',
                position: '66.8% 84.5%'
            },
            {
                name: "御马监",
                img: "img北天王殿",
                slideDirection: "up",
                stageIndex: 3,
                slideTimes: 1
            },
            {
                name: "蟠桃园",
                img: "img天宫道",
                slideDirection: false,
                stageIndex: 2,
                slideTimes: 1
            },
            {
                name: "罗刹宫-惊鸿殿",
                img: "img罗刹宫殿",
                slideDirection: "down",
                stageIndex: 1,
                slideTimes: 3
            },
            {
                name: "罗刹宫-月夜宫",
                img: "img罗刹宫殿",
                slideDirection: "down",
                stageIndex: 2,
                slideTimes: 3
            },
        ];

    console.log("stageList", stageList.map(s => s.name));
    return stageList;
})();