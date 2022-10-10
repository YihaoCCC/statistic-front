import './home.scss';

function Home() {
    return(
        <>
            <div className='home'>
               <div className='header'> 
                    <div className='date'>
                        <div className='time'>
                            <span>
                                {'19:37'}
                            </span>
                            <div className='weather'>
                                <div className='my-flex'>
                                    <i className="ri-sun-line" style={{color:'#F1C40E'}}></i>
                                    <em>20°</em>
                                </div>
                            </div>
                        </div>
                        <div className='datetime my-flex clearButton primary'>         
                             <i className="ri-calendar-2-line"></i> Today： 2022-10-10
                        </div>
                    </div>
                    <div className='user clearButton primary'>
                        <i className="ri-admin-line"></i>
                        cyh
                    </div>
               </div>
               <div className='test'>

               </div>
            </div>
            <div className="openDoor">
                
            </div>
        </>
       
        
    )
}

export default Home