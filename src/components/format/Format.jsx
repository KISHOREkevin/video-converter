import React, { useState } from 'react'
import Loading from '../loading/Loading';
import ffmpegLoad from '../../utils/loader';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

const Format = () => {
  let [video, setVideo] = useState({});
  let [format, setFormat] = useState("mp4");
  let [videoSrc, setVideoSrc] = useState("");
  let [outputVideo, setOutputVideo] = useState("");
  let [loading, setLoading] = useState(false);
  let [progress, setProgress] = useState(0);
  let ffmpeg = new FFmpeg();
  let handleChange = (e) => {
    let file = e.target.files[0];
    setVideo(file);
    let url = URL.createObjectURL(file);
    setVideoSrc(url);
  }

  let videoFormatter = async (fmt) => {
    setLoading(true);
    await ffmpegLoad(ffmpeg);
    ffmpeg.on("progress", ({ progress, time }) => {
      setProgress(Math.floor(progress * 100))
    })
    await ffmpeg.writeFile(video.name, await fetchFile(video));
    await ffmpeg.exec(["-i", video.name, `output.${fmt}`]);
    let data = await ffmpeg.readFile(`output.${fmt}`);
    let url = URL.createObjectURL(new Blob([data], { type: `video/${fmt}` }));
    setOutputVideo(url);
    setLoading(false);
  }

  if (loading) {
    return <Loading progress={progress} />
  }

  return (
    <div className='mt-3 w-[100vw] flex justify-center items-center'>
      <div className='border border-black shadow-lg rounded-md p-10'>
        {outputVideo && <h1>Original Video</h1>}
        {videoSrc && <video width={500} src={videoSrc} controls></video>}


        <label>Upload file</label><br />
        <input onChange={handleChange} accept='video/*' className='border w-full border-black p-3 rounded-md cursor-pointer' type="file" /><br />
        {videoSrc && <>
          <label>Choose format</label><br />
          <select onChange={e => setFormat(e.target.value)} className='border border-black p-3 rounded-md cursor-pointer w-full'>
            <option value="mp4">MP4</option>
            <option value="avi">AVI</option>
            <option value="mkv">MKV</option>
            <option value="mov">MOV</option>
            <option value="webm">WebM</option>
            <option value="wmv">WMV</option>
            <option value="flv">FLV</option>
          </select>
          <button onClick={() => videoFormatter(format)} className='bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none '>Change</button>
        </>}
        {outputVideo && <h1>Converted Video</h1>}
        {outputVideo && <video width={500} src={outputVideo} controls></video>}
        {outputVideo && <a className='inline-block text-center bg-green-300 w-full p-3 my-2 shadow-md cursor-pointer active:shadow-none ' href={outputVideo} download>Download</a>}
      </div>
    </div>

  )
}

export default Format
