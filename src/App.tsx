import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthCom } from "./pages/utils/AuthCom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";

import useStore from "./store";
import { useEffect } from "react";

export default function App() {
  const { UserStore }  = useStore()
  useEffect(() => {
    debugger
    let userId:any = sessionStorage.getItem('userId')  
    if(userId) {
      UserStore.getUserInfo(userId)
    }
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/*' element={<AuthCom><Home></Home></AuthCom>}>
            
        </Route>
      </Routes>
    </BrowserRouter>
  )
}