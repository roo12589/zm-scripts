;(function () {
    let userConfigMap: UserConfigMapObj = zdjl.getStorage('userConfigMap') || {}
    let curConfigName = zdjl.getVar('curConfigName') || '默认'
    console.log("get---userConfigMap",userConfigMap);
    let curConfigScriptVars = userConfigMap[curConfigName].scriptVars
    let curConfigGlobalVars = userConfigMap[curConfigName].globalVars

    for (let key of Object.keys(curConfigGlobalVars)) {
        if (curConfigGlobalVars.hasOwnProperty(key) && !key.startsWith('__')) {
            zdjl.setVar(key, curConfigGlobalVars[key], 'global')
        }
    }
    for (let key of Object.keys(curConfigScriptVars)) {
        if (curConfigScriptVars.hasOwnProperty(key) && !key.startsWith('__')) {
            zdjl.setVar(key, curConfigScriptVars[key])
        }
    }

})()
;(function () {
    const scriptVars = zdjl.getVars()
    const globalVars = zdjl.getVars('global')
    let saveUserConfigName = zdjl.getVar('saveUserConfigName') || '默认'
    let curUserConfig = {
        scriptVars,
        globalVars,
    }
    let userConfigMap: UserConfigMapObj = zdjl.getStorage('userConfigMap') || {}
    userConfigMap[saveUserConfigName] = curUserConfig
    console.log("set---userConfigMap",userConfigMap);
    zdjl.setStorage('userConfigMap', userConfigMap)
})()
