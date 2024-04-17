import { Box, Container } from '@mui/material'
import React from 'react'
const HeroSection = () => {
  return (
    <Box  className='w-[100%] h-[90vh]  '>
        <div className='flex p-10 '>
        <div className='px-10 text-left'>
        
            <h1 className=' text-2xl  md:text:4xl lg:text-6xl'>Small Changes make a big impact on children’s lives 
          <span>

                    <img className=' px-10 inline ' src="/images/heart_line.png" />
          </span>
          
            </h1>
        </div>
        <div className=' w-100'>
            <img className='w-[100%] h-[100%] ' src="/images/Hero_Section_Image.png" />
        </div>
        </div>
    </Box>
  )
}

export default HeroSection