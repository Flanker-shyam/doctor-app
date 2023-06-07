import React from "react";
import "../styles/registerstyle.css"
import{Form,Input, message } from "antd"
import{useNavigate} from"react-router-dom"
import axios from 'axios'
import {Link} from "react-router-dom"
import {useDispatch} from'react-redux'
import { showLoading,hideLoading } from '../redux/features/alertSlice';

const Register=()=>{
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const onFinishHandler=async(values)=>{
   try{
    dispatch(showLoading())
const res=await axios.post('api/v1/user/register',values)
dispatch(hideLoading())
if(res.data.success){
  message.success('register succesfully')
  navigate('/login')
}
else{
  message.error(res.data.message);
}
   }
   catch(error){
    dispatch(hideLoading())
    console.log(error)
    message.error('something went wrong')
   }
  }
  return(
<>
<div className="form-container">
<Form  layout="vertical" onFinish={onFinishHandler}> 
<h1>Register form</h1>
<Form.Item label="Name" name="name" >
  <Input type="text" required/>
</Form.Item>
<Form.Item label="Email" name="email" >
  <Input type="email" required/>
</Form.Item>
<Form.Item label="Password" name="password" >
  <Input type="password" required/>
</Form.Item>
<Link to="/login">already user login here</Link>
<button className="btn btn-primary" type="submit">Register</button>
</Form>

</div>

</>


  );
};
export default Register;