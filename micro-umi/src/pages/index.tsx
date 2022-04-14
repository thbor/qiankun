import '../public-path';
import styles from './index.less';
import {Link} from 'react-router-dom'

export default function IndexPage(props:any) {
  return (
    <div>
      <h1 className={styles.title}>这是react微应用</h1>
      <Link to='/home'>home</Link>
      <>{props.children}</>
    </div>
  );
}
