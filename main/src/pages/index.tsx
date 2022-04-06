import AsideMenu from '@/pages/AsideMenu';
import styles from '@/pages/index.less';

export default function IndexPage(props:any) {
  return (
    <>
      <div className={styles.container}>
        <AsideMenu/>
        <div>{props.children}</div>
        {/* 微应用节点 */}
        <div id='microContainer'></div>
      </div>
    </>
    
  );
}
