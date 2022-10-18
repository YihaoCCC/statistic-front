import { makeAutoObservable, runInAction } from 'mobx'
import yhHttp from '../http'

const instance = yhHttp.getInstance()

class UserStore {
    userInfo = {
        username: 'From-Java-cyh'
    }

    constructor() {
        makeAutoObservable(this)
    }


    login = (userInfo:User) => {
        return instance.post('/my-back/user/login',userInfo).then((res:any) => {
            runInAction(() => {
                this.userInfo = res.body
            })
            let userId = res.body.id
            return userId
        })
    }


    getUserInfo = (userId:string) => {
        return instance.post(`/my-back/user/getUserInfo`, {id : userId}).then((res:any) => {
            runInAction(() => {
                this.userInfo = res.body
            })
        })
    }
}

export default UserStore