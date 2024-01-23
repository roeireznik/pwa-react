import React, { useState, ChangeEvent } from "react";
import Input from "./input";
import Button from "./button";
function Login() {
  const [name, setName] = useState('')
  
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = () => {
      console.log(name)
  }

  return ( 
      <div className="centerflex">
          <h1>Login</h1>
          <Input label="Email" name="email" placeholder="Enter your email here" type="text" value={name} onChange={handleNameChange} error={false}/>
          <Input label="Password" name="password" placeholder="Enter your password here" type="text" value={name} onChange={handleNameChange} error={false}/>
          <Button buttonClass={'button'} value="Log In" type="button" onClick={handleSubmit}/>
          <div className="spaceItems">
              <Button buttonClass={'smbutton'} value="Google" type="button" />
              <Button buttonClass={'smbutton'} value="Facebook" type="button" />
          </div>
      </div>
  );
}

export default Login;