import React,{useState,useEffect} from "react" 
import axios from "axios"
import Frontend from "./Frontend"
import Node from "./Node"
import Mean from "./Mean"
import Fullstack from"./Fullstack"



const Admin=(props)=>{
    const {handeltoogle}=props
    const [data,setdata]=useState([])
    const [full,setfull]=useState(false)
    const [mean,setmean]=useState(false)
    const [node,setnode]=useState(false)
    const [front,setfront]=useState(false)
    const [tug1,settug1]=useState("")

 
        
    // handeltoogle(true)

    const toogle=(tug)=>{
        settug1(tug)
        let state=["MEAN Stack Developer","FULL Stack Developer","Front-End Developer","Node.js Developer"]
        let state1=[setmean,setfull,setfront,setnode]
        for(let i=0;i<state.length;i++){
            if(state[i]==tug){
                for(let j=0;j<state1.length;j++){
                    if(j==i){state1[j](true)}
                    else{state1[j](false)}
                }
            }
            
        }
        axios.get("http://dct-application-form.herokuapp.com/users/application-forms")
                .then((response)=>{
                    const result=response.data 
                    const data1=result.filter((ele)=>{
                        if(ele.jobTitle==tug){return ele}
                    })
                    setdata(data1)
                })}

    function update(data){ 
        axios.get("http://dct-application-form.herokuapp.com/users/application-forms")
                .then((response)=>{
                    const result=response.data 
                    const data1=result.filter((ele)=>{
                        if(ele.jobTitle==tug1){return ele}
                    })
                    setdata(data1)
                })
    }

    return <div>
                <h1>Admin Dash board</h1>
                <button onClick={()=>{toogle("Front-End Developer")}} >Front-End_developer</button>
                <button onClick={()=>{toogle("Node.js Developer")}}>Node.js-Developer</button>
                <button onClick={()=>{toogle("MEAN Stack Developer")}}>MEAN-Stack-Developer</button>
                <button onClick={()=>{toogle("FULL Stack Developer")}}>Full-Stack-Developer</button>
                {full && <Fullstack data={data} update={update}/>}
                {mean && <Mean data={data} update={update} />}
                {front && <Frontend data={data} update={update} />}
                {node && <Node data={data}  update={update}/>}
            </div>
}
export default Admin