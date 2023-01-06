import React from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import HomePic1 from '../../components/HomePic1/HomePic1';
import HomePic2 from '../../components/HomePic2/HomePic2';
import NextStepsImg from '../../components/NextStepsImg/NextStepsImg';


const HomePage = () => {

  return ( 
  <div className="container">
      <div className='container-home'>
      <div>
              <VideoPlayer />
            </div>
            <div className="d-flex flex-column" >
              <div className="p-2" >
                  <a href='https://www.eventbrite.com/e/shft-student-conference-2023-tickets-466341318437' >
                    <HomePic1 />
                  </a>
              </div>
              <div className="p-2" >
                <HomePic2 />
              </div>
              <div className="p-2" >
                <NextStepsImg />
              </div>
            </div>
            </div>
          </div>

  );
};

export default HomePage;
