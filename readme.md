1.启动项目：
由于umi应用报错，需要删除源码涉及到rc-picker的地方
\node_modules\antd\es\date-picker\locale\en_US.js下删除CalendarLocale和TimePickerLocale
2.项目组成：
main:umi  端口号：6666
micro-vue  端口号8080（默认）
micro-umi   端口号6789
micro-angular 端口号4200（默认）
3.项目分别安装qiankun

4.主应用

4.1注册子应用

```
export const microApps = [

 {

  name: 'micro-umi', *// app name registered*

  entry: '//localhost:6789',

  container: '#microContainer',

  activeRule: '/micro-umi',

 },

 {

  name: 'micro-vue',

  entry: '//localhost:8080',

  container: '#microContainer',

  activeRule: '/micro-vue',

 },

 {

  name: 'micro-angular',

  entry: '//localhost:4200',

  container: '#microContainer',

  activeRule: '/micro-angular',

 }

]
```

4.2

将container的子应用节点放在主应用中。

```
<div id='microContainer'></div>
```

4.3

左侧增加menu

```
<>
      <div className={styles.container}>
        <AsideMenu/>
        <div>{props.children}</div>
        {/* 微应用节点 */}
        <div id='microContainer'></div>
      </div>
    </>
```

5.微应用umi配置

 5.1 

```
yarn add qiankun
```

 5.2  

```
yarn add @umijs/plugin-qiankun -D
```

 5.3 

```
qiankun:{
  slave:{}
 }
```

5.4导出生命周期

```
export const qiankun = {
 async bootstrap(*props*:any){
  console.log('react 子应用 bootstrap',*props*);
 },
 async mount(*props*:any){
  console.log('react 子应用 mount',*props*);
 },
 async unmount(*props*:any){
  console.log('react 子应用 unmount',*props*);
 }
}
```

umi应用直接导航过去而不是加载子应用的container内是因为加载子应用时
会去找id为root的dom节点。这个节点与主应用的root节点重复了
解决方案1.更换主应用或子应用的id为不一样的两个id
解决方案2.父应用加载子应用时指定在某个dom内寻找id




图片加载不出来：
将vue的vue.config.js里面增加publicPath,这样就能完整请求出图片的资源了