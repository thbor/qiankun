import {handleRouter} from '@/customizeSimpleRegister/handle-router';
let preRoute = '';
let nextRoute = window.location.pathname;
export const getPreRoute = ()=>preRoute
export const getNextRoute = ()=>nextRoute

export const rewriteRoute = () => {
  console.log('rewriteRoute  start');
  window.addEventListener('load',(val:any)=>{
    const {pathname} = val.target.location
    console.log('load',pathname);
    handleRouter();
  })
  // 1.监听activeRule  
  // 监听方式history.go(),back(),forward()用onpopstate来监听
  window.addEventListener('popstate',(val)=>{
    console.log('popstate',val);
    preRoute = nextRoute;  //之前的
    nextRoute = window.location.pathname; //最新的
    handleRouter();
  })

  // pushState和replaceState需要通过劫持的方式重写
  const newPushState = window.history.pushState;
  window.history.pushState = (...args) => {
    console.log('pushState',args);
    preRoute = window.location.pathname
    newPushState.apply(window.history,args);
    nextRoute = window.location.pathname
    console.log('监视到pushState变化了')
    handleRouter();
  }
  const newReplaceState = window.history.replaceState;
  window.history.replaceState = (...args) => {
    console.log('replaceState',args);
    preRoute = window.location.pathname
    newReplaceState.apply(window.history,args);
    nextRoute = window.location.pathname
    console.log('监视到replaceState变化了')
    handleRouter();
  }
}