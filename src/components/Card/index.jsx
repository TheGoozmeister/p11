function Card ({title,picture}) {
    return (
        <div className="card">
            <img src={picture} alt={title} className="card__image" />
            <span className="card__title">{title}</span>
        </div>
    )
}


export default Card