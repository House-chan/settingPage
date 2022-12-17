import React from 'react'

const bank = ({bank}) => {
  return (
    <div className="bank">
      <div className="list">
          <div className="detail">
            {/* <img src={require('../images/' + bank.bank + '.png')}></img> */}
            <p>{bank.bank}</p>
            <p>{"**** **** ****".concat((bank.num).substring(14))}</p>
            <p>{bank.name}</p>
          </div>
          <button>Default</button>
      </div>
    </div>
  )
}

export default bank
