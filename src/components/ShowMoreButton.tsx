import { useDispatch } from "react-redux";
import { loadPostsFromApi } from "../api";

export default function ShowMoreButton() {

    const dispatch = useDispatch();

    function showMoreHandler() {
        dispatch({ type: 'MARK_SEEN' });
        loadPostsFromApi(dispatch);
    }
    return (
        <button className="showMore" onClick={showMoreHandler}>Show More</button>
    )
}