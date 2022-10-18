import { memo } from "react"

function WeatherIconCom (props:WeatherProps) { 
       
    const weatherName = props.weather || 'ri-sun-line'
    let iconName
    let iconColor
    if(weatherName === '晴') {
        iconName = 'ri-sun-line'
        iconColor = '#fdd835'
    } else if (weatherName === '多云转阴') {
        // 多云转阴
        iconName = "ri-cloudy-line"
        iconColor = '#42a5f5'
    } else if(weatherName === '多云') {
        // 多云
        iconName = 'ri-sun-cloudy-fill'
        iconColor = '#42a5f5'
    } else if(weatherName === '阴转晴') {
        // 阴转晴
        iconName = 'ri-sun-foggy-line'
        iconColor = '#fdd835'
    } else if(weatherName === '阴') {
        iconName = 'ri-foggy-fill'
        iconColor = '#fff'
    } else {
        // 雨天
        iconName = 'ri-drizzle-line'
        iconColor = '#fdd835'
    }   
    return (
        <>
            <i className={iconName} style={{color: iconColor}}></i>
        </>
    )
}

export default memo(WeatherIconCom)