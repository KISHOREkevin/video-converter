import React, { useState } from 'react'
import Loading from '../loading/Loading';
import ffmpegLoad from '../../utils/loader';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

const Extractor = () => {
  let [video,setVideo] = useState({});
  let [videoSrc,setVideoSrc]=useState("");
  let [format,setFormat]=useState("mp3");
  let [loading,setLoading]=useState(false);
  let [progress,setProgress]= useState(0);
  let [outputVideo,setOutputVideo]=useState("");
  let ffmpeg=new FFmpeg();
  let handleChange = (e)=>{
    let file = e.target.files[0];
    setVideo(file);
    let url = URL.createObjectURL(file);
    setVideoSrc(url);
  }
  
  let extractAudio = async (fmt)=>{
    setLoading(true);
    await ffmpegLoad(ffmpeg);
    ffmpeg.on("progress",({progress,time})=>{
      setProgress(Math.floor(progress*100))
    })
    await ffmpeg.writeFile(video.name,await fetchFile(video));
    await ffmpeg.exec(["-i",video.name,`output.${fmt}`]);
    let data = await ffmpeg.readFile(`output.${fmt}`);
    let url = URL.createObjectURL(new Blob([data],{type:`audio/${fmt}`}));
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
       
    {videoSrc && <>
    <label>Choose format</label><br/>
        <select onChange={(e)=>setFormat(e.target.value)} className='border border-black p-3 rounded-md cursor-pointer w-full'>
          <option value="mp3">MP3</option>
          <option value="wac">WAC</option>
          <option value="aac">AAC</option>
          <option value="flac">FLAC</option>
        </select>    
    <button onClick={()=>extractAudio(format)} className='bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none '>Extract</button>
    </>}
    {outputVideo &&  <audio className='w-full' src={outputVideo} controls></audio>}
    {outputVideo && <a className='inline-block text-center bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none ' href={outputVideo} download>Download</a>}
    </div>
    </div>

  )
}

export default Extractor
