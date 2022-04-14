import { getApps } from "./my-register"
import importHTML from 'import-html-entry';
import { getNextRoute, getPreRoute } from "./rewrite";
import { myImportHtmlEntry } from "./my-import-html-entry";

export const handleRouter = async ()=>{
  const apps = getApps();
  const nextApp = apps.find(item=>getNextRoute().startsWith(item.activeRule));
  const preApp = apps.find(item=>getPreRoute().startsWith(item.activeRule));
  console.log('nextApp',nextApp);
  // console.log('preApp',preApp);
  
  if(!nextApp){
    return;
  }
  const container = document.querySelector(nextApp.container);

  // if(preApp){
  //   await unmount(preApp);
  // }


  // 加载子应用
  // const {template,execScripts} = await importHTML(nextApp.entry);
  const {template,execScripts} = await myImportHtmlEntry(nextApp.entry);
 
  // @ts-ignore
  window.__POWERED_BY_QIANKUN__ = true;
  // @ts-ignore
  window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = `${nextApp.entry}/`;

  // 执行scripts代码
  const microApp:any = await execScripts();
  // console.log('micro-angular-main',window['micro-angular-main']);
  
  if(container) container.innerHTML = template

  // 生命周期

  nextApp.bootstrap = microApp?.bootstrap
  nextApp.mount = microApp?.mount

  await bootstrap?.(nextApp);
  await mount?.(nextApp);
  // 一定要mount执行完成后再unmount，否则可能导致angular还未mount就unmount了
  nextApp.unmount = microApp?.unmount


  async function bootstrap(app){
    await app?.bootstrap?.()
  }
  async function mount(app){
    await app?.mount?.({container:document.querySelector(app.container)})
  }
  async function unmount(app){
    await app?.unmount?.({container:document.querySelector(app.container)})
  }
}