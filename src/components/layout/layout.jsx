import React from 'react';
import './layout.scss';
import { Outlet, useParams } from 'react-router-dom';
import Header from '../header/header';

const Layout = () => {
  return (
    <div className='layout'>
        <Header/>
        <div className='content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout;