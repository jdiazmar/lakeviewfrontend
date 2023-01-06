import React from 'react';
import ReactPlayer from 'react-player/youtube';

const WeeklyVideo = (props) => {
    return ( 
        // <div>
        //     <h2>Week 1 of: I Wonder</h2>
        //     <ReactPlayer url='https://www.youtube.com/watch?v=0UX-rKpltrg' />
        // </div>
        <div>
            <h2 className='welcome' >Week 1 of: iWonder</h2>
            <iframe width='600' height='500' src="https://www.youtube.com/embed/0UX-rKpltrg" frameBorder='0' ></iframe>
        </div>
     );
}
 
export default WeeklyVideo;