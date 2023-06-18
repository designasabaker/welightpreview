import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons'

export const GalleryPrevBtn = (props) => {
    const {onClick} = props;

    return(
        <button
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faCircleChevronLeft} style={{color: "#ffffff",}} />
        </button>
    )
}

export default GalleryPrevBtn;