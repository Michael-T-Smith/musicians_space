export default function SoundByte(){

    let singles = [
        "https://embed.music.apple.com/us/album/toxic-lullaby-single/1616871872",
        "https://embed.music.apple.com/us/album/welcome-2-da-streetz-single/1626130826",
        "https://embed.music.apple.com/us/album/cant-tell-me-sh-t-single/1753735866"
    ]


    return (
        <div id="music" className="space-y-4 pr-4 pl-4">
            <div className="flex justify-center">
                <h1 className="text-4xl text-white">Listen Free Now!</h1>
            </div>            
            <div className='grid grid-flow-col gap-16 overflow-x-auto'>
                {singles.map((song, index) => (
                    <div key={index} >
                        <div>
                            <div className='relative w-[300px] h-[500px] md:h-[500px] md:w-[500px]'>
                                <iframe style={{margin: "auto", height: "100%", width: "100%"}} scrolling="no" frameBorder="no" allow="autoplay" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={song}></iframe>        
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}