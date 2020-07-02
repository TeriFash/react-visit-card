let Deploy = require('ftp-deploy');
let ftpDeploy = new Deploy();

let config = {
    host : "jazz.cityhost.com.ua",
    user : "chterif9029",
    password : "82e7de80e9",
    port: 21,
    localRoot: __dirname,
    remoteRoot: '/www/terifash.pro/',
    include: ['images/**/*'],
    deleteRemote: false
}
ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err)
    else console.log('finished:', res);
});

ftpDeploy.on("uploading", function(data) {
    data.totalFilesCount;
    data.transferredFileCount;
    data.filename;
});
ftpDeploy.on("uploaded", function(data) {
    // console.log(data);

});
ftpDeploy.on("log", function(data) {
    // console.log(data);

});
ftpDeploy.on("upload-error", function(data) {
    console.log(data.err);
});
