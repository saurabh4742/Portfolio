import AccomplishmentAnimation from '@/Lottie-Component/Accomplishment'
import React from 'react'

const Accomplishments = () => {
  return (
    <div id="accomplishment" className="flex-col bg-primarybackground rounded-t-3xl pt-4 justify-center items-center p-4">
      <p className="text-center text-3xl text-black">Accomplishments</p>
      <AccomplishmentAnimation/>
      <ul className=" text-center text-xl mt-2">
      <li className='my-2'>&#x2022; 3rd Place in Coding at Ebulance 2023</li>
        <li className='my-2'>&#x2022; Participated in Smart India Hackathon 2023</li>
        <li className='my-2'>&#x2022; Qualified for GeekForGeek Hackathon 2024 Office Round</li>
      </ul>
    </div>
  )
}

export default Accomplishments
