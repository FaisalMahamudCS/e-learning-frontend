import React from 'react'
import { CiSearch } from 'react-icons/ci'

type Props = {
    placeholder?:string
}

function Searchbar({placeholder}: Props) {
  return (
    <div className='flex  '>
<input type="text" style={{width:'600px',height:'40px',marginTop:'13px',marginBottom:'12px',border:'1px solid rgb(51, 65, 85)',borderRadius:'8px'}} className='!h-[40px] !w-[622px] outline-none border slate-400 rounded-sm !pl-4 py-5 ' placeholder={placeholder}/>
{/* <CiSearch className='pl-[-10px]'/> */}

</div>

   )
}

export default Searchbar