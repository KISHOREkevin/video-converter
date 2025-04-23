import React from "react"
import { Link } from "react-router-dom"

const Error404 = () => {
  return (
     <div className="flex flex-col items-center justify-center h-screen bg-white text-green-600">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <Link
        to={"/"}
        className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
      >
        Go Home
      </Link>
    </div>
  )
}

export default Error404
