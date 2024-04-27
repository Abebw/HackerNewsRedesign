import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import PostsList from "./PostsList";
import { loadPostsFromApi } from "../api";
import Header from "./Header";
import Footer from "./Footer";
import ShowMoreButton from "./ShowMoreButton";

export default function Latest() {
    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => { return state.posts.currentPosts });
    useEffect(() => {
        loadPostsFromApi(dispatch);
    }, []);
    return (<div className="container">
        {Header()}
        {PostsList(posts)}
        {ShowMoreButton()}
        {Footer()}
    </div>);
}