import yhHttp from "../../http";
const getInstance = yhHttp.getInstance()


export const getYiYan = () => {
     return getInstance.get('/api/yiyan?api_key=16d76a0353713b97').then(res => {
        return res
    })
}