import UserStore from "./user";
import React from "react";
import WeartherStore from "./wearther";



class store  {
    UserStore
    WeartherStore
    constructor() {
        this.UserStore = new UserStore()
        this.WeartherStore = new WeartherStore()
    }
}

const rootStore = new store()
// 5：introduce React.createContext to make rooteStore 
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export default useStore

