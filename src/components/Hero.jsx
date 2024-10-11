// import React from 'react'
// import Button from './button'
// import SectionWrapper from './SectionWrapper'

// export default function Hero() {
//   return (
    
//     <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center w-full max-w-[800px] mx-auto p-4'>
//     <div className='flex flex-col gap-4'>
//         <p>IT'S TIME TO GET</p>
//         <h1 className='uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>swolen<span className='text-blue-400'>normous</span></h1>
//     </div>
//     <p className='text-sm md:text-base font-light'>
//         I hereby acknowledge that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass monstrosity</span>, afflicted with severe body dysmorphia, unable to fit through doors.
//     </p>
// <Button func={() => {
//                 window.location.href = '#generate'
//             }} text={"Accept & Begin"}></Button>
// </div>


//   )
// }


import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET A</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>fitness<span className='text-blue-400'>coach</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>Before you start, reflect on your goals—whether it's gaining<span className='text-blue-400 font-medium'> strength, losing weight, or improving health.</span> he journey begins with your commitment, and we're here to guide you.<span className='text-blue-400 font-medium'><br/>Let's get started!</span></p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}