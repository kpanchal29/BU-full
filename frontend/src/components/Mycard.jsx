import React from 'react'

const Mycard = (props) => {
  return (
    <div className="flex sm:flex-col gap-6 items-center justify-center">
        <div >{props.description}</div>
        <div className="text-2xl">{props.name}</div>
        <div>{props.occupation}</div>
        </div>
  )
}

export default Mycard