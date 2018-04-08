export function getRedirectPath({type,avatar}){
    let url = (type == 'boss')?  '/genius':'/boss'
    if(!avatar){
        url += 'info'
    }
    return url
}