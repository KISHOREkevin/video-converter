import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Compressor from './components/compress/Compressor'
import Resolution from './components/resolution/Resolution'
import Format from './components/format/Format'
import Extractor from './components/extractor/Extractor'
import Gifmaker from './components/gifmaker/Gifmaker'
import Trim from './components/trim/Trim'
import AddAudio from './components/addaudio/AddAudio'
import Mute from './components/mute/Mute'
import Framerate from './components/framerate/Framerate'
import Grayscale from './components/grayscale/Grayscale'
import About from './components/home/About'
import Error404 from './components/error/Error404'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video-compress' element={<Compressor/>} />
        <Route path='/video-resolution' element={<Resolution/>} />
        <Route path='/video-format-changer' element={<Format/>} />
        <Route path='/video-audio-extract' element={<Extractor/>} />
        <Route path='/video-gif' element={<Gifmaker/>} />
        <Route path='/video-trim' element={<Trim/>} />
        <Route path='/video-add-audio' element={<AddAudio/>} />
        <Route path='/video-mute' element={<Mute/>} />
        <Route path='/video-frame-rate' element={<Framerate/>} />
        <Route path="/video-gray-scale" element={<Grayscale/>} />

        <Route path="/about" element={<About/>} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
