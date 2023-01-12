import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='col-4'>
                    <img className='mb-2' src='https://c1.wallpaperflare.com/preview/916/460/15/dark-gloomy-books-pages.jpg' width={100} />
                </div>

                <div className='col-4'>
                    <h1 className='text-end mx-3'>LIBRARY</h1>
                </div>

            </div>
            <Outlet></Outlet>
        </>
    )
}

export default Navbar;