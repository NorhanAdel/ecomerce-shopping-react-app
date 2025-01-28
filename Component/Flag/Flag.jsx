import React,{useState,useEffect} from 'react'
import './Flag.scss'
export const Flag = () => {
    const apiUrl = 'https://flagcdn.com';
    const [flag,setflag]= useState([])
    useEffect(() => {
    fetch(apiUrl).then((res)=>res.json()).then((flag)=> setflag(flag))
},[])
  return (
      <div className='_flag_wrapper'>
          <div className='flag_container _container'>
              <h1>Suppliers by region</h1>
              {flag.map((item) => (
                  <div>
                      
                  </div>
              ))}
    </div>
    </div>
  )
}
