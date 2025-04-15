import React, { useState,useEffect } from 'react'
import { FFmpeg } from '@ffmpeg/ffmpeg';
import ffmpegLoad from '../../utils/loader.js';
import Loading from '../loading/Loading';
import { fetchFile } from '@ffmpeg/util';
import { Link } from 'react-router-dom';
const Compressor = () => {
  let [video,setVideo] = useState({});
  let [videoSrc,setVideoSrc] =useState("");
  let [outputVideo,setOutputVideo] = useState("");
  let [loading,setLoading] = useState(false); 
  let [progress,setProgress] = useState(0);
  let ffmpeg = new FFmpeg();
  
   
  
  const handleChange=  (e)=>{
    setVideo(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]) ;
    setVideoSrc(url)
  }
  
  const compressVideo=async()=>{
    setLoading(true);
    await ffmpegLoad(ffmpeg);
    ffmpeg.on("progress",({progress,time})=>{
      setProgress(Math.floor(progress*100))
    })
    await ffmpeg.writeFile(video.name,await fetchFile(video));
    let fileType = video.type.split("/")[1]; 
    await ffmpeg.exec(["-i",video.name,"-vcodec","libx264","-crf","28","-preset","fast",`output.${fileType}`]);
    const data = await ffmpeg.readFile(`output.${fileType}`);
    let url = URL.createObjectURL(new Blob([data],{type:video.type}));
    setOutputVideo(url);
    setLoading(false);
  }
  
  if(loading){

    return <Loading progress={progress} />
  }
  return (

    <div className=' mt-2 w-[100vw] flex justify-center items-center  '>
      <div className='border border-black shadow-lg rounded-md p-10 '>
    {outputVideo && <h1>Original Video</h1> }
    { videoSrc &&  <video width={500} src={videoSrc} controls></video>}
        <label>Upload file</label><br/>
        <input onChange={handleChange} accept='video/*' className='border border-black p-3 rounded-md cursor-pointer w-full' type="file" /><br/>
    {videoSrc && <button onClick={compressVideo} className='bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none '>Compress</button> }
    {outputVideo && <h1>Converted Video</h1>}
    {outputVideo &&  <video width={500} src={outputVideo} controls></video>}
    {outputVideo && <a className='inline-block text-center bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none ' href={outputVideo} download>Download</a>}
    </div>
    </div>
  )
}

export default Compressor
