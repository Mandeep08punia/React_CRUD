import React,{useState} from 'react'

function AddUser() {
    const [user,setuser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })
    return (
        <div className="container">
        <form>
            <div className="form-group">
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your Name "/>

<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Email</label>
  <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Enter your Email"/>
</div>
</div>
</form>
</div>
        
    )
}

export default AddUser
