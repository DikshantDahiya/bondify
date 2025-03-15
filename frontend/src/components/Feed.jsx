import React from 'react'
import Posts from './Posts'
import backgroundImage from '@/images/bgpost3.jpg'
const Feed = () => {
  return (
    <div className='flex-1 flex flex-col pr-8 items-center relative'>
      
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', // Ensures the whole background is visible
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // Makes it static
          opacity: 0.35, // 50% transparency
          zIndex: -1, // Push background behind posts
        }}
      ></div>

     
      <Posts />
    </div>
  )
}

export default Feed