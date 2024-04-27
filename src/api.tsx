import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import store, { post } from "./store/store";

export async function loadPostsFromApi(dispatch: Dispatch<UnknownAction>) {
    const seenPosts: number[] = store.getState().posts.seen;
    let posts: post[] = await fetchLatestPostsFromAPI()
    posts = posts.filter((post: post) => { return seenPosts.indexOf(post.id) == -1 })
    posts.length = 12;
    dispatch({ type: 'LOAD_POSTS', payload: posts });
};

export function getAllPostsFromIDList(ids: Array<string>) {
    return Promise.all(ids.map(async (id: string) => {
        const detailStoriesURL = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
        let response = await fetch(detailStoriesURL);
        return response.json();
    }));
}
const NumberOfQueriesOnFirstCall = 12;
let numberOfCallsMade = 0;
export async function fetchLatestPostsFromAPI() {
    numberOfCallsMade++;
    const topStoriesURL = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$priority"&limitToFirst=${NumberOfQueriesOnFirstCall * numberOfCallsMade}`;
    let response = await fetch(topStoriesURL);
    const ids = await response.json();
    const posts = await getAllPostsFromIDList(ids);
    return posts;
}
