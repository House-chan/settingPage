import React from 'react'
import PromotionList from './PromotionList'
import PromotionPopup from '../Popup/PromotionPopup'
import {useState} from "react"

const Promotion = () => {
     const promotion = [
          {
               promotion:"50% off",
               requirement:"Min spend 90.-",
               expire:"Expire 2022-12-31",
               img:"box",
          },
          {
               promotion:"Free Shipping",
               requirement:"No min spend",
               expire:"Expire 2022-12-31",
               img:"delivery",
          },
          {
               promotion:"Free Shipping",
               requirement:"No min spend",
               expire:"Expire 2022-12-31",
               img:"delivery",
          },
          {
               promotion:"20.- off",
               requirement:"Min spend 90.-",
               expire:"Expire 2022-12-31",
               img:"box",
          },
     ]
     const[popup, setpopup] = useState(false)

  return (
     <div className="Detail">
          <PromotionPopup trigger={popup} setTrigger={setpopup} promotion={promotion[1]}/>
          <div className="header">
               <p>Promotion</p>
               <button className="addPromotion" onClick={() => setpopup(true)}>+ Add Promotion</button>
          </div>
          <hr></hr>
          <div className="promotion">
               {promotion.map((promotion) => (
               <PromotionList promotion={promotion}/>
               ))}
          </div>
     </div>
  )
}

export default Promotion
