import React from 'react'

function Heading({title, subtitle}) {
  return (
    <div className='flex flex-col justify-center items-center pt-5'>
      <h1 className=' inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-2 '>{title}</h1>
      <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
        {subtitle}
      </p>
    </div>
  )
}

export default Heading
