import { makeAutoObservable } from 'mobx'
import yhHttp from '../http'

const instance = yhHttp.getInstance()

class UserStore {
    userInfo = {
        name: 'from-store-cyh'
    }

    constructor() {
        makeAutoObservable(this)
    }


    login = (username:string,password:string) => {
        instance.post('/api/user/login',{
            username,
            password
        }).then(res => {
            console.log(res);
        })
    }
}

export default UserStore