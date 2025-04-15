import React, { useState } from 'react'
import ffmpegLoad from '../../utils/loader.js';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import Loading from '../loading/Loading.jsx';
import { fetchFile } from '@ffmpeg/util';

const Resolution = () => {
  let [video, setVideo] = useState({});
  let [videoUrl, setVideoUrl] = useState("");
  let [resolution,setResolution] = useState(1080);
  let [loading,setLoading] = useState(false);
  let [progress,setProgress]= useState(0);
  let [outputVideo,setOutputVideo] = useState("");
  let ffmpeg = new FFmpeg();
  let handleChange = (e) => {
    let file = e.target.files[0];
    setVideo(file);
    let url = URL.createObjectURL(file);
    setVideoUrl(url);

  }

  let resolutionChanger= async(res)=>{
    setLoading(true);
    await ffmpegLoad(ffmpeg);
    ffmpeg.on("progress",({progress,time})=>{
      setProgress(Math.floor(progress*100))
    })
    await ffmpeg.writeFile(video.name,await fetchFile(video));
    let fileType = video.type.split("/")[1];
    switch (res) {
      case 1080:
        await ffmpeg.exec(["-i",video.name,"-s","1920x1080","-vcodec","libx264","-preset","fast","-crf","28","-acodec","copy",`output.${fileType}`]); 
        break;
      case 720:
        await ffmpeg.exec(["-i",video.name,"-s","1280x720","-vcodec","libx264","-preset","fast","-crf","28","-acodec","copy",`output.${fileType}`]);
        break;
      case 480:
        await ffmpeg.exec(["-i",video.name,"-s","854x480","-vcodec","libx264","-preset","fast","-crf","28","-acodec","copy",`output.${fileType}`]);
        break;
      case 360:
        await ffmpeg.exec(["-i",video.name,"-s","640x360","-vcodec","libx264","-preset","fast","-crf","28","-acodec","copy",`output.${fileType}`]);
      default:
        break;
    }
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
      {outputVideo && <h1>Original Video</h1>}
        {videoUrl && <video width={500} src={videoUrl} controls></video>}
        <label>Upload file</label><br />
        <input onChange={handleChange} accept='video/*' className='border w-full border-black p-3 rounded-md cursor-pointer' type="file" /><br />
    {videoUrl && <>
    <label>Choose Resolution</label><br />
        <select onChange={(e)=>setResolution(Number(e.target.value))} className='border border-black p-3 rounded-md cursor-pointer w-full'>
          <option value="1080">1080p</option>
          <option value="720">720p</option>
          <option value="480">480p</option>
          <option value="360">360p</option>
        </select>
        <button onClick={()=>resolutionChanger(resolution)} className='bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none '>Change</button>
    </>}
    {outputVideo && <h1>Converted Video</h1>}
    {outputVideo &&  <video width={500} src={outputVideo} controls></video>}
    {outputVideo && <a className='inline-block text-center bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none ' href={outputVideo} download>Download</a>}

      </div>
    </div>

  )
}

export default Resolution
