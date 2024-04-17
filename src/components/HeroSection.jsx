import { Box, Button, Container } from '@mui/material'
import React from 'react'

const HeroSection = () => {
  return (
    <Box className='w-full h-[90vh]'>
      <div className='flex flex-col sm:flex-row gap-10 justify-between p-10 '>
        <div className='w-[100%] sm:w-[60%] flex flex-col gap-5  text-center sm:text-left'>
          <h1 className='text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold text-wrap break-normal '>
            Small Changes make a big impact on children’s Lives
          </h1>
          <p className='font-semibold text-sm  pr-0 sm:pr-40'>
          At our charity, we believe that every small contribution makes a big
         difference in changing the world for the better.
          </p>
          <button  className='w-[180px] h-[40px] flex items-center justify-center text-[#481E14]
          hover:text-[#FEFAF6] bg-[#FEFAF6] hover:bg-[#481E14]  rounded-lg font-semibold text-center px-10 py-4  ml-auto mr-auto sm:ml-0 sm:mr-0'>Donate now</button>
     

        </div>
        <div className='w-[100%] sm:w-[40%]'>
          <img className='w-full h-full' src="/images/Hero_Section_Image.png" alt="Hero Section Image" />
        </div>
      </div>
    </Box>
  )
}

export default HeroSection;
