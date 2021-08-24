import React,{useState,useEffect} from "react" 
import axios from "axios"
import "./Modal.css"



const Node=(props)=>{
    const [toogle,settoogle]=useState(false)
    const [user,setuser]=useState({})
    const {data,update}=props

    const date=(d)=>{
        let result=""
        for(let i=0;i<10;i++){
            result+=d[i]
        }
        return result
    }

    const status=(ele)=>{
        function handel_red(ele){
            axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${ele._id}`,{...ele,"status":"rejected"})
                .then((response)=>{
                    const data1=response.data 
                    update(data1.status)
                })
        }

        function handel_green(ele){
            const st={...ele,status:"short"}
            axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${ele._id}`,{...ele,"status":"shortlisted"})
                .then((response)=>{
                    const data1=response.data
                    update(data1.status)
                })
        }


        if(ele.status=="shortlisted"){
            return <button style={{backgroundColor:"green"}} >Shortlisted</button>
        }
        else if(ele.status=="rejected"){
            return <button style={{backgroundColor:"red"}}>Rejected</button>
        }
        else{
            return (<div><button style={{backgroundColor:"green"}} onClick={()=>{handel_green(ele)}} >Shortlisted</button>
                    <button style={{backgroundColor:"red"}} onClick={()=>{handel_red(ele)}} >Rejected</button></div>)}
    }

    const viewdetails=(user1)=>{
        setuser(user1)
        settoogle(!toogle)
    }

    return <div>

                {toogle && <div className="Modal" >
                                    <div className="overlay" ></div>
                                    <div className="modal-content" >
                                        <h3>{user.name}</h3><hr/>
                                        <p>Email-{user.email}</p>
                                        <p>Skills-HTML5,React,js,css3</p>
                                        <p>Experiance-2years</p>
                                        <button onClick={viewdetails} className="close-modal" >Close</button>
                                    </div>
                            </div>}
                    





                <h2>Node.js developer</h2>
                <p>List of candidates applyed for Node.js job</p>
                <table border="1" >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Techinical skills</th>
                                <th>Experience</th>
                                <th>Applied date</th>
                                <th>View details</th>
                                <th>update status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((ele,i)=>{
                                return <tr key={i}>
                                            <td>{ele.name}</td>
                                            <td>HTML5,React,js,css3</td>
                                            <td>2 years</td>
                                            <td>{date(ele.createdAt)}</td>
                                            <td><button style={{backgroundColor:"lightblue"}} onClick={()=>{viewdetails(ele)}} className="btn-modal">View Details</button></td>
                                            <td>{status(ele)}</td>
                                       </tr>
                            })}
                        </tbody>
                </table>
           </div>
}
export default Node