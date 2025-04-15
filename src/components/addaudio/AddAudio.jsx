import React, { useState } from 'react'
import Loading from '../loading/Loading';
import ffmpegLoad from '../../utils/loader';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

const AddAudio = () => {
  let [video,setVideo]=useState({});
  let [videoSrc,setVideoSrc]=useState("");
  let [audio,setAudio]=useState({});
  let [audioSrc,setAudioSrc]=useState("");
  let [loading,setLoading]=useState(false);
  let [progress,setProgress]=useState(0);
  let [outputVideo,setOutputVideo]=useState("");

  let ffmpeg = new FFmpeg();

  let handleVideoChange=(e)=>{
    let file=e.target.files[0];
    setVideo(file);
    let url=URL.createObjectURL(file);
    setVideoSrc(url);
  }

  let handleAudioChange=(e)=>{
    let file=e.target.files[0];
    setAudio(file);
    let url=URL.createObjectURL(file);
    setAudioSrc(url);
  }
  
  let addAudio=async()=>{
    setLoading(true);
    await ffmpegLoad(ffmpeg);
    ffmpeg.on("progress",({progress,time})=>{
      setProgress(Math.floor(progress*100))
    })
    await ffmpeg.writeFile(video.name,await fetchFile(video));
    await ffmpeg.writeFile(audio.name,await fetchFile(audio));
    let fileType=video.type.split("/")[1];
    await ffmpeg.exec(["-stream_loop","-1","-i",audio.name,"-i",video.name,"-shortest","-vcodec","copy","-acodec","aac",`output.${fileType}`]);
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
      <div className='border  border-black shadow-lg rounded-md p-10'>
    {outputVideo && <h1>Original Video</h1> }
    {videoSrc &&  <video width={500} src={videoSrc} controls></video>}


        <label>Upload Video file</label><br />
        <input onChange={handleVideoChange} accept='video/*' className='border w-full border-black p-3 rounded-md cursor-pointer' type="file" /><br />
    {audioSrc && <audio className='w-full mt-3' src={audioSrc} controls ></audio>}
    { videoSrc && <>    
    <label>Upload Audio file</label><br/>
    <input onChange={handleAudioChange} accept='audio/*' className='border w-full border-black p-3 rounded-md cursor-pointer' type="file" /><br />

                <button onClick={addAudio} className='bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none '>Add Audio</button>
    </>}
{outputVideo && <h1>Converted Video</h1>}
    {outputVideo &&  <video width={500} src={outputVideo} controls></video>}
    {outputVideo && <a className='inline-block text-center bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none ' href={outputVideo} download>Download</a>}
      </div>
    </div>

  )
}

export default AddAudio
