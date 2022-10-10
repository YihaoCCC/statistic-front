import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthCom } from "./pages/utils/AuthCom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";




export default function App() {
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