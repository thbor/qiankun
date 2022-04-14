export const myImportHtmlEntry = async(entryUrl:string)=>{
   // 加载app（获取entry的html，把html加在container里面）
  const getResByUrl = async(url:string)=> await fetch(url).then((res)=>res.text());
  // const html = await getResByUrl(entryUrl);
  const template = await getResByUrl(entryUrl)
  
  const templateDom = document.createElement('div');
  templateDom.innerHTML = template;
  
  // 获取所有script标签代码
  async function getExternalScripts(){
    const scripts = Array.from(templateDom.querySelectorAll("script"));
    const getSrcURL=(src:any)=>{
      if(src.startsWith('http')||src.startsWith('https')){
        return src;
      }
      return `${entryUrl}/${src}`
    }
    const res = Promise.all(scripts.map(async (script,index)=>{
      const src = script.getAttribute('src');
      if(!src){
        return script.innerHTML;
      }else{
        const url = getSrcURL(src);
        return await getResByUrl(url);
      }
    }))
    return res
  }

  // 获取并执行所有的script标签代码
  async function execScripts(){
    const module = {exports:{}}
    const exports = module.exports;
    const allScripts = await getExternalScripts();
    allScripts.forEach((code:string)=>{
      eval(code);
    })
    // eval执行后会将module.exports的值覆盖
    // console.log(111,window['micro-umi-umi']);
    return module.exports;
  }
  return {template,execScripts,getExternalScripts};
}
