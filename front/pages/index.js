import React from "react"
import data from '../src/data.json'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return(
    <div style={{ marginTop:"40px",fontSize:'40px',width:'100%',height:'66vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
{data.map (post => 
  {
    return (
     <div>
       <div style ={{fontFamily: 'lucida grande',fontSize:'75px',color:' #141823'}}>
       <h1>Welcome to NMAP WEB Version 1.0 </h1>
        </div>
       <br></br>
       <h3> Hostname: {post.hostname}</h3><h3> IP  Adress: {post.IP}</h3><h3> Network Adress: {post.network}</h3>
       <br></br>
       </div>

    )
  })}
            <Button href="http://127.0.0.1:5000 "  size='lg' style={{justifyContent: 'center',alignItems: 'center',marginTop:'20px'}}>
              Go for a specific scan
            </Button>    </div>
  )
}

export default Home