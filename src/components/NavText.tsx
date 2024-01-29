import React from 'react'
interface NavTextProps {
    text: string;
  }
const NavText: React.FC<NavTextProps>  = ({text}) => {
  return (
    <div className="transition-all text duration-300 hover:border-b-2 hover:border-primary cursor-pointer">{text}</div>
  )
}

export default NavText
