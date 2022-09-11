import { useState } from "react";
import "./styles.css";

export default function App() {
  const [track,setTrack] = useState(0)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  const validateEmail = ()=>{
    if(email.trim()){
      setTrack(1)
    }else{
      console.log("Please add Email Address")
    }
    
  }

  const validatePassword = ()=>{
if(password.trim()){
  console.log("Suceess")
}else{
  console.log("Please add your password")
}
  }
  
  
  return (
    <div className="App">
      {track ===0 ?<section>
      <label htmlFor="email">Email:</label>
      <input 
      type="email"
       id="email" 
       value={email}
       onChange={(e)=> setEmail(e.target.value)}
       />
       <button onClick={validateEmail}>Next</button>
    </section> : <section>
    <label htmlFor="email">PassWord:</label>
    <input 
    type="password"
     id="password" 
     value={password}
     onChange={(e)=> setPassword(e.target.value)}
     />
     <button onClick={()=>setTrack(0)}>Change Emil</button>
     <button onClick={validatePassword}>Submit</button>
  </section>  }
    </div>
  );
}
