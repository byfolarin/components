import React from 'react'

const PricingCards = () => {

    const pricingdetails = [
        { title: "Project Completed", description: "Over 200 successful projects completed, showcasing our extensive experience and portfolio." },
        { title: "Interior Design", description: "Transforming spaces with innovative and personalized interior design solutions."},
        { title: "Space Survey", description: "Comprehensive space analysis to optimize functionality and aesthetics."},
        { title: "3D Visualization", description: "Bringing ideas to life with stunning 3D renderings and walkthroughs."},
        { title: "Renovation", description: "Expertly updating and modernizing existing spaces for enhanced living and working."},
        { title: "Consultation", description: "Professional advice and guidance for all your design and architectural needs." }
      ]

  return (
    <div className='text-black '>
             <div>
                {pricingdetails.map((i)=>{
                  <div>{i.title}</div> 
                })}
             </div>
    </div>
  )
}

export default PricingCards
