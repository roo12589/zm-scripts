// lianmengTask
;(function () {
    interface Material {
        name: string
        keyword: string
        order: number
        achievable: boolean
    }
    const materials = [
        {
            name: '本命命火',
            keyword: '命火',
            order: 100,
            achievable: true,
        },
        {
            name: '元灵精魄',
            keyword: '元灵',
            order: 10,
            achievable: true,
        },
        {
            name: '法灵精魄',
            keyword: '法灵',
            order: -1,
            achievable: true,
        },
        {
            name: '仙灵精魄',
            keyword: '仙灵',
            order: -1,
            achievable: true,
        },
        {
            name: '地宫探索',
            keyword: '地宫',
            order: 1,
            achievable: false,
        },
        {
            name: '巡逻周边',
            keyword: '周边',
            order: 1,
            achievable: false,
        },
        {
            name: '盟发齐心',
            keyword: '齐心',
            order: 1,
            achievable: false,
        },
        {
            name: '我来巡山',
            keyword: '巡山',
            order: 1,
            achievable: false,
        },
        {
            name: '聚元玄晶',
            keyword: '玄晶',
            order: 100,
            achievable: true,
        },
        {
            name: '仙髓',
            keyword: '仙髓',
            order: 1,
            achievable: true,
        },
        {
            name: '龙泪精华',
            keyword: '龙泪',
            order: 1,
            achievable: true,
        },
        {
            name: '扫荡券',
            keyword: '扫荡',
            order: 10,
            achievable: true,
        },
        {
            name: '强化入门',
            keyword: '强化',
            order: -1,
            achievable: false,
        },
    ]

    const task1 = zdjl.recognitionScreen({
        recognitionArea: '29.7% 28% 41% 62.3%',
        recognitionMode: 'ocr_local',
        ocrResultType: 'raw',
        humanRecMaxPositionCount: 1,
    })
    const task2 = zdjl.recognitionScreen({
        recognitionArea: '47.8% 28.6% 58.7% 61.7%',
        recognitionMode: 'ocr_local',
        ocrResultType: 'raw',
        humanRecMaxPositionCount: 1,
    })

    const task3 = zdjl.recognitionScreen({
        recognitionArea: '64.9% 27.8% 76% 62.7%',
        recognitionMode: 'ocr_local',
        ocrResultType: 'raw',
        humanRecMaxPositionCount: 1,
    })
    /*     zdjl.runAction({
        type: '滑动',
        duration: '218',
        delayUnit: 1,
        startPos: {
            type: 'location',
            x: '63.9%',
            y: '51.8%',
        },
        endPos: {
            type: 'location',
            x: '32%',
            y: '55.2%',
        },
    })
    const task4 = zdjl.recognitionScreen({
        recognitionArea: '60.5% 27.9% 71.6% 62.8%',
        recognitionMode: 'ocr_local',
        ocrResultType: 'raw',
        humanRecMaxPositionCount: 1,
    })
 */
    let tasks = [
        {
            index:1,
            originData: task1,
        },
        {
            index:2,
            originData: task2,
        },
        {
            index:3,
            originData: task3,
        },
        /* , task4 */
        ,
    ] as {
        originData: OCROriginData[]
        material?: Material
        reward?: number
        index:number
    }[]
    tasks.forEach((task, index) => {
        for (let data of task.originData) {
            if (!task.material)
                task.material =
                    materials.find((t) => data.text.includes(t.keyword)) ||
                    task.material
            let matched = /\d{3,}/.exec(data.text)
            if (matched) {
                console.log('matched', matched)
                task.reward = parseInt(matched[0])
            }
        }
    })
    console.log('tasks', tasks)
    const filteredTasks = tasks
        .filter((t) => t.material?.achievable)
        .sort((a, b) => b.material!.order - a.material!.order)
    console.log('filteredTasks', filteredTasks)
    const textPosition = filteredTasks[0]?.originData.find(
        (t) => t.text === '提交'
    )
    const taskIndex = filteredTasks[0].index
    zdjl.setVar('taskIndex',taskIndex)
    if (textPosition) {
        zdjl.setVar('textPosition', textPosition.left + ',' + textPosition.top)
    } else {
        zdjl.getVar('notiOnFail', 'global') &&
            zdjl.runAction({
                type: '系统提示',
                promptTitle: '未找到可提交任务',
                promptType: 'alert',
                showDuration: 3000,
                useVibrator: true,
            })
    }
})()
