import React from 'react'
import "../css/prop.css"
const Card = ({arr}) => {
  return (
    <div className="card">
                <div className="heading8">{arr.Title}</div>
                <p>{arr.data}</p>
                <div className="lastline"></div>
              </div>
  )
}

export default Card