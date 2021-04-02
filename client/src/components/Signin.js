import React from 'react';
import * as mdb from 'mdb-ui-kit';
import './signin.css';


function Sign(){

  
    
    return <div>

    <div className="bg-image d-flex justify-content-center align-items-center sfondo text-center">

      <div className="container col-lg-7 formulario">
        Sign in
      <form>

      <div class="row mb-1 ">

        <div class="col-lg-6 col-12 form-outline mb-4 text-start ">

          Name
          <label class="form-label border border-secondary my-1 mx-2 w-75" for="form1Example1" >
          
            <input type="text" id="form1Example1" class="form-control " />
          </label>

        </div>

      <div class="col-lg-6 col-12 form-outline mb-4 text-start ">

        Surname
        <label class="form-label border border-secondary my-1 mx-1 w-75" for="form1Example1" >
        
          <input type="text" id="form1Example1" class="form-control" />
        </label>

      </div>

      </div>

      <div class="form-outline mb-2 text-start">
        Email
        <label class="form-label border border-secondary mx-4 w-75 " for="form1Example1" >
        
          <input type="email" id="form1Example1" class="form-control" />
        </label>

      </div>

      <div class="form-outline mb-1 text-start">
        Password
        <label class="form-label border border-secondary mx-2 w-75 " for="form1Example1" >
        
          <input type="password" id="form1Example1" class="form-control" />
        </label>

      </div>


<input type="submit" value="Submit" />

      </form>
        
      </div>
    </div>

  </div>
}

export default Sign;