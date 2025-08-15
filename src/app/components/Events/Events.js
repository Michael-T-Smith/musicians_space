import Image from 'next/image'
import events from '../../../../public/assets/data/events.json'

export default function Events(){
    const prefix = process.env.NODE_ENV === 'production' ? '/<musicians_space>' : '';

    let map = {
        "Darkoh_Live": `${prefix}/assets/images/Events/2025/Darkoh_Live.jpeg`,
        "Iron_Verse": `${prefix}/assets/images/Events/2025/Iron_Verse.jpeg`,
        "Detroit_Venue": `${prefix}/assets/images/Events/2025/Darkoh_Skull_Live.jpeg`,
    };
    return(
        <div id="events" className="m-2 pr-2 pl-2">
            <div className="flex justify-center">
                <h1 className="text-4xl text-white">Events</h1>
            </div>
            <div className='grid grid-flow-col auto-cols-max gap-4 overflow-x-auto'>
                {events.map((event, index) => (
                    <div key={index} >
                        <div>
                            <div className='relative w-[250px] h-[250px] md:h-[400px] md:w-[400px] lg:h-[550px] lg:w-[600px]'>
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
                                <a href={event.ticket_url}><p className='text-blue-400'>{event.ticket_url ? "Tickets Available Here!" : "Sold Out"}</p></a>
                            </div>
                        </div>
                    </div>
                ))}
           </div>
        </div>
    )
}