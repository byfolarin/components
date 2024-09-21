import React from 'react'

const PricingCards = () => {

    const pricingtype = [
        { title: "Project Completed", description: "Over 200 successful projects completed, showcasing our extensive experience and portfolio." },
        { title: "Interior Design", description: "Transforming spaces with innovative and personalized interior design solutions."},
        { title: "Space Survey", description: "Comprehensive space analysis to optimize functionality and aesthetics."},
        { title: "3D Visualization", description: "Bringing ideas to life with stunning 3D renderings and walkthroughs."},
        { title: "Renovation", description: "Expertly updating and modernizing existing spaces for enhanced living and working."},
        { title: "Consultation", description: "Professional advice and guidance for all your design and architectural needs." }
      ]

      const pricingdetails = [
        { title: "Project Completed", description: "Over 200 successful projects completed, showcasing our extensive experience and portfolio." },
        { title: "Interior Design", description: "Transforming spaces with innovative and personalized interior design solutions."},
        { title: "Space Survey", description: "Comprehensive space analysis to optimize functionality and aesthetics."},
        { title: "3D Visualization", description: "Bringing ideas to life with stunning 3D renderings and walkthroughs."},
        { title: "Renovation", description: "Expertly updating and modernizing existing spaces for enhanced living and working."},
        { title: "Consultation", description: "Professional advice and guidance for all your design and architectural needs." }
      ]

  return (

        <div className='font-interTight mx-auto mt-8 flex justify-center gap-4 '>


                <div className='flex flex-col gap-4 w-[400px] '>

                    <div className='py-[20px] px-8  rounded-3xl border border-white'>
                        <h2 className='text-2xl font-bold'>Starter</h2>
                        <p className='text-sm'>Best for personal use & for your next project.</p>
                    </div> 

                    <div className='rounded-3xl border border-white p-2'>
                      <div className=' rounded-2xl border border-white p-2'>
                        <div>
                            <span className='text-sm py-1 px-2 bg-black text-white rounded-[8px]'>Most Popular</span> 
                        </div>

                    <div className='flex flex-col gap-[32px]'>

                        <div>     
                            <div>
                              <h1>
                                 <span className='text-[96px] leading-tight font-semibold tracking-tighter'><span className='text-[40px]'>$</span>99</span>/month
                              </h1>
                            </div>

                            <div>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Diam ut enim enim risus dictum neque mi. Cursus tellus ullamcorper ut duis quisque. </p>
                            </div>
                        </div>


                         <button className='w-full bg-black text-white py-3 rounded-[12px]'>
                             Get started
                         </button>

                   </div>


                 
                </div>

                     <div className='pl-4 py-4'>
                        <ul className='text-sm text-[#757575] flex flex-col gap-2'>
                            <li>Individual configuration</li> 
                            <li>No setup, or hidden fees</li> 
                            <li>Team size: 1 developer</li> 
                            <li>Premium support: 6 months</li> 
                            <li>Free updates: 6 months</li> 
                        </ul>
                   </div>

            </div>
                    
      </div>


    
        
    </div>
  )
}

export default PricingCards
