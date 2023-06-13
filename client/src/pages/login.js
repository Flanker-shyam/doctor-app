import React from 'react'
 import '../styles/loginstyle.css';
import{Form,Input,message} from 'antd'
import{Link,useNavigate} from 'react-router-dom';
import axios from 'axios'
// import {useDispatch} from'react-redux'
// import { showLoading,hideLoading } from '../redux/features/alertSlice';

const Login = () => {
  console.log("You reached in login.js")
const navigate=useNavigate()
// const dispatch=useDispatch()
const onfinishHandler=async(values)=>{
  try{
// dispatch(showLoading())
    const res= await axios.post('/api/v1/user/login',values)
  //  dispatch(hideLoading())
    console.log("me after login: ",res.data);
    if(res.data.success){
      console.log(res.data.token);
      localStorage.setItem("token",res.data.token);
      message.success('login successfully');
      console.log("Navigating to home route from login.js");
      navigate('/');
    }
    else{
      message.error(res.data.message);

    }
      }
      catch(error){
        // dispatch (hideLoading())
        console.log(error)
        message.error('something went wrong')
      }
}
  return (
    <>
<div className="form-container">
  <Form layout="vertical" onFinish={onfinishHandler} className="login-form">
  <h2>
      LOG-IN FORM
    </h2>

<Form.Item label="E-mail" name="email">
  <Input type="e-mail" required/>
</Form.Item>
<Form.Item label="Password" name="password">
  <Input type="password" required/>
</Form.Item>
<Link to="/register"className="ms-2">Not a User Register here</Link>
<button className="btn btn-primary" type="submit">LOGIN</button>
  </Form>
</div>
    </>
  );
};
export default Login;
