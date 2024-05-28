import React from 'react'

type Props = {
    label:string,
    classNames?:string
}

function Button({label,classNames}: Props) {
  return (
<button className={classNames}>
{label}</button>
   )
}

export default Button