import React from 'react'
import "../css/prop.css"
import { arr } from '../data'
import Card from './Card'
const Prop = () => {
    
  return (
    <div className="cards">
      <div id="xyz" className="heading4">Sponsorship <span>Proposal</span></div>
      <div className="flex1">
              <Card arr={arr[0]} ></Card>
              <Card arr={arr[1]}></Card>
              <Card arr={arr[2]}></Card>
        </div>
        <div className="flex2">
            <Card arr={arr[3]}></Card>
            <Card arr={arr[4]}></Card>
        </div>
    </div>
  )
}

export default Prop