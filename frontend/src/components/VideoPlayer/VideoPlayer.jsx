import React from 'react';
import ReactPlayer from 'react-player/youtube';


const VideoPlayer = (props) => {

    return ( 
        // <div>
        //     <h3>WELCOME!</h3>
        //     <ReactPlayer url='https://www.youtube.com/watch?v=jc8MENSC-l8' />
        // </div>
        <div>
            <h3 className='welcome' >WELCOME!</h3>
            <iframe width='600' height='500' src='https://www.youtube.com/embed/jc8MENSC-l8' frameBorder='0' ></iframe>
        </div>

    );
}
 
export default VideoPlayer;