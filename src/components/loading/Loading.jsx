import React from 'react';

function Loading({progress}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    <h1 className='text-center'>Processing takes time , due to your device performance...</h1>
    {progress && <h1 >{`Please wait : ${progress}%`}</h1>}
    
    </div>
  );
}

export default Loading;

