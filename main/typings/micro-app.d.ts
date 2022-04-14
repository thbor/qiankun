interface IMicroApps {
  path: string;
  entry: string;
  container: string;
  activeRule: string;
  bootstrap:()=>void;
  mount:()=>void;
  unmount:()=>void;
}