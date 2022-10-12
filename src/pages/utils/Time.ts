export const getTime = () => {
    const time = new Date();
        const hour = time.getHours(); //时
        const minutes = time.getMinutes();//分 
        const newMinutes = minutes <= 9 ? "0" + minutes : minutes;
        const nowTime = hour + ":" + newMinutes
        return nowTime
}

export const getDate = () => {
    const time = new Date();
    const year = time.getFullYear(); //年
        const month = time.getMonth() + 1; //月
        const day = time.getDate(); //日
    const nowDate = `${year}-${month}-${day}`
    return nowDate 
}

