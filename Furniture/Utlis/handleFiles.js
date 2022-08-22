const multer = require('multer');
const fs = require("fs");
const path = require("path");

// 文件上传
function uploadFiles(options = {}) {
    // 1. 对参数option进行结构并设置默认值
    const { path = "./public/temp", key = "file", size = 1000 } = options;
    // 2. 设置multer的参数，配置diskStorage，来控制文件存储的位置以及文件名字等
    const storage = multer.diskStorage({
        // 2.1 确定图片存储的位置
        destination: function (req, file, cb) {
            // 当path所对应目录不存在，则自动创建该文件
            try {
                fs.accessSync(path);
            } catch (error) {
                fs.mkdirSync(toPath);
            }
            cb(null, path);
        },
        // 2.2 确定图片存储时的名字。(注意：如果使用原名，可能会造成再次上传同一张图片的时候的冲突)
        filename: function (req, file, cb) {
            var changedName = new Date().getTime() + '-' + file.originalname;
            cb(null, changedName);
        }
    });
    // 3. 配置图片限制
    const limits = {
        // 限制文件大小100kb
        fileSize: 1024 * size,
        // 限制文件数量
        files: 5
    };
    // 4. 生成的专门处理上传的一个工具，可以传入storage、limits 等配置
    const upload = multer({ storage, limits });
    // 5. 返回多文件上传的设置信息(同样可用于单文件上传)
    return upload.array(key);
}

// 复制文件
function copyFiles(options = {}) {
    // 对参数进行结构，并设置默认值
    const { fromPath = "./public/temp/", toPath = "./public/img/", filename } = options;
    let sourceFile = path.join(fromPath, filename);
    let destPath = path.join(toPath, filename);
    // 当toPath所对应目录不存在时，则自动创建该文件
    try {
        fs.accessSync(toPath);
    } catch (error) {
        fs.mkdirSync(toPath);
    }
    let readStream = fs.createReadStream(sourceFile);
    let writeStream = fs.createWriteStream(destPath);
    readStream.pipe(writeStream);
}

// 移动文件
function moveFiles(options = {}) {
    // 对参数进行结构，并设置默认值
    const { fromPath = './public/temp/', toPath = "./public/img/", filename } = options;
    var sourceFile = path.join(fromPath, filename);
    var destPath = path.join(toPath, filename);
    // 当 toPath 所对应的目录不存在时，则自动创建该文件
    try {
        fs.accessSync(toPath);
    } catch (error) {
        fs.mkdirSync(toPath);
    }
    fs.renameSync(sourceFile, destPath);
    return { path: destPath };
}


// 删除文件
function removeFiles(filePath = "./public/temp") {
    let stats = fs.statSync(filePath);
    //判断是否是文件
    if (stats.isFile()) {
        //删除文件
        fs.unlinkSync(filePath);
    } else if (stats.isDirectory()) {
        let filesArr = fs.readdirSync(filePath);
        filesArr.forEach(file => {
            removeFiles(path, resolve(filePath, file));
        })
        fs.rmdirSync(filePath);
    }
}

module.exports = { uploadFiles, copyFiles, moveFiles, removeFiles }