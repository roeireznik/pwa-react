import React, { useState, ChangeEvent } from "react";
import Input from "./input";
import Button from "./button";
function Register() {
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  
  

  const handleSubmit = () => {
      console.log(email)
      console.log(fullname)
      console.log(password)
      console.log(username)
  }

  return ( 
      <div className="centerflex">
          <h1>Register</h1>
          <Input label="Email" name="email" placeholder="Enter email" type="text" value={email} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} error={false}
          />
          <Input label="Full Name" name="fullname" placeholder="Enter Full name" type="text" value={fullname} 
             onChange={(e: ChangeEvent<HTMLInputElement>) => setFullname(e.target.value)} error={false}
          />
          <Input label="Password" name="password" placeholder="Enter password" type="text" value={password} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} error={false}
          />
          <Input label="User Name" name="username" placeholder="Enter username" type="text" value={username} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} error={false}
          />
        
          <Button buttonClass={'button'} value="Register" type="button" onClick={handleSubmit}/>
          <div className="spaceItems">
              <Button buttonClass={'smbutton'} value="Google" type="button" />
              <Button buttonClass={'smbutton'} value="Facebook" type="button" />
          </div>
      </div>
   );
}

export default Register;