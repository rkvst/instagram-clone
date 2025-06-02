import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate();

    const navItemClass = 'flex items-center gap-2 p-2 rounded hover:bg-gray-300 cursor-pointer transition';

    return (
        <div className='hidden sm:flex flex-col w-64 h-screen justify-between p-4'>
            {/* Top Section */}
            <div className='flex flex-col gap-3'>
                <img className='w-[100px]' src='/assets/images.png' alt='Logo' />
                
                <div className={navItemClass}>
                    <i className='bx bx-home'></i> <span>Home</span>
                </div>
                <div className={navItemClass}>
                    <i className='bx bx-search-alt'></i> <span>Search</span>
                </div>
                <div className={navItemClass}>
                    <i className='bx bx-compass'></i> <span>Explore</span>
                </div>
                <div className={navItemClass}>
                    <i className='bx bx-movie-play'></i> <span>Reels</span>
                </div>
                <div className={navItemClass}>
                    <i className='bx bxs-message-rounded'></i> <span>Messages</span>
                </div>
                <div className={navItemClass}>
                    <i className='bx bx-heart'></i> <span>Notifications</span>
                </div>
                <div className={navItemClass}>
                    <i className='bx bx-plus-circle'></i> <span>Create</span>
                </div>
                <div
                    className={navItemClass}
                    onClick={() => {
                        navigate('/profile');
                    }}
                >
                    <i className='bx bx-user-circle'></i> <span>Profile</span>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='flex flex-col gap-3'>
                <div className={navItemClass}>
                    <img className='w-[17px]' src='/assets/threads.png' alt='Threads' />
                    <span>Threads</span>
                </div>
                <div className={navItemClass}>
                    <i className='bx bx-caret-down-circle'></i>
                    <span>More</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
