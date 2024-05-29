import React from 'react'

type Props = {
    label:string,
    classNames?:string
    onClick?: () => void;

}

function Button({label,classNames,onClick }: Props) {
  return (
<button onClick={onClick} className={classNames}>
{label}</button>
   )
}

export default Button