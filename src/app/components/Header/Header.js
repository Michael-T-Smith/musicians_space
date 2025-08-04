'use client'
import Image from 'next/image'
import logo2 from '../../../../public/assets/logos/danni_darkoh_full.svg'
import logo from '../../../../public/assets/logos/DD.svg'
import { useEffect, useState } from 'react'

export default function Header(){
    let [openNav, setOpenNav] = useState(false);

    const expandNav = () => {
        setOpenNav(!openNav);
    }

    useEffect(() => {

    }, [openNav]);

    return (
        <div className="bg-red-900 h-[65px]">
            <div className="flex p-3">
                <div className="w-1/3">
                    <div className="md:hidden flex" >
                        <svg onClick={() => expandNav()} aria-hidden="true" focusable="false" role="presentation" className="icon icon-hamburger pt-3 pl-3" fill="none" viewBox="0 0 24 24" height={50}>
					        <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="#efefef"></path>
				        </svg>
                    </div>
                    <div className={`${openNav ? "absolute" : "hidden"} w-[96%] h-[70vh] bg-red-800 top-[65px] left-0 z-3`}>
                        <div className='pl-4 pt-8'>
                            <ul className='space-y-4 text-2xl text-white'>
                                <li><a href="#shop">Shop</a></li>
                                <li><a href="#music">Music</a></li>
                                <li>Videos</li>
                                <li><a href="#events">Events</a></li>
                                <li>Join Email List</li>
                            </ul>
                        </div>
                    </div>    
                    <div className="xs:hidden md:block">
                        <ul className="flex space-x-4">
                            <li>Shop</li>
                            <li>Music</li>
                            <li>Videos</li>
                            <li>Events</li>
                            <li>Join Email List</li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/3 flex justify-center">
                    <Image height={30} className='invert' src={logo} alt='Danni Darko DD'/>
                </div>
                <div className="w-1/3 flex justify-end">
                    <Image height={50} src={logo2} alt="Danni Darkoh Logo" />
                </div>
            </div>
        </div>
    )
}