import {fetchResource} from './fetchResource'
export const myImportHtmlEntry = async(entryUrl:string)=>{
  const template = await fetchResource(entryUrl)
  
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
    const allScripts = scripts.map(async (script,index)=>{
      let src = script.getAttribute('src');
      
      if(!src){
        return script.innerHTML;
      }else{
        const url = getSrcURL(src);
        script.src = url
        return await fetchResource(url);
      }
    })
    console.log('allScripts',allScripts);
    
    const res = Promise.all(allScripts)
    
    return res
  }

  // 获取并执行所有的script标签代码
  async function execScripts(){
    const module = {exports:{}}
    const exports = module.exports;
    const allScripts = await getExternalScripts();
    allScripts.forEach(async (code:string)=>{
       await eval(code);
    })
    // eval执行后会将module.exports的值覆盖
    console.log('module.exports',module.exports,module);
    
    return module.exports;
  }
 
  return {template,execScripts,getExternalScripts,};
   
}
