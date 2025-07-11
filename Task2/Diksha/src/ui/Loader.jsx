import React from "react";

function Loader() {
  return (
    <div className='w-full bg-white flex items-center justify-center pt-20'>
      <div className="flex justify-center items-center gap-2">
        <div
          className="w-10 h-10 border-4 border-t-blue-500 rounded-full animate-spin"
          role="status"
          aria-label="Loading…"
        />
        <p className='text-2xl font-semibold text-gray-900'>Loading news....⌛</p>
      </div>
    </div>
  );
}

export default Loader;
