import './login.scss';
import LoginBg from '../../assets/login.svg';
import sugon from '../../assets/av4pu-sgayy.png'
import { useNavigate } from 'react-router-dom'

function Login() {
    const router = useNavigate()
    const login = () => {
        localStorage.setItem('react-token', "123");
        router('/')
    }
    return(
        <div className='login'>
            <div className='leftContent'>
                <img src={LoginBg} alt="" />
            </div>
            <div className="rightContent">
                <div className='loginForm'>
                    <div className='formHeader'>
                        <img src={sugon} alt="" />
                        <h1>Sugon-Geeker</h1>
                    </div>
                    <div className='formContent'>
                        <div className='inputBox'>
                            <svg t="1665391384093" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2557" width="24" height="24"><path d="M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" p-id="2558" fill="#9baacf"></path></svg>
                            <input type="text" placeholder='请输入用户名（姓名）' required/>
                        </div>
                        <div className='inputBox'>
                            <svg t="1665391484218" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3595" width="24" height="24"><path d="M224 384h576A96 96 0 0 1 896 480v384a96 96 0 0 1-96 96h-576A96 96 0 0 1 128 864v-384A96 96 0 0 1 224 384z m0 64a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32v-384a32 32 0 0 0-32-32h-576z m576-160a32 32 0 1 1-64 0 224 224 0 0 0-448 0 32 32 0 0 1-64 0 288 288 0 0 1 576 0z m-320 320a32 32 0 0 1 64 0v128a32 32 0 1 1-64 0v-128z" p-id="3596" fill="#9baacf"></path></svg>
                            <input type="password" placeholder='请输入密码' required />
                        </div>
                        <button  onClick={login}>
                            <svg t="1665391807436" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2561" width="24" height="24"><path d="M984.615385 846.769231v43.323077c0 51.2-43.323077 94.523077-94.523077 94.523077H133.907692C82.707692 984.615385 39.384615 941.292308 39.384615 890.092308V846.769231c0-114.215385 133.907692-185.107692 259.938462-240.246154l11.815385-5.907692c9.846154-3.938462 19.692308-3.938462 29.538461 1.96923 51.2 33.476923 108.307692 51.2 169.353846 51.2s120.123077-19.692308 169.353846-51.2c9.846154-5.907692 19.692308-5.907692 29.538462-1.96923l11.815385 5.907692C850.707692 661.661538 984.615385 730.584615 984.615385 846.769231zM512 39.384615c129.969231 0 234.338462 116.184615 234.338462 259.938462S641.969231 559.261538 512 559.261538s-234.338462-116.184615-234.338462-259.938461S382.030769 39.384615 512 39.384615z" p-id="2562" fill="#9baacf"></path></svg>
                            登录
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login