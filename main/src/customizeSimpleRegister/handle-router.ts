import { getApps } from "./my-register";
import {myImportHtmlEntry} from './my-import-html-entry'
import { getNextRoute, getPreRoute } from "./rewrite";

import importHTML from 'import-html-entry';
/**
 * @description 监听到路由变化时调用该函数,识别到activeRule的时候处理找到entry并将entry解析放在container
 * 
 * */ 
export const handleRouter = async () => {
  console.log(11111111111111);
  
  // 0.先卸载上一个应用
  
  // 1.拿到注册的apps
  const apps = getApps();
  const preApp = apps.find((item)=>{return getPreRoute().startsWith(item.activeRule)});
  // 找到以activeRule开头的微应用
  const app = apps.find((item)=>{return getNextRoute().startsWith(item.activeRule)});
  // const app = apps.find((item: IMicroApps)=>window.location.pathname.startsWith(item.activeRule));
 
  if(!app){
    return;
  }
  let container: HTMLDivElement|null = document.querySelector(app.container);
  // 如果有上一个应用先销毁
  if(preApp){
    console.log('preApp',preApp);
    
    await unmount(preApp);
    
  }
  
  /**  importHTML  start  */
  // const {template,execScripts} = await importHTML(app.entry)
  // const container: HTMLDivElement|null = document.querySelector(app.container);
  // if(container){
  //   container.innerHTML = template
  // }
  // await execScripts();
  /**  importHTML  end  */

  /**  自定义importHTML  start  */
  window.__POWERED_BY_QIANKUN__ = true;
  const {template,execScripts} = await myImportHtmlEntry(app.entry)
  if(container){
    // const microDom = document.createElement('div')
    // microDom.innerHTML = template
    // container.appendChild(microDom)
    container.innerHTML = template
  }
  // const microDom = document.createElement('div');
  // microDom.innerHTML = template;
  // container?.appendChild(microDom);
  const appMicro:any = await execScripts();
  console.log('appMicro',appMicro);
  
  app.bootstrap = appMicro?.bootstrap;
  app.mount = appMicro?.mount;
  app.unmount = appMicro?.unmount;
  await bootstrap(app)
  await mount(app)
  /**  自定义importHTML  end  */


  // // 手动构造一个commonJs模块环境(打包之后找到module.exports)
  // // 子应用不再渲染，需要主应用去加载子应用的生命周期并手动调用
  // window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = `${app.entry}/`;

  
  
  async function bootstrap(app:any){
    await app.bootstrap?.()
  }
  async function mount(app:any){
    await app.mount?.()
  }
  async function unmount(app:any){
    await app.unmount?.()
  }
  
}