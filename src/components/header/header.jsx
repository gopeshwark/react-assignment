import React, { useContext } from 'react';
import './header.scss';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

const linkArr = [{
    id: 1,
    path: "/explore",
    title: "Explore"
}, {
    id: 2,
    path: "",
    title: "Problems"
}, {
    id: 3,
    path: "/contest",
    title: "Contest"
}, {
    id: 4,
    path: "/discuss",
    title: "Discuss"
}, {
    id: 5,
    path: "/interview",
    title: "Interview"
}]
const Header = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const params = useParams();

    const getActiveTab = (path) => {
        if (params?.['*'] === path) return "nav-items active";
        return "nav-items";
    }

    const handleLogout = async () => {
        try {
            await logout()
        } catch (err) {
            console.log(err);
        }
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
                    {!currentUser ? <><Link className='signup-login' to="/signup">Register</Link>
                        <span>or</span>
                        <Link className='signup-login' to="/login">Sign in</Link></>
                        : <>
                            <div className='login-details'>{currentUser}</div>
                            <button className='logout' onClick={handleLogout}>logout</button>
                        </>}
                </div>
            </nav>
        </header>
    )
}

export default Header