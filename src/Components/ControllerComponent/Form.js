import React, { useState } from 'react'
import Header from '../Include/Header'

export default function Form() {
    let [name ,setName] = useState('');
    let [password ,setPassword] = useState('');

    const formSubmitHandler = (evt) => {
        evt.preventDefault();
    }
  return (
    <>
        <Header/>
        <h1>Controller Component Form</h1>
        <div className='row'>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label>Name</label>
                    <input type='text' onChange={(evt) => setName(evt.target.value)} name='name' placeholder='Enter your name' value={name}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' onChange={(evt) => setPassword(evt.target.value)} name='password' placeholder='Enter your password' value={password}/>
                </div>
                <button>Login</button>
            </form>
        </div>
    </>
  )
}
