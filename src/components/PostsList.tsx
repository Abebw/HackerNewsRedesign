import { useDispatch } from "react-redux";
import { post } from "../store/store";

function getSiteFromLink(url: string) {
    try {
        const urlObj = new URL(url);
        console.log(urlObj);
        return `(${urlObj.hostname})`;
    } catch (error) {
        return "";
    }
}

function getHowLongAgoFromTime(timestamp: number) {
    const now = Date.now();
    const secondsAgo = Math.floor(now / 1000 - timestamp);

    if (secondsAgo < 60) {
        return `${secondsAgo} seconds ago`;
    } else if (secondsAgo < 3600) {
        const minutes = Math.floor(secondsAgo / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (secondsAgo < 86400) {
        const hours = Math.floor(secondsAgo / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (secondsAgo < 2592000) {
        const days = Math.floor(secondsAgo / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        const months = Math.floor(secondsAgo / 2592000);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    }
}



export default function PostsList(posts: Array<post>) {
    const dispatch = useDispatch();
    function onStarClick(post: post) {
        return () => {
            if (post.favorite) {
                return;
            }
            dispatch({ type: 'FAVORITE_POST', payload: post });
        }
    }

    return <ol>
        {posts.map((post) => (
            <li key={post.id}>
                <div><a className='postLink' href={post.url}>{post.title}</a>{getSiteFromLink(post.url)}</div>
                <div>
                    {post.score} points by {post.by} {getHowLongAgoFromTime(post.time)} |
                    {post.descendants} comments |
                    <img onClick={onStarClick(post)} src={post.favorite ? 'SelectedStar.svg' : 'UnselectedStar.svg'} />  {post.favorite ? " saved" : " save"}
                </div>
            </li>
        ))
        }
    </ol >
}
