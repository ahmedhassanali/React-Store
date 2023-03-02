import './ImageSection.css'

function ImageSection(props){
    return(
        <>
            <div className="image-section">
                <img src={props.image} alt=''></img>
            </div>
        </>
    )
}

export default ImageSection;