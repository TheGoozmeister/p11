import star_red from "../../assets/vectors/star_red.png"
import star_grey from "../../assets/vectors/star_grey.png"


function Rating ({rate}) {
    const rateMax = 5 
    const numberOfColoredStars = rate 
    const numberOfGreyStars = rateMax - numberOfColoredStars
    let starsArray = []
    for (let i=0; i<numberOfColoredStars; i++) {
        starsArray.push(<div className="rating__coloredStar" key={i}><img src={star_red} alt="star_red" /></div>)
    }
    for (let i=0; i<numberOfGreyStars; i++) {
        starsArray.push(<div className="rating__greyStar" key={numberOfColoredStars+i+1}><img src={star_grey} alt="star_grey"/></div>)
    }

    return (
        <div className="rating">
            {starsArray}
        </div>
    )
}


export default Rating