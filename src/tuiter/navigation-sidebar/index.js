import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="bi bi-twitter"></i>
            </a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill"></i> Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i> Explore
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-pc-display-horizontal"></i> Labs
            </Link>
            <a className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i> Notifications
            </a>
            <a className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"></i> Messages
            </a>
            <a className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i> Bookmarks
            </a>
            <a className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul"></i> Lists
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i> Profile
            </Link>
            <a className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i> More
            </a>
            <button className="btn btn-primary w-100 mt-1 rounded-pill">
                Tuit
            </button>
        </div>

    );

};
export default NavigationSidebar;