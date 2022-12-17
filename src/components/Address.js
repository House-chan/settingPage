import React from 'react'
import AddressList from './AddressList';
import Popup from 'reactjs-popup';
const tasks = [
  { 
    name: 'Noname',
    tel: '082-345-6789',
    address:'The Cupboard under the Stairs, 4 Privet Drive, Little Whinging, Surrey',
    default:'default'
  },
  { 
    name: 'John',
    tel: '081-234-5678',
    address:'The Cupboard under the Stairs, 4 Privet Drive, Little Whinging, Surrey',
    default:'set as default'
  },
  { 
    name: 'Jane',
    tel: '000-000-0000',
    address:'dummmy',
    default:'set as default'
  },
  { 
    name: 'Jane',
    tel: '000-000-0000',
    address:'dummmy',
    default:'set as default'
  },
  { 
    name: 'Jane',
    tel: '000-000-0000',
    address:'dummmy',
    default:'set as default'
  }
]

const Address = ({ name, tel, address}) => {
  return (
    <div className="Detail">
          <div className="header">
            <p>Address</p>
            <Popup trigger={
              <button className="address">Add new address</button> 
            } popup>
              <div className="popup">
                <h1>My Popup</h1>
              </div>
            </Popup>
          </div>
          {tasks.map((task) => (
          <AddressList address={task}/>
          ))}
            
    </div>
  )
}

export default Address