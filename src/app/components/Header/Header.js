import Image from 'next/image'
import logo2 from '../../../../public/assets/logos/danni_darkoh_full.svg'
import logo from '../../../../public/assets/logos/DD.svg'
export default function Header(){
    return (
        <div className="bg-red-900 h-[65px]">
            <div className="flex p-3">
                <div className="w-1/3">
                    <div className="md:hidden flex ">
                        <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-hamburger pt-3 pl-3" fill="none" viewBox="0 0 24 24" height={50}>
					        <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="#efefef"></path>
				        </svg>
                    </div>
                    <div className="hidden">
                        <h1>!!!Hidden Zone!!!</h1>
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