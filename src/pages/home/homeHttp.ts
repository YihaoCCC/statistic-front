import yhHttp from "../../http";
const getInstance = yhHttp.getInstance()


export const getYiYan = () => {
    return getInstance.get('/mxg-api/api/yiyan?api_key=16d76a0353713b97').then(res => {
        return res
    })
}

export const getBg = () => {
    return getInstance.get('/mxg-api/api/bing?apikey=d204f2ca364cd69e&id=today&pn=1').then(res => {
        return res
    })
}