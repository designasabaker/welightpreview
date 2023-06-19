import {faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const GalleryNextBtn = (props) => {
    const {onClick} = props;

    return(
        <button
            onClick={onClick}
            className={"px-3"}
        >
            <FontAwesomeIcon icon={faCircleChevronRight} style={{color: "#ffffff",}} />
        </button>
    )
}

export default GalleryNextBtn;