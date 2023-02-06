import React from 'react';
import '../styles/Header.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import Search from './Search';

const Header = () => {
    return (
        <div className='header-main'>
            <div className="flex flex-col">
                <div className="md:border-b py-2">
                    <div className="container mx-auto">
                        <div className="flex justify-between gap-2">
                            <Link to="/" className='logo'><img className="w-32 ml-2" src={logo} alt="Logo" /></Link>
                            <Search/>
                            <nav>
                                <ul className="hidden md:flex">
                                    <li className="float-left"><Link to="/ayuda">Ayuda</Link></li>
                                    <li className="float-left"><Link to="/">Log In / Sign Up</Link></li>
                                    <li className="float-left"><Link to="/contact" className='descarga_la_app'>Descarga la app</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header