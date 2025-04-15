import React, { useState } from 'react'
import Loading from '../loading/Loading';
import ffmpegLoad from '../../utils/loader';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

const Gifmaker = () => {
  let [video,setVideo]=useState({});
  let [videoSrc,setVideoSrc] = useState("");
  let [loading,setLoading]=useState(false);
  let [progress,setProgress]=useState(0);
  let [outputVideo,setOutputVideo]=useState("");
  let ffmpeg=new FFmpeg();
  let handleChange = (e)=>{
    let file = e.target.files[0];
    setVideo(file);
    let url=URL.createObjectURL(file);
    setVideoSrc(url);
  }

  let gifMaker = async()=>{
    setLoading(true);
    await ffmpegLoad(ffmpeg);
    ffmpeg.on("progress",({progress,time})=>{
      setProgress(Math.floor(progress*100))
    })
    await ffmpeg.writeFile(video.name,await fetchFile(video));
    await ffmpeg.exec(["-i",video.name,"-vf","fps=10,scale=320:-1:flags=lanczos","-loop","0",`output.gif`]);
    let data = await ffmpeg.readFile("output.gif");
    let url = URL.createObjectURL(new Blob([data],{type:"image/gif"}));
    setOutputVideo(url);
    setLoading(false);
  }
  if(loading){
    return <Loading progress={progress} />
  }
  return (
    <div className='mt-3 w-[100vw] flex justify-center items-center'>
      <div className='border border-black shadow-lg rounded-md p-10'>
    {videoSrc && <video width={500} src={videoSrc} controls></video>}


        <label>Upload file</label><br/>
        <input onChange={handleChange} accept='video/*' className='border w-full border-black p-3 rounded-md cursor-pointer' type="file" /><br/>
           
    {videoSrc && <button onClick={gifMaker} className='bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none '>Convert</button>}
    {outputVideo &&  <img width={500} src={outputVideo}></img> }
    {outputVideo && <a className='inline-block text-center bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none ' href={outputVideo} download>Download</a>}
    </div>
    </div>
  )
}

export default Gifmaker
