const all = zdjl.getVars();
console.log(all);
const filteredArr = [];
Object.keys(all).forEach(k => {
    // 过滤中文且值为true
    if (/[\u4e00-\u9fa5]+/.test(k) && all[k]) {
        filteredArr.push(k);
    }
})

    /* zdjl.setVar('scripts', filteredArr)
    let si = 0
    zdjl.setVar('si', si) */

    // 取
    // const scripts = zdjl.getVar('scripts')
    // const si = zdjl.getVar('si')
    /* run`${scripts[si]}.zjs`
        // 提示
        `${si}/${scripts.length}`
        `已完成${scripts.slice(0, si + 1).join(',')}`
        `未完成${scripts.slice(si + 1).join(',')}`
     */
    (function () {
        const scripts = zdjl.getVar('scripts');
        const si = zdjl.getVar('si');
        const proText = `${si + 1}/${scripts.length}`;
        const finText = ` 已完成${scripts.slice(0, si + 1).join(',')}`;
        const unfText = ` 未完成${scripts.slice(si + 1).join(',')}`;
        return si + 1 < scripts.length ? `${proText}${finText}${unfText}` : `${proText}全部完成 ${finText}`;
    })()

    (function () {
        const scripts = zdjl.getVar('scripts');
        const now = new Date(new Date() - 5 * 60 * 60 * 1000);
        const today = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}`;
        const statistics = zdjl.getStorage('statistics_2') || {};
        for (let i = 0; i < scripts.length; i++) {
            const script = scripts[i];
            statistics[script] = statistics[script] || {};
            if (!statistics[script][today]) statistics[script][today] = 0;
            statistics[script][today]++;
        }
        zdjl.setStorage('statistics_2', statistics);
    })()
    // #0dceda #6ef3d6 #c6fce5 #ebfffa

    // 额外文本 右r
    // textAppendRight.js
    // 声音map
    (function () {
        let mapObj = {
            '通知声': 'true',
            '闹铃声': 'alarm',
            '电话声': 'ringer',
            '无': false,
        };
        return mapObj[zdjl.getVar('noti')];
    })();


for (let i in 10) {
    console.log("i", i);
}

(function(){
   const scriptOrderMap =  zdjl.getStorage('scriptOrderMap')
   filteredArr.sort((a, b) => {
       return scriptOrderMap[b] - scriptOrderMap[a]
   })

})()