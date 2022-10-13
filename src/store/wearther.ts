import yhHttp from "../http";
import { makeAutoObservable, runInAction } from 'mobx'



const instance = yhHttp.getInstance()


class WeartherStore {

    weartherList:Array<MyWeather> = []
    
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

    getTodayTem = () => {
        if(this.weartherList.length) {
            return this.weartherList[0].celsius.replace('/','')
        } else {
            return '---'
        }
    }

    getTodayWeather = () => {
        if(this.weartherList.length) {
            return this.weartherList[0].weather
        } else {
            return '---'
        }
    }

    
    
}


export default WeartherStore