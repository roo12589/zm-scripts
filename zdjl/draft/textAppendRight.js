(function () {
    function getCurrentMonday() {
        const d = new Date();
        const date = d.getDate();
        const day = d.getDay() === 0 ? 7 : d.getDay();
        const targetMonday = new Date();
        targetMonday.setDate(date - day + 1);
        targetMonday.setHours(0, 0, 0, 0);
        return targetMonday;
    }

    let name = '"+sc.name+"';
    let gap = "+sc.gap+";
    const statistics = zdjl.getStorage('statistics_2');
    if (statistics && statistics[name]) {
        const scriptStatistic = Object.keys(statistics[name]).sort();
        let lastTime = scriptStatistic[scriptStatistic.length - 1];
        if (!lastTime) return '';
        let lastTimeStr = `${lastTime.slice(0, 4)}-${lastTime.slice(4, 6)}-${lastTime.slice(6, 8)}`;
        // zdjl引擎不兼容 new Date 2023-02-02 00:00:00格式字符串
        const lastDate = new Date(lastTimeStr);
        lastDate.setHours(0, 0, 0, 0);
        const now = new Date();
        console.log('scriptStatistic', scriptStatistic); console.log('lastTime', lastTime); console.log('lastDate', lastDate);
        const differ = new Date(now.getFullYear(), now.getMonth(), now.getDate()) - lastDate.getTime();
        let color = '#ffffff';
        let text;
        // 0-5am fix 
        if(new Date().getHours() < 6){differ = differ + 24 * 60 * 60 * 1000}
        if (differ < 24 * 60 * 60 * 1000) {
            text = '今天';

        } else if (differ < 2 * 24 * 60 * 60 * 1000) {
            text = '昨天';
        } else if (differ < 3 * 24 * 60 * 60 * 1000) {
            text = '前天';
        } else {
            text = differ / (24 * 60 * 60 * 1000) + '天前';
        }
        console.log(scriptStatistic, gap, gap * 24 * 60 * 60 * 1000, differ);
        if (gap && gap < 1) {
            // 非当天不改变文本 默认置灰
            color = zdjl.getVar('color_0');
            if (differ < 24 * 60 * 60 * 1000) {
                // 当天运行次数
                let targetTime = Math.floor(1 / gap);
                let currentTime = statistics[name][lastTime] || 0;
                text = `${currentTime}/${targetTime}次`;
                if (currentTime >= targetTime) {
                    color = zdjl.getVar('color_100');
                }
            }
        }
        if (gap && gap >= 1) {

            if (differ < gap * 24 * 60 * 60 * 1000) {
                color = zdjl.getVar('color_100');
            } else {
                color = zdjl.getVar('color_0');
            }

            if (gap === 7) {
                const Monday = getCurrentMonday();
                if (lastDate >= Monday) {
                    text = '完成'; color = zdjl.getVar('color_100');
                } else {
                    color = zdjl.getVar('color_0');

                }

            }
        }

        return `#MD<font color=${color}> ${text} </font> `;
    }
    return '';
})()