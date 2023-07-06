import React, { useState } from 'react'

const NewFormInput2 = ({required,error,label}) => {
    
  return (
    <div className='flex flex-col mt-8 border-4'>
<label htmlFor="">
  {label} 
 </label>
 <input type="text" required={required}/>
 {isErrorActive && <span className='text-red-600'>{error}</span>}
</div>
  )
}

export default NewFormInput2