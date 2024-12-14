import React from 'react'
import MyBook from './Component/MyBook'
import BgTexture  from './assets/brown-wooden-flooring.jpg'

function App() {
 const BgTextureStyle ={
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
 }
  return (
    <div style={BgTextureStyle} className='w-full h-full flex justify-center items-center'>
      <MyBook/>
    </div>
  )
}

export default App
