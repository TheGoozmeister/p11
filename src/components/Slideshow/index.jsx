import { useState } from "react"
import arrow_right from "../../assets/vectors/arrow_right.png"
import arrow_left from "../../assets/vectors/arrow_left.png"


function Slideshow({photosArray}) {
    const numberOfphotos = photosArray.length
    const firstPhoto = photosArray[0]
    const lastPhoto = photosArray[numberOfphotos-1]
    const [actualPhoto, setActualPhoto] = useState(firstPhoto)

    const previousPhoto = function (actualPhoto) {
        if (actualPhoto===firstPhoto) {
            setActualPhoto(lastPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex-1])
        }
    }
    const nextPhoto = function (actualPhoto) { 
        if (actualPhoto===lastPhoto) {
            setActualPhoto(firstPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex+1])
        }
    }

    return (
        <div className="slideshow">
            <div className="slideshow__image">              
                    <img src={actualPhoto} alt="lodging" />                 
            </div>
            {numberOfphotos !== 1 &&
            <div>
                <div className ="slideshow__arrowsLeft arrow" onClick={()=>previousPhoto(actualPhoto)}>
                    <img src={arrow_left} alt="arrow_left" />
                </div>
                <div className ="slideshow__arrowsRight arrow" onClick={()=>nextPhoto(actualPhoto)}>
                    <img src={arrow_right} alt="arrow_right" /></div>
                <div className="slideshow__bulletpoint">
                    {photosArray.indexOf(actualPhoto)+1}/{numberOfphotos}
                </div>
            </div>
            }
        </div>
    )
}


export default Slideshow