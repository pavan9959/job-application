import React,{useState} from "react" 
import axios from "axios"
import validator from 'validator'



const Form=(props)=>{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [number,setnumber]=useState("")
    const [job,setjob]=useState("")
    const [skills,setskills]=useState("")

    const handelName=(e)=>{
        setname(e.target.value)
    }

    const handelemail=(e)=>{
        setemail(e.target.value)
    }


    const handelnumber=(e)=>{
        setnumber(e.target.value)
    }

    const handeljob=(e)=>{
        setjob(e.target.value)
    }

    const handelskill=(e)=>{
        setskills(e.target.value)
    }

    const handelSubmit=(e)=>{
        console.log("hi")
        e.preventDefault()
        const formdata={name:name,
                        email:email,
                        phone:number,
                        skills:skills,
                        jobTitle:job,
                        experience:"2 years"
                        }
        
        axios.post("http://dct-application-form.herokuapp.com/users/application-form",formdata)
                    .then((response)=>{
                        console.log(response.data)
                    })
        }


    return <div style={{textAlign:"center"}} >
                <h3>Apply for job</h3>
                <form  onSubmit={handelSubmit}>
                        <label>Full Name</label><input type="text" value={name} onChange={handelName}/><br/>
                        {name=="" && <p style={{color:"red"}} >name should'blank</p> }
                        <label>Email address</label><input type="text" value={email} onChange={handelemail} placeholder="example@gmail.com"/><br/>
                        {validator.isEmail(email)==false && <p style={{color:"red"}} >Wrong Email</p> }
                        <label>Contact number</label><input type="text" value={number} onChange={handelnumber} placeholder="9857243618"/><br/>
                        {number=="" && <p style={{color:"red"}} >Number must contain 10 digits</p>}
                        <label>Apply for</label><select value={job} onChange={handeljob} >
                                                        <option value="">---Select---</option>
                                                        <option value="Front-End Developer">Front-end-developer</option>
                                                        <option value="Node.js Developer">Node-js-developer</option>
                                                        <option value="MEAN Stack Developer">Mean-stack-developer</option>
                                                        <option value="FULL Stack Developer">Full-stack-developer</option>
                                                  </select><br/>
                        {job=="" && <p style={{color:"red"}} >choose</p> }
                        <label>Techinical skills</label><input type="text-box" value={skills} onChange={handelskill} /><br/>
                        {skills==""  && <p style={{color:"red"}} >Skills should't be empty </p> }
                        <input type="submit"  />
                </form>
            </div>
}
export default Form