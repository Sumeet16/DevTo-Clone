import React, { useState } from 'react';
import {FaDev} from 'react-icons/fa';
import {BiMessageRoundedCheck} from 'react-icons/bi';
import {RiNotificationLine} from 'react-icons/ri';
import {FiSearch} from 'react-icons/fi';

const Navigator = (props) => {
    const state = useState();
    const [showMenu, setshowMenu] = useState(false);

    const toggle = () => {
        setshowMenu(!showMenu);
    }

    return (
        <header className='header'>
            <div className="headerContainer">
                <div className="headerContainer__hamburgerMenu" onClick={()=>{
                    props.openMenu()
                }}></div>
                <a href="#" className="headerContainer__logo">
                    <FaDev size='3.25rem'/>
                </a>

                <div className="headerContainer__searchBox">
                    <form>
                        <input type="text" name="imp" placeholder='Search...' aria-label='search' />
                    </form>
                </div>

                <div className="headerContainer__right">
                    <button>Write a post</button>
                    <i className="hidden-search">
                        <FiSearch/>
                    </i>
                    <i>
                        <BiMessageRoundedCheck/>
                    </i>
                    <i>
                        <RiNotificationLine/>
                    </i>

                    <span onClick={toggle}>
                        <img src="https://picsum.photos/200" alt="profile-pic" className="img"/>
                    </span>

                    <div className={showMenu ? 'dropdown-menu' : 'dropdown-menu-close'}>
                        <ul>
                            <li onClick={toggle}>
                                <a href="/profile">
                                    <div className="u-name">CodeBox</div>
                                </a>
                                <small className='u-name-id'>@codebox</small>
                            </li>

                            <li onClick={toggle}>
                                <a href="/dashboard">Dashboard</a>
                            </li>
                            <li onClick={toggle}>
                                <a href="/post">Write a post</a>
                            </li>
                            <li onClick={toggle}>
                                <a href="/list">Reading list</a>
                            </li>
                            <li onClick={toggle}>
                                <a href="/setting">Setting</a>
                            </li>
                            <li onClick={toggle}>
                                <a href="/signout">Signout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navigator
