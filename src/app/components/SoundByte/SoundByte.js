export default function SoundByte(){
    return (
        <div id="music" className="space-y-4">
            <div className="flex justify-center">
                <h1 className="text-4xl text-white">Listen Free Now!</h1>
            </div>
            <iframe width="96%" style={{marginRight: "4px", marginLeft: "4px"}} height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925834630&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe>
            <iframe width="96%" height="500px" style={{marginRight: "4px", marginLeft: "4px"}} scrolling="no" frameBorder="no" allow="autoplay" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/cant-tell-me-sh-t-single/1753735866"></iframe>        
        </div>
    )
}