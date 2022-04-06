export const qiankun = {
  async bootstrap(props:any){
    console.log('react 子应用 bootstrap',props);
  },
  async mount(props:any){
    console.log('react 子应用 mount',props);
  },
  async unmount(props:any){
    console.log('react 子应用 unmount',props);
  }
}