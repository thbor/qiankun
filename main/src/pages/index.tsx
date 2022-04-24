import AsideMenu from '@/pages/AsideMenu';
import styles from '@/pages/index.less';
import {ConfigProvider} from 'antd';
import {prefix} from '../../prefix'
import {Input,Button} from 'antd';
import _ from 'lodash'

export default function IndexPage(props:any) {
  const a = {a:NaN,b:Infinity,c:undefined,d:function(){},e:Symbol('')}
  const b = {author:      'bobo'}
  const c = [NaN,Infinity,undefined,function(){},Symbol('')]
  let personObj = Object.create(null, {
    name: { value: "浪里行舟", enumerable: false },
    year: { value: "2021", enumerable: true },
  })
  const obj1 = _.cloneDeep(a)
  const obj2 = _.cloneDeep(b)
  const obj3 = _.cloneDeep(c)
  const obj4 = _.cloneDeep(personObj)
  console.log('obj1',obj1);
  console.log('obj2',obj2);
  console.log('obj3',obj3);
  console.log('obj4',obj4);
  
  return (
    <ConfigProvider prefixCls={prefix}>
    <div className={styles.container}>
        <AsideMenu/>
        {/* <div>{props.children}</div> */}
        {/* <div className={styles['my-class']}>
          <Input  placeholder='hello world' ></Input>
        </div> */}
        <Button>base按钮</Button>
        {/* 微应用节点 */}
        <div id='microContainer'></div>
      </div>
      </ConfigProvider>
  );
}
