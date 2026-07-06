import React, { useState } from 'react'
import './addUser.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const AddUser = () => {
    const users={
        name:"",
        email:"",
        address:""
    };

    const [user, setUser] = useState(users);
    const navigate=useNavigate();

    //function for the changes in the input field
     const inputHandler=(e)=>{
        const{name,value}=e.target
        console.log(name,value)
        setUser({...user,[name]:value});
     }

     //for the sending the data into the db
     const submitFrom=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/user",user)
        .then((response)=>{
           // console.log("user Created Successfully")
           toast.success(response.data.message,{position:'top-center'}); 
           navigate('/')
        })

        .catch((error)=>{
                console.log(error)
        })

        
     }
     
  return (
    <div className='addUser'>
        <Link to={'/'} type="button" className="btn btn-secondary"><i className="fa-solid fa-backward"></i>  Back</Link>

      <h3>Add New User</h3>
       
       <form className='addUserForm' onSubmit={submitFrom}>
        <div className='inputGroup'>
             <label htmlFor='name'>Name:</label>
             <input type='text' 
             id="name"
             onChange={inputHandler}
             name='name'
             autoComplete='off'
             placeholder='Enter ur name'></input>
        </div>
         <div className='inputGroup'>
             <label htmlFor='email'>E-mail:</label>
             <input type='text' 
             id="email"
             onChange={inputHandler}
             name='email'
             autoComplete='off'
             placeholder='Enter ur email'></input>
        </div>
         <div className='inputGroup'>
             <label htmlFor='address'>Address:</label>
             <input type='text' 
             id="address"
             onChange={inputHandler}
             name='address'
             autoComplete='off'
             placeholder='Enter ur address'></input>
        </div>
        <div className='inputGroup'>
            <button type="submit" className="btn btn-primary">Submit</button>

        </div>
       </form>
    </div>
  )
}

export default AddUser
