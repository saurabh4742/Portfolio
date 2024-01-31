import React from 'react'
interface NavTextProps {
    text: string;
  }
const NavText: React.FC<NavTextProps>  = ({text}) => {
  return (
    <div className="transition-all text  my-1  sm:duration-75  duration-75 transform active:border-b-white  hover:border-b-2 sm:hover:border-primary cursor-pointer">{text}</div>
  )
}

export default NavText
