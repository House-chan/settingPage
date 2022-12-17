import React from 'react'

const card = ({card}) => {
     // console.log('../images/' + String(card.type) + '.png')
  return (
     <div className="card">

     <div className="list">
         <div className="detail">
         {/* <img src={require('../images/' + String(card.type) + '.png')}></img> */}
          <img src={require('../images/MasterCard.png')}></img>
          <p>{card.type}</p>
          <p>{"**** **** ****".concat((card.num).substring(14))}</p>
         </div>
         <button>Default</button>
     </div>
   </div>
  )
}

export default card