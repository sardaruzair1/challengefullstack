import { Button } from "react-bootstrap"
import React , {useState} from "react"
function Register(){
    const [name, setName]=useState("")
    async function signUp(){
        let item = {name}
        console.warn(item);
      let result =  await fetch("http://localhost:8000/api/employee/store",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result = await result.json()
        console.warn("result",result)
    }
    return(
        <div className="col-sm-4 offset-4 border border-primary p-3 mt-5">
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="John Doe..." />
            <br/>
         
            <Button className="btn btn-primary" type="submit" onClick={signUp}>Add Employee</Button>
        </div>
    )
}
export default Register