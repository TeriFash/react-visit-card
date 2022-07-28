// eslint-disable prettier/prettier

const path = require('path');
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const {
  FTP_HOST_PROVIDER,
  FTP_HOST_NAME, 
  FTP_USER, 
  FTP_PASSWORD, 
  FTP_PORT,
  FTP_DEPLOY_LOCAL_ROOT, 
  FTP_DEPLOY_REMOTE_ROOT
} = process.env;

const HOST_NAME = `${FTP_HOST_NAME}.${FTP_HOST_PROVIDER}`

const config = {
  host: HOST_NAME,
  user: FTP_USER,
  password: FTP_PASSWORD,
  port: FTP_PORT,
  localRoot:  path.join(__dirname, FTP_DEPLOY_LOCAL_ROOT),
  remoteRoot: FTP_DEPLOY_REMOTE_ROOT,
  include: ['*', '**/*'], // include: ["*", "**/*"],      // this would upload everything except dot files
  exclude: [
    'dist/**/*.map',
    'node_modules/**',
    'node_modules/**/.*',
    '.git/**'
  ],
  deleteRemote: true
};

const callbackFtpDeploySwitcher = (type, data) => {
console.groupCollapsed("This is deploy statuses 🟦 🟧 🟥 🟩");
  switch (type) {
    case 'uploading':
      console.groupCollapsed("🟦 Uploading files to host");
      console.dir(data);
      console.groupEnd();
      break;
    case 'uploaded':
      console.groupCollapsed("🟧 Uploaded files to host");
      console.dir(data);
      console.groupEnd();
      break;
    case 'upload-error':
    case 'error':
      console.groupCollapsed("🟥 Error deploying");
      console.dir(data);
      console.groupEnd();
      break;
    case 'finished':
      console.groupCollapsed("🟩 Finished deploying");
      console.info(type);
      console.dir(data);
      console.groupEnd();
      break;
    case 'log':
    default:
      console.groupCollapsed("🟦 Log deploying");
      console.info(type);
      console.dir(data);
      console.groupEnd();
      break;
  }
  console.groupEnd();
};

ftpDeploy
  .deploy(config)
  .then(res => callbackFtpDeploySwitcher('finished', res))
  .catch(err => callbackFtpDeploySwitcher('error', err));

ftpDeploy.on('uploading', event => callbackFtpDeploySwitcher('uploading', event));
ftpDeploy.on('uploaded', event => callbackFtpDeploySwitcher('uploaded', event));
ftpDeploy.on('log', event => callbackFtpDeploySwitcher('log', event));
ftpDeploy.on('upload-error', event => callbackFtpDeploySwitcher('upload-error', event));
