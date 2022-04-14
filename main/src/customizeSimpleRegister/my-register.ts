
import {rewriteRoute} from '@/customizeSimpleRegister/rewrite'


let _apps: IMicroApps[] = [];

export const getApps = () => _apps; 
/**
 * @description 注册子应用
 * 1.监听activeRule
 * 2.加载entry路径
 * 3.将entry的路径加载在对应的dom下
 * 4.渲染
 * */ 
// 监听方式history.go(),back(),forward()用onpopstate来监听
export const registerMicroApps = (apps:any) =>{
  _apps = apps;
  
}
export const start=()=>{
  rewriteRoute();
  // 2.加载entry路径
  // 3.将entry的路径加载在对应的dom下
  // 4.渲染
}