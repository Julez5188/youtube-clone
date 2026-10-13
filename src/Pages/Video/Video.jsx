import React from "react";
import './video.css';
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {

  const {videoId, categoryId} = useParams();
  
  return (
    <div className='play-container'>
      <PlayVideo/>
      <Recommended/>
    </div>
  );
}

export default Video;