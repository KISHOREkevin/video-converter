import React, { useState } from 'react'
import Loading from '../loading/Loading';
import ffmpegLoad from '../../utils/loader';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

const Mute = () => {
  let [video,setVideo]=useState({});
  let [videoSrc,setVideoSrc]=useState("");
  let [loading,setLoading]=useState(false);
  let [progress,setProgress]=useState(0);
  let [outputVideo,setOutputVideo]=useState("");
  let ffmpeg = new FFmpeg();
  let handleChange=(e)=>{
    let file=e.target.files[0];
    setVideo(file);
    let url = URL.createObjectURL(file);
    setVideoSrc(url);
  }
  
  let removeAudio = async ()=>{
    setLoading(true);
    await ffmpegLoad(ffmpeg);
    ffmpeg.on("progress",({progress,time})=>{
      setProgress(Math.floor(progress*100))
    })
    await ffmpeg.writeFile(video.name,await fetchFile(video));
    let fileType=video.type.split("/")[1];
    await ffmpeg.exec(["-i",video.name,"-vcodec","copy","-an",`output.${fileType}`]);
    let data = await ffmpeg.readFile(`output.${fileType}`);
    let url = URL.createObjectURL(new Blob([data],{type:video.type}));
    setOutputVideo(url);
    setLoading(false);

  }
  
  if(loading){
    return <Loading progress={progress} />
  }

  return (
    <div className='mt-3 w-[100vw] flex justify-center items-center'>
          <div className='border border-black shadow-lg rounded-md p-10'>
    {outputVideo && <h1>Original Video</h1> }
    {videoSrc && <video width={500} src={videoSrc} controls></video>}

        <label>Upload file</label><br/>
        <input onChange={handleChange} accept='video/*' className='border w-full border-black p-3 rounded-md cursor-pointer' type="file" /><br/>
            
    {videoSrc && <button onClick={removeAudio} className='bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none '>Remove audio</button>}
    {outputVideo && <h1>Converted Video</h1>}
    {outputVideo &&  <video width={500} src={outputVideo} controls></video>}
    {outputVideo && <a className='inline-block text-center bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none ' href={outputVideo} download>Download</a>}
    </div>
    </div>


  )
}

export default Mute
