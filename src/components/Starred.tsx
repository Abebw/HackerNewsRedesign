import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import PostsList from "./PostsList";
import Header from "./Header";
import { useEffect } from "react";
import { getAllPostsFromIDList } from "../api";
import Footer from "./Footer";

export default function Starred() {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => { return state.posts.favorites });
    const currentPosts = useSelector((state: RootState) => { return state.posts.currentPosts });
    useEffect(() => {
        const loadPostsFromApi = async () => {
            const posts = await getAllPostsFromIDList(favorites)
            dispatch({ type: 'LOAD_POSTS', payload: posts });
        };
        loadPostsFromApi();
    }, [favorites]);
    return (
        <div className="container">
            {Header()}
            {PostsList(currentPosts)}
            {Footer()}
        </div>);
}
