import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { useSelector } from 'react-redux'
import { useNewsContext } from '../context/NewsContext';
import { FaSearch, FaSearchMinus } from 'react-icons/fa';

const Navbar = ({ className }) => {

    const [searchValue, setSearchvalue] = useState('');
    const { setNews, fetchNews } = useNewsContext();


    const handleSearch = async () => {
        if (!searchValue) return;
        const data = await fetchNews(`/everything?q=${searchValue}`)
        if (!data.articles) return;
        setNews(data.articles);
        setSearchvalue('');
    }



    return (
        <div className={`bg-base-200 w-full ${className}`}>
            <Wrapper>
                <div className="navbar shadow-sm max-w-300 mx-auto px-3 sm:px-6">

                    {/* Left Side */}
                    <div className="flex-1">
                        <a className="btn btn-ghost text-lg sm:text-xl bg-amber-300">
                            News-App
                        </a>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-2 sm:gap-4">

                        {/* Search Input */}
                        <input
                            // value={(e)=>e.target.value}
                            value={searchValue}
                            onChange={(e) => setSearchvalue(e.target.value)}
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 sm:w-40 md:w-56 lg:w-72"
                        />

                        <button onClick={() => handleSearch()}><FaSearch /></button>

                        {/* Notification Button */}
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>

                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Navbar

