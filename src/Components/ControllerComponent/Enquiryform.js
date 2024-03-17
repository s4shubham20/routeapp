import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Include/Header'
import 'react-toastify/dist/ReactToastify.css';

export default function Enquiryform() {

    let [formData , setFormData]  = useState({
        name:'',
        email:'',
        password:'',
        message:'',
        index:'',
    });
    let [storeData , setStoreData] = useState([]);

    const inputValHandler = (evt) => {
        let oldData = {...formData};
        oldData[evt.target.name] = evt.target.value;
        setFormData(oldData)
    }

    const formSubmitHandler = (evt) => {
        evt.preventDefault();
        // console.log(formData);
        let addData = {
            name:formData.name,
            email:formData.email,
            password:formData.password,
            message:formData.message,
        }
        let checkFilter = storeData.filter((val, i) =>  val.email == formData.email && i != formData.index);
        if(checkFilter.length > 0){
            toast.error('This email is already exist...');
            return;
        }
        if(formData.index !== ''){
            let editIndex = formData.index;
            let oldData = storeData;
            oldData[editIndex]['name'] = formData.name;
            oldData[editIndex]['email'] = formData.email;
            oldData[editIndex]['password'] = formData.password;
            oldData[editIndex]['message'] = formData.message;
            setStoreData(oldData);
            toast.info('The record has been successfully updated...');
            setFormData({
                name:'',
                email:'',
                password:'',
                message:'',
                index:''
            });
            return;
        }
        let oldData = [...storeData, addData];
        setStoreData(oldData);
        toast.success('Data has been successfully created!');
        setFormData({
            name:'',
            email:'',
            password:'',
            message:'',
            index:'',
        });
    }
        
    const deleteHandler = (index) => {
        let deleteData = [...storeData]
        deleteData.splice(index,1)
        // storeData.filter((item, i) => i != index);
        toast.error('Data has been successfully deleted!');
        setStoreData(deleteData);
    }

    const editHander = (index) => {
        let editData = storeData.filter((v, i) => i === index)[0];
        editData['index'] = index;
        setFormData(editData);
    }

    let table = storeData.map((val, i) => {
        return <Table key={i} val={val} index={i} deletebtn={() => deleteHandler(i)} editrow={() => editHander(i) }/>
    });
  return (
    <div>
        <Header/>
        <h1>Controller Component Enquiryform {storeData.length}</h1>
        <div className='row'>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label>Name</label>
                    <input type='text' onChange={inputValHandler} name='name' placeholder='Enter your name' value={formData.name}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' onChange={inputValHandler} name='email' placeholder='Enter your email' value={formData.email}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' onChange={inputValHandler} name='password' placeholder='Enter password email' value={formData.password} autoComplete='off'/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea name='message' onChange={inputValHandler} placeholder='Enter your message here!' value={formData.message}></textarea>
                </div>
                <button className={`btn ${formData.index !== "" ? "btn-info":" btn-danger"}`}>{formData.index  !== '' ? "Update":"Save"}</button>
            </form>
            <ToastContainer />
            <div className='table'>
                <table border={'1px'} style={{ 
                    borderCollapse: 'collapse',
                 }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        table.length > 0 ? table :
                        <tr style={{ textAlign:'center' }}>
                            <td colSpan={6}>No Record Found</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

let Table = ({val, index, deletebtn, editrow}) => {
    return(
        <tr>
            <td>{index+1}</td>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.password}</td>
            <td>{val.message}</td>
            <td>
                <button className='btn btn-info' onClick={editrow}>Edit</button>
                <button className='btn btn-danger' onClick={deletebtn}>Delete</button>
            </td>
        </tr>
    )
}
