import banner from '../../assets/banner.png'


function Banner () { 
    return (
        <div className='banner'>
            <img src={banner} alt="banner" className="banner__image" />
            <p className="banner__text">Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner