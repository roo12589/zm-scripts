const all = zdjl.getVars()
console.log(all)
const filteredArr = []
Object.keys(all).forEach(k => {
    // 过滤中文且值为true
    if (/[\u4e00-\u9fa5]+/.test(k) && all[k]) {
        filteredArr.push(k)
    }
})

zdjl.setVar('scripts', filteredArr)
let si = 0
zdjl.setVar('si', si)

// 取
// const scripts = zdjl.getVar('scripts')
// const si = zdjl.getVar('si')
run`${scripts[si]}.zjs`
    // 提示
    `${si}/${scripts.length}`
    `已完成${scripts.slice(0, si + 1).join(',')}`
    `未完成${scripts.slice(si + 1).join(',')}`

    (function () {
        const scripts = zdjl.getVar('scripts')
        const si = zdjl.getVar('si')
        const proText = `${si + 1}/${scripts.length}`
        const finText = ` 已完成${scripts.slice(0, si + 1).join(',')}`
        const unfText = ` 未完成${scripts.slice(si + 1).join(',')}`
        return si + 1 < scripts.length ? `${proText}${finText}${unfText}` : `${proText}全部完成 ${finText}`
    })()

    (function () {
        const scripts = zdjl.getVar('scripts')
        const today = `${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}${new Date().getDate().toString().padStart(2, '0')}`
        const statistics = zdjl.getStorage('statistics') || {}
        statistics[today] = statistics[today] || {}
        for (let i = 0; i < scripts.length; i++) {
            const script = scripts[i]
            if (!statistics[today][script]) statistics[today][script] = 0
            statistics[today][script]++
        }
        zdjl.setStorage('statistics', statistics)
    })()
    // 额外文本 右
    (function () {
        function getDateStr(date) {
            return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`
        }
        let name = '日常活跃1000'
        const today = getDateStr(new Date())
        const yesterday = getDateStr(new Date(Date.now() - 24 * 60 * 60 * 1000))
        const yeyesterday = getDateStr(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000))


        const statistics = zdjl.getStorage('statistics')
        if (statistics) {
            if (statistics[today] && statistics[today][name]) {
                return "今天"
            }
            if (statistics[yesterday] && statistics[yesterday][name]) {
                return "昨天"
            }
            if (statistics[yeyesterday] && statistics[yeyesterday][name]) {
                return "前天"
            }
        }
        return ''
    })()
    // 声音map
    (function () {
        let mapObj = {
            '通知声': 'true',
            '闹铃声': 'alarm',
            '电话声': 'ringer',
            '无': false,
        }
        return mapObj[zdjl.getVar('noti')]
    })()


for (let i in 10) {
    console.log("i", i);
}