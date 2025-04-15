import React from 'react'

const About = () => {
  return (
    <div className="bg-white text-green-900 min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-green-800">About Our Video Converter</h1>

        <p className="text-lg mb-4">
          Our open-source <span className="font-semibold">Video Converter</span> is designed to help users seamlessly convert videos across formats while maintaining high quality.
          Whether you're converting for web, mobile, or archiving, this tool makes it easy and efficient.
        </p>

        <div className="bg-green-100 p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-3">✨ Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Fast & Reliable:</strong> Powered by FFmpeg and optimized algorithms.</li>
            <li><strong>Self-Hostable:</strong> Deploy it on your own server and control your video processing environment.</li>
            <li><strong>Licensing:</strong> MIT licensed, free for personal and commercial use.</li>
            <li><strong>Appraised for Efficiency:</strong> Designed with performance and ease of use in mind.</li>
            <li><strong>Supports Multiple Formats:</strong> MP4, AVI, MKV, MOV, WebM, and more.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">🔐 Licensing</h2>
          <p>
            This project is licensed under the <strong>MIT License</strong>, which means you can use, modify, and distribute it freely.
            We believe in freedom and open software for everyone.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">🧰 Self-Hosting</h2>
          <p>
            Host this tool on your own infrastructure with Docker or from source. Perfect for companies and devs who want full control.
            Setup is simple and documented.
          </p>
        </div>
<div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Note :</h2>
          <p> Our project runs in <b>client side</b> , hence <b>performance</b> depends on your <b>device and browser specifications</b> ... </p>
        </div>

        <div className="mt-8">
          <a
            href="https://github.com/your-username/video-converter" // change this link!
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            📎 Learn More on GitHub
          </a>
        </div>
          </div>
    </div>
  )
}

export default About
