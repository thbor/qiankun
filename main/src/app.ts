import 'zone.js'

import { registerMicroApps, start } from 'qiankun';
import { microApps } from '@/micro-config/microApps';

// FIXME:qiankun自己的方法需要angular加上angular.json里面的deployURL，
// 自己写的不用加，需要注释

// import { registerMicroApps, start } from '@/customizeSimpleRegister/my-register';
// import { microApps } from '@/micro-config/microApps';
const config = {sandbox:{loose:true,experimentalStyleIsolation:true}}
// const config = {sandbox:true}
registerMicroApps(microApps);

start(config);
