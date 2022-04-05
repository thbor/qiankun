import { registerMicroApps, start } from 'qiankun';
import { microApps } from '@/micro-config/microApps';
registerMicroApps(microApps);

start();