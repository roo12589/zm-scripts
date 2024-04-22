module.exports = {
    greetingPrefix: 'Hello',
    main() {
        // auto();
        threads.start(() => {
            let i = 0;
            while (i < 3) {
                toastLog('查找截图立即开始按钮...' + i);
                if (text('立即开始').findOnce()) {
                    text('立即开始').findOnce().click();
                }
                i++;
                sleep(1000);
            }
        });
        if (!requestScreenCapture()) {
            toast("请求截图失败");
            exit();
        }
        console.log("device", device.width, device.height);
        this.test();
        this.setFloaty();

        let ui = require('./ui');
        console.log("ui", ui);


    },
    setFloaty() {
        var w = floaty.window(
            <frame gravity="center">
                <text id="text">悬浮文字</text>
            </frame>
        );
        setTimeout(() => {
            w.close();
        }, 2000);

    },

    test() {
        const image = captureScreen();
        console.log("image", image);
        images.save(image, '/sdcard/脚本/截图.jpg');
        let clip = images.clip(image, 0, 0, image.width / 2, image.height / 2);
        images.save(clip, '/sdcard/脚本/clip.jpg');
        const f = findImage(image, clip);
        console.log("f", f);
    }
};