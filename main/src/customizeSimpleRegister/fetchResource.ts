export const fetchResource = (url:string) => fetch(url).then(res=>res.text())