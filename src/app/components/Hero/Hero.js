'use client'
import './Hero.modules.css'
import Image from 'next/image'
import ug_promotion from '../../../../public/assets/images/Merch/Underground_Promotional.jpeg'
import ds_promotion from '../../../../public/assets/images/Merch/Desert_Promotional_Labled.jpeg'
import { useEffect, useState } from 'react'

export default function Hero() {
    let images = [ug_promotion, ds_promotion];
    let [index, setIndex] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            if(index >= (images.length - 1)) index = 0;
            else index = index + 1;
            setIndex(index)
        }, 5000);
        return () => clearInterval(id);
    }, [])

    return (
        <div className='bg-red-900'>
            <div className='flex justify-center w-screen'>
                <Image priority style={{objectFit: "contain"}} src={images[index]} alt="Promotional Image" />                
            </div>
            <div className='bg-red-900 pt-2 pb-2 flex justify-center space-x-2'>
                {images.map((item, i) => <div key={i} className={`${i === index ? "activeCircle" : "circle"}`} ></div>)}
            </div>
        </div>
    )
}