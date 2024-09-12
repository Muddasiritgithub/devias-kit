import React,{ useState } from 'react';
import Customer from '../../../src/Components/Customer/index'
 
const index = () => {
  const [data, setData] = useState('');
  const handleData = (childData) => {
    setData(childData);
  };

  return (
    <div>
       <h1>Data from Child: {data}</h1>
       <Customer sendData={handleData} />
     </div>
  )
}

export default index
