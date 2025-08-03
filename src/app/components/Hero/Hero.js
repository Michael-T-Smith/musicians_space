'use client'
import Image from 'next/image'
import ug_promotion from '../../../../public/assets/images/Merch/Underground_Promotional.jpeg'
import ds_promotion from '../../../../public/assets/images/Merch/Desert_Promotional_Labled.jpeg'
import { useEffect, useState } from 'react'

export default function Hero(){
    const [image, setImage] = useState(ug_promotion);
    let [index, setIndex] = useState(0);
    useEffect(() => {
        const options = [ug_promotion, ds_promotion];
        setInterval(() => {
            if(index >= (options.length - 1)) setIndex(0);
            else setIndex(index + 1)
            setImage(options[index]);
        }, 5000)
    }, [index])

    return (
        <div>
            <div className="w-screen">
                <Image style={{height: "260px", objectFit: "cover" }} src={image} alt="Promotional Image" />
            </div>
        </div>
    )
}