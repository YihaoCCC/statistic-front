import yhHttp from "../http";
import { makeAutoObservable, runInAction } from 'mobx'



const instance = yhHttp.getInstance()


class WeartherStore {

    weartherList = []
    
    constructor() {
        makeAutoObservable(this)
    } 

    getWeartheList = () => {
        instance.get('/api/tianqi?api_key=9352759393aef152&city=天津&type=2').then((res) => {
            console.log(res);
            runInAction(() => {
                this.weartherList = res.data
            })
        })
    }
    
    
}


export default WeartherStore