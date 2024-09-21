import React from 'react'
import Timer from '../assets/timer-start.svg'

const PricingCards = () => {



  return (
    <div className='font-interTight mx-auto mt-8 flex justify-center gap-4'>
      <div className='flex flex-col gap-4 w-[400px]'>


            <div className='py-[20px] px-8 rounded-3xl border bg-[#F2F2F2] border-white'>
                <div className='flex gap-2 bg-transparent items-center'>
                    <img src={Timer} alt="" className='bg-transparent w-[24px] h-[24px]'  />
                    <h2 className='text-2xl font-bold bg-transparent'>Starter</h2>          
                </div>
                <p className='text-sm bg-transparent'>Best for personal use & for your next project.</p> 
            </div>

        <div className='rounded-3xl border border-white bg-[#F2F2F2] p-2'>
          <div className='rounded-2xl border border-white p-2 bg-transparent'>
            <div>
              <span className='text-sm py-1 px-2 bg-black text-white rounded-[8px]'>Most Popular</span>
            </div>

            <div className='flex flex-col gap-[32px] bg-transparent'>
              <div>
                <h1>
                  <span className='text-[96px] leading-tight font-semibold tracking-tighter'>
                    <span className='text-[40px]'>$</span>99
                  </span>
                  /month
                </h1>
                <p className='text-sm '>Lorem ipsum dolor sit amet consectetur. Diam ut enim enim risus dictum neque mi. Cursus tellus ullamcorper ut duis quisque.</p>
              </div>

              <button className='w-full bg-black text-white py-3 rounded-[12px]'>
                Get started
              </button>
            </div>
          </div>

          <div className='pl-4 py-4 bg-transparent '>
            <ul className='text-sm text-[#757575] bg-transparent flex flex-col gap-2'>
              <li>Individual configuration</li>
              <li>No setup, or hidden fees</li>
              <li>Team size: 1 developer</li>
              <li>Premium support: 6 months</li>
              <li>Free updates: 6 months</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PricingCards
