import AddressList from './AddressList';
const tasks = [
  { 
    name: 'Noname',
    tel: '082-345-6789',
    address:'The Cupboard under the Stairs, 4 Privet Drive, Little Whinging, Surrey',
  },
  { 
    name: 'John',
    tel: '081-234-5678',
    address:'The Cupboard under the Stairs, 4 Privet Drive, Little Whinging, Surrey',
  },
  { 
    name: 'Jane',
    tel: '000-000-0000',
    address:'dummmy',
  },
  { 
    name: 'Jane',
    tel: '000-000-0000',
    address:'dummmy',
  },
  { 
    name: 'Jane',
    tel: '000-000-0000',
    address:'dummmy',
  }
]

const Address = ({ name, tel, address}) => {
  return (
    <div className="Detail">
          <div className="header">
            <p>Address</p>
            <button className="address">Add new address</button>
          </div>
          {tasks.map((task) => (
          <AddressList key={task.d} address={task}/>
          ))}
            
    </div>
  )
}

export default Address