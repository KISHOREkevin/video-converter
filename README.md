# Video Converter

![video-converter](https://github.com/user-attachments/assets/b6c68929-da3f-4f86-8738-d6e9168f92ff)
![project2](https://github.com/user-attachments/assets/8b0182e7-3948-41e1-a69e-d383be1b6eb2)

- This is a lightweight and privacy-friendly video converter that runs entirely in the browser. Leveraging `ffmpeg.wasm`, it supports multiple video formats and performs conversions without sending files to a remote server.
- Whether you're looking to convert `.mp4` to `.webm`, `.avi` to `.mp4`, or other formats, this tool offers a simple and intuitive interface to get the job done quickly and securely.
- Self hostable platform.

## Built with technologies such as :
* React
* Vite
* Tailwind CSS
* FFmpeg
  
# Project Usage (online)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d64e282d-1f9e-4242-8a67-a115b70e06ae/deploy-status)](https://app.netlify.com/sites/video-converters/deploys)
* Live demo - https://video-converters.netlify.app/

# Self-Host ( Manual )
```
git clone git@github.com:KISHOREkevin/video-converter.git
cd video-converter
npm install
npm run dev
```
* If you want to change port , open vite.config,js
  ```
  export default defineConfig({
    plugins: [react(),tailwindcss()],
    optimizeDeps: {
      exclude: ['@ffmpeg/ffmpeg'],
    }
    server:{
      port:<your-port>
    }
  })
  ```
* Inside the `defineConfig` function add the server option with your preferred `port`.
* Open browser and go to http://localhost:[your-port]/

# Self-Host (docker)
* Run this docker statement:
  ```
  docker run -d \
    -p <Your port>:3000  \
    --rm \
    --restart unless-stopped\
    --name video-converter  \
    kishorekevin/video-converter:latest
  ```
* Open browser and go to http://localhost:[your-port]/

# Self-Host (docker compose)
* Download this docker compose file
  [docker-compose.yaml](https://raw.githubusercontent.com/KISHOREkevin/video-converter/refs/heads/main/docker-compose.yaml)
* If you want to change port , open the docker compose file and change the post section as given below
  ```
  ports:
      - <Your port>:3000
  ```
* Run this compose script.
  ```
   docker compose -p video-converter -f docker-compose.yaml up -d
  ```
* Open browser and go to http://localhost:[your-port]/

# License
This project is licensed under the MIT License.

# Acknowledgements
- [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

# Author
Kishore Kevin   
[Portfolio](https://kishorekevin.netlify.app/) | [github](https://github.com/KISHOREkevin/) | [LinkedIn](https://www.linkedin.com/in/kishore-kevin-a5a873290) | 
[Youtube Channel](https://youtube.com/@codex_arch)

 
### Let me know if you want to include:
- Contribution guidelines
- A "To-do" or "Future Features" section  
#### I can add that as well!
