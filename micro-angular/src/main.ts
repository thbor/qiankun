import './public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let app: any;
async function render() {
  app = await  getApp()   
  console.log('app===',app);
}
async function getApp(){
  const res1 = await platformBrowserDynamic()
  const res2 = await res1.bootstrapModule(AppModule);
  console.log('res1',res1);
  console.log('res2',res2);
  return res2;
}


if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props: Object) {
  console.log(999,app);
  console.log('bootstrap',props);
}

export async function mount(props: Object) {
  console.log('mount',props);
  render();
  console.log(666,app);
  
}

export async function unmount(props: Object) {
  console.log(888,app);
  console.log('unmount1',props,app);
  // @ts-ignore
  app?.destroy?.();
}