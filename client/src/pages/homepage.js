import React,{useEffect} from 'react'
 import axios from 'axios'
 import Layout from '../components/layout'

const Homepage = () => {
const getUserData=async()=>{
try{
const res=await axios.post('/api/v1/user/getUserData',{},{
  headers:{
    Authorization:"Bearer "+localStorage.getItem('token'),
  }
})
console.log(res.data);
}
catch(error){
  console.log(error)
}
}
useEffect(()=>{
  getUserData()
},[])

  return (
   <Layout>
    <h1>home page</h1>
   </Layout>
  )
}

export default Homepage
