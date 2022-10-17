import { useEffect, useState, useMemo } from 'react';
import './home.scss';
import { observer } from 'mobx-react-lite'

import { getYiYan } from './homeHttp';
import { getTime, getDate } from '../utils/Time';

import useStore from '../../store';
import WeatherIconCom from '../components/WeatherIconCom';

function Home() {
    const { UserStore, WeartherStore } = useStore()



    // 一言
    const [yiYan, setYiYan] = useState('------')
    // 当前时间
    const [time, setTime] = useState(getTime())
    // 日期
    const [date, setDate] = useState(getDate())
    setInterval(() => {
        setTime(getTime())
    },1000)
    
    useEffect(() => {
        getYiYan().then((res:any) => {
            let newMessage = `${res.data.content} --- ${res.data.from || ''}` 
            setYiYan(newMessage)
        })
        WeartherStore.getWeartheList()
    },[])

    const temperature = useMemo(() => {
        return function(item:string,index:number) {
            if(item.length <= 4) {
                return item.replace('/','')
            }
            if(index === 0) {
                return item.replace('/','')
            } else {
                return item
            }
        }
    },[WeartherStore.weartherList])
    
 
    const [isConfim, setIsConfirm] = useState(false)
    const confirm = () => {
        setIsConfirm(true)
    }

    return(
        <>
            <div className='home'>
               <div className='header'> 
                    <div className='date'>
                        <div className='time'>
                            <span>
                                {time}
                            </span>
                            <div className='weather'>
                                <div className='my-flex'>
                                    <WeatherIconCom weather={WeartherStore.getTodayWeather()}></WeatherIconCom>
                                    <em style={{fontStyle:'normal'}}>{WeartherStore.getTodayTem()}</em>
                                </div>
                            </div>
                        </div>
                        <div className='datetime my-flex clearButton primary'>         
                             <i className="ri-calendar-2-line"></i> Today： {date}
                        </div>
                    </div>
                    <div className='user clearButton primary'>
                        <i className="ri-admin-line"></i>
                        {UserStore.userInfo.name}
                    </div>
               </div>
               {
                isConfim ? 
                <div className='confirmButton clearButton isConfirm'>已确认</div>
                :
                <div className='confirmButton clearButton' onClick={() => confirm()}>
                    { parseInt(time.slice(0,3)) > 15 ? '对不起，今日不可预订' : '确认用餐'}
                </div>
               }
               <div className={['ItemBox','weatherMargin', isConfim? 'cancelMargin':'' ].join(' ')}>    
                    <div className='BoxTitle'>   
                        <i className="ri-sun-line"></i>
                        <span>How's it look out there?</span> 
                    </div>
                    <div className='weartherBox'>
                        {
                            WeartherStore.weartherList.map((item:MyWeather,index) => {
                                return (                
                                    <div className='weatherItem clearButton' key={index}>
                                        <span style={{margin:0}}>
                                            {temperature(item.celsius,index)}
                                        </span>
                                        <p style={{fontSize:'12px',margin:0, marginBottom:'10px'}}>{item.weather}</p>
                                        <WeatherIconCom weather={item.weather}></WeatherIconCom>
                                        <span>
                                            {item.day}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
               </div>
               <div className='ItemBox foodMargin'>    
                    <div className='BoxTitle'>   
                        <i className="ri-cup-line"></i>
                        <span>
                            Get it delivered!
                        </span>
                    </div>
                    <div className='foodBox'>
                        {
                            [1,2,3,4,5].map((item,index) => {
                                return(
                                    <div className={`foodItem ${isConfim?'cancelFliter':''}`} key={index}>
                                        <img src="https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span>
                                            {item}
                                        </span>
                                        <div className='mask'>
                                            <div className='title'>
                                                Burgers
                                            </div>
                                            <div className='place'>
                                                The best burgers in town
                                            </div>
                                        </div>   
                                    </div>
                                )
                            })
                        }

                    </div>
               </div>
               <div className='footer'>
                    <p>
                        {yiYan}
                    </p>
               </div>
            </div>
            <div className='openDoor'>

            </div>
        </>
       
        
    )
}

export default observer(Home) 