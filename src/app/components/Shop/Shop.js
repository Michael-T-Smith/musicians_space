import Image from 'next/image';
import items from '../../../../public/assets/data/shop'
import shirt from '../../../../public/assets/images/Merch/DD_Black_Shirt.png'
import necklace from '../../../../public/assets/images/Merch/DD_Necklace.png'


export default function Shop() {
    let product_images = [necklace, shirt];

    return (
        <div id='shop' className='space-y-4 w-[350px] ml-auto mr-auto'>
            <div className="flex justify-center">
                <h1 className="text-4xl text-white">Merch</h1>
            </div>
            {items.map((items, index) => (
                <div key={index} className='border-1 rounded-lg mr-2 ml-2'>
                    <div className='relative h-[250px] rounded-t-lg border-1 bg-black'>
                        <Image fill src={product_images[index]} alt={"Product"} />
                    </div>
                    <div className='pr-2 pl-2'>
                        <p className='text-xl text-white'>{items.name}</p>
                        <p className='text-sm text-white'>{items.description}</p>
                        <p className='text-md text-white'>${items.price}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div className="border-1 bg-orange-400 border-yellow-600 p-3">
                            <button className='text-white'>Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}