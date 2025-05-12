import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
  return (
    <div>
        <label htmlFor="">Email </label>
        <br />
        <input type="text" name='email' value={email} onChange={(event) => setEmail(event.target.value) }/>
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="text" name='password' value={pass} onChange={(event) => setPass(event.target.value) }/>
        <br />
        <br />
        <button>Submit</button>

        <div>
            <h4>Email: {email}</h4>
            <h4>Password: {pass}</h4>
        </div>
    </div>
  )
}

export default Login