
export default function WeatherIconCom (props:MyWeather) {    
    const weatherName = props.weather || 'ri-sun-line'
    let iconName
    let iconColor
    if(weatherName === '晴') {
        iconName = 'ri-sun-line'
    } else if (weatherName === '多云转阴') {
        // 多云转阴
        iconName = "ri-cloudy-line"
    } else if(weatherName === '多云') {
        // 多云
        iconName = 'ri-sun-cloudy-line'
    } else if(weatherName === '阴转晴') {
        // 阴转晴
        iconName = 'ri-sun-foggy-line'
    } else {
        // 雨天
        iconName = 'ri-drizzle-line'
    }   
    return (
        <>
            <i className={iconName} style={{color: iconColor}}></i>
        </>
    )
}