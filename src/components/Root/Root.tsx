import React from 'react';
import { Outlet } from "react-router-dom";
import Logs from '../Logs/Logs';
import Header from '../Header/Header';

function Root() {
  return (
    <div className="root">
      <div className='container'>
        <Header />
        <Outlet />
        <Logs />
      </div>
    </div>
  );
}

export default Root;
