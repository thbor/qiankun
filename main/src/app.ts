import 'zone.js'

import { registerMicroApps, start } from '@/customizeSimpleRegister/my-register';
import { microApps } from '@/micro-config/microApps';
registerMicroApps(microApps);

start();