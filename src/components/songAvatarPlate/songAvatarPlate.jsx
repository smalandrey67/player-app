const SongAvatarPlate = ({ 
    image, 
    name, 
    showPlateHandler, 
    hidePlateHandler, 
    backgroundPlate, 
    plate, 
    author,
    albumLibraryIsOpen
}) => {

    return(
        <figure className="song__figure">
            <div className="song__avatar">
                <img 
                    className="song__avatar-image"
                    src={image} 
                    alt={name} 
                    onMouseEnter={showPlateHandler} 
                    onMouseLeave={hidePlateHandler} 
                />
                <img 
                    className={`song__avatar-rock ${backgroundPlate ? 'song__avatar-rock_active' : ''}`}
                    src={plate}
                    alt={name} 
                />
            </div>
            <figcaption className="song__figure">
                <h3 className="song__figure-name">{name}</h3>
                <p className="song__figure-author">{author}</p>
            </figcaption>
        </figure> 
    )

}
export { SongAvatarPlate }