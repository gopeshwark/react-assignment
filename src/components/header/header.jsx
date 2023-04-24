import React from 'react';
import './header.scss';
import { Link, useParams } from 'react-router-dom';

const linkArr = [{
    id:1,
    path: "/explore",
    title: "Explore"
},{
    id:2,
    path: "",
    title: "Problems"
},{
    id:3,
    path: "/contest",
    title: "Contest"
},{
    id:4,
    path: "/discuss",
    title: "Discuss"
},{
    id:5,
    path: "/interview",
    title: "Interview"
}]
const Header = () => {
    const params = useParams();
    console.log(params);
    const getActiveTab = (path) => {
        if(params?.['*'] === path) return "nav-items active";
        return "nav-items";
    }
    return (
        <header className='header'>
            <nav className='header__nav'>
                <div className='header__navLeft'>
                    <Link className={getActiveTab("/explore")} to="/explore">Explore</Link>
                    <Link className={getActiveTab("/problemset/all")} to="/problemset/all">Problems</Link>
                    <Link className={getActiveTab("/contest")} to="/contest">Contest</Link>
                    <Link className={getActiveTab("/discuss")} to="/discuss">Discuss</Link>
                    <Link className={getActiveTab("/interview")} to="/interview">Interview</Link>
                </div>
                <div className='header__navRight'>
                    <Link className='signup-login' to="/signup">Register</Link>
                    <span>or</span>
                    <Link className='signup-login' to="/login">Sign in</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header