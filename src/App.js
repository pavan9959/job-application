import React,{useState} from "react" 
import { Route,Link,withRouter } from "react-router-dom"
import Form from "./Form"
import Admin from "./Admin"


const App=(props)=>{
  const [toogle,settoogle]=useState(false)

  const handeltoogle=(t)=>{
        settoogle(!toogle)
  }
  
  return <div>
              <div style={{textAlign:"center"}} >
              
                  {toogle==false && <div><Link to="/Form/" >Apply for job</Link><br/>
                                        <Link to="/Admin/" >Admin</Link></div>}
              </div>

              <Route path="/Form/" exact={true} component={Form}/>
              <Route path="/Admin/" exact={true} component={()=>{return <Admin handeltoogle={handeltoogle} />}} />
          </div>
}
export default withRouter(App) 