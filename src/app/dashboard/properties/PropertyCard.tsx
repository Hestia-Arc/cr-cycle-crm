import Image from 'next/image'
import React from 'react'
import home1 from "../../assets/crm-bg-home2.png"

function PropertyCard() {
  return (
    <div className='min-h-[150px] bg-[#f2f2f2] p-1 w-full flex items-center rounded-md'>
      <Image src={home1}
        alt="App background"
        className="!h-[130px] !w-[140px] rounded-md"
        layout="responsive"/>
    </div>
  )
}

export default PropertyCard