import '../public-path';
import styles from './index.less';
import {Link} from 'react-router-dom'
import {Button} from 'antd';

export default function IndexPage(props:any) {
  return (
    <div>
      <h1 className={styles.title}>这是react微应用</h1>
      <Link to='/home'>home</Link>
      <div className={styles['umi-child-box']}>
        <Button>umi子应用按钮</Button>
      </div>
      <>{props.children}</>
    </div>
  );
}
