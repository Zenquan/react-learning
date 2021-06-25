const shelljs = require('shelljs')

async function __main__() {
    try {
        console.log('上传到github')
        shelljs.exec(`
            git add .
            git commit -m ${process.argv[2]} 
            git push origin mySaga 
        `)

    } catch (err) {
        console.log('提交失败')
        console.error(err)
    }
}

__main__()