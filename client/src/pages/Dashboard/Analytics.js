import React, { useEffect, useState } from 'react'
import Header from '../../components/shared/Layout/Header'
import API from './../../services/API';
import moment from 'moment';

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  // below colors we're using from a website called colors palatte to copy its hex-code
  const colors = ["#96B6C5","#ADC4CE","#EEE0C9","#F1F0E8","#9ED2BE","#A084E8","#8BE8E5","#D5FFE4"]
  // GET BLOOD GROUP DATA
  const getBloodGroupData = async () => {
    try{
      const { data } = await API.get('/analytics/bloodGroups-data');
      if(data?.success){
        setData(data?.bloodGroupData)
        // console.log(data)
      }
    } catch(error){
      console.log(error)
    }
  };

  // lifecycle method
  useEffect(()=> {
    getBloodGroupData();
  },[]);

  // get function
  const getBloodRecords = async () => {
    try{
      const {data} = await API.get('inventory/get-recent-inventory')
      if(data?.success) {
        setInventoryData(data?.inventory)
        // console.log(data);
      }
    } catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getBloodRecords();
  },[])


  return (
    <>
    <Header />
    <div className="d-flex flex-row flex-wrap">
      {data?.map((record,i)=> (
        // this i is actually index of each record 
        <div className="card m-2 p-1"
        key = {i}
        style={{width: '18rem',backgroundColor:`${colors[i]}`}}>
  <div className="card-body">
    <h1 className="card-title bg=light text-dark text-center mb-3">{record.bloodGroup}</h1>
    {/* here order of blood group can change since it is async data so those which load earlier can get shown earlier  */}

    <p className="card-text">
      Total In: <b>{record.totalIn}</b> (mL)
    </p>
    <p className="card-text">
      Total Out: <b>{record.totalOut}</b> (mL)
    </p>
  </div>
  <div className="card-footer text-light bg-dark text-center">
    Total Available : <b>{record.availableBlood}</b>
  </div>
</div>

      ))}
    </div>
    <div className="container my-3">
      <h1 className="my-3">Recent Blood Transactions</h1>
    <table className="table container" >
  <thead>
    <tr>
      <th scope="col">Blood Group</th>
      <th scope="col">Inventory Type</th>
      <th scope="col">Quantity</th>
      <th scope="col">Donar Email</th>
      <th scope="col">Time & Date</th>
    </tr>
  </thead>
  <tbody>
    {inventoryData?.map((record) => (
      <tr key = {record._id}>
      <td>{record.bloodGroup}</td>
      <td>{record.inventoryType}</td>
      <td>{record.quantity}</td>
      <td>{record.email}</td>
      <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td> 
      {/* this createdAt is used with the help of timestamps */}
    </tr>
    ))}
    
  </tbody>
</table>
    </div>
    </>
  )
}

export default Analytics