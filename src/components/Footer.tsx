import { Link } from "react-router-dom";

export default function Footer() {
    return (<div>

        <div className="footerBar"></div>
        <div className='hackerNewsFooter'>Hacker News</div>
        <div className="latestStarredFooter"><Link to="/">Latest</Link> | <Link to="/starred">Starred</Link></div>
    </div>);
}