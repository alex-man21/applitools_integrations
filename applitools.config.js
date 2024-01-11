module.exports = {
    showLogs: true,
    testConcurrency: 10,
    apiKey: process.env.APPLITOOLS_API_KEY,
    browser: [
        { width: 1280, height: 1024, name: 'ie11' },
        { width: 1280, height: 1024, name: 'chrome' },
        { width: 1280, height: 1024, name: 'firefox' },
        // Add mobile emulation devices in Portrait mode
        { deviceName: 'iPhone X',   screenOrientatin: 'portrait'    },
        { deviceName: 'iPad',       screenOrientation: 'landscape'  },
        { deviceName: 'Pixel 2',    screenOrientation: 'landscape'  }
    ],
    puppeteerOptions: {
        args: 
            ['--no-sandbox'] // this is needed for Gitlab / Docker
    }
}