import React from 'react'

type Props = {
    label:string
}

function Button({label}: Props) {
  return (
<button className="bg-[#2563EB] w-[255px] h-[51px] text-white">
{label}</button>
   )
}

export default Button