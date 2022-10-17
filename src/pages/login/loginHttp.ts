import yhHttp from "../../http";
const getInstance = yhHttp.getInstance()


export const userLogin = (userInfo: User) => {
    return getInstance.post('/my-back/user/login', userInfo).then(res => {
        return res
    })
}