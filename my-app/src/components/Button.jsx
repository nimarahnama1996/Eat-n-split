import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <div>
        <button className="button"  onClick={onClick}>
          {children}
        </button>
    </div>
  )
}

export default Button