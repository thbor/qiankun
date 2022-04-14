import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  devServer:{
    port:6789
  },
  qiankun:{
    slave:{}
  },
  // 指定给root为根节点
  mountElementId:'root1'

  
});
