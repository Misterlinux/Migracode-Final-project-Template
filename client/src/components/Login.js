import React, {useState}  from 'react';
import * as mdb from 'mdb-ui-kit';
import './login.css';
import {Redirect, Route, Link, useHistory } from 'react-router-dom';


function Log(){
    
  let history = useHistory();

  const [inputList, setInputList] = useState(<h1> no message </h1>);

  const [token, setToken] = useState( { } );
  
  const { key } = token
  console.log("this is the key after the function and avaiable variable " +key)


  const [loginCredentials, setLoginCredentials] = useState({
      name: "",
      password: "",
      loggedIn : false
  })

  const handleFunction  =(e)=>{
    setLoginCredentials({...loginCredentials , [e.target.name] : e.target.value})
  }

  const setkey  =(e)=>{
    setToken( {...token , key: e })


    console.log("this is the second key " + e)
    console.log("this is the third key  " + key )
  }

  function test(e){
    e.preventDefault();

    const {name , password} = loginCredentials;

    console.log(loginCredentials)

    console.log("is this working")

    let book ={
        BookId:1,
        Title: "coolBook",
        Author: "Me"
    }

    const sendmethod = {
        method: 'POST', 
        body: JSON.stringify(loginCredentials),
        headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    }
    fetch("http://localhost:5000/mini",sendmethod)
    .then((res) => res.json())
    .then((message) => {
      
      console.log("this is the first key " + message)

      setkey(message)

    })

  }

    return <div>

      <div className="bg-image d-flex justify-content-center align-items-center sfondo text-center">

        <div className="container col-lg-7 formulario">
          Log In 

        <form onSubmit={test}>

        <div class="form-outline mb-2 mt-3 text-start">
          Name    
          <label class="form-label border border-secondary mx-4 w-75 " for="form1Example1" >
          
            <input type="text" id="form1Example1" class="form-control"  
                   name="name" value={loginCredentials.name} onChange={handleFunction} placeholder="name"/>
          </label>

        </div>

        <div class="form-outline mb-1 text-start">
          Password
          <label class="form-label border border-secondary mx-2 w-75 " for="form1Example1" >
          
            <input type="password" id="form1Example1" class="form-control" 
                   name="password" value={loginCredentials.password} onChange={handleFunction} placeholder="password"/>
          </label>

        </div>

          <button onClick={test} className="signup">Sign up</ button>

        </form>
          
        <button onClick={test} className="signup">Sign up</ button>

        </div>
      </div>

    </div>
}

export default Log;