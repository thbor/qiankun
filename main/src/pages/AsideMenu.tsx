import { Menu } from 'antd';
import {history} from 'umi';
interface IMenu{
  path:string;
  name:string
}
const AsideMenu=()=>{
  const menus:IMenu[] = [
    {path:'/micro-vue',name:'micro-vue'},
    {path:'/micro-umi',name:'micro-umi'},
    {path:'/micro-angular/',name:'micro-angular/'},
    {path:'/angular9',name:'angular9'},
    // {path:'/app-angular',name:'app-angular'},
    
  ]
  const handleClick=(menuItem: IMenu)=>{
    history.push(menuItem.path);
  }
  return (
    <>
     <Menu
        style={{ width: 256 ,minHeight:'100vh'}}
        mode="inline"
        theme='dark'
      >
        {menus.map((menuItem:IMenu)=>(
          <Menu.Item key={menuItem.path} onClick={()=>handleClick(menuItem)}>{menuItem.name}</Menu.Item>
        ))}
      </Menu>
    </>
  )
}
export default AsideMenu;