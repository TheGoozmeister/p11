function Banner ({text="", picture, className=""}) { 
    const fullClassName = "banner__image" + className;
    return (
        <div className='banner'>
            <img src={picture} alt="banner" className={fullClassName} />
            <p className="banner__text">{text}</p>
        </div>
    )
}

export default Banner