import { toBlobURL } from "@ffmpeg/util";

const ffmpegLoad = async (ffmpeg) => {
    const baseurl = "https://unpkg.com/@ffmpeg/core@0.12.10/dist/esm";
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseurl}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseurl}/ffmpeg-core.wasm`, 'application/wasm'),
    })


}

export default ffmpegLoad;
