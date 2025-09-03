import Image from 'next/image'
import events from '../../../../public/assets/data/events.json'
import image1 from '../../../../public/assets/images/Events/2025/Darkoh_Live.jpeg'
import image2 from '../../../../public/assets/images/Events/2025/Iron_Verse.jpeg'
import image3 from '../../../../public/assets/images/Events/2025/Darkoh_Skull_Live.jpeg'

export default function Events(){
    let map = {
        "Darkoh_Live": image1,
        "Iron_Verse": image2,
        "Detroit_Venue": image3,
    }

    return(
        <div id="events" className="m-2 pr-2 pl-2">
            <div className="flex justify-center">
                <h1 className="text-4xl text-white">Events</h1>
            </div>
            <div className='grid grid-flow-col auto-cols-max gap-4 overflow-x-auto'>
                {events.map((event, index) => (
                    <div key={index} >
                        <div>
                            <div className='relative w-[250px] h-[250px] md:h-[400px] md:w-[400px]'>
                                <Image fill src={map[event.image_url]} alt='Promotional Advertisement'/>
                            </div>
                            <div className='border-1 border-gray-400'>
                                <p className='text-gray-400 text-sm'>{event.date}</p>
                                <p className='text-lg text-white'>{event.venue}</p>
                                <div className='text-gray-400 text-xs flex space-x-1'>
                                    <p>{event.city},</p>
                                    <p>{event.country}</p>
                                </div>
                                <p className='text-gray-400 text-sm'>{event.notes}</p>
                                <button id="ticket-button">
                                    <p><a href={event.ticket_url ? event.ticket_url : ''}>{event.ticket_url ? "Tickets Available Here!" : "Sold Out..."}</a></p>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
           </div>
        </div>
    )
}