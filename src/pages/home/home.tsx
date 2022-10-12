import { useEffect, useState } from 'react';
import './home.scss';
import { observer } from 'mobx-react-lite'

import { getYiYan } from './homeHttp';
import { getTime, getDate } from '../utils/Time';

import useStore from '../../store';

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
                                    <i className="ri-sun-line" style={{color:'#F1C40E'}}></i>
                                    <em style={{fontStyle:'normal'}}>{WeartherStore.weartherList[0].celsius.slice(0,4)}</em>
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
               <div className='confirmButton clearButton'>
                    确认用餐
               </div>
               <div className='ItemBox'>    
                    <div className='BoxTitle'>   
                        <i className="ri-sun-line"></i>
                        <span>How's it look out there?</span> 
                    </div>
                    <div className='weartherBox'>
                        {
                            WeartherStore.weartherList.map((item:any,index) => {
                                return (
                                    <div className='weatherItem clearButton' key={index}>
                                        <span>
                                            {item.celsius}
                                        </span>
                                        <i className="ri-sun-line"></i>
                                        <span>
                                            {item.day}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
               </div>
               <div className='ItemBox'>    
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
                                    <div className='foodItem' key={index}>
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
                    <span>
                        {yiYan}
                    </span>
               </div>
            </div>
            <div className='openDoor'>

            </div>
        </>
       
        
    )
}

export default observer(Home) 