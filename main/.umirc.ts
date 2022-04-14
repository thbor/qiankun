import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index',routes:[]},
  ],
  fastRefresh: {},
  mountElementId:'root2',
  proxy:{
    '/assets':{
      target: 'http://127.0.0.1:4200',
    }
  }
});
