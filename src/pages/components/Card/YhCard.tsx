import './card.scss';

const YhCard = () => {
    return(
        <div className="card">
            <div className="img-box">
                <img src="https://joeschmoe.io/api/v1/jon" alt="" />
            </div>
        
            <h1>Yihao Chen</h1>
            {/* <h4>Programmer</h4> */}
            <div className="describe">
                Luck：2022 just a web Desginer
            </div>
            {/* <div className="KnowMore">
                <button>了解更多</button>
            </div>     */}
        </div>
    )
}


export default YhCard