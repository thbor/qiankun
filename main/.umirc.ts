import { defineConfig } from 'umi';
import {prefix} from './prefix';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index',routes:[]},
  ],
  fastRefresh: {},
  mountElementId:'root2',
  // theme:{'@ant-prefix':prefix},
  proxy:{
    '/angular-assets/':{
      target: 'http://127.0.0.1:4200'
    }
  }
});
