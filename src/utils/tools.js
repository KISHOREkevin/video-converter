import { v4 as uuidv4 } from "uuid"
const tools=[
  {
    id:uuidv4(),
    name:"Video Compressor",
    desc:"Compress video size",
    link:"/video-compress"
  },
  {
    id:uuidv4(),
    name:"Video Resolution Changer",
    desc:"Change resolution of the videos",
    link:"/video-resolution"
  },
  {
    id:uuidv4(),
    name:"Video Format Changer",
    desc:"Change the format of the video files",
    link:"/video-format-changer"
  },
  {
    id:uuidv4(),
    name:"Audio Extractor",
    desc:"Extract audio from the video",
    link:"/video-audio-extract"
  },
  {
    id:uuidv4(),
    name:"Gif Maker",
    desc:"Make gif from video",
    link:"/video-gif"
  },
  {
    id:uuidv4(),
    name:"Video Trimmer",
    desc:"Trim the videos",
    link:"/video-trim"
  },
  {
    id:uuidv4(),
    name:"Add Audio",
    desc:"Add audio to the video",
    link:"/video-add-audio"
  },
  {
    id:uuidv4(),
    name:"Mute Audio",
    desc:"Remove audio in videos",
    link:"/video-mute"
  }, 
  {
    id:uuidv4(),
    name:"Frame Rate Changer",
    desc:"Change frame rate of the video",
    link:"/video-frame-rate"
  },
  {
    id:uuidv4(),
    name:"Video Greyscaler",
    desc:"Turen video to black and white",
    link:"/video-gray-scale"
  }
]

export default tools;
