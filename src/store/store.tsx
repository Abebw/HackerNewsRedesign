import { configureStore, createReducer, createAction } from '@reduxjs/toolkit'

export interface post {
    by: string;
    descendants: number;
    id: number;
    kids: Array<number>;
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    favorite: boolean;
}

export interface postsState {
    currentPosts: post[];
    favorites: number[];
    seen: number[];
}

const fetchPosts = createAction<post[]>('LOAD_POSTS');
const favoritePost = createAction<post>('FAVORITE_POST');
const markSeen = createAction<null>('MARK_SEEN');
const toggleDarkMode = createAction<null>('TOGGLE_DARKMODE');
const postsReducer = createReducer({ currentPosts: [], favorites: [], seen: [] }, (builder) => {
    builder
        .addCase(fetchPosts, (state: postsState, action) => {
            state.currentPosts.length = 0;
            let newPosts = action.payload.map((post) => {
                post.favorite = (state.favorites.indexOf(post.id) != -1);
                return post;
            })
            state.currentPosts.push(...newPosts);
        })
        .addCase(favoritePost, (state: postsState, action) => {
            for (let i of state.currentPosts) {
                if (i.id == action.payload.id) {
                    i.favorite = true;
                }
            }
            state.favorites.push(action.payload.id);
        })
        .addCase(markSeen, (state: postsState, _) => {
            for (let i of state.currentPosts) {
                state.seen.push(i.id)
            }
        })
});

const darkModeReducer = createReducer(false, (builder) => {
    builder
        .addCase(toggleDarkMode, (state: boolean, _) => {
            return !state;
        })
});
const store = configureStore({
    reducer: {
        posts: postsReducer,
        darkMode: darkModeReducer,
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store

