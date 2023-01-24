function Rating ({rate}) {
    const rateMax = 5 
    const numberOfColoredStars = rate 
    const numberOfGreyStars = rateMax - numberOfColoredStars
    let starsArray = []
    for (let i=0; i<numberOfColoredStars; i++) {
        starsArray.push(<div className="rating__coloredStar"><img src='../../assets/vectors/star_red.png' alt="star" /></div>)
    }
    for (let i=0; i<numberOfGreyStars; i++) {
        starsArray.push(<div className="rating__greyStar" key={rateMax-i}><img src="https://img.icons8.com/ios-glyphs/30/null/filled-star.png" alt="star"/></div>)
    }

    return (
        <div className="rating">
            {starsArray}
        </div>
    )
}


export default Rating