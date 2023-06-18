export const GalleryPrevBtn = (props) => {
    const {onClick} = props;

    return(
        <button
            onClick={onClick}
        >
            Prev
        </button>
    )
}

export default GalleryPrevBtn;